# AI配置指南

本文档说明如何配置和使用AI大模型服务来增强中文名字网站的功能。

## 配置步骤

1. 复制 `env.example.js` 文件为 `env.js`（此文件不应提交到版本控制系统）
2. 在 `env.js` 文件中填入您的实际API密钥和配置信息
3. 根据您的需求调整模型版本和其他参数

## 支持的AI服务提供商

系统设计为支持多种AI服务提供商：

- **OpenAI API**：使用GPT-3.5/GPT-4模型（需科学上网）
- **Azure OpenAI**：通过Azure提供的OpenAI服务
- **国内AI服务**：可通过修改adapters支持百度、讯飞等服务

## 功能与模型对应关系

不同功能使用不同的模型和参数配置：

| 功能 | 推荐模型 | 温度参数 | 说明 |
|------|----------|---------|------|
| 名字生成 | GPT-4 | 0.7 | 需要更高创造性和文化理解 |
| 名字翻译 | GPT-3.5 | 0.3 | 注重音译准确性 |
| 名字分析 | GPT-4 | 0.2 | 需要深度文化理解和分析能力 |
| 生肖分析 | GPT-3.5 | 0.5 | 标准化内容，可用轻量模型 |

## 代理服务配置

对于无法直接访问OpenAI API的环境，系统提供了代理模式：

1. 设置 `USE_AI_PROXY` 为 `true`
2. 配置 `AI_PROXY_URL` 为您的代理服务地址
3. 确保代理服务支持与OpenAI API兼容的接口格式

## 本地开发测试

如果没有可用的API密钥，系统会自动使用模拟数据：

1. 所有API请求都有后备数据，确保UI正常展示
2. 开发环境中可以通过设置 `process.env.NODE_ENV === 'development'` 强制使用模拟数据

## 提示词模板定制

您可以根据需要修改 `src/services/promptTemplates.js` 中的提示词模板：

1. 每个功能都有中英文两种提示词模板
2. 可以根据实际效果调整提示词内容
3. 确保提示词要求返回标准JSON格式，以便系统正确解析

## 安全注意事项

1. 永远不要在前端代码中硬编码API密钥
2. 生产环境应通过环境变量或后端服务提供密钥
3. 考虑使用代理服务，避免直接从前端调用AI服务

## 故障排除

1. 如果AI服务返回错误，查看控制台日志
2. 验证API密钥和URL配置是否正确
3. 检查网络连接和代理设置
4. 确认提示词模板格式正确

## 日志控制

为了减少生产环境中的控制台输出和网络请求日志，系统提供了条件性日志记录机制：

### 日志级别

- `enableDebugLogs`: 控制基本调试日志输出
- `enableDetailedLogs`: 控制详细的网络请求和响应日志输出

### 如何启用/禁用日志

在开发环境中，您可以通过浏览器控制台手动切换日志状态：

```javascript
// 启用基本调试日志
localStorage.setItem('enableDebugLogs', 'true');

// 启用详细日志（包括网络请求和响应数据）
localStorage.setItem('enableDetailedLogs', 'true');

// 禁用所有日志
localStorage.setItem('enableDebugLogs', 'false');
localStorage.setItem('enableDetailedLogs', 'false');
```

### 日志控制函数

日志控制已应用于所有服务文件，确保生产环境中不会输出不必要的日志信息。如果需要添加新的日志输出，请使用以下模式：

```javascript
// 基本调试信息
if (isDevelopment && window.localStorage.getItem('enableDebugLogs') === 'true') {
  console.log('调试信息:', data);
}

// 详细网络请求/响应日志
if (isDevelopment && window.localStorage.getItem('enableDetailedLogs') === 'true') {
  console.log('API响应数据:', response);
}
``` 