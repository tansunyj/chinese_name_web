<template>
  <div class="chinese-to-english-page">
    <div class="container">
      <h1 class="page-title">Chinese to English Name Translator | Convert Chinese Names to English</h1>
      
      <div class="seo-intro">
        <p class="seo-description">Translate Chinese names to English with our professional Chinese to English name translation tool. Get accurate English translations of Chinese names with proper pronunciation and cultural meaning. Our free Chinese to English name converter helps you understand the cultural significance behind Chinese names and find the perfect English equivalent. Convert Chinese name to English name easily with our advanced name translation technology.</p>
      </div>
      
      <div class="content">
        <div class="form-section">
          <form @submit.prevent="translateName">
            <div class="form-group fullWidth">
              <label for="chineseName">Enter Your Chinese Name to Translate to English</label>
              <input 
                type="text" 
                id="chineseName" 
                v-model="formData.chineseName" 
                required
                class="form-input"
                placeholder="输入中文名字..."
                aria-label="Your Chinese name to translate to English"
              />
            </div>
            
            <button type="submit" class="submit-button" :class="{ 'loading': isLoading }">
              <span v-if="isLoading">{{ $t('common.loading') }}</span>
              <span v-else>Convert Chinese Name to English</span>
            </button>
          </form>
        </div>
        
                <!-- 加载指示器 -->
        <MysticalLoader v-if="isLoading" />

        <!-- 结果显示区域 -->
        <div v-if="results.length" class="results-section">
          <h2>Your Chinese to English Name Translation Results</h2>
          
          <div class="results-grid">
            <div class="result-card" v-for="(result, index) in results" :key="index">
              <div class="result-header">
                <div class="result-original">{{ formData.chineseName }}</div>
                <!--div class="result-pinyin">{{ result.pronunciation }}</div-->
              </div>
              <div class="result-english">
                <h3>English Translation: {{ result.translated_name }}</h3>
              </div>
              <div class="result-details">
                <div class="result-item">
                  <h4>Character Meanings</h4>
                  <p>{{ result.explanation }}</p>
                </div>
                <div class="result-item" v-if="result.cultural">
                  <h4>Cultural Context</h4>
                  <p>{{ result.cultural }}</p>
                </div>
              </div>
              <div class="action-buttons">
                <button 
                  class="action-btn" 
                  @click.prevent="copyToClipboard(result.translated_name)"
                  type="button"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2">
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                  </svg>
                  Copy English Name
                </button>
              </div>
            </div>
          </div>
        </div>
        
        
        <!-- 使用指南 -->
        <UsageGuide 
          title="Chinese to English Name Translation Guide"
          :steps="usageSteps"
        />
        
        <!-- Explore More 组件 -->
        <ExploreMore :currentPath="$route.path" />
                
        <div class="translation-guide">
          <h2>How Our Chinese to English Name Translation Works</h2>
          <p>Our Chinese to English name translation service uses advanced linguistic analysis to convert Chinese names into appropriate English equivalents. We focus on preserving both the meaning and phonetic qualities of the original Chinese name when creating an English translation.</p>
          
          <h3>The Chinese to English Name Translation Process</h3>
          <ol>
            <li><strong>Character Analysis</strong> - We analyze each Chinese character in your name to understand its meaning and cultural significance.</li>
            <li><strong>Phonetic Conversion</strong> - We determine how your Chinese name sounds when pronounced correctly to create a phonetically accurate English version.</li>
            <li><strong>Meaning Preservation</strong> - We find English names or words that capture the essence and meaning of your Chinese name.</li>
            <li><strong>Cultural Context</strong> - We provide explanations of the cultural significance behind your Chinese name to enhance understanding.</li>
          </ol>
          
          <div class="benefits-section">
            <h3>Benefits of Using Our Chinese Name to English Converter</h3>
            <ul>
              <li><strong>Accuracy</strong> - Our translation system understands the nuances of Chinese characters and their meanings.</li>
              <li><strong>Cultural Sensitivity</strong> - We preserve the cultural significance of your Chinese name in its English translation.</li>
              <li><strong>Multiple Options</strong> - Get several English name alternatives based on different translation approaches.</li>
              <li><strong>Detailed Explanations</strong> - Understand the meaning behind each character in your Chinese name.</li>
              <li><strong>Easy to Use</strong> - Simply enter your Chinese name and get instant English translations.</li>
            </ul>
          </div>
          
          <h3>Why Chinese to English Name Translation Matters</h3>
          <p>Chinese names are rich with meaning and cultural significance. Each character is carefully chosen for its sound and meaning. Our Chinese name to English translation service helps bridge cultural gaps by making Chinese names more accessible to English speakers while preserving their original essence.</p>
          
          <h3>Common Questions About Chinese to English Name Translation</h3>
          
          <div class="faq-section">
            <div class="faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
              <h4 itemprop="name">How are Chinese names structured compared to English names?</h4>
              <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                <p itemprop="text">Traditional Chinese names typically consist of a family name (surname) followed by a given name. The family name is usually one character, while the given name can be one or two characters. For example, in the name "Wang Wei," "Wang" is the family name and "Wei" is the given name. This is the opposite of English names, where the given name comes first followed by the surname. When converting Chinese names to English, this structure is often maintained to preserve cultural authenticity.</p>
              </div>
            </div>
            
            <div class="faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
              <h4 itemprop="name">Can all Chinese names be translated to English accurately?</h4>
              <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                <p itemprop="text">While all Chinese names can be transliterated (writing the sounds using English letters), capturing the exact meaning and cultural nuance in an English name can be challenging. Our Chinese to English name translator provides both transliteration and meaning-based translations to give you a complete understanding. Some Chinese characters have meanings that don't directly correspond to English concepts, so our translator offers the closest possible equivalents while explaining any cultural nuances that might be lost in translation.</p>
              </div>
            </div>
            
            <div class="faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
              <h4 itemprop="name">How do I choose an English name that reflects my Chinese name?</h4>
              <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                <p itemprop="text">The best approach is to consider both the sound and meaning of your Chinese name. Our Chinese name to English converter provides suggestions based on phonetic similarity, meaning equivalence, or a combination of both, allowing you to choose the option that feels most authentic to you. For professional or academic contexts, a phonetic translation that sounds natural in English while preserving your name's essence often works best. For more casual situations, you might prefer an English name that captures the meaning of your Chinese name.</p>
              </div>
            </div>
            
            <div class="faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
              <h4 itemprop="name">What's the difference between transliteration and translation of Chinese names?</h4>
              <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                <p itemprop="text">Transliteration converts Chinese characters to English letters based on pronunciation, like "Li Wei" for "李伟". Translation focuses on meaning, converting "李伟" to "Strong Plum" based on character meanings. Our Chinese name to English name translator provides both approaches to give you a complete understanding of your Chinese name. For professional use, transliteration is generally preferred as it maintains your identity while being accessible to English speakers.</p>
              </div>
            </div>
            
            <div class="faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
              <h4 itemprop="name">Why do Chinese people sometimes adopt English names?</h4>
              <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                <p itemprop="text">Many Chinese people adopt English names to make it easier for non-Chinese speakers to address them, particularly in international business, education, or when living abroad. Having an English name can facilitate communication and create cultural connections in global contexts. Some choose English names that sound similar to their Chinese names, while others select names based on meaning or personal preference. Our Chinese to English name converter can help find appropriate English equivalents that maintain connection to the original Chinese name.</p>
              </div>
            </div>
            
            <div class="faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
              <h4 itemprop="name">How do different Chinese dialects affect name translation to English?</h4>
              <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                <p itemprop="text">Chinese has many dialects including Mandarin, Cantonese, Shanghainese, and others. Each dialect pronounces the same characters differently, which affects how names are transliterated into English. Our Chinese name to English translation tool primarily uses Mandarin (Standard Chinese) pronunciation as it's the most widely spoken dialect. However, if you prefer your name translated based on another dialect, you can specify this in your translation request, and we'll provide alternatives based on that dialect's pronunciation.</p>
              </div>
            </div>
            
            <div class="faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
              <h4 itemprop="name">Is it better to use pinyin or Wade-Giles for Chinese to English name conversion?</h4>
              <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                <p itemprop="text">Pinyin is the modern standard romanization system for Mandarin Chinese and is generally preferred for contemporary Chinese to English name translation. Wade-Giles is an older system still found in some historical contexts and in Taiwan. Our converter primarily uses pinyin for transliteration as it's more widely recognized and used internationally. For example, "李" would be "Li" in pinyin but "Lee" in Wade-Giles. Most modern Chinese name to English translations use pinyin for consistency and clarity.</p>
              </div>
            </div>
            
            <div class="faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
              <h4 itemprop="name">How should I format my Chinese name in English for official documents?</h4>
              <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                <p itemprop="text">For official documents, it's generally recommended to use the pinyin transliteration of your Chinese name, maintaining the traditional Chinese order (surname first, then given name). For example, "张伟" would be "Zhang Wei". Some people choose to adopt Western name order (given name first, then surname) to avoid confusion, writing it as "Wei Zhang". Our Chinese to English name converter provides both formats, allowing you to choose the one that best suits your needs for different contexts.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { message } from 'ant-design-vue';
