<script>
import MainLayout from '@/layouts/MainLayout.vue'
import { useI18n } from 'vue-i18n'

export default {
  name: 'App',
  components: {
    MainLayout
  },
  setup() {
    const { locale } = useI18n();
    // 确保应用始终使用英文
    locale.value = 'en';
    localStorage.setItem('userLanguage', 'en');
    
    // 监听路由变化，确保每次路由变化时也使用英文
    const forceEnglish = () => {
      locale.value = 'en';
    };
    
    // 添加页面加载完成后的处理
    setTimeout(forceEnglish, 100);
    
    return {};
  }
}
</script>

<template>
  <MainLayout>
    <router-view />
  </MainLayout>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Arial', sans-serif;
  line-height: 1.6;
  color: #333;
  background-color: #f8f8f8;
}

a {
  text-decoration: none;
  color: inherit;
}

ul {
  list-style: none;
}

img {
  max-width: 100%;
}

.container {
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;
  padding: 0 30px;
}

/* SEO优化相关样式 */
.seo-description {
  font-size: 1.1rem;
  color: #555;
  margin-bottom: 30px;
  text-align: center;
  max-width: 1300px;
  margin-left: auto;
  margin-right: auto;
}

.seo-introduction {
  font-size: 1.15rem;
  line-height: 1.6;
  color: #444;
  margin-bottom: 15px;
}
</style>
