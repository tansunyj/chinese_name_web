// Cloudflare Pages Function - 处理OpenAI API代理请求
// 路径: /functions/api/openai.js

// 导入提示词模板
import {
  nameGenerationPrompts,
  nameTranslationPrompts,
  nameAnalysisPrompts,
  zodiacAnalysisPrompts,
  chineseToEnglishPrompts,
  characterAnalysisPrompts,
  generalTranslationPrompts
} from './promptTemplates.js';

// 定义日志函数
const log = (...args) => {
  console.log(...args);
};

const logError = (...args) => {
  console.error(...args);
};

// Cloudflare Pages Function入口点
export async function onRequestPost(context) {
  const { request, env } = context;
  
  // 设置CORS头
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Access-Control-Allow-Credentials': 'true',
  };

  try {
    // 从环境变量中获取配置
    const API_KEY = env.OPENAI_API_KEY;
    const API_URL = env.OPENAI_API_URL || 'https://openkey.cloud/v1/chat/completions';
    const MODEL_VERSION = env.OPENAI_MODEL_VERSION || 'gpt-4o-mini';

    log('🔧 环境变量检查:');
    log('API_KEY存在:', !!API_KEY);
    log('API_URL:', API_URL);
    log('MODEL_VERSION:', MODEL_VERSION);

    if (!API_KEY) {
      logError('❌ 错误: 未配置OPENAI_API_KEY环境变量');
      return new Response(JSON.stringify({
        error: 'API key not configured',
        debug: 'OPENAI_API_KEY environment variable is missing'
      }), {
        status: 500,
        headers: { 'Content-Type': 'application/json', ...corsHeaders }
      });
    }

    // 获取请求体
    const requestBody = await request.json();
    log('请求体:', JSON.stringify(requestBody, null, 2));

    // 安全检查
    const securityCheck = validateRequestSecurity(requestBody);
    if (!securityCheck.isValid) {
      logError('🚨 安全威胁检测:', securityCheck.reason);
      return new Response(JSON.stringify({
        error: 'Request rejected for security reasons',
        message: 'Invalid parameters detected',
        code: 'SECURITY_VIOLATION'
      }), {
        status: 403,
        headers: { 'Content-Type': 'application/json', ...corsHeaders }
      });
    }

    // 从请求体中获取业务类型和参数
    const { type, ...businessParams } = requestBody;

    if (!type) {
      return new Response(JSON.stringify({ error: 'Missing request type parameter' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json', ...corsHeaders }
      });
    }

    // 根据业务类型构建OpenAI请求体
    const openaiRequestBody = buildRequestByType(type, businessParams, MODEL_VERSION);

    if (!openaiRequestBody) {
      logError('❌ 构建请求失败，不支持的请求类型:', type);
      return new Response(JSON.stringify({
        error: `Unsupported request type: ${type}`,
        debug: `Available types: nameGeneration, nameAnalysis, zodiacAnalysis, characterAnalysis, nameTranslation, chineseToEnglish`
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json', ...corsHeaders }
      });
    }

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

      return new Response(JSON.stringify({
        error: 'OpenAI API error',
        status: openaiResponse.status,
        statusText: openaiResponse.statusText,
        details: errorData
      }), {
        status: openaiResponse.status,
        headers: { 'Content-Type': 'application/json', ...corsHeaders }
      });
    }

    // 获取响应数据
    const responseText = await openaiResponse.text();
    log('📡 OpenAI原始响应长度:', responseText.length);

    let data;
    try {
      data = JSON.parse(responseText);
      log('✅ OpenAI响应解析成功');
    } catch (parseError) {
      logError('❌ OpenAI响应JSON解析失败:', parseError);
      return new Response(JSON.stringify({
        error: 'Failed to parse OpenAI response',
        message: parseError.message
      }), {
        status: 500,
        headers: { 'Content-Type': 'application/json', ...corsHeaders }
      });
    }

    // 返回成功响应
    log('🎉 请求处理成功，返回数据');
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { 'Content-Type': 'application/json', ...corsHeaders }
    });

  } catch (error) {
    logError('❌ 代理请求错误:', error);
    return new Response(JSON.stringify({
      error: 'Proxy request failed',
      message: error.message
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json', ...corsHeaders }
    });
  }
}