import { translateName } from '@/services/openaiService';
import MysticalLoader from '@/components/MysticalLoader.vue';
import UsageGuide from '@/components/UsageGuide.vue';
import ExploreMore from '@/components/ExploreMore.vue';
import { useI18n } from 'vue-i18n';
import { chineseToEnglishNamePrompt } from '@/config/systemPrompts';
import aiConfig from '@/config/aiConfig';

// 判断当前是否为开发环境
const isDevelopment = process.env.NODE_ENV === 'development';

// 定义日志函数，只在开发环境中输出
const log = (...args) => {
  if (isDevelopment) {
    console.log(...args);
  }
};

export default {
  name: 'ChineseToEnglishName',
  components: {
    MysticalLoader,
    UsageGuide,
    ExploreMore
  },
  setup() {
    const { locale } = useI18n();
    
    // 结构化数据脚本引用
    let structuredDataScript = null;
    
    // 在组件挂载后添加结构化数据
    onMounted(() => {
      addStructuredData();
    });
    
    // 在组件卸载前移除结构化数据
    onBeforeUnmount(() => {
      if (structuredDataScript && structuredDataScript.parentNode) {
        structuredDataScript.parentNode.removeChild(structuredDataScript);
      }
    });
    
    // 添加结构化数据到head
    const addStructuredData = () => {
      const structuredData = {
        "@context": "https://schema.org",
        "@type": "WebApplication",
        "name": "Chinese to English Name Translator",
        "url": "https://chinesename.us/chinese-to-english-translator",
        "applicationCategory": "UtilityApplication",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        },
        "description": "Translate Chinese names to English with our professional name translation tool. Get accurate English translations of Chinese names with proper pronunciation and meaning."
      };
      
      // 创建script元素
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(structuredData);
      
      // 添加到head
      document.head.appendChild(script);
      
      // 保存引用以便在组件卸载时移除
      structuredDataScript = script;
    };
    
    return { locale };
  },
  data() {
    return {
      formData: {
        chineseName: ''
      },
      isLoading: false,
      results: [],
      errorMessage: '',
      // 使用指南步骤
      usageSteps: [
        {
          title: 'Enter Chinese Name',
          description: 'Type your complete Chinese name'
        },
        {
          title: 'Press the Button',
          description: 'Press the "Convert Chinese Name to English" button'
        },
        {
          title: 'Get English Name',
          description: 'Check the English Name in the results'
        }
      ]
    }
  },
  methods: {
    async translateName() {
      if (!this.formData.chineseName) {
        message.error(this.$t('translate.errors.emptyName'));
        return;
      }
      
      this.isLoading = true;
      this.results = [];
      
      try {
        // 使用新的类型化API直接发送请求
        const response = await fetch(aiConfig.baseConfig.proxyUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            type: 'chineseToEnglish',
            name: this.formData.chineseName,
            method: 'combined',
            locale: this.locale
          })
        });

        const responseData = await response.json();
        log('🔍 AI原始响应:', responseData);

        let parsedData = null;

        // 处理OpenAI的响应格式：提取choices[0].message.content中的JSON字符串
        if (responseData && responseData.choices && responseData.choices[0] && responseData.choices[0].message) {
          try {
            const contentString = responseData.choices[0].message.content;
            log('🎯 提取的content字符串:', contentString);

            // 解析JSON字符串
            parsedData = JSON.parse(contentString);
            log('✅ 解析后的JSON数据:', parsedData);
          } catch (parseError) {
            console.error('❌ 解析JSON失败:', parseError);
            // 解析失败时使用后备方案
            this.results = this.createFallbackResults();
            return;
          }
        }
        // 如果不是OpenAI格式，直接使用responseData
        else if (responseData && responseData.translations) {
          parsedData = responseData;
          log('📋 直接使用响应数据:', parsedData);
        }
        else {
          console.warn('⚠️ 响应数据格式不符合预期，使用后备方案');
          this.results = this.createFallbackResults();
          return;
        }

        // 处理标准格式的返回数据
        if (parsedData && parsedData.translations && Array.isArray(parsedData.translations)) {
          this.results = parsedData.translations.map(item => ({
            translated_name: item.english_name || '英文名字',
            pronunciation: parsedData.analysis?.pronunciation || this.generatePinyin(this.formData.chineseName),
            explanation: item.explanation || `${this.formData.chineseName}的英文翻译。每个汉字都有其独特的含义和文化背景。`,
            cultural: item.cultural_fit || '中文名字在中华文化中具有深厚的含义和历史传承。',
            score: item.score || 85
          }));
          
          log('✅ 处理后的结果:', this.results);
        } else {
          console.warn('⚠️ 没有找到有效的翻译数据，使用后备方案');
          this.results = this.createFallbackResults();
        }
      } catch (error) {
        console.error('翻译错误:', error);
        message.error(this.locale === 'zh' ? '翻译失败，请重试' : 'Translation failed, please try again');
      } finally {
        this.isLoading = false;
      }
    },
    
    async copyToClipboard(text) {
      console.log('Copying text:', text);
      
      if (!text) {
        // 使用alert作为备选方案，确保用户能看到提示
        alert(this.locale === 'zh' ? '没有可复制的内容' : 'No content to copy');
        return;
      }

      try {
        await navigator.clipboard.writeText(text);
        
        // 创建一个自定义的提示元素
        this.showCopyToast(this.locale === 'zh' ? '已复制英文名字到剪贴板' : 'English name copied to clipboard');
      } catch (err) {
        console.error('复制文本失败: ', err);
        
        // 降级方案：使用传统的复制方法
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        
        try {
          document.execCommand('copy');
          // 创建一个自定义的提示元素
          this.showCopyToast(this.locale === 'zh' ? '已复制英文名字到剪贴板' : 'English name copied to clipboard');
        } catch (e) {
          console.error('备用复制方法失败:', e);
          // 使用alert作为备选方案，确保用户能看到提示
          alert(this.locale === 'zh' ? '复制失败，请手动复制' : 'Copy failed, please copy manually');
        } finally {
          document.body.removeChild(textarea);
        }
      }
    },
    
    // 显示自定义Toast提示
    showCopyToast(message) {
      // 创建一个toast元素
      const toast = document.createElement('div');
      toast.textContent = message;
      toast.style.cssText = `
        position: fixed;
        top: 20%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: rgba(76, 175, 80, 0.9);
        color: white;
        padding: 12px 24px;
        border-radius: 4px;
        z-index: 9999;
        font-size: 16px;
        transition: opacity 0.3s ease-in-out;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
      `;
      
      // 添加到body
      document.body.appendChild(toast);
      
      // 2秒后淡出并移除
      setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => {
          document.body.removeChild(toast);
        }, 300);
      }, 2000);
    },
    
    handlePlayClick(result) {
      if (!result) {
        console.error('无法播放：结果对象为空');
        return;
      }
      
      // 使用英文翻译作为文本来播放
      const textToPlay = result.translate;
      
      if ('speechSynthesis' in window) {
        // 确保语音合成已准备就绪
        const checkVoices = () => {
          const voices = window.speechSynthesis.getVoices();
          if (voices.length > 0) {
            // 停止当前正在播放的语音
            window.speechSynthesis.cancel();
            
            // 创建新的语音对象
            const utterance = new SpeechSynthesisUtterance();
            
            // 查找英语声音
            let englishVoice = voices.find(voice => 
              voice.lang.includes('en-US') && voice.localService
            ) || voices.find(voice => 
              voice.lang.includes('en-US')
            ) || voices.find(voice => 
              voice.lang.includes('en-')
            );
            
            // 如果有英语声音，使用它
            if (englishVoice) {
              utterance.voice = englishVoice;
              utterance.lang = englishVoice.lang;
            } else {
              utterance.lang = 'en-US';
            }
            
            // 设置发音内容
            utterance.text = textToPlay;
            
            // 设置语音参数
            utterance.volume = 1;    // 音量: 0 到 1
            utterance.rate = 0.9;    // 语速: 0.1 到 10
            utterance.pitch = 1.0;   // 音调: 0 到 2
            
            // 添加事件处理
            utterance.onstart = () => {
              message.info(this.locale === 'zh' ? '开始播放...' : 'Playing...');
            };
            
            utterance.onend = () => {
              message.success(this.locale === 'zh' ? '播放完成' : 'Playback completed');
            };
            
            utterance.onerror = (event) => {
              console.error('语音合成错误:', event.error);
              message.error(this.locale === 'zh' ? '发音失败，请重试' : 'Pronunciation failed, please try again');
            };
            
            // 播放语音
            window.speechSynthesis.speak(utterance);
          } else {
            // 如果voices还没有加载完成，等待一段时间后重试
            setTimeout(checkVoices, 100);
          }
        };
        
        // 开始检查voices是否已加载
        checkVoices();
      } else {
        console.warn('当前浏览器不支持语音合成API');
        message.warning(this.locale === 'zh' ? '您的浏览器不支持语音合成' : 'Your browser does not support speech synthesis');
      }
    },
    
    // 创建后备结果（当API响应解析失败时使用）
    createFallbackResults() {
      const inputName = this.formData.chineseName;
      
      // 为常见中文名字提供一些智能英文名建议
      const commonTranslations = {
        '张三丰': [{ name: 'Samuel Zhang', explanation: '张三丰可以翻译为Samuel Zhang，Samuel在英文中是一个经典名字，含有"神听见"的意思，与张三丰的道教哲学相呼应。' }],
        '李明': [{ name: 'Michael Li', explanation: '李明可以翻译为Michael Li，Michael是一个广受欢迎的英文名，含有"谁像神"的意思，体现了明字的光明含义。' }],
        '王伟': [{ name: 'William Wang', explanation: '王伟可以翻译为William Wang，William是一个强有力的英文名，含有"坚定的保护者"之意，与伟字的伟大含义相契合。' }],
        '张伟': [{ name: 'David Zhang', explanation: '张伟可以翻译为David Zhang，David在英文中意为"挚爱的"，是一个经典而有力的名字，体现了伟字的宏伟气质。' }],
        '李静': [{ name: 'Grace Li', explanation: '李静可以翻译为Grace Li，Grace意为"优雅、恩典"，完美体现了静字的宁静优雅特质。' }]
      };
      
      // 如果有预设翻译，使用它
      if (commonTranslations[inputName]) {
        return commonTranslations[inputName].map(item => ({
          translated_name: item.name,
          pronunciation: this.generateEnglishPronunciation(item.name),
          explanation: item.explanation,
          cultural: '这个英文名字保持了中文名字的文化特色，同时便于英语使用者理解和发音。',
          score: 90
        }));
      }
      
      // 否则生成通用建议
      return [
        {
          translated_name: this.generatePhoneticTranslation(inputName),
          pronunciation: this.generateEnglishPronunciation(this.generatePhoneticTranslation(inputName)),
          explanation: this.locale === 'zh' 
            ? `${inputName}的音译英文名。这种翻译方式保持了原始中文名字的发音特色，同时适合国际使用场合。每个音节都对应相应的英文发音模式。`
            : `Phonetic English translation of ${inputName}. This translation preserves the original pronunciation while making it accessible to English speakers. Each syllable corresponds to English pronunciation patterns.`,
          cultural: this.locale === 'zh'
            ? '中文名字音译成英文是常见的国际化做法，既保持了原名的特色，又便于外国朋友称呼和记忆。'
            : 'Transliterating Chinese names into English is a common internationalization practice that preserves the original character while making it accessible to foreign friends.',
          score: 85
        },
        {
          translated_name: this.generateMeaningBasedTranslation(inputName),
          pronunciation: this.generateEnglishPronunciation(this.generateMeaningBasedTranslation(inputName)),
          explanation: this.locale === 'zh'
            ? `基于${inputName}含义的英文名建议。这种翻译方式注重传达中文名字的深层含义和文化内涵。`
            : `Meaning-based English name suggestion for ${inputName}. This translation focuses on conveying the deeper meaning and cultural connotations of the Chinese name.`,
          cultural: this.locale === 'zh'
            ? '意译的英文名字能够更好地传达中文名字的文化内涵和寓意，适合正式场合使用。'
            : 'Meaning-based English names better convey the cultural connotations and meanings of Chinese names, suitable for formal occasions.',
          score: 80
        }
      ];
    },
    
    // 简单的拼音生成器
    generatePinyin(chineseName) {
      // 这是一个简化的拼音映射，实际项目中可以使用更完善的拼音库
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
        '吴': 'Wú',
        '微': 'Wēi',
        '明': 'Míng',
        '华': 'Huá',
        '丽': 'Lì',
        '安': 'Ān',
        '雅': 'Yǎ',
        '慧': 'Huì'
      };
      
      return chineseName.split('').map(char => pinyinMap[char] || char).join(' ');
    },
    
    // 生成英文发音指南
    generateEnglishPronunciation(englishName) {
      // 简化版英文发音指南
      return englishName.replace(/([A-Z])/g, (match, letter, index) => {
        if (index === 0) return letter.toLowerCase();
        return ` ${letter.toLowerCase()}`;
      });
    },
    
    // 生成音译英文名
    generatePhoneticTranslation(chineseName) {
      // 简化的音译映射
      const phoneticMap = {
        '张': 'Zhang',
        '王': 'Wang', 
        '李': 'Li',
        '刘': 'Liu',
        '陈': 'Chen',
        '杨': 'Yang',
        '赵': 'Zhao',
        '黄': 'Huang',
        '周': 'Zhou',
        '吴': 'Wu',
        '三': 'San',
        '丰': 'Feng',
        '明': 'Ming',
        '华': 'Hua',
        '伟': 'Wei',
        '丽': 'Li',
        '安': 'An',
        '雅': 'Ya',
        '慧': 'Hui',
        '静': 'Jing',
        '文': 'Wen',
        '军': 'Jun',
        '强': 'Qiang',
        '涛': 'Tao',
        '鹏': 'Peng'
      };
      
      let result = '';
      for (let i = 0; i < chineseName.length; i++) {
        const char = chineseName[i];
        if (phoneticMap[char]) {
          result += phoneticMap[char];
          if (i < chineseName.length - 1) result += ' ';
        } else {
          result += char;
        }
      }
      
      return result || `${chineseName} (Phonetic)`;
    },
    
    // 生成基于含义的英文名
    generateMeaningBasedTranslation(chineseName) {
      // 简化的含义映射
      const meaningMap = {
        '明': 'Bright',
        '华': 'Splendid', 
        '伟': 'Great',
        '丽': 'Beautiful',
        '安': 'Peace',
        '雅': 'Elegant',
        '慧': 'Wise',
        '静': 'Serene',
        '文': 'Literary',
        '军': 'Strong',
        '强': 'Powerful',
        '涛': 'Wave',
        '鹏': 'Eagle',
        '三': 'Triple',
        '丰': 'Abundance'
      };
      
      let meanings = [];
      for (let i = 1; i < chineseName.length; i++) { // 跳过姓氏
        const char = chineseName[i];
        if (meaningMap[char]) {
          meanings.push(meaningMap[char]);
        }
      }
      
      if (meanings.length > 0) {
        return meanings.join(' ');
      }
      
      return `${chineseName} (Meaning-based)`;
    },
    

  }
}
</script>

