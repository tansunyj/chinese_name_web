<template>
  <div class="multilingual-page">
    <div class="container">
      <h1 class="page-title">{{ $t('multilingual.title') }}</h1>
      
      <div class="content">
        <div class="form-section">
          <form @submit.prevent="translateName">
            <div class="form-grid">
              <div class="form-group">
                <label for="name">{{ $t('multilingual.name') }}</label>
                <input 
                  type="text" 
                  id="name" 
                  v-model="formData.name" 
                  required
                  class="form-input"
                />
              </div>
              
              <div class="form-group">
                <label for="targetLang">{{ $t('multilingual.targetLang') }}</label>
                <select 
                  id="targetLang" 
                  v-model="formData.targetLang"
                  class="form-input"
                >
                  <option v-for="(lang, code) in languages" :key="`target-${code}`" :value="code">
                    {{ lang }}
                  </option>
                </select>
              </div>
            </div>
            
            <button type="submit" class="submit-button">
              <span v-if="isLoading">{{ $t('common.loading') }}</span>
              <span v-else>{{ $t('multilingual.translateButton') }}</span>
            </button>
          </form>
        </div>
        
        <div v-if="results.length" class="results-section">
          <h2>{{ $t('multilingual.results.title') }}</h2>
          
          <div class="languages-display">
            <div class="language-path">
              <div class="lang-icon">EN</div>
              <div class="arrow">→</div>
              <div class="lang-icon">{{ formData.targetLang.toUpperCase() }}</div>
            </div>
          </div>
          
          <div class="results-grid">
            <div v-for="(result, index) in results" :key="index" class="result-card">
              <div class="result-compare">
                <div class="result-side">
                  <h4>{{ $t('multilingual.results.original') }}</h4>
                  <div class="result-text">{{ formData.name }}</div>
                </div>
                
                <div class="result-arrow">→</div>
                
                <div class="result-side">
                  <h4>{{ $t('multilingual.results.translated') }}</h4>
                  <div class="result-text">{{ result.text }}</div>
                  <div class="result-pronunciation">{{ result.pronunciation }}</div>
                </div>
              </div>
              
              <div class="result-details">
                <div class="play-button-container">
                  <button class="play-button" @click="playPronunciation(result.text)">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </button>
                  <span>{{ $t('multilingual.results.pronunciation') }}</span>
                </div>
              </div>
              
              <div class="result-actions">
                <button class="action-button copy" @click="copyToClipboard(result.text)">
                  {{ $t('common.copy') }}
                </button>
                <button class="action-button share" @click="shareResult(result)">
                  {{ $t('common.share') }}
                </button>
              </div>
            </div>
          </div>
          
          <div v-if="alternatives.length" class="alternatives-section">
            <h3>{{ $t('multilingual.results.alternatives') }}</h3>
            <div class="alternatives-list">
              <div v-for="(alt, index) in alternatives" :key="index" class="alternative-item">
                <div class="alternative-text">{{ alt.text }}</div>
                <div class="alternative-pronunciation">{{ alt.pronunciation }}</div>
                <button class="alt-action-button" @click="selectAlternative(alt)">
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
  name: 'MultilingualName',
  data() {
    return {
      formData: {
        name: '',
        sourceLang: 'en',
        targetLang: 'zh'
      },
      languages: {
        zh: '中文 (Chinese)',
        es: '西班牙语 (Spanish)',
        fr: '法语 (French)',
        de: '德语 (German)',
        ja: '日语 (Japanese)',
        ko: '韩语 (Korean)',
        ru: '俄语 (Russian)',
        ar: '阿拉伯语 (Arabic)',
        pt: '葡萄牙语 (Portuguese)',
        it: '意大利语 (Italian)',
        hi: '印地语 (Hindi)',
        th: '泰语 (Thai)',
        vi: '越南语 (Vietnamese)',
        nl: '荷兰语 (Dutch)',
        tr: '土耳其语 (Turkish)',
        pl: '波兰语 (Polish)',
        sv: '瑞典语 (Swedish)',
        he: '希伯来语 (Hebrew)',
        id: '印尼语 (Indonesian)',
        el: '希腊语 (Greek)',
        fa: '波斯语 (Persian)',
        ms: '马来语 (Malay)',
        uk: '乌克兰语 (Ukrainian)',
        cs: '捷克语 (Czech)',
        da: '丹麦语 (Danish)',
        fi: '芬兰语 (Finnish)',
        ro: '罗马尼亚语 (Romanian)',
        hu: '匈牙利语 (Hungarian)',
        no: '挪威语 (Norwegian)'
      },
      isLoading: false,
      results: [],
      alternatives: []
    }
  },
  methods: {
    translateName() {
      this.isLoading = true;
      
      // 模拟API调用
      setTimeout(() => {
        // 假数据，将来会替换为实际API调用
        if (this.formData.targetLang === 'zh') {
          // English to Chinese
          this.results = [
            {
              text: '约翰',
              pronunciation: 'Yuēhàn'
            }
          ];
          
          this.alternatives = [
            {
              text: '江恩',
              pronunciation: 'Jiāng Ēn'
            },
            {
              text: '乔恩',
              pronunciation: 'Qiáo Ēn'
            }
          ];
        } else if (this.formData.targetLang === 'ja') {
          // English to Japanese
          this.results = [
            {
              text: 'ジョン',
              pronunciation: 'Jon'
            }
          ];
          
          this.alternatives = [
            {
              text: 'ヨハン',
              pronunciation: 'Yohan'
            }
          ];
        } else {
          // Generic response for other language pairs
          this.results = [
            {
              text: this.formData.name + ' (translated)',
              pronunciation: 'Sample pronunciation'
            }
          ];
          
          this.alternatives = [
            {
              text: this.formData.name + ' (alternative 1)',
              pronunciation: 'Alternative pronunciation 1'
            },
            {
              text: this.formData.name + ' (alternative 2)',
              pronunciation: 'Alternative pronunciation 2'
            }
          ];
        }
        
        this.isLoading = false;
      }, 1500);
    },
    playPronunciation(text) {
      // 这里将来会实现实际的发音功能
      console.log(`Playing pronunciation for: ${text}`);
      alert(`Playing pronunciation for: ${text}`);
    },
    copyToClipboard(text) {
      navigator.clipboard.writeText(text).then(() => {
        alert(this.$t('common.copied'));
      });
    },
    shareResult(result) {
      // 模拟分享功能
      const shareText = `My name in ${this.languages[this.formData.targetLang]} is ${result.text}`;
      alert(`Share: ${shareText}`);
    },
    selectAlternative(alt) {
      this.copyToClipboard(alt.text);
    }
  }
}
</script>

