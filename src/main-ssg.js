import './assets/main.css'

// 导入 vite-ssg 相关的 createApp
import { createApp as createClientApp, h } from 'vue'
import { createRouter, createMemoryHistory } from 'vue-router'
import App from './App.vue'
import i18n from './i18n'

// 从 router/index.js 中复制 routes 数组
// 这样可以避免在SSR中导入 createWebHistory
import NameSoundFormTaboos from './views/NameSoundFormTaboos.vue'
import ModernTraditional from './views/ModernTraditional.vue'
import ProfessionalConsiderations from './views/ProfessionalConsiderations.vue'
import EraNamingStyles from './views/EraNamingStyles.vue'

// 定义路由数组
const routes = [
  // 临时路由用于检查姓氏重复
  {
    path: '/check-duplicates',
    name: 'CheckDuplicates',
    component: () => import('./components/DuplicateChecker.vue')
  },
  {
    path: '/chinese-girl-names',
    name: 'ChineseGirlNames',
    component: () => import('./views/ChineseGirlNames.vue'),
    meta: {
      title: "Chinese Girl Names with Meanings (2025) | Beautiful Female Names",
      canonicalPath: '/chinese-girl-names',
      description: 'Explore 200+ beautiful Chinese girl names with meanings, pronunciations, and cultural significance. Find popular and unique female Chinese names for your baby with our comprehensive guide to traditional and modern Chinese girl names.',
      keywords: 'chinese girl names,chinese names for girls,female chinese names,beautiful chinese girl names,chinese female names meaning,chinese baby girl names'
    }
  },
  {
    path: '/chinese-boy-names',
    name: 'ChineseBoyNames',
    component: () => import('./views/ChineseBoyNames.vue'),
    meta: {
      title: "Chinese Boy Names with Meanings (2025) | Strong Male Names",
      canonicalPath: '/chinese-boy-names',
      description: 'Discover 200+ meaningful Chinese boy names with proper pronunciations and cultural significance. Find strong, unique, and popular Chinese names for boys with our comprehensive guide.',
      keywords: 'chinese boy names,chinese names for boys,male chinese names,strong chinese boy names,chinese male names meaning,chinese baby boy names'
    }
  },
  {
    path: '/chinese-last-names',
    name: 'ChineseLastNames',
    component: () => import('./views/ChineseLastNames.vue'),
    meta: {
      title: 'Chinese Last Names: Top 100 Common Chinese Surnames & Meanings',
      canonicalPath: '/chinese-last-names',
      description: 'Explore 100 most common Chinese last names with meanings, pronunciations, and cultural significance. Learn about Chinese surname origins and family name traditions in China.',
      keywords: 'chinese last names, chinese surnames, common chinese family names, chinese surname meanings, popular chinese last names, chinese family name origins, traditional chinese surnames, chinese family names list'
    }
  },
  {
    path: '/chinese-names-and-meanings',
    name: 'ChineseNamesAndMeanings',
    component: () => import('./views/ChineseNamesAndMeanings.vue'),
    meta: {
      title: 'Chinese Names and Meanings | Authentic Chinese Names | ChineseName.us',
      canonicalPath: '/chinese-names-and-meanings',
      description: 'Discover Chinese names and meanings with our comprehensive database. Find traditional and modern Chinese names with accurate pronunciations and cultural significance. Learn about Chinese naming customs and symbolism.',
      keywords: 'chinese names and meanings, authentic chinese names, traditional chinese names, modern chinese names, chinese name meanings, chinese name pronunciation, chinese name characters, chinese name symbolism'
    }
  },
  {
    path: '/tools/structured-data-test',
    name: 'StructuredDataTest',
    component: () => import('./views/StructuredDataTest.vue'),
    meta: {
      title: 'Structured Data Test - ChineseName.us | SEO Testing Tool',
      canonicalPath: '/tools/structured-data-test',
      description: 'Test and verify structured data implementation for improved SEO. View all types of structured data including WebSite, WebApplication, HowTo, ItemList, FAQ, and BreadcrumbList schemas.',
      keywords: 'structured data, json-ld, schema.org, seo testing, structured data testing, schema markup'
    }
  },
  {
    path: '/name-generator',
    name: 'NameGenerator',
    component: () => import('./views/NameGenerator.vue'),
    meta: {
      title: 'Chinese Name Generator | Create Your Authentic Chinese Name | ChineseName.us',
      canonicalPath: '/name-generator',
      description: 'Generate authentic Chinese names with our free Chinese name generator. Create personalized Chinese names with proper meanings and cultural significance based on your preferences.',
      keywords: 'chinese name generator, translate name to chinese, english to chinese name translation, free chinese names, personalized chinese names, chinese name meanings, chinese name pronunciation, chinese character translator, authentic chinese names, chinese naming traditions'
    }
  },
  {
    path: '/funny-chinese-names',
    name: 'FunnyChineseNames',
    component: () => import('./views/FunnyChineseNames.vue'),
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
    component: () => import('./views/ChineseDogNames.vue'),
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
    component: () => import('./views/ChineseCatNames.vue'),
    meta: {
      title: 'Chinese Cat Names with Meanings (2025) | Traditional & Modern Feline Names',
      canonicalPath: '/chinese-cat-names',
      description: 'Explore 100+ authentic Chinese cat names with meanings, pronunciations, and cultural significance. Find the perfect traditional or modern Chinese name for your feline friend.',
      keywords: 'chinese cat names, chinese names for cats, cat names in chinese, chinese kitten names, traditional chinese cat names, chinese cat naming, female chinese cat names, male chinese cat names'
    }
  },
  {
    path: '/',
    name: 'Home',
    component: () => import('./views/HomePage.vue'),
    meta: {
      title: 'Translate Names to Chinese: Free Generator & Meanings | ChineseName.us',
      canonicalPath: '/',
      description: 'Translate your English name to Chinese with our free name generator. Get accurate Chinese name translations with proper pronunciation and cultural meanings. Create personalized Chinese names with authentic cultural significance.',
      keywords: 'chinese name generator, translate name to chinese, english to chinese name translation, free chinese names, personalized chinese names, chinese name meanings, chinese name pronunciation, chinese character translator, authentic chinese names, chinese naming traditions'
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
    component: () => import('./views/TranslateName.vue'),
    meta: {
      title: 'English to Chinese Name Translator | Write My Name in Chinese | ChineseName.us',
      canonicalPath: '/english-to-chinese-translator',
      description: 'Learn how to write your name in Chinese with our professional translator. Translate your English, Spanish, French, German, Japanese, Korean name to Chinese characters with accurate pronunciation and cultural meaning.',
      keywords: 'english name to chinese translator, write my name in chinese, my name in chinese characters, translate name to chinese, name translation online, foreign name to chinese, name in chinese writing, english to chinese name conversion, chinese name translation service, how to translate name to chinese'
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('./views/NotFound.vue'),
    meta: {
      title: 'Page Not Found - ChineseName.us | Chinese Name Translation Services',
      canonicalPath: '/404',
      description: 'The page you are looking for was not found. Explore our Chinese name translation, generation, and cultural naming services. Find your perfect Chinese name today.',
      keywords: 'page not found, chinese name services, chinese name translation, chinese name generator, find chinese names, chinese naming help, explore chinese names'
    }
  }
]

// 在 SSR 模式下不导入规范链接管理插件
// 因为它需要访问 document

// 注意: 我们在 SSG 模式下移除了 Ant Design Vue 组件
// 这些组件将在客户端加载时才使用

// 这个函数将被 vite-ssg 使用
// 它类似于 Vue 的 createApp，但允许返回一个带有 app 和 router 的对象
// 使用类似于普通 Vue 应用的方式

export const createApp = () => {
  // 创建路由实例
  const router = createRouter({
    history: createMemoryHistory(),
    routes
  })
  
  // 创建应用实例
  const app = createClientApp({
    render: () => h(App)
  })
  
  // 添加路由钩子处理301重定向
  router.beforeEach((to, from, next) => {
    // 处理301重定向
    if (to.path === '/write-my-name-in-chinese') {
      next('/english-to-chinese-translator')
      return
    }
    
    // 在SSR中不设置页面标题，这将在客户端进行
    next()
  })
  
  // 注册插件
  app.use(router)
  app.use(i18n)
  
  // 设置默认语言为英文
  i18n.global.locale.value = 'en'
  
  // 返回应用和路由实例
  return { app, router }
}
