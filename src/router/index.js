import { createRouter, createWebHistory } from 'vue-router'
import NameSoundFormTaboos from '../views/NameSoundFormTaboos.vue'
import ModernTraditional from '../views/ModernTraditional.vue'
import ProfessionalConsiderations from '../views/ProfessionalConsiderations.vue'
import EraNamingStyles from '../views/EraNamingStyles.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/HomePage.vue')
  },
  {
    path: '/translate',
    name: 'TranslateName',
    component: () => import('../views/TranslateName.vue')
  },
  {
    path: '/custom',
    name: 'CustomName',
    component: () => import('../views/CustomName.vue')
  },
  {
    path: '/ai-chinese-name',
    name: 'AIChineseName',
    component: () => import('../views/CustomChineseName.vue'),
    meta: {
      title: '定制中文名称 - AI智能生成'
    }
  },
  {
    path: '/multilingual',
    name: 'MultilingualName',
    component: () => import('../views/MultilingualName.vue')
  },
  {
    path: '/knowledge',
    name: 'KnowledgeBase',
    component: () => import('../views/KnowledgeBase.vue')
  },
  {
    path: '/chinese-surnames',
    name: 'ChineseSurnames',
    component: () => import('../views/ChineseSurnames.vue')
  },
  {
    path: '/baijiaxing',
    name: 'BaijiaXing',
    component: () => import('../views/BaijiaXing.vue')
  },
  {
    path: '/naming-traditions',
    name: 'NamingTraditions',
    component: () => import('../views/NamingTraditions.vue')
  },
  {
    path: '/historical-names',
    name: 'HistoricalNames',
    component: () => import('../views/HistoricalNames.vue')
  },
  {
    path: '/regional-naming-differences',
    name: 'RegionalNamingDifferences',
    component: () => import('../views/RegionalNamingDifferences.vue')
  },
  {
    path: '/naming-taboos',
    name: 'NamingTaboos',
    component: () => import('../views/NamingTaboos.vue')
  },
  {
    path: '/wuxing-bazi',
    name: 'WuXingBaZi',
    component: () => import('../views/WuXingBaZi.vue')
  },
  {
    path: '/name-numerology',
    name: 'NameNumerology',
    component: () => import('../views/NameNumerology.vue')
  },
  {
    path: '/sound-harmony',
    name: 'SoundHarmony',
    component: () => import('../views/SoundHarmony.vue')
  },
  {
    path: '/seasonal-characters',
    name: 'SeasonalCharacters',
    component: () => import('../views/SeasonalCharacters.vue')
  },
  {
    path: '/form-meaning',
    name: 'FormMeaning',
    component: () => import('../views/FormMeaning.vue')
  },
  {
    path: '/classical-characters',
    name: 'ClassicalCharacters',
    component: () => import('../views/ClassicalCharacters.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/signup',
    name: 'Signup',
    component: () => import('../views/Signup.vue')
  },
  {
    path: '/name-to-pinyin',
    name: 'NameToPinyin',
    component: () => import('../views/NameToPinyin.vue')
  },
  {
    path: '/pinyin-to-name',
    name: 'PinyinToName',
    component: () => import('../views/PinyinToName.vue')
  },
  {
    path: '/zodiac-calculator',
    name: 'ZodiacCalculator',
    component: () => import('../views/ZodiacCalculator.vue')
  },
  {
    path: '/constellation',
    name: 'ConstellationAnalysis',
    component: () => import('../views/ConstellationAnalysis.vue')
  },
  {
    path: '/character-strokes',
    name: 'CharacterStrokes',
    component: () => import('../views/CharacterStrokes.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/AboutUs.vue')
  },
  {
    path: '/family-naming-rules',
    name: 'FamilyNamingRules',
    component: () => import('../views/FamilyNamingRules.vue')
  },
  {
    path: '/zodiac-naming',
    name: 'ZodiacNaming',
    component: () => import('../views/ZodiacNaming.vue')
  },
  {
    path: '/naming-sound-form-taboos',
    name: 'NameSoundFormTaboos',
    component: NameSoundFormTaboos,
    meta: {
      title: '字音字形避讳 - 中文姓名知识库'
    }
  },
  {
    path: '/modern-traditional',
    name: 'ModernTraditional',
    component: ModernTraditional,
    meta: {
      title: '现代与传统的结合 - 中文姓名知识库'
    }
  },
  {
    path: '/era-naming-styles',
    name: 'EraNamingStyles',
    component: EraNamingStyles,
    meta: {
      title: '时代取名风格 - 中文姓名知识库'
    }
  },
  {
    path: '/professional-considerations',
    name: 'ProfessionalConsiderations',
    component: ProfessionalConsiderations,
    meta: {
      title: '职业与社会角色考量 - 中文姓名知识库'
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('../views/NotFound.vue')
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
  // 滚动到顶部
  window.scrollTo(0, 0);
  next();
});

export default router 