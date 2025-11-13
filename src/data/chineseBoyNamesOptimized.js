// 经过精心筛选的中文男孩名字数据
export const optimizedBoyNames = [
  // 意境优美、朗朗上口的名字
  { id: 1, chinese: '子轩', pinyin: 'Zǐ Xuān', meaning: '有才华、风度翩翩的人，如轩昂气宇', popularity: 5, categories: ['才华', '风度'] },
  { id: 2, chinese: '浩然', pinyin: 'Hào Rán', meaning: '浩然正气，形容正大光明、磊落堂皇的气概', popularity: 5, categories: ['正气', '光明'] },
  { id: 3, chinese: '瑾瑜', pinyin: 'Jǐn Yú', meaning: '美玉，喻指品德高尚，才华出众', popularity: 4, categories: ['品德', '才华'] },
  { id: 4, chinese: '明睿', pinyin: 'Míng Ruì', meaning: '明智睿智，形容聪明有智慧', popularity: 5, categories: ['智慧', '聪明'] },
  { id: 5, chinese: '修远', pinyin: 'Xiū Yuǎn', meaning: '出自诗句"修身齐家治国平天下"，意指修养品德、志向远大', popularity: 4, categories: ['修养', '志向'] },
  { id: 6, chinese: '泽宇', pinyin: 'Zé Yǔ', meaning: '恩泽广布宇宙，胸怀宽广', popularity: 5, categories: ['恩泽', '宇宙'] },
  { id: 7, chinese: '皓轩', pinyin: 'Hào Xuān', meaning: '光明磊落，气宇轩昂', popularity: 5, categories: ['光明', '气度'] },
  { id: 8, chinese: '君浩', pinyin: 'Jūn Hào', meaning: '如君子般正直，胸怀宽广', popularity: 4, categories: ['正直', '宽广'] },
  { id: 9, chinese: '思远', pinyin: 'Sī Yuǎn', meaning: '思维深远，目光长远', popularity: 4, categories: ['思想', '远见'] },
  { id: 10, chinese: '博文', pinyin: 'Bó Wén', meaning: '博学多闻，学识渊博', popularity: 5, categories: ['学识', '渊博'] },
  { id: 11, chinese: '雨泽', pinyin: 'Yǔ Zé', meaning: '恩泽如雨，滋润万物', popularity: 4, categories: ['恩泽', '滋润'] },
  { id: 12, chinese: '鸿涛', pinyin: 'Hóng Tāo', meaning: '宏大如海涛，气势磅礴', popularity: 4, categories: ['宏大', '气势'] },
  { id: 13, chinese: '烨霖', pinyin: 'Yè Lín', meaning: '光芒四射如火，恩泽如甘霖', popularity: 4, categories: ['光芒', '恩泽'] },
  { id: 14, chinese: '嘉懿', pinyin: 'Jiā Yì', meaning: '美好优秀，令人敬佩', popularity: 4, categories: ['美好', '优秀'] },
  { id: 15, chinese: '伟泽', pinyin: 'Wěi Zé', meaning: '伟大的恩泽，宏伟的气度', popularity: 5, categories: ['伟大', '恩泽'] },
  { id: 16, chinese: '睿渊', pinyin: 'Ruì Yuān', meaning: '智慧如深渊，深不可测', popularity: 4, categories: ['智慧', '深远'] },
  { id: 17, chinese: '文昊', pinyin: 'Wén Hào', meaning: '文采斐然，广大如天', popularity: 5, categories: ['文采', '广阔'] },
  { id: 18, chinese: '俊楠', pinyin: 'Jùn Nán', meaning: '英俊挺拔，如楠木般坚韧', popularity: 4, categories: ['英俊', '坚韧'] },
  { id: 19, chinese: '烨华', pinyin: 'Yè Huá', meaning: '光彩照人，繁华盛世', popularity: 4, categories: ['光彩', '繁华'] },
  { id: 20, chinese: '沐阳', pinyin: 'Mù Yáng', meaning: '沐浴阳光，温暖明亮', popularity: 5, categories: ['温暖', '明亮'] },
  { id: 21, chinese: '天翊', pinyin: 'Tiān Yì', meaning: '如天空般广阔，有翱翔之意', popularity: 4, categories: ['广阔', '翱翔'] },
  { id: 22, chinese: '风华', pinyin: 'Fēng Huá', meaning: '风度翩翩，年华正茂', popularity: 5, categories: ['风度', '年华'] },
  { id: 23, chinese: '旭尧', pinyin: 'Xù Yáo', meaning: '旭日东升，如尧帝般贤明', popularity: 4, categories: ['光明', '贤明'] },
  { id: 24, chinese: '擎苍', pinyin: 'Qíng Cāng', meaning: '擎起苍天，志向高远', popularity: 4, categories: ['高远', '志向'] },
  { id: 25, chinese: '鸿羽', pinyin: 'Hóng Yǔ', meaning: '大鹏展翅，翱翔天际', popularity: 4, categories: ['远大', '翱翔'] },
  { id: 26, chinese: '君昊', pinyin: 'Jūn Hào', meaning: '如君子般正直，广大如天', popularity: 4, categories: ['正直', '广大'] },
  { id: 27, chinese: '允晨', pinyin: 'Yǔn Chén', meaning: '诚信可靠，如晨光般明亮', popularity: 4, categories: ['诚信', '明亮'] },
  { id: 28, chinese: '翰墨', pinyin: 'Hàn Mò', meaning: '才华横溢，文采斐然', popularity: 4, categories: ['才华', '文采'] },
  { id: 29, chinese: '景辰', pinyin: 'Jǐng Chén', meaning: '光景美好，如晨星般明亮', popularity: 5, categories: ['美好', '明亮'] },
  { id: 30, chinese: '铭晟', pinyin: 'Míng Shèng', meaning: '铭记于心，事业昌盛', popularity: 4, categories: ['记忆', '昌盛'] },
  
  // 以下是从boy.md中筛选的优质名字
  { id: 31, chinese: '子期', pinyin: 'Zǐ Qī', meaning: '出自钟子期，知音的代名词，懂得欣赏他人', popularity: 4, categories: ['知音', '欣赏'] },
  { id: 32, chinese: '自远', pinyin: 'Zì Yuǎn', meaning: '来自远方，志向远大', popularity: 4, categories: ['远方', '志向'] },
  { id: 33, chinese: '修然', pinyin: 'Xiū Rán', meaning: '修养好，气质自然', popularity: 5, categories: ['修养', '自然'] },
  { id: 34, chinese: '若虚', pinyin: 'Ruò Xū', meaning: '出自张若虚，有空灵虚幻之美', popularity: 4, categories: ['空灵', '超然'] },
  { id: 35, chinese: '云天', pinyin: 'Yún Tiān', meaning: '云彩与天空，广阔无边', popularity: 5, categories: ['广阔', '自由'] },
  { id: 36, chinese: '白华', pinyin: 'Bái Huá', meaning: '出自《诗经》，意境纯净', popularity: 4, categories: ['纯净', '高洁'] },
  { id: 37, chinese: '景天', pinyin: 'Jǐng Tiān', meaning: '美好的景色，如天一般广阔', popularity: 5, categories: ['美好', '广阔'] },
  { id: 38, chinese: '晓风', pinyin: 'Xiǎo Fēng', meaning: '清晨的微风，清新自然', popularity: 5, categories: ['清新', '自然'] },
  { id: 39, chinese: '书墨', pinyin: 'Shū Mò', meaning: '书法墨韵，文化内涵', popularity: 4, categories: ['文化', '艺术'] },
  { id: 40, chinese: '锦程', pinyin: 'Jǐn Chéng', meaning: '前程似锦，未来美好', popularity: 5, categories: ['美好', '前程'] },
  { id: 41, chinese: '承泽', pinyin: 'Chéng Zé', meaning: '承接恩泽，继往开来', popularity: 4, categories: ['继承', '恩泽'] },
  { id: 42, chinese: '墨池', pinyin: 'Mò Chí', meaning: '如墨水池一般深邃，有文化底蕴', popularity: 4, categories: ['深邃', '文化'] },
  { id: 43, chinese: '语风', pinyin: 'Yǔ Fēng', meaning: '文字如风，文采出众', popularity: 4, categories: ['文采', '流畅'] },
  { id: 44, chinese: '星辰', pinyin: 'Xīng Chén', meaning: '如星星和辰星，明亮璀璨', popularity: 5, categories: ['明亮', '璀璨'] },
  { id: 45, chinese: '雨桐', pinyin: 'Yǔ Tóng', meaning: '雨打梧桐，意境优美', popularity: 4, categories: ['自然', '优美'] },
  { id: 46, chinese: '修杰', pinyin: 'Xiū Jié', meaning: '修养高尚，卓越杰出', popularity: 5, categories: ['修养', '卓越'] },
  { id: 47, chinese: '旭日', pinyin: 'Xù Rì', meaning: '初升的太阳，光明蓬勃', popularity: 5, categories: ['光明', '蓬勃'] },
  { id: 48, chinese: '哲瀚', pinyin: 'Zhé Hàn', meaning: '哲学智慧，如海般广博', popularity: 4, categories: ['智慧', '广博'] },
  { id: 49, chinese: '瑞霖', pinyin: 'Ruì Lín', meaning: '吉祥的甘霖，恩泽万物', popularity: 5, categories: ['吉祥', '恩泽'] },
  { id: 50, chinese: '晨曦', pinyin: 'Chén Xī', meaning: '早晨的阳光，充满希望', popularity: 5, categories: ['希望', '光明'] }
];

// 导出筛选后的男孩名字，分页使用
export const getOptimizedBoyNames = () => {
  return optimizedBoyNames;
};
