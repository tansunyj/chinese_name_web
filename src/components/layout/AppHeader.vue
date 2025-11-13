<template>
  <header class="app-header">
    <div class="container">
      <div class="logo">
        <router-link to="/">
          <img src="@/assets/images/logo2.png" alt="Chinese Names | 中文名字 | 漢字名前" />
          <span>{{ $t('header.siteName') }}</span>
        </router-link>
      </div>
      
      <nav class="main-nav">
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/english-to-chinese-translator">Translate to Chinese</router-link></li>
          <li><router-link to="/custom-chinese-name-generator">{{ $t('header.customName') }} Chinese Name</router-link></li>
          <!-- Names 下拉菜单 -->
          <li class="dropdown">
            <a href="#" class="dropdown-toggle" @click.prevent="toggleDropdown('names')">Names <span class="dropdown-icon" :class="{ 'rotated': activeDropdown === 'names' }">▼</span></a>
            <ul class="dropdown-menu" :class="{ 'show': activeDropdown === 'names' }">
              <li><router-link to="/chinese-girl-names" @click="closeDropdown">Chinese Girl Names</router-link></li>
              <li><router-link to="/chinese-boy-names" @click="closeDropdown">Chinese Boy Names</router-link></li>
              <li><router-link to="/chinese-last-names" @click="closeDropdown">Chinese Last Names</router-link></li>
              <li><router-link to="/chinese-names-and-meanings" @click="closeDropdown">Chinese Names and Meanings</router-link></li>
            </ul>
          </li>
          <li><router-link to="/blog">Blog</router-link></li>
          <li><router-link to="/about">{{ $t('header.aboutUs') }}</router-link></li>
          <li class="telegram-nav-item">
            <a 
              href="https://t.me/Chinesename_us_Official_Communit" 
              target="_blank" 
              rel="noopener noreferrer"
              class="telegram-link"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" class="telegram-icon-small">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
              </svg>
              Join Telegram
            </a>
          </li>
        </ul>
      </nav>
      
      <div class="actions">
        <!-- 保留空的actions以保持布局 -->
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
      currentLanguage: 'en',
      activeDropdown: null
    }
  },
  mounted() {
    // 强制使用英文
    this.locale = 'en';
    this.currentLanguage = 'en';
    localStorage.setItem('userLanguage', 'en');
    
    // 添加点击其他区域关闭下拉菜单的监听器
    document.addEventListener('click', this.handleOutsideClick);
  },
  
  beforeUnmount() {
    // 移除事件监听器以避免内存泄漏
    document.removeEventListener('click', this.handleOutsideClick);
  },
  methods: {
    changeLanguage() {
      this.locale = this.currentLanguage;
      localStorage.setItem('userLanguage', this.currentLanguage);
      this.$forceUpdate();
      this.$root.$forceUpdate();
    },
    
    toggleDropdown(menuId) {
      this.activeDropdown = this.activeDropdown === menuId ? null : menuId;
    },
    
    closeDropdown() {
      this.activeDropdown = null;
    },
    
    handleOutsideClick(event) {
      // 检查点击是否在下拉菜单内部
      const dropdown = document.querySelector('.dropdown');
      if (dropdown && !dropdown.contains(event.target) && this.activeDropdown !== null) {
        this.activeDropdown = null;
      }
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
  padding: 0 40px;
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
  justify-content: flex-start;
  margin-left: 50px;
}

.main-nav ul {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

.main-nav li {
  margin: 0 2px;
}

.main-nav a {
  text-decoration: none;
  color: #333;
  font-weight: 500;
  padding: 8px 15px;
  position: relative;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 0.3px;
  white-space: nowrap;
  display: inline-block;
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

/* 下拉菜单样式 */
.dropdown {
  position: relative;
}

.dropdown-toggle {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.dropdown-icon {
  font-size: 10px;
  margin-left: 5px;
  transition: transform 0.3s;
  display: inline-block;
}

.dropdown-icon.rotated {
  transform: rotate(180deg);
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  background-color: white;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  min-width: 200px;
  display: none;
  flex-direction: column;
  z-index: 1001;
  padding: 5px 0;
  margin-top: 5px;
  opacity: 0;
  transform: translateY(-10px);
  transition: opacity 0.3s, transform 0.3s;
}

.dropdown-menu.show {
  display: flex;
  opacity: 1;
  transform: translateY(0);
}

.dropdown-menu li {
  margin: 0;
  width: 100%;
}

.dropdown-menu a {
  padding: 10px 15px;
  display: block;
  color: #333;
  text-decoration: none;
  text-transform: none;
  font-weight: 400;
}

.dropdown-menu a:hover {
  background-color: #f8f8f8;
  color: #e60012;
}

.dropdown-menu a::after {
  display: none;
}

/* Telegram导航项样式 */
.telegram-nav-item {
  margin-left: 10px;
}

.telegram-link {
  display: flex !important;
  align-items: center;
  gap: 6px;
  background: linear-gradient(135deg, #229ED9 0%, #0088cc 100%);
  color: white !important;
  padding: 8px 16px !important;
  border-radius: 20px;
  font-weight: 600 !important;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(34, 158, 217, 0.3);
}

.telegram-link:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(34, 158, 217, 0.5);
  background: linear-gradient(135deg, #0088cc 0%, #006699 100%);
}

.telegram-link::after {
  display: none !important;
}

.telegram-icon-small {
  width: 18px;
  height: 18px;
  flex-shrink: 0;
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

@media (max-width: 1200px) and (min-width: 981px) {
  .main-nav a {
    padding: 8px 10px;
    font-size: 13px;
  }
  
  .logo a {
    font-size: 1.3rem;
  }

  .main-nav {
    margin-left: 20px;
  }
}

@media (max-width: 980px) {
  .app-header {
    height: auto;
    min-height: 70px;
  }
  
  .container {
    flex-wrap: wrap;
    padding: 10px 20px;
  }
  
  .main-nav {
    order: 3;
    width: 100%;
    justify-content: flex-start;
    margin-left: 0;
    padding: 10px 0;
    display: block;
    overflow-x: auto;
  }
  
  .main-nav ul {
    width: max-content;
    padding-bottom: 5px;
  }
  
  .logo, .actions {
    flex: 0 0 auto;
  }
  
  /* 移动端下拉菜单样式 */
  .dropdown-menu {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    min-width: 180px;
    max-width: 250px;
  }
  
  .dropdown {
    position: relative;
  }
  
  /* 移动端Telegram链接 */
  .telegram-link {
    padding: 6px 12px !important;
    font-size: 13px;
  }
  
  .telegram-icon-small {
    width: 16px;
    height: 16px;
  }
}

.quick-links {
  margin-top: 30px;
  padding: 20px;
  background: #f8f9fa;
  border-radius: 12px;
}

.quick-links-title {
  font-size: 1rem;
  color: #666;
  margin-bottom: 15px;
}

.links-container {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.quick-link {
  display: inline-block;
  padding: 8px 16px;
  background: white;
  border: 1px solid #e0e0e0;
  border-radius: 20px;
  color: #666;
  text-decoration: none;
  font-size: 0.9rem;
  transition: all 0.3s ease;
}

.quick-link:hover {
  background: #e60012;
  color: white;
  border-color: #e60012;
}

@media (max-width: 768px) {
  .quick-links {
    padding: 15px;
  }
  
  .quick-link {
    font-size: 0.85rem;
    padding: 6px 12px;
  }
}
</style> 