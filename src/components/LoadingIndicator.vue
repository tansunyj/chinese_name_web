<template>
  <div class="loading-container" :class="{ 'overlay': overlay }">
    <div class="loading-spinner">
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
    </div>
    <div class="loading-text">{{ text || defaultText }}</div>
    <div v-if="showProgress" class="loading-progress">
      <div class="progress-steps">
        <div 
          v-for="(step, index) in progressSteps" 
          :key="index" 
          class="progress-step"
          :class="{ 'active': index <= currentStep }"
        >
          {{ step }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoadingIndicator',
  props: {
    text: {
      type: String,
      default: ''
    },
    overlay: {
      type: Boolean,
      default: false
    },
    showProgress: {
      type: Boolean,
      default: false
    },
    progressSteps: {
      type: Array,
      default: () => ['获取数据', '生成名字', '分析结果']
    },
    currentStep: {
      type: Number,
      default: 0
    }
  },
  computed: {
    defaultText() {
      return '正在处理，请稍候...';
    }
  }
}
</script>

<style scoped>
.loading-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.loading-container.overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.8);
  z-index: 1000;
}

.loading-spinner {
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
}

.dot {
  width: 10px;
  height: 10px;
  margin: 0 5px;
  border-radius: 50%;
  background-color: #e60012;
  display: inline-block;
  animation: bounce 1.4s infinite ease-in-out both;
}

.dot:nth-child(1) {
  animation-delay: -0.32s;
}

.dot:nth-child(2) {
  animation-delay: -0.16s;
}

@keyframes bounce {
  0%, 80%, 100% { 
    transform: scale(0);
  }
  40% { 
    transform: scale(1.0);
  }
}

.loading-text {
  font-size: 16px;
  color: #333;
  margin-top: 15px;
  font-weight: 500;
  text-align: center;
}

.loading-progress {
  margin-top: 20px;
  width: 100%;
  max-width: 400px;
}

.progress-steps {
  display: flex;
  justify-content: space-between;
  position: relative;
  margin-top: 30px;
}

.progress-steps::before {
  content: '';
  position: absolute;
  top: 15px;
  left: 0;
  right: 0;
  height: 2px;
  background-color: #ddd;
  z-index: 1;
}

.progress-step {
  position: relative;
  z-index: 2;
  background-color: white;
  padding: 5px 10px;
  border-radius: 15px;
  font-size: 12px;
  color: #999;
  border: 1px solid #ddd;
  transition: all 0.3s;
}

.progress-step.active {
  color: #e60012;
  border-color: #e60012;
  font-weight: bold;
}
</style> 