// AI大模型配置文件
export default {
  // 基础配置
  baseConfig: {
    apiUrl: (window.__env && window.__env.VUE_APP_AI_API_URL) || 'https://openkey.cloud/v1/chat/completions',
    proxyUrl: (window.__env && window.__env.VUE_APP_AI_PROXY_URL) || 'https://openkey.cloud/v1/chat/completions',
    apiKey: (window.__env && window.__env.VUE_APP_AI_API_KEY) || 'Bearer sk-KCRzQ9uj8zNGRFYW6674Bd591b7f4684Ad5cDaC9D1F90cDd',
    useProxy: (window.__env && window.__env.VUE_APP_USE_AI_PROXY === 'true') || false,
    timeout: 60000, // 请求超时时间（毫秒）
  },
  
  // 模型配置
  models: {
    default: (window.__env && window.__env.VUE_APP_AI_MODEL_VERSION) || 'o4-mini',
    nameGeneration: (window.__env && window.__env.VUE_APP_NAME_GEN_MODEL) || 'o4-mini',
    translation: (window.__env && window.__env.VUE_APP_TRANSLATION_MODEL) || 'o4-mini',
    analysis: (window.__env && window.__env.VUE_APP_ANALYSIS_MODEL) || 'o4-mini',
  },
  
  // 温度参数配置（控制创造性）
  temperatures: {
    nameGeneration: 1,  // 较高的温度，产生更创造性的名字
    translation: 0.3,     // 较低的温度，保证翻译准确性
    analysis: 0.2,        // 低温度，保证分析的客观性
  }
}; 