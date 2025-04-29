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
    
    return `请为一位${genderText}用户创建两个中文名字。
姓氏: ${params.lastName || ''}
性格特点: ${traits}
期望含义: ${meaning}
出生信息: ${params.birthDateTime || ''}

请创建两个独特的中文名字，要求：
1. 名字符合中国传统命名习惯，音律和谐
2. 提供每个名字的中文字符、拼音标注
3. 详细解释每个字的含义和文化背景
4. 分析名字与出生八字的匹配度
5. 提供五行分析和姓名学评分
6. 每个字的五行属性
7. 各项评分子项(五行八字、音律字形、格局寓意、生肖属相、生辰八字、国学应用)
8. 各分析项目的详细解释(八字用字分析、五行用字分析、周易用字分析、生肖用字分析、姓名分析)
9. 每个字的文化意义和性格特点对应

请以JSON格式返回结果，符合以下结构：
\`\`\`json
{
  "names": [
    {
      "characters": "完整名字（包含姓氏）",
      "pinyin": "拼音标注",
      "explanation": "名字含义解释",
      "cultural": "文化背景说明",
      "birthInfo": {
        "lunarDate": "农历日期",
        "zodiac": "生肖",
        "eightChar": {
          "year": "年柱",
          "month": "月柱",
          "day": "日柱",
          "hour": "时柱"
        }
      },
      "analysis": {
        "strokes": 笔画总数,
        "characterElements": ["第一个字的五行", "第二个字的五行", "第三个字的五行"],
        "fiveElementsBalance": "五行平衡分析",
        "soundMeaning": "音律与含义分析",
        "compatibility": "与生辰八字兼容性",
        "score": 综合评分(0-100),
        "subscores": {
          "fiveElements": 五行八字评分(0-100),
          "soundShape": 音律字形评分(0-100),
          "meaning": 格局寓意评分(0-100),
          "zodiac": 生肖属相评分(0-100),
          "birthChart": 生辰八字评分(0-100),
          "classical": 国学应用评分(0-100)
        },
        "eightCharacterAnalysis": "详细的八字用字分析解释",
        "fiveElementsAnalysis": "详细的五行用字分析解释",
        "iChingAnalysis": "详细的周易用字分析解释", 
        "zodiacAnalysis": "详细的生肖用字分析解释",
        "nameAnalysis": "详细的姓名分析解释"
      },
      "characterMeanings": {
        "字1": "该字的详细含义解释",
        "字2": "该字的详细含义解释"
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
6. Five elements attribute for each character
7. Subscores for different aspects (Five Elements & Eight Characters, Sound & Shape, Meaning & Structure, Zodiac Compatibility, Birth Chart, Classical Usage)
8. Detailed explanation for each analysis section (Eight Characters Analysis, Five Elements Analysis, I-Ching Analysis, Zodiac Analysis, Name Analysis)
9. Cultural meaning and personality traits for each character

Please return the result in JSON format following this structure:
\`\`\`json
{
  "names": [
    {
      "characters": "Full name including surname",
      "pinyin": "Pinyin notation",
      "explanation": "Name meaning explanation",
      "cultural": "Cultural background",
      "birthInfo": {
        "lunarDate": "Lunar date",
        "zodiac": "Chinese zodiac",
        "eightChar": {
          "year": "Year pillar",
          "month": "Month pillar",
          "day": "Day pillar",
          "hour": "Hour pillar"
        }
      },
      "analysis": {
        "strokes": totalStrokeCount,
        "characterElements": ["First character's element", "Second character's element", "Third character's element"],
        "fiveElementsBalance": "Five elements balance analysis",
        "soundMeaning": "Sound and meaning analysis",
        "compatibility": "Compatibility with birth chart",
        "score": overallScore(0-100),
        "subscores": {
          "fiveElements": fiveElementsScore(0-100),
          "soundShape": soundShapeScore(0-100),
          "meaning": meaningScore(0-100),
          "zodiac": zodiacScore(0-100),
          "birthChart": birthChartScore(0-100),
          "classical": classicalScore(0-100)
        },
        "eightCharacterAnalysis": "Detailed eight characters analysis explanation",
        "fiveElementsAnalysis": "Detailed five elements analysis explanation",
        "iChingAnalysis": "Detailed I-Ching analysis explanation", 
        "zodiacAnalysis": "Detailed zodiac analysis explanation",
        "nameAnalysis": "Detailed name analysis explanation"
      },
      "characterMeanings": {
        "char1": "Detailed meaning of this character",
        "char2": "Detailed meaning of this character"
      }
    }
  ]
}
\`\`\``;
  }
};

// 名字翻译提示词模板
export const nameTranslationPrompts = {
  system: `你是一个专业的中文姓名翻译专家。请将外国名字翻译成中文名字。

翻译规则：
1. 优先使用音译方式：
   - 对于人名，应该优先考虑音译而不是意译
   - 即使这个名字有具体含义（如 Cook, Baker, Smith 等），也应该采用音译
   - 音译时要选择读音相近且寓意优美的汉字

2. 音译原则：
   - 选择声调优美、寓意积极的汉字
   - 避免使用生僻字或负面含义的字
   - 确保音译后的名字朗朗上口
   - 尽量选用常用字，但要避免过于普通的翻译

3. 特殊情况处理：
   - 如果名字中包含有特殊含义的部分（如 Angel, Rose 等），可以在音译的同时兼顾其美好含义
   - 对于复合名字，要确保整体发音流畅
   - 考虑中国传统文化中的用字习惯

你必须严格按照以下JSON格式返回结果：
{
  "translations": [
    {
      "translatedName": "中文名字（音译）",
      "pronunciationGuide": "拼音（带声调）",
      "explanation": "说明这个音译名字的发音相似度，以及选用这些汉字的原因和寓意"
    }
  ]
}

示例：
1. Cook → 库克 (Kù Kè) 而不是 "厨师"
2. Baker → 贝克 (Bèi Kè) 而不是 "面包师"
3. Smith → 史密斯 (Shǐ Mì Sī) 而不是 "铁匠"
4. Rose → 罗丝/露丝 (Luó Sī/Lù Sī) 可以保留"玫瑰"的优美联想
5. Angel → 安吉尔 (Ān Jí Ěr) 可以体现"天使"的美好寓意

每个字段的具体要求：
- translatedName: 2-3个汉字的音译名字，使用常见但优美的汉字
- pronunciationGuide: 必须包含声调，例如"Kù Kè"
- explanation: 解释选用这些汉字的原因，包括：
  1. 与原名发音的对应关系
  2. 选用这些汉字的文化考虑
  3. 名字整体的寓意`,

  user: `请将名字 "{name}" 翻译成中文名字，给出3个音译方案。记住必须按照指定的JSON格式返回。每个方案都应该采用不同的用字，但都要保持发音相似度。`
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