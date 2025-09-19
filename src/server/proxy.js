// 创建一个简单的Express代理服务器，用于解决CORS问题
import express from 'express';
import cors from 'cors';
import axios from 'axios';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

// 注意：提示词模板已迁移到 api/openai.js 中保密处理
// 此开发代理服务器不再直接使用提示词模板

// 🔒 导入完整的提示词模板
import {
  nameGenerationPrompts,
  nameTranslationPrompts,
  nameAnalysisPrompts,
  zodiacAnalysisPrompts,
  chineseToEnglishPrompts,
  characterAnalysisPrompts,
  generalTranslationPrompts
} from '../../api/promptTemplates.js';

// 所有提示词已迁移到 promptTemplates.js，不再需要旧的系统提示词

// 加载环境变量
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

console.log('环境变量检查:');
console.log('OPENAI_API_KEY:', process.env.OPENAI_API_KEY ? '已配置' : '未配置');
console.log('OPENAI_API_URL:', process.env.OPENAI_API_URL || '使用默认值');
console.log('OPENAI_MODEL_VERSION:', process.env.OPENAI_MODEL_VERSION || '使用默认值');

// 允许所有来源的CORS请求
app.use(cors());
app.use(bodyParser.json());

// 日志中间件
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  console.log('请求头:', JSON.stringify(req.headers, null, 2));
  
  if (req.body) {
    console.log('请求体:', JSON.stringify(req.body, null, 2));
  }
  
  next();
});

