<template>
  <div class="custom-name-page">
    <div class="header">
      <h1>定制中文名称</h1>
      <p class="subtitle">使用人工智能为您创建优美的中文名字</p>
    </div>
    
    <div class="content">
      <div class="intro-section">
        <h2>为什么选择中文名字？</h2>
        <p>中文名字蕴含着丰富的文化内涵和美好寓意。无论是出于商务需求、学习中文还是对中国文化的热爱，一个精心挑选的中文名字都能为您打开新的文化之门。</p>
        <p>我们的AI系统经过大量中国传统命名文化的学习，能够根据您的偏好、性别和期望的含义，为您生成符合中国文化特色且个性化的名字选项。</p>
      </div>
      
      <div class="service-features">
        <div class="feature">
          <div class="icon">📝</div>
          <h3>个性化定制</h3>
          <p>根据您的喜好和需求量身定制名字</p>
        </div>
        <div class="feature">
          <div class="icon">🧠</div>
          <h3>AI智能生成</h3>
          <p>利用先进AI技术创造符合文化的名字</p>
        </div>
        <div class="feature">
          <div class="icon">🔤</div>
          <h3>详细解析</h3>
          <p>提供每个字的含义、发音和笔画分析</p>
        </div>
        <div class="feature">
          <div class="icon">💾</div>
          <h3>名字收藏</h3>
          <p>保存喜欢的名字以便日后参考</p>
        </div>
      </div>
      
      <AINameGenerator @name-saved="handleNameSaved" />
      
      <div class="tips-section">
        <h2>取一个好中文名的小贴士</h2>
        <ul>
          <li><strong>音韵和谐：</strong>名字的发音应流畅悦耳，避免生硬或难以发音的组合。</li>
          <li><strong>字义吉祥：</strong>选择含义积极、寓意美好的汉字，避免不良谐音。</li>
          <li><strong>文化关联：</strong>考虑名字与中国传统文化、文学或历史的联系。</li>
          <li><strong>个人特色：</strong>名字应反映您的个性、愿望或家族特点。</li>
          <li><strong>实用性：</strong>选择相对常见的字，便于他人记忆和书写。</li>
        </ul>
      </div>
    </div>
    
    <div v-if="savedNotification" class="notification">
      <p>{{ savedNotification }}</p>
      <button @click="savedNotification = null" class="close-btn">×</button>
    </div>
  </div>
</template>

<script>
import AINameGenerator from '@/components/AINameGenerator.vue';

export default {
  name: 'CustomChineseName',
  components: {
    AINameGenerator
  },
  data() {
    return {
      savedNotification: null
    };
  },
  methods: {
    handleNameSaved(name) {
      this.savedNotification = `名字 "${name.chineseName}" 已成功保存！您可以在个人账户中查看保存的名字。`;
      
      // 5秒后自动关闭通知
      setTimeout(() => {
        this.savedNotification = null;
      }, 5000);
    }
  }
};
</script>

<style scoped>
.custom-name-page {
  padding-top: 80px;
  padding-bottom: 60px;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
}

.header {
  text-align: center;
  margin-bottom: 50px;
}

.header h1 {
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 10px;
}

.subtitle {
  color: #666;
  font-size: 1.2rem;
}

.content {
  padding: 0 20px;
}

.intro-section {
  background-color: #f8f9fa;
  border-radius: 12px;
  padding: 30px;
  margin-bottom: 40px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.intro-section h2 {
  color: #333;
  margin-bottom: 20px;
  font-size: 1.6rem;
}

.intro-section p {
  color: #555;
  line-height: 1.6;
  margin-bottom: 15px;
}

.service-features {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-bottom: 40px;
}

.feature {
  flex: 1;
  min-width: 200px;
  max-width: 250px;
  background-color: white;
  border-radius: 12px;
  padding: 25px;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s;
}

.feature:hover {
  transform: translateY(-5px);
}

.icon {
  font-size: 2.5rem;
  margin-bottom: 15px;
}

.feature h3 {
  color: #333;
  margin-bottom: 10px;
  font-size: 1.2rem;
}

.feature p {
  color: #666;
  line-height: 1.5;
}

.tips-section {
  margin-top: 50px;
  background-color: #f8f9fa;
  border-radius: 12px;
  padding: 30px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.tips-section h2 {
  color: #333;
  margin-bottom: 20px;
  font-size: 1.6rem;
}

.tips-section ul {
  padding-left: 20px;
}

.tips-section li {
  margin-bottom: 15px;
  color: #555;
  line-height: 1.6;
}

.notification {
  position: fixed;
  bottom: 30px;
  right: 30px;
  background-color: #e60012;
  color: white;
  padding: 15px 20px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  max-width: 400px;
  z-index: 1000;
  animation: slideIn 0.3s ease-out;
}

@keyframes slideIn {
  from {
    transform: translateY(100px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.notification p {
  margin: 0;
  flex-grow: 1;
}

.close-btn {
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0 0 0 10px;
  margin: 0;
  width: auto;
}

@media (max-width: 768px) {
  .custom-name-page {
    padding-top: 60px;
  }
  
  .header h1 {
    font-size: 2rem;
  }
  
  .service-features {
    flex-direction: column;
    align-items: center;
  }
  
  .feature {
    max-width: 100%;
  }
  
  .notification {
    left: 20px;
    right: 20px;
    bottom: 20px;
  }
}
</style> 