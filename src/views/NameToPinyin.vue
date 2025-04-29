<template>
  <div class="name-to-pinyin-page">
    <div class="content">
      <div class="container">
        <h1 class="page-title">{{ $t('nameToPinyin.title') }}</h1>
        
        <div class="main-content">
          <div class="form-section">
            <form @submit.prevent="convertToPinyin">
              <div class="form-group">
                <label for="chineseName">{{ $t('nameToPinyin.chineseName') }}</label>
                <input 
                  type="text" 
                  id="chineseName" 
                  v-model="formData.chineseName" 
                  required
                  class="form-input"
                  placeholder="张伟"
                />
              </div>
              
              <button type="submit" class="submit-button">
                <span v-if="isLoading">{{ $t('common.loading') }}</span>
                <span v-else>{{ $t('nameToPinyin.convertButton') }}</span>
              </button>
            </form>
          </div>
          
          <div v-if="results.withTones" class="results-section">
            <h2 class="section-title">{{ $t('nameToPinyin.results.title') }}</h2>
            
            <div class="results-card">
              <!-- 拼音结果区域 -->
              <div class="pinyin-results">
                <div class="results-row">
                  <!-- 删除标准拼音结果项 -->
                  <div class="result-item">
                    <h3>
                      <span class="result-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                        </svg>
                      </span>
                      {{ $t('nameToPinyin.results.withTones') }}
                    </h3>
                    <div class="result-value">{{ results.withTones }}</div>
                    <button class="mini-action copy-btn" @click="copyToClipboard(results.withTones)" title="复制带声调拼音">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              
              <!-- 发音指南区域 -->
              <div class="pronunciation-section">
                <h3>
                  <span class="result-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                      <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                    </svg>
                  </span>
                  {{ $t('nameToPinyin.results.pronunciation') }}
                </h3>
                
                <div class="pronunciation-guide">
                  <div v-for="(char, index) in formData.chineseName" :key="index" class="char-item">
                    <div class="chinese-char">{{ char }}</div>
                    <div class="pinyin">{{ results.characters[index]?.pinyin }}</div>
                    <button class="play-button small" @click="playPronunciation(char)" title="播放单字发音">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              
              <!-- 操作按钮区域 -->
              <div class="action-buttons">
                <button class="action-button primary" @click="playFullPronunciation()">
                  <span class="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span>
                  {{ $t('nameToPinyin.playFullName') }}
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
import { ref, reactive, computed, onMounted } from 'vue';
import axios from 'axios';
import { useI18n } from 'vue-i18n';
import * as pinyinPro from 'pinyin-pro';
import { message } from "ant-design-vue";

