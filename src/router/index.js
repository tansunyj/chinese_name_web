import { createRouter, createWebHistory } from 'vue-router'
import NameSoundFormTaboos from '../views/NameSoundFormTaboos.vue'
import ModernTraditional from '../views/ModernTraditional.vue'
import ProfessionalConsiderations from '../views/ProfessionalConsiderations.vue'
import EraNamingStyles from '../views/EraNamingStyles.vue'

const routes = [
  {
    path: '/popular-chinese-names',
    name: 'popular-chinese-names',
    component: () => import('../views/PopularChineseNames.vue'),
    meta: {
      title: 'Popular Chinese Names - Name Examples and Meanings',
      canonicalPath: '/popular-chinese-names',
      description: 'Explore popular Chinese names with meanings and pronunciations. Find traditional and modern Chinese name examples for boys and girls.'
    }
  },
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/HomePage.vue'),
    meta: {
      title: 'English to Chinese Name Translator | Free Chinese Name Generator',
      canonicalPath: '/',
      description: 'Translate your English name to Chinese with our free name generator. Get accurate Chinese name translations with proper pronunciation and cultural meanings.'
    }
  },
  {
    path: '/translate',
    name: 'TranslateName',
    component: () => import('../views/TranslateName.vue'),
    meta: {
      title: 'English to Chinese Name Translator | Translate Your Name to Chinese',
      canonicalPath: '/translate',
      description: 'Translate your English name to Chinese with our professional name translator. Convert English names to Chinese characters with accurate pronunciation and cultural meaning.'
    }
  },
  {
    path: '/chinese-to-english',
    name: 'ChineseToEnglishName',
    component: () => import('../views/ChineseToEnglishName.vue'),
    meta: {
      title: 'Chinese to English Name Translator | Convert Chinese Names to English',
      canonicalPath: '/chinese-to-english',
      description: 'Translate Chinese names to English with our professional name translation tool. Get accurate English translations of Chinese names with proper pronunciation and meaning.'
    }
  },
  {
    path: '/custom',
    name: 'CustomName',
    component: () => import('../views/CustomName.vue'),
    meta: {
      title: 'Custom Chinese Name | Personalized Chinese Name Creation',
      canonicalPath: '/custom',
      description: 'Create a personalized Chinese name with our custom name generator. Design names based on meaning, pronunciation, and cultural significance.'
    }
  },
  {
    path: '/ai-chinese-name',
    name: 'AIChineseName',
    component: () => import('../views/CustomChineseName.vue'),
    meta: {
      title: 'AI Chinese Name Generator - Smart Name Creation',
      canonicalPath: '/ai-chinese-name',
      description: 'Generate Chinese names using AI technology. Our smart system creates culturally appropriate names with personalized meanings and accurate pronunciation.'
    }
  },
  {
    path: '/multilingual',
    name: 'MultilingualName',
    component: () => import('../views/MultilingualName.vue'),
    meta: {
      title: 'Multilingual Chinese Names - International Name Translation',
      canonicalPath: '/multilingual'
    }
  },
  {
    path: '/knowledge',
    name: 'KnowledgeBase',
    component: () => import('../views/KnowledgeBase.vue'),
    meta: {
      title: 'Chinese Name Knowledge Base - Learn About Chinese Names',
      canonicalPath: '/knowledge'
    }
  },
  {
    path: '/chinese-surnames',
    name: 'ChineseSurnames',
    component: () => import('../views/ChineseSurnames.vue'),
    meta: {
      title: 'Chinese Surnames - Popular Family Names in China',
      canonicalPath: '/chinese-surnames'
    }
  },
  {
    path: '/baijiaxing',
    name: 'BaijiaXing',
    component: () => import('../views/BaijiaXing.vue'),
    meta: {
      title: 'Hundred Family Surnames (Baijiaxing) - Traditional Chinese Surnames',
      canonicalPath: '/baijiaxing'
    }
  },
  {
    path: '/naming-traditions',
    name: 'NamingTraditions',
    component: () => import('../views/NamingTraditions.vue'),
    meta: {
      title: 'Chinese Naming Traditions - Cultural Name Practices',
      canonicalPath: '/naming-traditions'
    }
  },
  {
    path: '/historical-names',
    name: 'HistoricalNames',
    component: () => import('../views/HistoricalNames.vue'),
    meta: {
      title: 'Historical Chinese Names - Famous Names in Chinese History',
      canonicalPath: '/historical-names'
    }
  },
  {
    path: '/regional-naming-differences',
    name: 'RegionalNamingDifferences',
    component: () => import('../views/RegionalNamingDifferences.vue'),
    meta: {
      title: 'Regional Chinese Naming Differences - Names Across China',
      canonicalPath: '/regional-naming-differences'
    }
  },
  {
    path: '/naming-taboos',
    name: 'NamingTaboos',
    component: () => import('../views/NamingTaboos.vue'),
    meta: {
      title: 'Chinese Naming Taboos - What to Avoid in Chinese Names',
      canonicalPath: '/naming-taboos'
    }
  },
  {
    path: '/wuxing-bazi',
    name: 'WuXingBaZi',
    component: () => import('../views/WuXingBaZi.vue'),
    meta: {
      title: 'Wu Xing and BaZi in Chinese Names - Five Elements Theory',
      canonicalPath: '/wuxing-bazi'
    }
  },
  {
    path: '/name-numerology',
    name: 'NameNumerology',
    component: () => import('../views/NameNumerology.vue'),
    meta: {
      title: 'Chinese Name Numerology - Numbers in Chinese Names',
      canonicalPath: '/name-numerology'
    }
  },
  {
    path: '/sound-harmony',
    name: 'SoundHarmony',
    component: () => import('../views/SoundHarmony.vue'),
    meta: {
      title: 'Sound Harmony in Chinese Names - Phonetic Balance',
      canonicalPath: '/sound-harmony'
    }
  },
  {
    path: '/seasonal-characters',
    name: 'SeasonalCharacters',
    component: () => import('../views/SeasonalCharacters.vue'),
    meta: {
      title: 'Seasonal Characters in Chinese Names - Nature-Inspired Names',
      canonicalPath: '/seasonal-characters'
    }
  },
  {
    path: '/form-meaning',
    name: 'FormMeaning',
    component: () => import('../views/FormMeaning.vue'),
    meta: {
      title: 'Form and Meaning in Chinese Names - Character Structure',
      canonicalPath: '/form-meaning'
    }
  },
  {
    path: '/classical-characters',
    name: 'ClassicalCharacters',
    component: () => import('../views/ClassicalCharacters.vue'),
    meta: {
      title: 'Classical Characters in Chinese Names - Traditional Name Elements',
      canonicalPath: '/classical-characters'
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
    meta: {
      title: 'Login - Chinese Name Translation Services',
      canonicalPath: '/login'
    }
  },
  {
    path: '/signup',
    name: 'Signup',
    component: () => import('../views/Signup.vue'),
    meta: {
      title: 'Sign Up - Create Account for Chinese Name Services',
      canonicalPath: '/signup'
    }
  },
  {
    path: '/name-to-pinyin',
    name: 'NameToPinyin',
    component: () => import('../views/NameToPinyin.vue'),
    meta: {
      title: 'Chinese Name to Pinyin Converter - Pronunciation Guide',
      canonicalPath: '/name-to-pinyin'
    }
  },
  {
    path: '/pinyin-to-name',
    name: 'PinyinToName',
    component: () => import('../views/PinyinToName.vue'),
    meta: {
      title: 'Pinyin to Chinese Name - Find Characters by Pronunciation',
      canonicalPath: '/pinyin-to-name'
    }
  },
  {
    path: '/zodiac-calculator',
    name: 'ZodiacCalculator',
    component: () => import('../views/ZodiacCalculator.vue'),
    meta: {
      title: 'Chinese Zodiac Calculator - Find Your Zodiac Sign',
      canonicalPath: '/zodiac-calculator'
    }
  },
  {
    path: '/constellation',
    name: 'ConstellationAnalysis',
    component: () => import('../views/ConstellationAnalysis.vue'),
    meta: {
      title: 'Constellation Analysis for Chinese Names - Astrological Naming',
      canonicalPath: '/constellation'
    }
  },
  {
    path: '/character-strokes',
    name: 'CharacterStrokes',
    component: () => import('../views/CharacterStrokes.vue'),
    meta: {
      title: 'Chinese Character Strokes - Stroke Count in Names',
      canonicalPath: '/character-strokes'
    }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/pages/About.vue'),
    meta: {
      title: 'About Us - ChineseName.us',
      canonicalPath: '/about'
    }
  },
  {
    path: '/privacy',
    name: 'Privacy',
    component: () => import('../views/pages/Privacy.vue'),
    meta: {
      title: 'Privacy Policy - ChineseName.us',
      canonicalPath: '/privacy'
    }
  },
  {
    path: '/terms',
    name: 'Terms',
    component: () => import('../views/pages/Terms.vue'),
    meta: {
      title: 'Terms of Service - ChineseName.us',
      canonicalPath: '/terms'
    }
  },
  {
    path: '/family-naming-rules',
    name: 'FamilyNamingRules',
    component: () => import('../views/FamilyNamingRules.vue'),
    meta: {
      title: 'Family Naming Rules in Chinese Culture',
      canonicalPath: '/family-naming-rules'
    }
  },
  {
    path: '/zodiac-naming',
    name: 'ZodiacNaming',
    component: () => import('../views/ZodiacNaming.vue'),
    meta: {
      title: 'Chinese Zodiac Naming - Animal Signs in Names',
      canonicalPath: '/zodiac-naming'
    }
  },
  {
    path: '/naming-sound-form-taboos',
    name: 'NameSoundFormTaboos',
    component: NameSoundFormTaboos,
    meta: {
      title: 'Sound and Form Taboos in Chinese Names',
      canonicalPath: '/naming-sound-form-taboos'
    }
  },
  {
    path: '/modern-traditional',
    name: 'ModernTraditional',
    component: ModernTraditional,
    meta: {
      title: 'Modern and Traditional Chinese Names - Blending Styles',
      canonicalPath: '/modern-traditional'
    }
  },
  {
    path: '/era-naming-styles',
    name: 'EraNamingStyles',
    component: EraNamingStyles,
    meta: {
      title: 'Era-Based Chinese Naming Styles - Historical Trends',
      canonicalPath: '/era-naming-styles'
    }
  },
  {
    path: '/professional-considerations',
    name: 'ProfessionalConsiderations',
    component: ProfessionalConsiderations,
    meta: {
      title: 'Professional Considerations for Chinese Names',
      canonicalPath: '/professional-considerations'
    }
  },
  {
    path: '/name-generator',
    name: 'NameGenerator',
    component: () => import('../views/NameGenerator.vue'),
    meta: {
      title: 'Chinese Name Generator | Create Your Authentic Chinese Name',
      canonicalPath: '/name-generator',
      description: 'Generate authentic Chinese names with our free Chinese name generator. Create personalized Chinese names with proper meanings and cultural significance based on your preferences.'
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('../views/NotFound.vue'),
    meta: {
      title: 'Page Not Found - ChineseName.us',
      canonicalPath: '/404'
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