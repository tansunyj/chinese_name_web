import { createRouter, createWebHistory } from 'vue-router'
import NameSoundFormTaboos from '../views/NameSoundFormTaboos.vue'
import ModernTraditional from '../views/ModernTraditional.vue'
import ProfessionalConsiderations from '../views/ProfessionalConsiderations.vue'
import EraNamingStyles from '../views/EraNamingStyles.vue'

// 导出路由配置数组
export const routes = [
  // 临时路由用于检查姓氏重复
  {
    path: '/check-duplicates',
    name: 'CheckDuplicates',
    component: () => import('../components/DuplicateChecker.vue')
  },
  {
    path: '/chinese-girl-names',
    name: 'ChineseGirlNames',
    component: () => import('../views/ChineseGirlNames.vue'),
    meta: {
      title: "Chinese Girl Names with Meanings (2025) | Beautiful Female Names",
      canonicalPath: '/chinese-girl-names',
      description: "Explore 200+ beautiful Chinese girl names with meanings, pronunciations, and cultural significance. Find popular, unique and modern female Chinese names for your baby girl.",
      keywords: "chinese girl names,chinese names for girls,female chinese names,beautiful chinese girl names,chinese female names meaning,chinese baby girl names",
      ogTitle: "Chinese Girl Names with Meanings | Top 200+ Female Names (2025)",
      ogDescription: "Browse our collection of 200+ beautiful Chinese girl names complete with meanings, pronunciations and cultural significance. Find the perfect Chinese name for your baby girl.",
      ogImage: "https://chinesename.us/images/chinese-girl-names-og.jpg",
      ogUrl: "https://chinesename.us/chinese-girl-names",
      twitterCard: "summary_large_image",
      twitterTitle: "Chinese Girl Names with Meanings (2025)",
      twitterDescription: "Discover 200+ beautiful Chinese girl names with meanings, pronunciations and cultural context. Find the perfect name for your daughter.",
      twitterImage: "https://chinesename.us/images/chinese-girl-names-twitter.jpg"
    }
  },
  {
    path: '/chinese-boy-names',
    name: 'ChineseBoyNames',
    component: () => import('../views/ChineseBoyNames.vue'),
    meta: {
      title: "Chinese Boy Names with Meanings (2025) | Top Male Chinese Names",
      canonicalPath: '/chinese-boy-names',
      description: "Discover 200+ meaningful Chinese boy names with pronunciations and cultural significance. Find traditional, modern and popular male Chinese names for your baby boy.",
      keywords: "chinese boy names,chinese names for boys,male chinese names,chinese male names,chinese baby boy names,strong chinese boy names",
      ogTitle: "Chinese Boy Names with Meanings | Top 200+ Male Names (2025)",
      ogDescription: "Browse our collection of 200+ strong Chinese boy names complete with meanings, pronunciations and cultural significance. Find the perfect Chinese name for your baby boy.",
      ogImage: "https://chinesename.us/images/chinese-boy-names-og.jpg",
      ogUrl: "https://chinesename.us/chinese-boy-names",
      twitterCard: "summary_large_image",
      twitterTitle: "Chinese Boy Names with Meanings (2025)",
      twitterDescription: "Discover 200+ strong Chinese boy names with meanings, pronunciations and cultural context. Find the perfect name for your son.",
      twitterImage: "https://chinesename.us/images/chinese-boy-names-twitter.jpg"
    }
  },
  {
    path: '/chinese-last-names',
    name: 'ChineseLastNames',
    component: () => import('../views/ChineseLastNames.vue'),
    meta: {
      title: "Chinese Last Names: 300+ Family Surnames & Meanings (2025)",
      canonicalPath: '/chinese-last-names',
      description: "Explore 300+ Chinese surnames and family names with meanings, origins, and pronunciation. Discover the most common Chinese last names and their historical significance.",
      keywords: "chinese last names,chinese family names,common chinese surnames,chinese surnames,chinese surname meanings,list of chinese surnames",
      ogTitle: "Chinese Last Names & Surnames | Top 300+ Family Names (2025)",
      ogDescription: "Browse our comprehensive list of 300+ Chinese family names and surnames with meanings, historical origins, and pronunciation guide. Discover the story behind your Chinese surname.",
      ogImage: "https://chinesename.us/images/chinese-surnames-og.jpg",
      ogUrl: "https://chinesename.us/chinese-last-names",
      twitterCard: "summary_large_image",
      twitterTitle: "300+ Chinese Last Names & Family Surnames (2025)",
      twitterDescription: "Explore Chinese surnames with meanings, origins, and pronunciation. Find famous figures who share these common Chinese family names.",
      twitterImage: "https://chinesename.us/images/chinese-surnames-twitter.jpg"
    }
  },
  {
    path: '/chinese-names-and-meanings',
    name: 'ChineseNamesAndMeanings',
    component: () => import('../views/ChineseNamesAndMeanings.vue'),
    meta: {
      title: "Chinese Names and Meanings | Character Significance (2025)",
      canonicalPath: '/chinese-names-and-meanings',
      description: "Explore Chinese names and their profound meanings. Learn the cultural significance of Chinese characters, naming traditions, and find beautiful names with positive meanings.",
      keywords: "chinese names and meanings,chinese name meaning,meaning of chinese names,chinese name significance,chinese character meanings,traditional chinese names",
      ogTitle: "Chinese Names and Meanings | Character Significance Guide (2025)",
      ogDescription: "Discover the profound meanings behind Chinese names and characters. Explore naming traditions, symbolism, and find beautiful Chinese names with positive cultural significance.",
      ogImage: "https://chinesename.us/images/chinese-names-meanings-og.jpg",
      ogUrl: "https://chinesename.us/chinese-names-and-meanings",
      twitterCard: "summary_large_image",
      twitterTitle: "Chinese Names and Their Meanings (2025)",
      twitterDescription: "Learn the cultural significance and symbolism behind Chinese names and characters. Find names with beautiful meanings for yourself or your baby.",
      twitterImage: "https://chinesename.us/images/chinese-names-meanings-twitter.jpg"
    }
  },
  {
    path: '/blog/popular-chinese-names',
    name: 'popular-chinese-names',
    component: () => import('../views/PopularChineseNames.vue'),
    meta: {
      title: 'Popular Chinese Names - Name Examples and Meanings | ChineseName.us',
      canonicalPath: '/blog/popular-chinese-names',
      description: 'Explore popular Chinese names with meanings and pronunciations. Find traditional and modern Chinese name examples for boys and girls.',
      keywords: 'popular chinese names, chinese names for boys, chinese names for girls, chinese name meanings, trending chinese names, common chinese names, traditional chinese names, modern chinese names, chinese baby names'
    }
  },
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/HomePage.vue'),
    meta: {
      title: 'Translate Names to Chinese: Free Generator & Meanings | ChineseName.us',
      canonicalPath: '/',
      description: 'Translate your English name to Chinese with our free name generator. Get accurate Chinese name translations with proper pronunciation and cultural meanings. Create personalized Chinese names with authentic cultural significance.',
      keywords: 'chinese name generator, translate name to chinese, english to chinese name translation, free chinese names, personalized chinese names, chinese name meanings, chinese name pronunciation, chinese character translator, authentic chinese names, chinese naming traditions',
      ogTitle: 'Free Chinese Name Generator & Translator | ChineseName.us',
      ogDescription: 'Translate your English name to Chinese with our free name generator. Get accurate Chinese name translations with proper pronunciation and cultural meanings.',
      ogImage: 'https://chinesename.us/images/chinese-name-og.jpg',
      ogUrl: 'https://chinesename.us/',
      twitterCard: 'summary_large_image',
      twitterTitle: 'Free Chinese Name Generator & Translator',
      twitterDescription: 'Translate your English name to Chinese with our free name generator. Get accurate translations with cultural meanings.',
      twitterImage: 'https://chinesename.us/images/chinese-name-og.jpg'
    }
  },
  {
    path: '/write-my-name-in-chinese',
    redirect: to => {
      return { path: '/english-to-chinese-translator' }
    }
  },
  {
    path: '/english-to-chinese-translator',
    name: 'TranslateName',
    component: () => import('../views/TranslateName.vue'),
    meta: {
      title: 'English to Chinese Name Translator | Write My Name in Chinese | ChineseName.us',
      canonicalPath: '/english-to-chinese-translator',
      description: 'Learn how to write your name in Chinese with our professional translator. Translate your English, Spanish, French, German, Japanese, Korean name to Chinese characters with accurate pronunciation and cultural meaning.',
      keywords: 'english name to chinese translator, write my name in chinese, my name in chinese characters, translate name to chinese, name translation online, foreign name to chinese, name in chinese writing, english to chinese name conversion, chinese name translation service, how to translate name to chinese',
      ogTitle: 'English to Chinese Name Translator | Write My Name in Chinese',
      ogDescription: 'Learn how to write your name in Chinese with our professional translator. Get accurate Chinese name translations with cultural meanings.',
      ogImage: 'https://chinesename.us/images/translate-name-og.jpg',
      ogUrl: 'https://chinesename.us/english-to-chinese-translator',
      twitterCard: 'summary_large_image',
      twitterTitle: 'English to Chinese Name Translator | Write My Name in Chinese',
      twitterDescription: 'Learn how to write your name in Chinese characters with our professional translator. Get culturally appropriate translations.',
      twitterImage: 'https://chinesename.us/images/translate-name-og.jpg'
    }
  },
  {
    path: '/chinese-to-english-translator',
    name: 'ChineseToEnglishName',
    component: () => import('../views/ChineseToEnglishName.vue'),
    meta: {
      title: 'Chinese to English Name Translator | Convert Chinese Names to English | ChineseName.us',
      canonicalPath: '/chinese-to-english-translator',
      description: 'Translate Chinese names to English with our professional name translation tool. Get accurate English translations of Chinese names with proper pronunciation and meaning.',
      keywords: 'chinese to english name translator, chinese name to english, convert chinese names, chinese name pronunciation, chinese name meaning in english, translate chinese name, chinese name converter',
      ogTitle: 'Chinese to English Name Translator | Convert Chinese Names',
      ogDescription: 'Translate Chinese names to English with accurate pronunciation and meaning. Professional Chinese name translation service.',
      ogImage: 'https://chinesename.us/images/chinese-to-english-og.jpg',
      ogUrl: 'https://chinesename.us/chinese-to-english-translator',
      twitterCard: 'summary_large_image',
      twitterTitle: 'Chinese to English Name Translator',
      twitterDescription: 'Convert Chinese names to English with accurate pronunciation and cultural meaning.',
      twitterImage: 'https://chinesename.us/images/chinese-to-english-og.jpg'
    }
  },
  {
    path: '/fantasy-chinese-name-generator',
    name: 'FantasyChineseNameGenerator',
    component: () => import('../views/FantasyChineseNameGenerator.vue'),
    meta: {
      title: 'Fantasy Chinese Name Generator | Create Magical Chinese Names for Fantasy Characters',
      canonicalPath: '/fantasy-chinese-name-generator',
      description: 'Generate enchanting fantasy Chinese names for your characters, stories, and creative projects. Create mystical names with authentic Chinese culture and magical elements. Perfect for fantasy novels, games, and role-playing.',
      keywords: 'fantasy chinese name generator, fantasy chinese names, mystical chinese names, chinese fantasy character names, magical chinese names, wuxia name generator, xianxia name generator, ancient chinese name generator, chinese cultivator names, fantasy name generator chinese, chinese fantasy names generator, mystical name generator chinese, create fantasy name, chinese character names with meaning, martial arts names, cultivation novel names',
      ogTitle: 'Fantasy Chinese Name Generator for Games & Novels | ChineseName.us',
      ogDescription: 'Generate authentic fantasy Chinese names with mystical meanings. Perfect for characters, stories, games, wuxia, xianxia, and creative projects.',
      ogImage: 'https://chinesename.us/images/fantasy-generator-og.jpg',
      ogUrl: 'https://chinesename.us/fantasy-chinese-name-generator',
      twitterCard: 'summary_large_image',
      twitterTitle: 'Fantasy Chinese Name Generator | Magical Chinese Names',
      twitterDescription: 'Create mystical Chinese names for fantasy characters with authentic cultural elements.',
      twitterImage: 'https://chinesename.us/images/fantasy-generator-og.jpg'
    }
  },
  {
    path: '/blog/fantasy-chinese-names-guide',
    name: 'FantasyChineseNamesGuide',
    component: () => import('../views/FantasyChineseNamesGuide.vue'),
    meta: {
      title: 'Fantasy Chinese Names Guide | Mystical Naming Traditions & Cultural Elements | ChineseName.us',
      canonicalPath: '/blog/fantasy-chinese-names-guide',
      description: 'Comprehensive guide to fantasy Chinese names, wuxia and xianxia naming traditions, five elements theory, mythical creatures, and creating mystical Chinese names for literature, games, and creative projects.',
      keywords: 'fantasy chinese names, wuxia names, xianxia names, chinese fantasy character names, mystical chinese naming, five elements naming, chinese mythology names, fantasy literature names, cultivation novel names, martial arts names, celestial names, immortal names',
      ogTitle: 'Fantasy Chinese Names Guide | Mystical Naming Traditions',
      ogDescription: 'Learn about fantasy Chinese naming traditions, wuxia and xianxia conventions, and create mystical names for your characters.',
      ogImage: 'https://chinesename.us/images/fantasy-guide-og.jpg',
      ogUrl: 'https://chinesename.us/blog/fantasy-chinese-names-guide',
      twitterCard: 'summary_large_image',
      twitterTitle: 'Fantasy Chinese Names Guide | Mystical Naming Traditions',
      twitterDescription: 'Comprehensive guide to creating authentic fantasy Chinese names with cultural depth.',
      twitterImage: 'https://chinesename.us/images/fantasy-guide-og.jpg'
    }
  },
  {
    path: '/custom-chinese-name-generator',
    name: 'CustomName',
    component: () => import('../views/CustomName.vue'),
    meta: {
      title: 'Custom Chinese Name Generator | Personalized Chinese Name Creation | ChineseName.us',
      canonicalPath: '/custom-chinese-name-generator',
      description: 'Create a personalized Chinese name with our custom name generator. Design names based on meaning, pronunciation, cultural significance, birth date, zodiac sign, and five elements theory.',
      keywords: 'custom chinese name generator, personalized chinese name, chinese name meaning, five elements chinese naming, zodiac chinese names, ba zi chinese names, chinese name analysis, traditional chinese naming, birth date chinese name',
      ogTitle: 'Custom Chinese Name Generator | Personalized Names with Cultural Meaning',
      ogDescription: 'Create personalized Chinese names based on your preferences, birth date, zodiac sign, and cultural significance. Get detailed analysis and traditional naming insights.',
      ogImage: 'https://chinesename.us/images/custom-name-og.jpg',
      ogUrl: 'https://chinesename.us/custom-chinese-name-generator',
      twitterCard: 'summary_large_image',
      twitterTitle: 'Custom Chinese Name Generator | Personalized Names',
      twitterDescription: 'Create personalized Chinese names with cultural meaning, zodiac compatibility, and five elements analysis.',
      twitterImage: 'https://chinesename.us/images/custom-name-og.jpg'
    }
  },
  {
    path: '/ai-chinese-name-generator',
    name: 'AIChineseName',
    component: () => import('../views/CustomChineseName.vue'),
    meta: {
      title: 'AI Chinese Name Generator - Smart Name Creation | ChineseName.us',
      canonicalPath: '/ai-chinese-name-generator',
      description: 'Generate Chinese names using AI technology. Our smart system creates culturally appropriate names with personalized meanings and accurate pronunciation.',
      keywords: 'ai chinese name generator, smart chinese name creation, ai name generator, artificial intelligence chinese names, intelligent chinese naming, automated chinese name generator, ai powered name generator',
      ogTitle: 'AI Chinese Name Generator | Smart Name Creation with AI',
      ogDescription: 'Generate Chinese names using advanced AI technology. Our smart system creates culturally appropriate names with personalized meanings.',
      ogImage: 'https://chinesename.us/images/ai-generator-og.jpg',
      ogUrl: 'https://chinesename.us/ai-chinese-name-generator',
      twitterCard: 'summary_large_image',
      twitterTitle: 'AI Chinese Name Generator | Smart Naming',
      twitterDescription: 'Create Chinese names with AI technology. Intelligent naming with cultural authenticity.',
      twitterImage: 'https://chinesename.us/images/ai-generator-og.jpg'
    }
  },
  {
    path: '/multilingual',
    name: 'MultilingualName',
    component: () => import('../views/MultilingualName.vue'),
    meta: {
      title: 'Multilingual Chinese Names - International Name Translation | ChineseName.us',
      canonicalPath: '/multilingual',
      description: 'Translate names from multiple languages to Chinese including Spanish, French, German, Japanese, Korean, and more. Get accurate multilingual Chinese name translations with cultural context.',
      keywords: 'multilingual chinese names, international name translation, spanish to chinese names, french to chinese names, german to chinese names, japanese to chinese names, korean to chinese names, multilingual name converter, global chinese names',
      ogTitle: 'Multilingual Chinese Names | International Name Translation',
      ogDescription: 'Translate names from multiple languages to Chinese with cultural context. Support for Spanish, French, German, Japanese, Korean and more.',
      ogImage: 'https://chinesename.us/images/multilingual-og.jpg',
      ogUrl: 'https://chinesename.us/multilingual',
      twitterCard: 'summary_large_image',
      twitterTitle: 'Multilingual Chinese Names | International Translation',
      twitterDescription: 'Translate your name to Chinese from multiple languages with cultural context.',
      twitterImage: 'https://chinesename.us/images/multilingual-og.jpg'
    }
  },
  {
    path: '/blog',
    name: 'KnowledgeBase',
    component: () => import('../views/KnowledgeBase.vue'),
    meta: {
      title: 'Chinese Name Blog - Learn About Chinese Naming Traditions | ChineseName.us',
      canonicalPath: '/blog',
      description: 'Explore our Chinese name blog covering naming traditions, cultural practices, character meanings, and expert guidance for choosing authentic Chinese names. Learn about Chinese naming culture and history.',
      keywords: 'chinese name blog, chinese naming traditions, chinese name meanings, chinese character meanings, chinese naming guide, learn chinese names, chinese name culture, chinese naming practices, chinese name articles, naming traditions blog',
      ogTitle: 'Chinese Name Blog | Learn Traditional Chinese Naming',
      ogDescription: 'Explore our comprehensive blog about Chinese naming traditions, cultural practices, and character meanings. Expert guidance for choosing authentic Chinese names.',
      ogImage: 'https://chinesename.us/images/blog-og.jpg',
      ogUrl: 'https://chinesename.us/blog',
      twitterCard: 'summary_large_image',
      twitterTitle: 'Chinese Name Blog | Traditional Naming Guide',
      twitterDescription: 'Learn about Chinese naming traditions, cultural practices, and character meanings with our comprehensive blog.',
      twitterImage: 'https://chinesename.us/images/blog-og.jpg'
    }
  },
  {
    path: '/blog/chinese-surnames',
    name: 'ChineseSurnames',
    component: () => import('../views/ChineseSurnames.vue'),
    meta: {
      title: 'Chinese Surnames - Popular Family Names in China | ChineseName.us',
      canonicalPath: '/blog/chinese-surnames',
      description: 'Explore popular Chinese surnames and family names with origins, meanings, and cultural significance. Learn about the most common Chinese last names and their historical background.',
      keywords: 'chinese surnames, chinese family names, chinese last names, popular chinese surnames, common chinese surnames, chinese surname meanings, chinese family name origins, chinese surname history',
      ogTitle: 'Chinese Surnames | Popular Family Names in China',
      ogDescription: 'Explore popular Chinese surnames and family names with origins, meanings, and cultural significance.',
      ogImage: 'https://chinesename.us/images/surnames-og.jpg',
      ogUrl: 'https://chinesename.us/blog/chinese-surnames',
      twitterCard: 'summary_large_image',
      twitterTitle: 'Chinese Surnames | Popular Family Names',
      twitterDescription: 'Learn about the most common Chinese last names and their historical background.',
      twitterImage: 'https://chinesename.us/images/surnames-og.jpg'
    }
  },
  {
    path: '/blog/baijiaxing',
    name: 'BaijiaXing',
    component: () => import('../views/BaijiaXing.vue'),
    meta: {
      title: 'Hundred Family Surnames (Baijiaxing) - Traditional Chinese Surnames | ChineseName.us',
      canonicalPath: '/blog/baijiaxing',
      description: 'Learn about the Hundred Family Surnames (百家姓), a classic Chinese text listing traditional surnames. Discover the history, origins, and cultural importance of ancient Chinese family names.',
      keywords: 'baijiaxing, hundred family surnames, traditional chinese surnames, chinese surname history, ancient chinese family names, chinese surname origins, classic chinese surnames, traditional chinese names',
      ogTitle: 'Hundred Family Surnames (Baijiaxing) | Traditional Chinese Surnames',
      ogDescription: 'Learn about the Hundred Family Surnames (百家姓), a classic Chinese text listing traditional surnames and their cultural importance.',
      ogImage: 'https://chinesename.us/images/baijiaxing-og.jpg',
      ogUrl: 'https://chinesename.us/blog/baijiaxing',
      twitterCard: 'summary_large_image',
      twitterTitle: 'Hundred Family Surnames (Baijiaxing)',
      twitterDescription: 'Discover the history, origins, and cultural importance of ancient Chinese family names.',
      twitterImage: 'https://chinesename.us/images/baijiaxing-og.jpg'
    }
  },
  {
    path: '/blog/naming-traditions',
    name: 'NamingTraditions',
    component: () => import('../views/NamingTraditions.vue'),
    meta: {
      title: 'Chinese Naming Traditions - Cultural Name Practices | ChineseName.us',
      canonicalPath: '/blog/naming-traditions',
      description: 'Discover traditional Chinese naming customs, cultural practices, and generational naming patterns. Learn how Chinese families choose meaningful names based on ancient traditions and values.',
      keywords: 'chinese naming traditions, chinese naming customs, traditional chinese naming, chinese name culture, generational naming patterns, chinese family naming rules, chinese naming practices, ancient chinese naming'
    }
  },
  {
    path: '/blog/historical-names',
    name: 'HistoricalNames',
    component: () => import('../views/HistoricalNames.vue'),
    meta: {
      title: 'Historical Chinese Names - Famous Names in Chinese History | ChineseName.us',
      canonicalPath: '/blog/historical-names',
      description: 'Explore famous historical Chinese names from emperors, scholars, poets, and cultural figures. Learn about the naming patterns and meanings behind legendary Chinese personalities.',
      keywords: 'historical chinese names, famous chinese names, chinese emperor names, chinese scholar names, chinese poet names, legendary chinese names, ancient chinese names, classical chinese names, chinese historical figures'
    }
  },
  {
    path: '/blog/regional-naming-differences',
    name: 'RegionalNamingDifferences',
    component: () => import('../views/RegionalNamingDifferences.vue'),
    meta: {
      title: 'Regional Chinese Naming Differences - Names Across China | ChineseName.us',
      canonicalPath: '/blog/regional-naming-differences',
      description: 'Explore regional differences in Chinese naming practices across China. Learn how naming traditions vary between different provinces, cities, and cultural regions.',
      keywords: 'regional chinese naming, chinese naming differences, china regional names, provincial chinese names, northern southern chinese names, chinese dialect names, regional naming traditions, chinese name variations'
    }
  },
  {
    path: '/blog/naming-taboos',
    name: 'NamingTaboos',
    component: () => import('../views/NamingTaboos.vue'),
    meta: {
      title: 'Chinese Naming Taboos - What to Avoid in Chinese Names | ChineseName.us',
      canonicalPath: '/blog/naming-taboos',
      description: 'Learn about Chinese naming taboos and what to avoid when choosing Chinese names. Understand cultural restrictions, unlucky characters, and naming conventions to respect.',
      keywords: 'chinese naming taboos, chinese name restrictions, unlucky chinese characters, chinese naming rules, forbidden chinese names, chinese name cultural restrictions, what to avoid chinese names, chinese naming etiquette'
    }
  },
  // 移除重复路由定义 - 此处之前有重复的ChineseNamesAndMeanings路由
  {
    path: '/blog/name-numerology',
    name: 'NameNumerology',
    component: () => import('../views/NameNumerology.vue'),
    meta: {
      title: 'Chinese Name Numerology - Numbers in Chinese Names | ChineseName.us',
      canonicalPath: '/blog/name-numerology',
      description: 'Explore Chinese name numerology and the significance of stroke counts, numbers, and mathematical patterns in Chinese naming. Learn how numerology influences name selection and fortune telling.',
      keywords: 'chinese name numerology, chinese name stroke count, chinese numerology, chinese name numbers, chinese character strokes, chinese name fortune telling, chinese name calculation, chinese name mathematics'
    }
  },
  {
    path: '/blog/sound-harmony',
    name: 'SoundHarmony',
    component: () => import('../views/SoundHarmony.vue'),
    meta: {
      title: 'Sound Harmony in Chinese Names - Phonetic Balance | ChineseName.us',
      canonicalPath: '/blog/sound-harmony',
      description: 'Learn about sound harmony and phonetic balance in Chinese names. Understand how tone combinations and pronunciation patterns create harmonious Chinese names.',
      keywords: 'chinese name sound harmony, chinese name phonetics, chinese tone harmony, chinese pronunciation balance, chinese name rhythm, phonetic chinese names, chinese sound patterns, chinese name acoustics'
    }
  },
  {
    path: '/blog/seasonal-characters',
    name: 'SeasonalCharacters',
    component: () => import('../views/SeasonalCharacters.vue'),
    meta: {
      title: 'Seasonal Characters in Chinese Names - Nature-Inspired Names | ChineseName.us',
      canonicalPath: '/blog/seasonal-characters',
      description: 'Discover seasonal characters used in Chinese names. Learn about nature-inspired Chinese characters representing spring, summer, autumn, and winter in traditional naming.',
      keywords: 'seasonal chinese characters, nature inspired chinese names, spring chinese names, summer chinese names, autumn chinese names, winter chinese names, seasonal naming patterns, natural chinese characters'
    }
  },
  {
    path: '/blog/form-meaning',
    name: 'FormMeaning',
    component: () => import('../views/FormMeaning.vue'),
    meta: {
      title: 'Form and Meaning in Chinese Names - Character Structure | ChineseName.us',
      canonicalPath: '/blog/form-meaning',
      description: 'Understand the relationship between form and meaning in Chinese names. Learn how character structure, radicals, and visual elements contribute to name meanings and aesthetics.',
      keywords: 'chinese character form meaning, character structure names, chinese radicals naming, visual chinese characters, character aesthetics, chinese name structure, character composition names, chinese writing form'
    }
  },
  {
    path: '/blog/classical-characters',
    name: 'ClassicalCharacters',
    component: () => import('../views/ClassicalCharacters.vue'),
    meta: {
      title: 'Classical Characters in Chinese Names - Traditional Name Elements | ChineseName.us',
      canonicalPath: '/blog/classical-characters',
      description: 'Explore classical characters used in traditional Chinese names. Discover ancient Chinese characters with deep cultural meanings and their significance in classical naming traditions.',
      keywords: 'classical chinese characters, traditional chinese name elements, ancient chinese characters, classical naming traditions, traditional chinese writing, historical chinese characters, ancient name characters, classical chinese naming'
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
    meta: {
      title: 'Login - Chinese Name Translation Services | ChineseName.us',
      canonicalPath: '/login',
      description: 'Log in to your ChineseName.us account to access premium Chinese name translation and generation features. Sign in to save your favorite names and access personalized services.',
      keywords: 'login chinese name service, chinesename.us login, chinese name account, sign in chinese names, user account chinese translation, premium chinese naming features'
    }
  },
  {
    path: '/signup',
    name: 'Signup',
    component: () => import('../views/Signup.vue'),
    meta: {
      title: 'Sign Up - Create Account for Chinese Name Services | ChineseName.us',
      canonicalPath: '/signup',
      description: 'Create your free ChineseName.us account to access premium Chinese name translation, generation, and personalization features. Join thousands of users finding their perfect Chinese names.',
      keywords: 'sign up chinese names, create account chinesename.us, register chinese name service, free chinese name account, chinese name membership, join chinese naming community'
    }
  },
  {
    path: '/name-to-pinyin',
    name: 'NameToPinyin',
    component: () => import('../views/NameToPinyin.vue'),
    meta: {
      title: 'Chinese Name to Pinyin Converter - Pronunciation Guide | ChineseName.us',
      canonicalPath: '/name-to-pinyin',
      description: 'Convert Chinese names to pinyin with accurate tone marks and pronunciation guidance. Learn how to pronounce Chinese names correctly with our free pinyin converter tool.',
      keywords: 'chinese name to pinyin, pinyin converter, chinese name pronunciation, chinese pronunciation guide, chinese name pinyin converter, how to pronounce chinese names, chinese pinyin translator, chinese tone marks',
      ogTitle: 'Chinese Name to Pinyin Converter | Pronunciation Guide',
      ogDescription: 'Convert Chinese names to pinyin with accurate tone marks and pronunciation guidance.',
      ogImage: 'https://chinesename.us/images/pinyin-converter-og.jpg',
      ogUrl: 'https://chinesename.us/name-to-pinyin',
      twitterCard: 'summary_large_image',
      twitterTitle: 'Chinese Name to Pinyin Converter',
      twitterDescription: 'Learn how to pronounce Chinese names correctly with our free pinyin converter tool.',
      twitterImage: 'https://chinesename.us/images/pinyin-converter-og.jpg'
    }
  },
  {
    path: '/pinyin-to-name',
    name: 'PinyinToName',
    component: () => import('../views/PinyinToName.vue'),
    meta: {
      title: 'Pinyin to Chinese Name - Find Characters by Pronunciation | ChineseName.us',
      canonicalPath: '/pinyin-to-name',
      description: 'Find Chinese characters and names by pinyin pronunciation. Search for suitable Chinese name characters based on desired sounds and tones for your perfect Chinese name.',
      keywords: 'pinyin to chinese name, find chinese characters by pronunciation, chinese name by sound, pinyin character search, chinese name pronunciation search, chinese character finder, pinyin name generator',
      ogTitle: 'Pinyin to Chinese Name | Find Characters by Pronunciation',
      ogDescription: 'Find Chinese characters and names by pinyin pronunciation. Search for suitable Chinese name characters based on desired sounds.',
      ogImage: 'https://chinesename.us/images/pinyin-to-name-og.jpg',
      ogUrl: 'https://chinesename.us/pinyin-to-name',
      twitterCard: 'summary_large_image',
      twitterTitle: 'Pinyin to Chinese Name | Character Finder',
      twitterDescription: 'Search for suitable Chinese name characters based on desired sounds and tones.',
      twitterImage: 'https://chinesename.us/images/pinyin-to-name-og.jpg'
    }
  },
  {
    path: '/zodiac-calculator',
    name: 'ZodiacCalculator',
    component: () => import('../views/ZodiacCalculator.vue'),
    meta: {
      title: 'Chinese Zodiac Calculator - Find Your Zodiac Sign | ChineseName.us',
      canonicalPath: '/zodiac-calculator',
      description: 'Calculate your Chinese zodiac sign based on your birth year. Discover your zodiac animal and learn how it influences Chinese name selection and personality traits.',
      keywords: 'chinese zodiac calculator, find chinese zodiac sign, chinese zodiac animals, chinese astrology calculator, birth year zodiac, chinese zodiac names, zodiac animal calculator, chinese horoscope calculator',
      ogTitle: 'Chinese Zodiac Calculator | Find Your Zodiac Animal Sign',
      ogDescription: 'Calculate your Chinese zodiac sign and discover how it influences Chinese name selection and personality traits.',
      ogImage: 'https://chinesename.us/images/zodiac-calculator-og.jpg',
      ogUrl: 'https://chinesename.us/zodiac-calculator',
      twitterCard: 'summary_large_image',
      twitterTitle: 'Chinese Zodiac Calculator | Zodiac Animal Signs',
      twitterDescription: 'Find your Chinese zodiac sign and learn about its influence on naming and personality.',
      twitterImage: 'https://chinesename.us/images/zodiac-calculator-og.jpg'
    }
  },
  {
    path: '/constellation-analysis',
    name: 'ConstellationAnalysis',
    component: () => import('../views/ConstellationAnalysis.vue'),
    meta: {
      title: 'Constellation Analysis for Chinese Names - Astrological Naming | ChineseName.us',
      canonicalPath: '/constellation-analysis',
      description: 'Analyze constellation influences on Chinese names. Learn how Western astrology and star signs can guide Chinese name selection with cultural harmony and celestial meaning.',
      keywords: 'constellation chinese names, astrological chinese naming, star sign chinese names, celestial chinese names, astrology chinese name analysis, zodiac constellation names, chinese astrology naming, constellation name meanings'
    }
  },
  {
    path: '/blog/character-strokes',
    name: 'CharacterStrokes',
    component: () => import('../views/CharacterStrokes.vue'),
    meta: {
      title: 'Chinese Character Strokes - Stroke Count in Names | ChineseName.us',
      canonicalPath: '/blog/character-strokes',
      description: 'Learn about Chinese character stroke counts and their significance in naming. Understand how stroke numbers influence name fortune and character balance in Chinese names.',
      keywords: 'chinese character strokes, stroke count chinese names, chinese character stroke order, chinese name stroke analysis, character stroke meanings, chinese calligraphy strokes, stroke count fortune, chinese writing strokes'
    }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/pages/About.vue'),
    meta: {
      title: 'About Us - ChineseName.us | Professional Chinese Name Translation Services',
      canonicalPath: '/about',
      description: 'Learn about ChineseName.us - your trusted source for professional Chinese name translation and generation services. Discover our mission to bridge cultures through authentic Chinese naming.',
      keywords: 'about chinesename.us, chinese name translation service, professional chinese naming, chinese name experts, authentic chinese names, cultural name translation, chinese naming mission'
    }
  },
  {
    path: '/privacy',
    name: 'Privacy',
    component: () => import('../views/pages/Privacy.vue'),
    meta: {
      title: 'Privacy Policy - ChineseName.us | Data Protection & User Privacy',
      canonicalPath: '/privacy',
      description: 'Read our privacy policy to understand how ChineseName.us protects your personal information and data when using our Chinese name translation and generation services.',
      keywords: 'chinesename.us privacy policy, data protection chinese names, user privacy policy, chinese name service privacy, personal information protection, data security chinese translation'
    }
  },
  {
    path: '/terms',
    name: 'Terms',
    component: () => import('../views/pages/Terms.vue'),
    meta: {
      title: 'Terms of Service - ChineseName.us | Usage Terms & Conditions',
      canonicalPath: '/terms',
      description: 'Review the terms of service for using ChineseName.us Chinese name translation and generation services. Understand your rights and responsibilities when using our platform.',
      keywords: 'chinesename.us terms of service, usage terms chinese names, service conditions, chinese name service terms, user agreement, chinese translation terms, platform usage rules'
    }
  },
  {
    path: '/blog/family-naming-rules',
    name: 'FamilyNamingRules',
    component: () => import('../views/FamilyNamingRules.vue'),
    meta: {
      title: 'Family Naming Rules in Chinese Culture | ChineseName.us',
      canonicalPath: '/blog/family-naming-rules',
      description: 'Understand traditional Chinese family naming rules and conventions. Learn about generational naming patterns, family hierarchy in names, and cultural guidelines for Chinese family names.',
      keywords: 'chinese family naming rules, generational naming patterns, chinese family name conventions, traditional family naming, chinese naming hierarchy, family name traditions, chinese generational names, ancestral naming rules'
    }
  },
  {
    path: '/blog/zodiac-naming',
    name: 'ZodiacNaming',
    component: () => import('../views/ZodiacNaming.vue'),
    meta: {
      title: 'Chinese Zodiac Naming - Animal Signs in Names | ChineseName.us',
      canonicalPath: '/blog/zodiac-naming',
      description: 'Learn how Chinese zodiac animals influence name selection. Discover naming traditions based on your zodiac sign and compatible characters for each animal.',
      keywords: 'chinese zodiac naming, zodiac animal names, chinese astrology names, zodiac compatible names, chinese zodiac characters, animal sign names, zodiac name selection, chinese horoscope naming'
    }
  },
  {
    path: '/blog/naming-sound-form-taboos',
    name: 'NameSoundFormTaboos',
    component: NameSoundFormTaboos,
    meta: {
      title: 'Sound and Form Taboos in Chinese Names | ChineseName.us',
      canonicalPath: '/blog/naming-sound-form-taboos',
      description: 'Learn about sound and form taboos in Chinese naming. Understand pronunciation restrictions, character shape considerations, and cultural taboos to avoid when choosing Chinese names.',
      keywords: 'chinese naming taboos, sound taboos chinese names, form taboos chinese naming, pronunciation restrictions chinese, character shape taboos, chinese naming restrictions, cultural naming taboos, forbidden chinese name sounds'
    }
  },
  {
    path: '/blog/modern-traditional',
    name: 'ModernTraditional',
    component: ModernTraditional,
    meta: {
      title: 'Modern and Traditional Chinese Names - Blending Styles | ChineseName.us',
      canonicalPath: '/blog/modern-traditional',
      description: 'Explore the balance between modern and traditional Chinese names. Learn how to blend contemporary trends with classical naming traditions for meaningful Chinese names.',
      keywords: 'modern chinese names, traditional chinese names, blending naming styles, contemporary chinese names, classical chinese naming, modern traditional balance, chinese name trends, evolving chinese names'
    }
  },
  {
    path: '/blog/era-naming-styles',
    name: 'EraNamingStyles',
    component: EraNamingStyles,
    meta: {
      title: 'Era-Based Chinese Naming Styles - Historical Trends | ChineseName.us',
      canonicalPath: '/blog/era-naming-styles',
      description: 'Discover how Chinese naming styles evolved through different historical eras. Learn about naming trends from ancient dynasties to modern times and their cultural influences.',
      keywords: 'era based chinese naming, historical chinese name trends, dynasty naming styles, chinese naming evolution, period naming patterns, historical naming traditions, chinese name history, era naming conventions'
    }
  },
  {
    path: '/blog/professional-considerations',
    name: 'ProfessionalConsiderations',
    component: ProfessionalConsiderations,
    meta: {
      title: 'Professional Considerations for Chinese Names | ChineseName.us',
      canonicalPath: '/blog/professional-considerations',
      description: 'Learn professional considerations when choosing Chinese names for business, career, and international contexts. Understand how Chinese names impact professional life and global communication.',
      keywords: 'professional chinese names, business chinese names, career chinese naming, international chinese names, professional name considerations, chinese names workplace, global chinese naming, business naming advice'
    }
  },
  {
    path: '/name-generator',
    name: 'NameGenerator',
    component: () => import('../views/NameGenerator.vue'),
    meta: {
      title: 'Chinese Name Generator | Create Your Authentic Chinese Name | ChineseName.us',
      canonicalPath: '/name-generator',
      description: 'Generate authentic Chinese names with our free Chinese name generator. Create personalized Chinese names with proper meanings and cultural significance based on your preferences.',
      keywords: 'authentic chinese name generator, personalized chinese names, chinese name meanings, create chinese name online, chinese name generator free, traditional chinese names, modern chinese names, chinese name creator',
      ogTitle: 'Chinese Name Generator | Create Authentic Chinese Names',
      ogDescription: 'Generate authentic Chinese names with cultural significance and proper meanings. Free Chinese name generator with personalization options.',
      ogImage: 'https://chinesename.us/images/name-generator-og.jpg',
      ogUrl: 'https://chinesename.us/name-generator',
      twitterCard: 'summary_large_image',
      twitterTitle: 'Chinese Name Generator | Authentic Chinese Names',
      twitterDescription: 'Create personalized Chinese names with cultural significance and proper meanings.',
      twitterImage: 'https://chinesename.us/images/name-generator-og.jpg'
    }
  },
  {
    path: '/funny-chinese-names',
    name: 'FunnyChineseNames',
    component: () => import('../views/FunnyChineseNames.vue'),
    meta: {
      title: 'Funny Chinese Names and Meanings | Humorous Chinese Name Ideas',
      canonicalPath: '/funny-chinese-names',
      description: 'Discover funny Chinese names with meanings and cultural context. Learn about amusing Chinese name translations and naming jokes with respectful cultural explanations.',
      keywords: 'funny chinese names, humorous chinese names, chinese name jokes, chinese name translation fails, chinese name humor, amusing chinese names, weird chinese names, silly chinese names'
    }
  },
  {
    path: '/chinese-dog-names',
    name: 'ChineseDogNames',
    component: () => import('../views/ChineseDogNames.vue'),
    meta: {
      title: 'Chinese Dog Names with Meanings (2025) | Traditional & Modern Pet Names',
      canonicalPath: '/chinese-dog-names',
      description: 'Discover 100+ authentic Chinese dog names with meanings, pronunciations, and cultural significance. Find the perfect traditional or modern Chinese name for your puppy.',
      keywords: 'chinese dog names, chinese names for dogs, dog names in chinese, chinese puppy names, traditional chinese dog names, chinese dog naming, lucky chinese dog names, chinese pet names'
    }
  },
  {
    path: '/chinese-cat-names',
    name: 'ChineseCatNames',
    component: () => import('../views/ChineseCatNames.vue'),
    meta: {
      title: 'Chinese Cat Names with Meanings (2025) | Traditional & Modern Feline Names',
      canonicalPath: '/chinese-cat-names',
      description: 'Explore 100+ authentic Chinese cat names with meanings, pronunciations, and cultural significance. Find the perfect traditional or modern Chinese name for your feline friend.',
      keywords: 'chinese cat names, chinese names for cats, cat names in chinese, chinese kitten names, traditional chinese cat names, chinese cat naming, female chinese cat names, male chinese cat names'
    }
  },
  {
    path: '/tools/structured-data-test',
    name: 'StructuredDataTest',
    component: () => import('../views/StructuredDataTest.vue'),
    meta: {
      title: 'Structured Data Test - ChineseName.us | SEO Testing Tool',
      canonicalPath: '/tools/structured-data-test',
      description: 'Test and verify structured data implementation for improved SEO. View all types of structured data including WebSite, WebApplication, HowTo, ItemList, FAQ, and BreadcrumbList schemas.',
      keywords: 'structured data, json-ld, schema.org, seo testing, structured data testing, schema markup'
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('../views/NotFound.vue'),
    meta: {
      title: 'Page Not Found - ChineseName.us | Chinese Name Translation Services',
      canonicalPath: '/404',
      description: 'The page you are looking for was not found. Explore our Chinese name translation, generation, and cultural naming services. Find your perfect Chinese name today.',
      keywords: 'page not found, chinese name services, chinese name translation, chinese name generator, find chinese names, chinese naming help, explore chinese names'
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