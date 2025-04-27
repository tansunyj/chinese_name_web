<template>
  <div class="translate-page">
    <div class="container">
      <h1 class="page-title">{{ $t('translate.title') }}</h1>
      
      <div class="content">
        <div class="form-section">
          <form @submit.prevent="translateName">
            <div class="form-group fullWidth">
              <label for="fullName">{{ $t('translate.fullName') }}</label>
              <input 
                type="text" 
                id="fullName" 
                v-model="formData.fullName" 
                required
                class="form-input"
                :placeholder="$t('translate.fullNamePlaceholder')"
              />
            </div>
            
            <button type="submit" class="submit-button" :class="{ 'loading': isLoading }">
              <span v-if="isLoading">{{ $t('common.loading') }}</span>
              <span v-else>{{ $t('translate.translateButton') }}</span>
            </button>
          </form>
        </div>
        
        <!-- 加载指示器 -->
        <LoadingIndicator v-if="isLoading" :text="$t('common.translatingName')" />
        
        <div v-if="results.length" class="results-section">
          <h2>{{ $t('translate.results.title') }}</h2>
          
          <div class="results-grid">
            <div v-for="(result, index) in results" :key="index" class="result-card">
              <div class="result-header">
                <div class="result-characters">{{ result.characters }}</div>
                <div class="result-pinyin">{{ result.pinyin }}</div>
              </div>
              
              <div class="result-details">
                <div class="result-item">
                  <h4>{{ $t('translate.results.meaning') }}</h4>
                  <p>{{ result.meaning }}</p>
                </div>
                
                <div class="result-item">
                  <h4>{{ $t('translate.results.pronunciation') }}</h4>
                  <button class="play-button" @click="playPronunciation(result.characters)">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </button>
                </div>
              </div>
              
              <div class="result-actions">
                <button class="action-button copy" @click="copyToClipboard(result.characters)">
                  {{ $t('common.copy') }}
                </button>
                <button class="action-button share" @click="shareResult(result)">
                  {{ $t('common.share') }}
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
import { sendAIRequest, parseAIResponse } from '@/services/aiService';
import { nameTranslationPrompts } from '@/services/promptTemplates';
import { nameTranslationSystemPrompt } from '@/config/systemPrompts';
import LoadingIndicator from '@/components/LoadingIndicator.vue';
import aiConfig from '@/config/aiConfig';

