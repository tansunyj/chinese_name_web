<template>
  <div class="pinyin-to-name-page">
    <div class="container">
      <h1 class="page-title">{{ $t('pinyinToName.title') }}</h1>
      
      <div class="content">
        <div class="form-section">
          <form @submit.prevent="findCharacters">
            <div class="form-group">
              <label for="pinyin">{{ $t('pinyinToName.pinyin') }}</label>
              <input 
                type="text" 
                id="pinyin" 
                v-model="formData.pinyin" 
                required
                class="form-input"
                placeholder="li"
              />
            </div>
            
            <div class="form-row">
              <div class="form-group">
                <label for="tone">{{ $t('pinyinToName.tone') }}</label>
                <select id="tone" v-model="formData.tone" class="form-input">
                  <option value="1">第一声 (ˉ)</option>
                  <option value="2">第二声 (ˊ)</option>
                  <option value="3">第三声 (ˇ)</option>
                  <option value="4">第四声 (ˋ)</option>
                  <option value="0">轻声</option>
                </select>
              </div>
              
              <div class="form-group">
                <label for="gender">{{ $t('pinyinToName.gender') }}</label>
                <select id="gender" v-model="formData.gender" class="form-input">
                  <option value="male">{{ $t('translate.male') }}</option>
                  <option value="female">{{ $t('translate.female') }}</option>
                  <option value="neutral">{{ $t('translate.other') }}</option>
                </select>
              </div>
            </div>
            
            <button type="submit" class="submit-button">
              <span v-if="isLoading">{{ $t('common.loading') }}</span>
              <span v-else>{{ $t('pinyinToName.convertButton') }}</span>
            </button>
          </form>
        </div>
        
        <div v-if="results.length" class="results-section">
          <h2>{{ $t('pinyinToName.results.title') }}</h2>
          
          <div class="results-grid">
            <div v-for="(result, index) in results" :key="index" class="result-card">
              <div class="character">{{ result.character }}</div>
              <div class="pinyin">{{ result.pinyin }}</div>
              
              <div class="details">
                <div class="detail-item">
                  <h4>{{ $t('pinyinToName.results.meaning') }}</h4>
                  <p>{{ result.meaning }}</p>
                </div>
                
                <div class="popularity-bar">
                  <h4>{{ $t('pinyinToName.results.popularity') }}</h4>
                  <div class="progress-container">
                    <div class="progress" :style="{ width: result.popularity + '%' }"></div>
                  </div>
                  <span>{{ result.popularity }}%</span>
                </div>
              </div>
              
              <div class="result-actions">
                <button class="action-button" @click="playPronunciation(result.character)">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </button>
                <button class="action-button" @click="copyToClipboard(result.character)">
                  {{ $t('common.copy') }}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PinyinToName',
  data() {
    return {
      formData: {
        pinyin: '',
        tone: '1',
        gender: 'neutral'
      },
      isLoading: false,
      results: []
    }
  },
  mounted() {
    // 添加自动滚动到顶部的功能
    window.scrollTo(0, 0);
  },
  methods: {
    findCharacters() {
      if (!this.formData.pinyin) return;
      
      this.isLoading = true;
      
      // 模拟API调用
      setTimeout(() => {
        // 假数据，将来会替换为实际的API调用
        if (this.formData.pinyin.toLowerCase() === 'li') {
          this.results = [
            {
              character: '李',
              pinyin: 'lǐ',
              meaning: '李子树，常用姓氏，象征坚韧、聪明',
              popularity: 95
            },
            {
              character: '理',
              pinyin: 'lǐ',
              meaning: '道理、规律，象征有条理、明事理',
              popularity: 80
            },
            {
              character: '立',
              pinyin: 'lì',
              meaning: '站立、建立，象征独立、坚定',
              popularity: 75
            },
            {
              character: '丽',
              pinyin: 'lì',
              meaning: '美丽、漂亮，象征美好、华丽',
              popularity: 85
            },
            {
              character: '力',
              pinyin: 'lì',
              meaning: '力量、能力，象征强大、有力',
              popularity: 70
            },
            {
              character: '利',
              pinyin: 'lì',
              meaning: '利益、锋利，象征有益、便利',
              popularity: 65
            }
          ];
          
          // 根据性别筛选结果
          if (this.formData.gender === 'male') {
            this.results = this.results.filter(item => 
              ['李', '理', '立', '力', '利'].includes(item.character)
            );
          } else if (this.formData.gender === 'female') {
            this.results = this.results.filter(item => 
              ['李', '丽', '理', '立'].includes(item.character)
            );
          }
          
          // 根据声调筛选结果
          if (this.formData.tone === '3') {
            this.results = this.results.filter(item => 
              ['李', '理'].includes(item.character)
            );
          } else if (this.formData.tone === '4') {
            this.results = this.results.filter(item => 
              ['立', '丽', '力', '利'].includes(item.character)
            );
          }
        } else {
          // 生成随机汉字结果
          const characters = ['春', '明', '华', '山', '水', '风', '云', '天', '地', '德', '智', '信', '义', '和', '平'];
          const tones = ['ā', 'á', 'ǎ', 'à', 'ē', 'é', 'ě', 'è', 'ī', 'í', 'ǐ', 'ì', 'ō', 'ó', 'ǒ', 'ò', 'ū', 'ú', 'ǔ', 'ù'];
          const meanings = [
            '代表美好、善良',
            '象征光明、希望',
            '体现繁荣、兴盛',
            '寓意坚强、稳重',
            '表示灵动、智慧',
            '代表自由、无拘无束',
            '象征高远、理想'
          ];
          
          // 创建3-6个随机结果
          const count = Math.floor(Math.random() * 4) + 3;
          this.results = [];
          
          for (let i = 0; i < count; i++) {
            const char = characters[Math.floor(Math.random() * characters.length)];
            const meaning = meanings[Math.floor(Math.random() * meanings.length)];
            const popularity = Math.floor(Math.random() * 50) + 50;
            
            // 为输入的拼音添加随机声调
            let pinyin = this.formData.pinyin.toLowerCase();
            const vowels = ['a', 'e', 'i', 'o', 'u'];
            for (let j = 0; j < pinyin.length; j++) {
              if (vowels.includes(pinyin[j])) {
                const toneIndex = (this.formData.tone === '0') ? 
                  Math.floor(Math.random() * 4) : 
                  (parseInt(this.formData.tone) - 1);
                const tone = tones[vowels.indexOf(pinyin[j]) * 4 + toneIndex];
                pinyin = pinyin.substring(0, j) + tone + pinyin.substring(j + 1);
                break;
              }
            }
            
            this.results.push({
              character: char,
              pinyin: pinyin,
              meaning: meaning,
              popularity: popularity
            });
          }
        }
        
        this.isLoading = false;
      }, 800);
    },
    playPronunciation(char) {
      // 这里将来会实现实际的发音功能
      console.log(`Playing pronunciation for: ${char}`);
      alert(`Playing pronunciation for: ${char}`);
    },
    copyToClipboard(text) {
      navigator.clipboard.writeText(text).then(() => {
        alert(this.$t('common.copied'));
      });
    }
  }
}
</script>

