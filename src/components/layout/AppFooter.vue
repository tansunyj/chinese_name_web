<template>
  <footer class="app-footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-logo">
          <router-link to="/">
            <img src="@/assets/images/logo2.png" alt="Chinese Name" />
            <span>{{ $t('header.siteName') }}</span>
          </router-link>
          <p>{{ $t('home.hero.subtitle') }}</p>
        </div>
        
        <div class="footer-links">
          <div class="links-group">
            <h3>{{ $t('header.siteName') }}</h3>
            <ul>
              <li><router-link to="/">{{ $t('header.home') }}</router-link></li>
              <li><router-link to="/translate">{{ $t('header.translateName') }}</router-link></li>
              <li><router-link to="/custom">{{ $t('header.customName') }}</router-link></li>
              <li><router-link to="/multilingual">{{ $t('header.multilingualName') }}</router-link></li>
              <li><router-link to="/knowledge">{{ $t('header.knowledgeBase') }}</router-link></li>
            </ul>
          </div>
          
          <div class="links-group">
            <h3>{{ $t('footer.aboutUs') }}</h3>
            <ul>
              <li><a href="#">{{ $t('footer.aboutUs') }}</a></li>
              <li><a href="#">{{ $t('footer.contact') }}</a></li>
              <li><a href="#">{{ $t('footer.privacy') }}</a></li>
              <li><a href="#">{{ $t('footer.terms') }}</a></li>
            </ul>
          </div>
          
          <div class="links-group">
            <h3>{{ $t('footer.contact') }}</h3>
            <ul>
              <li><a href="mailto:info@chinesename.us">info@chinesename.us</a></li>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Instagram</a></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div class="footer-bottom">
        <p>{{ $t('footer.copyright') }}</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter'
}
</script>

<style scoped>
.app-footer {
  background-color: #333;
  color: #fff;
  padding: 60px 0 30px;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
}

.footer-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 40px;
}

.footer-logo {
  flex: 0 0 300px;
  margin-bottom: 30px;
}

.footer-logo a {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #fff;
  font-weight: bold;
  font-size: 1.5rem;
  margin-bottom: 15px;
}

.footer-logo img {
  height: 36px;
  width: auto;
  margin-right: 10px;
  vertical-align: middle;
  filter: brightness(1.2);
}

.footer-logo p {
  color: #aaa;
  line-height: 1.6;
}

.footer-links {
  display: flex;
  flex-wrap: wrap;
  flex: 1;
  justify-content: space-around;
}

.links-group {
  flex: 0 0 200px;
  margin-bottom: 30px;
}

.links-group h3 {
  color: #fff;
  font-size: 1.2rem;
  margin-bottom: 20px;
  position: relative;
}

.links-group h3::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 0;
  width: 40px;
  height: 2px;
  background-color: #e60012;
}

.links-group ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.links-group li {
  margin-bottom: 10px;
}

.links-group a {
  color: #aaa;
  text-decoration: none;
  transition: color 0.3s;
}

.links-group a:hover {
  color: #e60012;
}

.footer-bottom {
  text-align: center;
  padding-top: 30px;
  border-top: 1px solid #444;
}

.footer-bottom p {
  color: #888;
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
  }
  
  .footer-logo {
    flex: 0 0 100%;
    margin-bottom: 40px;
  }
  
  .footer-links {
    flex-direction: column;
  }
  
  .links-group {
    flex: 0 0 100%;
    margin-bottom: 30px;
  }
}
</style> 