export default {
  name: 'TranslateName',
  components: {
    LoadingIndicator
  },
  data() {
    return {
      formData: {
        fullName: '',
        gender: 'male' // 默认性别，可以在后续增加更多功能时使用
      },
      isLoading: false,
      results: []
    }
  },
  methods: {
    async translateName() {
      if (!this.formData.fullName) {
        alert(this.$t('translate.errors.fullNameRequired'));
        return;
      }
      
      this.isLoading = true;
      
      try {
        // 获取当前语言
        const locale = localStorage.getItem('locale') || 'zh';
        
        // 获取对应语言的提示词模板
        const promptTemplate = nameTranslationPrompts[locale] || nameTranslationPrompts.zh;
        
        // 分离全名中的名和姓
        const nameParts = this.splitName(this.formData.fullName);
        const requestParams = {
          firstName: nameParts.firstName,
          lastName: nameParts.lastName || '',
          gender: this.formData.gender
        };
        
        // 构建请求参数 (使用chat completion格式)
        const requestBody = {
          model: aiConfig.models.translation,
          messages: [
            {
              role: "system",
              content: nameTranslationSystemPrompt
            },
            {
              role: "user",
              content: promptTemplate(requestParams)
            }
          ],
          temperature: aiConfig.temperatures.translation,
          max_tokens: 800
        };
        
        // 直接调用AI接口
        const response = await fetch(aiConfig.baseConfig.apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': aiConfig.baseConfig.apiKey
          },
          body: JSON.stringify(requestBody)
        });
        
        if (!response.ok) {
          throw new Error(`AI请求失败，状态码: ${response.status}`);
        }
        
        const responseData = await response.json();
        console.log('AI响应:', responseData);
        
        // 从AI响应中提取内容
        let aiContent = '';
        if (responseData.choices && responseData.choices.length > 0) {
          aiContent = responseData.choices[0].message?.content || responseData.choices[0].text || '';
        }
        
        // 尝试从AI响应中提取JSON
        const extractedData = this.extractJsonFromText(aiContent);
        if (extractedData && extractedData.results && Array.isArray(extractedData.results)) {
          this.results = extractedData.results;
        } else {
          // 如果无法解析JSON，尝试使用结构化提取
          const structuredData = this.extractStructuredData(aiContent);
          if (structuredData && structuredData.length > 0) {
            this.results = structuredData;
          } else {
            // 使用后备数据
            this.results = this.getFallbackResults();
          }
        }
      } catch (error) {
        console.error('名字翻译错误:', error);
        // 使用后备数据
        this.results = this.getFallbackResults();
      } finally {
        this.isLoading = false;
      }
    },
    
    // 分离全名中的姓和名
    splitName(fullName) {
      // 移除多余空格
      const cleanName = fullName.trim().replace(/\s+/g, ' ');
      
      // 检查是否有空格分隔
      if (cleanName.includes(' ')) {
        const parts = cleanName.split(' ');
        // 假设最后一个部分是姓，前面所有的是名
        const lastName = parts[parts.length - 1];
        const firstName = parts.slice(0, parts.length - 1).join(' ');
        return { firstName, lastName };
      }
      
      // 如果没有空格，将整个输入视为名
      return { firstName: cleanName, lastName: '' };
    },
    
    // 从非结构化文本中提取名字数据
    extractStructuredData(text) {
      try {
        const results = [];
        // 移除markdown格式
        text = text.replace(/```[a-z]*\n|```/g, '');
        
        // 尝试匹配名字模式
        const nameMatches = text.match(/[\u4e00-\u9fa5]{2,3}[（(][\w\s]+[)）]/g) || [];
        const meaningMatches = text.match(/含义[:：]([^\n]+)/g) || [];
        
        for (let i = 0; i < Math.min(nameMatches.length, 3); i++) {
          const nameMatch = nameMatches[i].match(/([\u4e00-\u9fa5]{2,3})[（(]([\w\s]+)[)）]/);
          const meaning = meaningMatches[i] ? meaningMatches[i].replace(/含义[:：]\s*/, '') : '';
          
          if (nameMatch) {
            results.push({
              characters: nameMatch[1],
              pinyin: nameMatch[2],
              meaning: meaning || `${nameMatch[1]}是一个音译优美的中文名字`,
              pronunciationSimilarity: 8
            });
          }
        }
        
        return results;
      } catch (error) {
        console.error('结构化提取失败:', error);
        return null;
      }
    },
    
    // 从文本中提取JSON数据
    extractJsonFromText(text) {
      try {
        const jsonMatch = text.match(/```json\n([\s\S]*?)\n```/) || 
                          text.match(/```([\s\S]*?)```/);
        
        if (jsonMatch && jsonMatch[1]) {
          return JSON.parse(jsonMatch[1]);
        }
        return null;
      } catch (error) {
        console.error('解析JSON失败:', error);
        return null;
      }
    },
    
    // 获取后备结果数据
    getFallbackResults() {
      // 分离全名中的姓和名
      const nameParts = this.splitName(this.formData.fullName);
      const lastName = nameParts.lastName || '李';
      const firstName = nameParts.firstName || '';
      
      // 根据名字首字母和性别生成简单的示例翻译
      let results = [];
      
      if (firstName.toLowerCase().startsWith('j')) {
        results.push({
          characters: lastName + '杰',
          pinyin: this.getSurnamePinyin(lastName) + ' Jié',
          meaning: '杰(jié)意为"杰出、优秀"，象征卓越的才能和成就。',
          pronunciationSimilarity: 8
        });
      }
      
      if (firstName.toLowerCase().startsWith('m')) {
        results.push({
          characters: lastName + '明',
          pinyin: this.getSurnamePinyin(lastName) + ' Míng',
          meaning: '明(míng)意为"明亮、光明"，象征光明磊落的品格和智慧。',
          pronunciationSimilarity: 7
        });
      }
      
      if (firstName.toLowerCase().startsWith('l')) {
        results.push({
          characters: lastName + '立',
          pinyin: this.getSurnamePinyin(lastName) + ' Lì',
          meaning: '立(lì)意为"独立、坚定"，象征坚强的个性和独立的精神。',
          pronunciationSimilarity: 9
        });
      }
      
      // 确保至少有三个结果
      if (results.length < 3) {
        results.push({
          characters: lastName + '安',
          pinyin: this.getSurnamePinyin(lastName) + ' Ān',
          meaning: '安(ān)意为"平安、安宁"，象征平安幸福的生活。',
          pronunciationSimilarity: 6
        });
      }
      
      if (results.length < 3) {
        results.push({
          characters: lastName + '德',
          pinyin: this.getSurnamePinyin(lastName) + ' Dé',
          meaning: '德(dé)意为"道德、品德"，象征高尚的品德和修养。',
          pronunciationSimilarity: 5
        });
      }
      
      return results.slice(0, 3);
    },
    
    // 获取姓氏拼音
    getSurnamePinyin(surname) {
      const pinyinMap = {
        '李': 'Lǐ',
        '王': 'Wáng',
        '张': 'Zhāng',
        '刘': 'Liú',
        '陈': 'Chén',
        '杨': 'Yáng',
        '赵': 'Zhào',
        '黄': 'Huáng',
        '周': 'Zhōu',
        '吴': 'Wú'
      };
      
      return pinyinMap[surname] || 'Lǐ';
    },
    
    playPronunciation(characters) {
      // 未来实现: 接入文字转语音API
      console.log(`播放发音: ${characters}`);
      alert(`播放发音: ${characters}`);
      
      // 示例实现方向:
      // 1. 调用语音合成API（如百度、讯飞等）
      // 2. 播放返回的音频
    },
    
    copyToClipboard(text) {
      navigator.clipboard.writeText(text).then(() => {
        alert(this.$t('common.copied'));
      });
    },
    
    shareResult(result) {
      // 构建分享文本
      const shareText = `我的中文名字是 ${result.characters} (${result.pinyin})`;
      
      // 检查 Web Share API 是否可用
      if (navigator.share) {
        navigator.share({
          title: this.$t('translate.shareTitle'),
          text: shareText,
          url: window.location.href
        })
        .catch((error) => console.log('分享失败:', error));
      } else {
        // 后备选项
        alert(`分享: ${shareText}`);
      }
    }
  }
}
</script>

