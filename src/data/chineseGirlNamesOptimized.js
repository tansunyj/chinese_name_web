// 从girl.md文件中精选的女孩名字数据
export const optimizedGirlNames = [
  // 古典诗意类名字
  { id: 101, chinese: '清照', pinyin: 'Qīng Zhào', meaning: '如月光般清澈明亮，映照出婉约与风骨', popularity: 5, categories: ['literary', 'elegant'] },
  { id: 102, chinese: '婉儿', pinyin: 'Wǎn Ér', meaning: '柔美如儿，与其在权力中枢的才干形成迷人反差', popularity: 5, categories: ['elegant', 'talented'] },
  { id: 103, chinese: '若兰', pinyin: 'Ruò Lán', meaning: '如兰草般清雅，外表柔弱，内心坚强明理', popularity: 5, categories: ['elegant', 'strong'] },
  { id: 104, chinese: '玄机', pinyin: 'Xuán Jī', meaning: '天意、奥秘，充满道家的神秘与宿命感', popularity: 4, categories: ['mysterious', 'profound'] },
  { id: 105, chinese: '如是', pinyin: 'Rú Shì', meaning: '出自"我见青山多妩媚，料青山见我应如是"，自信、妩媚而孤傲', popularity: 5, categories: ['confident', 'charming'] },
  { id: 106, chinese: '小宛', pinyin: 'Xiǎo Wǎn', meaning: '娇小宛转，温婉动人', popularity: 5, categories: ['gentle', 'charming'] },
  { id: 107, chinese: '香君', pinyin: 'Xiāng Jūn', meaning: '芬芳馥郁，气节凛然', popularity: 5, categories: ['fragrant', 'principled'] },
  { id: 108, chinese: '横波', pinyin: 'Héng Bō', meaning: '眼神流动，如秋水横波，充满动态美感', popularity: 4, categories: ['beautiful', 'dynamic'] },
  { id: 109, chinese: '玉京', pinyin: 'Yù Jīng', meaning: '天帝居所，仙气飘逸', popularity: 4, categories: ['celestial', 'ethereal'] },
  { id: 110, chinese: '小小', pinyin: 'Xiǎo Xiǎo', meaning: '叠字"小小"惹人怜爱，清新可人', popularity: 5, categories: ['cute', 'charming'] },
  
  // 文学才女风格名字
  { id: 111, chinese: '灵运', pinyin: 'Líng Yùn', meaning: '天地灵秀，运行不息', popularity: 4, categories: ['talented', 'natural'] },
  { id: 112, chinese: '文姬', pinyin: 'Wén Jī', meaning: '有文采的女子，博学多才', popularity: 5, categories: ['literary', 'talented'] },
  { id: 113, chinese: '梦钰', pinyin: 'Mèng Yù', meaning: '梦见美玉，珍贵美好', popularity: 5, categories: ['precious', 'beautiful'] },
  { id: 114, chinese: '采萍', pinyin: 'Cǎi Píng', meaning: '采集浮萍，清雅而略带漂泊之感', popularity: 4, categories: ['elegant', 'wandering'] },
  { id: 115, chinese: '非烟', pinyin: 'Fēi Yān', meaning: '如梦似幻，暗示其短暂而凄美的生命', popularity: 5, categories: ['dreamlike', 'beautiful'] },
  { id: 116, chinese: '小玉', pinyin: 'Xiǎo Yù', meaning: '娇弱如玉，情极深，感情丰富', popularity: 5, categories: ['precious', 'emotional'] },
  { id: 117, chinese: '秋娘', pinyin: 'Qiū Niáng', meaning: '带有历经风霜的成熟风韵', popularity: 4, categories: ['mature', 'elegant'] },
  { id: 118, chinese: '莫愁', pinyin: 'Mò Chóu', meaning: '父母的朴素祝愿，愿其一生无忧', popularity: 5, categories: ['carefree', 'blessed'] },
  { id: 119, chinese: '罗敷', pinyin: 'Luó Fū', meaning: '美丽坚贞女子的代称，名字大气', popularity: 4, categories: ['beautiful', 'loyal'] },
  { id: 120, chinese: '宛若', pinyin: 'Wǎn Ruò', meaning: '婉约如同，形容柔美如仙', popularity: 5, categories: ['gentle', 'beautiful'] },
  
  // 古代美人名字
  { id: 121, chinese: '昭君', pinyin: 'Zhāo Jūn', meaning: '彰显君德，出塞和亲的故事流芳百世', popularity: 5, categories: ['virtuous', 'beautiful'] },
  { id: 122, chinese: '飞燕', pinyin: 'Fēi Yàn', meaning: '体态轻盈，能作掌上舞', popularity: 5, categories: ['graceful', 'elegant'] },
  { id: 123, chinese: '宓', pinyin: 'Mì', meaning: '静谧美好，与其"翩若惊鸿"的形象相符', popularity: 4, categories: ['beautiful', 'graceful'] },
  { id: 124, chinese: '丽华', pinyin: 'Lì Huá', meaning: '美丽光彩，发长七尺，光可鉴人', popularity: 5, categories: ['beautiful', 'radiant'] },
  { id: 125, chinese: '小怜', pinyin: 'Xiǎo Lián', meaning: '充满爱怜之意，娇柔可爱', popularity: 5, categories: ['lovely', 'charming'] },
  { id: 126, chinese: '夏姬', pinyin: 'Xià Jī', meaning: '夏季出生的美女，充满活力', popularity: 4, categories: ['beautiful', 'vibrant'] },
  { id: 127, chinese: '玉环', pinyin: 'Yù Huán', meaning: '玉制环佩，名字圆润华贵，与丰腴之美相符', popularity: 5, categories: ['precious', 'beautiful'] },
  { id: 128, chinese: '宝钗', pinyin: 'Bǎo Chāi', meaning: '珍贵头钗，端庄世故、沉稳大气的大家闺秀风范', popularity: 5, categories: ['dignified', 'elegant'] },
  { id: 129, chinese: '黛玉', pinyin: 'Dài Yù', meaning: '青黑色的远山眉黛与高洁易碎的美玉，清雅绝尘，孤高忧郁', popularity: 5, categories: ['elegant', 'sensitive'] },
  { id: 130, chinese: '道韫', pinyin: 'Dào Yùn', meaning: '"咏絮之才"的典故来源，蕴含玄理与深意，风韵高迈', popularity: 4, categories: ['talented', 'elegant'] },
  
  // 清新淡雅类名字
  { id: 131, chinese: '浣萍', pinyin: 'Huàn Píng', meaning: '洗涤浮萍，清雅而略带漂泊之感', popularity: 4, categories: ['elegant', 'wandering'] },
  { id: 132, chinese: '寄湘', pinyin: 'Jì Xiāng', meaning: '寄情湘水，浪漫而忧伤', popularity: 4, categories: ['romantic', 'melancholic'] },
  { id: 133, chinese: '佩珊', pinyin: 'Pèi Shān', meaning: '佩戴珊瑚，华美珍贵', popularity: 5, categories: ['precious', 'elegant'] },
  { id: 134, chinese: '梅仙', pinyin: 'Méi Xiān', meaning: '梅花仙子，清雅脱俗', popularity: 5, categories: ['elegant', 'ethereal'] },
  { id: 135, chinese: '冷玉', pinyin: 'Lěng Yù', meaning: '清冷高贵，意象鲜明', popularity: 4, categories: ['noble', 'elegant'] },
  { id: 136, chinese: '素蕖', pinyin: 'Sù Qú', meaning: '素雅的荷花，出淤泥而不染', popularity: 5, categories: ['pure', 'elegant'] },
  { id: 137, chinese: '瘦鸾', pinyin: 'Shòu Luán', meaning: '清瘦的鸾鸟，带着病态的美感与仙气', popularity: 4, categories: ['ethereal', 'elegant'] },
  { id: 138, chinese: '逸风', pinyin: 'Yì Fēng', meaning: '超逸如风，洒脱自如', popularity: 5, categories: ['carefree', 'natural'] },
  { id: 139, chinese: '月色', pinyin: 'Yuè Sè', meaning: '清冷、朦胧而富有诗意', popularity: 5, categories: ['poetic', 'elegant'] },
  { id: 140, chinese: '诗怡', pinyin: 'Shī Yí', meaning: '诗意怡然，文雅快乐', popularity: 5, categories: ['literary', 'joyful'] },
  
  // 才华卓越类名字
  { id: 141, chinese: '慧娴', pinyin: 'Huì Xián', meaning: '智慧娴雅，才德兼备', popularity: 5, categories: ['wise', 'elegant'] },
  { id: 142, chinese: '韵蕊', pinyin: 'Yùn Ruǐ', meaning: '风韵花蕊，美丽动人', popularity: 5, categories: ['charming', 'beautiful'] },
  { id: 143, chinese: '静蕾', pinyin: 'Jìng Lěi', meaning: '安静的花蕾，文艺清新，又蕴含绽放的力量', popularity: 5, categories: ['quiet', 'powerful'] },
  { id: 144, chinese: '若英', pinyin: 'Ruò Yīng', meaning: '如花般英华，温柔中带着坚韧', popularity: 5, categories: ['gentle', 'strong'] },
  { id: 145, chinese: '燕姿', pinyin: 'Yàn Zī', meaning: '燕子的姿态，轻盈灵动', popularity: 5, categories: ['graceful', 'lively'] },
  { id: 146, chinese: '文凤', pinyin: 'Wén Fèng', meaning: '文采凤凰，才华横溢', popularity: 4, categories: ['talented', 'elegant'] },
  { id: 147, chinese: '小翠', pinyin: 'Xiǎo Cuì', meaning: '清新灵动，如早春初发的嫩叶', popularity: 5, categories: ['fresh', 'lively'] },
  { id: 148, chinese: '芷若', pinyin: 'Zhǐ Ruò', meaning: '取自"芷"和"若"两种香草，清丽绝俗', popularity: 5, categories: ['pure', 'elegant'] },
  { id: 149, chinese: '语嫣', pinyin: 'Yǔ Yān', meaning: '言语嫣然，充满古典美与智慧感', popularity: 5, categories: ['wise', 'charming'] },
  { id: 150, chinese: '婉清', pinyin: 'Wǎn Qīng', meaning: '出自《诗经》"水木清华，婉兮清扬"，清冷神秘、爱憎分明', popularity: 4, categories: ['elegant', 'determined'] },
  
  // 现代时尚类名字
  { id: 151, chinese: '嘉欣', pinyin: 'Jiā Xīn', meaning: '美好欣喜，充满喜悦', popularity: 5, categories: ['joyful', 'happy'] },
  { id: 152, chinese: '雅琳', pinyin: 'Yǎ Lín', meaning: '优雅如玉，高洁华美', popularity: 5, categories: ['elegant', 'beautiful'] },
  { id: 153, chinese: '语风', pinyin: 'Yǔ Fēng', meaning: '文字如风，文采出众，流畅自然', popularity: 4, categories: ['literary', 'natural'] },
  { id: 154, chinese: '婧仪', pinyin: 'Jìng Yí', meaning: '才女的仪态，才貌双全', popularity: 5, categories: ['talented', 'elegant'] },
  { id: 155, chinese: '舒雅', pinyin: 'Shū Yǎ', meaning: '舒畅雅致，优雅大方', popularity: 5, categories: ['elegant', 'comfortable'] },
  { id: 156, chinese: '美珊', pinyin: 'Měi Shān', meaning: '美丽的珊瑚，娇艳动人', popularity: 5, categories: ['beautiful', 'precious'] },
  { id: 157, chinese: '佳怡', pinyin: 'Jiā Yí', meaning: '美好怡然，舒适快乐', popularity: 5, categories: ['good', 'joyful'] },
  { id: 158, chinese: '雨桐', pinyin: 'Yǔ Tóng', meaning: '雨打梧桐，意境优美', popularity: 5, categories: ['natural', 'elegant'] },
  { id: 159, chinese: '沐阳', pinyin: 'Mù Yáng', meaning: '沐浴阳光，温暖明亮', popularity: 5, categories: ['warm', 'bright'] },
  { id: 160, chinese: '紫衣', pinyin: 'Zǐ Yī', meaning: '紫色衣裳，高贵典雅', popularity: 4, categories: ['noble', 'elegant'] },

  // 文雅气质类名字
  { id: 161, chinese: '云舒', pinyin: 'Yún Shū', meaning: '云朵舒展，自在悠闲', popularity: 5, categories: ['relaxed', 'elegant'] },
  { id: 162, chinese: '婉婷', pinyin: 'Wǎn Tíng', meaning: '温婉亭亭，姿态优雅', popularity: 5, categories: ['elegant', 'graceful'] },
  { id: 163, chinese: '芙蕖', pinyin: 'Fú Qú', meaning: '荷花的别称，清新脱俗', popularity: 4, categories: ['pure', 'elegant'] },
  { id: 164, chinese: '怡然', pinyin: 'Yí Rán', meaning: '心情愉悦的样子，自在从容', popularity: 5, categories: ['joyful', 'relaxed'] },
  { id: 165, chinese: '墨兰', pinyin: 'Mò Lán', meaning: '如墨色的兰花，高雅不凡', popularity: 4, categories: ['elegant', 'unique'] },
  { id: 166, chinese: '晓月', pinyin: 'Xiǎo Yuè', meaning: '黎明时分的月亮，清新明亮', popularity: 5, categories: ['bright', 'clear'] },
  { id: 167, chinese: '清扬', pinyin: 'Qīng Yáng', meaning: '清风扬起，轻盈舒爽', popularity: 5, categories: ['refreshing', 'lively'] },
  { id: 168, chinese: '诗雨', pinyin: 'Shī Yǔ', meaning: '如诗如雨，文雅滋润', popularity: 5, categories: ['poetic', 'nourishing'] },
  { id: 169, chinese: '听荷', pinyin: 'Tīng Hé', meaning: '聆听荷花，宁静优雅', popularity: 4, categories: ['peaceful', 'elegant'] },
  { id: 170, chinese: '秋华', pinyin: 'Qiū Huá', meaning: '秋天的光华，成熟绚烂', popularity: 5, categories: ['mature', 'brilliant'] },
  
  // 古今结合类名字
  { id: 171, chinese: '清韵', pinyin: 'Qīng Yùn', meaning: '清雅的韵致，音律优美', popularity: 5, categories: ['elegant', 'melodious'] },
  { id: 172, chinese: '江雪', pinyin: 'Jiāng Xuě', meaning: '江面上的雪，清冷孤傲', popularity: 4, categories: ['cold', 'proud'] },
  { id: 173, chinese: '半夏', pinyin: 'Bàn Xià', meaning: '半个夏天，清凉又热烈', popularity: 4, categories: ['cool', 'passionate'] },
  { id: 174, chinese: '青烟', pinyin: 'Qīng Yān', meaning: '青色的烟，缥缈空灵', popularity: 4, categories: ['ethereal', 'elusive'] },
  { id: 175, chinese: '晚萤', pinyin: 'Wǎn Yíng', meaning: '夜晚的萤火虫，柔和闪烁', popularity: 4, categories: ['gentle', 'radiant'] },
  { id: 176, chinese: '忆莲', pinyin: 'Yì Lián', meaning: '回忆莲花，富有情感与怀旧气息', popularity: 5, categories: ['nostalgic', 'emotional'] },
  { id: 177, chinese: '梦琪', pinyin: 'Mèng Qí', meaning: '梦中美玉，神秘美好', popularity: 5, categories: ['dreamy', 'beautiful'] },
  { id: 178, chinese: '瑾瑜', pinyin: 'Jǐn Yú', meaning: '美玉，喻指品德高尚，才华出众', popularity: 5, categories: ['virtuous', 'talented'] },
  { id: 179, chinese: '晓晴', pinyin: 'Xiǎo Qíng', meaning: '清晨晴朗，明亮清爽', popularity: 5, categories: ['bright', 'clear'] },
  { id: 180, chinese: '映雪', pinyin: 'Yìng Xuě', meaning: '映照雪光，典出"囊萤映雪"，好学不倦', popularity: 4, categories: ['studious', 'diligent'] },
  
  // 精选独特名字
  { id: 181, chinese: '芷萱', pinyin: 'Zhǐ Xuān', meaning: '香草与萱草，清香宜人，寓意忘忧', popularity: 5, categories: ['fragrant', 'carefree'] },
  { id: 182, chinese: '琬琰', pinyin: 'Wǎn Yǎn', meaning: '两种美玉，珍贵非凡', popularity: 4, categories: ['precious', 'valuable'] },
  { id: 183, chinese: '雪琪', pinyin: 'Xuě Qí', meaning: '雪花般的美玉，纯洁美好', popularity: 5, categories: ['pure', 'beautiful'] },
  { id: 184, chinese: '欣怡', pinyin: 'Xīn Yí', meaning: '欣喜怡悦，心情愉快', popularity: 5, categories: ['happy', 'joyful'] },
  { id: 185, chinese: '雨菲', pinyin: 'Yǔ Fēi', meaning: '雨中飞舞，灵动飘逸', popularity: 5, categories: ['lively', 'graceful'] },
  { id: 186, chinese: '芊芊', pinyin: 'Qiān Qiān', meaning: '形容草木繁盛茂密的样子', popularity: 4, categories: ['flourishing', 'abundant'] },
  { id: 187, chinese: '若溪', pinyin: 'Ruò Xī', meaning: '如小溪般清澈流畅', popularity: 5, categories: ['clear', 'flowing'] },
  { id: 188, chinese: '梓淇', pinyin: 'Zǐ Qí', meaning: '梓树与淇水，生机与灵性', popularity: 5, categories: ['vital', 'spiritual'] },
  { id: 189, chinese: '芮晴', pinyin: 'Ruì Qíng', meaning: '吉祥晴朗，明媚动人', popularity: 4, categories: ['auspicious', 'bright'] },
  { id: 190, chinese: '玥汐', pinyin: 'Yuè Xī', meaning: '神珠与潮汐，神秘而有韵律', popularity: 5, categories: ['mysterious', 'rhythmic'] },

  // 独特字组合名字
  { id: 191, chinese: '思棋', pinyin: 'Sī Qí', meaning: '思考棋局，智慧深远', popularity: 4, categories: ['thoughtful', 'wise'] },
  { id: 192, chinese: '雨桐', pinyin: 'Yǔ Tóng', meaning: '雨打梧桐，诗意盎然', popularity: 5, categories: ['poetic', 'elegant'] },
  { id: 193, chinese: '灵儿', pinyin: 'Líng Ér', meaning: '灵巧如孩童，天真活泼', popularity: 5, categories: ['lively', 'innocent'] },
  { id: 194, chinese: '晓雪', pinyin: 'Xiǎo Xuě', meaning: '清晨的雪，纯洁明亮', popularity: 5, categories: ['pure', 'bright'] },
  { id: 195, chinese: '诗涵', pinyin: 'Shī Hán', meaning: '如诗般内涵丰富', popularity: 5, categories: ['poetic', 'profound'] },
  { id: 196, chinese: '瑾萱', pinyin: 'Jǐn Xuān', meaning: '美玉与萱草，珍贵忘忧', popularity: 5, categories: ['precious', 'carefree'] },
  { id: 197, chinese: '可馨', pinyin: 'Kě Xīn', meaning: '可爱馨香，芬芳怡人', popularity: 5, categories: ['lovely', 'fragrant'] },
  { id: 198, chinese: '梦洁', pinyin: 'Mèng Jié', meaning: '梦想纯洁，品德高尚', popularity: 5, categories: ['pure', 'noble'] },
  { id: 199, chinese: '佳颖', pinyin: 'Jiā Yǐng', meaning: '美好聪颖，才华出众', popularity: 5, categories: ['good', 'talented'] },
  { id: 200, chinese: '雅静', pinyin: 'Yǎ Jìng', meaning: '优雅安静，温文尔雅', popularity: 5, categories: ['elegant', 'quiet'] }
];

export default optimizedGirlNames;
