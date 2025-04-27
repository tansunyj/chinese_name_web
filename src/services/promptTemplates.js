/**
 * 提示词模板库 - 为不同业务功能提供专门的提示词模板
 */

// 名字生成提示词模板
export const nameGenerationPrompts = {
  // 中文版提示词
  zh: (params) => {
    const gender = params.gender || 'neutral';
    const genderText = gender === 'male' ? '男性' : gender === 'female' ? '女性' : '中性';
    const traits = (params.characteristics || []).join('、');
    const meaning = params.desiredMeaning || '';
    
    return `请为一位${genderText}用户创建三个中文名字。
姓氏: ${params.lastName || ''}
性格特点: ${traits}
期望含义: ${meaning}
出生信息: ${params.birthDateTime || ''}

请创建三个独特的中文名字，要求：
1. 名字符合中国传统命名习惯，音律和谐
2. 提供每个名字的中文字符、拼音标注
3. 详细解释每个字的含义和文化背景
4. 分析名字与出生八字的匹配度
5. 提供五行分析和姓名学评分

请以JSON格式返回结果，符合以下结构：
\`\`\`json
{
  "names": [
    {
      "characters": "完整名字（包含姓氏）",
      "pinyin": "拼音标注",
      "explanation": "名字含义解释",
      "cultural": "文化背景说明",
      "analysis": {
        "strokes": 笔画总数,
        "fiveElementsBalance": "五行平衡分析",
        "soundMeaning": "音律与含义分析",
        "compatibility": "与生辰八字兼容性",
        "score": 综合评分(0-100)
      }
    }
  ]
}
\`\`\``;
  },
  
  // 英文版提示词
  en: (params) => {
    const traits = (params.characteristics || []).join(', ');
    const meaning = params.desiredMeaning || '';
    
    return `Please create three Chinese names for a ${params.gender || 'neutral'} user.
Last name: ${params.lastName || ''}
Personality traits: ${traits}
Desired meaning: ${meaning}
Birth information: ${params.birthDateTime || ''}

Please create three unique Chinese names with:
1. Names should follow traditional Chinese naming conventions with harmonious pronunciation
2. Provide Chinese characters and pinyin notation for each name
3. Detailed explanation of each character's meaning and cultural background
4. Analysis of compatibility with birth information
5. Five elements analysis and name score

Please return the result in JSON format following this structure:
\`\`\`json
{
  "names": [
    {
      "characters": "Full name including surname",
      "pinyin": "Pinyin notation",
      "explanation": "Name meaning explanation",
      "cultural": "Cultural background",
      "analysis": {
        "strokes": totalStrokeCount,
        "fiveElementsBalance": "Five elements balance analysis",
        "soundMeaning": "Sound and meaning analysis",
        "compatibility": "Compatibility with birth chart",
        "score": overallScore(0-100)
      }
    }
  ]
}
\`\`\``;
  }
};

// 名字翻译提示词模板
export const nameTranslationPrompts = {
  // 中文版提示词
  zh: (params) => {
    return `请将以下${params.gender || ''}英文名字翻译成中文名字：
姓氏: ${params.lastName || ''}
名字: ${params.firstName || ''}

请提供3个最佳的中文翻译选项，要求：
1. 发音要尽量接近原名
2. 含义要积极正面
3. 符合中国传统命名习惯
4. 考虑名字的性别特征

对于每个翻译选项，请提供：
- 中文字符
- 拼音标注
- 详细的含义解释
- 发音相似度评分

请以JSON格式返回结果：
\`\`\`json
{
  "results": [
    {
      "characters": "中文名字（包含姓氏）",
      "pinyin": "拼音标注",
      "meaning": "名字含义",
      "pronunciationSimilarity": "发音相似度评分（1-10）"
    }
  ]
}
\`\`\``;
  },
  
  // 英文版提示词
  en: (params) => {
    return `Please translate the following ${params.gender || ''} English name into Chinese:
Last name: ${params.lastName || ''}
First name: ${params.firstName || ''}

Please provide 3 best Chinese translation options with:
1. Pronunciation should be as close as possible to the original name
2. Meaning should be positive
3. Should conform to Chinese naming conventions
4. Consider gender characteristics of the name

For each translation option, please provide:
- Chinese characters
- Pinyin notation
- Detailed meaning explanation
- Pronunciation similarity score

Please return the result in JSON format:
\`\`\`json
{
  "results": [
    {
      "characters": "Chinese name (including surname)",
      "pinyin": "Pinyin notation",
      "meaning": "Name meaning",
      "pronunciationSimilarity": "Pronunciation similarity score (1-10)"
    }
  ]
}
\`\`\``;
  }
};

