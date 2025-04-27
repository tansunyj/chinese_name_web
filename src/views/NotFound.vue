<template>
  <div class="not-found">
    <div class="container">
      <div class="error-content">
        <div class="error-code">404</div>
        <h1>Page Not Found</h1>
        <p>Sorry, the page you are looking for doesn't exist or has been moved.</p>
        <router-link to="/" class="back-button">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Homepage
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotFound'
}
</script>

<style scoped>
.not-found {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f8f9fa;
  text-align: center;
}

.container {
  max-width: 600px;
  padding: 0 20px;
}

.error-content {
  background-color: white;
  border-radius: 12px;
  padding: 50px 30px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.error-code {
  font-size: 8rem;
  font-weight: 700;
  color: #e60012;
  line-height: 1;
  margin-bottom: 20px;
}

h1 {
  font-size: 2rem;
  color: #333;
  margin-bottom: 20px;
}

p {
  color: #666;
  margin-bottom: 30px;
  font-size: 1.1rem;
}

.back-button {
  display: inline-flex;
  align-items: center;
  background-color: #e60012;
  color: white;
  text-decoration: none;
  padding: 12px 25px;
  border-radius: 8px;
  font-weight: 600;
  transition: background-color 0.3s;
}

.back-button:hover {
  background-color: #d00010;
}

.back-button svg {
  width: 20px;
  height: 20px;
  margin-right: 8px;
}

@media (max-width: 480px) {
  .error-code {
    font-size: 6rem;
  }
  
  h1 {
    font-size: 1.5rem;
  }
}
</style> 