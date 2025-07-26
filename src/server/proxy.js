// 创建一个简单的Express代理服务器，用于解决CORS问题
import express from 'express';
import cors from 'cors';
import axios from 'axios';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

// 导入提示词模板
import {
  nameGenerationPrompts,
  nameAnalysisPrompts,
  zodiacAnalysisPrompts
} from '../services/promptTemplates.js';

import {
  nameGenerationSystemPrompt,
  nameAnalysisSystemPrompt,
  zodiacAnalysisSystemPrompt
} from '../config/systemPrompts.js';

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

  // 使用现有的系统提示词
  const systemPrompt = nameGenerationSystemPrompt;

  // 构建参数对象，匹配提示词模板的期望格式
  const templateParams = {
    lastName: inputName,
    gender: gender === '男' ? 'male' : gender === '女' ? 'female' : 'neutral',
    characteristics: Array.isArray(characteristics) ? characteristics : [characteristics || '传统'],
    desiredMeaning: desiredMeaning || '',
    birthDateTime: birthDateTime || ''
  };

  console.log('📝 提示词模板参数:', templateParams);

  // 使用提示词模板生成用户提示词
  const userPrompt = locale === 'zh'
    ? nameGenerationPrompts.zh(templateParams)
    : nameGenerationPrompts.en(templateParams);

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

  // 根据检测到的业务类型替换系统提示词
  if (detectedType === 'nameGeneration') {
    systemPrompt = nameGenerationSystemPrompt;
    console.log('🎯 检测到名字生成请求，已替换系统提示词');
  } else if (detectedType === 'nameAnalysis') {
    systemPrompt = nameAnalysisSystemPrompt;
    console.log('🎯 检测到名字分析请求，已替换系统提示词');
  } else if (detectedType === 'zodiacAnalysis') {
    systemPrompt = zodiacAnalysisSystemPrompt;
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

  // 使用现有的系统提示词和模板
  const systemPrompt = nameAnalysisSystemPrompt;
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

  // 使用现有的系统提示词和模板
  const systemPrompt = zodiacAnalysisSystemPrompt;
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
  const { character, locale = 'zh' } = params;
  if (!character) return null;

  return {
    ...baseRequest,
    messages: [
      { role: 'system', content: '你是一个专业的汉字分析师。' },
      { role: 'user', content: `请分析汉字：${character}` }
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

// 保留原有的通用翻译函数作为备用
function buildTranslationRequest(baseRequest, params) {
  const { text, fromLang = 'auto', toLang = 'zh' } = params;
  if (!text) return null;

  return {
    ...baseRequest,
    messages: [
      { role: 'system', content: '你是一个专业的翻译助手。' },
      { role: 'user', content: `请将"${text}"从${fromLang}翻译为${toLang}` }
    ],
    temperature: 0.3,
    max_tokens: 800,
    response_format: { type: 'json_object' }
  };
}

// 启动服务器
app.listen(PORT, () => {
  console.log(`OpenAI代理服务器运行在 http://localhost:${PORT}`);
  console.log(`请使用 http://localhost:${PORT}/api/openai 作为代理端点`);
  console.log('支持的请求类型: nameGeneration, nameAnalysis, zodiacAnalysis, characterAnalysis, translation, custom');
});