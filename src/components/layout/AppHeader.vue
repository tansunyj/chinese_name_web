<template>
  <header class="app-header">
    <div class="container">
      <div class="logo">
        <router-link to="/">
          <img src="@/assets/images/logo2.png" alt="Logo" />
          <span>{{ $t('header.siteName') }}</span>
        </router-link>
      </div>
      
      <nav class="main-nav">
        <ul>
          <li><router-link to="/">{{ $t('header.home') }}</router-link></li>
          <li><router-link to="/custom">{{ $t('header.customName') }}</router-link></li>
          <li><router-link to="/translate">{{ $t('header.translateName') }}</router-link></li>
          <li><router-link to="/multilingual">{{ $t('header.multilingualName') }}</router-link></li>
          <li><router-link to="/knowledge">{{ $t('header.knowledgeBase') }}</router-link></li>
          <li><router-link to="/about">{{ $t('header.aboutUs') }}</router-link></li>
        </ul>
      </nav>
      
      <div class="actions">
        <div class="language-switcher">
          <select v-model="currentLanguage" @change="changeLanguage">
            <option value="en">English</option>
            <option value="zh">中文</option>
            <option value="es">Español</option>
            <option value="fr">Français</option>
            <option value="de">Deutsch</option>
            <option value="ja">日本語</option>
            <option value="ko">한국어</option>
            <option value="ru">Русский</option>
            <option value="ar">العربية</option>
            <option value="pt">Português</option>
            <option value="it">Italiano</option>
            <option value="hi">हिन्दी</option>
          </select>
        </div>
        
        <!-- 暂时移除登录和注册按钮 -->
        <!-- <div class="auth-buttons">
          <router-link to="/login" class="btn btn-login">{{ $t('header.login') }}</router-link>
          <router-link to="/signup" class="btn btn-signup">{{ $t('header.signup') }}</router-link>
        </div> -->
      </div>
    </div>
  </header>
</template>

<script>
import { useI18n } from 'vue-i18n'

export default {
  name: 'AppHeader',
  setup() {
    const { locale } = useI18n()
    return { locale }
  },
  data() {
    return {
      currentLanguage: this.locale
    }
  },
  mounted() {
    this.currentLanguage = this.locale;
  },
  methods: {
    changeLanguage() {
      this.locale = this.currentLanguage;
      localStorage.setItem('userLanguage', this.currentLanguage);
      this.$forceUpdate();
      this.$root.$forceUpdate();
    }
  }
}
</script>

<style scoped>
.app-header {
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  height: 70px;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
}

.logo {
  display: flex;
  align-items: center;
  flex-shrink: 0;
}

.logo a {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #333;
  font-weight: bold;
  font-size: 1.5rem;
}

.logo img {
  height: 30px;
  width: auto;
  margin-right: 10px;
  vertical-align: middle;
}

.main-nav {
  flex-grow: 1;
  display: flex;
  justify-content: center;
}

.main-nav ul {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

.main-nav li {
  margin: 0 6px;
}

.main-nav a {
  text-decoration: none;
  color: #333;
  font-weight: 500;
  padding: 8px 3px;
  position: relative;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 0.3px;
  white-space: nowrap;
}

.main-nav a::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #e60012;
  transition: width 0.3s;
}

.main-nav a:hover::after,
.main-nav a.router-link-active::after {
  width: 100%;
}

.main-nav a.router-link-active {
  color: #e60012;
}

.actions {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  margin-left: 10px;
}

.language-switcher {
  margin-right: 10px;
}

.language-switcher select {
  padding: 5px 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #f8f8f8;
  cursor: pointer;
  font-size: 14px;
}

.auth-buttons {
  display: flex;
}

.btn {
  padding: 6px 12px;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 500;
  margin-left: 6px;
  text-transform: uppercase;
  font-size: 13px;
  letter-spacing: 0.5px;
}

.btn-login {
  background-color: transparent;
  color: #333;
  border: 1px solid #ddd;
}

.btn-signup {
  background-color: #e60012;
  color: white;
  border: 1px solid #e60012;
}

@media (max-width: 980px) {
  .main-nav {
    display: none;
  }
}
</style> 