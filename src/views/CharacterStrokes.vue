<template>
  <div class="character-strokes-page">
    <div class="container">
      <h1 class="page-title">Chinese Character Stroke Order</h1>
      <p class="page-subtitle">View stroke order and pronunciation of Chinese characters, learn the correct writing method</p>
      
      <div class="content">
        <div class="form-section">
          <div class="input-group">
            <div class="character-input-wrapper">
              <input 
                type="text" 
                v-model="searchCharacter" 
                maxlength="20"
                class="character-input"
                placeholder="Enter Chinese characters" 
                @input="onCharacterInput"
              />
            </div>
            <button class="search-btn full-width" @click="searchStrokeOrder">
              <span>Go</span>
            </button>
          </div>
        </div>
        
        <div v-if="isLoading" class="loading-section">
          <div class="spinner"></div>
          <p>Retrieving character information...</p>
        </div>
        
        <div v-if="hasSearched && currentCharacter && !isLoading" class="results-section">
          <div class="character-display-wrapper">
            <div class="character-display-main">
              <div class="large-character-container">
                <div class="large-character">{{ currentCharacter }}</div>
              </div>
              
              <div class="character-details">
                <div class="character-pronunciation">
                  <div class="pinyin-container">
                    <span class="pinyin">{{ characterData.pinyin }}</span>
                    <button class="sound-btn" @click="playPronunciation" title="播放发音">
                      <span class="sound-icon">🔊</span>
                    </button>
                  </div>
                </div>
                
                <div class="details-grid">
                  <div class="detail-row">
                    <div class="detail-label">笔画数</div>
                    <div class="detail-value">{{ characterData.strokeCount }}</div>
                  </div>
                  
                  <div class="detail-row">
                    <div class="detail-label">部首</div>
                    <div class="detail-value">{{ characterData.radical }}</div>
                  </div>
                  
                  <div class="detail-row">
                    <div class="detail-label">结构</div>
                    <div class="detail-value">{{ characterData.structure }}</div>
                  </div>
                  
                  <div class="detail-row">
                    <div class="detail-label">五行</div>
                    <div class="detail-value">{{ characterData.wuxing }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="stroke-details-section">
            <div class="stroke-sequence-container">
              <div class="stroke-image-sequence">
                <div v-if="characterData.strokeSequence && characterData.strokeSequence.length" class="stroke-images">
                  <div 
                    v-for="(stroke, index) in characterData.strokeSequence" 
                    :key="index" 
                    class="stroke-image-item"
                    :class="{ 
                      'stroke-current': index === currentStrokeIndex,
                      'stroke-completed': index < currentStrokeIndex,
                      'stroke-pending': index > currentStrokeIndex
                    }"
                    @click="goToStroke(index)"
                  >
                    <div class="stroke-image">
                      <div class="stroke-char">{{ currentCharacter }}</div>
                      <div class="stroke-number">{{ index + 1 }}</div>
                    </div>
                    <div class="stroke-name">{{ stroke }}</div>
                  </div>
                </div>
                <div v-else class="no-data">
                  No detailed stroke sequence data available
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div v-if="hasError" class="error-section">
          <div class="error-icon">!</div>
          <h3>Search Error</h3>
          <p>{{ errorMessage }}</p>
          <button class="retry-btn" @click="searchStrokeOrder">Retry</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CharacterStrokes',
  data() {
    return {
      searchCharacter: '',
      currentCharacter: '',
      isLoading: false,
      hasError: false,
      errorMessage: '',
      currentStrokeIndex: 0,
      characterData: {
        pinyin: '',
        strokeCount: 0,
        radical: '',
        meaning: '',
        structure: '',
        wuxing: '',
        strokeSequence: []
      },
      popularCharacters: ['爱', '福', '德', '智', '信', '义', '和', '美', '思', '诚'],
      hasSearched: false
    }
  },
  computed: {
    isPinyinAvailable() {
      return !!this.characterData.pinyin;
    }
  },
  methods: {
    onCharacterInput() {
      // 允许输入多个汉字，不做限制
    },
    selectCharacter(char) {
      this.searchCharacter = char;
      this.searchStrokeOrder();
    },
    playPronunciation() {
      // 实际应用中应该使用真实的发音API
      console.log(`播放 ${this.currentCharacter} 的发音`);
      // 如果有Web Speech API可用
      if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(this.currentCharacter);
        utterance.lang = 'zh-CN';
        window.speechSynthesis.speak(utterance);
      }
    },
    searchStrokeOrder() {
      if (!this.searchCharacter) {
        this.hasError = true;
        this.errorMessage = 'Please enter a Chinese character';
        return;
      }
      
      // 检查输入是否为汉字
      const chineseCharRegex = /^[\u4e00-\u9fa5]+$/;
      if (!chineseCharRegex.test(this.searchCharacter)) {
        this.hasError = true;
        this.errorMessage = 'Please enter valid Chinese characters';
        return;
      }
      
      this.hasError = false;
      this.isLoading = true;
      this.currentCharacter = this.searchCharacter;
      this.hasSearched = true;
      this.currentStrokeIndex = 0;
      
      // 模拟API调用，获取汉字的笔画信息
      setTimeout(() => {
        this.isLoading = false;
        
        // 模拟数据 - 实际应用需要接入真实API
        this.characterData = this.getMockCharacterData(this.currentCharacter);
      }, 1000);
    },
    goToStroke(index) {
      this.currentStrokeIndex = index;
    },
    getMockCharacterData(character) {
      // 模拟数据 - 实际应用需要替换为真实API数据
      const mockData = {
        '爱': {
          pinyin: 'ài',
          strokeCount: 13,
          radical: '爪',
          meaning: '喜爱；爱护；爱情；热爱',
          structure: '上下',
          wuxing: '土',
          strokeSequence: ['横', '竖', '撇', '横折钩', '横', '竖', '横折', '横', '竖', '横', '撇', '点', '点']
        },
        '福': {
          pinyin: 'fú',
          strokeCount: 13,
          radical: '礻',
          meaning: '幸福；福气；福利；祝福',
          structure: '左右',
          wuxing: '水',
          strokeSequence: ['竖', '横折', '竖', '横', '横', '竖', '横', '横', '竖', '横折', '横', '横', '点']
        },
        '德': {
          pinyin: 'dé',
          strokeCount: 15,
          radical: '彳',
          meaning: '道德；品德；恩德；德行',
          structure: '左右',
          wuxing: '火',
          strokeSequence: ['竖提', '横折钩', '竖', '横折', '横', '竖', '横', '横', '竖', '横', '撇', '点', '横', '竖', '横折钩']
        },
        '你': {
          pinyin: 'nǐ',
          strokeCount: 7,
          radical: '亻',
          meaning: '第二人称代词，指所说话的对象',
          structure: '左右',
          wuxing: '土',
          strokeSequence: ['撇', '横', '竖', '横折', '横', '竖', '折']
        },
        '我': {
          pinyin: 'wǒ',
          strokeCount: 7,
          radical: '戈',
          meaning: '第一人称代词，指说话的人自己',
          structure: '左右',
          wuxing: '金',
          strokeSequence: ['竖提', '横', '竖', '撇', '捺', '横撇/横钩', '竖弯钩']
        },
        '他': {
          pinyin: 'tā',
          strokeCount: 5,
          radical: '亻',
          meaning: '第三人称代词，指代男性',
          structure: '左右',
          wuxing: '火',
          strokeSequence: ['撇', '横', '竖', '横折', '捺']
        },
        '智': {
          pinyin: 'zhì',
          strokeCount: 12,
          radical: '日',
          meaning: '聪明；智慧；智力；智能',
          structure: '上下',
          wuxing: '火',
          strokeSequence: ['横', '竖', '横', '竖', '横折', '竖', '横', '横', '点', '横折钩', '撇', '捺']
        },
        '思': {
          pinyin: 'sī',
          strokeCount: 9,
          radical: '心',
          meaning: '思考；思想；思念；思维',
          structure: '上下',
          wuxing: '金',
          strokeSequence: ['横', '竖', '横', '横', '撇', '点', '横', '竖', '横']
        },
        '汉': {
          pinyin: 'hàn',
          strokeCount: 5,
          radical: '氵',
          meaning: '中国的一个民族；中国的一个朝代；汉语',
          structure: '左右',
          wuxing: '水',
          strokeSequence: ['点', '点', '提', '横撇', '捺']
        },
        '字': {
          pinyin: 'zì',
          strokeCount: 6,
          radical: '子',
          meaning: '文字；汉字；字体；书写的符号',
          structure: '上下',
          wuxing: '木',
          strokeSequence: ['横', '竖', '撇', '捺', '折', '点']
        }
      };
      
      // 返回对应汉字的数据，如果没有则使用汉字查询API
      let data = mockData[character];
      
      if (!data) {
        // 对于不在预设数据中的汉字，尝试通过一些基本规则判断
        // 实际应用中应该调用专业的汉字数据API
        data = this.getBasicCharData(character);
      }
      
      return data;
    },
    
    getBasicCharData(character) {
      // 这是一个简单的备用方法，用于生成未预设汉字的基础数据
      // 实际应用中应通过专业的汉字数据API获取
      
      // 常见的部首列表（简化版）
      const commonRadicals = {
        '氵': ['汉', '江', '河', '湖', '海', '洋', '流', '沙'],
        '亻': ['你', '他', '们', '们', '住', '传', '位'],
        '木': ['林', '森', '树', '本', '末', '术'],
        '口': ['吃', '喝', '叫', '吧', '吗', '听'],
        '艹': ['草', '花', '苗', '芽', '菜', '药'],
        '女': ['妈', '姐', '妹', '她', '好', '姓'],
        '宀': ['家', '室', '宝', '宁', '宇', '守'],
        '心': ['思', '想', '念', '忆', '恋', '情'],
        '子': ['字', '学', '孩', '存', '孙']
      };
      
      // 查找汉字的部首（简化版判断）
      let radical = '一';
      for (const rad in commonRadicals) {
        if (commonRadicals[rad].includes(character)) {
          radical = rad;
          break;
        }
      }
      
      // 假设的笔画数范围（实际应查表确定）
      const strokeCount = Math.floor(Math.random() * 10) + 4;
      
      // 随机的结构和五行（实际应查表确定）
      const structures = ['左右', '上下', '左中右', '上中下', '独体', '半包围', '全包围'];
      const wuxings = ['金', '木', '水', '火', '土'];
      
      const structure = structures[Math.floor(Math.random() * structures.length)];
      const wuxing = wuxings[Math.floor(Math.random() * wuxings.length)];
      
      // 简单的笔画序列（实际应查表确定）
      const basicStrokes = ['横', '竖', '撇', '捺', '折', '点', '提', '横折', '横钩', '竖钩'];
      const strokeSequence = [];
      
      // 生成与笔画数对应的笔画序列
      for (let i = 0; i < strokeCount; i++) {
        const randomIndex = Math.floor(Math.random() * basicStrokes.length);
        strokeSequence.push(basicStrokes[randomIndex]);
      }
      
      return {
        pinyin: `${character} pinyin`,
        strokeCount: strokeCount,
        radical: radical,
        meaning: `${character}的含义`,
        structure: structure,
        wuxing: wuxing,
        strokeSequence: strokeSequence
      };
    }
  },
  mounted() {
    // 页面加载时不自动显示结果
  }
}
</script>