<style scoped>
.chinese-to-english-page {
  padding: 40px 0 80px;
  background-color: #f8f9fa;
  min-height: 100vh;
}

.container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 20px;
}

.page-title {
  font-size: 2.2rem;
  color: #333;
  margin-bottom: 40px;
  margin-top: 70px;
  text-align: center;
}

.seo-intro {
  max-width: 800px;
  margin: 0 auto 2rem;
  text-align: center;
}

.seo-description {
  font-size: 1.1rem;
  line-height: 1.6;
  color: #555;
}

.content {
  display: flex;
  flex-direction: column;
  gap: 50px;
}

.form-section {
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
  padding: 40px;
  transition: all 0.3s ease;
  max-width: 1000px;
  margin: 0 auto 40px;
  width: 100%;
}

.form-group {
  margin-bottom: 25px;
  width: 100%;
}

.form-group.fullWidth {
  width: 100%;
}

label {
  display: block;
  margin-bottom: 10px;
  font-weight: 500;
  color: #444;
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
  width: 100%;
  box-sizing: border-box;
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

.submit-button.loading {
  animation: button-pulse 1.5s infinite;
  cursor: wait;
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

.results-section {
  margin-top: 30px;
  max-width: 1000px;
  margin: 30px auto 0;
}

.results-section h2 {
  font-size: 2rem;
  color: #333;
  margin-bottom: 40px;
  text-align: center;
}

.results-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  gap: 40px;
  max-width: 1600px;
  margin: 0 auto;
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
  padding: 35px;
  text-align: center;
  border-bottom: 1px solid #eee;
}

.result-original {
  font-size: 4rem;
  font-weight: 600;
  color: #e60012;
  margin-bottom: 15px;
}

.result-pinyin {
  font-size: 1.5rem;
  color: #666;
}

.result-english {
  padding: 25px 35px;
  border-bottom: 1px solid #eee;
  background-color: #fff;
}

.result-english h3 {
  font-size: 1.4rem;
  color: #333;
  margin: 0;
  font-weight: 600;
}

.result-details {
  padding: 35px;
}

.result-item {
  margin-bottom: 20px;
}

.result-item:last-child {
  margin-bottom: 0;
}

.result-item h4 {
  font-size: 1.1rem;
  color: #555;
  margin-bottom: 10px;
  font-weight: 600;
}

.result-item p {
  margin: 0;
  color: #333;
  line-height: 1.7;
  font-size: 1.05rem;
}

.action-buttons {
  display: flex;
  padding: 10px 20px;
  justify-content: center;
  background-color: #f9f9f9;
  border-top: 1px solid #eee;
}

.action-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 20px;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  color: #555;
  font-size: 0.95rem;
  cursor: pointer;
  transition: all 0.2s ease;
  font-weight: 500;
}

