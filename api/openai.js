// Vercel Serverless Function作为OpenAI API的代理
// 该函数将在Vercel平台上运行，解决跨域问题

// 判断当前是否为生产环境
const isProduction = process.env.NODE_ENV === 'production';

// 定义日志函数，在生产环境中完全不输出
const log = (...args) => {
  if (!isProduction) {
    console.log(...args);
  }
};

// 定义错误日志函数，在生产环境中只输出关键错误信息
const logError = (...args) => {
  if (!isProduction) {
    console.error(...args);
  } else {
    // 生产环境只记录错误消息，不记录详细堆栈
    const errorMessage = args.map(arg => 
      typeof arg === 'object' && arg instanceof Error 
        ? arg.message 
        : String(arg)
    ).join(' ');
    console.error('Error:', errorMessage);
  }
};

export default async function handler(req, res) {
  // 设置CORS头，允许客户端网站访问
  res.setHeader('Access-Control-Allow-Origin', 'https://www.chinesename.us');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Credentials', 'true');

  // 处理OPTIONS请求（预检请求）
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // 只允许POST请求
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // 从环境变量中获取敏感配置
    const API_KEY = process.env.OPENAI_API_KEY;
    const API_URL = process.env.OPENAI_API_URL || 'https://openkey.cloud/v1/chat/completions';
    const MODEL_VERSION = process.env.OPENAI_MODEL_VERSION || 'gpt-4o-mini';

    if (!API_KEY) {
      log('错误: 未配置OPENAI_API_KEY环境变量');
      return res.status(500).json({ error: 'API key not configured' });
    }

    // 从请求体中获取业务参数（明确指定支持的参数）
    const {
      messages,
      temperature,
      max_tokens,
      top_p,
      response_format,
      // 如果需要支持更多参数，在这里添加
      frequency_penalty,
      presence_penalty,
      stop,
      stream
    } = req.body;

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return res.status(400).json({ error: 'Missing or invalid messages parameter' });
    }

    // 后端完全控制请求体的构建，只使用明确支持的业务参数
    const openaiRequestBody = {
      model: MODEL_VERSION, // 完全由后端环境变量控制
      messages: messages,   // 前端传递的对话消息
      temperature: temperature || 0.7,  // 前端可选参数，有默认值
      max_tokens: max_tokens || 1000,   // 前端可选参数，有默认值
      ...(top_p && { top_p }),          // 可选参数
      ...(response_format && { response_format }), // 可选参数
      // 新增的可选参数
      ...(frequency_penalty !== undefined && { frequency_penalty }),
      ...(presence_penalty !== undefined && { presence_penalty }),
      ...(stop && { stop }),
      ...(stream !== undefined && { stream })
    };

    // 记录请求信息（仅在非生产环境中输出）
    log('代理请求到:', API_URL);
    log('使用模型:', openaiRequestBody.model);
    log('消息数量:', messages.length);
    log('温度参数:', openaiRequestBody.temperature);

    // 发送请求到OpenAI API
    const openaiResponse = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`,
      },
      body: JSON.stringify(openaiRequestBody)
    });

    // 检查响应状态
    if (!openaiResponse.ok) {
      const errorData = await openaiResponse.json().catch(() => ({}));
      logError('OpenAI API错误:', openaiResponse.status, errorData);
      return res.status(openaiResponse.status).json({
        error: 'OpenAI API error',
        status: openaiResponse.status,
        details: errorData
      });
    }

    // 获取响应数据
    const data = await openaiResponse.json();

    // 返回OpenAI的响应
    return res.status(200).json(data);
  } catch (error) {
    // 错误日志在生产环境中也需要记录，便于问题排查
    logError('代理请求错误:', error);
    return res.status(500).json({
      error: 'Proxy request failed',
      message: isProduction ? 'Internal server error' : error.message
    });
  }
} 