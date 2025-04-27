import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './i18n'

// 从localStorage中获取用户语言偏好，如果有的话
const savedLanguage = localStorage.getItem('userLanguage');
if (savedLanguage) {
  i18n.global.locale.value = savedLanguage;
}

const app = createApp(App)
  .use(router)
  .use(i18n)

app.mount('#app')
