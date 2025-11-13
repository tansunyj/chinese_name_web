// 用于为现有女孩名字添加详细解释的工具函数
// 将简短解释扩展为详细的英文解释

// 根据原始数据中的中文名和简短意义生成详细解释
export function enrichMeaning(chinese, pinyin, originalMeaning) {
  // 提取名字中的字符
  const characters = chinese.split('');
  
  // 为常见中文字符创建详细解释
  const characterExplanations = {
    '雅': 'elegance, refinement, cultural sophistication',
    '琳': 'beautiful jade, precious gem',
    '美': 'beauty, beautiful, gorgeous',
    '慧': 'wisdom, intelligence, bright',
    '诗': 'poetry, verse, poetic expression',
    '怡': 'joy, harmony, contentment',
    '文': 'culture, language, literary',
    '静': 'quiet, still, peaceful',
    '婷': 'graceful, elegant, slender',
    '若': 'like, as if, appearing to be',
    '雨': 'rain, to nourish',
    '芝': 'fragrant plant, iris or orchid',
    '雪': 'snow, pure, white',
    '茹': 'gentle, soft, like',
    '晓': 'dawn, early morning, to understand',
    '晴': 'clear, fine weather, sunny',
    '玉': 'jade, precious, pure',
    '冰': 'ice, clear, pure',
    '欣': 'happy, joyful, delighted',
    '妍': 'beautiful, glorious',
    '语': 'language, speech, expression',
    '嫣': 'captivating beauty, charming',
    '彤': 'red, vermillion',
    '悦': 'pleased, satisfied, joyful',
    '璟': 'bright crystal, luster of gems',
    '雯': 'colorful clouds, patterns',
    '清': 'clear, pure, clean',
    '照': 'illuminate, reflect, shine',
    '婉': 'graceful, gentle, compliant',
    '儿': 'child, young',
    '兰': 'orchid, elegant, graceful',
    '玄': 'deep, profound, mysterious',
    '机': 'opportunity, chance, mechanism',
    '是': 'is, to be, correct',
    '小': 'small, tiny, young',
    '宛': 'winding, gentle, soft',
    '香': 'fragrant, aromatic, scent',
    '君': 'ruler, sovereign, gentleman',
    '横': 'horizontal, across',
    '波': 'wave, ripple, undulation',
    '京': 'capital city, imperial',
    '灵': 'spirit, soul, clever',
    '运': 'move, transport, fortune',
    '姬': 'beautiful woman, woman of talent',
    '梦': 'dream, vision',
    '钰': 'precious jade, treasure',
    '采': 'pick, gather, coloration',
    '萍': 'duckweed, floating plant',
    '非': 'not, wrong, un-',
    '烟': 'smoke, mist, tobacco',
    '秋': 'autumn, fall',
    '娘': 'mother, young woman',
    '愁': 'worry, anxiety, sorrow',
    '敷': 'apply, spread, extend',
    '昭': 'clear, evident, manifest',
    '飞': 'fly, soar, swift',
    '燕': 'swallow (bird), graceful',
    '宓': 'quiet, still, silent',
    '丽': 'beautiful, elegant, pretty',
    '华': 'splendid, magnificent, glorious',
    '怜': 'pity, sympathize with',
    '夏': 'summer, grand, big',
    '姬': 'ancient surname, beautiful woman',
    '嘉': 'excellent, fine, praise',
    '琪': 'fine jade, extraordinary',
    '青': 'blue/green, youth, nature',
    '云': 'cloud, say',
    '星': 'star, sparkle',
    '辰': 'morning, time, celestial bodies',
    '茗': 'tea, a kind of tea',
    '心': 'heart, mind, center',
    '书': 'book, letter, writing',
    '瑶': 'precious jade',
    '舒': 'stretch, extend, relax',
    '露': 'dew, reveal, disclose',
    '珠': 'pearl, bead',
    '桂': 'laurel tree, cinnamon',
    '春': 'spring, youth',
    '思': 'think, consider, miss',
    '远': 'far, distant, remote',
    '明': 'bright, clear, enlightened',
    '睿': 'wise, sharp, insightful',
    '智': 'wisdom, knowledge',
    '舞': 'dance, waving movement',
    '彤': 'red, vermillion'
  };

  // 根据名字生成详细解释
  let detailedExplanation = '';
  
  // 对于一些常见的短解释，提供标准化的详细解释
  if (originalMeaning === 'Elegant jade') {
    detailedExplanation = `A sophisticated name that combines elegance and refinement with the beauty and value of precious jade. In Chinese culture, jade represents purity, beauty, and moral integrity, suggesting someone who possesses both outer grace and inner strength.`;
  } 
  else if (originalMeaning === 'Beautiful wisdom') {
    detailedExplanation = `A balanced name that unites outer beauty with inner wisdom and intelligence. It suggests someone who is not only aesthetically pleasing but also possesses deep insight and understanding, representing the ideal harmony of appearance and intellect.`;
  }
  else if (originalMeaning === 'Poetry and joy') {
    detailedExplanation = `A literary name that combines poetic sensibility with happiness and contentment. It suggests someone with an artistic soul who finds joy in creative expression and brings poetic beauty to everyday life, experiencing and sharing the pleasure of artistic pursuits.`;
  }
  else if (originalMeaning === 'Dawn clear') {
    detailedExplanation = `An evocative name that captures the beautiful moment when night turns to day and the sky clears. It suggests someone who brings freshness, clarity, and new beginnings to every situation, like the hopeful light of dawn breaking through darkness.`;
  }
  else if (originalMeaning === 'Happy red') {
    detailedExplanation = `A vibrant name combining joy and happiness with the warm energy of the color red. It suggests someone who radiates positive energy and enthusiasm, bringing warmth and excitement to those around them, like a bright flame that illuminates everything nearby.`;
  }
  else if (originalMeaning.includes('如') || originalMeaning.includes('意为') || originalMeaning.includes('指')) {
    // For Chinese explanations, create a more detailed English version
    const firstChar = characters[0];
    const secondChar = characters.length > 1 ? characters[1] : '';
    
    const firstMeaning = characterExplanations[firstChar] || 'beautiful';
    const secondMeaning = characterExplanations[secondChar] || 'graceful';
    
    detailedExplanation = `A thoughtfully composed name that combines ${firstMeaning} with ${secondMeaning}. This traditional Chinese name suggests someone who embodies cultural values while expressing individual character. The harmonious flow between the characters creates a name that is both meaningful and pleasing to the ear.`;
  }
  else {
    // For other short English explanations, expand them
    const firstChar = characters[0];
    const secondChar = characters.length > 1 ? characters[1] : '';
    
    const firstMeaning = characterExplanations[firstChar] || 'beautiful';
    const secondMeaning = characterExplanations[secondChar] || 'graceful';
    
    // Extract first components from pinyin to get the sounds
    const pinyinParts = pinyin.split(' ');
    const firstSound = pinyinParts[0].replace(/[0-9]/g, '');
    const secondSound = pinyinParts.length > 1 ? pinyinParts[1].replace(/[0-9]/g, '') : '';
    
    detailedExplanation = `Combines "${firstChar}" (${firstMeaning}) with "${secondChar}" (${secondMeaning}). This harmonious name brings together concepts that are central to Chinese cultural values, creating a meaningful identity that resonates with traditional aesthetics while remaining relevant in the modern world. The flowing sound of ${firstSound} ${secondSound} creates a musical quality that is pleasing to hear and easy to remember.`;
  }
  
  return detailedExplanation;
}

// 示例使用
// const enhancedName = {
//   ...originalName,
//   meaning: enrichMeaning(originalName.chinese, originalName.pinyin, originalName.meaning)
// };
