<template>
  <div class="login-page">
    <div class="container">
      <div class="login-card">
        <h1>{{ $t('header.login') }}</h1>
        <p class="description">Welcome back! Please enter your credentials to continue.</p>
        
        <form @submit.prevent="login">
          <div class="form-group">
            <label for="email">Email</label>
            <input 
              type="email" 
              id="email" 
              v-model="formData.email" 
              required
              class="form-input"
            />
          </div>
          
          <div class="form-group">
            <label for="password">Password</label>
            <input 
              type="password" 
              id="password" 
              v-model="formData.password" 
              required
              class="form-input"
            />
          </div>
          
          <div class="form-options">
            <div class="remember-me">
              <input type="checkbox" id="remember" v-model="formData.remember">
              <label for="remember">Remember me</label>
            </div>
            <a href="#" class="forgot-password">Forgot password?</a>
          </div>
          
          <button type="submit" class="submit-button">
            <span v-if="isLoading">{{ $t('common.loading') }}</span>
            <span v-else>{{ $t('header.login') }}</span>
          </button>
        </form>
        
        <div class="divider">
          <span>Or continue with</span>
        </div>
        
        <div class="social-login">
          <button class="social-button google">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032 s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2 C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z" />
            </svg>
            Google
          </button>
          <button class="social-button facebook">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M20,3H4C3.447,3,3,3.448,3,4v16c0,0.552,0.447,1,1,1h8.615v-6.96h-2.338v-2.725h2.338v-2c0-2.325,1.42-3.592,3.5-3.592 c0.699-0.002,1.399,0.034,2.095,0.107v2.42h-1.435c-1.128,0-1.348,0.538-1.348,1.325v1.735h2.697l-0.35,2.725h-2.348V21H20 c0.553,0,1-0.448,1-1V4C21,3.448,20.553,3,20,3z" />
            </svg>
            Facebook
          </button>
        </div>
        
        <div class="signup-link">
          <p>Don't have an account? <router-link to="/signup">Sign up</router-link></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  data() {
    return {
      formData: {
        email: '',
        password: '',
        remember: false
      },
      isLoading: false
    }
  },
  methods: {
    login() {
      this.isLoading = true;
      
      // 模拟登录请求
      setTimeout(() => {
        // 这里将来会替换为实际的API调用
        console.log('Login attempt with:', this.formData);
        
        // 登录成功后重定向到首页
        this.$router.push('/');
        
        this.isLoading = false;
      }, 1000);
    }
  }
}
</script>

<style scoped>
.login-page {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f8f9fa;
  padding: 20px;
}

.container {
  max-width: 500px;
  width: 100%;
}

.login-card {
  background-color: white;
  border-radius: 12px;
  padding: 40px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

h1 {
  font-size: 2rem;
  color: #333;
  text-align: center;
  margin-bottom: 10px;
}

.description {
  text-align: center;
  color: #666;
  margin-bottom: 30px;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
  color: #555;
}

.form-input {
  width: 100%;
  padding: 12px 15px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 1rem;
  transition: border-color 0.3s;
}

.form-input:focus {
  outline: none;
  border-color: #e60012;
}

.form-options {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
}

.remember-me {
  display: flex;
  align-items: center;
}

.remember-me input {
  margin-right: 8px;
}

.forgot-password {
  color: #e60012;
  text-decoration: none;
  font-size: 0.9rem;
}

.submit-button {
  width: 100%;
  background-color: #e60012;
  color: white;
  border: none;
  border-radius: 6px;
  padding: 12px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s;
}

.submit-button:hover {
  background-color: #d00010;
}

.divider {
  position: relative;
  text-align: center;
  margin: 30px 0;
}

.divider::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  height: 1px;
  background-color: #eee;
}

.divider span {
  position: relative;
  background-color: white;
  padding: 0 15px;
  color: #888;
  font-size: 0.9rem;
}

.social-login {
  display: flex;
  justify-content: space-between;
  gap: 15px;
  margin-bottom: 25px;
}

.social-button {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 6px;
  background-color: white;
  cursor: pointer;
  transition: background-color 0.3s;
  font-weight: 500;
}

.social-button svg {
  margin-right: 8px;
  width: 18px;
  height: 18px;
}

.social-button.google svg {
  fill: #4285F4;
}

.social-button.facebook svg {
  fill: #1877F2;
}

.social-button:hover {
  background-color: #f5f5f5;
}

.signup-link {
  text-align: center;
  margin-top: 15px;
}

.signup-link a {
  color: #e60012;
  text-decoration: none;
  font-weight: 600;
}

@media (max-width: 576px) {
  .login-card {
    padding: 25px;
  }
  
  h1 {
    font-size: 1.8rem;
  }
  
  .social-login {
    flex-direction: column;
  }
}
</style> 