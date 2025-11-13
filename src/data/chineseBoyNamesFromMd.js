// 从boy.md文件中提取并整理的名字数据
export const boyNamesFromMd = [
  // 历史人物名字 - 有意境、朗朗上口
  { id: 101, chinese: '扶苏', pinyin: 'Fú Sū', meaning: '《诗经》典故"山有扶苏"，温润仁厚的君子形象', popularity: 4, categories: ['典故', '仁厚'] },
  { id: 102, chinese: '子期', pinyin: 'Zǐ Qī', meaning: '伯牙知音钟子期，成为"知音"的代名词', popularity: 4, categories: ['知音', '深情'] },
  { id: 103, chinese: '灵运', pinyin: 'Líng Yùn', meaning: '天地灵秀，运行不息', popularity: 4, categories: ['灵秀', '才华'] },
  { id: 104, chinese: '庭筠', pinyin: 'Tíng Jūn', meaning: '庭院青竹，清雅幽深', popularity: 4, categories: ['清雅', '幽深'] },
  { id: 105, chinese: '少游', pinyin: 'Shào Yóu', meaning: '潇洒飘逸，游历天下', popularity: 5, categories: ['飘逸', '远游'] },
  { id: 106, chinese: '曼殊', pinyin: 'Màn Shū', meaning: '禅意人生，包含悲欢', popularity: 4, categories: ['禅意', '深沉'] },
  { id: 107, chinese: '叔同', pinyin: 'Shū Tóng', meaning: '平和冲淡，有中庸之道', popularity: 4, categories: ['平和', '中庸'] },
  { id: 108, chinese: '从文', pinyin: 'Cóng Wén', meaning: '谦和深邃，顺从文明', popularity: 5, categories: ['谦和', '深邃'] },
  { id: 109, chinese: '望舒', pinyin: 'Wàng Shū', meaning: '月亮驾车之神，诗意浪漫', popularity: 5, categories: ['诗意', '浪漫'] },
  { id: 110, chinese: '志摩', pinyin: 'Zhì Mó', meaning: '充满浪漫志趣与摩登气息', popularity: 5, categories: ['浪漫', '现代'] },
  
  // 艺术家名字 - 意境优美
  { id: 111, chinese: '风眠', pinyin: 'Fēng Mián', meaning: '于林风中安眠，宁静超脱', popularity: 5, categories: ['宁静', '超脱'] },
  { id: 112, chinese: '山月', pinyin: 'Shān Yuè', meaning: '山中明月，壮丽静谧', popularity: 5, categories: ['壮丽', '静谧'] },
  { id: 113, chinese: '可染', pinyin: 'Kě Rǎn', meaning: '可以染就江山，充满艺术魄力', popularity: 4, categories: ['艺术', '魄力'] },
  { id: 114, chinese: '星海', pinyin: 'Xīng Hǎi', meaning: '如星辰大海，壮阔波澜', popularity: 5, categories: ['壮阔', '波澜'] },
  { id: 115, chinese: '白石', pinyin: 'Bái Shí', meaning: '朴实无华，大巧若拙', popularity: 4, categories: ['朴实', '自然'] },
  { id: 116, chinese: '伯虎', pinyin: 'Bó Hǔ', meaning: '潇洒不羁，才华横溢', popularity: 5, categories: ['潇洒', '才华'] },
  { id: 117, chinese: '霞客', pinyin: 'Xiá Kè', meaning: '如云霞过客，自由烂漫', popularity: 5, categories: ['自由', '浪漫'] },
  { id: 118, chinese: '有光', pinyin: 'Yǒu Guāng', meaning: '回归光明，充满希望', popularity: 5, categories: ['光明', '希望'] },
  
  // 学者名字 - 有内涵
  { id: 119, chinese: '仲淹', pinyin: 'Zhòng Yān', meaning: '中庸与深广，谦和有度', popularity: 4, categories: ['中庸', '深广'] },
  { id: 120, chinese: '安石', pinyin: 'Ān Shí', meaning: '安稳如石，沉稳可靠', popularity: 5, categories: ['安稳', '沉稳'] },
  { id: 121, chinese: '居正', pinyin: 'Jū Zhèng', meaning: '居天下之正位，正直担当', popularity: 4, categories: ['正直', '担当'] },
  { id: 122, chinese: '若虚', pinyin: 'Ruò Xū', meaning: '出自张若虚，空灵虚幻之美', popularity: 4, categories: ['空灵', '虚幻'] },
  { id: 123, chinese: '以蛰', pinyin: 'Yǐ Zhé', meaning: '如虫蛰伏，厚积薄发', popularity: 3, categories: ['沉潜', '修养'] },
  { id: 124, chinese: '自远', pinyin: 'Zì Yuǎn', meaning: '来自远方，探索不息', popularity: 5, categories: ['远方', '探索'] },
  { id: 125, chinese: '半农', pinyin: 'Bàn Nóng', meaning: '半个农夫，朴实革新', popularity: 4, categories: ['朴实', '革新'] },
  { id: 126, chinese: '独健', pinyin: 'Dú Jiàn', meaning: '独自健行，坚定前行', popularity: 5, categories: ['独立', '坚定'] },
  
  // 军政人物名字 - 气势磅礴
  { id: 127, chinese: '云天', pinyin: 'Yún Tiān', meaning: '如云如天，广阔无边', popularity: 5, categories: ['广阔', '无边'] },
  { id: 128, chinese: '擎苍', pinyin: 'Qíng Cāng', meaning: '擎起苍天，志向高远', popularity: 4, categories: ['高远', '志向'] },
  { id: 129, chinese: '青山', pinyin: 'Qīng Shān', meaning: '如青山般巍峨挺拔', popularity: 5, categories: ['挺拔', '坚定'] },
  { id: 130, chinese: '鸿业', pinyin: 'Hóng Yè', meaning: '宏大的事业，不凡成就', popularity: 5, categories: ['宏大', '事业'] },
  { id: 131, chinese: '浚川', pinyin: 'Jùn Chuān', meaning: '疏浚河川，造福万民', popularity: 4, categories: ['造福', '奉献'] },
  { id: 132, chinese: '翊尧', pinyin: 'Yì Yáo', meaning: '辅佐贤明，共建盛世', popularity: 4, categories: ['辅佐', '贤明'] },
  { id: 133, chinese: '启超', pinyin: 'Qǐ Chāo', meaning: '开启超越之路，前途无量', popularity: 5, categories: ['开启', '超越'] },
  { id: 134, chinese: '国维', pinyin: 'Guó Wéi', meaning: '维系国家文化命脉，意义深远', popularity: 5, categories: ['文化', '传承'] },
  
  // 诗人名字 - 清新优美
  { id: 135, chinese: '浩然', pinyin: 'Hào Rán', meaning: '浩然正气，出自《孟子》', popularity: 5, categories: ['正气', '磊落'] },
  { id: 136, chinese: '应物', pinyin: 'Yīng Wù', meaning: '应接万物，洒脱自适', popularity: 4, categories: ['洒脱', '自适'] },
  { id: 137, chinese: '之涣', pinyin: 'Zhī Huàn', meaning: '涣然冰释、豁达开朗', popularity: 4, categories: ['豁达', '开朗'] },
  { id: 138, chinese: '商隐', pinyin: 'Shāng Yǐn', meaning: '隐于商山，含蓄深沉', popularity: 5, categories: ['含蓄', '深沉'] },
  { id: 139, chinese: '万里', pinyin: 'Wàn Lǐ', meaning: '万里之志，诗风活泼', popularity: 5, categories: ['远志', '活泼'] },
  { id: 140, chinese: '永志', pinyin: 'Yǒng Zhì', meaning: '永远铭记，不忘初心', popularity: 5, categories: ['铭记', '坚守'] },
  
  // 科学家名字 - 严谨智慧
  { id: 141, chinese: '哲瀚', pinyin: 'Zhé Hàn', meaning: '哲学智慧，如海般广博', popularity: 4, categories: ['智慧', '广博'] },
  { id: 142, chinese: '学森', pinyin: 'Xué Sēn', meaning: '学问如森林般深广', popularity: 5, categories: ['学问', '深广'] },
  { id: 143, chinese: '景润', pinyin: 'Jǐng Rùn', meaning: '景致润泽，才华横溢', popularity: 4, categories: ['才华', '润泽'] },
  { id: 144, chinese: '文俊', pinyin: 'Wén Jùn', meaning: '文采俊秀，才华出众', popularity: 5, categories: ['文采', '俊秀'] },
  { id: 145, chinese: '钰哲', pinyin: 'Yù Zhé', meaning: '珍宝与智慧，光芒闪耀', popularity: 4, categories: ['珍宝', '智慧'] },
  { id: 146, chinese: '天翊', pinyin: 'Tiān Yì', meaning: '如天空般广阔，有翱翔之意', popularity: 4, categories: ['广阔', '翱翔'] },
  
  // 现代名人名字 - 新颖大气
  { id: 147, chinese: '建伟', pinyin: 'Jiàn Wěi', meaning: '建设伟业，量子科技领军者', popularity: 5, categories: ['建设', '伟业'] },
  { id: 148, chinese: '一公', pinyin: 'Yī Gōng', meaning: '一心为公，直抒胸臆', popularity: 4, categories: ['奉献', '坦率'] },
  { id: 149, chinese: '其坤', pinyin: 'Qí Kūn', meaning: '大地稳固，研究深入', popularity: 4, categories: ['稳固', '深入'] },
  { id: 150, chinese: '南山', pinyin: 'Nán Shān', meaning: '寿比南山，定海神针', popularity: 5, categories: ['长寿', '可靠'] },
  { id: 151, chinese: '文宏', pinyin: 'Wén Hóng', meaning: '文采宏达，通俗易懂', popularity: 5, categories: ['文采', '通达'] },
  { id: 152, chinese: '高福', pinyin: 'Gāo Fú', meaning: '高深的福气，名字吉祥', popularity: 5, categories: ['吉祥', '福气'] }
];

export default boyNamesFromMd;
