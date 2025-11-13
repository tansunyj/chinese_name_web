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
          <!-- Others 合并菜单 - 添加others-link类以便特别处理 -->
          <li class="dropdown others-dropdown">
            <a href="#" class="dropdown-toggle others-link" style="color: #333 !important;" @click.prevent="toggleDropdown('others')">Others <span class="dropdown-icon" :class="{ 'rotated': activeDropdown === 'others' }">▼</span></a>
            <ul class="dropdown-menu"><!-- 移除v-bind:class绑定，完全通过DOM操作控制 -->
              <!-- Names 的子菜单 -->
              <li class="dropdown-subtitle names-section">Chinese Names</li>
              <li class="names-item"><router-link to="/chinese-girl-names" @click="closeDropdown">Chinese Girl Names</router-link></li>
              <li class="names-item"><router-link to="/chinese-boy-names" @click="closeDropdown">Chinese Boy Names</router-link></li>
              <li class="names-item"><router-link to="/chinese-last-names" @click="closeDropdown">Chinese Last Names</router-link></li>
              <li class="names-item"><router-link to="/chinese-names-and-meanings" @click="closeDropdown">Chinese Names and Meanings</router-link></li>
              <li class="names-item"><router-link to="/funny-chinese-names" @click="closeDropdown">Funny Chinese Names</router-link></li>
              <li class="names-item"><router-link to="/chinese-dog-names" @click="closeDropdown">Chinese Dog Names</router-link></li>
              <li class="names-item"><router-link to="/chinese-cat-names" @click="closeDropdown">Chinese Cat Names</router-link></li>
              
              <!-- Name Destiny 的子菜单 -->
              <li class="dropdown-divider"></li>
              <li class="dropdown-subtitle destiny-section">Name Destiny</li>
              <li class="destiny-item"><router-link to="/zodiac-calculator" @click="closeDropdown">Chinese Zodiac & Elements</router-link></li>
              <li class="destiny-item"><router-link to="/constellation-analysis" @click="closeDropdown">Constellation Analysis</router-link></li>
              <li class="destiny-item"><router-link to="/name-numerology-calculator" @click="closeDropdown">Name Numerology Calculator</router-link></li>
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
  created() {
    // 初始化时确保所有菜单关闭
    this.activeDropdown = null;
    
    // 添加路由变化前置监听器，确保在页面切换时关闭菜单
    this.$router.beforeEach((to, from, next) => {
      this.closeAllMenus();
      next();
    });
    
    // 添加路由变化后置监听器，确保在页面加载完成后修正OTHERS菜单的颜色
    this.$router.afterEach(() => {
      // 延时确保所有DOM已更新
      setTimeout(() => {
        const othersLink = document.querySelector('.others-link');
        if (othersLink) {
          othersLink.style.color = '#333';
          othersLink.classList.remove('router-link-active');
        }
      }, 50);
    });
  },
  
  mounted() {
    // 强制使用英文
    this.locale = 'en';
    this.currentLanguage = 'en';
    localStorage.setItem('userLanguage', 'en');
    
    // 添加点击其他区域关闭下拉菜单的监听器
    document.addEventListener('click', this.handleOutsideClick);

    // 添加页面滚动监听器，确保滚动时关闭菜单
    window.addEventListener('scroll', this.closeAllMenus);
    
    // 为OTHERS菜单项添加颜色强制处理
    const othersLink = document.querySelector('.others-link');
    if (othersLink) {
      othersLink.style.color = '#333';
      othersLink.classList.remove('router-link-active'); // 确保没有活动类
    }
    
    // 立即强制关闭菜单，不等待nextTick
    this.forceCloseAllMenus();
    
    // 延时再次确认所有菜单关闭，双重保险
    setTimeout(() => {
      this.forceCloseAllMenus();
      
      // 再次强制OTHERS菜单颜色
      const othersLink = document.querySelector('.others-link');
      if (othersLink) {
        othersLink.style.color = '#333';
        othersLink.classList.remove('router-link-active');
      }
    }, 200);
    
    // 重写原生的classList.toggle方法，防止意外的类添加
    const originalToggle = DOMTokenList.prototype.toggle;
    DOMTokenList.prototype.toggle = function(token, force) {
      // 如果是下拉菜单元素且要添加show类，先检查是否有意外操作
      if (token === 'show' && this.contains('dropdown-menu') && force !== true) {
        return false; // 阻止意外的toggle调用
      }
      return originalToggle.apply(this, arguments);
    };
  },
  
  beforeUnmount() {
    // 移除所有事件监听器以避免内存泄漏
    document.removeEventListener('click', this.handleOutsideClick);
    window.removeEventListener('scroll', this.closeAllMenus);
  },
  methods: {
    changeLanguage() {
      this.locale = this.currentLanguage;
      localStorage.setItem('userLanguage', this.currentLanguage);
      this.$forceUpdate();
      this.$root.$forceUpdate();
    },
    
    // 强制关闭所有菜单的方法，完全通过DOM操作
    forceCloseAllMenus() {
      // 重置状态
      this.activeDropdown = null;
      
      // 强制移除所有菜单的show类
      const allMenus = document.querySelectorAll('.dropdown-menu');
      allMenus.forEach(menu => {
        menu.classList.remove('show');
      });
      
      // 重置所有下拉图标
      const dropdownIcons = document.querySelectorAll('.dropdown-icon');
      dropdownIcons.forEach(icon => {
        icon.classList.remove('rotated');
      });
      
      // 确保下拉菜单按钮的颜色正确
      const othersLink = document.querySelector('.others-dropdown .dropdown-toggle');
      if (othersLink) {
        // 强制设置颜色并移除任何可能的router-link-active类
        othersLink.style.color = '#333';
        othersLink.classList.remove('router-link-active');
      }
    },
    
    // 对外暴露的关闭菜单方法
    closeAllMenus() {
      this.forceCloseAllMenus();
    },
    
    toggleDropdown(menuId) {
      // 每次切换前都强制移除所有show类
      const allMenus = document.querySelectorAll('.dropdown-menu');
      allMenus.forEach(menu => {
        menu.classList.remove('show');
      });
      
      if (this.activeDropdown === menuId) {
        // 如果当前菜单已经打开，则关闭它
        this.activeDropdown = null;
      } else {
        // 否则打开当前菜单
        this.activeDropdown = menuId;
        
        // 直接操作DOM添加show类
        if (menuId === 'others') {
          const menu = document.querySelector('.others-dropdown .dropdown-menu');
          if (menu) {
            menu.classList.add('show');
          }
        }
      }
    },
    
    closeDropdown() {
      this.forceCloseAllMenus();
    },
    
    handleOutsideClick(event) {
      // 检查点击是否在任意下拉菜单内部
      const dropdowns = document.querySelectorAll('.dropdown');
      let isClickInside = false;
      
      // 检查点击是否在任何一个下拉菜单内部
      dropdowns.forEach(dropdown => {
        if (dropdown.contains(event.target)) {
          isClickInside = true;
        }
      });
      
      // 如果点击在所有下拉菜单外部，则关闭当前激活的下拉菜单
      if (!isClickInside && this.activeDropdown !== null) {
        // 重置状态
        this.activeDropdown = null;
        
        // 立即强制清除所有菜单的show类
        const allDropdownMenus = document.querySelectorAll('.dropdown-menu');
        allDropdownMenus.forEach(menu => {
          menu.classList.remove('show');
        });
        
        // 确保视图更新
        this.$forceUpdate();
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
.main-nav a.router-link-active:not(.dropdown-toggle):not(.others-link)::after {
  width: 100%;
}

/* 只为直接的路由链接应用活动样式，而不是下拉菜单的触发器 */
.main-nav a.router-link-active:not(.dropdown-toggle):not(.others-link) {
  color: #e60012;
}

/* 防止子项活动状态影响OTHERS菜单 - 最强力的选择器规则 */
.main-nav a.others-link, 
.main-nav a.others-link:hover, 
.main-nav a.others-link:active, 
.main-nav a.others-link:focus, 
.main-nav a.others-link:visited, 
.main-nav li a.others-link.router-link-active, 
.main-nav li a.others-link.router-link-exact-active,
html body .main-nav a.dropdown-toggle.others-link,
body .main-nav a.dropdown-toggle.others-link.router-link-active,
body .main-nav a.dropdown-toggle.others-link.router-link-exact-active,
body nav.main-nav ul li a.dropdown-toggle.others-link,
body nav.main-nav ul li a.dropdown-toggle.others-link:not([href]),
body nav.main-nav ul li a.dropdown-toggle.others-link[href="#"] {
  color: #333 !important;
  text-decoration: none !important;
  font-weight: 500 !important;
}

/* 防止任何继承或覆盖 */
.dropdown-toggle.others-link {
  color: #333 !important;
}

/* 下拉菜单样式 */
.dropdown {
  position: relative;
}

.dropdown-toggle {
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  font-weight: 600 !important;
  color: #333 !important; /* 确保颜色不受router-link-active影响 */
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
  min-width: 220px;
  display: none; /* 默认不显示 */
  flex-direction: column;
  z-index: 1001;
  padding: 5px 0;
  margin-top: 5px;
  opacity: 0;
  transform: translateY(-10px);
  transition: all 0.3s ease;
  pointer-events: none; /* 确保默认情况下不响应鼠标事件 */
  visibility: hidden; /* 将菜单设置为隐藏状态 */
}

.dropdown-menu.show {
  display: flex;
  opacity: 1;
  transform: translateY(0);
  pointer-events: auto; /* 显示时允许鼠标交互 */
  visibility: visible; /* 显示时设置为可见 */
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
  transition: all 0.2s ease;
}

.names-item a {
  color: #2c6b96;
  border-left: 2px solid transparent;
}

.names-item a:hover {
  color: #1d4d6d;
  border-left: 2px solid #2c6b96;
  padding-left: 18px;
}

.destiny-item a {
  color: #aa3939;
  border-left: 2px solid transparent;
}

.destiny-item a:hover {
  color: #8e2626;
  border-left: 2px solid #aa3939;
  padding-left: 18px;
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
}

/* OTHERS菜单特殊样式 */
.others-dropdown .dropdown-toggle {
  color: #e60012 !important;
  font-weight: 600 !important;
}

.others-dropdown .dropdown-menu {
  border-top: 3px solid #e60012;
  animation: fadeInDown 0.3s ease-out;
  min-width: 240px;
  padding: 10px 0;
}

.dropdown-subtitle {
  font-weight: 600;
  color: #333;
  padding: 10px 15px;
  font-size: 0.9rem;
}

/* Chinese Names分类样式 */
.names-section {
  background-color: rgba(84, 153, 199, 0.15);
  color: #2c6b96;
  border-left: 3px solid #2c6b96;
}

.names-item {
  background-color: rgba(84, 153, 199, 0.05);
}

.names-item:hover {
  background-color: rgba(84, 153, 199, 0.1);
}

/* Name Destiny分类样式 */
.destiny-section {
  background-color: rgba(228, 92, 92, 0.15);
  color: #aa3939;
  border-left: 3px solid #aa3939;
}

.destiny-item {
  background-color: rgba(228, 92, 92, 0.05);
}

.destiny-item:hover {
  background-color: rgba(228, 92, 92, 0.1);
}

.dropdown-divider {
  height: 1px;
  background-color: #e5e5e5;
  margin: 10px 0;
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.telegram-link:hover {
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