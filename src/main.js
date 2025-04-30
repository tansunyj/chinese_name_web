import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './i18n'

// 导入 Ant Design Vue 组件
import { DatePicker, TimePicker } from 'ant-design-vue'
import 'ant-design-vue/es/date-picker/style/css'
import 'ant-design-vue/es/time-picker/style/css'

// 强制设置默认语言为英文
i18n.global.locale.value = 'en';

// 强制使用英文作为默认语言
localStorage.setItem('userLanguage', 'en');

// 重写 i18n 的 t 方法，确保即使在本地化环境中也能够获取英文
const originalT = i18n.global.t;
i18n.global.t = function(...args) {
  // 临时保存当前语言
  const currentLocale = i18n.global.locale.value;
  // 强制设置为英文
  i18n.global.locale.value = 'en';
  // 获取翻译
  const result = originalT.apply(i18n.global, args);
  // 恢复原语言（实际这里也是英文）
  i18n.global.locale.value = 'en';
  return result;
};

const app = createApp(App)
  .use(router)
  .use(i18n)
  .use(DatePicker)  // 注册 DatePicker 组件
  .use(TimePicker)  // 注册 TimePicker 组件

app.mount('#app')
