<template>
  <div class="ai-name-generator">
    <h2 class="title">定制中文名称</h2>
    <p class="description">基于您的喜好和要求，使用AI生成个性化中文名字</p>
    
    <div class="form-container">
      <div class="input-group">
        <label>您的英文名或关键词</label>
        <input v-model="inputName" placeholder="请输入您的英文名或关键词" />
      </div>
      
      <div class="input-group">
        <label>性别</label>
        <select v-model="gender">
          <option value="男">男</option>
          <option value="女">女</option>
          <option value="不指定">不指定</option>
        </select>
      </div>
      
      <div class="input-group">
        <label>名字风格</label>
        <select v-model="style">
          <option value="传统">传统</option>
          <option value="现代">现代</option>
          <option value="诗意">诗意</option>
          <option value="国际化">国际化</option>
        </select>
      </div>
      
      <div class="input-group">
        <label>寓意要求（可选）</label>
        <textarea v-model="meaning" placeholder="例如：希望表达才华、勇气或与自然相关的含义"></textarea>
      </div>
      
      <button @click="generateName" :disabled="isLoading || !inputName">
        {{ isLoading ? '生成中...' : '生成名字建议' }}
      </button>
    </div>
    
    <div v-if="isLoading" class="loading-container">
      <div class="spinner"></div>
      <p>AI正在为您精心设计中文名字，这可能需要几秒钟...</p>
    </div>
    
    <div v-if="result.length && !isLoading" class="results-container">
      <h3>为您推荐的名字</h3>
      
      <div class="name-cards">
        <div v-for="(name, index) in result" :key="index" class="name-card">
          <div class="name-header">
            <h3>{{ name.chineseName }}</h3>
            <p class="pinyin">{{ name.pinyin }}</p>
          </div>
          
          <div class="name-meaning">
            <p>{{ name.meaning }}</p>
          </div>
          
          <div class="character-analysis">
            <h4>字符分析</h4>
            <div v-for="(char, charIndex) in name.characters" :key="charIndex" class="character">
              <div class="char-display">{{ char.character }}</div>
              <div class="char-info">
                <p><strong>拼音:</strong> {{ char.pinyin }}</p>
                <p><strong>含义:</strong> {{ char.meaning }}</p>
                <p v-if="char.strokes"><strong>笔画数:</strong> {{ char.strokes }}</p>
              </div>
            </div>
          </div>
          
          <div class="actions">
            <button class="save-button" @click="saveName(name)">保存此名字</button>
          </div>
        </div>
      </div>
    </div>
    
    <div v-if="error" class="error-message">
      <p>{{ error }}</p>
    </div>
  </div>
</template>

<script>
import openaiService from '@/services/openaiService';

export default {
  name: 'AINameGenerator',
  data() {
    return {
      inputName: '',
      gender: '不指定',
      style: '传统',
      meaning: '',
      isLoading: false,
      result: [],
      error: null,
      savedNames: []
    };
  },
  methods: {
    async generateName() {
      if (!this.inputName) {
        this.error = '请输入您的英文名或关键词';
        return;
      }
      
      this.isLoading = true;
      this.error = null;
      this.result = [];
      
      try {
        const response = await openaiService.generateChineseName({
          inputName: this.inputName,
          gender: this.gender,
          style: this.style,
          meaning: this.meaning
        });
        
        this.result = response && Array.isArray(response.object) ? response.object : [];
        
        if (this.result.length === 0) {
          this.error = '未能生成名字，请尝试调整您的要求';
        }
      } catch (error) {
        console.error('生成名字失败:', error);
        this.error = '生成名字时出错，请稍后再试';
      } finally {
        this.isLoading = false;
      }
    },
    
    saveName(name) {
      if (!name) return;
      
      // 从本地存储加载已保存的名字
      const savedNames = JSON.parse(localStorage.getItem('savedNames') || '[]');
      
      // 添加新名字
      savedNames.push({
        ...name,
        savedAt: new Date().toISOString()
      });
      
      // 保存到本地存储
      localStorage.setItem('savedNames', JSON.stringify(savedNames));
      
      // 更新组件状态
      this.savedNames = savedNames;
      
      // 显示成功消息
      this.$emit('name-saved', name);
      
      // 可以在这里添加弹窗或提示
      alert(`已保存名字: ${name.chineseName}`);
    }
  }
};
</script>

<style scoped>
.ai-name-generator {
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'PingFang SC', 'Microsoft YaHei', sans-serif;
}

.title {
  font-size: 1.8rem;
  color: #333;
  margin-bottom: 10px;
  text-align: center;
}

.description {
  color: #666;
  text-align: center;
  margin-bottom: 30px;
}

.form-container {
  background-color: #f8f9fa;
  border-radius: 12px;
  padding: 25px;
  margin-bottom: 30px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.input-group {
  margin-bottom: 20px;
}

.input-group label {
  display: block;
  font-weight: 500;
  margin-bottom: 8px;
  color: #333;
}

input, select, textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.3s;
}

input:focus, select:focus, textarea:focus {
  border-color: #e60012;
  outline: none;
}

textarea {
  resize: vertical;
  min-height: 100px;
}

button {
  background-color: #e60012;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 12px 20px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s;
  width: 100%;
  margin-top: 10px;
}

button:hover {
  background-color: #cc0010;
}

button:disabled {
  background-color: #f2a4a4;
  cursor: not-allowed;
}

.loading-container {
  text-align: center;
  margin: 30px 0;
}

.spinner {
  display: inline-block;
  width: 50px;
  height: 50px;
  border: 4px solid rgba(230, 0, 18, 0.1);
  border-radius: 50%;
  border-top-color: #e60012;
  animation: spin 1s ease-in-out infinite;
  margin-bottom: 15px;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.results-container {
  margin-top: 30px;
}

.results-container h3 {
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 20px;
  text-align: center;
}

.name-cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
}

.name-card {
  background-color: white;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s, box-shadow 0.3s;
}

.name-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
}

.name-header {
  text-align: center;
  margin-bottom: 15px;
}

.name-header h3 {
  font-size: 2rem;
  color: #e60012;
  margin: 0 0 5px;
}

.pinyin {
  color: #666;
  font-size: 1rem;
  margin: 0;
}

.name-meaning {
  color: #333;
  line-height: 1.6;
  margin-bottom: 20px;
  padding-bottom: 15px;
  border-bottom: 1px solid #eee;
}

.character-analysis {
  margin-bottom: 20px;
}

.character-analysis h4 {
  font-size: 1.1rem;
  color: #333;
  margin-bottom: 15px;
}

.character {
  display: flex;
  align-items: flex-start;
  margin-bottom: 15px;
}

.char-display {
  width: 50px;
  height: 50px;
  background-color: #f8f9fa;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  margin-right: 15px;
  color: #e60012;
  flex-shrink: 0;
}

.char-info {
  flex-grow: 1;
}

.char-info p {
  margin: 0 0 5px;
  font-size: 0.9rem;
  color: #555;
}

.actions {
  text-align: center;
}

.save-button {
  background-color: white;
  color: #e60012;
  border: 1px solid #e60012;
  padding: 10px 15px;
  font-size: 0.9rem;
  transition: all 0.3s;
}

.save-button:hover {
  background-color: #f8f0f1;
}

.error-message {
  background-color: #fff2f2;
  color: #e60012;
  padding: 15px;
  border-radius: 8px;
  margin-top: 20px;
  text-align: center;
}
</style> 