export default {
  setup() {
    const { t } = useI18n();
    const formData = ref({
      chineseName: ''
    });
    const isLoading = ref(false);
    const results = ref({
      withTones: '',
      characters: []
    });
    const audioContext = ref(null);
    const audioUrl = ref('');

    onMounted(() => {
      window.scrollTo(0, 0);
      // 初始化音频上下文
      if (window.AudioContext || window.webkitAudioContext) {
        audioContext.value = new (window.AudioContext || window.webkitAudioContext)();
      }
    });

    const convertToPinyin = () => {
      if (!formData.value.chineseName) return;
      
      isLoading.value = true;
      
      setTimeout(() => {
        try {
          const pinyinWithTone = pinyinPro.pinyin(formData.value.chineseName, {
            toneType: "symbol",
            type: "array",
            separator: " "
          });
          
          const pronunciation = [];
          for (const char of formData.value.chineseName) {
            const charPinyin = pinyinPro.pinyin(char, {
              toneType: "symbol",
              type: "array"
            });
            pronunciation.push({
              char,
              pinyin: charPinyin[0]
            });
          }
          
          results.value = {
            withTones: pinyinWithTone,
            characters: pronunciation
          };
          
          // 生成并预缓存发音
          generatePronunciation();
          
          isLoading.value = false;
        } catch (error) {
          console.error('转换拼音时出错:', error);
          message.error("转换拼音时出错，请重试");
          isLoading.value = false;
        }
      }, 500);
    };

    // 单个字符发音
    const playPronunciation = (char) => {
      if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(char);
        utterance.lang = "zh-CN";
        speechSynthesis.speak(utterance);
      } else {
        message.warning("您的浏览器不支持语音合成");
      }
    };
    
    // 完整名字发音
    const playFullPronunciation = () => {
      if ('speechSynthesis' in window) {
        // 停止之前可能正在播放的语音
        window.speechSynthesis.cancel();
        
        const utterance = new SpeechSynthesisUtterance(formData.value.chineseName);
        utterance.lang = "zh-CN";
        utterance.rate = 0.8; // 稍微放慢速度，使发音更清晰
        
        speechSynthesis.speak(utterance);
      } else {
        message.warning("您的浏览器不支持语音合成");
      }
    };
    
    // 生成语音数据用于下载
    const generatePronunciation = async () => {
      try {
        if (!audioContext.value) return;
        
        // 这里使用实际的TTS API，示例使用一个模拟请求
        // 实际项目中，这里应该调用真实的语音合成API
        // 例如百度云、阿里云、讯飞等提供的TTS服务
        
        // 模拟API调用成功返回
        // 在实际项目中，这部分代码需要替换为真实的API调用
        /*
        const response = await axios.post('https://your-tts-api.com/synthesize', {
          text: formData.value.chineseName,
          language: 'zh-CN',
          format: 'mp3'
        });
        
        audioUrl.value = response.data.audioUrl;
        */
        
        // 由于这里缺少实际的TTS API，使用Web Speech API作为替代方案
        // 这只是一个示范，不能实际下载MP3
        audioUrl.value = 'data:audio/mp3;base64,MOCK_AUDIO_DATA';
      } catch (error) {
        console.error('生成语音数据时出错:', error);
      }
    };
    
    // 下载发音MP3
    const downloadPronunciation = () => {
      // 实际项目中，这里应该提供真实的MP3下载链接
      if (audioUrl.value) {
        /* 有真实音频URL时可以启用这段代码
        const a = document.createElement('a');
        a.href = audioUrl.value;
        a.download = `${formData.value.chineseName}_pronunciation.mp3`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        */
        
        // 由于没有实际的音频URL，显示一个提示
        message.info("功能开发中：将支持下载MP3发音文件");
      } else {
        // 使用替代方案，提示用户使用发音播放功能
        message.info("正在准备语音文件，请稍后再试或使用在线播放功能");
      }
    };

    const copyToClipboard = (text) => {
      navigator.clipboard.writeText(text)
        .then(() => {
          message.success("已复制到剪贴板");
        })
        .catch(() => {
          message.error("复制失败，请手动复制");
        });
    };

    return {
      formData,
      isLoading,
      results,
      convertToPinyin,
      playPronunciation,
      playFullPronunciation,
      downloadPronunciation,
      copyToClipboard
    };
  }
}
</script>

<style scoped>
.name-to-pinyin-page {
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
  font-weight: 700;
}

.content {
  display: flex;
  flex-direction: column;
  gap: 50px;
}

.main-content {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.form-section {
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
  padding: 30px;
  transition: all 0.3s ease;
}

.form-group {
  margin-bottom: 25px;
}

.form-group label {
  display: block;
  margin-bottom: 10px;
  font-weight: 600;
  color: #333;
  font-size: 1.1rem;
}

.form-input {
  width: 100%;
  padding: 14px 18px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  background-color: #f9f9fa;
}

.form-input:focus {
  outline: none;
  border-color: #e60012;
  box-shadow: 0 0 0 3px rgba(230, 0, 18, 0.15);
  background-color: #fff;
}

.submit-button {
  background-color: #e60012;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 14px 25px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: block;
  width: 100%;
  box-shadow: 0 4px 10px rgba(230, 0, 18, 0.2);
  position: relative;
  overflow: hidden;
}

.submit-button:hover {
  background-color: #d00010;
  transform: translateY(-2px);
  box-shadow: 0 6px 15px rgba(230, 0, 18, 0.3);
}

.submit-button:active {
  transform: translateY(0);
  box-shadow: 0 2px 5px rgba(230, 0, 18, 0.2);
}

.results-section {
  margin-top: 10px;
}

.section-title {
  font-size: 1.8rem;
  color: #333;
  margin-bottom: 25px;
  text-align: center;
  position: relative;
  font-weight: 700;
}

.section-title:after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 3px;
  background-color: #e60012;
  border-radius: 2px;
}

