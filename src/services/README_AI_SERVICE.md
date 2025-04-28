# OpenAI服务集成说明

本文档介绍如何在项目中集成和使用基于Vercel AI SDK的OpenAI服务。

## 必要依赖

要使用`openaiService.js`，需要安装以下依赖包：

```bash
# 安装Vercel AI SDK核心包和OpenAI提供商
npm install ai @ai-sdk/openai
```

## 配置说明

服务使用了现有的`aiConfig.js`配置文件来获取API密钥和其他设置。确保配置文件中包含以下字段：

- `baseConfig.apiKey`: OpenAI API密钥
- `baseConfig.useProxy`: 是否使用代理（布尔值）
- `baseConfig.proxyUrl`: 代理URL（如果使用代理）
- `models.default`: 默认使用的模型名称

## 使用示例

以下是各功能的简单使用示例：

### 1. 生成中文名称

```javascript
import openaiService from '@/services/openaiService';

// 组件中使用
async function generateName() {
  try {
    const result = await openaiService.generateChineseName({
      inputName: '约翰',
      gender: '男',
      style: '传统',
      meaning: '希望表达勇气和智慧'
    });
    
    console.log(result); // 包含生成的名字数组
  } catch (error) {
    console.error('生成名字失败:', error);
  }
}
```

### 2. 分析汉字笔顺

```javascript
import openaiService from '@/services/openaiService';

async function analyzeCharacter() {
  try {
    const result = await openaiService.analyzeCharacterStrokes({
      character: '爱'
    });
    
    console.log(result); // 包含笔顺分析结果
  } catch (error) {
    console.error('分析汉字失败:', error);
  }
}
```

### 3. 名字翻译

```javascript
import openaiService from '@/services/openaiService';

async function translateUserName() {
  try {
    const result = await openaiService.translateName({
      name: 'Jennifer',
      sourceLanguage: 'en',
      targetLanguage: 'zh',
      method: 'phonetic'
    });
    
    console.log(result); // 包含翻译后的名字选项
  } catch (error) {
    console.error('翻译名字失败:', error);
  }
}
```

### 4. 中文转拼音

```javascript
import openaiService from '@/services/openaiService';

async function convertNameToPinyin() {
  try {
    const result = await openaiService.convertToPinyin({
      text: '张三',
      format: 'standard',
      separator: 'space'
    });
    
    console.log(result); // 包含拼音转换结果
  } catch (error) {
    console.error('转换拼音失败:', error);
  }
}
```

### 5. 拼音转中文

```javascript
import openaiService from '@/services/openaiService';

async function convertPinyinToChinese() {
  try {
    const result = await openaiService.convertPinyinToChinese({
      pinyin: 'zhang san',
      purpose: 'name',
      preference: 'common'
    });
    
    console.log(result); // 包含可能的中文写法
  } catch (error) {
    console.error('转换中文失败:', error);
  }
}
```

## 自定义提示词

如果需要更灵活的AI调用，可以使用基础方法：

```javascript
import openaiService from '@/services/openaiService';

// 生成文本
async function generateCustomText() {
  try {
    const result = await openaiService.generateAIText({
      prompt: '介绍一下中国的传统命名文化',
      temperature: 0.7,
      maxTokens: 1000
    });
    
    console.log(result.text);
  } catch (error) {
    console.error('生成文本失败:', error);
  }
}

// 生成结构化数据
async function generateCustomObject() {
  try {
    const schema = {
      type: 'object',
      properties: {
        name: { type: 'string' },
        age: { type: 'integer' },
        interests: { 
          type: 'array',
          items: { type: 'string' }
        }
      },
      required: ['name', 'age', 'interests']
    };
    
    const result = await openaiService.generateAIObject({
      prompt: '生成一个虚构人物的信息',
      schema: schema
    });
    
    console.log(result);
  } catch (error) {
    console.error('生成结构化数据失败:', error);
  }
}
```

## 注意事项

1. 确保网络环境可以访问OpenAI API，或配置了正确的代理
2. API调用会消耗tokens，请合理控制使用频率
3. 生成结果可能存在不确定性，建议加入适当的结果验证机制
4. 对于复杂的生成任务，考虑增加重试机制和错误处理 