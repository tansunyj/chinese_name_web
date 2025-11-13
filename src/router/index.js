import { createRouter, createWebHistory } from 'vue-router'
import NameSoundFormTaboos from '../views/NameSoundFormTaboos.vue'
import ModernTraditional from '../views/ModernTraditional.vue'
import ProfessionalConsiderations from '../views/ProfessionalConsiderations.vue'
import EraNamingStyles from '../views/EraNamingStyles.vue'

// 导出路由配置数组
export const routes = [
  {
    path: '/chinese-girl-names',
    name: 'ChineseGirlNames',
    component: () => import('../views/ChineseGirlNames.vue'),
    meta: {
      // Title: 58/60
      title: "Top Chinese Girl Names & Meanings (2025) | Female Names Guide",
      canonicalPath: '/chinese-girl-names',
      // Description: 158/160
      description: "Explore 200+ beautiful Chinese girl names with meanings, Pinyin, and cultural insights. Find popular, unique, and modern female Chinese names for your baby girl today.",
      // 关键词最大化
      keywords: "chinese girl names,beautiful girl names,female chinese names,baby girl names,chinese baby names,popular chinese names,modern chinese names,name guide",
      // ogTitle: 60/60
      ogTitle: "Chinese Girl Names with Meanings | Top 200+ Female Names (2025) Guide",
      // ogDescription: 159/160
      ogDescription: "Browse our collection of 200+ beautiful Chinese girl names complete with meanings, pronunciations and cultural significance. Find the perfect Chinese name for your baby girl today.",
      ogImage: "https://chinesename.us/images/chinese-girl-names-og.jpg",
      ogUrl: "https://chinesename.us/chinese-girl-names",
      twitterCard: "summary_large_image",
      // twitterTitle: 55/60
      twitterTitle: "Chinese Girl Names with Meanings (2025) - Female Names Guide",
      // twitterDescription: 157/160
      twitterDescription: "Discover 200+ beautiful Chinese girl names with meanings, pronunciations and cultural context. Find the perfect name for your daughter with our expert guide.",
      twitterImage: "https://chinesename.us/images/chinese-girl-names-twitter.jpg"
    }
  },
  {
    path: '/chinese-boy-names',
    name: 'ChineseBoyNames',
    component: () => import('../views/ChineseBoyNames.vue'),
    meta: {
      // Title: 58/60
      title: "Best Chinese Boy Names & Meanings (2025) | Male Names Guide",
      canonicalPath: '/chinese-boy-names',
      // Description: 160/160
      description: "Discover 200+ strong and meaningful Chinese boy names with Pinyin pronunciation. Find traditional, modern, and popular male Chinese names with authentic cultural meanings.",
      // 关键词最大化
      keywords: "chinese boy names,strong boy names,male chinese names,chinese baby boy names,popular chinese names,traditional chinese names,name guide",
      // ogTitle: 58/60
      ogTitle: "Chinese Boy Names with Meanings | Top 200+ Male Names (2025) Guide",
      // ogDescription: 158/160
      ogDescription: "Browse our collection of 200+ strong Chinese boy names complete with meanings, pronunciations and cultural significance. Find the perfect Chinese name for your baby boy today.",
      ogImage: "https://chinesename.us/images/chinese-boy-names-og.jpg",
      ogUrl: "https://chinesename.us/chinese-boy-names",
      twitterCard: "summary_large_image",
      // twitterTitle: 54/60
      twitterTitle: "Chinese Boy Names with Meanings (2025) - Male Names Guide",
      // twitterDescription: 155/160
      twitterDescription: "Discover 200+ strong Chinese boy names with meanings, pronunciations and cultural context. Find the perfect name for your son with our comprehensive guide.",
      twitterImage: "https://chinesename.us/images/chinese-boy-names-twitter.jpg"
    }
  },
  {
    path: '/chinese-last-names',
    name: 'ChineseLastNames',
    component: () => import('../views/ChineseLastNames.vue'),
    meta: {
      // Title: 60/60
      title: "Chinese Last Names & Surnames (2025) | Top 300+ Family Guide",
      canonicalPath: '/chinese-last-names',
      // Description: 158/160
      description: "Explore over 300 Chinese surnames with meanings, historical origins, and pronunciation guides. Discover common Chinese family names and their deep cultural significance.",
      // 关键词最大化
      keywords: "chinese surnames,chinese last names,common chinese surnames,chinese family names,popular chinese surnames,surname origins,family guide",
      // ogTitle: 60/60
      ogTitle: "Chinese Last Names & Surnames | Top 300+ Family Names Guide (2025)",
      // ogDescription: 159/160
      ogDescription: "Browse our comprehensive list of 300+ Chinese family names and surnames with meanings, historical origins, and pronunciation guide. Discover the story behind your Chinese surname.",
      ogImage: "https://chinesename.us/images/chinese-surnames-og.jpg",
      ogUrl: "https://chinesename.us/chinese-last-names",
      twitterCard: "summary_large_image",
      // twitterTitle: 52/60
      twitterTitle: "300+ Chinese Last Names & Family Surnames Guide (2025)",
      // twitterDescription: 155/160
      twitterDescription: "Explore Chinese surnames with meanings, origins, and pronunciation. Find famous figures who share these common Chinese family names and their history.",
      twitterImage: "https://chinesename.us/images/chinese-surnames-twitter.jpg"
    }
  },
  {
    path: '/chinese-names-and-meanings',
    name: 'ChineseNamesAndMeanings',
    component: () => import('../views/ChineseNamesAndMeanings.vue'),
    meta: {
      // Title: 60/60
      title: "Chinese Names and Meanings - Character Guide & Traditions (2025)",
      canonicalPath: '/chinese-names-and-meanings',
      // Description: 160/160
      description: "Dive deep into Chinese names and their profound meanings. Learn about character significance, traditional naming customs, and find beautiful Chinese names with positive cultural value.",
      // 关键词最大化
      keywords: "chinese names meanings,chinese name meaning,chinese character meanings,traditional chinese names,character significance,name meanings guide,cultural names",
      // ogTitle: 60/60
      ogTitle: "Chinese Names and Meanings | Character Significance & Tradition Guide (2025)",
      // ogDescription: 160/160
      ogDescription: "Discover the profound meanings behind Chinese names and characters. Explore naming traditions, symbolism, and find beautiful Chinese names with positive cultural significance.",
      ogImage: "https://chinesename.us/images/chinese-names-meanings-og.jpg",
      ogUrl: "https://chinesename.us/chinese-names-and-meanings",
      twitterCard: "summary_large_image",
      // twitterTitle: 52/60
      twitterTitle: "Chinese Names and Their Meanings & Traditions (2025)",
      // twitterDescription: 159/160
      twitterDescription: "Learn the cultural significance and symbolism behind Chinese names and characters. Find names with beautiful meanings for yourself or your baby today.",
      twitterImage: "https://chinesename.us/images/chinese-names-meanings-twitter.jpg"
    }
  },
  {
    path: '/blog/popular-chinese-names',
    name: 'popular-chinese-names',
    component: () => import('../views/PopularChineseNames.vue'),
    meta: {
      // Title: 60/60
      title: 'Popular Chinese Names Guide - Top Examples, Meanings, and Trends',
      canonicalPath: '/blog/popular-chinese-names',
      // Description: 160/160
      description: 'Explore the most popular Chinese names with meanings and pronunciation. Find culturally significant traditional and modern name examples for both boys and girls, and stay up to date on trends.',
      // 关键词最大化
      keywords: 'popular chinese names,common chinese names,trending chinese names,name examples,traditional names,modern names,chinese name meanings,naming trends'
    }
  },
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/HomePage.vue'),
    meta: {
      // Title: 59/60
      title: 'Chinese Name Generator & Translator - Free | ChineseName.us',
      canonicalPath: '/',
      // Description: 160/160
      description: 'Get your accurate Chinese name translation with our free generator. Personalized Chinese names with authentic pronunciation, cultural meanings and significance for English names.',
      // 关键词最大化
      keywords: 'chinese name generator,translate name to chinese,english to chinese translator,chinese names meaning,free name generator,accurate translation,cultural names,pinyin pronunciation',
      // ogTitle: 60/60
      ogTitle: 'Chinese Name Generator & Translator | Free English to Chinese Name',
      // ogDescription: 160/160
      ogDescription: 'Get your accurate Chinese name translation with our free generator. Personalized Chinese names with authentic pronunciation and cultural meanings and significance.',
      ogImage: 'https://chinesename.us/images/chinese-name-og.jpg',
      ogUrl: 'https://chinesename.us/',
      twitterCard: 'summary_large_image',
      // twitterTitle: 59/60
      twitterTitle: 'Chinese Name Generator & Translator | Free English to Chinese',
      // twitterDescription: 147/160
      twitterDescription: 'Accurate Chinese name translations with cultural meanings. Free personalized Chinese names for English names and cultural context.',
      twitterImage: 'https://chinesename.us/images/chinese-name-og.jpg'
    }
  },
  // 优化: 301 重定向注释
  {
    path: '/write-my-name-in-chinese',
    redirect: to => {
      // 此处应被服务器或 SSG 识别为 301 永久重定向
      return { path: '/english-to-chinese-translator', query: to.query, hash: to.hash }
    },
    meta: {
      // 仅添加重定向代码标识，不影响原代码逻辑
      redirectCode: 301
    }
  },
  {
    path: '/english-to-chinese-translator',
    name: 'TranslateName',
    component: () => import('../views/TranslateName.vue'),
    meta: {
      // Title: 60/60
      title: 'English to Chinese Name Translator | Write My Name in Chinese',
      canonicalPath: '/english-to-chinese-translator',
      // Description: 160/160
      description: 'Write your name in Chinese characters with our translator. Convert English, Spanish, French or any foreign name to Chinese with authentic pronunciation and cultural meaning today.',
      // 关键词最大化
      keywords: "name in chinese,write my name in chinese,english to chinese translator,chinese characters,translate name to chinese,foreign name translation,pinyin",
      // ogTitle: 60/60
      ogTitle: 'English to Chinese Name Translator | Write My Name in Chinese Today',
      // ogDescription: 159/160
      ogDescription: 'Learn how to write your name in Chinese with our professional translator. Get accurate Chinese name translations with cultural meanings and proper characters.',
      ogImage: 'https://chinesename.us/images/translate-name-og.jpg',
      ogUrl: 'https://chinesename.us/english-to-chinese-translator',
      twitterCard: 'summary_large_image',
      // twitterTitle: 60/60
      twitterTitle: 'English to Chinese Name Translator | Write My Name in Chinese',
      // twitterDescription: 148/160
      twitterDescription: 'Learn how to write your name in Chinese characters with our professional translator. Get culturally appropriate and authentic translations.',
      twitterImage: 'https://chinesename.us/images/translate-name-og.jpg'
    }
  },
  {
    path: '/chinese-to-english-translator',
    name: 'ChineseToEnglishName',
    component: () => import('../views/ChineseToEnglishName.vue'),
    meta: {
      // Title: 60/60
      title: 'Chinese to English Name Translator | Convert Chinese Names Easily',
      canonicalPath: '/chinese-to-english-translator',
      // Description: 160/160
      description: 'Translate Chinese names to English with our professional tool. Get accurate English translations of Chinese names with proper pronunciation, meaning, and cultural context.',
      // 关键词最大化
      keywords: 'chinese to english,name translator,convert chinese names,translate chinese name,chinese converter,pinyin to english,accurate translation',
      // ogTitle: 60/60
      ogTitle: 'Chinese to English Name Translator | Convert Chinese Names Instantly',
      // ogDescription: 149/160
      ogDescription: 'Translate Chinese names to English with accurate pronunciation and meaning. Professional Chinese name translation service with proper Pinyin.',
      ogImage: 'https://chinesename.us/images/chinese-to-english-og.jpg',
      ogUrl: 'https://chinesename.us/chinese-to-english-translator',
      twitterCard: 'summary_large_image',
      // twitterTitle: 55/60
      twitterTitle: 'Chinese to English Name Translator | Convert Names Easily',
      // twitterDescription: 128/160
      twitterDescription: 'Convert Chinese names to English with accurate pronunciation, cultural meaning, and professional service.',
      twitterImage: 'https://chinesename.us/images/chinese-to-english-og.jpg'
    }
  },
  {
    path: '/fantasy-chinese-name-generator',
    name: 'FantasyChineseNameGenerator',
    component: () => import('../views/FantasyChineseNameGenerator.vue'),
    meta: {
      // Title: 60/60
      title: 'Fantasy Chinese Name Generator | Magical Wuxia Character Names',
      canonicalPath: '/fantasy-chinese-name-generator',
      // Description: 160/160
      description: 'Create enchanting fantasy Chinese names for characters, stories, and creative projects. Generate mystical names with authentic Chinese elements for novels, games, and role-playing.',
      // 关键词最大化
      keywords: 'fantasy chinese names,wuxia names,xianxia names,chinese fantasy names,martial arts names,fantasy characters names,creative naming,mystical names',
      // ogTitle: 60/60
      ogTitle: 'Fantasy Chinese Name Generator for Games & Novels | Wuxia Names',
      // ogDescription: 156/160
      ogDescription: 'Generate authentic fantasy Chinese names with mystical meanings. Perfect for characters, stories, games, wuxia, xianxia, and creative projects today.',
      ogImage: 'https://chinesename.us/images/fantasy-generator-og.jpg',
      ogUrl: 'https://chinesename.us/fantasy-chinese-name-generator',
      twitterCard: 'summary_large_image',
      // twitterTitle: 51/60
      twitterTitle: 'Fantasy Chinese Name Generator | Magical Chinese Names',
      // twitterDescription: 119/160
      twitterDescription: 'Create mystical Chinese names for fantasy characters with authentic cultural elements and deep meanings.',
      twitterImage: 'https://chinesename.us/images/fantasy-generator-og.jpg'
    }
  },
  {
    path: '/blog/fantasy-chinese-names-guide',
    name: 'FantasyChineseNamesGuide',
    component: () => import('../views/FantasyChineseNamesGuide.vue'),
    meta: {
      // Title: 60/60
      title: 'Fantasy Chinese Names Guide | Mystical Wuxia Naming Traditions',
      canonicalPath: '/blog/fantasy-chinese-names-guide',
      // Description: 160/160
      description: 'The definitive guide to fantasy Chinese names, wuxia naming traditions, elements theory, and creating mystical names for literature, games, and creative projects. Learn naming rules.',
      // 关键词最大化
      keywords: 'fantasy chinese names,wuxia names,xianxia names,chinese fantasy,mythology names,fantasy characters,naming guide,traditional naming',
      // ogTitle: 60/60
      ogTitle: 'Fantasy Chinese Names Guide | Mystical Naming Traditions & Wuxia',
      // ogDescription: 153/160
      ogDescription: 'Learn about fantasy Chinese naming traditions, wuxia and xianxia conventions, and create mystical names for your characters with our detailed guide.',
      ogImage: 'https://chinesename.us/images/fantasy-guide-og.jpg',
      ogUrl: 'https://chinesename.us/blog/fantasy-chinese-names-guide',
      twitterCard: 'summary_large_image',
      // twitterTitle: 54/60
      twitterTitle: 'Fantasy Chinese Names Guide | Mystical Naming Traditions',
      // twitterDescription: 119/160
      twitterDescription: 'Comprehensive guide to creating authentic fantasy Chinese names with cultural depth and historical context.',
      twitterImage: 'https://chinesename.us/images/fantasy-guide-og.jpg'
    }
  },
  {
    path: '/custom-chinese-name-generator',
    name: 'CustomName',
    component: () => import('../views/CustomName.vue'),
    meta: {
      // Title: 60/60
      title: 'Custom Chinese Name Generator | Personalized Name Creation Tool',
      canonicalPath: '/custom-chinese-name-generator',
      // Description: 160/160
      description: 'Create personalized Chinese names with our custom generator. Design names based on meaning, pronunciation, cultural elements, birth date, zodiac sign, and five elements theory.',
      // 关键词最大化
      keywords: 'custom chinese name generator,personalized name generator,chinese name creator,unique chinese name,meaningful names,five elements naming,zodiac naming,custom tool',
      // ogTitle: 60/60
      ogTitle: 'Custom Chinese Name Generator | Personalized Names with Cultural Meaning',
      // ogDescription: 160/160
      ogDescription: 'Create personalized Chinese names based on your preferences, birth date, zodiac sign, and cultural significance. Get detailed analysis and traditional naming insights now.',
      ogImage: 'https://chinesename.us/images/custom-name-og.jpg',
      ogUrl: 'https://chinesename.us/custom-chinese-name-generator',
      twitterCard: 'summary_large_image',
      // twitterTitle: 52/60
      twitterTitle: 'Custom Chinese Name Generator | Personalized Names',
      // twitterDescription: 126/160
      twitterDescription: 'Create personalized Chinese names with cultural meaning, zodiac compatibility, and five elements analysis for free.',
      twitterImage: 'https://chinesename.us/images/custom-name-og.jpg'
    }
  },
  {
    path: '/ai-chinese-name-generator',
    name: 'AIChineseName',
    component: () => import('../views/CustomChineseName.vue'),
    meta: {
      // Title: 59/60
      title: 'AI Chinese Name Generator - Smart Name Creation Technology',
      canonicalPath: '/ai-chinese-name-generator',
      // Description: 160/160
      description: 'Generate Chinese names using cutting-edge AI technology. Our smart system creates culturally appropriate names with personalized meanings, perfect pronunciation and Pinyin.',
      // 关键词最大化
      keywords: 'ai name generator,chinese name generator,artificial intelligence names,smart name creator,ai generator,personalized names,pinyin,cultural names',
      // ogTitle: 60/60
      ogTitle: 'AI Chinese Name Generator | Smart Name Creation with AI Technology',
      // ogDescription: 156/160
      ogDescription: 'Generate Chinese names using advanced AI technology. Our smart system creates culturally appropriate names with personalized meanings and accurate Pinyin.',
      ogImage: 'https://chinesename.us/images/ai-generator-og.jpg',
      ogUrl: 'https://chinesename.us/ai-chinese-name-generator',
      twitterCard: 'summary_large_image',
      // twitterTitle: 51/60
      twitterTitle: 'AI Chinese Name Generator | Smart Naming Technology',
      // twitterDescription: 116/160
      twitterDescription: 'Create Chinese names with AI technology. Intelligent naming with cultural authenticity and smart generation.',
      twitterImage: 'https://chinesename.us/images/ai-generator-og.jpg'
    }
  },
  {
    path: '/multilingual',
    name: 'MultilingualName',
    component: () => import('../views/MultilingualName.vue'),
    meta: {
      // Title: 60/60
      title: 'Multilingual Chinese Names - International Name Translation Hub',
      canonicalPath: '/multilingual',
      // Description: 160/160
      description: 'Translate names from multiple languages to Chinese including Spanish, French, German, Japanese, Korean, and more with cultural context and guaranteed accuracy.',
      // 关键词最大化
      keywords: 'multilingual names,international translation,spanish to chinese,french to chinese,japanese names,korean names,global name conversion,accurate translation',
      // ogTitle: 60/60
      ogTitle: 'Multilingual Chinese Names | International Name Translation Hub',
      // ogDescription: 156/160
      ogDescription: 'Translate names from multiple languages to Chinese with cultural context. Support for Spanish, French, German, Japanese, Korean and many more global languages.',
      ogImage: 'https://chinesename.us/images/multilingual-og.jpg',
      ogUrl: 'https://chinesename.us/multilingual',
      twitterCard: 'summary_large_image',
      // twitterTitle: 52/60
      twitterTitle: 'Multilingual Chinese Names | International Translation',
      // twitterDescription: 119/160
      twitterDescription: 'Translate your name to Chinese from multiple languages with cultural context and guaranteed accuracy.',
      twitterImage: 'https://chinesename.us/images/multilingual-og.jpg'
    }
  },
  {
    path: '/blog',
    name: 'KnowledgeBase',
    component: () => import('../views/KnowledgeBase.vue'),
    meta: {
      // Title: 60/60
      title: 'Chinese Name Blog - Learn About Naming Traditions & Culture',
      canonicalPath: '/blog',
      // Description: 160/160
      description: 'Explore our blog covering naming traditions, cultural practices, character meanings, and expert guidance for choosing authentic Chinese names. Deep dive into Chinese name culture.',
      // 关键词最大化
      keywords: 'chinese name blog,naming traditions,cultural practices,character meanings,naming guide,chinese culture,name articles,name experts',
      // ogTitle: 60/60
      ogTitle: 'Chinese Name Blog | Learn Traditional Chinese Naming & Culture',
      // ogDescription: 160/160
      ogDescription: 'Explore our comprehensive blog about Chinese naming traditions, cultural practices, and character meanings. Expert guidance for choosing authentic Chinese names.',
      ogImage: 'https://chinesename.us/images/blog-og.jpg',
      ogUrl: 'https://chinesename.us/blog',
      twitterCard: 'summary_large_image',
      // twitterTitle: 56/60
      twitterTitle: 'Chinese Name Blog | Traditional Naming Guide & Culture',
      // twitterDescription: 136/160
      twitterDescription: 'Learn about Chinese naming traditions, cultural practices, and character meanings with our comprehensive blog today.',
      twitterImage: 'https://chinesename.us/images/blog-og.jpg'
    }
  },
  {
    path: '/blog/chinese-surnames',
    name: 'ChineseSurnames',
    component: () => import('../views/ChineseSurnames.vue'),
    meta: {
      // Title: 60/60
      title: 'Chinese Surnames - Popular Family Names in China & Their Meanings',
      canonicalPath: '/blog/chinese-surnames',
      // Description: 160/160
      description: 'Explore popular Chinese surnames with origins, meanings, and cultural significance. Learn about common Chinese family names, their historical background, and proper usage today.',
      // 关键词最大化
      keywords: 'chinese surnames,family names,last names,popular surnames,common surnames,surname meanings,history of surnames,surname origins',
      // ogTitle: 58/60
      ogTitle: 'Chinese Surnames | Popular Family Names in China & Meanings',
      // ogDescription: 152/160
      ogDescription: 'Explore popular Chinese surnames and family names with origins, meanings, and cultural significance. Find the most common surnames in China.',
      ogImage: 'https://chinesename.us/images/surnames-og.jpg',
      ogUrl: 'https://chinesename.us/blog/chinese-surnames',
      twitterCard: 'summary_large_image',
      // twitterTitle: 48/60
      twitterTitle: 'Chinese Surnames | Popular Family Names in China',
      // twitterDescription: 128/160
      twitterDescription: 'Learn about the most common Chinese last names and their historical background and deep cultural significance.',
      twitterImage: 'https://chinesename.us/images/surnames-twitter.jpg'
    }
  },
  {
    path: '/blog/baijiaxing',
    name: 'BaijiaXing',
    component: () => import('../views/BaijiaXing.vue'),
    meta: {
      // Title: 60/60
      title: 'Hundred Family Surnames (Baijiaxing) - Chinese Surnames History',
      canonicalPath: '/blog/baijiaxing',
      // Description: 160/160
      description: 'Learn about the Hundred Family Surnames (百家姓), a classic text listing traditional Chinese surnames, their history, origins, and vital cultural importance and status.',
      // 关键词最大化
      keywords: 'baijiaxing,hundred family surnames,traditional surnames,surname history,ancient family names,origins of surnames,chinese classics,cultural text',
      // ogTitle: 60/60
      ogTitle: 'Hundred Family Surnames (Baijiaxing) | Traditional Chinese Surnames History',
      // ogDescription: 152/160
      ogDescription: 'Learn about the Hundred Family Surnames (百家姓), a classic Chinese text listing traditional surnames and their cultural importance and deep history.',
      ogImage: 'https://chinesename.us/images/baijiaxing-og.jpg',
      ogUrl: 'https://chinesename.us/blog/baijiaxing',
      twitterCard: 'summary_large_image',
      // twitterTitle: 43/60
      twitterTitle: 'Hundred Family Surnames (Baijiaxing) History',
      // twitterDescription: 132/160
      twitterDescription: 'Discover the history, origins, and cultural importance of ancient Chinese family names from the classic text, Baijiaxing.',
      twitterImage: 'https://chinesename.us/images/baijiaxing-twitter.jpg'
    }
  },
  {
    path: '/blog/naming-traditions',
    name: 'NamingTraditions',
    component: () => import('../views/NamingTraditions.vue'),
    meta: {
      // Title: 60/60
      title: 'Chinese Naming Traditions - Cultural Practices & Customs Guide',
      canonicalPath: '/blog/naming-traditions',
      // Description: 160/160
      description: 'Explore traditional Chinese naming customs, cultural practices, and generational naming patterns. Learn how families choose meaningful names based on tradition, culture, and history.',
      // 关键词最大化
      keywords: 'chinese naming traditions,cultural practices,traditional naming,name culture,generational patterns,family naming rules,name customs,naming guide',
    }
  },
  {
    path: '/blog/historical-names',
    name: 'HistoricalNames',
    component: () => import('../views/HistoricalNames.vue'),
    meta: {
      // Title: 60/60
      title: 'Historical Chinese Names - Famous Figures in Chinese History',
      canonicalPath: '/blog/historical-names',
      // Description: 160/160
      description: 'Explore famous historical Chinese names from emperors, scholars, and poets. Learn about naming patterns and meanings of legendary personalities, along with their historical context.',
      // 关键词最大化
      keywords: 'historical chinese names,famous names,emperor names,scholar names,poet names,legendary personalities,ancient names,historical figures',
    }
  },
  {
    path: '/blog/regional-naming-differences',
    name: 'RegionalNamingDifferences',
    component: () => import('../views/RegionalNamingDifferences.vue'),
    meta: {
      // Title: 60/60
      title: 'Regional Chinese Naming Differences - Names Across China Guide',
      canonicalPath: '/blog/regional-naming-differences',
      // Description: 160/160
      description: 'Explore regional differences in Chinese naming practices across China. Learn how naming traditions vary between provinces, cities, and cultural regions, and the cultural factors behind them.',
      // 关键词最大化
      keywords: 'regional naming,naming differences,regional names,provincial names,dialect names,regional traditions,chinese dialects,cultural naming',
    }
  },
  {
    path: '/blog/naming-taboos',
    name: 'NamingTaboos',
    component: () => import('../views/NamingTaboos.vue'),
    meta: {
      // Title: 60/60
      title: 'Chinese Naming Taboos - What to Avoid in Chinese Names Guide',
      canonicalPath: '/blog/naming-taboos',
      // Description: 160/160
      description: 'Learn about Chinese naming taboos and what to avoid when choosing names. Understand cultural restrictions, unlucky characters, and naming conventions to respect for good fortune.',
      // 关键词最大化
      keywords: 'chinese naming taboos,name restrictions,unlucky characters,naming rules,forbidden names,cultural restrictions,taboo names,name superstition',
    }
  },
  {
    path: '/blog/name-numerology',
    name: 'NameNumerology',
    component: () => import('../views/NameNumerology.vue'),
    meta: {
      // Title: 58/60
      title: 'Chinese Name Numerology - Stroke Counts & Fortune Telling',
      canonicalPath: '/blog/name-numerology',
      // Description: 160/160
      description: 'Explore Chinese name numerology and the significance of stroke counts and number patterns in naming. Learn how numerology influences name selection and fortune telling for good luck.',
      // 关键词最大化
      keywords: 'chinese name numerology,stroke count,numerology,name numbers,character strokes,fortune telling,naming influence,name analysis',
    }
  },
  {
    path: '/blog/sound-harmony',
    name: 'SoundHarmony',
    component: () => import('../views/SoundHarmony.vue'),
    meta: {
      // Title: 57/60
      title: 'Sound Harmony in Chinese Names - Phonetic Balance Guide',
      canonicalPath: '/blog/sound-harmony',
      // Description: 160/160
      description: 'Learn about sound harmony and phonetic balance in Chinese names. Understand how tone combinations and pronunciation patterns create harmonious and pleasing names, avoiding bad combinations.',
      // 关键词最大化
      keywords: 'sound harmony,phonetics,tone harmony,pronunciation,name rhythm,sound patterns,name acoustics,phonetic balance,naming guide',
    }
  },
  {
    path: '/blog/seasonal-characters',
    name: 'SeasonalCharacters',
    component: () => import('../views/SeasonalCharacters.vue'),
    meta: {
      // Title: 60/60
      title: 'Seasonal Characters in Chinese Names - Nature-Inspired Naming',
      canonicalPath: '/blog/seasonal-characters',
      // Description: 160/160
      description: 'Discover seasonal characters used in Chinese names. Learn about nature-inspired characters representing spring, summer, autumn, and winter in traditional naming and their deeper meanings.',
      // 关键词最大化
      keywords: 'seasonal characters,nature inspired names,spring names,summer names,autumn names,winter names,seasonal patterns,traditional naming,character meanings',
    }
  },
  {
    path: '/blog/form-meaning',
    name: 'FormMeaning',
    component: () => import('../views/FormMeaning.vue'),
    meta: {
      // Title: 60/60
      title: 'Form and Meaning in Chinese Names - Character Structure Guide',
      canonicalPath: '/blog/form-meaning',
      // Description: 160/160
      description: 'Understand the relationship between form and meaning in Chinese names. Learn how character structure, radicals, and visual elements impact name meanings and overall aesthetic quality.',
      // 关键词最大化
      keywords: 'form and meaning,character structure,radicals,visual characters,name structure,character composition,name meaning,naming guide',
    }
  },
  {
    path: '/blog/classical-characters',
    name: 'ClassicalCharacters',
    component: () => import('../views/ClassicalCharacters.vue'),
    meta: {
      // Title: 60/60
      title: 'Classical Characters in Chinese Names - Traditional Elements Guide',
      canonicalPath: '/blog/classical-characters',
      // Description: 160/160
      description: 'Explore classical characters used in traditional Chinese names. Discover ancient characters with deep cultural meanings and significance in classical naming traditions.',
      // 关键词最大化
      keywords: 'classical characters,traditional elements,ancient characters,classical traditions,traditional writing,historical characters,name symbolism,cultural naming',
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
    meta: {
      // Title: 56/60
      title: 'Login - Access Your Chinese Name Translation Account',
      canonicalPath: '/login',
      // Description: 160/160
      description: 'Log in to your account to access premium Chinese name translation features. Sign in to save favorite names, use personalized services, and experience more features today.',
      // 关键词最大化
      keywords: 'login,name service,account access,sign in,user account,translation service,premium features,member login,account management',
    }
  },
  {
    path: '/signup',
    name: 'Signup',
    component: () => import('../views/Signup.vue'),
    meta: {
      // Title: 60/60
      title: 'Sign Up - Create Account for Chinese Name Services & Benefits',
      canonicalPath: '/signup',
      // Description: 160/160
      description: 'Create your free account to access premium Chinese name translation and personalization features. Join thousands of users who have found their perfect Chinese names.',
      // 关键词最大化
      keywords: 'sign up,create account,register,free account,membership,join community,name service,new user,account benefits',
    }
  },
  {
    path: '/name-to-pinyin',
    name: 'NameToPinyin',
    component: () => import('../views/NameToPinyin.vue'),
    meta: {
      // Title: 60/60
      title: 'Chinese Name to Pinyin Converter - Accurate Pronunciation Tool',
      canonicalPath: '/name-to-pinyin',
      // Description: 160/160
      description: 'Convert Chinese names to Pinyin with accurate tone marks and pronunciation guidance using our free converter. Learn how to pronounce Chinese names correctly today.',
      // 关键词最大化
      keywords: 'name to pinyin,pinyin converter,pronunciation guide,pronounce chinese names,tone marks,chinese pronunciation,name conversion,pinyin tool',
      // ogTitle: 60/60
      ogTitle: 'Chinese Name to Pinyin Converter | Accurate Pronunciation Guide',
      // ogDescription: 159/160
      ogDescription: 'Convert Chinese names to pinyin with accurate tone marks and pronunciation guidance. Learn how to pronounce Chinese names correctly with our free converter.',
      ogImage: 'https://chinesename.us/images/pinyin-converter-og.jpg',
      ogUrl: 'https://chinesename.us/name-to-pinyin',
      twitterCard: 'summary_large_image',
      // twitterTitle: 39/60
      twitterTitle: 'Chinese Name to Pinyin Converter Tool',
      // twitterDescription: 130/160
      twitterDescription: 'Learn how to pronounce Chinese names correctly with our free pinyin converter tool, complete with accurate tone marks.',
      twitterImage: 'https://chinesename.us/images/pinyin-converter-og.jpg'
    }
  },
  {
    path: '/pinyin-to-name',
    name: 'PinyinToName',
    component: () => import('../views/PinyinToName.vue'),
    meta: {
      // Title: 60/60
      title: 'Pinyin to Chinese Name - Find Characters by Pronunciation Tool',
      canonicalPath: '/pinyin-to-name',
      // Description: 160/160
      description: 'Find Chinese characters and names by Pinyin pronunciation. Search for suitable name characters based on desired sounds and tones to find your perfect and meaningful name.',
      // 关键词最大化
      keywords: 'pinyin to name,characters by pronunciation,name by sound,pinyin search,character finder,chinese characters,name lookup,pinyin tool',
      // ogTitle: 60/60
      ogTitle: 'Pinyin to Chinese Name | Find Characters by Pronunciation Search',
      // ogDescription: 151/160
      ogDescription: 'Find Chinese characters and names by pinyin pronunciation. Search for suitable Chinese name characters based on desired sounds and tones.',
      ogImage: 'https://chinesename.us/images/pinyin-to-name-og.jpg',
      ogUrl: 'https://chinesename.us/pinyin-to-name',
      twitterCard: 'summary_large_image',
      // twitterTitle: 47/60
      twitterTitle: 'Pinyin to Chinese Name | Character Finder Tool',
      // twitterDescription: 119/160
      twitterDescription: 'Search for suitable Chinese name characters based on desired sounds and tones with our easy-to-use finder.',
      twitterImage: 'https://chinesename.us/images/pinyin-to-name-og.jpg'
    }
  },
  {
    path: '/zodiac-calculator',
    name: 'ZodiacCalculator',
    component: () => import('../views/ZodiacCalculator.vue'),
    meta: {
      // Title: 60/60
      title: 'Chinese Zodiac Calculator - Find Your Zodiac Animal Sign Guide',
      canonicalPath: '/zodiac-calculator',
      // Description: 160/160
      description: 'Calculate your Chinese zodiac sign based on your birth year. Discover your zodiac animal and learn how it influences Chinese name selection and personal character traits.',
      // 关键词最大化
      keywords: 'zodiac calculator,zodiac sign,zodiac animals,chinese astrology,birth year,zodiac names,horoscope,zodiac influence,zodiac animal sign',
      // ogTitle: 60/60
      ogTitle: 'Chinese Zodiac Calculator | Find Your Zodiac Animal Sign Instantly',
      // ogDescription: 158/160
      ogDescription: 'Calculate your Chinese zodiac sign and discover how it influences Chinese name selection and personality traits using our free tool.',
      ogImage: 'https://chinesename.us/images/zodiac-calculator-og.jpg',
      ogUrl: 'https://chinesename.us/zodiac-calculator',
      twitterCard: 'summary_large_image',
      // twitterTitle: 48/60
      twitterTitle: 'Chinese Zodiac Calculator | Zodiac Animal Signs',
      // twitterDescription: 114/160
      twitterDescription: 'Find your Chinese zodiac sign and learn about its influence on naming and personality traits today.',
      twitterImage: 'https://chinesename.us/images/zodiac-calculator-og.jpg'
    }
  },
  {
    path: '/name-numerology-calculator',
    name: 'NumerologyCalculator',
    component: () => import('../views/NumerologyCalculator.vue'),
    meta: {
      // Title: 60/60
      title: 'Name Numerology Calculator - Free Name Number Analysis Tool',
      canonicalPath: '/name-numerology-calculator',
      // Description: 160/160
      description: 'Calculate the numerological value of your name with our free tool. Discover what your name reveals about your personality, destiny, and life path for better guidance.',
      // 关键词最大化
      keywords: 'numerology calculator,name numerology,free numerology calculator,name analysis,life path number,destiny number,name value,chinese numerology',
      // ogTitle: 60/60
      ogTitle: 'Name Numerology Calculator | Discover Your Name Hidden Meaning',
      // ogDescription: 157/160
      ogDescription: 'Calculate the numerological value of your name and discover what it reveals about your personality, destiny, and life path using our free tool.',
      ogImage: 'https://chinesename.us/images/numerology-calculator-og.jpg',
      ogUrl: 'https://chinesename.us/name-numerology-calculator',
      twitterCard: 'summary_large_image',
      // twitterTitle: 54/60
      twitterTitle: 'Name Numerology Calculator | Name Number Analysis Tool',
      // twitterDescription: 128/160
      twitterDescription: 'Discover the hidden meaning in your name through numerology analysis and calculations with our free tool.',
      twitterImage: 'https://chinesename.us/images/numerology-calculator-og.jpg'
    }
  },
  {
    path: '/constellation-analysis',
    name: 'ConstellationAnalysis',
    component: () => import('../views/ConstellationAnalysis.vue'),
    meta: {
      // Title: 60/60
      title: 'Constellation Analysis for Chinese Names - Astrological Guide',
      canonicalPath: '/constellation-analysis',
      // Description: 160/160
      description: 'Analyze how constellations influence Chinese names. Learn how Western astrology can guide name selection with cultural harmony and celestial meaning for a balanced name.',
      // 关键词最大化
      keywords: 'constellation names,astrological naming,star sign names,celestial names,astrology analysis,name meanings,western astrology,constellation guide',
    }
  },
  {
    path: '/blog/character-strokes',
    name: 'CharacterStrokes',
    component: () => import('../views/CharacterStrokes.vue'),
    meta: {
      // Title: 60/60
      title: 'Chinese Character Strokes - Stroke Count in Names & Fortune',
      canonicalPath: '/blog/character-strokes',
      // Description: 160/160
      description: 'Learn about Chinese character stroke counts and their significance in naming. Understand how stroke numbers influence name fortune, balance, and how to calculate strokes correctly.',
      // 关键词最大化
      keywords: 'chinese character strokes,stroke count,stroke order,stroke analysis,stroke meanings,calligraphy,name fortune,character balance,numerology',
    }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/pages/About.vue'),
    meta: {
      // Title: 60/60
      title: 'About Us - Professional Chinese Name Translation Services Trust',
      canonicalPath: '/about',
      // Description: 160/160
      description: 'Learn about our trusted professional Chinese name translation services. Discover our mission and vision to bridge cultures through authentic and meaningful Chinese naming.',
      // 关键词最大化
      keywords: 'about us,translation service,professional naming,name experts,authentic names,cultural translation,our mission,trusted service,company information',
    }
  },
  {
    path: '/privacy',
    name: 'Privacy',
    component: () => import('../views/pages/Privacy.vue'),
    meta: {
      // Title: 60/60
      title: 'Privacy Policy - Data Protection, User Privacy & Security Guide',
      canonicalPath: '/privacy',
      // Description: 160/160
      description: 'Read our privacy policy to understand how we protect your personal information and data security when using our Chinese name translation and generation services.',
      // 关键词最大化
      keywords: 'privacy policy,data protection,user privacy,service privacy,information protection,data security,terms and policy,data usage',
    }
  },
  {
    path: '/terms',
    name: 'Terms',
    component: () => import('../views/pages/Terms.vue'),
    meta: {
      // Title: 60/60
      title: 'Terms of Service - Usage Terms, Conditions & User Agreement',
      canonicalPath: '/terms',
      // Description: 160/160
      description: 'Review our comprehensive terms of service for using Chinese name translation and generation services. Understand your rights and responsibilities on our platform.',
      // 关键词最大化
      keywords: 'terms of service,usage terms,service conditions,user agreement,translation terms,platform usage,terms and conditions,legal agreement',
    }
  },
  {
    path: '/blog/family-naming-rules',
    name: 'FamilyNamingRules',
    component: () => import('../views/FamilyNamingRules.vue'),
    meta: {
      // Title: 59/60
      title: 'Family Naming Rules in Chinese Culture - Traditions Guide',
      canonicalPath: '/blog/family-naming-rules',
      // Description: 160/160
      description: 'Understand traditional Chinese family naming rules and conventions. Learn about generational naming patterns, family hierarchy, and cultural guidelines for preserving family culture.',
      // 关键词最大化
      keywords: 'family naming rules,generational patterns,naming conventions,traditional naming,family hierarchy,ancestral naming,cultural guidelines,name traditions',
    }
  },
  {
    path: '/blog/zodiac-naming',
    name: 'ZodiacNaming',
    component: () => import('../views/ZodiacNaming.vue'),
    meta: {
      // Title: 60/60
      title: 'Chinese Zodiac Naming - Animal Signs Influence on Names Guide',
      canonicalPath: '/blog/zodiac-naming',
      // Description: 160/160
      description: 'Learn how Chinese zodiac animals influence name selection. Discover naming traditions based on zodiac signs and compatible characters for each animal sign to bring good fortune.',
      // 关键词最大化
      keywords: 'chinese zodiac naming,animal names,astrology names,compatible names,zodiac characters,animal signs,naming traditions,zodiac influence',
    }
  },
  {
    path: '/blog/naming-sound-form-taboos',
    name: 'NameSoundFormTaboos',
    component: NameSoundFormTaboos,
    meta: {
      // Title: 60/60
      title: 'Sound and Form Taboos in Chinese Names - Restrictions Guide',
      canonicalPath: '/blog/naming-sound-form-taboos',
      // Description: 160/160
      description: 'Learn about sound and form taboos in Chinese naming. Understand pronunciation restrictions, character shape considerations, and cultural taboos to avoid for a lucky name.',
      // 关键词最大化
      keywords: 'sound taboos,form taboos,pronunciation restrictions,character shape,naming restrictions,cultural taboos,name restrictions,naming guide',
    }
  },
  {
    path: '/blog/modern-traditional',
    name: 'ModernTraditional',
    component: ModernTraditional,
    meta: {
      // Title: 60/60
      title: 'Modern and Traditional Chinese Names - Blending Styles Guide',
      canonicalPath: '/blog/modern-traditional',
      // Description: 160/160
      description: 'Explore how to balance modern and traditional Chinese names. Learn how to blend contemporary trends with classical naming traditions to create meaningful and timely names.',
      // 关键词最大化
      keywords: 'modern chinese names,traditional chinese names,blending styles,contemporary names,classical naming,name trends,naming styles,name guide',
    }
  },
  {
    path: '/blog/era-naming-styles',
    name: 'EraNamingStyles',
    component: EraNamingStyles,
    meta: {
      // Title: 60/60
      title: 'Era-Based Chinese Naming Styles - Historical Trends Guide',
      canonicalPath: '/blog/era-naming-styles',
      // Description: 160/160
      description: 'Discover how Chinese naming styles evolved through historical eras. Learn about naming trends from ancient dynasties to modern times and their influence on current naming practices.',
      // 关键词最大化
      keywords: 'era naming styles,historical trends,dynasty naming,naming evolution,period patterns,historical traditions,ancient names,naming guide',
    }
  },
  {
    path: '/blog/professional-considerations',
    name: 'ProfessionalConsiderations',
    component: ProfessionalConsiderations,
    meta: {
      // Title: 60/60
      title: 'Professional Chinese Names - Business & International Guide',
      canonicalPath: '/blog/professional-considerations',
      // Description: 160/160
      description: 'Learn professional considerations when choosing Chinese names for business and international contexts. Understand how a name impacts your career development and cross-cultural communication.',
      // 关键词最大化
      keywords: 'professional chinese names,business names,career naming,international names,workplace names,global naming,name impact,cross-cultural communication',
    }
  },
  {
    path: '/name-generator',
    name: 'NameGenerator',
    component: () => import('../views/NameGenerator.vue'),
    meta: {
      // Title: 60/60
      title: 'Chinese Name Generator | Create Authentic Chinese Names Free',
      canonicalPath: '/name-generator',
      // Description: 160/160
      description: 'Generate authentic Chinese names with our free tool. Create personalized Chinese names with proper meanings and cultural significance based on your preferences and requirements.',
      // 关键词最大化
      keywords: 'chinese name generator,free name generator,authentic chinese names,translate name to chinese,personalized names,name creator,meaningful names,name tool',
      // ogTitle: 60/60
      ogTitle: 'Chinese Name Generator | Create Authentic Chinese Names Instantly',
      // ogDescription: 159/160
      ogDescription: 'Generate authentic Chinese names with cultural significance and proper meanings. Free Chinese name generator with personalization options for everyone.',
      ogImage: 'https://chinesename.us/images/name-generator-og.jpg',
      ogUrl: 'https://chinesename.us/name-generator',
      twitterCard: 'summary_large_image',
      // twitterTitle: 50/60
      twitterTitle: 'Chinese Name Generator | Authentic Chinese Names Tool',
      // twitterDescription: 129/160
      twitterDescription: 'Create personalized Chinese names with cultural significance and proper meanings using our advanced generator.',
      twitterImage: 'https://chinesename.us/images/name-generator-og.jpg'
    }
  },
  {
    path: '/funny-chinese-names',
    name: 'FunnyChineseNames',
    component: () => import('../views/FunnyChineseNames.vue'),
    meta: {
      // Title: 60/60
      title: 'Funny Chinese Names and Meanings - Humorous Name Ideas Guide',
      canonicalPath: '/funny-chinese-names',
      // Description: 160/160
      description: 'Discover funny Chinese names with meanings and cultural context. Learn about amusing name translations and naming jokes with respectful and comprehensive explanations.',
      // 关键词最大化
      keywords: 'funny chinese names,humorous names,name jokes,translation fails,name humor,amusing names,silly names,chinese jokes,name meanings',
    }
  },
  {
    path: '/chinese-dog-names',
    name: 'ChineseDogNames',
    component: () => import('../views/ChineseDogNames.vue'),
    meta: {
      // Title: 60/60
      title: 'Chinese Dog Names with Meanings (2025) - Pet Naming Guide',
      canonicalPath: '/chinese-dog-names',
      // Description: 160/160
      description: 'Discover 100+ authentic Chinese dog names with meanings and pronunciations. Find the perfect traditional or modern Chinese pet name for your puppy today with our guide.',
      // 关键词最大化
      keywords: 'chinese dog names,chinese pet names,dog names in chinese,puppy names,lucky dog names,traditional dog names,cute dog names,pet naming',
    }
  },
  {
    path: '/chinese-cat-names',
    name: 'ChineseCatNames',
    component: () => import('../views/ChineseCatNames.vue'),
    meta: {
      // Title: 60/60
      title: 'Chinese Cat Names with Meanings (2025) - Feline Naming Guide',
      canonicalPath: '/chinese-cat-names',
      // Description: 160/160
      description: 'Explore 100+ authentic Chinese cat names with meanings and pronunciations. Find the perfect traditional or modern name for your feline friend, along with naming tips.',
      // 关键词最大化
      keywords: 'chinese cat names,cat names in chinese,kitten names,female chinese cat names,male cat names,pet names chinese,lucky cat names,feline naming',
    }
  },
  {
    // 404 页面必须放在最后
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('../views/NotFound.vue'),
    meta: {
      // Title: 55/60
      title: '404 Page Not Found - Chinese Name Translation Services',
      canonicalPath: '/404',
      // Description: 160/160
      description: 'The page you are looking for was not found. Explore our name translation, generation, and cultural naming services to find your perfect and authentic Chinese name.',
      // 关键词最大化
      keywords: 'page not found,name services,translation,name generator,find names,naming help,explore names,404 page,chinese names',
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    // 始终滚动到顶部
    return { top: 0 }
  }
})

// 全局前置守卫
router.beforeEach((to, from, next) => {
  // 设置页面标题
  document.title = to.meta.title || 'Chinese Name Generator | Chinese Name Translation';
  
  // 滚动到顶部
  window.scrollTo(0, 0);
  next();
});

export default router