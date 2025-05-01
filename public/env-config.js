// 环境配置文件
// 这个文件会被放置在public目录，直接加载到HTML中
// 用于在运行时配置环境变量，而不是在构建时

// 全局环境变量对象
window.__env = window.__env || {};

// 环境变量配置
window.__env.VUE_APP_ENV = 'production'; // 默认为生产环境
window.__env.VUE_APP_AI_API_URL = 'https://openkey.cloud/v1/chat/completions'; // 使用OpenKey代理
window.__env.VUE_APP_AI_PROXY_URL = 'http://localhost:3001/api/openai'; // 本地代理URL(仅开发环境使用)
window.__env.VUE_APP_AI_API_KEY = 'sk-KCRzQ9uj8zNGRFYW6674Bd591b7f4684Ad5cDaC9D1F90cDd';
window.__env.VUE_APP_USE_AI_PROXY = 'false'; // 生产环境默认不使用本地代理
window.__env.VUE_APP_AI_MODEL_VERSION = 'gpt-4o-mini';
window.__env.VUE_APP_NAME_GEN_MODEL = 'gpt-4o-mini';
window.__env.VUE_APP_TRANSLATION_MODEL = 'gpt-4o-mini';
window.__env.VUE_APP_ANALYSIS_MODEL = 'gpt-4o-mini';

// 开发环境的配置可以在本地开发服务器启动时通过.env文件覆盖 