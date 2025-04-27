<template>
  <header class="header">
    <div class="container header-container">
      <div class="logo">
        <router-link to="/">中文起名网</router-link>
      </div>
      <nav class="nav">
        <ul class="nav-list">
          <li class="nav-item"><router-link to="/">首页</router-link></li>
          <li class="nav-item"><router-link to="/name-generator">姓名生成</router-link></li>
          <li class="nav-item"><router-link to="/name-meanings">姓名寓意</router-link></li>
          <li class="nav-item"><router-link to="/articles">命理文章</router-link></li>
          <li class="nav-item"><router-link to="/about">关于我们</router-link></li>
        </ul>
      </nav>
      <div class="user-actions">
        <button class="btn-login">登录</button>
        <button class="btn-signup">注册</button>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'AppHeader'
}
</script>

<style scoped>
.header {
  background-color: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  height: 70px;
}

.header-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
}

.logo {
  font-size: 24px;
  font-weight: bold;
  color: #e74c3c;
}

.nav-list {
  display: flex;
  gap: 30px;
}

.nav-item a {
  padding: 8px 0;
  position: relative;
  font-weight: 500;
  transition: color 0.3s;
}

.nav-item a:hover {
  color: #e74c3c;
}

.nav-item a::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #e74c3c;
  transition: width 0.3s;
}

.nav-item a:hover::after,
.nav-item a.router-link-active::after {
  width: 100%;
}

.nav-item a.router-link-active {
  color: #e74c3c;
}

.user-actions {
  display: flex;
  gap: 10px;
}

.btn-login, .btn-signup {
  padding: 8px 15px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s;
}

.btn-login {
  background-color: transparent;
  color: #333;
  border: 1px solid #ddd;
}

.btn-login:hover {
  background-color: #f5f5f5;
}

.btn-signup {
  background-color: #e74c3c;
  color: white;
}

.btn-signup:hover {
  background-color: #c0392b;
}

@media (max-width: 768px) {
  .nav {
    display: none;
  }
}
</style> 