// 处理OPTIONS请求（预检请求）
export async function onRequestOptions() {
  return new Response(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      'Access-Control-Allow-Credentials': 'true',
    }
  });
}

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
    case 'translation':
      return buildTranslationRequest(baseRequest, params);
    case 'custom':
      return buildCustomRequest(baseRequest, params);
    default:
      return null;
  }
}

/**
 * 构建名字生成请求
 */
function buildNameGenerationRequest(baseRequest, params) {
  const { inputName, gender, characteristics, desiredMeaning, birthDateTime, locale = 'zh' } = params;

  if (!inputName) {
    log('❌ 名字生成请求缺少必需参数: inputName');
    return null;
  }

  log('🎯 构建名字生成请求，参数:', params);

  // 使用提示词模板
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

  // 使用用户提示词
  const userPrompt = nameGenerationPrompts.user(templateParams);

  return {
    ...baseRequest,
    messages: [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: userPrompt }
    ],
    temperature: 0.8,
    max_tokens: 1200,
    response_format: { type: 'json_object' }
  };
}

/**
 * 安全验证函数
 */
function validateRequestSecurity(requestBody) {
  // 基本安全检查
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

  return { isValid: true };
}

/**
 * 从出生日期提取生肖
 */
function extractZodiacFromDate(birthDateTime) {
  if (!birthDateTime) return '未知';

  try {
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

// 其他构建函数的实现
function buildNameTranslationRequest(baseRequest, params) {
  const { name, sourceLanguage, targetLanguage, method, locale = 'zh' } = params;

  if (!name) {
    log('❌ 名字翻译请求缺少必需参数: name');
    return null;
  }

  log('🎯 构建名字翻译请求，参数:', params);

  // 使用提示词模板
  const systemPrompt = nameTranslationPrompts.system;
  const userPrompt = nameTranslationPrompts.user
    .replace('{name}', name)
    .replace(/{sourceLanguage}/g, sourceLanguage);

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

function buildNameAnalysisRequest(baseRequest, params) {
  const { name, birthDate, locale = 'zh' } = params;

  if (!name) {
    return null;
  }

  const systemPrompt = nameAnalysisPrompts.system;
  const userPrompt = locale === 'zh' 
    ? nameAnalysisPrompts.zh({ name, birthDate })
    : nameAnalysisPrompts.en({ name, birthDate });

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
    return null;
  }

  const systemPrompt = zodiacAnalysisPrompts.system;
  const userPrompt = locale === 'zh'
    ? zodiacAnalysisPrompts.zh({ birthYear })
    : zodiacAnalysisPrompts.en({ birthYear });

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
  const { character, locale = 'zh' } = params;

  if (!character) {
    return null;
  }

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

function buildChineseToEnglishRequest(baseRequest, params) {
  const { name, locale = 'zh' } = params;

  if (!name) {
    log('❌ 中文转英文请求缺少必需参数: name');
    return null;
  }

  log('🎯 构建中文转英文请求，参数:', params);

  const systemPrompt = chineseToEnglishPrompts.system;
  const userPrompt = chineseToEnglishPrompts.user(name);

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

function buildTranslationRequest(baseRequest, params) {
  const { text, fromLang = 'auto', toLang = 'zh', locale = 'zh' } = params;

  if (!text) {
    return null;
  }

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

function buildCustomRequest(baseRequest, params) {
  const { messages, temperature, max_tokens } = params;

  if (!messages || !Array.isArray(messages) || messages.length === 0) {
    log('❌ buildCustomRequest: messages 参数无效或为空');
    return null;
  }

  return {
    ...baseRequest,
    messages: messages,
    temperature: temperature || 0.7,
    max_tokens: max_tokens || 1000
  };
}