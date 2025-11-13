// 用于为男孩名字添加详细解释的工具函数
// 将简短解释扩展为详细的英文解释

// 根据原始数据中的中文名和简短意义生成详细解释
export function enrichBoyNameMeaning(chinese, pinyin, originalMeaning) {
  // 提取名字中的字符
  const characters = chinese.split('');
  
  // 为常见中文字符创建详细解释
  const characterExplanations = {
    '子': 'son, child, seed, intellectual',
    '轩': 'high pavilion, tall building, majestic, dignified',
    '浩': 'vast, expansive, great, numerous',
    '然': 'correct, right so, like that',
    '瑾': 'beautiful jade, gem',
    '瑜': 'excellent jade, beautiful jade',
    '明': 'bright, clear, intelligent, enlightened',
    '睿': 'wise, perspicacious, insightful',
    '修': 'cultivate, study, decorate, repair',
    '远': 'far, distant, remote',
    '泽': 'moisture, luster, favor, benefit',
    '宇': 'universe, roof, eaves',
    '皓': 'bright, luminous, white',
    '君': 'monarch, sovereign, gentleman, ruler',
    '思': 'think, consider, ponder',
    '博': 'extensive, ample, rich, universal',
    '文': 'culture, literary, gentle, pattern',
    '雨': 'rain, to rain',
    '鸿': 'great, large, wild goose',
    '涛': 'big wave, billows',
    '烨': 'blaze, brilliant, splendid',
    '霖': 'continuous rain, moisture',
    '嘉': 'excellent, auspicious, praise',
    '懿': 'excellent, elegant, admirable',
    '伟': 'great, robust',
    '渊': 'deep pool, profound, deep',
    '昊': 'vast, great, sky, heaven',
    '俊': 'handsome, talented, distinguished',
    '楠': 'southern wood, cedar',
    '华': 'splendid, magnificent, glorious',
    '沐': 'bathe, cleanse, receive',
    '阳': 'sun, positive, male, south',
    '天': 'sky, heaven, day',
    '翊': 'assist, help, support',
    '风': 'wind, style, manner, reputation',
    '旭': 'rising sun, morning sun',
    '尧': 'legendary ancient emperor, high',
    '擎': 'hold up, support',
    '苍': 'azure, blue, green, pale',
    '羽': 'feather, wing',
    '允': 'fair, just, to grant',
    '晨': 'morning, dawn, daybreak',
    '锦': 'brocade, embroidered',
    '程': 'journey, procedure, formula',
    '元': 'first, primary, fundamental',
    '青': 'blue/green, young, clear',
    '书': 'book, letter, writing',
    '达': 'reach, arrive, comprehend',
    '云': 'cloud, say',
    '起': 'rise, stand up, begin',
    '雨': 'rain, to rain',
    '林': 'forest, grove',
    '昊': 'vast, great, sky, heaven',
    '清': 'clear, pure, clean',
    '风': 'wind, style, manner',
    '明': 'bright, clear, intelligent',
    '山': 'mountain, hill',
    '河': 'river, stream',
    '鹏': 'mythical great bird, roc',
    '飞': 'fly, soar',
    '云': 'cloud, say',
    '海': 'sea, ocean',
    '天': 'sky, heaven, day',
    '山': 'mountain, hill',
    '宸': 'imperial, imperial palace',
    '宇': 'universe, roof, eaves',
    '峻': 'steep, precipitous, lofty',
    '熙': 'prosperous, splendid, bright',
    '煜': 'brilliant, glorious',
    '祺': 'auspicious, propitious',
    '晟': 'flourishing, successful',
    '文': 'culture, literary, gentle, pattern',
    '博': 'extensive, ample, rich, universal',
    '天': 'sky, heaven, day',
    '成': 'accomplish, complete, become',
    '景': 'scenery, view, situation',
    '行': 'go, walk, travel, do',
    '嘉': 'excellent, auspicious, praise',
    '悦': 'pleased, happy, delighted',
    '修': 'cultivate, study, decorate',
    '谨': 'careful, cautious, respectful',
    '博': 'extensive, ample, rich, universal',
    '裕': 'abundant, rich, plentiful',
    '和': 'harmony, peace, gentle',
    '璞': 'unpolished jade, natural simplicity',
    '鸿': 'great, large, wild goose',
    '博': 'extensive, ample, rich, universal',
    '弘': 'great, magnificent, expand',
    '文': 'culture, literary, gentle, pattern',
    '哲': 'wise, sagacious, philosophy',
    '瀚': 'vast like the ocean, profound',
    '雨': 'rain, to rain',
    '泽': 'moisture, luster, favor, benefit',
    '楷': 'model, pattern, regular script',
    '瑞': 'auspicious, propitious',
    '智': 'wisdom, knowledge, intelligence',
    '宸': 'imperial, imperial palace',
    '弘': 'great, magnificent, expand',
    '扬': 'raise, hoist, promote',
    '雪': 'snow',
    '松': 'pine tree, loose, relaxed',
    '子': 'son, child, seed, intellectual',
    '骞': 'high, soaring, raise high',
    '鹤': 'crane (bird)',
    '轩': 'high pavilion, tall building, majestic',
    '伟': 'great, robust',
    '祺': 'auspicious, propitious',
    '荣': 'glory, honor, flourish',
    '俊': 'handsome, talented, distinguished',
    '哲': 'wise, sagacious, philosophy',
    '雨': 'rain, to rain',
    '信': 'trust, believe, letter',
    '修': 'cultivate, study, decorate',
    '德': 'virtue, moral, ethics',
    '子': 'son, child, seed, intellectual',
    '墨': 'ink, writing',
    '景': 'scenery, view, situation',
    '明': 'bright, clear, intelligent',
    '思': 'think, consider, ponder',
    '源': 'source, origin, fountain',
    '令': 'order, command, beautiful',
    '问': 'ask, inquire, problem',
    '子': 'son, child, seed, intellectual',
    '明': 'bright, clear, intelligent',
    '子': 'son, child, seed, intellectual',
    '云': 'cloud, say',
    '少': 'few, less, young',
    '卿': 'minister, high officer',
    '子': 'son, child, seed, intellectual',
    '瞻': 'look forward to, respect, admire',
    '元': 'first, primary, fundamental',
    '亮': 'bright, clear, resonant',
    '子': 'son, child, seed, intellectual',
    '敬': 'respect, reverence, honor',
    '长': 'long, grow, leader',
    '卿': 'minister, high officer'
  };

  // 根据名字生成详细解释
  let detailedExplanation = '';
  
  // 对于一些常见模式，提供标准化的详细解释
  if (originalMeaning.includes('才华') || originalMeaning.includes('风度')) {
    detailedExplanation = `A name that represents scholarly excellence and dignified bearing. In Chinese culture, this combination suggests a young man with both intellectual capabilities and an impressive presence - someone who carries himself with confidence while possessing the depth of knowledge respected in traditional society.`;
  } 
  else if (originalMeaning.includes('浩然') || originalMeaning.includes('正气')) {
    detailedExplanation = `A powerful name drawing from the concept of "haoran zhiqi" - the righteous spirit that fills the universe. It suggests someone with unwavering moral principles and a magnificent breadth of character, like the vast expanse of nature. This name carries connotations of both ethical integrity and impressive personal presence.`;
  }
  else if (originalMeaning.includes('美玉') || originalMeaning.includes('品德')) {
    detailedExplanation = `A refined name comparing the bearer to precious jade, which in Chinese culture symbolizes purity, beauty, and moral integrity. Beyond mere physical beauty, jade represents inner worth and character - suggesting someone whose excellent qualities become more apparent with time, just as jade's luster deepens with handling.`;
  }
  else if (originalMeaning.includes('明智') || originalMeaning.includes('聪明')) {
    detailedExplanation = `A name celebrating intellectual brilliance and wisdom. It suggests someone who possesses both quick intelligence and deep insight - not merely book knowledge but the kind of wisdom that brings clarity to complex situations and illuminates the path forward for others.`;
  }
  else if (originalMeaning.includes('修身') || originalMeaning.includes('志向')) {
    detailedExplanation = `A name inspired by the Confucian principle of self-cultivation leading to greater achievements. It suggests someone with both the discipline for personal development and the vision to set ambitious goals. This classical concept connects individual growth with broader responsibility, indicating a person of substance and aspiration.`;
  }
  else if (originalMeaning.includes('恩泽') || originalMeaning.includes('宇宙')) {
    detailedExplanation = `A cosmologically inspired name suggesting someone whose beneficial influence spreads widely, like life-giving moisture across the universe. It conveys both magnanimity and grand scale - a person whose kindness and positive impact extend far beyond immediate circles, bringing growth and prosperity to many.`;
  }
  else {
    // For other cases, generate based on characters
    const firstChar = characters[0];
    const secondChar = characters.length > 1 ? characters[1] : '';
    
    const firstMeaning = characterExplanations[firstChar] || 'virtuous';
    const secondMeaning = characterExplanations[secondChar] || 'excellent';
    
    // Extract components from pinyin to get the sounds
    const pinyinParts = pinyin.split(' ');
    const firstSound = pinyinParts[0].replace(/[0-9]/g, '');
    const secondSound = pinyinParts.length > 1 ? pinyinParts[1].replace(/[0-9]/g, '') : '';
    
    detailedExplanation = `A thoughtfully composed name combining "${firstChar}" (${firstMeaning}) with "${secondChar}" (${secondMeaning}). This creates a harmonious balance of sounds and meanings that speaks to traditional Chinese values while offering distinctive character. In Chinese culture, such a name suggests not just who a person is, but who they might become - embodying aspirations for the child's future development and achievements.`;
  }
  
  return detailedExplanation;
}

// 示例使用
// const enhancedName = {
//   ...originalName,
//   meaning: enrichBoyNameMeaning(originalName.chinese, originalName.pinyin, originalName.meaning)
// };