// 代理OpenAI API请求 - 支持新的类型化API
app.post('/api/openai', async (req, res) => {
  try {
    console.log('收到OpenAI代理请求');

    // 打印完整请求信息
    console.log('完整请求信息:');
    console.log('URL:', req.url);
    console.log('方法:', req.method);
    console.log('请求头:', req.headers);
    console.log('请求体:', req.body);

    // 从环境变量中获取敏感配置
    const API_KEY = process.env.OPENAI_API_KEY;
    const API_URL = process.env.OPENAI_API_URL || 'https://openkey.cloud/v1/chat/completions';
    const MODEL_VERSION = process.env.OPENAI_MODEL_VERSION || 'gpt-4o-mini';

    if (!API_KEY) {
      console.log('错误: 未配置OPENAI_API_KEY环境变量');
      return res.status(500).json({ error: 'API key not configured' });
    }

    // 🛡️ 安全检查：严格验证请求体，拒绝包含敏感参数的请求
    const securityCheck = validateRequestSecurity(req.body);
    if (!securityCheck.isValid) {
      console.error('🚨 安全威胁检测:', securityCheck.reason);
      console.error('🚨 可疑请求体:', JSON.stringify(req.body, null, 2));
      console.error('🚨 请求来源IP:', req.headers['x-forwarded-for'] || req.connection.remoteAddress);

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
    const openaiRequestBody = buildRequestByType(type, businessParams, MODEL_VERSION);

    if (!openaiRequestBody) {
      return res.status(400).json({ error: `Unsupported request type: ${type}` });
    }

    console.log('构建的OpenAI请求体:', JSON.stringify(openaiRequestBody, null, 2));

    // 发送代理请求到OpenAI API
    const response = await axios({
      method: 'POST',
      url: API_URL,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`
      },
      data: openaiRequestBody,
      timeout: 120000
    });

    console.log('OpenAI API响应状态:', response.status);
    console.log('OpenAI API响应头:', response.headers);

    // 返回OpenAI的响应
    return res.status(response.status).json(response.data);
  } catch (error) {
    console.error('代理请求错误:', error.message);

    // 如果有响应，返回原始错误
    if (error.response) {
      console.error('OpenAI API错误响应:', error.response.data);
      return res.status(error.response.status).json(error.response.data);
    }

    // 否则返回通用错误
    return res.status(500).json({ error: `代理请求失败: ${error.message}` });
  }
});

// 健康检查端点
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', message: 'Proxy server is running' });
});

/**
 * 根据业务类型构建不同的OpenAI请求体
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

    case 'custom':
      return buildCustomRequest(baseRequest, params);

    case 'fantasyChineseName':
      return buildFantasyChineseNameRequest(baseRequest, params);

    default:
      return null;
  }
}

/**
 * 构建名字生成请求 - 根据业务类型完整构建OpenAI请求
 */
function buildNameGenerationRequest(baseRequest, params) {
  const { inputName, gender, characteristics, desiredMeaning, birthDateTime, locale = 'zh' } = params;

  if (!inputName) {
    console.log('❌ 名字生成请求缺少必需参数: inputName');
    return null;
  }

  console.log('🎯 构建名字生成请求，参数:', params);

  // 构建参数对象，匹配提示词模板的期望格式
  const templateParams = {
    lastName: inputName,
    gender: gender === '男' ? 'male' : gender === '女' ? 'female' : 'neutral',
    characteristics: Array.isArray(characteristics) ? characteristics : [characteristics || '传统'],
    desiredMeaning: desiredMeaning || '',
    birthDateTime: birthDateTime || ''
  };

  // 🔒 使用 promptTemplates.js 中的系统提示词
  let systemPrompt = nameGenerationPrompts.system;

  // 替换占位符
  const genderText = templateParams.gender === 'male' ? '男性' : templateParams.gender === 'female' ? '女性' : '中性';
  const characteristicsText = templateParams.characteristics.join('、');
  const zodiac = extractZodiacFromDate(templateParams.birthDateTime) || '未知';
  const lunarDate = extractLunarDate(templateParams.birthDateTime) || '未知';

  systemPrompt = systemPrompt
    .replace(/\{\{GENDER_TEXT\}\}/g, genderText)
    .replace(/\{\{LAST_NAME\}\}/g, templateParams.lastName)
    .replace(/\{\{CHARACTERISTICS\}\}/g, characteristicsText)
    .replace(/\{\{DESIRED_MEANING\}\}/g, templateParams.desiredMeaning || '美好寓意')
    .replace(/\{\{ZODIAC\}\}/g, zodiac)
    .replace(/\{\{LUNAR_DATE\}\}/g, lunarDate);

  console.log('📝 提示词模板参数:', templateParams);

  // 🔒 使用 promptTemplates.js 中的用户提示词
  const userPrompt = nameGenerationPrompts.user(templateParams);

  console.log('✅ 生成的用户提示词:', userPrompt.substring(0, 200) + '...');

  // 构建完整的OpenAI请求体
  const openaiRequest = {
    ...baseRequest,
    messages: [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: userPrompt }
    ],
    temperature: 0.8,
    max_tokens: 1500,
    response_format: { type: 'json_object' }
  };

  console.log('🚀 完整的OpenAI请求已构建');
  return openaiRequest;
}

/**
 * 构建自定义请求（智能识别业务类型并使用对应的系统提示词）
 */
function buildCustomRequest(baseRequest, params) {
  const { messages, temperature, max_tokens, top_p, response_format, frequency_penalty, presence_penalty, stop, stream } = params;

  if (!messages || !Array.isArray(messages) || messages.length === 0) {
    return null;
  }

  // 智能识别业务类型并替换系统提示词
  const userMessage = messages.find(msg => msg.role === 'user');
  const detectedType = detectBusinessType(userMessage?.content || '');

  let systemPrompt = messages.find(msg => msg.role === 'system')?.content || '';

  // 根据检测到的业务类型替换系统提示词 - 🔒 使用 promptTemplates.js 中的完整专业提示词
  if (detectedType === 'nameGeneration') {
    // 🔒 强制使用完整的系统提示词，替换占位符为默认值
    systemPrompt = nameGenerationPrompts.system
      .replace(/\{\{GENDER_TEXT\}\}/g, '用户')
      .replace(/\{\{LAST_NAME\}\}/g, '未知')
      .replace(/\{\{CHARACTERISTICS\}\}/g, '传统')
      .replace(/\{\{DESIRED_MEANING\}\}/g, '美好寓意')
      .replace(/\{\{ZODIAC\}\}/g, '未知')
      .replace(/\{\{LUNAR_DATE\}\}/g, '未知');
    console.log('🎯 检测到名字生成请求，已替换为完整的专业提示词');
  } else if (detectedType === 'nameAnalysis') {
    systemPrompt = nameAnalysisPrompts.system;
    console.log('🎯 检测到名字分析请求，已替换系统提示词');
  } else if (detectedType === 'zodiacAnalysis') {
    systemPrompt = zodiacAnalysisPrompts.system;
    console.log('🎯 检测到生肖分析请求，已替换系统提示词');
  } else {
    console.log('⚠️ 未能识别具体业务类型，使用原始系统提示词');
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

// 其他构建函数 - 根据业务类型完整构建OpenAI请求
function buildNameAnalysisRequest(baseRequest, params) {
  const { name, birthDate, locale = 'zh' } = params;
  if (!name) {
    console.log('❌ 名字分析请求缺少必需参数: name');
    return null;
  }

  console.log('🎯 构建名字分析请求，参数:', params);

  // 🔒 使用 promptTemplates.js 中的提示词
  const systemPrompt = nameAnalysisPrompts.system;
  const templateParams = { name, birthDate };
  const userPrompt = locale === 'zh'
    ? nameAnalysisPrompts.zh(templateParams)
    : nameAnalysisPrompts.en(templateParams);

  console.log('✅ 生成的用户提示词:', userPrompt.substring(0, 200) + '...');

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

function buildZodiacAnalysisRequest(baseRequest, params) {
  const { birthYear, locale = 'zh' } = params;
  if (!birthYear) {
    console.log('❌ 生肖分析请求缺少必需参数: birthYear');
    return null;
  }

  console.log('🎯 构建生肖分析请求，参数:', params);

  // 🔒 使用 promptTemplates.js 中的提示词
  const systemPrompt = zodiacAnalysisPrompts.system;
  const templateParams = { birthYear };
  const userPrompt = locale === 'zh'
    ? zodiacAnalysisPrompts.zh(templateParams)
    : zodiacAnalysisPrompts.en(templateParams);

  console.log('✅ 生成的用户提示词:', userPrompt.substring(0, 200) + '...');

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

function buildCharacterAnalysisRequest(baseRequest, params) {
  const { character } = params;
  if (!character) return null;

  // 🔒 使用 promptTemplates.js 中的提示词
  const systemPrompt = characterAnalysisPrompts.system;
  const userPrompt = characterAnalysisPrompts.user(character);

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
 * 构建名字翻译请求（外文名转中文名）
 */
function buildNameTranslationRequest(baseRequest, params) {
  const { name, sourceLanguage, targetLanguage = 'zh', method = 'combined', locale = 'zh' } = params;

  if (!name) {
    console.log('❌ 名字翻译请求缺少必需参数: name');
    return null;
  }

  console.log('🎯 构建名字翻译请求，参数:', params);

  // 🔒 使用 promptTemplates.js 中的提示词
  const systemPrompt = nameTranslationPrompts.system;
  const userPrompt = nameTranslationPrompts.user
    .replace('{name}', name)
    .replace(/{sourceLanguage}/g, sourceLanguage);

  console.log('✅ 生成的用户提示词:', userPrompt.substring(0, 200) + '...');
  console.log('🌐 源语言:', sourceLanguage);

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
 * 构建中文名转英文名请求
 */
function buildChineseToEnglishRequest(baseRequest, params) {
  const { name, method = 'combined', locale = 'zh' } = params;

  if (!name) {
    console.log('❌ 中文转英文请求缺少必需参数: name');
    return null;
  }

  console.log('🎯 构建中文转英文请求，参数:', params);

  // 🔒 使用 promptTemplates.js 中的提示词
  const systemPrompt = chineseToEnglishPrompts.system;
  const userPrompt = chineseToEnglishPrompts.user(name);

  console.log('✅ 生成的用户提示词:', userPrompt.substring(0, 200) + '...');

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

// 通用翻译函数
function buildTranslationRequest(baseRequest, params) {
  const { text, fromLang = 'auto', toLang = 'zh' } = params;
  if (!text) return null;

  // 🔒 使用 promptTemplates.js 中的提示词
  const systemPrompt = generalTranslationPrompts.system;
  const userPrompt = generalTranslationPrompts.user(text, fromLang, toLang);

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
 * 🛡️ 安全验证函数：检查请求体是否包含敏感参数（开发环境）
 */
function validateRequestSecurity(requestBody) {
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
    'characterAnalysis', 'nameTranslation', 'chineseToEnglish', 'fantasyChineseName'
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
    console.log('提取生肖时出错:', error);
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
    console.log('提取农历日期时出错:', error);
    return '未知';
  }
}

/**
 * 构建奇幻中文名字生成请求
 */
function buildFantasyChineseNameRequest(baseRequest, params) {
  const { fantasyTheme, characterType, gender, powerLevel, locale = 'en' } = params;

  if (!fantasyTheme) {
    console.log('❌ 奇幻名字生成请求缺少必需参数: fantasyTheme');
    return null;
  }

  console.log('🎯 构建奇幻中文名字生成请求，参数:', params);

  // 🔒 使用 promptTemplates.js 中的提示词 (开发环境专用)
  // 注意：这个函数仅在开发环境使用，生产环境会使用Cloudflare Functions
  const systemPrompt = `You are a professional fantasy Chinese name creator with deep knowledge of Chinese culture, mythology, and fantasy elements. Create 3 unique fantasy Chinese names based on the user's requirements.

Instructions:
1. Create names that blend traditional Chinese naming conventions with fantasy elements
2. Each name should reflect the chosen theme and character type
3. Include mystical meanings and supernatural associations
4. Ensure cultural authenticity while incorporating fantasy aspects
5. Provide detailed explanations in English

Return the response in the following JSON format:
{
  "fantasy_names": [
    {
      "chinese_name": "Complete Chinese name",
      "pinyin": "Pinyin pronunciation", 
      "english_meaning": "English translation/meaning",
      "mystical_meaning": "Detailed mystical significance and fantasy elements",
      "fantasy_background": "Cultural background and fantasy context",
      "powers": "Associated supernatural abilities or powers",
      "cultural_origin": "Traditional Chinese cultural elements incorporated",
      "theme_compatibility": "How well the name fits the requested theme",
      "character_suitability": "Why this name suits the character type"
    }
  ]
}

Focus on creating names for ${characterType} characters in ${fantasyTheme} settings, suitable for ${gender} characters at ${powerLevel} power level.`;

  const userPrompt = `Generate 3 fantasy Chinese names for a ${characterType} character with ${fantasyTheme} theme, ${gender} gender, and ${powerLevel} power level.`;

  console.log('✅ 生成的奇幻名字系统提示词:', systemPrompt.substring(0, 200) + '...');
  console.log('✅ 生成的用户提示词:', userPrompt);

  return {
    ...baseRequest,
    messages: [
      {
        role: 'system',
        content: systemPrompt
      },
      {
        role: 'user', 
        content: userPrompt
      }
    ],
    max_tokens: 2000,
    temperature: 0.8,
    top_p: 0.9,
    frequency_penalty: 0.3,
    presence_penalty: 0.1,
    response_format: { type: 'json_object' }
  };
}

// 启动服务器
app.listen(PORT, () => {
  console.log(`OpenAI代理服务器运行在 http://localhost:${PORT}`);
  console.log(`请使用 http://localhost:${PORT}/api/openai 作为代理端点`);
  console.log('支持的请求类型: nameGeneration, nameAnalysis, zodiacAnalysis, characterAnalysis, nameTranslation, chineseToEnglish, fantasyChineseName, custom');
});