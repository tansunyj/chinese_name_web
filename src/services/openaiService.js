/**
 * openaiService.js
 * 
 * 使用Vercel AI SDK为应用提供OpenAI接口服务
 * 该服务支持:
 * - 文本生成
 * - JSON数据结构生成
 * - 流式响应(SSE)
 */

import { generateText, generateObject } from 'ai';
import { openai } from '@ai-sdk/openai';
import aiConfig from '@/config/aiConfig';

/**
 * 获取配置的OpenAI模型
 * @param {string} modelName - 模型名称，如果未指定使用默认模型
 * @returns {Function} - 配置好的openai模型函数
 */
const getModel = (modelName) => {
  // 使用配置文件中的API密钥
  const modelConfig = {
    apiKey: aiConfig.baseConfig.apiKey,
    // 如果存在代理URL，则使用代理
    baseURL: aiConfig.baseConfig.useProxy ? aiConfig.baseConfig.proxyUrl : undefined
  };
  
  return openai(modelName || aiConfig.models.default, modelConfig);
};

/**
 * 生成文本响应
 * @param {Object} options - 选项参数
 * @param {string} options.prompt - 提示词
 * @param {string} options.model - 模型名称 (可选)
 * @param {number} options.temperature - 温度参数 (可选)
 * @param {number} options.maxTokens - 最大返回token数 (可选)
 * @param {Object} options.metadata - 元数据 (可选)
 * @returns {Promise<Object>} - 返回生成的文本
 */
export const generateAIText = async (options) => {
  const {
    prompt,
    model,
    temperature = 0.7,
    maxTokens = 1000,
    metadata = {}
  } = options;
  
  try {
    const { text } = await generateText({
      model: getModel(model),
      prompt: prompt,
      temperature: temperature,
      max_tokens: maxTokens,
      top_p: 0.9
    });
    
    return { text, metadata };
  } catch (error) {
    console.error(`AI文本生成错误:`, error);
    throw error;
  }
};

/**
 * 生成JSON结构化数据
 * @param {Object} options - 选项参数
 * @param {string} options.prompt - 提示词
 * @param {Object} options.schema - JSON Schema定义
 * @param {string} options.model - 模型名称 (可选)
 * @param {number} options.temperature - 温度参数 (可选)
 * @param {Object} options.metadata - 元数据 (可选)
 * @returns {Promise<Object>} - 返回生成的JSON数据
 */
export const generateAIObject = async (options) => {
  const {
    prompt,
    schema,
    model,
    temperature = 0.7,
    metadata = {}
  } = options;
  
  if (!schema) {
    throw new Error('生成JSON结构化数据需要提供schema参数');
  }
  
  try {
    // 获取模型配置
    const modelCfg = getModel(model);
    
    // 创建OpenAI API请求体
    const openaiRequestBody = {
      model: modelCfg.modelName || model || aiConfig.models.default,
      temperature: temperature,
      messages: [
        { role: 'system', content: '你是一个专业的结构化数据生成助手。请按照用户提供的JSON Schema格式返回数据。' },
        { role: 'user', content: prompt }
      ],
      response_format: { type: 'json_object' }
    };
    
    // 创建请求头
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': modelCfg.apiKey || aiConfig.baseConfig.apiKey
    };
    
    // 目标API地址
    const targetUrl = modelCfg.baseURL || aiConfig.baseConfig.apiUrl;
    
    // 创建代理请求
    const proxyUrl = 'http://localhost:3001/api/openai';
    const proxyRequestBody = {
      url: targetUrl,
      headers: headers,
      body: openaiRequestBody
    };
    
    // 打印请求信息
    console.log('==== 发送到本地代理的请求 ====');
    console.log('代理URL:', proxyUrl);
    console.log('OpenAI目标URL:', targetUrl);
    console.log('请求头:', headers);
    console.log('请求体:', openaiRequestBody);
    
    // 发送请求到本地代理服务器
    const response = await fetch(proxyUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(proxyRequestBody)
    });
    
    // 检查响应状态
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`代理请求失败: ${response.status} ${response.statusText}, ${errorText}`);
    }
    
    // 处理响应
    const data = await response.json();
    console.log('==== 代理返回的OpenAI响应 ====');
    console.log('响应数据:', data);
    
    // 解析内容
    let content = '';
    if (data.choices && data.choices[0] && data.choices[0].message) {
      content = data.choices[0].message.content || '';
    }
    
    // 尝试解析JSON
    let jsonObject = {};
    try {
      // 移除可能存在的Markdown格式或前后缀
      const cleanedContent = content
        .replace(/```json\n?/g, '')
        .replace(/```\n?/g, '')
        .trim();
        
      jsonObject = JSON.parse(cleanedContent);
      console.log('成功解析JSON:', jsonObject);
    } catch (jsonError) {
      console.error('JSON解析错误:', jsonError, '原始内容:', content);
      jsonObject = { parseError: true };
    }
    
    // 返回结果
    return {
      object: jsonObject,
      metadata
    };
  } catch (error) {
    // 记录错误但不抛出异常
    console.error('AI结构化数据生成错误:', error);
    
    // 返回一个空对象作为应急方案
    return {
      object: {},
      metadata,
      error: error.message
    };
  }
};

