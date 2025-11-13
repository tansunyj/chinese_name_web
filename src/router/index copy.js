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
      title: "Chinese Girl Names with Meanings (2025) | Female Names Guide",
      canonicalPath: '/chinese-girl-names',
      description: "Explore 200+ beautiful Chinese girl names with meanings and pronunciations. Find popular, unique and modern female Chinese names for your baby girl.",
      keywords: "chinese girl names,beautiful girl names,female chinese names,baby girl names,chinese baby names,popular chinese names",
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
      title: "Chinese Boy Names with Meanings (2025) | Male Names Guide",
      canonicalPath: '/chinese-boy-names',
      description: "Discover 200+ meaningful Chinese boy names with pronunciations. Find traditional, modern and popular male Chinese names with authentic cultural meanings.",
      keywords: "chinese boy names,male chinese names,chinese baby boy names,baby names,strong names for boys,popular chinese names",
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
      title: "Chinese Last Names - 300+ Family Surnames Guide (2025)",
      canonicalPath: '/chinese-last-names',
      description: "Explore 300+ Chinese surnames with meanings, origins and pronunciation. Discover common Chinese family names and their historical significance.",
      keywords: "chinese surnames,chinese last names,common chinese surnames,chinese family names,top chinese surnames,popular surnames",
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
      title: "Chinese Names and Meanings - Character Guide (2025)",
      canonicalPath: '/chinese-names-and-meanings',
      description: "Explore Chinese names and their profound meanings. Learn about character significance, naming traditions, and find beautiful Chinese names with positive meanings.",
      keywords: "chinese names meanings,chinese name meaning,chinese character meanings,traditional chinese names,meaning of chinese names",
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
      title: 'Popular Chinese Names - Top Name Examples and Meanings',
      canonicalPath: '/blog/popular-chinese-names',
      description: 'Explore popular Chinese names with meanings and pronunciations. Find traditional and modern name examples for boys and girls with cultural significance.',
      keywords: 'popular chinese names,common names,trending names,name meanings,boy names,girl names,traditional names,modern names'
    }
  },
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/HomePage.vue'),
    meta: {
      title: 'Chinese Name Generator & Translator - Free | ChineseName.us',
      canonicalPath: '/',
      description: 'Get your accurate Chinese name translation with our free generator. Personalized Chinese names with authentic pronunciation, cultural meanings and significance for English names.',
      keywords: 'chinese name generator,translate name to chinese,english to chinese,free,chinese names meaning',
      ogTitle: 'Chinese Name Generator & Translator | Free English to Chinese',
      ogDescription: 'Get your accurate Chinese name translation with our free generator. Personalized Chinese names with authentic pronunciation and cultural meanings.',
      ogImage: 'https://chinesename.us/images/chinese-name-og.jpg',
      ogUrl: 'https://chinesename.us/',
      twitterCard: 'summary_large_image',
      twitterTitle: 'Chinese Name Generator & Translator | Free English to Chinese',
      twitterDescription: 'Accurate Chinese name translations with cultural meanings. Free personalized Chinese names for English names.',
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
      title: 'English to Chinese Name Translator | Write My Name in Chinese',
      canonicalPath: '/english-to-chinese-translator',
      description: 'Write your name in Chinese characters with our translator. Convert English, Spanish, French or any foreign name to Chinese with authentic pronunciation and cultural meaning.',
      keywords: "name in chinese,write my name in chinese,english to chinese translator,chinese characters,translate name,chinese translation",
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
      title: 'Chinese to English Name Translator | Convert Chinese Names',
      canonicalPath: '/chinese-to-english-translator',
      description: 'Translate Chinese names to English with our professional tool. Get accurate English translations of Chinese names with proper pronunciation and meaning.',
      keywords: 'chinese to english,name translator,convert chinese names,pronunciation,name meaning,translate chinese name,chinese converter',
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
      title: 'Fantasy Chinese Name Generator | Magical Character Names',
      canonicalPath: '/fantasy-chinese-name-generator',
      description: 'Create enchanting fantasy Chinese names for characters, stories and creative projects. Generate mystical names with authentic Chinese elements for novels, games and role-playing.',
      keywords: 'fantasy chinese names,wuxia names,xianxia,chinese fantasy,martial arts names,mythology names,fantasy characters',
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
      title: 'Fantasy Chinese Names Guide | Mystical Naming Traditions',
      canonicalPath: '/blog/fantasy-chinese-names-guide',
      description: 'Guide to fantasy Chinese names, wuxia naming traditions, elements theory and creating mystical names for literature, games and creative projects.',
      keywords: 'fantasy chinese names,wuxia names,xianxia,chinese fantasy,martial arts names,mythology names,fantasy characters',
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
      title: 'Custom Chinese Name Generator | Personalized Creation',
      canonicalPath: '/custom-chinese-name-generator',
      description: 'Create personalized Chinese names with our custom generator. Design names based on meaning, pronunciation, cultural elements, birth date, zodiac sign and five elements theory.',
      keywords: 'custom chinese name generator,personalized name,chinese name creator,chinese name maker,unique chinese name,meaningful names',
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
      title: 'AI Chinese Name Generator - Smart Name Creation',
      canonicalPath: '/ai-chinese-name-generator',
      description: 'Generate Chinese names using AI technology. Our smart system creates culturally appropriate names with personalized meanings and accurate pronunciation.',
      keywords: 'ai name generator,chinese name generator,artificial intelligence names,smart name creator,ai translator,chinese ai generator',
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
      title: 'Multilingual Chinese Names - International Translation',
      canonicalPath: '/multilingual',
      description: 'Translate names from multiple languages to Chinese including Spanish, French, German, Japanese, Korean and more with cultural context and accuracy.',
      keywords: 'multilingual names,international translation,spanish to chinese,french,german,japanese,korean,global names',
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
      title: 'Chinese Name Blog - Learn About Naming Traditions',
      canonicalPath: '/blog',
      description: 'Explore our blog covering naming traditions, cultural practices, character meanings and expert guidance for choosing authentic Chinese names.',
      keywords: 'chinese name blog,naming traditions,character meanings,naming guide,name culture,cultural practices,articles',
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
      title: 'Chinese Surnames - Popular Family Names in China',
      canonicalPath: '/blog/chinese-surnames',
      description: 'Explore popular Chinese surnames with origins, meanings and cultural significance. Learn about common Chinese family names and their historical background.',
      keywords: 'chinese surnames,family names,last names,popular surnames,common surnames,surname meanings,origins,history',
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
      title: 'Hundred Family Surnames (Baijiaxing) - Chinese Surnames',
      canonicalPath: '/blog/baijiaxing',
      description: 'Learn about the Hundred Family Surnames (百家姓), a classic text listing traditional Chinese surnames, their history, origins and cultural importance.',
      keywords: 'baijiaxing,hundred family surnames,traditional surnames,surname history,ancient family names,origins,classic surnames',
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
      title: 'Chinese Naming Traditions - Cultural Name Practices',
      canonicalPath: '/blog/naming-traditions',
      description: 'Discover traditional Chinese naming customs, cultural practices and generational naming patterns. Learn how families choose meaningful names based on traditions.',
      keywords: 'naming traditions,customs,traditional naming,name culture,generational patterns,family naming rules,practices'
    }
  },
  {
    path: '/blog/historical-names',
    name: 'HistoricalNames',
    component: () => import('../views/HistoricalNames.vue'),
    meta: {
      title: 'Historical Chinese Names - Famous Names in Chinese History',
      canonicalPath: '/blog/historical-names',
      description: 'Explore famous historical Chinese names from emperors, scholars, poets and cultural figures. Learn about naming patterns and meanings of legendary personalities.',
      keywords: 'historical names,famous names,emperor names,scholar names,poet names,legendary names,ancient names,historical figures'
    }
  },
  {
    path: '/blog/regional-naming-differences',
    name: 'RegionalNamingDifferences',
    component: () => import('../views/RegionalNamingDifferences.vue'),
    meta: {
      title: 'Regional Chinese Naming Differences - Names Across China',
      canonicalPath: '/blog/regional-naming-differences',
      description: 'Explore regional differences in Chinese naming practices across China. Learn how naming traditions vary between provinces, cities and cultural regions.',
      keywords: 'regional naming,naming differences,regional names,provincial names,dialect names,regional traditions,name variations'
    }
  },
  {
    path: '/blog/naming-taboos',
    name: 'NamingTaboos',
    component: () => import('../views/NamingTaboos.vue'),
    meta: {
      title: 'Chinese Naming Taboos - What to Avoid in Chinese Names',
      canonicalPath: '/blog/naming-taboos',
      description: 'Learn about Chinese naming taboos and what to avoid when choosing names. Understand cultural restrictions, unlucky characters and naming conventions to respect.',
      keywords: 'naming taboos,name restrictions,unlucky characters,naming rules,forbidden names,cultural restrictions,naming etiquette'
    }
  },
  // 移除重复路由定义 - 此处之前有重复的ChineseNamesAndMeanings路由
  {
    path: '/blog/name-numerology',
    name: 'NameNumerology',
    component: () => import('../views/NameNumerology.vue'),
    meta: {
      title: 'Chinese Name Numerology - Numbers in Chinese Names',
      canonicalPath: '/blog/name-numerology',
      description: 'Explore Chinese name numerology and the significance of stroke counts and number patterns in naming. Learn how numerology influences name selection and fortune telling.',
      keywords: 'name numerology,stroke count,numerology,name numbers,character strokes,fortune telling,name calculation'
    }
  },
  {
    path: '/blog/sound-harmony',
    name: 'SoundHarmony',
    component: () => import('../views/SoundHarmony.vue'),
    meta: {
      title: 'Sound Harmony in Chinese Names - Phonetic Balance',
      canonicalPath: '/blog/sound-harmony',
      description: 'Learn about sound harmony and phonetic balance in Chinese names. Understand how tone combinations and pronunciation patterns create harmonious names.',
      keywords: 'sound harmony,phonetics,tone harmony,pronunciation,name rhythm,phonetic names,sound patterns,name acoustics'
    }
  },
  {
    path: '/blog/seasonal-characters',
    name: 'SeasonalCharacters',
    component: () => import('../views/SeasonalCharacters.vue'),
    meta: {
      title: 'Seasonal Characters in Chinese Names - Nature-Inspired',
      canonicalPath: '/blog/seasonal-characters',
      description: 'Discover seasonal characters used in Chinese names. Learn about nature-inspired characters representing spring, summer, autumn and winter in traditional naming.',
      keywords: 'seasonal characters,nature inspired,spring names,summer names,autumn names,winter names,seasonal patterns'
    }
  },
  {
    path: '/blog/form-meaning',
    name: 'FormMeaning',
    component: () => import('../views/FormMeaning.vue'),
    meta: {
      title: 'Form and Meaning in Chinese Names - Character Structure',
      canonicalPath: '/blog/form-meaning',
      description: 'Understand the relationship between form and meaning in Chinese names. Learn how character structure, radicals and visual elements impact name meanings.',
      keywords: 'form meaning,character structure,radicals,visual characters,aesthetics,name structure,composition,writing form'
    }
  },
  {
    path: '/blog/classical-characters',
    name: 'ClassicalCharacters',
    component: () => import('../views/ClassicalCharacters.vue'),
    meta: {
      title: 'Classical Characters in Chinese Names - Traditional Elements',
      canonicalPath: '/blog/classical-characters',
      description: 'Explore classical characters used in traditional Chinese names. Discover ancient characters with deep cultural meanings and significance in classical naming.',
      keywords: 'classical characters,traditional elements,ancient characters,classical traditions,traditional writing,historical characters'
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
    meta: {
      title: 'Login - Chinese Name Translation Services',
      canonicalPath: '/login',
      description: 'Log in to your account to access premium Chinese name translation features. Sign in to save favorite names and access personalized services.',
      keywords: 'login,name service,account,sign in,user account,translation,premium features'
    }
  },
  {
    path: '/signup',
    name: 'Signup',
    component: () => import('../views/Signup.vue'),
    meta: {
      title: 'Sign Up - Create Account for Chinese Name Services',
      canonicalPath: '/signup',
      description: 'Create your free account to access premium Chinese name translation and personalization features. Join thousands finding their perfect Chinese names.',
      keywords: 'sign up,create account,register,free account,membership,join community,name service'
    }
  },
  {
    path: '/name-to-pinyin',
    name: 'NameToPinyin',
    component: () => import('../views/NameToPinyin.vue'),
    meta: {
      title: 'Chinese Name to Pinyin Converter - Pronunciation Guide',
      canonicalPath: '/name-to-pinyin',
      description: 'Convert Chinese names to pinyin with accurate tone marks and pronunciation guidance. Learn how to pronounce Chinese names correctly with our free converter.',
      keywords: 'name to pinyin,pinyin converter,pronunciation,pronunciation guide,pinyin converter,pronounce chinese names,tone marks',
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
      title: 'Pinyin to Chinese Name - Find Characters by Pronunciation',
      canonicalPath: '/pinyin-to-name',
      description: 'Find Chinese characters and names by pinyin pronunciation. Search for suitable name characters based on desired sounds and tones for your perfect name.',
      keywords: 'pinyin to name,characters by pronunciation,name by sound,pinyin search,pronunciation search,character finder',
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
      title: 'Chinese Zodiac Calculator - Find Your Zodiac Sign',
      canonicalPath: '/zodiac-calculator',
      description: 'Calculate your Chinese zodiac sign based on birth year. Discover your zodiac animal and learn how it influences name selection and personality traits.',
      keywords: 'zodiac calculator,zodiac sign,zodiac animals,astrology,birth year,zodiac names,animal calculator,horoscope',
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
    path: '/name-numerology-calculator',
    name: 'NumerologyCalculator',
    component: () => import('../views/NumerologyCalculator.vue'),
    meta: {
      title: 'Name Numerology Calculator - Free Number Analysis',
      canonicalPath: '/name-numerology-calculator',
      description: 'Calculate the numerological value of your name with our free calculator. Discover what your name reveals about personality, destiny, and life path.',
      keywords: 'numerology calculator,name numerology,free numerology calculator,name meaning calculator,life path number,name analysis',
      ogTitle: 'Name Numerology Calculator | Discover Your Name Hidden Meaning',
      ogDescription: 'Calculate the numerological value of your name and discover what it reveals about your personality, destiny, and life path.',
      ogImage: 'https://chinesename.us/images/numerology-calculator-og.jpg',
      ogUrl: 'https://chinesename.us/name-numerology-calculator',
      twitterCard: 'summary_large_image',
      twitterTitle: 'Name Numerology Calculator | Name Number Analysis',
      twitterDescription: 'Discover the hidden meaning in your name through numerology analysis.',
      twitterImage: 'https://chinesename.us/images/numerology-calculator-og.jpg'
    }
  },
  {
    path: '/constellation-analysis',
    name: 'ConstellationAnalysis',
    component: () => import('../views/ConstellationAnalysis.vue'),
    meta: {
      title: 'Constellation Analysis for Chinese Names - Astrological',
      canonicalPath: '/constellation-analysis',
      description: 'Analyze how constellations influence Chinese names. Learn how Western astrology can guide name selection with cultural harmony and celestial meaning.',
      keywords: 'constellation names,astrological naming,star sign,celestial names,astrology analysis,zodiac,name meanings'
    }
  },
  {
    path: '/blog/character-strokes',
    name: 'CharacterStrokes',
    component: () => import('../views/CharacterStrokes.vue'),
    meta: {
      title: 'Chinese Character Strokes - Stroke Count in Names',
      canonicalPath: '/blog/character-strokes',
      description: 'Learn about character stroke counts and their significance in naming. Understand how stroke numbers influence name fortune and balance in Chinese names.',
      keywords: 'character strokes,stroke count,stroke order,stroke analysis,stroke meanings,calligraphy,fortune,writing strokes'
    }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/pages/About.vue'),
    meta: {
      title: 'About Us - Professional Chinese Name Translation Services',
      canonicalPath: '/about',
      description: 'Learn about our trusted professional Chinese name translation services. Discover our mission to bridge cultures through authentic Chinese naming.',
      keywords: 'about us,translation service,professional naming,name experts,authentic names,cultural translation,naming mission'
    }
  },
  {
    path: '/privacy',
    name: 'Privacy',
    component: () => import('../views/pages/Privacy.vue'),
    meta: {
      title: 'Privacy Policy - Data Protection & User Privacy',
      canonicalPath: '/privacy',
      description: 'Read our privacy policy to understand how we protect your personal information when using our Chinese name translation and generation services.',
      keywords: 'privacy policy,data protection,user privacy,service privacy,information protection,data security,translation'
    }
  },
  {
    path: '/terms',
    name: 'Terms',
    component: () => import('../views/pages/Terms.vue'),
    meta: {
      title: 'Terms of Service - Usage Terms & Conditions',
      canonicalPath: '/terms',
      description: 'Review our terms of service for using Chinese name translation and generation services. Understand your rights and responsibilities on our platform.',
      keywords: 'terms of service,usage terms,service conditions,user agreement,translation terms,platform usage,rules'
    }
  },
  {
    path: '/blog/family-naming-rules',
    name: 'FamilyNamingRules',
    component: () => import('../views/FamilyNamingRules.vue'),
    meta: {
      title: 'Family Naming Rules in Chinese Culture - Traditions',
      canonicalPath: '/blog/family-naming-rules',
      description: 'Understand traditional Chinese family naming rules and conventions. Learn about generational patterns, family hierarchy and cultural guidelines for names.',
      keywords: 'family naming rules,generational patterns,conventions,traditional naming,hierarchy,traditions,ancestral naming'
    }
  },
  {
    path: '/blog/zodiac-naming',
    name: 'ZodiacNaming',
    component: () => import('../views/ZodiacNaming.vue'),
    meta: {
      title: 'Chinese Zodiac Naming - Animal Signs in Names',
      canonicalPath: '/blog/zodiac-naming',
      description: 'Learn how Chinese zodiac animals influence name selection. Discover naming traditions based on zodiac signs and compatible characters for each animal.',
      keywords: 'zodiac naming,animal names,astrology names,compatible names,zodiac characters,animal signs,name selection'
    }
  },
  {
    path: '/blog/naming-sound-form-taboos',
    name: 'NameSoundFormTaboos',
    component: NameSoundFormTaboos,
    meta: {
      title: 'Sound and Form Taboos in Chinese Names - Restrictions',
      canonicalPath: '/blog/naming-sound-form-taboos',
      description: 'Learn about sound and form taboos in Chinese naming. Understand pronunciation restrictions, character shape considerations and cultural taboos to avoid.',
      keywords: 'sound taboos,form taboos,pronunciation restrictions,character shape,naming restrictions,cultural taboos,forbidden sounds'
    }
  },
  {
    path: '/blog/modern-traditional',
    name: 'ModernTraditional',
    component: ModernTraditional,
    meta: {
      title: 'Modern and Traditional Chinese Names - Blending Styles',
      canonicalPath: '/blog/modern-traditional',
      description: 'Explore balancing modern and traditional Chinese names. Learn how to blend contemporary trends with classical naming traditions for meaningful names.',
      keywords: 'modern names,traditional names,blending styles,contemporary names,classical naming,balance,name trends'
    }
  },
  {
    path: '/blog/era-naming-styles',
    name: 'EraNamingStyles',
    component: EraNamingStyles,
    meta: {
      title: 'Era-Based Chinese Naming Styles - Historical Trends',
      canonicalPath: '/blog/era-naming-styles',
      description: 'Discover how Chinese naming styles evolved through historical eras. Learn about naming trends from ancient dynasties to modern times and their influences.',
      keywords: 'era naming,historical trends,dynasty styles,naming evolution,period patterns,historical traditions,name history'
    }
  },
  {
    path: '/blog/professional-considerations',
    name: 'ProfessionalConsiderations',
    component: ProfessionalConsiderations,
    meta: {
      title: 'Professional Considerations for Chinese Names - Business',
      canonicalPath: '/blog/professional-considerations',
      description: 'Learn professional considerations when choosing Chinese names for business and international contexts. Understand how names impact career and communication.',
      keywords: 'professional names,business names,career naming,international names,name considerations,workplace names,global naming'
    }
  },
  {
    path: '/name-generator',
    name: 'NameGenerator',
    component: () => import('../views/NameGenerator.vue'),
    meta: {
      title: 'Chinese Name Generator | Create Authentic Chinese Names',
      canonicalPath: '/name-generator',
      description: 'Generate authentic Chinese names with our free tool. Create personalized Chinese names with proper meanings and cultural significance based on your preferences.',
      keywords: 'chinese name generator,free name generator,chinese names,translate name to chinese,personalized names,authentic chinese names',
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
      title: 'Funny Chinese Names and Meanings - Humorous Name Ideas',
      canonicalPath: '/funny-chinese-names',
      description: 'Discover funny Chinese names with meanings and cultural context. Learn about amusing name translations and naming jokes with respectful explanations.',
      keywords: 'funny names,humorous names,name jokes,translation fails,name humor,amusing names,weird names,silly names'
    }
  },
  {
    path: '/chinese-dog-names',
    name: 'ChineseDogNames',
    component: () => import('../views/ChineseDogNames.vue'),
    meta: {
      title: 'Chinese Dog Names with Meanings (2025) - Pet Names',
      canonicalPath: '/chinese-dog-names',
      description: 'Discover 100+ authentic Chinese dog names with meanings and pronunciations. Find the perfect traditional or modern Chinese name for your puppy.',
      keywords: 'chinese dog names,chinese pet names,dog names in chinese,puppy names,lucky dog names,traditional dog names,chinese animal names'
    }
  },
  {
    path: '/chinese-cat-names',
    name: 'ChineseCatNames',
    component: () => import('../views/ChineseCatNames.vue'),
    meta: {
      title: 'Chinese Cat Names with Meanings (2025) - Feline Names',
      canonicalPath: '/chinese-cat-names',
      description: 'Explore 100+ authentic Chinese cat names with meanings and pronunciations. Find the perfect traditional or modern name for your feline friend.',
      keywords: 'chinese cat names,cat names in chinese,kitten names,female chinese cat names,male cat names,pet names chinese,lucky cat names'
    }
  },
  {
    path: '/tools/structured-data-test',
    name: 'StructuredDataTest',
    component: () => import('../views/StructuredDataTest.vue'),
    meta: {
      title: 'Structured Data Test - SEO Testing Tool',
      canonicalPath: '/tools/structured-data-test',
      description: 'Test and verify structured data implementation for improved SEO. View all types of structured data including Website, HowTo, ItemList, FAQ schemas.',
      keywords: 'structured data,json-ld,schema.org,seo testing,data testing,schema markup'
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('../views/NotFound.vue'),
    meta: {
      title: 'Page Not Found - Chinese Name Translation Services',
      canonicalPath: '/404',
      description: 'The page you are looking for was not found. Explore our name translation, generation and cultural naming services to find your perfect Chinese name.',
      keywords: 'page not found,name services,translation,name generator,find names,naming help,explore names'
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