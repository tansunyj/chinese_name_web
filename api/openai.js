// Vercel Serverless Function作为OpenAI API的代理
// 该函数将在Vercel平台上运行，解决跨域问题

// 导入完整的提示词模板
import {
  nameGenerationPrompts,
  nameTranslationPrompts,
  nameAnalysisPrompts,
  zodiacAnalysisPrompts,
  chineseToEnglishPrompts,
  characterAnalysisPrompts,
  generalTranslationPrompts
} from './promptTemplates.js';

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

    // 增强的环境变量检查和调试信息
    log('🔧 环境变量检查:');
    log('API_KEY存在:', !!API_KEY);
    log('API_URL:', API_URL);
    log('MODEL_VERSION:', MODEL_VERSION);
    log('请求体:', JSON.stringify(req.body, null, 2));

    if (!API_KEY) {
      logError('❌ 错误: 未配置OPENAI_API_KEY环境变量');
      return res.status(500).json({
        error: 'API key not configured',
        debug: isProduction ? undefined : 'OPENAI_API_KEY environment variable is missing'
      });
    }

    // 🛡️ 安全检查：严格验证请求体，拒绝包含敏感参数的请求
    const securityCheck = validateRequestSecurity(req.body);
    if (!securityCheck.isValid) {
      logError('🚨 安全威胁检测:', securityCheck.reason);
      logError('🚨 可疑请求体:', JSON.stringify(req.body, null, 2));
      logError('🚨 请求来源IP:', req.headers['x-forwarded-for'] || req.connection.remoteAddress);

      return res.status(403).json({
        error: 'Request rejected for security reasons',
        message: 'Invalid parameters detected',
        code: 'SECURITY_VIOLATION'
      });
    }

    // 从请求体中获取业务类型和参数
    const { type, ...businessParams } = req.body;

    if (!type) {
      return res.status(400).json({ error: 'Missing request type parameter' });
    }

    // 根据业务类型构建不同的OpenAI请求体
    log('🔨 开始构建OpenAI请求，类型:', type);
    log('🔨 业务参数:', JSON.stringify(businessParams, null, 2));

    const openaiRequestBody = buildRequestByType(type, businessParams, MODEL_VERSION);

    if (!openaiRequestBody) {
      logError('❌ 构建请求失败，不支持的请求类型:', type);
      return res.status(400).json({
        error: `Unsupported request type: ${type}`,
        debug: isProduction ? undefined : `Available types: nameGeneration, nameAnalysis, zodiacAnalysis, characterAnalysis, nameTranslation, chineseToEnglish`
      });
    }

    // 记录请求信息
    log('✅ 请求构建成功');
    log('🚀 代理请求到:', API_URL);
    log('🤖 使用模型:', openaiRequestBody.model);
    log('💬 消息数量:', openaiRequestBody.messages?.length || 0);
    log('🌡️ 温度参数:', openaiRequestBody.temperature);
    log('📝 完整请求体:', JSON.stringify(openaiRequestBody, null, 2));

    // 发送请求到OpenAI API
    log('📡 发送请求到OpenAI API...');

    const openaiResponse = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`,
      },
      body: JSON.stringify(openaiRequestBody)
    });

    log('📡 OpenAI响应状态:', openaiResponse.status);
    log('📡 OpenAI响应头:', JSON.stringify([...openaiResponse.headers.entries()], null, 2));

    // 检查响应状态
    if (!openaiResponse.ok) {
      const errorText = await openaiResponse.text();
      let errorData = {};

      try {
        errorData = JSON.parse(errorText);
      } catch (e) {
        errorData = { message: errorText };
      }

      logError('❌ OpenAI API错误:', openaiResponse.status, openaiResponse.statusText);
      logError('❌ 错误详情:', errorData);

      return res.status(openaiResponse.status).json({
        error: 'OpenAI API error',
        status: openaiResponse.status,
        statusText: openaiResponse.statusText,
        details: errorData,
        debug: isProduction ? undefined : {
          url: API_URL,
          requestBody: openaiRequestBody
        }
      });
    }

    // 获取响应数据
    const responseText = await openaiResponse.text();
    log('📡 OpenAI原始响应长度:', responseText.length);
    log('📡 OpenAI原始响应前500字符:', responseText.substring(0, 500));

    let data;
    try {
      data = JSON.parse(responseText);
      log('✅ OpenAI响应解析成功');
    } catch (parseError) {
      logError('❌ OpenAI响应JSON解析失败:', parseError);
      logError('❌ 原始响应内容:', responseText);

      return res.status(500).json({
        error: 'Failed to parse OpenAI response',
        message: parseError.message,
        debug: isProduction ? undefined : {
          responseText: responseText.substring(0, 1000)
        }
      });
    }

    // 返回OpenAI的响应
    log('🎉 请求处理成功，返回数据');
    return res.status(200).json(data);
  } catch (error) {
    // 错误日志在生产环境中也需要记录，便于问题排查
    logError('❌ 代理请求错误:', error);
    logError('❌ 错误堆栈:', error.stack);
    logError('❌ 请求体:', JSON.stringify(req.body, null, 2));

    return res.status(500).json({
      error: 'Proxy request failed',
      message: isProduction ? 'Internal server error' : error.message,
      stack: isProduction ? undefined : error.stack,
      requestBody: isProduction ? undefined : req.body
    });
  }
}

/**
 * 根据业务类型构建不同的OpenAI请求体
 * @param {string} type - 业务类型
 * @param {object} params - 业务参数
 * @param {string} modelVersion - 模型版本
 * @returns {object|null} - OpenAI请求体或null
 */
function buildRequestByType(type, params, modelVersion) {
  const baseRequest = {
    model: modelVersion
  };

  switch (type) {
    case 'nameGeneration':
      return buildNameGenerationRequest(baseRequest, params);

    case 'nameAnalysis':
      return buildNameAnalysisRequest(baseRequest, params);

    case 'zodiacAnalysis':
      return buildZodiacAnalysisRequest(baseRequest, params);

    case 'characterAnalysis':
      return buildCharacterAnalysisRequest(baseRequest, params);

    case 'nameTranslation':
      return buildNameTranslationRequest(baseRequest, params);

    case 'chineseToEnglish':
      return buildChineseToEnglishRequest(baseRequest, params);

    case 'translation':
      return buildTranslationRequest(baseRequest, params);

    case 'custom':
      return buildCustomRequest(baseRequest, params);

    default:
      return null;
  }
}

/**
 * 🛡️ 安全验证函数：检查请求体是否包含敏感参数
 */
function validateRequestSecurity(requestBody) {
  // 允许的业务参数列表 - 只有这些参数是合法的
  const allowedBusinessParams = [
    // 业务类型
    'type',

    // 名字生成相关参数
    'inputName', 'gender', 'characteristics', 'desiredMeaning', 'birthDateTime',

    // 名字翻译相关参数
    'name', 'sourceLanguage', 'targetLanguage', 'method',

    // 通用业务参数
    'locale', 'language'
  ];

  // 危险参数列表 - 这些参数绝对不允许出现
  const dangerousParams = [
    // OpenAI API相关敏感参数
    'api_key', 'apiKey', 'api-key', 'openai_api_key', 'openaiApiKey',
    'authorization', 'Authorization', 'bearer', 'Bearer',
    'token', 'access_token', 'accessToken', 'auth_token', 'authToken',

    // 模型相关参数 - 防止指定昂贵模型
    'model', 'Model', 'MODEL', 'engine', 'Engine',

    // Token和成本相关参数
    'max_tokens', 'maxTokens', 'max-tokens', 'maximum_tokens',
    'tokens', 'token_limit', 'tokenLimit',
    'temperature', 'Temperature', 'top_p', 'topP', 'top-p',
    'frequency_penalty', 'frequencyPenalty', 'presence_penalty', 'presencePenalty',

    // 系统级参数
    'system', 'System', 'system_prompt', 'systemPrompt', 'system-prompt',
    'messages', 'Messages', 'MESSAGES',
    'prompt', 'Prompt', 'PROMPT', 'user_prompt', 'userPrompt',

    // 响应格式参数
    'response_format', 'responseFormat', 'response-format',
    'format', 'Format', 'output_format', 'outputFormat',

    // 流式响应参数
    'stream', 'Stream', 'streaming', 'Streaming',

    // 其他可能的绕过参数
    'functions', 'function_call', 'functionCall', 'tools', 'tool_choice',
    'logit_bias', 'logitBias', 'logprobs', 'echo', 'stop', 'suffix',
    'best_of', 'bestOf', 'n', 'N', 'user', 'User'
  ];

  // 递归检查对象的所有键和值
  function checkObjectRecursively(obj, path = '') {
    if (typeof obj !== 'object' || obj === null) {
      return null;
    }

    for (const [key, value] of Object.entries(obj)) {
      const currentPath = path ? `${path}.${key}` : key;

      // 检查键名是否为危险参数
      const lowerKey = key.toLowerCase();
      for (const dangerousParam of dangerousParams) {
        if (lowerKey === dangerousParam.toLowerCase()) {
          return {
            isValid: false,
            reason: `Dangerous parameter detected in key: ${currentPath}`,
            parameter: key,
            value: typeof value === 'string' ? value.substring(0, 100) : value
          };
        }
      }

      // 检查字符串值是否包含危险内容
      if (typeof value === 'string') {
        const lowerValue = value.toLowerCase();

        // 检查是否包含API密钥模式
        if (lowerValue.includes('sk-') ||
            lowerValue.includes('api_key') ||
            lowerValue.includes('bearer ') ||
            lowerValue.includes('authorization:') ||
            /gpt-[0-9]/.test(lowerValue) ||
            lowerValue.includes('claude') ||
            lowerValue.includes('anthropic')) {
          return {
            isValid: false,
            reason: `Suspicious content detected in value: ${currentPath}`,
            parameter: key,
            value: value.substring(0, 100)
          };
        }

        // 检查是否尝试注入系统提示词
        if (lowerValue.includes('system:') ||
            lowerValue.includes('assistant:') ||
            lowerValue.includes('you are') ||
            lowerValue.includes('ignore previous') ||
            lowerValue.includes('forget everything')) {
          return {
            isValid: false,
            reason: `Prompt injection attempt detected: ${currentPath}`,
            parameter: key,
            value: value.substring(0, 100)
          };
        }
      }

      // 递归检查嵌套对象
      if (typeof value === 'object' && value !== null) {
        const nestedCheck = checkObjectRecursively(value, currentPath);
        if (nestedCheck && !nestedCheck.isValid) {
          return nestedCheck;
        }
      }
    }

    return null;
  }

  // 执行安全检查
  const securityIssue = checkObjectRecursively(requestBody);

  if (securityIssue) {
    return securityIssue;
  }

  // 额外检查：确保只包含允许的业务类型
  const allowedTypes = [
    'nameGeneration', 'nameAnalysis', 'zodiacAnalysis',
    'characterAnalysis', 'nameTranslation', 'chineseToEnglish'
  ];

  if (requestBody.type && !allowedTypes.includes(requestBody.type)) {
    return {
      isValid: false,
      reason: `Invalid business type: ${requestBody.type}`,
      parameter: 'type',
      value: requestBody.type
    };
  }

  // 检查请求体大小（防止过大的请求）
  const requestSize = JSON.stringify(requestBody).length;
  if (requestSize > 10000) { // 10KB限制
    return {
      isValid: false,
      reason: `Request body too large: ${requestSize} bytes`,
      parameter: 'body_size',
      value: requestSize
    };
  }

  return { isValid: true };
}

/**
 * 构建名字生成请求 - 根据业务类型完整构建OpenAI请求（生产环境）
 */
function buildNameGenerationRequest(baseRequest, params) {
  const { inputName, gender, characteristics, desiredMeaning, birthDateTime, locale = 'zh' } = params;

  if (!inputName) {
    log('❌ 名字生成请求缺少必需参数: inputName');
    return null;
  }

  log('🎯 构建名字生成请求，参数:', params);

  // 🔒 使用 promptTemplates.js 中的融合系统提示词
  let systemPrompt = nameGenerationPrompts.system;

  // 构建参数对象
  const templateParams = {
    gender: gender === '男' ? 'male' : gender === '女' ? 'female' : 'neutral',
    lastName: inputName,
    characteristics: Array.isArray(characteristics) ? characteristics : [characteristics || '传统'],
    desiredMeaning: desiredMeaning || '',
    birthDateTime: birthDateTime || ''
  };

  // 替换系统提示词中的占位符
  const genderText = templateParams.gender === 'male' ? '男性' : templateParams.gender === 'female' ? '女性' : '中性';
  const characteristicsText = templateParams.characteristics.join('、');
  const zodiac = extractZodiacFromDate(templateParams.birthDateTime) || '未知';
  const lunarDate = extractLunarDate(templateParams.birthDateTime) || '未知';

  systemPrompt = systemPrompt
    .replace(/\{\{GENDER_TEXT\}\}/g, genderText)
    .replace(/\{\{LAST_NAME\}\}/g, templateParams.lastName)
    .replace(/\{\{CHARACTERISTICS\}\}/g, characteristicsText)
    .replace(/\{\{DESIRED_MEANING\}\}/g, templateParams.desiredMeaning)
    .replace(/\{\{ZODIAC\}\}/g, zodiac)
    .replace(/\{\{LUNAR_DATE\}\}/g, lunarDate);

  // 使用简化的用户提示词
  const userPrompt = nameGenerationPrompts.user(templateParams);


  log('✅ 生成中文名字：生成的用户提示词:', userPrompt);
  log('✅ 生成中文名字：生成的系统提示词:', systemPrompt);

  return {
    ...baseRequest,
    messages: [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: userPrompt }
    ],
    temperature: 0.8,
    max_tokens: 1200, // 减少token数量以提高响应速度
    response_format: { type: 'json_object' }
  };
}

/**
 * 构建名字分析请求
 */
function buildNameAnalysisRequest(baseRequest, params) {
  const { name, birthDate, locale = 'zh' } = params;

  if (!name) {
    return null;
  }

  // 🔒 使用 promptTemplates.js 中的系统提示词
  const systemPrompt = nameAnalysisPrompts.system;

  // 🔒 使用 promptTemplates.js 中的用户提示词
  const templateParams = { name, birthDate };
  const userPrompt = locale === 'zh'
    ? nameAnalysisPrompts.zh(templateParams)
    : nameAnalysisPrompts.en(templateParams);

    log('✅ 分析中文名字：生成的用户提示词:', userPrompt);
    log('✅ 分析中文名字：生成的系统提示词:', systemPrompt);

  return {
    ...baseRequest,
    messages: [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: userPrompt }
    ],
    temperature: 0.3,
    max_tokens: 1200,
    response_format: { type: 'json_object' }
  };
}

/**
 * 构建生肖分析请求
 */
function buildZodiacAnalysisRequest(baseRequest, params) {
  const { birthYear, locale = 'zh' } = params;

  if (!birthYear) {
    return null;
  }

  // 🔒 使用 promptTemplates.js 中的提示词
  const systemPrompt = zodiacAnalysisPrompts.system;

  const templateParams = { birthYear };
  const userPrompt = locale === 'zh'
    ? zodiacAnalysisPrompts.zh(templateParams)
    : zodiacAnalysisPrompts.en(templateParams);

    log('✅ 分析生肖：生成的用户提示词:', userPrompt);
    log('✅ 分析生肖：生成的系统提示词:', systemPrompt);

  return {
    ...baseRequest,
    messages: [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: userPrompt }
    ],
    temperature: 0.5,
    max_tokens: 800,
    response_format: { type: 'json_object' }
  };
}

/**
 * 构建汉字分析请求
 */
function buildCharacterAnalysisRequest(baseRequest, params) {
  const { character, locale = 'zh' } = params;

  if (!character) {
    return null;
  }

  // 🔒 使用 promptTemplates.js 中的提示词
  const systemPrompt = characterAnalysisPrompts.system;
  const userPrompt = characterAnalysisPrompts.user(character);

  log('✅ 分析构建汉字：生成的用户提示词:', userPrompt);
  log('✅ 分析构建汉字：生成的系统提示词:', systemPrompt);

  return {
    ...baseRequest,
    messages: [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: userPrompt }
    ],
    temperature: 0.2,
    max_tokens: 1000,
    response_format: { type: 'json_object' }
  };
}

/**
 * 构建翻译请求
 */
function buildTranslationRequest(baseRequest, params) {
  const { text, fromLang = 'auto', toLang = 'zh', locale = 'zh' } = params;

  if (!text) {
    return null;
  }

  // 🔒 使用 promptTemplates.js 中的提示词
  const systemPrompt = generalTranslationPrompts.system;
  const userPrompt = generalTranslationPrompts.user(text, fromLang, toLang);

  log('✅ 分析翻译名字：生成的用户提示词:', userPrompt);
  log('✅ 分析翻译名字：生成的系统提示词:', systemPrompt);

  return {
    ...baseRequest,
    messages: [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: userPrompt }
    ],
    temperature: 0.3,
    max_tokens: 800,
    response_format: { type: 'json_object' }
  };
}

/**
 * 从出生日期提取生肖
 */
function extractZodiacFromDate(birthDateTime) {
  if (!birthDateTime) return '未知';

  try {
    // 简单的生肖计算（基于公历年份）
    const year = parseInt(birthDateTime.match(/(\d{4})/)?.[1]);
    if (!year) return '未知';

    const zodiacs = ['鼠', '牛', '虎', '兔', '龙', '蛇', '马', '羊', '猴', '鸡', '狗', '猪'];
    const zodiacIndex = (year - 1900) % 12;
    return zodiacs[zodiacIndex] || '未知';
  } catch (error) {
    log('提取生肖时出错:', error);
    return '未知';
  }
}

/**
 * 从出生日期提取农历日期（简化版）
 */
function extractLunarDate(birthDateTime) {
  if (!birthDateTime) return '未知';

  try {
    // 简化处理，实际项目中应该使用专业的农历转换库
    const match = birthDateTime.match(/(\d{4})[-年](\d{1,2})[-月](\d{1,2})/);
    if (match) {
      const [, year, month, day] = match;
      return `农历${year}年${month}月${day}日`;
    }
    return birthDateTime;
  } catch (error) {
    log('提取农历日期时出错:', error);
    return '未知';
  }
}

/**
 * 从用户消息中提取名字生成参数
 */
function extractNameGenerationParams(userContent) {
  try {
    log('🔍 开始提取名字生成参数，用户内容:', userContent);

    // 初始化参数对象
    const params = {
      gender: 'neutral',
      lastName: '',
      characteristics: ['传统'],
      desiredMeaning: '',
      birthDateTime: ''
    };

    // 提取姓氏 - 匹配多种模式
    const lastNamePatterns = [
      /姓氏[：:]\s*([^\s，,。.]+)/,
      /姓[：:]\s*([^\s，,。.]+)/,
      /Last\s*name[：:]\s*([^\s，,。.]+)/i,
      /Surname[：:]\s*([^\s，,。.]+)/i,
      /为.*?([^\s，,。.]{1,2}).*?用户/,
      /给.*?([^\s，,。.]{1,2}).*?起名/
    ];

    for (const pattern of lastNamePatterns) {
      const match = userContent.match(pattern);
      if (match && match[1]) {
        params.lastName = match[1].trim();
        break;
      }
    }

    // 提取性别
    if (/男性|男|male/i.test(userContent)) {
      params.gender = 'male';
    } else if (/女性|女|female/i.test(userContent)) {
      params.gender = 'female';
    }

    // 提取性格特点
    const characteristicsPatterns = [
      /性格特点[：:]\s*([^。.]+)/,
      /特点[：:]\s*([^。.]+)/,
      /性格[：:]\s*([^。.]+)/,
      /Personality[：:]\s*([^。.]+)/i,
      /traits[：:]\s*([^。.]+)/i
    ];

    for (const pattern of characteristicsPatterns) {
      const match = userContent.match(pattern);
      if (match && match[1]) {
        params.characteristics = match[1].split(/[，,、]/).map(s => s.trim()).filter(s => s);
        break;
      }
    }

    // 提取期望含义
    const meaningPatterns = [
      /期望含义[：:]\s*([^。.]+)/,
      /含义[：:]\s*([^。.]+)/,
      /寓意[：:]\s*([^。.]+)/,
      /Meaning[：:]\s*([^。.]+)/i,
      /希望.*?([^。.]+)/
    ];

    for (const pattern of meaningPatterns) {
      const match = userContent.match(pattern);
      if (match && match[1]) {
        params.desiredMeaning = match[1].trim();
        break;
      }
    }

    // 提取出生信息
    const birthPatterns = [
      /出生[：:]?\s*(\d{4}[-年]\d{1,2}[-月]\d{1,2}[日]?)/,
      /生日[：:]?\s*(\d{4}[-年]\d{1,2}[-月]\d{1,2}[日]?)/,
      /Birth[：:]?\s*(\d{4}[-/]\d{1,2}[-/]\d{1,2})/i,
      /(\d{4}[-年]\d{1,2}[-月]\d{1,2}[日]?)/
    ];

    for (const pattern of birthPatterns) {
      const match = userContent.match(pattern);
      if (match && match[1]) {
        params.birthDateTime = match[1].trim();
        break;
      }
    }

    // 验证是否提取到了关键信息
    if (!params.lastName) {
      log('⚠️ 未能提取到姓氏信息');
      return null;
    }

    log('✅ 成功提取参数:', params);
    return params;

  } catch (error) {
    log('❌ 提取名字生成参数时出错:', error);
    return null;
  }
}

/**
 * 构建自定义请求（智能识别业务类型并使用对应的系统提示词）
 */
function buildCustomRequest(baseRequest, params) {
  // 安全地提取参数，避免解构赋值错误
  const messages = params.messages;
  const temperature = params.temperature;
  const max_tokens = params.max_tokens;
  const top_p = params.top_p;
  const response_format = params.response_format;
  const frequency_penalty = params.frequency_penalty;
  const presence_penalty = params.presence_penalty;
  const stop = params.stop;
  const stream = params.stream;

  log('🔧 buildCustomRequest 被调用，参数:', JSON.stringify(params, null, 2));

  if (!messages || !Array.isArray(messages) || messages.length === 0) {
    log('❌ buildCustomRequest: messages 参数无效或为空');
    return null;
  }

  // 智能识别业务类型并替换系统提示词和用户提示词
  const userMessage = messages.find(msg => msg.role === 'user');
  const detectedType = detectBusinessType(userMessage?.content || '');

  let systemPrompt = messages.find(msg => msg.role === 'system')?.content || '';
  let userPrompt = userMessage?.content || '';

  // 🔍 详细调试日志
  log('✅ 自定义中文名：生成的用户提示词:', userPrompt);
  log('✅ 自定义中文名：生成的系统提示词:', systemPrompt);

  // 根据检测到的业务类型替换提示词 - 🔒 使用 promptTemplates.js 中的完整专业提示词
  if (detectedType === 'nameGeneration') {
    log('🎯 检测到名字生成请求，开始替换为完整的专业提示词');

    // 🔒 强制使用完整的系统提示词（不管原始系统提示词是什么）
    systemPrompt = nameGenerationPrompts.system;

    // 从用户消息中提取参数来构建完整的名字生成提示词
    const extractedParams = extractNameGenerationParams(userPrompt);
    if (extractedParams) {
      // 替换系统提示词中的占位符
      const genderText = extractedParams.gender === 'male' ? '男性' : extractedParams.gender === 'female' ? '女性' : '中性';
      const characteristicsText = extractedParams.characteristics.join('、');
      const zodiac = extractZodiacFromDate(extractedParams.birthDateTime) || '未知';
      const lunarDate = extractLunarDate(extractedParams.birthDateTime) || '未知';

      systemPrompt = systemPrompt
        .replace(/\{\{GENDER_TEXT\}\}/g, genderText)
        .replace(/\{\{LAST_NAME\}\}/g, extractedParams.lastName || '未知')
        .replace(/\{\{CHARACTERISTICS\}\}/g, characteristicsText)
        .replace(/\{\{DESIRED_MEANING\}\}/g, extractedParams.desiredMeaning || '美好寓意')
        .replace(/\{\{ZODIAC\}\}/g, zodiac)
        .replace(/\{\{LUNAR_DATE\}\}/g, lunarDate);

      // 使用简化的用户提示词
      userPrompt = nameGenerationPrompts.user(extractedParams);
      log('✅ 已替换为完整的专业提示词');
      log('📝 提取的参数:', extractedParams);
      log('🔍 替换后的系统提示词长度:', systemPrompt.length);
    } else {
      log('⚠️ 无法提取名字生成参数，但仍使用完整系统提示词');
      // 即使无法提取参数，也要使用完整的系统提示词，只是用默认值替换占位符
      systemPrompt = systemPrompt
        .replace(/\{\{GENDER_TEXT\}\}/g, '用户')
        .replace(/\{\{LAST_NAME\}\}/g, '未知')
        .replace(/\{\{CHARACTERISTICS\}\}/g, '传统')
        .replace(/\{\{DESIRED_MEANING\}\}/g, '美好寓意')
        .replace(/\{\{ZODIAC\}\}/g, '未知')
        .replace(/\{\{LUNAR_DATE\}\}/g, '未知');
    }
  } else if (detectedType === 'nameAnalysis') {
    systemPrompt = nameAnalysisPrompts.system;
    log('🎯 检测到名字分析请求，已替换系统提示词');
  } else if (detectedType === 'zodiacAnalysis') {
    systemPrompt = zodiacAnalysisPrompts.system;
    log('🎯 检测到生肖分析请求，已替换系统提示词');
  } else {
    log('⚠️ 未能识别具体业务类型，使用原始提示词');
  }

  // 构建新的messages数组，替换系统提示词和用户提示词
  const updatedMessages = messages.map(msg => {
    if (msg.role === 'system') {
      return { ...msg, content: systemPrompt };
    } else if (msg.role === 'user' && detectedType === 'nameGeneration') {
      return { ...msg, content: userPrompt };
    }
    return msg;
  });

  return {
    ...baseRequest,
    messages: updatedMessages,
    temperature: temperature || 0.7,
    max_tokens: max_tokens || 1000,
    ...(top_p && { top_p }),
    ...(response_format && { response_format }),
    ...(frequency_penalty !== undefined && { frequency_penalty }),
    ...(presence_penalty !== undefined && { presence_penalty }),
    ...(stop && { stop }),
    ...(stream !== undefined && { stream })
  };
}

/**
 * 构建名字翻译请求（外文名转中文名）- 生产环境
 */
function buildNameTranslationRequest(baseRequest, params) {
  const { name } = params;

  if (!name) {
    log('❌ 名字翻译请求缺少必需参数: name');
    return null;
  }

  log('🎯 构建名字翻译请求，参数:', params);

  // 🔒 使用 promptTemplates.js 中的完整翻译提示词
  const systemPrompt = nameTranslationPrompts.system;

  const userPrompt = nameTranslationPrompts.user.replace('{name}', name);

  log('✅ 外文名字翻译成中文名:生成的用户提示词是:', userPrompt.substring(0, 200) + '...');
  log('✅ 外文名字翻译成中文名:生成的系统提示词是:', systemPrompt);

  return {
    ...baseRequest,
    messages: [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: userPrompt }
    ],
    temperature: 0.8,
    max_tokens: 1500,
    response_format: { type: 'json_object' }
  };
}

/**
 * 构建中文名转英文名请求 - 生产环境
 */
function buildChineseToEnglishRequest(baseRequest, params) {
  const { name } = params;

  if (!name) {
    log('❌ 中文转英文请求缺少必需参数: name');
    return null;
  }

  log('🎯 构建中文转英文请求，参数:', params);

  // 🔒 使用 promptTemplates.js 中的提示词
  const systemPrompt = chineseToEnglishPrompts.system;

  const userPrompt = chineseToEnglishPrompts.user(name);

  log('✅ 中文名翻译成英文名：生成的用户提示词:', userPrompt);
  log('✅ 中文名翻译成英文名：生成的系统提示词:', systemPrompt);

  return {
    ...baseRequest,
    messages: [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: userPrompt }
    ],
    temperature: 0.8,
    max_tokens: 1500,
    response_format: { type: 'json_object' }
  };
}

/**
 * 智能检测业务类型
 */
function detectBusinessType(userContent) {
  if (!userContent) return 'unknown';

  const content = userContent.toLowerCase();

  // 检测名字生成请求
  if (content.includes('create') && content.includes('chinese names') ||
      content.includes('生成') && content.includes('名字') ||
      content.includes('generate') && content.includes('name')) {
    return 'nameGeneration';
  }

  // 检测名字分析请求
  if (content.includes('analyze') && content.includes('name') ||
      content.includes('分析') && content.includes('名字')) {
    return 'nameAnalysis';
  }

  // 检测生肖分析请求
  if (content.includes('zodiac') || content.includes('生肖')) {
    return 'zodiacAnalysis';
  }

  return 'unknown';
}