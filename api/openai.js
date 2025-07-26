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

  // 生产环境使用内联的系统提示词
  const systemPrompt = "你是一位精通中国传统文化和姓名学的专家，擅长根据用户需求创建有文化内涵的中文名字。请根据用户提供的信息，生成具有深度含义和文化背景的中文名字。";

  // 生产环境使用内联的提示词模板
  const genderText = gender === '男' ? '男性' : gender === '女' ? '女性' : '中性';
  const traits = Array.isArray(characteristics) ? characteristics.join('、') : (characteristics || '传统');
  const meaningText = desiredMeaning || '';

  const userPrompt = locale === 'zh'
    ? `请为一位${genderText}用户创建三个中文名字。
姓氏: ${inputName}
性格特点: ${traits}
期望含义: ${meaningText}
出生信息: ${birthDateTime || ''}

请创建三个独特的中文名字，要求：
1. 名字符合中国传统命名习惯，音律和谐
2. 提供每个名字的中文字符、拼音标注
3. 详细解释每个字的含义和文化背景
4. 分析名字与出生八字的匹配度
5. 提供五行分析和姓名学评分
6. 每个字的五行属性
7. 各项评分子项(五行八字、音律字形、格局寓意、生肖属相、生辰八字、国学应用)
8. 各分析项目的详细解释(八字用字分析、五行用字分析、周易用字分析、生肖用字分析、姓名分析)
9. 每个字的文化意义和性格特点对应

请以JSON格式返回结果。`
    : `Please create three Chinese names for a ${gender || 'neutral'} user.
Last name: ${inputName}
Personality traits: ${traits}
Desired meaning: ${meaningText}
Birth information: ${birthDateTime || ''}

Please create three unique Chinese names with detailed analysis and return in JSON format.`;

  log('✅ 生成的用户提示词:', userPrompt.substring(0, 200) + '...');

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

  const systemPrompt = locale === 'zh'
    ? '你是一个专业的中文名字分析师。请详细分析中文名字的含义、五行、笔画等信息。'
    : 'You are a professional Chinese name analyst. Please analyze Chinese names in detail including meanings, five elements, strokes, etc.';

  const userPrompt = locale === 'zh'
    ? `请详细分析这个中文名字：${name}
出生日期：${birthDate || '未提供'}

请分析：
1. 笔画数和五行属性
2. 音义分析
3. 姓氏和名字分别的含义
4. 与生日的匹配度

请返回JSON格式的分析结果。`
    : `Please analyze this Chinese name in detail: ${name}
Birth date: ${birthDate || 'Not provided'}

Please analyze:
1. Stroke count and five elements
2. Sound and meaning analysis
3. Meanings of surname and given name
4. Compatibility with birth date

Please return analysis results in JSON format.`;

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

  const systemPrompt = locale === 'zh'
    ? '你是一个专业的中国生肖分析师。请根据出生年份分析对应的生肖特点。'
    : 'You are a professional Chinese zodiac analyst. Please analyze zodiac characteristics based on birth year.';

  const userPrompt = locale === 'zh'
    ? `请根据农历出生年份${birthYear}详细分析对应的中国生肖，包括：
1. 生肖特点
2. 五行属性
3. 性格特点
4. 相配生肖
5. 幸运数字和颜色

请返回JSON格式的分析结果。`
    : `Please analyze the Chinese zodiac for lunar birth year ${birthYear} in detail, including:
1. Zodiac characteristics
2. Five elements attributes
3. Personality traits
4. Compatible zodiac signs
5. Lucky numbers and colors

Please return analysis results in JSON format.`;

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

  const systemPrompt = locale === 'zh'
    ? '你是一个专业的汉字分析师。请详细分析汉字的笔顺、结构、含义等信息。'
    : 'You are a professional Chinese character analyst. Please analyze characters in detail including stroke order, structure, meanings, etc.';

  const userPrompt = locale === 'zh'
    ? `请详细分析这个汉字：${character}

请分析：
1. 笔画数和笔顺
2. 字体结构
3. 五行属性
4. 字义和文化背景
5. 常用词组

请返回JSON格式的分析结果。`
    : `Please analyze this Chinese character in detail: ${character}

Please analyze:
1. Stroke count and stroke order
2. Character structure
3. Five elements attribute
4. Meaning and cultural background
5. Common word combinations

Please return analysis results in JSON format.`;

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

  const systemPrompt = locale === 'zh'
    ? '你是一个专业的翻译助手。请准确翻译用户提供的文本。'
    : 'You are a professional translation assistant. Please accurately translate the text provided by the user.';

  const userPrompt = `请将以下文本从${fromLang}翻译为${toLang}：

${text}

请返回JSON格式的翻译结果，包含原文、译文和解释。`;

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

  // 智能识别业务类型并替换系统提示词
  const userMessage = messages.find(msg => msg.role === 'user');
  const detectedType = detectBusinessType(userMessage?.content || '');

  let systemPrompt = messages.find(msg => msg.role === 'system')?.content || '';

  // 根据检测到的业务类型替换系统提示词
  if (detectedType === 'nameGeneration') {
    systemPrompt = "你是一位精通中国传统文化和姓名学的专家，擅长根据用户需求创建有文化内涵的中文名字。请根据用户提供的信息，生成具有深度含义和文化背景的中文名字。";
    log('🎯 检测到名字生成请求，已替换系统提示词');
  } else if (detectedType === 'nameAnalysis') {
    systemPrompt = "你是一位专业的中文姓名分析师，精通五行八字、音律字形、传统文化等姓名学知识。请对用户提供的中文名字进行全面深入的分析。";
    log('🎯 检测到名字分析请求，已替换系统提示词');
  } else if (detectedType === 'zodiacAnalysis') {
    systemPrompt = "你是一位精通中国传统生肖文化的专家，对十二生肖的特点、五行属性、性格分析等有深入研究。请根据用户提供的信息进行专业的生肖分析。";
    log('🎯 检测到生肖分析请求，已替换系统提示词');
  } else {
    log('⚠️ 未能识别具体业务类型，使用原始系统提示词');
  }

  // 构建新的messages数组，替换系统提示词
  const updatedMessages = messages.map(msg => {
    if (msg.role === 'system') {
      return { ...msg, content: systemPrompt };
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
  const { name, sourceLanguage, targetLanguage = 'zh', method = 'combined', locale = 'zh' } = params;

  if (!name) {
    log('❌ 名字翻译请求缺少必需参数: name');
    return null;
  }

  log('🎯 构建名字翻译请求，参数:', params);

  const systemPrompt = "你是一个专业的名字翻译专家，精通多种语言的名字翻译，能够准确地将外文名字翻译成中文，同时保持发音的准确性和文化的适应性。";

  const languageNames = {
    en: '英文',
    ja: '日文',
    ko: '韩文',
    fr: '法文',
    de: '德文',
    ru: '俄文',
    es: '西班牙文',
    ar: '阿拉伯文',
    pt: '葡萄牙文',
    it: '意大利文',
    hi: '印地文'
  };

  const userPrompt = `请将${languageNames[sourceLanguage] || sourceLanguage}名字"${name}"翻译成中文，
使用音义结合（同时考虑发音和含义）方法，并以JSON格式返回结果。

请提供3-5个翻译选项，每个选项包含：
1. 翻译后的中文名字
2. 拼音发音指南
3. 详细的含义解释
4. 文化适应性说明
5. 推荐度评分(1-10)

请确保翻译结果：
- 发音接近原名
- 具有美好的中文含义
- 符合中文命名习惯
- 考虑性别特征

返回JSON格式，包含translations数组。`;

  log('✅ 生成的用户提示词:', userPrompt.substring(0, 200) + '...');

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
  const { name, method = 'combined', locale = 'zh' } = params;

  if (!name) {
    log('❌ 中文转英文请求缺少必需参数: name');
    return null;
  }

  log('🎯 构建中文转英文请求，参数:', params);

  const systemPrompt = "你是一个专业的中英文名字翻译专家，精通中文名字的英文化处理，能够准确地将中文名字转换为合适的英文名字，同时保持发音的准确性和文化的适应性。";

  const userPrompt = `请将中文名字"${name}"转换为英文名字，并以JSON格式返回结果。

请提供3-5个转换选项，每个选项包含：
1. 英文名字
2. 发音指南（音标或拼音）
3. 转换方法说明（音译/意译/组合）
4. 文化背景解释
5. 适用场合建议
6. 推荐度评分(1-10)

请确保转换结果：
- 发音接近中文原名
- 符合英文命名习惯
- 易于外国人理解和发音
- 保持原名的文化特色

返回JSON格式，包含translations数组。`;

  log('✅ 生成的用户提示词:', userPrompt.substring(0, 200) + '...');

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