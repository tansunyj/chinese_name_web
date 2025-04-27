import axios from 'axios';
import aiConfig from '@/config/aiConfig';

// 创建axios实例 - 直接访问AI接口
const aiClient = axios.create({
  baseURL: aiConfig.baseConfig.apiUrl,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${aiConfig.baseConfig.apiKey}`
  },
  timeout: aiConfig.baseConfig.timeout
});

// 创建axios实例 - 通过代理访问AI接口
const proxyClient = axios.create({
  baseURL: aiConfig.baseConfig.proxyUrl,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${aiConfig.baseConfig.apiKey}`
  },
  timeout: aiConfig.baseConfig.timeout
});

// 请求拦截器 - 添加语言和模型版本
proxyClient.interceptors.request.use(config => {
  const locale = localStorage.getItem('locale') || 'zh';
  config.headers['Accept-Language'] = locale;
  
  // 如果没有指定模型版本，使用默认模型
  if (!config.headers['X-Model-Version']) {
    config.headers['X-Model-Version'] = aiConfig.models.default;
  }
  
  return config;
});

/**
 * 发送AI请求的通用方法
 * @param {Object} options - 请求选项
 * @param {string} options.prompt - 提示词
 * @param {string} options.model - 使用的模型
 * @param {number} options.temperature - 温度参数
 * @param {number} options.max_tokens - 最大返回token数
 * @param {string} options.requestType - 请求类型
 * @param {Object} options.metadata - 元数据
 * @returns {Promise} - 返回AI响应结果
 */
export const sendAIRequest = async (options) => {
  const { 
    prompt, 
    model = aiConfig.models.default,
    temperature = 0.7,
    max_tokens = 1000,
    requestType,
    metadata = {} 
  } = options;

  try {
    const client = aiConfig.baseConfig.useProxy ? proxyClient : aiClient;
    const endpoint = aiConfig.baseConfig.useProxy ? '/generate' : '/completions';
    
    const params = {
      prompt: prompt,
      model: model,
      max_tokens: max_tokens,
      temperature: temperature,
      top_p: 0.9,
      metadata: {
        requestType: requestType,
        ...metadata
      }
    };
    
    // 设置模型版本头（如果使用代理）
    const config = {
      headers: {}
    };
    
    if (aiConfig.baseConfig.useProxy) {
      config.headers['X-Model-Version'] = model;
    }
    
    const response = await client.post(endpoint, params, config);
    return response.data;
  } catch (error) {
    console.error(`AI请求错误 (${requestType}):`, error);
    throw error;
  }
};

/**
 * 解析AI响应
 * @param {Object|string} response - AI返回的响应
 * @param {Function} parserFunction - 自定义解析函数
 * @param {Object} fallbackData - 解析失败时的后备数据
 * @returns {Object} - 解析后的结构化数据
 */
export const parseAIResponse = (response, parserFunction, fallbackData) => {
  try {
    // 如果已经是JSON对象，直接返回
    if (typeof response === 'object' && !Array.isArray(response)) {
      return response;
    }
    
    // 提取响应文本
    const responseText = typeof response === 'object' 
      ? response.text || response.choices?.[0]?.text || '' 
      : response || '';
    
    // 如果提供了自定义解析函数，使用它
    if (typeof parserFunction === 'function') {
      return parserFunction(responseText);
    }
    
    // 尝试查找JSON字符串并解析
    const jsonMatch = responseText.match(/```json\n([\s\S]*?)\n```/) || 
                       responseText.match(/```([\s\S]*?)```/);
                       
    if (jsonMatch && jsonMatch[1]) {
      try {
        return JSON.parse(jsonMatch[1]);
      } catch (e) {
        console.error('JSON解析错误:', e);
      }
    }
    
    // 返回原始文本作为对象
    return { text: responseText };
  } catch (error) {
    console.error('解析AI响应错误:', error);
    return fallbackData || { error: '解析失败' };
  }
}; 