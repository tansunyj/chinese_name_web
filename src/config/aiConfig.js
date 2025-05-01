// AI大模型配置文件

// 判断当前环境
const isDevelopment = process.env.NODE_ENV === 'development';

// 默认使用代理设置 - 开发环境使用本地代理，生产环境使用Vercel API路由代理
// 由于CORS问题，生产环境也需要通过代理访问OpenKey
const defaultUseProxy = true;

// 默认API URL，在生产环境中使用OpenKey代理
const defaultApiUrl = isDevelopment 
  ? 'https://api.openai.com/v1/chat/completions' 
  : 'https://openkey.cloud/v1/chat/completions';

// 默认代理URL，开发环境使用本地代理，生产环境使用Vercel API路由
const defaultProxyUrl = isDevelopment
  ? 'http://localhost:3001/api/openai'
  : '/api/openai';

export default {
  // 基础配置
  baseConfig: {
    apiUrl: (window.__env && window.__env.VUE_APP_AI_API_URL) || defaultApiUrl,
    proxyUrl: (window.__env && window.__env.VUE_APP_AI_PROXY_URL) || defaultProxyUrl,
    apiKey: (window.__env && window.__env.VUE_APP_AI_API_KEY) || 'sk-KCRzQ9uj8zNGRFYW6674Bd591b7f4684Ad5cDaC9D1F90cDd',
    useProxy: (window.__env && window.__env.VUE_APP_USE_AI_PROXY === 'true') || defaultUseProxy,
    timeout: 120000, // 请求超时时间（毫秒）
  },
  
  // 模型配置
  models: {
    default: (window.__env && window.__env.VUE_APP_AI_MODEL_VERSION) || 'gpt-4o-mini',
    nameGeneration: (window.__env && window.__env.VUE_APP_NAME_GEN_MODEL) || 'gpt-4o-mini',
    translation: (window.__env && window.__env.VUE_APP_TRANSLATION_MODEL) || 'gpt-4o-mini',
    analysis: (window.__env && window.__env.VUE_APP_ANALYSIS_MODEL) || 'gpt-4o-mini',
  },
  
  // 温度参数配置（控制创造性）
  temperatures: {
    nameGeneration: 1,  // 较高的温度，产生更创造性的名字
    translation: 0.3,     // 较低的温度，保证翻译准确性
    analysis: 0.2,        // 低温度，保证分析的客观性
  }
}; 