// 名字分析提示词模板
export const nameAnalysisPrompts = {
  // 中文版提示词
  zh: (params) => {
    return `请详细分析这个中文名字: ${params.name || ''}。
出生日期: ${params.birthDate || ''}

请提供全面的名字分析，包括：
1. 姓氏分析（来源、历史和文化意义）
2. 名字字音分析（韵律、音调和谐度）
3. 名字字形分析（笔画、结构美感）
4. 名字含义分析（字义、典故引用）
5. 五行分析（各字五行属性、相生相克关系）
6. 八字命理分析（与生辰八字搭配）
7. 社会印象分析（名字给人的第一印象）
8. 综合评分（0-100）

请以JSON格式返回结果：
\`\`\`json
{
  "name": "分析的名字",
  "surname": {
    "origin": "姓氏起源",
    "history": "历史背景",
    "cultural": "文化意义"
  },
  "givenName": {
    "characters": ["名字第一字", "名字第二字"],
    "meanings": ["第一字含义", "第二字含义"]
  },
  "pronunciation": {
    "pinyin": "完整拼音",
    "tones": "声调组合",
    "harmony": "音韵和谐度评分(1-10)"
  },
  "strokes": {
    "total": 总笔画数,
    "distribution": [第一字笔画, 第二字笔画, ...],
    "balance": "笔画平衡性评价"
  },
  "fiveElements": {
    "elements": ["第一字五行", "第二字五行", ...],
    "relationship": "五行关系分析",
    "compatibility": "与生辰八字的兼容性"
  },
  "impressions": ["社会印象关键词1", "社会印象关键词2", ...],
  "overallScore": 综合评分(0-100),
  "recommendations": ["改进建议1", "改进建议2", ...]
}
\`\`\``;
  },
  
  // 英文版提示词
  en: (params) => {
    return `Please analyze this Chinese name in detail: ${params.name || ''}.
Birth date: ${params.birthDate || ''}

Please provide a comprehensive name analysis, including:
1. Surname analysis (origin, history, cultural significance)
2. Phonetic analysis (rhythm, tonal harmony)
3. Shape analysis (stroke count, structural aesthetics)
4. Meaning analysis (character meanings, literary references)
5. Five elements analysis (elements of each character, interactions)
6. Eight characters compatibility (with birth chart)
7. Social impression analysis (first impressions given by the name)
8. Overall score (0-100)

Please return the result in JSON format:
\`\`\`json
{
  "name": "analyzed name",
  "surname": {
    "origin": "surname origin",
    "history": "historical background",
    "cultural": "cultural significance"
  },
  "givenName": {
    "characters": ["first character", "second character"],
    "meanings": ["first character meaning", "second character meaning"]
  },
  "pronunciation": {
    "pinyin": "complete pinyin",
    "tones": "tone pattern",
    "harmony": "phonetic harmony score(1-10)"
  },
  "strokes": {
    "total": totalStrokeCount,
    "distribution": [firstCharStrokes, secondCharStrokes, ...],
    "balance": "stroke balance evaluation"
  },
  "fiveElements": {
    "elements": ["first char element", "second char element", ...],
    "relationship": "five elements relationship analysis",
    "compatibility": "compatibility with birth chart"
  },
  "impressions": ["social impression keyword1", "social impression keyword2", ...],
  "overallScore": overallScore(0-100),
  "recommendations": ["improvement suggestion1", "improvement suggestion2", ...]
}
\`\`\``;
  }
};

// 生肖分析提示词模板
export const zodiacAnalysisPrompts = {
  // 中文版提示词
  zh: (params) => {
    return `请根据农历出生年份${params.birthYear || ''}详细分析对应的中国生肖。

请提供全面的生肖分析，包括：
1. 确定对应的生肖动物
2. 生肖的文化象征和历史背景
3. 生肖的性格特点和行为倾向
4. 五行属性和相关的幸运元素
5. 相配和相冲的生肖
6. 生肖与命名的关系建议
7. 著名的同生肖名人

请以JSON格式返回结果：
\`\`\`json
{
  "sign": "生肖动物",
  "element": "五行属性",
  "personality": {
    "strengths": ["优点1", "优点2", ...],
    "weaknesses": ["缺点1", "缺点2", ...],
    "traits": ["特点1", "特点2", ...]
  },
  "compatibility": {
    "bestMatch": ["最佳配对1", "最佳配对2", ...],
    "avoid": ["相冲生肖1", "相冲生肖2", ...]
  },
  "luckyElements": {
    "colors": ["幸运色1", "幸运色2", ...],
    "numbers": ["幸运数字1", "幸运数字2", ...],
    "directions": ["幸运方位1", "幸运方位2", ...]
  },
  "namingTips": ["取名建议1", "取名建议2", ...],
  "famousPersons": ["名人1", "名人2", ...]
}
\`\`\``;
  },
  
  // 英文版提示词
  en: (params) => {
    return `Please provide a detailed analysis of the Chinese zodiac based on the lunar birth year ${params.birthYear || ''}.

Please provide a comprehensive zodiac analysis, including:
1. Determine the corresponding zodiac animal
2. Cultural symbolism and historical background of the zodiac
3. Personality traits and behavioral tendencies
4. Five elements properties and related lucky elements
5. Compatible and conflicting zodiacs
6. Naming recommendations related to the zodiac
7. Famous people born in the same zodiac year

Please return the result in JSON format:
\`\`\`json
{
  "sign": "zodiac animal",
  "element": "five element property",
  "personality": {
    "strengths": ["strength1", "strength2", ...],
    "weaknesses": ["weakness1", "weakness2", ...],
    "traits": ["trait1", "trait2", ...]
  },
  "compatibility": {
    "bestMatch": ["best match1", "best match2", ...],
    "avoid": ["conflicting zodiac1", "conflicting zodiac2", ...]
  },
  "luckyElements": {
    "colors": ["lucky color1", "lucky color2", ...],
    "numbers": ["lucky number1", "lucky number2", ...],
    "directions": ["lucky direction1", "lucky direction2", ...]
  },
  "namingTips": ["naming tip1", "naming tip2", ...],
  "famousPersons": ["famous person1", "famous person2", ...]
}
\`\`\``;
  }
}; 