/**
 * 环境变量配置示例
 * 
 * 请将此文件复制为.env并填入您的实际配置
 * 注意：实际的.env文件不应该提交到版本控制系统
 */

// API基础配置
export const API_CONFIG = {
  // API基础URL
  API_URL: 'https://api.chinesename.com',
  
  // AI大模型配置
  AI_API_URL: 'https://api.openai.com/v1',
  AI_PROXY_URL: 'https://ai-proxy.chinesename.com',
  AI_API_KEY: 'your_api_key_here',
  USE_AI_PROXY: true,
  
  // 模型版本配置
  AI_MODEL_VERSION: 'gpt-4',
  NAME_GEN_MODEL: 'gpt-4',
  TRANSLATION_MODEL: 'gpt-3.5-turbo',
  ANALYSIS_MODEL: 'gpt-4'
};

// 应用配置
export const APP_CONFIG = {
  DEFAULT_LOCALE: 'zh',
  DEFAULT_THEME: 'light',
  ENABLE_ANALYTICS: false
};

/**
 * 配置使用说明：
 * 
 * 1. 获取您的AI服务提供商API密钥
 * 2. 设置AI_API_URL为您的AI服务提供商API地址
 * 3. 如果使用代理，设置USE_AI_PROXY为true，并配置AI_PROXY_URL
 * 4. 根据需要调整模型版本
 * 
 * 注意：
 * - OpenAI API需要科学上网才能访问
 * - 国内用户建议使用兼容API的代理服务或本地代理
 * - 可以使用百度、讯飞等国内AI服务作为替代方案
 */ 