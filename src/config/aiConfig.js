// AI大模型配置文件

// 判断当前环境
const isDevelopment = process.env.NODE_ENV === 'development';

// 默认使用代理设置 - 开发环境使用本地代理，生产环境使用Vercel API路由代理
// 由于CORS问题，生产环境也需要通过代理访问OpenKey
const defaultUseProxy = true;

// 默认代理URL，开发环境使用本地代理，生产环境使用Vercel API路由
const defaultProxyUrl = isDevelopment
  ? 'http://localhost:3001/api/openai'
  : '/api/openai';

export default {
  // 基础配置 - 移除了敏感信息，这些现在由后端环境变量管理
  baseConfig: {
    // 移除了 apiUrl 和 apiKey，这些现在在后端处理
    proxyUrl: defaultProxyUrl,
    useProxy: defaultUseProxy, // 始终使用代理以确保安全
    timeout: 120000, // 请求超时时间（毫秒）
  },

  // 模型配置 - 这些是非敏感的配置，可以保留在前端
  models: {
    default: 'gpt-4o-mini',
    nameGeneration: 'gpt-4o-mini',
    translation: 'gpt-4o-mini',
    analysis: 'gpt-4o-mini',
  },

  // 温度参数配置（控制创造性）- 非敏感配置
  temperatures: {
    nameGeneration: 1,  // 较高的温度，产生更创造性的名字
    translation: 0.3,     // 较低的温度，保证翻译准确性
    analysis: 0.2,        // 低温度，保证分析的客观性
  }
};