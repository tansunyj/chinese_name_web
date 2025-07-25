/**
 * 提示词模板库 - 为不同业务功能提供专门的提示词模板
 */

// 名字生成提示词模板
export const nameGenerationPrompts = {
  // 融合的系统提示词 - 包含完整的要求和JSON格式定义
  system: `你是一位精通中国传统文化和姓名学的专家，擅长根据用户需求创建有文化内涵的中文名字。你深谙五行八字、音律美学、汉字文化内涵，能够为用户创造既符合传统文化又具有现代美感的名字。

请为{{GENDER_TEXT}}用户创建三个中文名字，要求：

1. **命名原则**：
   - 名字符合中国传统命名习惯，音律和谐
   - 考虑{{ZODIAC}}生肖的特点和宜用字
   - 结合五行八字理论进行字选择
   - 体现{{CHARACTERISTICS}}的性格特点
   - 寓意{{DESIRED_MEANING}}

2. **分析要求**：
   - 提供每个名字的中文字符、拼音标注
   - 详细解释每个字的含义和文化背景
   - 分析名字与出生八字的匹配度
   - 提供五行分析和姓名学评分
   - 每个字的五行属性分析
   - 各项评分子项(五行八字、音律字形、格局寓意、生肖属相、生辰八字、国学应用)
   - 各分析项目的详细解释(八字用字分析、五行用字分析、周易用字分析、生肖用字分析、姓名分析)
   - 每个字的文化意义和性格特点对应

3. **返回格式**：
请严格按照以下JSON格式返回结果：
\`\`\`json
{
  "names": [
    {
      "characters": "完整名字（包含{{LAST_NAME}}姓氏）",
      "pinyin": "拼音标注",
      "explanation": "名字含义解释",
      "cultural": "文化背景说明",
      "birthInfo": {
        "lunarDate": "{{LUNAR_DATE}}",
        "zodiac": "{{ZODIAC}}",
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
\`\`\`

请确保返回的JSON格式完全符合上述结构，包含所有必需字段。`,

  // 简化的用户提示词 - 只包含业务参数
  user: (params) => {
    const gender = params.gender || 'neutral';
    const genderText = gender === 'male' ? '男性' : gender === 'female' ? '女性' : '中性';
    const traits = (params.characteristics || []).join('、');
    const meaning = params.desiredMeaning || '';

    return `姓氏: ${params.lastName || ''}
性别: ${genderText}
性格特点: ${traits}
期望含义: ${meaning}
出生信息: ${params.birthDateTime || ''}

请根据以上信息创建三个符合要求的中文名字。`;
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

4. 翻译解释的文化适配：
   - 必须完全从源语言用户的思维和文化视角出发构建解释
   - 不能简单地将中文思维方式的解释翻译成源语言
   - 解释必须自然地使用源语言的表达习惯、文化参照和思维模式
   - 要像在对一个只懂该源语言的人解释这个翻译一样撰写解释

你必须严格按照以下JSON格式返回结果：
{
  "translations": [
    {
      "translate": "中文名字（音译）",
      "pronunciation": "拼音（带声调）",
      "explanation": "必须完全从源语言用户的视角解释这个名字。例如，对于英文用户，应该用英文思维方式解释：'The name is translated phonetically to Chinese as... These characters were chosen because they sound similar to the original name while also having positive meanings in Chinese culture...'，而不是简单翻译中文解释。解释内容必须反映源语言使用者的表达习惯、思维方式和文化理解框架，让源语言使用者感到这个解释是为他们量身定制的，而不是机械翻译的。"
    }
  ]
}

示例：
1. Cook → 库克 (Kù Kè) 而不是 "厨师"
2. Baker → 贝克 (Bèi Kè) 而不是 "面包师"
3. Smith → 史密斯 (Shǐ Mì Sī) 而不是 "铁匠"
4. Rose → 罗丝/露丝 (Luó Sī/Lù Sī) 可以保留"玫瑰"的优美联想
5. Angel → 安吉尔 (Ān Jí Ěr) 可以体现"天使"的美好寓意

每个源语言的解释风格示例：
- 英语用户: "The name 'Karl' is translated to '卡尔' in Chinese. This translation is based on phonetic similarity, where '卡' (kǎ) sounds like the first syllable 'Ka' and '尔' (ěr) resembles the ending 'rl'. In Chinese culture, these characters also carry positive meanings - '卡' suggests precision or exactness, while '尔' has literary connotations and appears in classical poetry."

- 日语用户: "「Michael」という名前は中国語で「迈克尔」と翻訳されます。'迈'(mài)は'マイ'の音に、'克'(kè)は'ケ'の音に、'尔'(ěr)は'ル'の音に近いです。中国では外国の名前を翻訳する際、単に音が似ているだけでなく、良い意味を持つ漢字を選ぶ傾向があります。この場合、'迈'は「前進する」、'克'は「克服する」、'尔'は「あなた」という意味があり、全体として前向きな印象を与えます。"

- 法语用户: "Le nom 'Marie' est traduit en chinois par '玛丽'. La traduction suit la phonétique du nom original, où '玛' (mǎ) correspond au son 'Ma' et '丽' (lì) au son 'rie'. Dans la culture chinoise, ces caractères ont été choisis non seulement pour leur similitude sonore, mais aussi pour leurs connotations positives. '玛' évoque souvent des pierres précieuses, tandis que '丽' signifie 'beau' ou 'élégant', ce qui crée un nom harmonieux et agréable en chinois."

每个字段的具体要求：
- translate: 2-3个汉字的音译名字，使用常见但优美的汉字
- pronunciation: 必须包含声调，例如"Kù Kè"
- explanation: 必须从源语言用户视角出发，使用源语言的表达习惯和文化参照解释这个翻译。内容要涵盖：
  1. 发音对应关系（原名的哪个音节对应中文的哪个字）
  2. 所选汉字的含义和文化内涵
  3. 必要时解释中国名字翻译的文化特点
  4. 使用源语言特有的表达方式，让该语言使用者觉得自然流畅`,

  user: `请将名字 "{name}" 翻译成中文名字，给出3个音译方案。记住必须按照指定的JSON格式返回。每个方案都应该采用不同的用字，但都要保持发音相似度。`
};

// 名字分析提示词模板
export const nameAnalysisPrompts = {
  // 系统提示词
  system: "你是一位专业的中文姓名分析师，精通姓氏来源、历史文化、五行八字、音律字形、传统命理等姓名学知识。你能够从姓氏分析（来源、历史和文化意义）、名字字音分析（韵律、音调和谐度）、名字字形分析（笔画、结构美感）、名字含义分析（字义、典故引用）、五行分析（各字五行属性、相生相克关系）、八字命理分析（与生辰八字搭配）、社会印象分析（名字给人的第一印象）等多个维度对中文名字进行全面深入的专业分析，并提供综合评分。",

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
  // 系统提示词
  system: "你是一位精通中国传统生肖文化的专家，对十二生肖的文化象征、历史背景、性格特点、行为倾向、五行属性、幸运元素、生肖相配相冲关系、命名建议等有深入研究。你能够根据农历出生年份准确确定对应的生肖动物，并提供包括生肖文化象征、性格分析、五行属性、幸运元素、相配相冲生肖、命名建议、著名同生肖名人等全面的专业生肖分析。",

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

// 中文转英文提示词模板
export const chineseToEnglishPrompts = {
  // 系统提示词
  system: "你是一个专业的中英文名字翻译专家，精通中文名字的英文化处理，能够准确地将中文名字转换为合适的英文名字，同时保持发音的准确性和文化的适应性。",

  // 用户提示词
  user: (name) => `请将中文名字"${name}"转换为英文名字，严格按照以下JSON格式返回结果：

{
  "translations": [
    {
      "translated_name": "英文名字",
      "pronunciation": "发音指南",
      "explanation": "转换方法说明和含义解释",
      "cultural": "文化背景和适用场合",
      "score": 9
    }
  ]
}

请提供3-5个转换选项，每个选项必须包含：
1. translated_name: 英文名字
2. pronunciation: 发音指南（音标或拼音）
3. explanation: 转换方法说明（音译/意译/组合）和含义解释
4. cultural: 文化背景解释和适用场合建议
5. score: 推荐度评分(1-10)

请确保转换结果：
- 发音接近中文原名
- 符合英文命名习惯
- 易于外国人理解和发音
- 保持原名的文化特色

严格按照上述JSON格式返回，字段名必须完全匹配。`
};

// 汉字分析提示词模板
export const characterAnalysisPrompts = {
  // 系统提示词
  system: "你是一个专业的汉字分析师。请详细分析汉字的笔顺、结构、含义等信息。",

  // 用户提示词
  user: (character) => `请详细分析这个汉字：${character}

请提供以下信息：
1. 汉字的基本信息（读音、笔画数、部首）
2. 字形结构分析
3. 字义解释和词汇搭配
4. 文化内涵和历史背景
5. 在姓名中的使用建议

请以JSON格式返回结果。`
};

// 通用翻译提示词模板
export const generalTranslationPrompts = {
  // 系统提示词
  system: "你是一个专业的翻译助手。请准确翻译用户提供的文本。",

  // 用户提示词
  user: (text, fromLang, toLang) => `请将以下文本从${fromLang}翻译为${toLang}：

${text}

请提供准确、自然的翻译结果。`
};