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
  <div class="container">
    <MainLayout>
      <div class="seo-content" role="complementary">
        <!-- 修改 H1 标签和样式 -->
        <h1 class="main-title">Chinese Name Translator - Convert Name to Chinese</h1>
        <p class="seo-description">
          Transform your name into Chinese with our professional Chinese name translator. 
          Get personalized Chinese names with meanings and pronunciations. Learn how to 
          translate names into Chinese using our free Chinese name generator.
        </p>
        <div class="seo-features">
          <p>Key features:</p>
          <ul>
            <li>Translate name into Chinese with accurate pronunciation</li>
            <li>Convert English names to Chinese characters</li>
            <li>Chinese name generator with meaning explanation</li>
            <li>Names translated to Chinese with cultural context</li>
            <li>Chinese to English name translation support</li>
          </ul>
        </div>
      </div>

      <!-- 保持原有的路由视图 -->
      <router-view></router-view>
      
      <!-- 使用现有的footer结构,仅优化内容 -->
      <footer class="site-footer">
        <p>Professional Chinese name translation service. Convert English names to Chinese characters with cultural meanings and proper pronunciations.</p>
        <div class="footer-features">
          <p>Services: Name Translator in Chinese • Chinese Name Generator • 
          Single Character Names • Chinese Names to English • Mandarin Name Translation</p>
        </div>
      </footer>
    </MainLayout>
  </div>
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
.main-title {
  font-size: 2rem;
  color: #2c3e50;
  text-align: center;
  margin: 2rem 0;
  font-weight: 600;
  line-height: 1.4;
  /* 视觉优化 */
  padding: 0.5rem 1rem;
  border-bottom: 2px solid #eee;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  /* 响应式设计 */
  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
    margin: 1.5rem 0;
  }
}

.seo-description {
  font-size: 1.1rem;
  color: #555;
  margin-bottom: 30px;
  text-align: center;
  max-width: 1300px;
  margin-left: auto;
  margin-right: auto;
}

.seo-features {
  margin: 1rem 0;
  display: none; /* 对用户隐藏,对搜索引擎可见 */
}

.seo-features ul {
  margin-left: 1.5rem;
}

.seo-features li {
  margin: 0.5rem 0;
}

.seo-introduction {
  font-size: 1.15rem;
  line-height: 1.6;
  color: #444;
  margin-bottom: 15px;
}

.seo-content {
  padding: 20px 0;
  margin-bottom: 20px;
  display: none; /* 默认隐藏，只对搜索引擎可见 */
}

@media screen and (max-width: 768px) {
  .seo-content {
    padding: 15px 0;
  }
}

.footer-features {
  margin-top: 15px;
  font-size: 0.9rem;
  color: #666;
  text-align: center;
}

/* 增强现有样式 */
.site-footer {
  padding: 20px 0;
  margin-top: 40px;
  border-top: 1px solid #eee;
  text-align: center;
}
</style>
