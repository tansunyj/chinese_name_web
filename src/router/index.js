import { createRouter, createWebHistory } from 'vue-router'

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