// 从girl.md文件中精选的另一批女孩名字
export const girlNamesFromMd = [
  // 文学名人典雅名字
  { id: 201, chinese: '文君', pinyin: 'Wén Jūn', meaning: '文雅的君子，既有才华，又有勇气与决绝', popularity: 5, categories: ['literary', 'brave'] },
  { id: 202, chinese: '姒', pinyin: 'Sì', meaning: '古代妯娌间年长者之称，名字古朴', popularity: 4, categories: ['ancient', 'elegant'] },
  { id: 203, chinese: '湘佩', pinyin: 'Xiāng Pèi', meaning: '湘水佩玉，典雅高洁', popularity: 5, categories: ['elegant', 'noble'] },
  { id: 204, chinese: '茵媺', pinyin: 'Yīn Měi', meaning: '繁茂美好的垫子，名字独特', popularity: 4, categories: ['unique', 'beautiful'] },
  { id: 205, chinese: '宜修', pinyin: 'Yí Xiū', meaning: '合宜的修养，才德兼备', popularity: 5, categories: ['virtuous', 'elegant'] },
  { id: 206, chinese: '小纨', pinyin: 'Xiǎo Wán', meaning: '取自"纨素"，指洁白精致的丝绢，名字清雅', popularity: 5, categories: ['pure', 'elegant'] },
  { id: 207, chinese: '小鸾', pinyin: 'Xiǎo Luán', meaning: '幼小的青鸾神鸟，仙姿玉质', popularity: 5, categories: ['ethereal', 'elegant'] },
  { id: 208, chinese: '素公', pinyin: 'Sù Gōng', meaning: '素雅公正，清高自持', popularity: 4, categories: ['elegant', 'fair'] },
  { id: 209, chinese: '远山', pinyin: 'Yuǎn Shān', meaning: '远处的山，意境宽广深远', popularity: 4, categories: ['broad', 'profound'] },
  { id: 210, chinese: '宛若', pinyin: 'Wǎn Ruò', meaning: '婉约如同，温柔美好', popularity: 5, categories: ['gentle', 'beautiful'] },
  
  // 自然风格名字
  { id: 211, chinese: '凝香', pinyin: 'Níng Xiāng', meaning: '凝聚香气，芬芳馥郁', popularity: 5, categories: ['fragrant', 'concentrated'] },
  { id: 212, chinese: '莲友', pinyin: 'Lián Yǒu', meaning: '以莲为友，纯洁高雅', popularity: 4, categories: ['pure', 'elegant'] },
  { id: 213, chinese: '湘苹', pinyin: 'Xiāng Píng', meaning: '湘水边的苹果，清新甜美', popularity: 5, categories: ['fresh', 'sweet'] },
  { id: 214, chinese: '片霞', pinyin: 'Piàn Xiá', meaning: '一片彩霞，绚烂美丽', popularity: 4, categories: ['colorful', 'beautiful'] },
  { id: 215, chinese: '深明', pinyin: 'Shēn Míng', meaning: '深刻明晰，洞察世事', popularity: 4, categories: ['insightful', 'clear'] },
  { id: 216, chinese: '静香', pinyin: 'Jìng Xiāng', meaning: '安静的香气，幽雅芬芳', popularity: 5, categories: ['quiet', 'fragrant'] },
  { id: 217, chinese: '江香', pinyin: 'Jiāng Xiāng', meaning: '江水的芬芳，清新自然', popularity: 4, categories: ['natural', 'fragrant'] },
  { id: 218, chinese: '雨华', pinyin: 'Yǔ Huá', meaning: '雨中的光华，晶莹剔透', popularity: 5, categories: ['crystalline', 'beautiful'] },
  { id: 219, chinese: '晚山', pinyin: 'Wǎn Shān', meaning: '黄昏的山，宁静深沉', popularity: 4, categories: ['peaceful', 'profound'] },
  { id: 220, chinese: '碧春', pinyin: 'Bì Chūn', meaning: '碧绿的春天，生机勃勃', popularity: 5, categories: ['vital', 'lively'] },
  
  // 古典意境名字
  { id: 221, chinese: '润石', pinyin: 'Rùn Shí', meaning: '滋润石头，刚柔并济', popularity: 4, categories: ['nurturing', 'balanced'] },
  { id: 222, chinese: '景芳', pinyin: 'Jǐng Fāng', meaning: '景仰芳华，充满钦佩', popularity: 5, categories: ['admiring', 'flourishing'] },
  { id: 223, chinese: '思柏', pinyin: 'Sī Bǎi', meaning: '思念松柏，高洁坚贞', popularity: 4, categories: ['noble', 'loyal'] },
  { id: 224, chinese: '希光', pinyin: 'Xī Guāng', meaning: '希望与光明，充满期待', popularity: 5, categories: ['hopeful', 'bright'] },
  { id: 225, chinese: '瑶华', pinyin: 'Yáo Huá', meaning: '美玉的光华，珍贵耀眼', popularity: 5, categories: ['precious', 'radiant'] },
  { id: 226, chinese: '友菊', pinyin: 'Yǒu Jú', meaning: '以菊为友，清高自许', popularity: 4, categories: ['noble', 'elegant'] },
  { id: 227, chinese: '瑞芸', pinyin: 'Ruì Yún', meaning: '祥瑞的芸香，吉祥芬芳', popularity: 5, categories: ['auspicious', 'fragrant'] },
  { id: 228, chinese: '静维', pinyin: 'Jìng Wéi', meaning: '宁静地维系，充满佛家禅意', popularity: 4, categories: ['peaceful', 'zen'] },
  { id: 229, chinese: '枕琴', pinyin: 'Zhěn Qín', meaning: '以琴为枕，沉浸音乐', popularity: 4, categories: ['musical', 'immersive'] },
  { id: 230, chinese: '佩香', pinyin: 'Pèi Xiāng', meaning: '佩戴香气，幽雅芬芳', popularity: 5, categories: ['elegant', 'fragrant'] },
  
  // 气质高雅名字
  { id: 231, chinese: '湘婷', pinyin: 'Xiāng Tíng', meaning: '湘水亭亭，优雅挺立', popularity: 5, categories: ['elegant', 'graceful'] },
  { id: 232, chinese: '嘉淑', pinyin: 'Jiā Shū', meaning: '美好贤淑，品德高尚', popularity: 5, categories: ['virtuous', 'good'] },
  { id: 233, chinese: '卓文', pinyin: 'Zhuó Wén', meaning: '卓越的文采，才华横溢', popularity: 5, categories: ['outstanding', 'literary'] },
  { id: 234, chinese: '绮兰', pinyin: 'Qǐ Lán', meaning: '华丽的兰草，雅致芬芳', popularity: 5, categories: ['elegant', 'fragrant'] },
  { id: 235, chinese: '佩珊', pinyin: 'Pèi Shān', meaning: '佩戴珊瑚，华美珍贵', popularity: 4, categories: ['precious', 'beautiful'] },
  { id: 236, chinese: '韵芬', pinyin: 'Yùn Fēn', meaning: '韵律芬芳，优雅动人', popularity: 5, categories: ['elegant', 'fragrant'] },
  { id: 237, chinese: '香轮', pinyin: 'Xiāng Lún', meaning: '香气如轮，循环不息', popularity: 4, categories: ['fragrant', 'continuous'] },
  { id: 238, chinese: '飞卿', pinyin: 'Fēi Qīng', meaning: '飞翔的贵人，自由高贵', popularity: 4, categories: ['free', 'noble'] },
  { id: 239, chinese: '静香', pinyin: 'Jìng Xiāng', meaning: '安静的香气，沉稳芬芳', popularity: 5, categories: ['calm', 'fragrant'] },
  { id: 240, chinese: '晓华', pinyin: 'Xiǎo Huá', meaning: '清晨的光华，明亮耀眼', popularity: 5, categories: ['bright', 'radiant'] },
  
  // 个性飒爽名字
  { id: 241, chinese: '青桐', pinyin: 'Qīng Tóng', meaning: '青色的梧桐，象征高洁与领袖气质', popularity: 4, categories: ['noble', 'leadership'] },
  { id: 242, chinese: '无双', pinyin: 'Wú Shuāng', meaning: '独一无二，绝世无双', popularity: 5, categories: ['unique', 'outstanding'] },
  { id: 243, chinese: '灵珊', pinyin: 'Líng Shān', meaning: '灵秀的珊瑚，娇美可爱', popularity: 5, categories: ['lovely', 'beautiful'] },
  { id: 244, chinese: '翠翠', pinyin: 'Cuì Cuì', meaning: '如翡翠般翠绿鲜艳', popularity: 4, categories: ['vibrant', 'beautiful'] },
  { id: 245, chinese: '绿萼', pinyin: 'Lǜ È', meaning: '绿色的花萼，清新脱俗', popularity: 5, categories: ['fresh', 'unique'] },
  { id: 246, chinese: '程英', pinyin: 'Chéng Yīng', meaning: '才智出众，沉稳内敛', popularity: 4, categories: ['talented', 'composed'] },
  { id: 247, chinese: '凌波', pinyin: 'Líng Bō', meaning: '凌波微步，罗袜生尘，轻盈优美', popularity: 5, categories: ['graceful', 'elegant'] },
  { id: 248, chinese: '朝英', pinyin: 'Cháo Yīng', meaning: '早晨的英华，才华武功冠绝', popularity: 4, categories: ['talented', 'strong'] },
  { id: 249, chinese: '小昭', pinyin: 'Xiǎo Zhāo', meaning: '温柔体贴，善解人意', popularity: 5, categories: ['gentle', 'understanding'] },
  { id: 250, chinese: '秋瑾', pinyin: 'Qiū Jǐn', meaning: '秋天的美玉，坚强巾帼英雄', popularity: 5, categories: ['strong', 'heroic'] }
];

export default girlNamesFromMd;