<style scoped>
.multilingual-page {
  padding: 20px 0 100px;
  min-height: 100vh;
  background-color: #f8f9fa;
}

.container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 20px;
}

.page-title {
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 40px;
  margin-top: 70px;
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

.form-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-group label {
  margin-bottom: 8px;
  font-weight: 500;
  color: #555;
}

.form-input {
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
  margin-top: 30px;
}

.results-section h2 {
  font-size: 1.8rem;
  color: #333;
  margin-bottom: 30px;
}

.languages-display {
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
}

.language-path {
  display: flex;
  align-items: center;
}

.lang-icon {
  background-color: #e60012;
  color: white;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-weight: bold;
}

.arrow {
  margin: 0 15px;
  font-size: 1.5rem;
  color: #666;
}

.results-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 25px;
}

.result-card {
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  transition: transform 0.3s, box-shadow 0.3s;
}

.result-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}

.result-compare {
  padding: 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #eee;
}

.result-side {
  text-align: center;
  flex: 1;
}

.result-side h4 {
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 10px;
}

.result-text {
  font-size: 1.8rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 5px;
}

.result-pronunciation {
  font-size: 1rem;
  color: #666;
}

.result-arrow {
  font-size: 2rem;
  color: #ccc;
  margin: 0 20px;
}

.result-details {
  padding: 20px;
  display: flex;
  justify-content: center;
}

.play-button-container {
  display: flex;
  align-items: center;
}

.play-button-container span {
  margin-left: 10px;
  color: #666;
}

.play-button {
  background-color: #f0f0f0;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.3s;
}

.play-button:hover {
  background-color: #e60012;
}

.play-button svg {
  width: 20px;
  height: 20px;
  color: #333;
}

.play-button:hover svg {
  color: white;
}

.result-actions {
  display: flex;
  border-top: 1px solid #eee;
}

.action-button {
  flex: 1;
  border: none;
  background-color: transparent;
  padding: 15px;
  cursor: pointer;
  font-weight: 500;
  transition: background-color 0.3s;
}

.action-button:hover {
  background-color: #f5f5f5;
}

.action-button.copy {
  border-right: 1px solid #eee;
}

.alternatives-section {
  margin-top: 40px;
}

.alternatives-section h3 {
  margin-bottom: 20px;
  color: #333;
}

.alternatives-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 15px;
}

.alternative-item {
  background-color: white;
  border-radius: 8px;
  padding: 15px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.alternative-text {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 5px;
}

.alternative-pronunciation {
  color: #666;
  margin-bottom: 10px;
}

.alt-action-button {
  background-color: #f0f0f0;
  border: none;
  border-radius: 4px;
  padding: 8px 12px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.alt-action-button:hover {
  background-color: #e60012;
  color: white;
}

@media (max-width: 768px) {
  .page-title {
    font-size: 2rem;
  }
  
  .multilingual-page {
    padding: 70px 0;
  }
  
  .result-arrow {
    font-size: 1.5rem;
    margin: 0 10px;
  }
  
  .result-text {
    font-size: 1.5rem;
  }
}
</style> 