.action-btn:hover {
  background-color: #f0f0f0;
  border-color: #ccc;
  transform: translateY(-2px);
}

.action-btn svg {
  vertical-align: middle;
}

.translation-guide {
  margin-top: 60px;
  padding: 40px;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
  max-width: 1000px;
  margin: 60px auto 0;
}

.translation-guide h2 {
  font-size: 1.8rem;
  color: #333;
  margin-bottom: 20px;
  position: relative;
  padding-bottom: 15px;
}

.translation-guide h2::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 60px;
  height: 3px;
  background-color: #e60012;
  border-radius: 2px;
}

.translation-guide h3 {
  font-size: 1.4rem;
  color: #444;
  margin: 30px 0 15px;
}

.translation-guide p {
  font-size: 1.05rem;
  line-height: 1.7;
  color: #555;
  margin-bottom: 15px;
}

.translation-guide ol {
  padding-left: 25px;
  margin-bottom: 20px;
}

.translation-guide li {
  margin-bottom: 12px;
  font-size: 1.05rem;
  line-height: 1.6;
  color: #555;
}

.benefits-section {
  margin-top: 30px;
  padding: 25px;
  background-color: #f9f9f9;
  border-radius: 10px;
  border: 1px solid #eee;
}

.benefits-section h3 {
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 15px;
  font-weight: 600;
}

