<template>
  <div class="home-page">
    <!-- Hero Section -->
    <section class="hero">
      <div class="container">
        <div class="hero-content">
          <div class="hero-image">
            <img src="@/assets/images/name.png" alt="ChineseName Logo" />
          </div>
          <div class="hero-text">
            <h1>{{ $t('home.hero.title') }}</h1>
            <p class="subtitle">{{ $t('home.hero.subtitle') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 个性化取名服务 -->
    <section class="features features-alt">
      <div class="container">
        <h2 class="section-title">{{ $t('home.categories.namingService') }}</h2>
        <div class="feature-grid naming-services-grid">
          <router-link to="/custom" class="feature-card-link">
            <div class="feature-card">
              <div class="icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                </svg>
              </div>
              <h3>{{ $t('home.features.namingService.custom.title') }}</h3>
              <p>{{ $t('home.features.namingService.custom.description') }}</p>
              <div class="feature-link">
                <img src="@/assets/images/ming.png" alt="ming" class="ming-icon" /> →
              </div>
            </div>
          </router-link>
                    <!-- 名字翻译 -->
          <router-link to="/translate" class="feature-card-link">
            <div class="feature-card">
              <div class="icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                </svg>
              </div>
              <h3>{{ $t('home.features.translateName.title') }}</h3>
              <p>{{ $t('home.features.translateName.description') }}</p>
              <div class="feature-link">
                <img src="@/assets/images/ming.png" alt="ming" class="ming-icon" /> →
              </div>
            </div>
          </router-link>

          <!-- 生肖计算器 -->
          <router-link to="/zodiac-calculator" class="feature-card-link">
            <div class="feature-card">
              <div class="icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3>{{ $t('home.features.zodiacCalculator.title') }}</h3>
              <p>{{ $t('home.features.zodiacCalculator.description') }}</p>
              <div class="feature-link">
                <img src="@/assets/images/ming.png" alt="ming" class="ming-icon" /> →
              </div>
            </div>
          </router-link>
          
          <!-- 星座计算器 -->
          <router-link to="/constellation" class="feature-card-link">
            <div class="feature-card">
              <div class="icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
              <h3>{{ $t('home.features.constellation.title') }}</h3>
              <p>{{ $t('home.features.constellation.description') }}</p>
              <div class="feature-link">
                <img src="@/assets/images/ming.png" alt="ming" class="ming-icon" /> →
              </div>
            </div>
          </router-link>
          
          <!-- 姓名转拼音 -->
          <router-link to="/name-to-pinyin" class="feature-card-link">
            <div class="feature-card">
              <div class="icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
                </svg>
              </div>
              <h3>{{ $t('home.features.nameToPinyin.title') }}</h3>
              <p>{{ $t('home.features.nameToPinyin.description') }}</p>
              <div class="feature-link">
                <img src="@/assets/images/ming.png" alt="ming" class="ming-icon" /> →
              </div>
            </div>
          </router-link>

        </div>
      </div>
    </section>

    <!-- 知识库 -->
    <section class="features">
      <div class="container">
        <h2 class="section-title">{{ $t('home.categories.knowledge') }}</h2>
        <div class="feature-grid">
          <router-link to="/knowledge" class="feature-card-link">
            <div class="feature-card">
              <div class="icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3>{{ $t('home.features.knowledge.title') }}</h3>
              <p>{{ $t('home.features.knowledge.description') }}</p>
              <div class="feature-link">
                <img src="@/assets/images/ming.png" alt="ming" class="ming-icon" /> →
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import 'ant-design-vue/dist/antd.css';

export default {
  name: 'HomePage'
}
</script>

<style scoped>
.home-page {
  padding-top: 0; /* 移除Header height补偿 */
}

.hero {
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  height: 320px;
  margin-top: 70px; /* 与AppHeader的高度一致 */
}

.hero .container {
  max-width: 1600px; /* 与全局容器宽度一致 */
  margin: 0 auto;
  padding: 0 30px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-content {
  display: flex;
  align-items: center;
  justify-content: flex-start; /* 修改为左对齐 */
  gap: 80px;
  width: 100%;
  height: 100%;
}

.hero-image {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-image img {
  display: block;
  width: 220px;
  height: auto;
}

.hero-text {
  flex: 0 0 auto;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.hero h1 {
  font-size: 3.2rem;
  color: #333;
  margin-top: 0;
  margin-bottom: 20px;
  line-height: 1.2;
}

.hero .subtitle {
  font-size: 1.6rem;
  color: #555;
  margin-top: 0;
  margin-bottom: 0;
  line-height: 1.4;
}

.cta-button {
  display: inline-block;
  background-color: #e60012;
  color: white;
  font-weight: 600;
  padding: 15px 30px;
  border-radius: 8px;
  text-decoration: none;
  transition: background-color 0.3s;
}

.cta-button:hover {
  background-color: #d00010;
}

.features {
  padding: 80px 0;
  background-color: #fff;
  position: relative;
}

.features-alt {
  background-color: #f2f4f8;
  position: relative;
  padding: 90px 0;
}

.features .container {
  max-width: 1600px; /* 与全局容器宽度一致 */
  margin: 0 auto;
  padding: 0 30px;
}

.section-title {
  font-size: 2.8rem;
  color: #333;
  margin-bottom: 50px;
  text-align: left; /* 修改为左对齐 */
}

.section-title::after {
  content: '';
  display: block;
  width: 70px;
  height: 4px;
  background-color: #e60012;
  margin: 18px 0 0; /* 修改为左对齐 */
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
  gap: 40px;
  margin-bottom: 30px;
}

.feature-card-link {
  display: block;
  text-decoration: none;
  color: inherit;
  transition: transform 0.3s;
}

.feature-card-link:hover {
  transform: translateY(-5px);
}

.feature-card {
  background-color: white;
  border-radius: 12px;
  padding: 40px;
  transition: all 0.3s ease;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(0, 0, 0, 0.05);
  height: 300px;
  display: flex;
  flex-direction: column;
  border: 1px solid #e1e1e1;
  position: relative;
  z-index: 1;
  overflow: hidden;
}

.features-alt .feature-card {
  background-color: white;
  border: 1px solid #e1e1e1;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(0, 0, 0, 0.05);
  border-color: #d1d1d1;
}

.feature-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 5px;
  background-color: #e60012;
  z-index: 2;
}

.feature-card .icon {
  width: 70px;
  height: 70px;
  background-color: rgba(230, 0, 18, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 25px;
}

.feature-card .icon svg {
  width: 35px;
  height: 35px;
  color: #e60012;
}

.feature-card h3 {
  font-size: 1.6rem;
  margin-bottom: 18px;
  color: #333;
}

.feature-card p {
  color: #666;
  margin-bottom: 25px;
  line-height: 1.7;
  flex-grow: 1;
  font-size: 1.05rem;
}

.feature-link {
  color: #e60012;
  text-decoration: none;
  font-weight: 600;
  display: inline-block;
  margin-top: auto;
  display: flex;
  align-items: center;
  font-size: 1.1rem;
}

.ming-icon {
  width: 28px;
  height: 28px;
  margin-right: 8px;
}

.naming-services-grid {
  grid-template-columns: repeat(2, 1fr);
  max-width: 1600px;
  margin: 0 auto;
}

@media (max-width: 768px) {
  .hero {
    height: auto;
    padding: 50px 0;
    margin-top: 70px;
  }
  
  .hero-content {
    flex-direction: column;
    gap: 40px;
    height: auto;
  }
  
  .hero-image {
    margin-bottom: 0;
  }
  
  .hero-text {
    text-align: center;
    align-items: center;
  }
  
  .hero h1 {
    font-size: 2.4rem;
  }
  
  .hero .subtitle {
    font-size: 1.3rem;
  }
  
  .section-title {
    font-size: 2.2rem;
  }
  
  .naming-services-grid {
    grid-template-columns: 1fr;
  }
  
  .feature-card {
    height: auto;
    min-height: 300px;
  }
}
</style> 