<style scoped>
.translate-page {
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

.form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
}

.form-group.fullWidth {
  width: 100%;
}

.form-group label {
  margin-bottom: 10px;
  font-weight: 500;
  color: #555;
  font-size: 1.05rem;
}

.form-input {
  padding: 15px 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  background-color: #f9f9f9;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05) inset;
}

.form-input:focus {
  outline: none;
  border-color: #e60012;
  box-shadow: 0 0 0 3px rgba(230, 0, 18, 0.1), 0 1px 3px rgba(0, 0, 0, 0.05) inset;
  background-color: #fff;
}

.form-input::placeholder {
  color: #aaa;
  font-style: italic;
}

.submit-button {
  background-color: #e60012;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 15px 25px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: block;
  width: 100%;
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(230, 0, 18, 0.2);
  height: 55px;
}

.submit-button:hover {
  background-color: #d00010;
  transform: translateY(-3px);
  box-shadow: 0 6px 15px rgba(230, 0, 18, 0.3);
}

.submit-button:active {
  transform: translateY(-1px);
}

/* 加载动画样式 */
.submit-button span {
  position: relative;
  z-index: 2;
}

@keyframes loading-dots {
  0%, 20% {
    content: "...";
    opacity: 0.3;
  }
  40% {
    content: "...";
    opacity: 0.6;
  }
  60% {
    content: "...";
    opacity: 0.9;
  }
  80%, 100% {
    content: "...";
    opacity: 1;
  }
}

.submit-button span[v-if="isLoading"]::after {
  content: "";
  display: inline-block;
  width: 1em;
  animation: loading-dots 1.5s infinite;
}

@keyframes button-pulse {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.7;
  }
  100% {
    opacity: 1;
  }
}

.submit-button.loading {
  animation: button-pulse 1.5s infinite;
  cursor: wait;
}

.results-section {
  margin-top: 30px;
}

.results-section h2 {
  font-size: 1.8rem;
  color: #333;
  margin-bottom: 30px;
}

.results-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
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

.result-header {
  background-color: #f8f9fa;
  padding: 20px;
  text-align: center;
  border-bottom: 1px solid #eee;
}

.result-characters {
  font-size: 2.5rem;
  font-weight: 600;
  color: #e60012;
  margin-bottom: 10px;
}

.result-pinyin {
  font-size: 1.2rem;
  color: #666;
}

.result-details {
  padding: 20px;
}

.result-item {
  margin-bottom: 15px;
}

.result-item h4 {
  font-size: 1rem;
  color: #555;
  margin-bottom: 8px;
}

.result-item p {
  margin: 0;
  color: #333;
  line-height: 1.6;
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

@media (max-width: 768px) {
  .page-title {
    font-size: 2rem;
  }
  
  .translate-page {
    padding: 70px 0;
  }
}
</style> 