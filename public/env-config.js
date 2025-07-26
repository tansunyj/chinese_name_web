// 环境配置文件
// 这个文件会被放置在public目录，直接加载到HTML中
// 用于在运行时配置环境变量，而不是在构建时
// 注意：此文件只包含非敏感的配置信息，敏感信息已移至后端环境变量

// 全局环境变量对象
window.__env = window.__env || {};

// 环境变量配置 - 只包含非敏感信息
window.__env.VUE_APP_ENV = 'production'; // 默认为生产环境
// 移除了敏感的API URL和API KEY配置，这些现在由后端环境变量管理
window.__env.VUE_APP_USE_AI_PROXY = 'true'; // 生产环境使用Vercel代理避免CORS问题

// 添加时间戳以确保不会被缓存
window.__env.BUILD_TIMESTAMP = new Date().toISOString();

// 开发环境的配置可以在本地开发服务器启动时通过.env文件覆盖