.results-card {
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.pinyin-results {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.results-row {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  width: 100%;
}

.result-item {
  position: relative;
  background-color: #f8f9fa;
  border-radius: 10px;
  padding: 20px;
  border-left: 4px solid #e60012;
  transition: all 0.3s ease;
  flex: 1;
  width: 100%;
  min-width: 250px;
}

.result-item:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transform: translateY(-2px);
}

.result-item h3 {
  display: flex;
  align-items: center;
  font-size: 1.1rem;
  color: #333;
  margin-bottom: 15px;
  font-weight: 600;
}

.result-icon {
  display: inline-flex;
  margin-right: 8px;
  color: #e60012;
}

.result-icon svg {
  width: 20px;
  height: 20px;
}

.result-value {
  font-size: 1.4rem;
  color: #333;
  padding: 5px 0;
  font-family: 'Segoe UI', Arial, sans-serif;
  letter-spacing: 0.5px;
}

.mini-action {
  position: absolute;
  top: 15px;
  right: 15px;
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  border-radius: 50%;
  transition: all 0.2s ease;
}

.mini-action svg {
  width: 18px;
  height: 18px;
  color: #666;
}

.mini-action:hover {
  background-color: #e6e6e6;
}

.mini-action:hover svg {
  color: #e60012;
}

.pronunciation-section {
  margin-top: 10px;
}

.pronunciation-section h3 {
  display: flex;
  align-items: center;
  font-size: 1.1rem;
  color: #333;
  margin-bottom: 20px;
  font-weight: 600;
}

.pronunciation-guide {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;
  margin-bottom: 25px;
}

.char-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border-radius: 10px;
  padding: 15px;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  min-width: 100px;
}

.char-item:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.12);
}

.chinese-char {
  font-size: 2.5rem;
  margin-bottom: 10px;
  color: #333;
}

.pinyin {
  font-size: 1.1rem;
  color: #666;
  margin-bottom: 10px;
  font-weight: 500;
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
  transition: all 0.3s ease;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.play-button.small {
  width: 36px;
  height: 36px;
}

.play-button:hover {
  background-color: #e60012;
  transform: scale(1.1);
}

.play-button svg {
  width: 20px;
  height: 20px;
  color: #333;
  transition: color 0.3s ease;
}

.play-button:hover svg {
  color: white;
}

.action-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;
  margin-top: 10px;
}

.action-button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border: none;
  border-radius: 8px;
  padding: 14px 25px;
  font-size: 1.05rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  min-width: 200px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  flex: 1;
}

.action-button.primary {
  background-color: #3b82f6;
  color: white;
}

.action-button.primary:hover {
  background-color: #2563eb;
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(59, 130, 246, 0.3);
}

.action-button.download {
  background-color: #10b981;
  color: white;
}

.action-button.download:hover {
  background-color: #059669;
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(16, 185, 129, 0.3);
}

.action-button .icon {
  display: flex;
  align-items: center;
}

.action-button .icon svg {
  width: 20px;
  height: 20px;
}

@media (max-width: 768px) {
  .name-to-pinyin-page {
    padding: 70px 0;
  }
  
  .page-title {
    font-size: 2rem;
  }
  
  .action-buttons {
    flex-direction: column;
  }
  
  .action-button {
    width: 100%;
  }
  
  .char-item {
    min-width: 80px;
    padding: 10px;
  }
  
  .chinese-char {
    font-size: 2rem;
  }
  
  .result-value {
    font-size: 1.2rem;
  }
}
</style> 