/**
 * 创建中文名称
 * @param {Object} options - 选项参数
 * @param {string} options.inputName - 输入的名字或关键词
 * @param {string} options.gender - 性别
 * @param {string} options.style - 名字风格
 * @param {string} options.meaning - 期望的含义
 * @returns {Promise<Object>} - 返回生成的名字建议
 */
export const generateChineseName = async (options) => {
  const {
    inputName,
    gender = '不指定',
    style = '传统',
    meaning = ''
  } = options;

  // 为中文名字生成定义JSON Schema
  const nameSchema = {
    type: 'array',
    items: {
      type: 'object',
      properties: {
        chineseName: { type: 'string' },
        pinyin: { type: 'string' },
        meaning: { type: 'string' },
        characters: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              character: { type: 'string' },
              pinyin: { type: 'string' },
              meaning: { type: 'string' },
              strokes: { type: 'integer' }
            },
            required: ['character', 'pinyin', 'meaning']
          }
        }
      },
      required: ['chineseName', 'pinyin', 'meaning', 'characters']
    }
  };

  const prompt = `请为"${inputName || '用户'}"创建5个${gender}性的${style}风格中文名字。
${meaning ? `寓意要求: ${meaning}` : ''}

请为每个名字提供:
1. 完整中文名
2. 拼音
3. 名字含义解释
4. 分析每个字的读音、含义和笔画数`;

  return generateAIObject({
    prompt,
    schema: nameSchema,
    temperature: 0.8,
    metadata: { type: 'chinese_name' }
  });
};

/**
 * 分析汉字笔顺
 * @param {Object} options - 选项参数
 * @param {string} options.character - 要分析的汉字
 * @returns {Promise<Object>} - 返回汉字分析结果
 */
export const analyzeCharacterStrokes = async (options) => {
  const { character } = options;

  if (!character || character.length !== 1) {
    throw new Error('请提供单个汉字进行分析');
  }

  const strokeSchema = {
    type: 'object',
    properties: {
      character: { type: 'string' },
      totalStrokes: { type: 'integer' },
      strokeOrder: { type: 'string' },
      steps: {
        type: 'array',
        items: { type: 'string' }
      }
    },
    required: ['character', 'totalStrokes', 'strokeOrder', 'steps']
  };

  const prompt = `请详细分析汉字"${character}"的笔顺，包括总笔画数、按顺序的笔画名称（如横、竖、撇、捺等）和每个笔画的详细描述。`;

  return generateAIObject({
    prompt,
    schema: strokeSchema,
    temperature: 0.3,
    metadata: { type: 'character_analysis' }
  });
};

/**
 * 名字翻译
 * @param {Object} options - 选项参数
 * @param {string} options.name - 要翻译的名字
 * @param {string} options.sourceLanguage - 源语言
 * @param {string} options.targetLanguage - 目标语言
 * @param {string} options.method - 翻译方法（音译/意译）
 * @returns {Promise<Object>} - 返回翻译结果
 */
export const translateName = async (options) => {
  const {
    name,
    sourceLanguage = 'en',
    targetLanguage = 'zh',
    method = 'phonetic'
  } = options;

  if (!name) {
    throw new Error('请提供需要翻译的名字');
  }

  const translationSchema = {
    type: 'array',
    items: {
      type: 'object',
      properties: {
        translated: { type: 'string' },
        pronunciation: { type: 'string' },
        explanation: { type: 'string' }
      },
      required: ['translated', 'pronunciation', 'explanation']
    }
  };

  // 获取语言名称
  const languageNames = {
    zh: '中文',
    en: '英文',
    ja: '日文',
    ko: '韩文',
    fr: '法文',
    de: '德文',
    es: '西班牙文',
    ru: '俄文'
  };

  const methodDesc = {
    phonetic: '音译（基于发音相似度）',
    semantic: '意译（基于名字含义）',
    combined: '音义结合（同时考虑发音和含义）'
  };

  const prompt = `请将${languageNames[sourceLanguage] || sourceLanguage}名字"${name}"翻译成${languageNames[targetLanguage] || targetLanguage}，
使用${methodDesc[method] || method}方法。提供3个不同的翻译方案，每个方案包括:
1. 翻译后的名字
2. 发音指南
3. 翻译选择的详细解释`;

  return generateAIObject({
    prompt,
    schema: translationSchema,
    temperature: 0.7,
    metadata: { type: 'name_translation' }
  });
};

