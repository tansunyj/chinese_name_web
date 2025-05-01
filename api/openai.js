// Vercel Serverless Function作为OpenAI API的代理
// 该函数将在Vercel平台上运行，解决跨域问题

export default async function handler(req, res) {
  // 只允许POST请求
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // 从请求体中获取必要参数
    const { url, headers, body } = req.body;
    
    if (!url || !body) {
      return res.status(400).json({ error: 'Missing required parameters' });
    }

    // 记录请求信息（生产环境可考虑关闭）
    console.log('代理请求到:', url);
    console.log('请求体:', JSON.stringify(body).slice(0, 200) + '...');

    // 发送请求到OpenAI API
    const openaiResponse = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': headers.Authorization || `Bearer ${process.env.OPENAI_API_KEY}`,
        // 可以添加其他必要的头部
      },
      body: JSON.stringify(body)
    });

    // 获取响应数据
    const data = await openaiResponse.json();
    
    // 设置CORS头，允许客户端网站访问
    res.setHeader('Access-Control-Allow-Origin', 'https://www.chinesename.us');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    
    // 返回OpenAI的响应
    return res.status(openaiResponse.status).json(data);
  } catch (error) {
    console.error('代理请求错误:', error);
    return res.status(500).json({ error: 'Proxy request failed', message: error.message });
  }
} 