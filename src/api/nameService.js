import axios from 'axios';

// AI代理配置
const AI_CONFIG = {
  proxyURL: (window.__env && window.__env.VUE_APP_AI_PROXY_URL) || 'https://ai-proxy.chinesename.com',
  apiKey: (window.__env && window.__env.VUE_APP_AI_API_KEY) || '',
  modelVersion: (window.__env && window.__env.VUE_APP_AI_MODEL_VERSION) || 'gpt-4',
  useProxy: (window.__env && window.__env.VUE_APP_USE_AI_PROXY === 'true') || false
};

// 创建API基础配置
const apiClient = axios.create({
  baseURL: (window.__env && window.__env.VUE_APP_API_URL) || 'https://api.chinesename.com',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000
});

// 创建AI代理客户端
const aiProxyClient = axios.create({
  baseURL: AI_CONFIG.proxyURL,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${AI_CONFIG.apiKey}`
  },
  timeout: 30000  // AI请求可能需要更长的超时时间
});

// 设置请求拦截器 - 添加语言标识
apiClient.interceptors.request.use(config => {
  const locale = localStorage.getItem('locale') || 'zh';
  config.headers['Accept-Language'] = locale;
  return config;
});

// AI代理请求拦截器
aiProxyClient.interceptors.request.use(config => {
  const locale = localStorage.getItem('locale') || 'zh';
  config.headers['Accept-Language'] = locale;
  config.headers['X-Model-Version'] = AI_CONFIG.modelVersion;
  return config;
});

// 生成中文名字
export const generateChineseName = async (params) => {
  try {
    // 判断是否使用AI代理
    if (AI_CONFIG.useProxy && AI_CONFIG.apiKey) {
      return await generateChineseNameWithAI(params);
    } else {
      const response = await apiClient.post('/generate', params);
      return response.data;
    }
  } catch (error) {
    console.error('生成名字API错误:', error);
    throw error;
  }
};

// 使用AI代理生成中文名字
async function generateChineseNameWithAI(params) {
  try {
    const aiParams = {
      prompt: createNameGenerationPrompt(params),
      max_tokens: 1000,
      temperature: 0.7,
      top_p: 0.9,
      metadata: {
        requestType: 'nameGeneration',
        userParams: params
      }
    };
    
    const response = await aiProxyClient.post('/generate', aiParams);
    
    // 解析AI返回的文本内容为结构化数据
    return parseAINameResponse(response.data, params);
  } catch (error) {
    console.error('AI代理调用错误:', error);
    // 如果AI代理失败，回退到模拟数据
    return createMockNameData(params);
  }
}

// 创建AI名字生成提示词
function createNameGenerationPrompt(params) {
  const language = params.language || 'zh';
  const gender = params.gender || 'neutral';
  const traits = (params.characteristics || []).join(', ');
  const meaning = params.desiredMeaning || '';
  
  const promptTemplate = {
    zh: `请为一位${gender === 'male' ? '男性' : gender === 'female' ? '女性' : '中性'}用户创建两个中文名字。
姓氏: ${params.lastName || ''}
性格特点: ${traits}
期望含义: ${meaning}
出生信息: ${params.birthDateTime || ''}

请创建两个独特的中文名字，包括:
1. 中文字符 
2. 拼音标注
3. 每个字的详细含义解释
4. 文化背景和适用性
5. 基于出生信息的八字分析
6. 五行分析和姓名学评分`,
    
    en: `Please create two Chinese names for a ${gender} user.
Last name: ${params.lastName || ''}
Personality traits: ${traits}
Desired meaning: ${meaning}
Birth information: ${params.birthDateTime || ''}

Please create two unique Chinese names, including:
1. Chinese characters
2. Pinyin notation
3. Detailed explanation of each character's meaning
4. Cultural context and suitability
5. Eight characters analysis based on birth information
6. Five elements analysis and name analysis score`
  };
  
  return promptTemplate[language] || promptTemplate.en;
}

// 解析AI响应为结构化数据
function parseAINameResponse(aiResponse, originalParams) {
  // 这里需要根据实际AI返回的文本格式进行解析
  // 下面是一个简化的示例，实际应用可能需要更复杂的解析逻辑
  const language = originalParams.language || 'zh';
  
  try {
    // 如果AI已经返回了JSON格式数据
    if (typeof aiResponse === 'object' && aiResponse.names) {
      return aiResponse;
    }
    
    // 否则需要解析文本
    const textResponse = typeof aiResponse === 'object' ? aiResponse.text || '' : aiResponse || '';
    
    // 这里仅作示例，实际解析需要根据AI输出格式调整
    // 简单起见，返回模拟数据
    return createMockNameData(originalParams);
  } catch (error) {
    console.error('解析AI响应错误:', error);
    return createMockNameData(originalParams);
  }
}

// 获取星座分析
export const getConstellationAnalysis = async (birthDate) => {
  try {
    // 判断是否使用AI代理
    if (AI_CONFIG.useProxy && AI_CONFIG.apiKey) {
      return await getConstellationWithAI(birthDate);
    } else {
      const response = await apiClient.get('/constellation', {
        params: { birthDate }
      });
      return response.data;
    }
  } catch (error) {
    console.error('星座分析API错误:', error);
    throw error;
  }
};

// 使用AI代理获取星座分析
async function getConstellationWithAI(birthDate) {
  try {
    const locale = localStorage.getItem('locale') || 'zh';
    
    const aiParams = {
      prompt: `请根据出生日期${birthDate}详细分析该日期对应的星座，包括星座特点、元素属性、优势、劣势、相配星座，以及适合该星座的命名建议和著名代表人物。请使用${locale === 'zh' ? '中文' : '英文'}回答。`,
      max_tokens: 800,
      temperature: 0.7,
      metadata: {
        requestType: 'constellationAnalysis',
        birthDate: birthDate
      }
    };
    
    const response = await aiProxyClient.post('/generate', aiParams);
    
    // 简化处理，返回模拟数据
    return createMockConstellationData(birthDate, locale);
  } catch (error) {
    console.error('AI代理星座分析错误:', error);
    const locale = localStorage.getItem('locale') || 'zh';
    return createMockConstellationData(birthDate, locale);
  }
}

// 获取生肖分析
export const getZodiacAnalysis = async (birthYear) => {
  try {
    if (AI_CONFIG.useProxy && AI_CONFIG.apiKey) {
      return await getZodiacWithAI(birthYear);
    } else {
      const response = await apiClient.get('/zodiac', {
        params: { birthYear }
      });
      return response.data;
    }
  } catch (error) {
    console.error('生肖分析API错误:', error);
    throw error;
  }
};

// 使用AI代理获取生肖分析
async function getZodiacWithAI(birthYear) {
  try {
    const locale = localStorage.getItem('locale') || 'zh';
    
    const aiParams = {
      prompt: `请根据农历出生年份${birthYear}详细分析对应的中国生肖，包括生肖特点、五行属性、性格特点、相配生肖，以及幸运数字和颜色。请使用${locale === 'zh' ? '中文' : '英文'}回答。`,
      max_tokens: 600,
      temperature: 0.7,
      metadata: {
        requestType: 'zodiacAnalysis',
        birthYear: birthYear
      }
    };
    
    const response = await aiProxyClient.post('/generate', aiParams);
    
    // 返回简化的模拟数据，实际应用需解析AI响应
    return {
      sign: locale === 'zh' ? '兔' : 'Rabbit',
      element: locale === 'zh' ? '木' : 'Wood',
      personality: locale === 'zh' ? '温和，敏感，机智，谨慎' : 'Gentle, sensitive, witty, cautious',
      compatibility: locale === 'zh' ? '与羊、猴、狗相配' : 'Compatible with Sheep, Monkey, Dog',
      luckyNumbers: '3, 4, 6',
      luckyColors: locale === 'zh' ? '粉色，蓝色，紫色' : 'Pink, Blue, Purple'
    };
  } catch (error) {
    console.error('AI代理生肖分析错误:', error);
    const locale = localStorage.getItem('locale') || 'zh';
    
    return {
      sign: locale === 'zh' ? '兔' : 'Rabbit',
      element: locale === 'zh' ? '木' : 'Wood',
      personality: locale === 'zh' ? '温和，敏感，机智，谨慎' : 'Gentle, sensitive, witty, cautious',
      compatibility: locale === 'zh' ? '与羊、猴、狗相配' : 'Compatible with Sheep, Monkey, Dog',
      luckyNumbers: '3, 4, 6',
      luckyColors: locale === 'zh' ? '粉色，蓝色，紫色' : 'Pink, Blue, Purple'
    };
  }
}

// 获取名字拼音转换
export const convertToPinyin = async (name) => {
  try {
    const response = await apiClient.get('/pinyin', {
      params: { name }
    });
    return response.data;
  } catch (error) {
    console.error('拼音转换API错误:', error);
    throw error;
  }
};

// 分析现有名字
export const analyzeExistingName = async (name, birthDate) => {
  try {
    if (AI_CONFIG.useProxy && AI_CONFIG.apiKey) {
      return await analyzeNameWithAI(name, birthDate);
    } else {
      const response = await apiClient.post('/analyze', {
        name,
        birthDate
      });
      return response.data;
    }
  } catch (error) {
    console.error('名字分析API错误:', error);
    throw error;
  }
};

// 使用AI代理分析名字
async function analyzeNameWithAI(name, birthDate) {
  try {
    const locale = localStorage.getItem('locale') || 'zh';
    
    const aiParams = {
      prompt: `请详细分析这个中文名字: ${name}。出生日期: ${birthDate}。
分析应包括:
1. 笔画数和五行属性
2. 音义分析
3. 姓氏和名字分别的含义
4. 与生日的匹配度
请使用${locale === 'zh' ? '中文' : '英文'}回答。`,
      max_tokens: 800,
      temperature: 0.7,
      metadata: {
        requestType: 'nameAnalysis',
        name: name,
        birthDate: birthDate
      }
    };
    
    const response = await aiProxyClient.post('/generate', aiParams);
    
    // 简化处理，返回基本分析结果
    return {
      strokes: 25,
      fiveElements: locale === 'zh' ? '金水' : 'Metal and Water',
      soundMeaning: locale === 'zh' ? '音律和谐，意义积极' : 'Harmonious sound, positive meaning',
      surname: {
        analysis: locale === 'zh' ? '源于古代贵族姓氏，寓意高贵' : 'Derived from ancient aristocratic surname, implies nobility'
      },
      givenName: {
        analysis: locale === 'zh' ? '表达智慧和光明，给人积极向上的印象' : 'Expresses wisdom and brightness, gives a positive upward impression'
      },
      compatibility: locale === 'zh' ? '与生日五行相配，总体和谐度高' : 'Compatible with birth date elements, high overall harmony'
    };
  } catch (error) {
    console.error('AI代理名字分析错误:', error);
    const locale = localStorage.getItem('locale') || 'zh';
    
    return {
      strokes: 25,
      fiveElements: locale === 'zh' ? '金水' : 'Metal and Water',
      soundMeaning: locale === 'zh' ? '音律和谐，意义积极' : 'Harmonious sound, positive meaning',
      surname: {
        analysis: locale === 'zh' ? '源于古代贵族姓氏，寓意高贵' : 'Derived from ancient aristocratic surname, implies nobility'
      },
      givenName: {
        analysis: locale === 'zh' ? '表达智慧和光明，给人积极向上的印象' : 'Expresses wisdom and brightness, gives a positive upward impression'
      },
      compatibility: locale === 'zh' ? '与生日五行相配，总体和谐度高' : 'Compatible with birth date elements, high overall harmony'
    };
  }
}

// 导出模拟数据创建函数 - 用于开发环境
export const createMockNameData = (params) => {
  return {
    names: [
      {
        characters: params.lastName ? params.lastName + '智明' : '李智明',
        pinyin: params.lastName ? getPinyin(params.lastName) + ' Zhì Míng' : 'Lǐ Zhì Míng',
        explanation: params.language === 'zh' ? 
          '智(zhì)意为"聪明、有智慧"，明(míng)意为"明亮、清晰、光明"。与姓氏组合，寓意一个既聪明又有光明前途的人。' : 
          'Zhi (智) means "wisdom, intelligence" and Ming (明) means "bright, clear, brilliant". Together with the surname, this name suggests a person who is both intelligent and has a bright future.',
        cultural: params.language === 'zh' ? 
          '在中国文化中，智慧和光明是非常重视的品质。这个名字适合珍视知识和思想清晰的人。' : 
          'In Chinese culture, intelligence and brightness are highly valued traits. This name would be suitable for someone who values knowledge and clarity of thought.',
        birthInfo: createBirthInfo(params.birthDateTime, params.language),
        analysis: {
          strokes: 23,
          fiveElementsBalance: '金[2] 木[0] 水[1] 火[1] 土[2]',
          soundMeaning: params.language === 'zh' ? '音韵和谐，寓意深远' : 'Harmonious pronunciation with deep meaning',
          compatibility: params.language === 'zh' ? '与命主八字五行搭配协调' : 'Well balanced with birth chart elements',
          score: 92
        }
      },
      {
        characters: params.lastName ? params.lastName + '安德' : '李安德',
        pinyin: params.lastName ? getPinyin(params.lastName) + ' Ān Dé' : 'Lǐ Ān Dé',
        explanation: params.language === 'zh' ? 
          '安(ān)意为"平安、安宁"，德(dé)意为"品德、道德"。与姓氏组合，寓意一个带来平安并拥有道德品质的人。' : 
          'An (安) means "peace, security" and De (德) means "virtue, morality". Combined with the surname, this name suggests a person who brings peace and embodies moral virtue.',
        cultural: params.language === 'zh' ? 
          '和平与美德是中国传统儒家思想中的重要价值观。这个名字会与那些欣赏传统伦理原则的人产生共鸣。' : 
          'Peace and virtue are traditional Confucian values in Chinese culture. This name would resonate with those who appreciate traditional ethical principles.',
        birthInfo: createBirthInfo(params.birthDateTime, params.language),
        analysis: {
          strokes: 20,
          fiveElementsBalance: '金[1] 木[0] 水[1] 火[0] 土[3]',
          soundMeaning: params.language === 'zh' ? '音韵平稳，寓意美好' : 'Balanced pronunciation with auspicious meaning',
          compatibility: params.language === 'zh' ? '与命主八字五行搭配良好' : 'Good compatibility with birth chart elements',
          score: 88
        }
      }
    ]
  };
};

// 模拟星座分析数据
export const createMockConstellationData = (birthDate, language) => {
  // 根据出生日期判断星座
  const month = parseInt(birthDate.split('-')[1], 10);
  const day = parseInt(birthDate.split('-')[2], 10);
  
  let sign;
  if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
    sign = language === 'zh' ? '白羊座' : 'Aries';
  } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
    sign = language === 'zh' ? '金牛座' : 'Taurus';
  } else {
    sign = language === 'zh' ? '双子座' : 'Gemini'; // 默认值
  }
  
  return {
    sign: sign,
    element: language === 'zh' ? '火' : 'Fire',
    traits: language === 'zh' 
      ? ['热情', '勇敢', '自信', '冲动', '领导力'] 
      : ['Passionate', 'Brave', 'Confident', 'Impulsive', 'Leadership'],
    strengths: language === 'zh'
      ? '果断，勇于开拓，充满活力，热情奔放，直率坦诚'
      : 'Decisive, pioneering, energetic, passionate, honest',
    weaknesses: language === 'zh'
      ? '急躁，自我中心，固执，冲动，好争论'
      : 'Impatient, self-centered, stubborn, impulsive, argumentative',
    compatibility: language === 'zh'
      ? '与狮子座、射手座相配，与天秤座、双子座友好，与巨蟹座、摩羯座可能有冲突'
      : 'Compatible with Leo and Sagittarius, friendly with Libra and Gemini, potential conflicts with Cancer and Capricorn',
    namingTips: language === 'zh'
      ? '适合带有"火"、"阳"等字的名字，避免过于"水"、"寒"的字眼'
      : 'Names with fire and sun elements are suitable, avoid overly watery or cold elements',
    famousPersons: language === 'zh'
      ? ['成龙', '梅西', '莎士比亚', '郭晶晶']
      : ['Jackie Chan', 'Lionel Messi', 'William Shakespeare', 'Guo Jingjing']
  };
};

// 辅助函数 - 创建生辰八字信息
function createBirthInfo(birthDateTime, language) {
  return {
    solarDate: birthDateTime ? birthDateTime.replace('T', ' ') : new Date().toISOString().slice(0, 19).replace('T', ' '),
    lunarDate: '辛巳年四月初四日',
    zodiac: language === 'zh' ? '蛇' : 'Snake',
    eightChar: {
      year: '辛巳',
      month: '壬辰',
      day: '己未',
      hour: '丙子'
    },
    fiveElements: {
      year: '金水',
      month: '水土',
      day: '土土',
      hour: '火水'
    },
    naYin: {
      year: '白蜡金',
      month: '长流水',
      day: '天上火',
      hour: '涧下水'
    }
  };
}

// 辅助函数 - 简易姓氏拼音转换
function getPinyin(lastName) {
  const pinyinMap = {
    '李': 'Lǐ',
    '王': 'Wáng',
    '张': 'Zhāng',
    '刘': 'Liú',
    '陈': 'Chén',
    '杨': 'Yáng',
    '赵': 'Zhào',
    '黄': 'Huáng',
    '周': 'Zhōu',
    '吴': 'Wú',
    '徐': 'Xú',
    '孙': 'Sūn',
    '马': 'Mǎ',
    '朱': 'Zhū',
    '胡': 'Hú',
    '林': 'Lín',
    '郭': 'Guō',
    '何': 'Hé',
    '高': 'Gāo',
    '罗': 'Luó'
  };
  
  return pinyinMap[lastName] || 'Lǐ';
} 