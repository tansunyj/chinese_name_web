<template>
  <div class="translate-page">
    <div class="container">
      <h1 class="page-title">English to Chinese Name Translator | Translate Your Name to Chinese Characters</h1>
      
      <div class="seo-intro">
        <p class="seo-description">Translate your English name to Chinese characters with our professional name translation tool. Get accurate Chinese name translations with proper pronunciation and cultural meaning. Our free English to Chinese name translator creates names that sound natural to native speakers while preserving your name's essence.</p>
      </div>
      
      <div class="content">
        <div class="form-section">
          <div class="language-select-buttons">
            <a 
              v-for="lang in languageOptions" 
              :key="lang.code"
              @click.prevent="switchLanguage(lang.code)"
              class="lang-button"
              :class="{ 'active': currentLanguage === lang.code }"
              :title="lang.fullName"
            >
              <div class="lang-icon"></div>
              <div class="lang-code">{{ lang.displayCode }}</div>
            </a>
          </div>
          
          <form @submit.prevent="translateName">
            <div class="form-group fullWidth">
              <label for="fullName">{{ currentLanguageTitle }}</label>
              <input 
                type="text" 
                id="fullName" 
                v-model="formData.fullName" 
                required
                class="form-input"
                :placeholder="currentLanguagePlaceholder"
                aria-label="Your name to translate"
              />
            </div>
            
            <button type="submit" class="submit-button" :class="{ 'loading': isLoading }">
              <span v-if="isLoading">{{ $t('common.loading') }}</span>
              <span v-else>{{ translateButtonText }}</span>
            </button>
          </form>
        </div>
        
        <!-- 加载指示器 -->
        <LoadingIndicator v-if="isLoading" :text="$t('common.translatingName')" />
        
        <div v-if="results.length" class="results-section">
          <h2>Your Chinese Name Translation Results</h2>
          
          <div class="results-grid">
            <div class="result-card" v-for="(result, index) in results" :key="index">
              <div class="result-header">
                <div class="result-characters">{{ result.translate }}</div>
                <div class="result-pinyin">{{ result.pronunciation }}</div>
              </div>
              <div class="result-details">
                <div class="result-item">
                  <h4>{{ $t('translate.results.meaning') }}</h4>
                  <p>{{ result.explanation }}</p>
                </div>
                <div class="result-item" v-if="result.cultural">
                  <h4>{{ $t('translate.results.cultural') }}</h4>
                  <p>{{ result.cultural }}</p>
                </div>
              </div>
              <div class="action-buttons">
                <button class="action-btn" @click="handlePlayClick(result)">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polygon points="10 8 16 12 10 16" fill="currentColor"></polygon>
                  </svg>
                  {{ locale === 'zh' ? '播放读音' : 'Play' }}
                </button>
                
                <button class="action-btn" @click="copyToClipboard(result.translate)">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2">
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                  </svg>
                  {{ locale === 'zh' ? '复制' : 'Copy' }}
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div class="translation-guide">
          <h2>How Our English to Chinese Name Translation Works</h2>
          <p>Our name translation service uses advanced linguistic algorithms to convert your English name into an authentic Chinese name that preserves both pronunciation and meaning. Unlike simple phonetic transliteration, we consider cultural context and character meanings to create a name that sounds natural to Chinese speakers.</p>
          
          <h3>The Translation Process</h3>
          <ol>
            <li><strong>Phonetic Analysis</strong> - We analyze the sounds in your name to find the closest Chinese phonetic equivalents.</li>
            <li><strong>Character Selection</strong> - We carefully select Chinese characters that not only sound similar to your name but also carry positive meanings.</li>
            <li><strong>Cultural Adaptation</strong> - We ensure the translated name follows Chinese naming conventions and cultural practices.</li>
            <li><strong>Pronunciation Guide</strong> - We provide pinyin (romanization) to help you pronounce your Chinese name correctly.</li>
          </ol>
          
          <h3>Why Proper Name Translation Matters</h3>
          <p>In Chinese culture, names carry significant meaning. The characters used in your Chinese name can influence how you're perceived. Our translation service ensures your Chinese name has positive connotations and sounds natural to native speakers.</p>
          
          <!-- 添加常见问题FAQ部分 -->
          <h3>Frequently Asked Questions About Chinese Name Translation</h3>
          
          <div class="faq-section">
            <div class="faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
              <h4 itemprop="name">How do Chinese names differ from Western names?</h4>
              <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                <p itemprop="text">Chinese names typically consist of a family name (surname) followed by a given name. The family name is usually one character, while the given name is one or two characters. Each character has its own meaning, making Chinese names rich with symbolism and cultural significance.</p>
              </div>
            </div>
            
            <div class="faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
              <h4 itemprop="name">How do I choose the best Chinese name translation?</h4>
              <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                <p itemprop="text">The best Chinese name translation should balance phonetic similarity to your original name with positive meaning. Consider the characters' meanings, how they sound together, and cultural appropriateness. Our translator provides multiple options so you can choose the one that resonates with you most.</p>
              </div>
            </div>
            
            <div class="faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
              <h4 itemprop="name">Can any English name be translated to Chinese?</h4>
              <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                <p itemprop="text">Yes, any English name can be translated to Chinese through phonetic translation (transliteration). Our system finds Chinese characters that sound similar to your English name while also having positive meanings, creating a culturally appropriate Chinese name.</p>
              </div>
            </div>
            
            <div class="faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
              <h4 itemprop="name">What makes a good Chinese name?</h4>
              <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                <p itemprop="text">A good Chinese name should have positive meanings, pleasing sounds, appropriate character combinations, and balanced elements according to Chinese tradition. It should also be easy for Chinese speakers to pronounce and remember, while reflecting personal qualities or aspirations.</p>
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
import * as openaiService from '@/services/openaiService';
// 移除了对 promptTemplates 的引用，现在提示词在后端保密处理
import LoadingIndicator from '@/components/LoadingIndicator.vue';
import { useI18n } from 'vue-i18n';
import aiConfig from '@/config/aiConfig';

// 判断当前是否为开发环境
const isDevelopment = process.env.NODE_ENV === 'development';

// 定义日志函数，只在开发环境中输出
const log = (...args) => {
  if (isDevelopment) {
    console.log(...args);
  }
};

// 定义警告日志函数
const logWarn = (...args) => {
  if (isDevelopment) {
    console.warn(...args);
  }
};