<style scoped>
.character-strokes-page {
  background-color: #f8f8f8;
  padding: 80px 0 40px;
  min-height: 100vh;
}

.container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 20px;
}

.page-title {
  font-size: 2.5rem;
  color: #333;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 15px;
  font-weight: 600;
  padding: 0 20px;
}

.page-subtitle {
  font-size: 1.2rem;
  color: #666;
  text-align: center;
  margin-bottom: 40px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 20px;
}

.content {
  margin-top: 20px;
}

.form-section {
  background-color: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  margin-bottom: 30px;
}

.input-group {
  margin-bottom: 20px;
}

.character-input-wrapper {
  display: block;
  width: 100%;
  margin-bottom: 15px;
}

.character-input {
  width: 100%;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1.5rem;
  text-align: center;
  font-family: 'SimSun', 'Microsoft YaHei', sans-serif;
}

.character-input:focus {
  border-color: #e60012;
  outline: none;
  box-shadow: 0 0 0 2px rgba(230, 0, 18, 0.1);
}

.search-btn {
  background-color: #e60012;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 15px 25px;
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.search-btn.full-width {
  width: 100%;
  margin-top: 15px;
}

.search-btn:hover {
  background-color: #d00010;
  transform: translateY(-2px);
}

.loading-section {
  text-align: center;
  padding: 50px 0;
}

.spinner {
  width: 40px;
  height: 40px;
  border: 3px solid rgba(230, 0, 18, 0.2);
  border-top: 3px solid #e60012;
  border-radius: 50%;
  margin: 0 auto 20px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.results-section {
  background-color: white;
  border-radius: 12px;
  padding: 30px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.character-display-wrapper {
  margin-bottom: 40px;
  border-bottom: 1px solid #eee;
  padding-bottom: 30px;
}

.character-display-main {
  display: flex;
  gap: 30px;
}

.large-character-container {
  position: relative;
  flex-shrink: 0;
}

.large-character {
  font-size: 10rem;
  font-family: 'SimSun', 'Microsoft YaHei', sans-serif;
  line-height: 1;
  color: #333;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 200px;
  border: 2px solid #f0f0f0;
  border-radius: 10px;
  background-color: #f9f9f9;
}

.character-correct {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(230, 0, 18, 0.9);
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.8rem;
  white-space: nowrap;
}

.arrow-down {
  font-size: 0.7rem;
  margin-left: 2px;
}

.character-details {
  flex: 1;
}

.character-pronunciation {
  margin-bottom: 15px;
}

.pinyin-container {
  display: flex;
  align-items: center;
  gap: 10px;
}

.pinyin {
  font-size: 1.8rem;
  font-weight: 500;
  color: #333;
  font-family: Arial, sans-serif;
}

.sound-btn {
  background-color: #f0f0f0;
  border: none;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
}

.sound-btn:hover {
  background-color: #e60012;
  color: white;
}

.sound-icon {
  font-size: 1.2rem;
}

.details-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
  margin-top: 20px;
}

.detail-row {
  display: flex;
  align-items: center;
}

.detail-label {
  font-size: 1rem;
  color: #666;
  width: 70px;
}

.detail-value {
  font-size: 1.1rem;
  color: #333;
  font-weight: 500;
}

.stroke-sequence-container {
  width: 100%;
  background-color: #f9f9f9;
  border-radius: 8px;
  padding: 20px;
}

.stroke-image-sequence {
  background-color: white;
  border-radius: 4px;
  padding: 15px;
}

.stroke-images {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.stroke-image-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70px;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.stroke-image-item:hover {
  transform: translateY(-3px);
}

.stroke-image {
  position: relative;
  width: 60px;
  height: 60px;
  border: 1px solid #ddd;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f9f9f9;
  margin-bottom: 5px;
}

.stroke-char {
  font-size: 2rem;
  font-family: 'SimSun', 'Microsoft YaHei', sans-serif;
  color: #ccc; /* 默认灰色 */
}

.stroke-number {
  position: absolute;
  left: 5px;
  bottom: 5px;
  width: 18px;
  height: 18px;
  background-color: #ccc; /* 默认灰色 */
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.7rem;
}

.stroke-name {
  font-size: 0.9rem;
  color: #aaa; /* 默认灰色 */
  text-align: center;
}

/* 笔画状态样式 */
.stroke-current .stroke-char {
  color: #e60012;
  font-weight: bold;
}

.stroke-current .stroke-image {
  border-color: #e60012;
  box-shadow: 0 0 0 2px rgba(230, 0, 18, 0.2);
}

.stroke-current .stroke-number {
  background-color: #e60012;
}

.stroke-completed .stroke-char {
  color: #333; /* 已完成黑色 */
}

.stroke-completed .stroke-number {
  background-color: #333; /* 已完成黑色 */
}

.stroke-completed .stroke-name {
  color: #555; /* 已完成黑色 */
}

.stroke-pending .stroke-char {
  color: #ccc; /* 未完成灰色 */
}

.stroke-pending .stroke-name {
  color: #aaa; /* 未完成灰色 */
}

.stroke-pending .stroke-number {
  background-color: #ccc; /* 未完成灰色 */
}

.no-data {
  padding: 20px;
  text-align: center;
  color: #888;
  background-color: white;
  border-radius: 8px;
}

.error-section {
  background-color: #fff0f0;
  border: 1px solid #ffcdd2;
  border-radius: 12px;
  padding: 30px;
  text-align: center;
  margin-top: 30px;
}

.error-icon {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #e60012;
  color: white;
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
  font-weight: bold;
}

.error-section h3 {
  font-size: 1.4rem;
  color: #d32f2f;
  margin-bottom: 10px;
}

.error-section p {
  color: #666;
  margin-bottom: 20px;
}

.retry-btn {
  background-color: #e60012;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 12px 25px;
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.retry-btn:hover {
  background-color: #d00010;
}

@media (max-width: 768px) {
  .character-display-main {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
  
  .large-character {
    font-size: 8rem;
    width: 150px;
    height: 150px;
  }
  
  .page-title {
    font-size: 2rem;
  }
  
  .details-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .character-input {
    max-width: none;
    width: 100%;
  }
  
  .character-input-wrapper {
    flex-direction: column;
    gap: 10px;
  }
  
  .search-btn {
    width: 100%;
    margin-left: 0;
  }
  
  .large-character {
    font-size: 6rem;
    width: 120px;
    height: 120px;
  }
  
  .stroke-images {
    justify-content: center;
  }
}
</style> 