/**
 * 拼音转换器
 * @param {Object} options - 选项参数
 * @param {string} options.text - 要转换的中文文本
 * @param {string} options.format - 拼音格式
 * @param {string} options.separator - 分隔符
 * @returns {Promise<Object>} - 返回拼音转换结果
 */
export const convertToPinyin = async (options) => {
  const {
    text,
    format = 'standard',
    separator = 'space'
  } = options;

  if (!text) {
    throw new Error('请提供需要转换的中文文本');
  }

  const pinyinSchema = {
    type: 'object',
    properties: {
      pinyin: { type: 'string' },
      alternatives: {
        type: 'object',
        additionalProperties: { type: 'string' }
      },
      characters: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            character: { type: 'string' },
            pinyin: { type: 'string' },
            meaning: { type: 'string' }
          },
          required: ['character', 'pinyin']
        }
      }
    },
    required: ['pinyin', 'characters']
  };

  const formatDesc = {
    'standard': '标准拼音（带声调，如：zhōng guó）',
    'numbered': '数字声调（如：zhong1 guo2）',
    'plain': '无声调拼音（如：zhong guo）',
    'first_letter': '首字母（如：z g）'
  };

  const separatorDesc = {
    'space': '空格分隔（如：zhong guo）',
    'dash': '短横线分隔（如：zhong-guo）',
    'none': '无分隔（如：zhongguo）'
  };

  const prompt = `请将中文文本"${text}"转换为拼音。
格式要求：${formatDesc[format] || format}
分隔方式：${separatorDesc[separator] || separator}
另外提供所有其他格式的拼音转换和每个汉字的详细分析（拼音和基本含义）`;

  return generateAIObject({
    prompt,
    schema: pinyinSchema,
    temperature: 0.3,
    metadata: { type: 'pinyin_conversion' }
  });
};

/**
 * 拼音转中文
 * @param {Object} options - 选项参数 
 * @param {string} options.pinyin - 拼音
 * @param {string} options.purpose - 用途
 * @param {string} options.preference - 字符偏好
 * @returns {Promise<Object>} - 返回中文转换结果
 */
export const convertPinyinToChinese = async (options) => {
  const {
    pinyin,
    purpose = 'name',
    preference = 'common'
  } = options;

  if (!pinyin) {
    throw new Error('请提供需要转换的拼音');
  }

  const chineseSchema = {
    type: 'object',
    properties: {
      options: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            characters: { type: 'string' },
            pinyin: { type: 'string' },
            meaning: { type: 'string' }
          },
          required: ['characters', 'pinyin']
        }
      },
      syllables: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            syllable: { type: 'string' },
            commonCharacters: {
              type: 'array',
              items: { type: 'string' }
            }
          },
          required: ['syllable', 'commonCharacters']
        }
      }
    },
    required: ['options', 'syllables']
  };

  const purposeDesc = {
    'name': '人名（适合作为人名使用的汉字）',
    'place': '地名（适合作为地名使用的汉字）',
    'general': '一般词汇（常见词汇用字）'
  };

  const preferenceDesc = {
    'common': '常用字（使用常见、易认的汉字）',
    'elegant': '典雅文学字（使用较为典雅、有文学气息的汉字）',
    'modern': '现代用字（使用现代常用字，避免生僻字）'
  };

  const prompt = `请将拼音"${pinyin}"转换为可能的中文写法。
用途：${purposeDesc[purpose] || purpose}
偏好：${preferenceDesc[preference] || preference}
提供至少5种可能的中文写法（按推荐度排序）、每个写法的完整拼音和含义解释，以及每个音节可能对应的常见汉字分析`;

  return generateAIObject({
    prompt,
    schema: chineseSchema,
    temperature: 0.7,
    metadata: { type: 'pinyin_to_chinese' }
  });
};

export default {
  generateAIText,
  generateAIObject,
  generateChineseName,
  analyzeCharacterStrokes,
  translateName,
  convertToPinyin,
  convertPinyinToChinese
}; 