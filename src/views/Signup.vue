<template>
  <div class="signup-page">
    <div class="container">
      <div class="signup-card">
        <h1>{{ $t('header.signup') }}</h1>
        <p class="description">Create an account to get access to all features</p>
        
        <form @submit.prevent="signup">
          <div class="form-row">
            <div class="form-group">
              <label for="firstName">First Name</label>
              <input 
                type="text" 
                id="firstName" 
                v-model="formData.firstName" 
                required
                class="form-input"
              />
            </div>
            
            <div class="form-group">
              <label for="lastName">Last Name</label>
              <input 
                type="text" 
                id="lastName" 
                v-model="formData.lastName" 
                required
                class="form-input"
              />
            </div>
          </div>
          
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
            <p class="password-hint">Password must be at least 8 characters</p>
          </div>
          
          <div class="form-group">
            <label for="confirmPassword">Confirm Password</label>
            <input 
              type="password" 
              id="confirmPassword" 
              v-model="formData.confirmPassword" 
              required
              class="form-input"
            />
          </div>
          
          <div class="form-agreement">
            <input type="checkbox" id="terms" v-model="formData.agreeTerms" required>
            <label for="terms">I agree to the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a></label>
          </div>
          
          <button type="submit" class="submit-button">
            <span v-if="isLoading">{{ $t('common.loading') }}</span>
            <span v-else>{{ $t('header.signup') }}</span>
          </button>
        </form>
        
        <div class="divider">
          <span>Or sign up with</span>
        </div>
        
        <div class="social-signup">
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
        
        <div class="login-link">
          <p>Already have an account? <router-link to="/login">Login</router-link></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SignupPage',
  data() {
    return {
      formData: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        agreeTerms: false
      },
      isLoading: false
    }
  },
  methods: {
    signup() {
      // 检查密码确认
      if (this.formData.password !== this.formData.confirmPassword) {
        alert('Passwords do not match');
        return;
      }
      
      this.isLoading = true;
      
      // 模拟注册请求
      setTimeout(() => {
        // 这里将来会替换为实际的API调用
        console.log('Signup attempt with:', this.formData);
        
        // 注册成功后重定向到登录页
        this.$router.push('/login');
        
        this.isLoading = false;
      }, 1000);
    }
  }
}
</script>

<style scoped>
.signup-page {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f8f9fa;
  padding: 20px;
}

.container {
  max-width: 600px;
  width: 100%;
}

.signup-card {
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

.form-row {
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
}

.form-row .form-group {
  flex: 1;
  margin-bottom: 0;
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

.password-hint {
  font-size: 0.85rem;
  color: #888;
  margin-top: 5px;
  margin-bottom: 0;
}

.form-agreement {
  display: flex;
  align-items: flex-start;
  margin-bottom: 25px;
}

.form-agreement input {
  margin-right: 10px;
  margin-top: 5px;
}

.form-agreement label {
  font-size: 0.9rem;
  color: #555;
  line-height: 1.4;
}

.form-agreement a {
  color: #e60012;
  text-decoration: none;
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

.social-signup {
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

.login-link {
  text-align: center;
  margin-top: 15px;
}

.login-link a {
  color: #e60012;
  text-decoration: none;
  font-weight: 600;
}

@media (max-width: 576px) {
  .signup-card {
    padding: 25px;
  }
  
  h1 {
    font-size: 1.8rem;
  }
  
  .form-row {
    flex-direction: column;
    gap: 0;
  }
  
  .social-signup {
    flex-direction: column;
  }
}
</style> 