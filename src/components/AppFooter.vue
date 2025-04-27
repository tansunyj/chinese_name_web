<template>
  <footer class="footer">
    <div class="container footer-container">
      <div class="footer-section">
        <h3 class="footer-title">关于我们</h3>
        <p class="footer-text">中文起名网致力于为您提供专业的中文姓名起名服务，融合传统文化与现代智能技术，为您的孩子起一个吉祥如意的好名字。</p>
      </div>
      
      <div class="footer-section">
        <h3 class="footer-title">快速链接</h3>
        <ul class="footer-links">
          <li><router-link to="/">首页</router-link></li>
          <li><router-link to="/name-generator">姓名生成</router-link></li>
          <li><router-link to="/name-meanings">姓名寓意</router-link></li>
          <li><router-link to="/articles">命理文章</router-link></li>
        </ul>
      </div>
      
      <div class="footer-section">
        <h3 class="footer-title">联系我们</h3>
        <ul class="footer-links">
          <li>邮箱: contact@chinesename.com</li>
          <li>电话: 123-456-7890</li>
          <li>地址: 中国北京市朝阳区</li>
        </ul>
      </div>
      
      <div class="footer-section">
        <h3 class="footer-title">关注我们</h3>
        <div class="social-icons">
          <a href="#" class="social-icon">微信</a>
          <a href="#" class="social-icon">微博</a>
          <a href="#" class="social-icon">抖音</a>
        </div>
      </div>
    </div>
    
    <div class="footer-bottom">
      <div class="container">
        <p class="copyright">© {{ currentYear }} 中文起名网 版权所有</p>
        <div class="footer-bottom-links">
          <router-link to="/terms">服务条款</router-link>
          <router-link to="/privacy">隐私政策</router-link>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
  computed: {
    currentYear() {
      return new Date().getFullYear();
    }
  }
}
</script>

<style scoped>
.footer {
  background-color: #f8f9fa;
  padding-top: 60px;
  color: #333;
}

.footer-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  padding-bottom: 40px;
}

.footer-title {
  font-size: 18px;
  margin-bottom: 20px;
  position: relative;
  padding-bottom: 10px;
}

.footer-title::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 40px;
  height: 2px;
  background-color: #e74c3c;
}

.footer-text {
  line-height: 1.6;
}

.footer-links {
  list-style: none;
  padding: 0;
}

.footer-links li {
  margin-bottom: 10px;
}

.footer-links a {
  color: #555;
  transition: color 0.3s;
}

.footer-links a:hover {
  color: #e74c3c;
}

.social-icons {
  display: flex;
  gap: 15px;
}

.social-icon {
  display: inline-block;
  padding: 8px 12px;
  background-color: #e0e0e0;
  color: #333;
  border-radius: 4px;
  transition: all 0.3s;
}

.social-icon:hover {
  background-color: #e74c3c;
  color: white;
}

.footer-bottom {
  background-color: #eeeeee;
  padding: 20px 0;
  border-top: 1px solid #ddd;
}

.footer-bottom .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.copyright {
  margin: 0;
  font-size: 14px;
}

.footer-bottom-links {
  display: flex;
  gap: 20px;
}

.footer-bottom-links a {
  color: #555;
  font-size: 14px;
}

.footer-bottom-links a:hover {
  color: #e74c3c;
}

@media (max-width: 768px) {
  .footer-container {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 576px) {
  .footer-container {
    grid-template-columns: 1fr;
  }
  
  .footer-bottom .container {
    flex-direction: column;
    gap: 10px;
  }
}
</style> 