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
    // 从请求体中获取必要参数
    const { url, headers, body } = req.body;
    
    if (!url || !body) {
      return res.status(400).json({ error: 'Missing required parameters' });
    }

    // 记录请求信息（仅在非生产环境中输出）
    log('代理请求到:', url);
    log('请求体:', JSON.stringify(body).slice(0, 200) + '...');

    // 发送请求到OpenAI API
    const openaiResponse = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': headers.Authorization || `Bearer ${process.env.OPENAI_API_KEY}`,
        // 可以添加其他必要的头部
      },
      body: JSON.stringify(body)
    });

    // 获取响应数据
    const data = await openaiResponse.json();
    
    // 返回OpenAI的响应
    return res.status(openaiResponse.status).json(data);
  } catch (error) {
    // 错误日志在生产环境中也需要记录，便于问题排查
    logError('代理请求错误:', error);
    return res.status(500).json({ error: 'Proxy request failed', message: error.message });
  }
} 