.benefits-section ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.benefits-section li {
  margin-bottom: 10px;
  font-size: 1rem;
  color: #555;
  position: relative;
  padding-left: 20px;
}

.benefits-section li::before {
  content: "•";
  color: #e60012;
  position: absolute;
  left: 0;
}

.faq-section {
  margin-top: 40px;
}

.faq-item {
  margin-bottom: 25px;
  background-color: #f9f9f9;
  border-radius: 10px;
  padding: 20px;
}

.faq-item h4 {
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 10px;
  font-weight: 600;
}

.faq-item p {
  font-size: 1.05rem;
  line-height: 1.7;
  color: #555;
  margin: 0;
}

@media (max-width: 768px) {
  .page-title {
    font-size: 1.8rem;
    margin-top: 40px;
    margin-bottom: 30px;
  }
  
  .form-section {
    padding: 25px;
  }
  
  .results-grid {
    grid-template-columns: 1fr;
  }
  
  .result-original {
    font-size: 3rem;
  }
  
  .result-header, 
  .result-details {
    padding: 25px;
  }
  
  .translation-guide {
    padding: 25px;
    margin-top: 40px;
  }
}

@media (max-width: 480px) {
  .page-title {
    font-size: 1.6rem;
  }
  
  .form-input {
    padding: 12px 15px;
  }
  
  .submit-button {
    padding: 12px 20px;
    height: 50px;
  }
  
  .result-original {
    font-size: 2.5rem;
  }
  
  .result-pinyin {
    font-size: 1.2rem;
  }
  
  .result-english h3 {
    font-size: 1.2rem;
  }
}
</style> 