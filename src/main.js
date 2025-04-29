import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './i18n'

// 导入 Ant Design Vue 组件
import { DatePicker, TimePicker } from 'ant-design-vue'
import 'ant-design-vue/es/date-picker/style/css'
import 'ant-design-vue/es/time-picker/style/css'

// 设置默认语言为英文
i18n.global.locale.value = 'en';

// 强制使用英文作为默认语言
localStorage.setItem('userLanguage', 'en');

const app = createApp(App)
  .use(router)
  .use(i18n)
  .use(DatePicker)  // 注册 DatePicker 组件
  .use(TimePicker)  // 注册 TimePicker 组件

app.mount('#app')
