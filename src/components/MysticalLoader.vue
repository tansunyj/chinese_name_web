<template>
  <div class="mystical-loader-container">
    <div class="mystical-loader">
      <div class="loader-symbol">☯</div>
      <div class="loader-text">
        <p class="loading-title">{{ title || '✨ Processing...' }}</p>
        <p class="loading-subtitle">{{ subtitle || 'Please wait while we process your request' }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MysticalLoader',
  props: {
    title: {
      type: String,
      default: '✨ Processing...'
    },
    subtitle: {
      type: String,
      default: 'Please wait while we process your request'
    }
  }
}
</script>

<style scoped>
.mystical-loader-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 60px 20px;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  margin: 40px 0;
  min-height: 200px;
}

.mystical-loader {
  text-align: center;
}

.loader-symbol {
  font-size: 3rem;
  color: #e60012;
  animation: spin 2s linear infinite;
  margin-bottom: 20px;
  display: block;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.loader-text {
  max-width: 300px;
  margin: 0 auto;
}

.loading-title {
  font-size: 1.3rem;
  color: #333;
  margin-bottom: 8px;
  font-weight: 600;
  line-height: 1.4;
}

.loading-subtitle {
  color: #666;
  margin: 0;
  font-size: 1rem;
  line-height: 1.4;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .mystical-loader-container {
    padding: 40px 15px;
    margin: 20px 0;
    min-height: 160px;
  }
  
  .loader-symbol {
    font-size: 2.5rem;
    margin-bottom: 15px;
  }
  
  .loading-title {
    font-size: 1.1rem;
    margin-bottom: 6px;
  }
  
  .loading-subtitle {
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  .mystical-loader-container {
    padding: 30px 10px;
    min-height: 140px;
  }
  
  .loader-symbol {
    font-size: 2rem;
    margin-bottom: 12px;
  }
  
  .loading-title {
    font-size: 1rem;
  }
  
  .loading-subtitle {
    font-size: 0.85rem;
  }
}
</style> 