<template>
  <div class="usage-guide">
    <div class="guide-header">
      <h3 class="guide-title">{{ title || '使用指南' }}</h3>
    </div>
    
    <div class="steps-container">
      <template v-for="(step, index) in steps" :key="index">
        <div class="step-content">
          <div class="step-number">{{ index + 1 }}</div>
          <div class="step-text">
            <h4 class="step-title">{{ step.title }}</h4>
            <p class="step-description">{{ step.description }}</p>
          </div>
        </div>
        
        <div v-if="index < steps.length - 1" class="step-arrow">→</div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UsageGuide',
  props: {
    title: {
      type: String,
      default: '使用指南'
    },
    subtitle: {
      type: String,
      default: '按照以下步骤操作，轻松使用我们的工具'
    },
    steps: {
      type: Array,
      required: true,
      validator: function (steps) {
        return steps.every(step => 
          step.title && 
          step.description
        );
      }
    }
  }
}
</script>

<style scoped>
.usage-guide {
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
  border-radius: 12px;
  padding: 20px 25px;
  margin: 20px 0;
  border: 1px solid #e9ecef;
  position: relative;
}

.usage-guide::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, #d10a11, #f05252);
}

.guide-header {
  text-align: center;
  margin-bottom: 20px;
}

.guide-title {
  font-size: 1.4rem;
  color: #333;
  margin: 0;
  font-weight: 600;
}

.steps-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0;
}

.step-content {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  flex: 1;
  max-width: 200px;
}

.step-content:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.step-number {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: linear-gradient(135deg, #d10a11, #f05252);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
  font-size: 0.9rem;
  flex-shrink: 0;
}



.step-text {
  flex: 1;
  min-width: 0;
}

.step-title {
  font-size: 0.95rem;
  color: #333;
  margin: 0 0 2px 0;
  font-weight: 600;
  line-height: 1.2;
}

.step-description {
  color: #666;
  font-size: 0.8rem;
  line-height: 1.3;
  margin: 0;
}

.step-arrow {
  color: #d10a11;
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0 15px;
  opacity: 0.8;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 30px;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .usage-guide {
    padding: 15px 20px;
    margin: 15px 0;
  }
  
  .guide-title {
    font-size: 1.2rem;
  }
  
  .steps-container {
    flex-direction: column;
    gap: 12px;
  }
  
  .step-content {
    padding: 10px;
    max-width: none;
  }
  
  .step-arrow {
    transform: rotate(90deg);
    margin: 5px 0;
    min-width: auto;
  }
  
  .step-title {
    font-size: 0.9rem;
  }
  
  .step-description {
    font-size: 0.75rem;
  }
}

@media (max-width: 480px) {
  .usage-guide {
    padding: 12px 15px;
  }
  
  .guide-title {
    font-size: 1.1rem;
  }
  
  .step-content {
    padding: 8px;
    gap: 6px;
  }
  
  .step-number {
    width: 20px;
    height: 20px;
    font-size: 0.8rem;
  }
  

}
</style> 