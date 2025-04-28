// 创建一个简单的Express代理服务器，用于解决CORS问题
import express from 'express';
import cors from 'cors';
import axios from 'axios';
import bodyParser from 'body-parser';

const app = express();
const PORT = process.env.PORT || 3001;

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

// 代理OpenAI API请求
app.post('/api/openai', async (req, res) => {
  try {
    console.log('收到OpenAI代理请求');
    
    // 打印完整请求信息
    console.log('完整请求信息:');
    console.log('URL:', req.url);
    console.log('方法:', req.method);
    console.log('请求头:', req.headers);
    console.log('请求体:', req.body);
    
    // 从请求体获取必要信息
    const { url, headers, body } = req.body;
    
    if (!url) {
      return res.status(400).json({ error: '缺少目标URL' });
    }
    
    // 发送代理请求到OpenAI API
    const response = await axios({
      method: 'POST',
      url: url,
      headers: headers || {
        'Content-Type': 'application/json',
        'Authorization': headers?.Authorization || ''
      },
      data: body,
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

// 启动服务器
app.listen(PORT, () => {
  console.log(`OpenAI代理服务器运行在 http://localhost:${PORT}`);
  console.log(`请使用 http://localhost:${PORT}/api/openai 作为代理端点`);
}); 