<style scoped>
.pinyin-to-name-page {
  padding: 80px 0 100px;
  min-height: 100vh;
  background-color: #f8f9fa;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
}

.page-title {
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 40px;
  text-align: center;
}

.content {
  display: flex;
  flex-direction: column;
  gap: 50px;
}

.form-section {
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  padding: 30px;
}

.form-row {
  display: flex;
  gap: 20px;
  margin-bottom: 25px;
}

.form-row .form-group {
  flex: 1;
}

.form-group {
  margin-bottom: 25px;
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

.submit-button {
  background-color: #e60012;
  color: white;
  border: none;
  border-radius: 6px;
  padding: 12px 25px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s;
  display: block;
  width: 100%;
}

.submit-button:hover {
  background-color: #d00010;
}

.results-section {
  margin-top: 20px;
}

.results-section h2 {
  font-size: 1.8rem;
  color: #333;
  margin-bottom: 25px;
}

.results-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
}

.result-card {
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.3s;
}

.result-card:hover {
  transform: translateY(-5px);
}

.character {
  font-size: 3.5rem;
  margin-bottom: 5px;
  color: #333;
}

.pinyin {
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 15px;
}

.details {
  width: 100%;
  margin-bottom: 15px;
}

.detail-item {
  margin-bottom: 15px;
}

.detail-item h4 {
  font-size: 0.9rem;
  color: #888;
  margin-bottom: 5px;
}

.detail-item p {
  margin: 0;
  color: #333;
  font-size: 0.95rem;
  line-height: 1.5;
}

.popularity-bar h4 {
  font-size: 0.9rem;
  color: #888;
  margin-bottom: 5px;
}

.progress-container {
  height: 8px;
  background-color: #f0f0f0;
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 5px;
}

.progress {
  height: 100%;
  background-color: #e60012;
  border-radius: 4px;
}

.popularity-bar span {
  font-size: 0.85rem;
  color: #666;
}

.result-actions {
  display: flex;
  width: 100%;
  margin-top: auto;
}

.action-button {
  flex: 1;
  background-color: #f0f0f0;
  border: none;
  padding: 10px;
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
  margin: 0 5px;
}

.action-button:hover {
  background-color: #e60012;
  color: white;
}

.action-button svg {
  width: 20px;
  height: 20px;
}

.action-button:hover svg {
  color: white;
}

@media (max-width: 768px) {
  .page-title {
    font-size: 2rem;
  }
  
  .pinyin-to-name-page {
    padding: 70px 0;
  }
  
  .form-row {
    flex-direction: column;
    gap: 0;
  }
  
  .results-grid {
    grid-template-columns: 1fr;
  }
}
</style> 