// 定义错误日志函数
const logError = (...args) => {
  if (isDevelopment) {
    console.error(...args);
  }
};

export default {
  name: 'TranslateName',
  components: {
    LoadingIndicator
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
        "name": "English to Chinese Name Translator",
        "url": "https://chinesename.us/translate",
        "applicationCategory": "UtilityApplication",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        },
        "description": "Translate your English name to Chinese characters with our professional name translation tool. Get accurate Chinese name translations with proper pronunciation and cultural meaning."
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
        fullName: ''
      },
      isLoading: false,
      results: [],
      errorMessage: '',
      languageOptions: [
        { code: 'us', displayCode: 'US', text: 'Translate English name to Chinese', title: 'Translate Your Name to Chinese', fullName: '美国英语 (American English)' },
        { code: 'fr', displayCode: 'FR', text: 'Traduire un nom français en chinois', title: 'Traduisez Votre Nom en Chinois', fullName: '法语 (French)' },
        { code: 'de', displayCode: 'DE', icon: '🇩🇪', text: 'Deutschen Namen ins Chinesische übersetzen', title: 'Übersetzen Sie Ihren Namen ins Chinesische', fullName: '德语 (German)' },
        { code: 'ru', displayCode: 'RU', icon: '🇷🇺', text: 'Перевести русское имя на китайский', title: 'Переведите Ваше Имя на Китайский', fullName: '俄语 (Russian)' },
        { code: 'jp', displayCode: 'JP', icon: '🇯🇵', text: '日本語の名前を中国語に翻訳する', title: 'あなたの名前を中国語に翻訳', fullName: '日语 (Japanese)' },
        { code: 'kr', displayCode: 'KR', icon: '🇰🇷', text: '한국어 이름을 중국어로 번역', title: '당신의 이름을 중국어로 번역', fullName: '韩语 (Korean)' },        
        { code: 'es', displayCode: 'ES', icon: '🇪🇸', text: 'Traducir nombre español al chino', title: 'Traduce Tu Nombre al Chino', fullName: '西班牙语 (Spanish)' },
        { code: 'ae', displayCode: 'AE', icon: '🇦🇪', text: 'ترجمة الاسم العربي إلى الصينية', title: 'ترجم اسمك إلى اللغة الصينية', fullName: '阿拉伯语 (Arabic)' },
        { code: 'pt', displayCode: 'PT', icon: '🇵🇹', text: 'Traduzir nome português para chinês', title: 'Traduza Seu Nome para Chinês', fullName: '葡萄牙语 (Portuguese)' },
        { code: 'it', displayCode: 'IT', icon: '🇮🇹', text: 'Traduci nome italiano in cinese', title: 'Traduci il Tuo Nome in Cinese', fullName: '意大利语 (Italian)' },
        { code: 'in', displayCode: 'IN', icon: '🇮🇳', text: 'हिंदी नाम को चीनी में अनुवाद करें', title: 'अपने नाम का चीनी में अनुवाद करें', fullName: '印地语 (Hindi)' }
      ],
      currentLanguage: 'us'
    }
  },
  computed: {
    titleText() {
      const lang = this.languageOptions.find(l => l.code === this.currentLanguage);
      return lang ? lang.title : this.$t('translate.title');
    },
    currentLanguageTitle() {
      const lang = this.languageOptions.find(l => l.code === this.currentLanguage);
      return lang ? lang.text : this.$t('translate.fullName');
    },
    currentLanguagePlaceholder() {
      // 根据不同语言返回不同语言的占位符
      const placeholders = {
        us: 'Enter your English name...',
        jp: '日本語の名前を入力してください...',
        kr: '한국어 이름을 입력하세요...',
        fr: 'Entrez votre nom français...',
        de: 'Geben Sie Ihren deutschen Namen ein...',
        ru: 'Введите ваше русское имя...',
        es: 'Ingrese su nombre en español...',
        ae: 'أدخل اسمك باللغة العربية...',
        pt: 'Digite seu nome em português...',
        it: 'Inserisci il tuo nome italiano...',
        in: 'अपना हिंदी नाम दर्ज करें...',
        zh: '请输入中文名字...'
      };
      return placeholders[this.currentLanguage] || this.$t('translate.fullNamePlaceholder');
    },
    translateButtonText() {
      // 根据不同语言返回对应语言的翻译按钮文字
      const buttonTexts = {
        us: 'Translate',
        jp: '翻訳する',
        kr: '번역하기',
        fr: 'Traduire',
        de: 'Übersetzen',
        ru: 'Перевести',
        es: 'Traducir',
        ae: 'ترجمة',
        pt: 'Traduzir',
        it: 'Traduci',
        in: 'अनुवाद करें',
        zh: '翻译'
      };
      return buttonTexts[this.currentLanguage] || this.$t('translate.translateButton');
    }
  },
  methods: {
    async translateName() {
      if (!this.formData.fullName) {
        message.error(this.$t('translate.errors.fullNameRequired'));
        return;
      }
      
      // 清空之前的结果
      this.results = [];
      this.isLoading = true;
      this.errorMessage = ''; // 清除之前的错误信息
      
      try {
        // 定义 JSON Schema，用于结构化返回数据
        const nameSchema = {
          type: "object",
          properties: {
            translations: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  translate: { type: "string" },        // 中文名字
                  pronunciation: { type: "string" },    // 拼音
                  explanation: { type: "string" },           // 含义解释
                  cultural: { type: "string" },              // 文化含义
                  analysis: {
                    type: "object",
                    properties: {
                      strokes: { type: "number" },           // 笔画数
                      characterElements: {                    // 字的五行属性
                        type: "array", 
                        items: { type: "string" }
                      },
                      soundMeaning: { type: "string" },      // 音律含义
                      compatibility: { type: "string" }       // 匹配度
                    }
                  }
                },
                required: ["translate", "pronunciation", "explanation"]
              }
            }
          }
        };

        // 根据当前选择的语言设置源语言 - 支持中英文名字互译 (Chinese names into English and English to Chinese translation)
        const sourceLanguageMap = {
          us: 'en', // 美国英语 - English name to Chinese translation
          jp: 'ja', // 日语 - Japanese name to Chinese
          kr: 'ko', // 韩语 - Korean name to Chinese
          fr: 'fr', // 法语 - French name to Chinese
          de: 'de', // 德语 - German name to Chinese
          ru: 'ru', // 俄语 - Russian name to Chinese
          es: 'es', // 西班牙语 - Spanish name to Chinese
          ae: 'ar', // 阿拉伯语 - Arabic name to Chinese
          pt: 'pt', // 葡萄牙语 - Portuguese name to Chinese
          it: 'it', // 意大利语 - Italian name to Chinese
          in: 'hi', // 印地语 - Hindi name to Chinese
          zh: 'zh'  // 中文 - Chinese name into English translation
        }; // How to say my name in Chinese - 如何用中文说我的名字

        const sourceLanguage = sourceLanguageMap[this.currentLanguage] || 'en';
        
        // 构建提示词
        const languageNames = {
          en: '英文',
          ja: '日文',
          ko: '韩文',
          fr: '法文',
          de: '德文',
          ru: '俄文',
          es: '西班牙文',
          ar: '阿拉伯文',
          pt: '葡萄牙文',
          it: '意大利文',
          hi: '印地文',
          zh: '中文'
        };
        
        const prompt = `请将${languageNames[sourceLanguage] || sourceLanguage}名字"${this.formData.fullName}"翻译成中文，
使用音义结合（同时考虑发音和含义）方法，并以JSON格式返回结果。

请提供3个不同的翻译方案，每个方案包括:
1. 翻译后的中文名字 (translate字段)
2. 拼音发音指南 (pronunciation字段)
3. 含义解释 (explanation字段)，**这是最重要的部分，必须严格遵守以下要求**：
   - 你必须完全站在${sourceLanguage}语言使用者的视角，以其母语思维方式来思考和表达
   - 使用${sourceLanguage}语言的表达习惯、思维方式和文化视角解释名字的意义和选字原因
   - 绝对不能简单地将中文思维方式的解释翻译成${sourceLanguage}语言
   - 要像对一个只懂${sourceLanguage}语言且不了解中文的人解释这个中文名字一样去撰写解释
   - 解释应包含音译对应关系、汉字含义以及中国文化背景，但表达方式必须符合${sourceLanguage}语言的习惯
   - 撰写时应该思考：如果${sourceLanguage}语言的专业翻译者来解释这个名字，他们会怎么表达
   - 整体解释应当让${sourceLanguage}语言的原生使用者感到自然流畅，没有翻译腔

针对不同语言的示例：
- 英语："The name 'John' is translated to '约翰' (Yuē Hàn) in Chinese. This translation was chosen to match the sound of the original name. In Chinese naming culture, they look for characters that not only sound similar, but also carry positive meanings. Here, '约' suggests 'promise' or 'appointment', while '翰' refers to a 'writing brush' - a symbol of scholarship in traditional Chinese culture."

- 日语："「Suzuki」という名前は中国語で「铃木」(Líng Mù)と翻訳されます。これは音の類似性に基づいた翻訳で、「铃」は「鈴、ベル」を意味し、「木」は「木、自然」を表します。この名前は日本語の「鈴木」と同じ漢字を使っていますが、発音が若干異なります。中国では外国人の名前を翻訳する際、良い意味を持つ漢字を選ぶことが重視されます。"

- 法语："Le nom 'Pierre' est traduit en chinois comme '皮埃尔' (Pí Āi Ěr). Cette traduction est basée sur la similarité phonétique, où chaque caractère chinois représente une partie du son original. En chinois, '皮' (pí) évoque la 'peau' ou 'surface', '埃' (āi) est souvent utilisé pour les sons étrangers, et '尔' (ěr) est un caractère élégant utilisé dans de nombreux noms. Dans la culture chinoise, on choisit des caractères qui non seulement reproduisent la sonorité du nom original, mais qui portent aussi des connotations positives."

4. 文化含义 (cultural字段，也必须完全从${sourceLanguage}语言视角出发描述，比解释更侧重于文化内涵)

请严格按照以下JSON结构返回，确保字段名称完全一致：
{
  "translations": [
    {
      "translate": "中文名字1",
      "pronunciation": "拼音1",
      "explanation": "完全以${sourceLanguage}语言用户视角的解释1",
      "cultural": "以${sourceLanguage}语言为主的文化含义解释1",
      "explanation_": "explain the meaning of each character in the Chinese translation of your name,in the ${sourceLanguage} language",
      "cultural_": "explain the cultural significance of the Chinese translation of your name,in the ${sourceLanguage} language"    
    },
    {
      "translate": "中文名字2",
      "pronunciation": "拼音2",
      "explanation": "完全以${sourceLanguage}语言用户视角的解释2",
      "cultural": "以${sourceLanguage}语言为主的文化含义解释2",
      "explanation_": "explain the meaning of each character in the Chinese translation of your name,in the ${sourceLanguage} language",
      "cultural_": "explain the cultural significance of the Chinese translation of your name,in the ${sourceLanguage} language"          
    },
    {
      "translate": "中文名字3",
      "pronunciation": "拼音3",
      "explanation": "完全以${sourceLanguage}语言用户视角的解释3",
      "cultural": "以${sourceLanguage}语言为主的文化含义解释3",
      "explanation_": "explain the meaning of each character in the Chinese translation of your name,in the ${sourceLanguage} language",
      "cultural_": "explain the cultural significance of the Chinese translation of your name,in the ${sourceLanguage} language"         
    }
  ]
}`;

        // 使用新的类型化API直接发送请求
        log('发送AI请求...');
        const response = await fetch(aiConfig.baseConfig.proxyUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            type: 'nameTranslation',
            name: this.formData.fullName,
            sourceLanguage: sourceLanguage,
            targetLanguage: 'zh',
            method: 'combined',
            locale: this.locale
          })
        });

        const responseData = await response.json();
        log('🔍 AI原始响应:', responseData);
        log('🔍 响应数据类型:', typeof responseData);
        log('🔍 响应数据键:', Object.keys(responseData || {}));

        let parsedData = null;

        // 处理OpenAI的响应格式：提取choices[0].message.content中的JSON字符串
        if (responseData && responseData.choices && responseData.choices[0] && responseData.choices[0].message) {
          try {
            const contentString = responseData.choices[0].message.content;
            log('🎯 提取的content字符串:', contentString);
            log('🎯 content字符串长度:', contentString?.length);

            // 解析JSON字符串
            parsedData = JSON.parse(contentString);
            log('✅ 解析后的JSON数据:', parsedData);
            log('✅ 解析后数据键:', Object.keys(parsedData || {}));
          } catch (parseError) {
            logError('❌ 解析choices[0].message.content中的JSON失败:', parseError);
            logError('❌ 原始content内容:', responseData.choices[0].message.content);
          }
        }
        // 如果不是OpenAI格式，直接使用responseData
        else if (responseData && responseData.translations) {
          parsedData = responseData;
          log('📋 直接使用响应数据:', parsedData);
        }
        else {
          logWarn('⚠️ 响应数据格式不符合预期');
          logWarn('⚠️ 响应数据结构:', JSON.stringify(responseData, null, 2));
        }

        // 检查并处理解析后的数据
        if (!parsedData?.translations || !Array.isArray(parsedData.translations)) {
          log('解析后的数据格式不正确，使用后备结果');
          this.results = this.getFallbackResults();
          this.errorMessage = this.$t('translate.errors.usingFallback');
          return;
        }

        // 直接使用解析后的数据，进行详细的字段映射
        const normalizedResults = parsedData.translations.map(item => {
          if (!item) return null;

          log('🔄 处理翻译项:', item);

          const normalized = {
            translate: item.translate || item.translatedName || item.characters || item.name || item.chineseName || item.chinese_name || '',
            pronunciation: item.pronunciation || item.pronunciationGuide || item.pinyin || '',
            explanation: item.explanation || item.meaning || item.description || '',
            cultural: item.cultural || item.culturalMeaning || item.culture || item.cultural_adaptability || '',
            score: item.score || item.recommendation_score || 0
          };

          log('✅ 标准化后的翻译项:', normalized);
          return normalized;
        }).filter(item => item && item.translate); // 过滤掉空项和没有翻译名称的项

        // 如果没有有效结果，使用后备方案
        if (normalizedResults.length === 0) {
          log('没有有效的翻译结果，使用后备结果');
          this.results = this.getFallbackResults();
          this.errorMessage = this.$t('translate.errors.usingFallback');
        } else {
          // 使用处理后的数据
          this.results = normalizedResults;
          this.errorMessage = ''; // 清除错误信息
        }

        log('最终处理后的结果:', this.results);

      } catch (error) {
        logError('名字翻译错误:', error);
        logError('错误堆栈:', error.stack);
        message.error(error.message || '翻译失败，请重试');
        this.errorMessage = this.$t('translate.errors.translationFailed');
        
        // 生成后备结果
        const fallbackResults = this.getFallbackResults();
        this.results = fallbackResults;
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
        logError('结构化提取失败:', error);
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
        logError('解析JSON失败:', error);
        return null;
      }
    },
    
    // 添加后备翻译解释的格式化函数
    formatExplanation(char, pinyin, meaning, sourceLanguage) {
      // 获取原名（用户输入的名字）
      const originalName = this.formData.fullName || '';
      
      // 根据不同的源语言，提供完全以该语言视角的解释
      const nativeExplanations = {
        'en': (name, c, p, m) => {
          return `The name "${name}" is translated to Chinese as "${c}" (pronounced "${p}"). ${m.replace(/意为|象征/g, 'This character means').replace(/，/g, ' and ')}. When translating Western names into Chinese, linguists look for characters that not only sound similar to the original name, but also have positive meanings. This creates a name that both preserves the original pronunciation and has cultural significance in Chinese society.`;
        },
        'fr': (name, c, p, m) => {
          return `Le nom "${name}" est traduit en chinois par "${c}" (prononcé "${p}"). ${m.replace(/意为|象征/g, 'Ce caractère signifie').replace(/，/g, ' et ')}. Dans la culture chinoise, la traduction des noms occidentaux ne se limite pas à la simple phonétique. On choisit des caractères qui évoquent non seulement le son original, mais qui possèdent également des significations positives et auspicieuses, créant ainsi un nom à la fois reconnaissable et porteur de sens.`;
        },
        'de': (name, c, p, m) => {
          return `Der Name "${name}" wird im Chinesischen als "${c}" (ausgesprochen "${p}") wiedergegeben. ${m.replace(/意为|象征/g, 'Dieses Zeichen bedeutet').replace(/，/g, ' und ')}. Bei der Übersetzung westlicher Namen ins Chinesische werden Zeichen gewählt, die nicht nur ähnlich klingen, sondern auch positive Bedeutungen tragen. Dies ist ein wichtiger kultureller Aspekt, da Namen in China traditionell eine tiefere Bedeutung haben und oft Wünsche für das Leben des Namensträgers ausdrücken.`;
        },
        'ru': (name, c, p, m) => {
          return `Имя "${name}" переводится на китайский как "${c}" (произносится "${p}"). ${m.replace(/意为|象征/g, 'Этот иероглиф означает').replace(/，/g, ' и ')}. В китайской традиции перевода иностранных имён важно не только фонетическое соответствие, но и положительное значение используемых иероглифов. Это создаёт имя, которое не только звучит похоже на оригинал, но и несёт в себе благоприятный смысл в контексте китайской культуры.`;
        },
        'ja': (name, c, p, m) => {
          return `"${name}"という名前は中国語で"${c}"（発音："${p}"）と表記されます。${m.replace(/意为|象征/g, 'この漢字は').replace(/，/g, '、')}という意味があります。中国語での外国人名の翻訳では、単に音が似ているだけでなく、良い意味を持つ漢字を選ぶことが重視されます。日本人の名前の場合は、漢字の意味が両国で共通していることもありますが、発音や文化的背景が異なる場合もあります。この翻訳では、原名の発音を保ちながら、中国文化においても好ましい意味を持つ名前となっています。`;
        },
        'ko': (name, c, p, m) => {
          return `"${name}" 이름은 중국어로 "${c}"(발음: "${p}")로 번역됩니다. ${m.replace(/意为|象征/g, '이 글자는').replace(/，/g, ', ')} 등의 의미가 있습니다. 중국어로 외국 이름을 번역할 때는 단순히 비슷한 발음뿐만 아니라, 긍정적인 의미를 가진 글자를 선택하는 것이 중요합니다. 한국과 중국은 한자 문화권이지만, 같은 글자라도 발음과 의미가 다를 수 있으므로, 이 번역은 원래 이름의 발음을 유지하면서도 중국 문화에서 좋은 의미를 가진 이름이 되도록 선택되었습니다.`;
        },
        'es': (name, c, p, m) => {
          return `El nombre "${name}" se traduce al chino como "${c}" (pronunciado "${p}"). ${m.replace(/意为|象征/g, 'Este carácter significa').replace(/，/g, ' y ')}. En la cultura china, cuando se traducen nombres extranjeros, no solo se busca una similitud fonética, sino también caracteres que tengan significados positivos. Esto es muy diferente a la tradición hispana, donde los nombres suelen traducirse por su equivalente sin cambiar su sonido original. Esta traducción ha sido elegida para preservar la sonoridad de tu nombre mientras transmite cualidades positivas en el contexto cultural chino.`;
        },
        'pt': (name, c, p, m) => {
          return `O nome "${name}" é traduzido para chinês como "${c}" (pronunciado "${p}"). ${m.replace(/意为|象征/g, 'Este caractere significa').replace(/，/g, ' e ')}. Na tradição chinesa de tradução de nomes estrangeiros, não basta apenas encontrar sons semelhantes; os caracteres escolhidos devem também ter significados positivos. Diferente da tradição portuguesa onde os nomes geralmente mantêm sua pronúncia original, na China a tradução busca harmonizar o som com significados auspiciosos, criando um nome que soa familiar mas também tem um valor cultural positivo.`;
        },
        'it': (name, c, p, m) => {
          return `Il nome "${name}" viene tradotto in cinese come "${c}" (pronunciato "${p}"). ${m.replace(/意为|象征/g, 'Questo carattere significa').replace(/，/g, ' e ')}. Nella cultura cinese, quando si traducono i nomi stranieri, si cercano caratteri che non solo suonino simili all'originale, ma che abbiano anche significati positivi. Diversamente dalla tradizione italiana, dove i nomi mantengono di solito la loro pronuncia originale, in Cina la traduzione mira a creare un nome che sia sia foneticamente simile sia culturalmente significativo.`;
        },
        'ar': (name, c, p, m) => {
          return `تتم ترجمة الاسم "${name}" إلى اللغة الصينية كـ "${c}" (ينطق "${p}"). ${m.replace(/意为|象征/g, 'هذا الحرف يعني').replace(/，/g, ' و ')}. في الثقافة الصينية، عند ترجمة الأسماء الأجنبية، لا يتم البحث عن التشابه الصوتي فقط، بل أيضًا عن الأحرف ذات المعاني الإيجابية. على عكس التقليد العربي حيث غالبًا ما تحافظ الأسماء على نطقها الأصلي، في الصين تهدف الترجمة إلى إنشاء اسم يشبه صوتيًا الاسم الأصلي ويحمل معنى ثقافيًا إيجابيًا.`;
        },
        'hi': (name, c, p, m) => {
          return `नाम "${name}" का चीनी में अनुवाद "${c}" (उच्चारण: "${p}") है। ${m.replace(/意为|象征/g, 'इस अक्षर का अर्थ है').replace(/，/g, ' और ')}। चीनी संस्कृति में, विदेशी नामों का अनुवाद करते समय, न केवल समान ध्वनि वाले अक्षरों की तलाश की जाती है, बल्कि सकारात्मक अर्थ वाले अक्षरों की भी। भारतीय परंपरा से अलग, जहां नाम अक्सर अपने मूल उच्चारण को बनाए रखते हैं, चीन में अनुवाद का उद्देश्य एक ऐसा नाम बनाना है जो ध्वनि में समान हो और सांस्कृतिक रूप से भी सार्थक हो।`;
        },
        'zh': (name, c, p, m) => {
          return `"${name}"翻译成中文是"${c}"(读音："${p}")。${m}。在中文翻译外国名字时，不仅要考虑发音的相似度，还要选择具有美好含义的汉字，这样既能保留原名的发音特点，又能符合中国传统起名的文化内涵，给人以美好的印象和寓意。`;
        }
      };
      
      // 首先将currentLanguage转换为标准化的语言代码
      const languageCodeMap = {
        'us': 'en',
        'jp': 'ja', 
        'kr': 'ko',
        'fr': 'fr',
        'de': 'de',
        'ru': 'ru',
        'es': 'es',
        'ae': 'ar',
        'pt': 'pt',
        'it': 'it',
        'in': 'hi',
        'zh': 'zh'
      };
      
      const standardLanguageCode = languageCodeMap[sourceLanguage] || 'en';
      
      // 使用源语言的解释格式，如果没有对应的则使用英语
      const explanationGenerator = nativeExplanations[standardLanguageCode] || nativeExplanations['en'];
      return explanationGenerator(originalName, char, pinyin, meaning);
    },
    
    // 获取后备结果数据
    getFallbackResults() {
      // 分离全名中的姓和名
      const nameParts = this.splitName(this.formData.fullName);
      const lastName = nameParts.lastName || '李';
      const firstName = nameParts.firstName || '';
      const firstChar = firstName.charAt(0).toLowerCase();
      
      // 创建更多样化的翻译结果
      let results = [];
      const nameMap = {
        'a': [{ char: '安', pinyin: 'Ān', meaning: '意为"平安、安宁"，象征平安幸福的生活。' }, 
              { char: '爱', pinyin: 'Ài', meaning: '意为"热爱、关爱"，象征被爱和充满爱心。' }],
        'b': [{ char: '博', pinyin: 'Bó', meaning: '意为"博学、渊博"，象征学识广博和智慧。' }, 
              { char: '彬', pinyin: 'Bīn', meaning: '意为"文质彬彬"，象征文雅有礼的品格。' }],
        'c': [{ char: '辰', pinyin: 'Chén', meaning: '意为"时辰、早晨"，象征希望和光明的未来。' }, 
              { char: '成', pinyin: 'Chéng', meaning: '意为"成功、成就"，象征事业有成。' }],
        'd': [{ char: '达', pinyin: 'Dá', meaning: '意为"通达、达成"，象征事业有成，目标达成。' }, 
              { char: '德', pinyin: 'Dé', meaning: '意为"道德、品德"，象征高尚的品德和修养。' }],
        'e': [{ char: '恩', pinyin: 'Ēn', meaning: '意为"恩惠、感恩"，象征感恩之心和善良。' }, 
              { char: '尔', pinyin: 'Ěr', meaning: '意为"你、尔雅"，象征文雅有礼的品格。' }],
        'f': [{ char: '芳', pinyin: 'Fāng', meaning: '意为"芳香、美好"，象征美好和芬芳。' }, 
              { char: '菲', pinyin: 'Fēi', meaning: '意为"菲薄、香草"，象征谦逊和芬芳。' }],
        'g': [{ char: '刚', pinyin: 'Gāng', meaning: '意为"刚强、坚韧"，象征坚强的意志和力量。' }, 
              { char: '国', pinyin: 'Guó', meaning: '意为"国家、祖国"，象征爱国情怀。' }],
        'h': [{ char: '恒', pinyin: 'Héng', meaning: '意为"恒心、持久"，象征坚持不懈的毅力。' }, 
              { char: '宏', pinyin: 'Hóng', meaning: '意为"宏大、宏伟"，象征宏伟的志向和成就。' }],
        'i': [{ char: '艺', pinyin: 'Yì', meaning: '意为"艺术、才能"，象征艺术天赋和创造力。' }, 
              { char: '逸', pinyin: 'Yì', meaning: '意为"安逸、超逸"，象征超凡脱俗的气质。' }],
        'j': [{ char: '杰', pinyin: 'Jié', meaning: '意为"杰出、优秀"，象征卓越的才能和成就。' }, 
              { char: '俊', pinyin: 'Jùn', meaning: '意为"英俊、优秀"，象征英俊潇洒和才华。' }],
        'k': [{ char: '凯', pinyin: 'Kǎi', meaning: '意为"凯旋、胜利"，象征胜利和成功。' }, 
              { char: '康', pinyin: 'Kāng', meaning: '意为"健康、安康"，象征健康平安的生活。' }],
        'l': [{ char: '立', pinyin: 'Lì', meaning: '意为"独立、坚定"，象征坚强的个性和独立的精神。' }, 
              { char: '良', pinyin: 'Liáng', meaning: '意为"善良、优良"，象征善良的品格和优秀的品质。' }],
        'm': [{ char: '明', pinyin: 'Míng', meaning: '意为"明亮、光明"，象征光明磊落的品格和智慧。' }, 
              { char: '茂', pinyin: 'Mào', meaning: '意为"茂盛、繁荣"，象征生机勃勃和蓬勃发展。' }],
        'n': [{ char: '宁', pinyin: 'Níng', meaning: '意为"安宁、平静"，象征安宁的心境和生活。' }, 
              { char: '诺', pinyin: 'Nuò', meaning: '意为"承诺、诺言"，象征守信用和诚实。' }],
        'o': [{ char: '欧', pinyin: 'Ōu', meaning: '意为"欧洲"，象征广阔的视野和国际化的气质。' }, 
              { char: '鸥', pinyin: 'Ōu', meaning: '意为"海鸥"，象征自由翱翔和无拘无束。' }],
        'p': [{ char: '鹏', pinyin: 'Péng', meaning: '意为"大鹏鸟"，象征远大志向和展翅高飞。' }, 
              { char: '平', pinyin: 'Píng', meaning: '意为"平和、平安"，象征平和的性格和平安的生活。' }],
        'q': [{ char: '强', pinyin: 'Qiáng', meaning: '意为"强壮、强大"，象征强健的体魄和坚强的意志。' }, 
              { char: '庆', pinyin: 'Qìng', meaning: '意为"庆祝、喜庆"，象征喜悦和欢乐。' }],
        'r': [{ char: '瑞', pinyin: 'Ruì', meaning: '意为"吉祥、好兆头"，象征幸福和吉祥。' }, 
              { char: '荣', pinyin: 'Róng', meaning: '意为"荣誉、荣耀"，象征荣誉和成就。' }],
        's': [{ char: '思', pinyin: 'Sī', meaning: '意为"思考、思想"，象征深刻的思考能力和智慧。' }, 
              { char: '顺', pinyin: 'Shùn', meaning: '意为"顺利、如意"，象征一切顺利和如意。' }],
        't': [{ char: '涛', pinyin: 'Tāo', meaning: '意为"波涛"，象征气势磅礴和充满活力。' }, 
              { char: '天', pinyin: 'Tiān', meaning: '意为"天空、天堂"，象征博大和崇高。' }],
        'u': [{ char: '优', pinyin: 'Yōu', meaning: '意为"优秀、优雅"，象征优秀的品质和优雅的气质。' }, 
              { char: '悠', pinyin: 'Yōu', meaning: '意为"悠远、悠闲"，象征悠然自得的生活态度。' }],
        'v': [{ char: '文', pinyin: 'Wén', meaning: '意为"文化、文雅"，象征文化素养和文雅的气质。' }, 
              { char: '薇', pinyin: 'Wēi', meaning: '意为"蔷薇"，象征美丽和优雅。' }],
        'w': [{ char: '伟', pinyin: 'Wěi', meaning: '意为"伟大、宏伟"，象征伟大的志向和成就。' }, 
              { char: '文', pinyin: 'Wén', meaning: '意为"文化、文雅"，象征文化素养和文雅的气质。' }],
        'x': [{ char: '晓', pinyin: 'Xiǎo', meaning: '意为"黎明、明白"，象征聪明睿智和充满希望。' }, 
              { char: '雪', pinyin: 'Xuě', meaning: '意为"雪花、纯洁"，象征纯洁无瑕和高洁的品格。' }],
        'y': [{ char: '宇', pinyin: 'Yǔ', meaning: '意为"宇宙、空间"，象征广阔的胸怀和远大的志向。' }, 
              { char: '雅', pinyin: 'Yǎ', meaning: '意为"优雅、文雅"，象征优雅的气质和高尚的品格。' }],
        'z': [{ char: '哲', pinyin: 'Zhé', meaning: '意为"哲学、智慧"，象征智慧和思想的深度。' }, 
              { char: '志', pinyin: 'Zhì', meaning: '意为"志向、意志"，象征坚定的意志和远大的志向。' }]
      };
      
      // 根据名字首字母选择合适的字
      const charOptions = nameMap[firstChar] || nameMap['j']; // 默认使用j开头的中文字
      
      if (charOptions) {
        // 添加基于首字母的结果
        charOptions.forEach(option => {
          results.push({
            translate: lastName + option.char,
            pronunciation: this.getSurnamePinyin(lastName) + ' ' + option.pinyin,
            explanation: this.formatExplanation(option.char, option.pinyin, option.meaning, this.currentLanguage),
            cultural: '',
            pronunciationSimilarity: 8
          });
        });
      }
      
      // 确保至少有三个结果
      if (results.length < 3) {
        results.push({
          translate: lastName + '安',
          pronunciation: this.getSurnamePinyin(lastName) + ' Ān',
          explanation: this.formatExplanation('安', 'Ān', '意为"平安、安宁"，象征平安幸福的生活。', this.currentLanguage),
          cultural: '',
          pronunciationSimilarity: 6
        });
      }
      
      if (results.length < 3) {
        results.push({
          translate: lastName + '德',
          pronunciation: this.getSurnamePinyin(lastName) + ' Dé',
          explanation: this.formatExplanation('德', 'Dé', '意为"道德、品德"，象征高尚的品德和修养。', this.currentLanguage),
          cultural: '',
          pronunciationSimilarity: 5
        });
      }
      
      if (results.length < 3) {
        results.push({
          translate: lastName + '宇',
          pronunciation: this.getSurnamePinyin(lastName) + ' Yǔ',
          explanation: this.formatExplanation('宇', 'Yǔ', '意为"宇宙、空间"，象征广阔的胸怀和远大的志向。', this.currentLanguage),
          cultural: '',
          pronunciationSimilarity: 7
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
    
    playPronunciation(text) {
      if (!text) {
        logError('无法播放：文本为空');
        return;
      }
      
      log(`尝试播放发音: ${text}`);
      
      if ('speechSynthesis' in window) {
        // 停止当前正在播放的语音
        window.speechSynthesis.cancel();
        
        // 创建新的语音对象
        const utterance = new SpeechSynthesisUtterance();
        
        // 保存utterance引用，防止垃圾回收
        this.currentUtterance = utterance;
        
        // 获取可用的声音
        const voices = window.speechSynthesis.getVoices();
        
        // 查找中文声音优先级：
        // 1. 首选普通话(中国大陆)
        // 2. 其次中文（台湾）或其他中文声音
        // 3. 如果没有中文声音，使用默认声音
        let chineseVoice = voices.find(voice => voice.lang.match(/zh[-_]CN/i) && voice.localService);
        
        if (!chineseVoice) {
          chineseVoice = voices.find(voice => voice.lang.match(/zh[-_]CN/i));
        }
        
        if (!chineseVoice) {
          chineseVoice = voices.find(voice => voice.lang.match(/zh[-_]/i));
        }
        
        // 如果有中文声音，使用它
        if (chineseVoice) {
          utterance.voice = chineseVoice;
          utterance.lang = chineseVoice.lang.replace('_', '-');
        } else {
          utterance.lang = 'zh-CN';
        }
        
        // 设置发音内容
        utterance.text = text;
        
        // 设置语音参数 - 调整以获得更好的发音
        utterance.volume = 1;    // 音量: 0 到 1
        utterance.rate = 0.8;    // 语速: 0.1 到 10 (稍微放慢语速使发音更清晰)
        utterance.pitch = 1.2;   // 音调: 0 到 2 (稍微提高音调增强清晰度)
        
        // 添加错误处理
        utterance.onerror = (event) => {
          logError('语音合成错误:', event.error);
          message.error(this.locale === 'zh' ? '发音失败，请重试' : 'Pronunciation failed, please try again');
        };
        
        // 添加完成事件处理
        utterance.onend = () => {
          this.currentUtterance = null;
        };
        
        // 播放语音
        window.speechSynthesis.speak(utterance);
      } else {
        logWarn('当前浏览器不支持语音合成API');
        message.warning(this.locale === 'zh' ? '您的浏览器不支持语音合成' : 'Your browser does not support speech synthesis');
      }
    },
    
    // 添加处理播放发音的点击事件方法
    handlePlayClick(result) {
      if (!result) {
        logError('无法播放：结果对象为空');
        return;
      }
      
      // 使用translate作为文本来播放
      const textToPlay = result.translate;
      
      if (textToPlay) {
        this.playPronunciation(textToPlay);
      } else if (this.results && this.results.length > 0) {
        // 如果没有单个结果对象但有结果数组，播放第一个结果的发音
        const firstResult = this.results[0];
        this.playPronunciation(firstResult.translate);
      } else {
        logError('无法找到要播放的文本');
        message.error(this.locale === 'zh' ? '找不到要播放的文本' : 'No text to play');
      }
    },
    
    copyToClipboard(text) {
      navigator.clipboard.writeText(text).then(() => {
        // 创建一个自定义的提示元素
        this.showCopyToast(this.locale === 'zh' ? '已复制到剪贴板' : 'Copied to clipboard');
      }).catch(err => {
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
          this.showCopyToast(this.locale === 'zh' ? '已复制到剪贴板' : 'Copied to clipboard');
        } catch (e) {
          console.error('备用复制方法失败:', e);
          // 使用alert作为最后的备选方案
          alert(this.locale === 'zh' ? '复制失败，请手动复制' : 'Copy failed, please copy manually');
        } finally {
          document.body.removeChild(textarea);
        }
      });
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
    
    shareResult(result) {
      const shareText = `我的中文名字是 ${result.name} (${result.pronunciation})`;
      
      if (navigator.share) {
        navigator.share({
          title: this.$t('translate.shareTitle'),
          text: shareText,
          url: window.location.href
        })
        .catch((error) => logError('分享失败:', error));
      } else {
        message.info(`分享: ${shareText}`);
      }
    },
    switchLanguage(code) {
      // 更新当前语言
      this.currentLanguage = code;
      // 清空已有结果
      this.results = [];
      // 保存当前表单数据
      const currentName = this.formData.fullName;
      // 清空输入框中的文字
      this.formData.fullName = '';
      // 获取新语言的label文本
      const languageLabel = this.languageOptions.find(l => l.code === code)?.text || '';
      log(`切换到语言: ${code}, 提示文本: ${languageLabel}`);
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
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
  padding: 40px;
  transition: all 0.3s ease;
  max-width: 1000px;
  margin: 0 auto 40px;
}

.language-select-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 28px;
  justify-content: center;
  padding: 5px 10px;
}

.lang-button {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: white;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.25s ease;
  text-decoration: none;
  color: #666;
  width: 68px;
  height: 62px;
  padding: 6px;
  position: relative;
  opacity: 0.8;
  text-align: center;
}

.lang-button:hover {
  opacity: 1;
  border-color: #ccc;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
  color: #333;
}

.lang-button.active {
  background: #e60012;
  color: white;
  border-color: #e60012;
  opacity: 1;
  font-weight: bold;
  transform: translateY(-1px);
  box-shadow: 0 3px 8px rgba(230, 0, 18, 0.3);
}

.lang-icon {
  display: block;
  margin-bottom: 6px;
  height: 28px; 
  width: 38px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 2px;
  box-shadow: 0 1px 2px rgba(0,0,0,0.1);
}

.lang-button.active .lang-icon {
  box-shadow: 0 1px 3px rgba(255,255,255,0.3);
}

.lang-button[title*="日语"] .lang-icon {
  background-image: url('https://flagcdn.com/w40/jp.png');
}

.lang-button[title*="韩语"] .lang-icon {
  background-image: url('https://flagcdn.com/w40/kr.png');
}

.lang-button[title*="英语"] .lang-icon {
  background-image: url('https://flagcdn.com/w40/us.png');
}

.lang-button[title*="法语"] .lang-icon {
  background-image: url('https://flagcdn.com/w40/fr.png');
}

.lang-button[title*="德语"] .lang-icon {
  background-image: url('https://flagcdn.com/w40/de.png');
}

.lang-button[title*="俄语"] .lang-icon {
  background-image: url('https://flagcdn.com/w40/ru.png');
}

.lang-button[title*="西班牙语"] .lang-icon {
  background-image: url('https://flagcdn.com/w40/es.png');
}

.lang-button[title*="阿拉伯语"] .lang-icon {
  background-image: url('https://flagcdn.com/w40/ae.png');
}

.lang-button[title*="葡萄牙语"] .lang-icon {
  background-image: url('https://flagcdn.com/w40/pt.png');
}

.lang-button[title*="意大利语"] .lang-icon {
  background-image: url('https://flagcdn.com/w40/it.png');
}

.lang-button[title*="印地语"] .lang-icon {
  background-image: url('https://flagcdn.com/w40/in.png');
}

.lang-button[title*="中文"] .lang-icon {
  background-image: url('https://flagcdn.com/w40/cn.png');
}

.lang-code {
  font-size: 0.9rem;
  font-weight: bold;
  text-transform: uppercase;
  display: block;
  line-height: 1;
  margin-top: 2px;
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
  font-size: 2rem;
  color: #333;
  margin-bottom: 40px;
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

.result-characters {
  font-size: 4rem;
  font-weight: 600;
  color: #e60012;
  margin-bottom: 15px;
}

.result-pinyin {
  font-size: 1.5rem;
  color: #666;
}

.result-details {
  padding: 35px;
}

.result-item {
  margin-bottom: 20px;
}

.result-item h4 {
  font-size: 1.1rem;
  color: #555;
  margin-bottom: 10px;
}

.result-item p {
  margin: 0;
  color: #333;
  line-height: 1.7;
  font-size: 1.05rem;
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
  
  .language-select-buttons {
    justify-content: center;
    gap: 6px;
    margin-bottom: 20px;
  }
  
  .lang-button {
    width: 60px;
    height: 55px;
    padding: 6px;
  }
  
  .lang-icon {
    height: 22px;
    width: 30px;
    margin-bottom: 4px;
  }
  
  .lang-code {
    font-size: 0.8rem;
  }
}

@media (max-width: 480px) {
  .language-select-buttons {
    gap: 5px;
  }
  
  .lang-button {
    width: 52px;
    height: 48px;
    padding: 4px;
  }
  
  .lang-icon {
    height: 20px;
    width: 28px;
    margin-bottom: 2px;
  }
  
  .lang-code {
    font-size: 0.7rem;
    margin-top: 0;
  }
}

.error-message {
  display: flex;
  align-items: center;
  margin-top: 15px;
  padding: 12px 15px;
  background-color: rgba(255, 221, 221, 0.5);
  border: 1px solid #ffcccc;
  border-radius: 6px;
  color: #e60012;
}

.error-icon {
  font-size: 1.2rem;
  margin-right: 10px;
}

.error-text {
  font-size: 0.95rem;
  line-height: 1.4;
}

.usage-tips {
  margin-top: 20px;
  padding: 15px;
  background-color: #f5f5f5;
  border-radius: 6px;
  font-size: 0.9rem;
}

.usage-tips p {
  font-weight: 500;
  margin-bottom: 10px;
  color: #444;
}

.usage-tips ul {
  margin: 0;
  padding-left: 20px;
  color: #666;
}

.usage-tips li {
  margin-bottom: 5px;
  line-height: 1.5;
}

.usage-tips li:last-child {
  margin-bottom: 0;
}

/* 修正五行元素标签的颜色 */
.element-tag.木, .element-tag.Wood {
  background: linear-gradient(135deg, #4CAF50 60%, #2E7D32 100%);
  color: white;
}
.element-tag.金, .element-tag.Metal {
  background: linear-gradient(135deg, #FFC107 60%, #FF8F00 100%);
  color: #333;
}
.element-tag.土, .element-tag.Earth {
  background: linear-gradient(135deg, #8D6E63 60%, #5D4037 100%);
  color: white;
}
.element-tag.水, .element-tag.Water {
  background: linear-gradient(135deg, #2196F3 60%, #0D47A1 100%);
  color: white;
}
.element-tag.火, .element-tag.Fire {
  background: linear-gradient(135deg, #F44336 60%, #B71C1C 100%);
  color: white;
}

/* 添加姓名解释的样式 */
.name-explanation {
  padding: 15px 20px;
  background-color: #fff9f9;
  border-top: 1px solid #f0e0e0;
  margin-top: 10px;
}

.meaning-text {
  font-size: 1rem;
  line-height: 1.6;
  color: #e60012;
  margin: 0;
  text-align: left;
}

/* 确保操作按钮样式合适 */
.action-buttons {
  display: flex;
  gap: 10px;
  padding: 10px 20px;
  justify-content: center;
  background-color: #f9f9f9;
}

.action-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 15px;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 20px;
  color: #555;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.2s ease;
}

.action-btn:hover {
  background-color: #f0f0f0;
  border-color: #ccc;
}

.action-btn svg {
  vertical-align: middle;
}

/* 添加左下角显示名字分析的样式 */
.name-analysis-container {
  margin-top: 30px;
  padding: 0 20px;
}

.name-analysis-box {
  display: flex;
  align-items: flex-start;
  padding: 15px;
  border: 1px solid #f0e0e0;
  border-radius: 10px;
  background-color: #fff9f9;
}

.name-analysis-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #e60012;
  color: white;
  font-weight: bold;
  font-size: 1.5rem;
  margin-right: 15px;
  flex-shrink: 0;
}

.name-analysis-content {
  flex: 1;
  font-size: 1rem;
  line-height: 1.6;
  color: #333;
}
</style>