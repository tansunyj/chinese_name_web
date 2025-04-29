<template>
  <div class="translate-page">
    <div class="container">
      <h1 class="page-title">{{ $t('translate.title') }}</h1>
      
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
            <div class="result-card" v-for="(result, index) in results" :key="index">
              <div class="result-header">
                <div class="result-characters">{{ result.translatedName }}</div>
                <div class="result-pinyin">{{ result.pronunciationGuide }}</div>
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
                
                <button class="action-btn" @click="copyToClipboard(result.characters)">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2">
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                  </svg>
                  {{ locale === 'zh' ? '复制' : 'Copy' }}
                </button>
                
                <button class="action-btn share-btn" @click="shareResult">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="18" cy="5" r="3"></circle>
                    <circle cx="6" cy="12" r="3"></circle>
                    <circle cx="18" cy="19" r="3"></circle>
                    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                  </svg>
                  {{ locale === 'zh' ? '分享' : 'Share' }}
                </button>
              </div>
              <div class="name-explanation">
                <div class="meaning-text">
                  <span v-if="result.explanation">{{ result.explanation }}</span>
                  <span v-else>{{ locale === 'zh' ? '名字含义加载中...' : 'Loading name meaning...' }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 将结果解释显示在底部的组件中 -->
        <div class="name-analysis-container" v-if="results.length">
          <div class="name-analysis-box">
            <div class="name-analysis-icon">命</div>
            <div class="name-analysis-content">
              <div v-if="results[0] && results[0].explanation">{{ results[0].explanation }}</div>
              <div v-else>名字分析加载中...</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { message } from 'ant-design-vue';
import { translateName } from '@/services/openaiService';
import * as openaiService from '@/services/openaiService';
import { nameTranslationPrompts } from '@/services/promptTemplates';
import LoadingIndicator from '@/components/LoadingIndicator.vue';

export default {
  name: 'TranslateName',
  components: {
    LoadingIndicator
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
        { code: 'us', displayCode: 'US', icon: 'USA', text: '将英语名字翻译成中文名', fullName: '美国英语 (American English)' },
        { code: 'fr', displayCode: 'FR', icon: '🇫🇷', text: '将法语名字翻译成中文名', fullName: '法语 (French)' },
        { code: 'de', displayCode: 'DE', icon: '🇩🇪', text: '将德语名字翻译成中文名', fullName: '德语 (German)' },
        { code: 'ru', displayCode: 'RU', icon: '🇷🇺', text: '将俄语名字翻译成中文名', fullName: '俄语 (Russian)' },
        { code: 'jp', displayCode: 'JP', icon: '🇯🇵', text: '将日语名字翻译成中文名', fullName: '日语 (Japanese)' },
        { code: 'kr', displayCode: 'KR', icon: '🇰🇷', text: '将韩语名字翻译成中文名', fullName: '韩语 (Korean)' },        
        { code: 'es', displayCode: 'ES', icon: '🇪🇸', text: '将西班牙语名字翻译成中文名', fullName: '西班牙语 (Spanish)' },
        { code: 'ar', displayCode: 'AE', icon: '🇦🇪', text: '将阿拉伯语名字翻译成中文名', fullName: '阿拉伯语 (Arabic)' },
        { code: 'pt', displayCode: 'PT', icon: '🇵🇹', text: '将葡萄牙语名字翻译成中文名', fullName: '葡萄牙语 (Portuguese)' },
        { code: 'it', displayCode: 'IT', icon: '🇮🇹', text: '将意大利语名字翻译成中文名', fullName: '意大利语 (Italian)' },
        { code: 'hi', displayCode: 'IN', icon: '🇮🇳', text: '将印地语名字翻译成中文名', fullName: '印地语 (Hindi)' }
      ],
      currentLanguage: 'us'
    }
  },
  computed: {
    currentLanguageTitle() {
      const lang = this.languageOptions.find(l => l.code === this.currentLanguage);
      return lang ? lang.text : this.$t('translate.fullName');
    },
    currentLanguagePlaceholder() {
      // 根据不同语言返回不同的占位符
      const placeholders = {
        us: '请输入英语名字...',
        jp: '请输入日语名字...',
        kr: '请输入韩语名字...',
        gb: '请输入英语名字...',
        fr: '请输入法语名字...',
        de: '请输入德语名字...',
        ru: '请输入俄语名字...',
        es: '请输入西班牙语名字...',
        ar: '请输入阿拉伯语名字...',
        pt: '请输入葡萄牙语名字...',
        it: '请输入意大利语名字...',
        hi: '请输入印地语名字...',
        zh: '请输入中文名字(将优化重新设计)...'
      };
      return placeholders[this.currentLanguage] || this.$t('translate.fullNamePlaceholder');
    }
  },
  methods: {
    async translateName() {
      if (!this.formData.fullName) {
        message.error(this.$t('translate.errors.fullNameRequired'));
        return;
      }
      
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
                  translatedName: { type: "string" },        // 中文名字
                  pronunciationGuide: { type: "string" },    // 拼音
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
                required: ["translatedName", "pronunciationGuide", "explanation"]
              }
            }
          }
        };

        // 根据当前选择的语言设置源语言
        const sourceLanguageMap = {
          us: 'en', // 美国英语
          jp: 'ja', // 日语
          kr: 'ko', // 韩语
          gb: 'en', // 英国英语
          fr: 'fr', // 法语
          de: 'de', // 德语
          ru: 'ru', // 俄语
          es: 'es', // 西班牙语
          ar: 'ar', // 阿拉伯语
          pt: 'pt', // 葡萄牙语
          it: 'it', // 意大利语
          hi: 'hi', // 印地语
          zh: 'zh'  // 中文
        };

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
使用音义结合（同时考虑发音和含义）方法。
请提供3个不同的翻译方案，每个方案包括:
1. 翻译后的中文名字 (translatedName字段)
2. 拼音发音指南 (pronunciationGuide字段)
3. 含义解释 (explanation字段)
4. 文化含义 (cultural字段，可选)

请严格按照以下JSON结构返回，确保字段名称完全一致：
{
  "translations": [
    {
      "translatedName": "中文名字1",
      "pronunciationGuide": "拼音1",
      "explanation": "含义解释1",
      "cultural": "文化含义1"
    },
    {
      "translatedName": "中文名字2",
      "pronunciationGuide": "拼音2",
      "explanation": "含义解释2",
      "cultural": "文化含义2"
    },
    {
      "translatedName": "中文名字3",
      "pronunciationGuide": "拼音3",
      "explanation": "含义解释3",
      "cultural": "文化含义3"
    }
  ]
}`;

        // 使用 openaiService 生成 JSON 结构化数据
        console.log('发送AI请求:', prompt);
        const response = await translateName({
          name: this.formData.fullName,
          prompt: prompt,
          schema: nameSchema,
          model: 'gpt-4o',  // 使用高级模型确保更好的结构化输出
          temperature: 0.8,
          metadata: { type: 'name_translation' }
        });

        console.log('原始响应数据:', response);

        // 检查并处理返回数据
        if (!response?.object?.translations || !Array.isArray(response.object.translations)) {
          throw new Error('translations 数据格式不正确');
        }

        // 规范化结果字段名 (即使字段名已经很明确，仍保留这步作为保险)
        const normalizedResults = response.object.translations.map(item => {
          if (!item) return null; // 跳过空项
          
          try {
            // 尝试从各种可能的字段名提取数据
            const translatedName = item.translatedName || item.characters || item.name || item.chineseName || '';
            const pronunciationGuide = item.pronunciationGuide || item.pinyin || item.pronunciation || '';
            const explanation = item.explanation || item.meaning || item.meanings || item.description || '';
            const cultural = item.cultural || item.culturalMeaning || item.culture || '';
            
            // 如果没有翻译名称，跳过此项
            if (!translatedName) {
              console.warn('跳过没有翻译名称的结果项:', item);
              return null;
            }
            
            // 创建标准化的结果对象
            return {
              translatedName,
              pronunciationGuide: pronunciationGuide || `${translatedName}的拼音`, // 提供默认值
              explanation: explanation || `${translatedName}是一个优美的中文名字`,  // 提供默认值
              cultural: cultural || '',
              // 保留其他可能的字段
              ...(item.analysis ? { analysis: item.analysis } : {})
            };
          } catch (e) {
            console.error('处理翻译结果项时出错:', e);
            return null;
          }
        }).filter(Boolean); // 过滤掉null项

        // 如果没有有效结果，使用后备方案并显示友好提示
        if (normalizedResults.length === 0) {
          console.warn('没有有效的翻译结果，使用后备结果');
          const fallbackResults = this.getFallbackResults();
          this.results = fallbackResults.map(item => ({
            translatedName: item.characters,
            pronunciationGuide: item.pinyin,
            explanation: item.meaning,
            cultural: ''
          }));
          
          // 设置友好的提示信息
          this.errorMessage = this.$t('translate.errors.usingFallback');
        } else {
          // 使用标准化后的数据
          this.results = normalizedResults;
        }

        console.log('最终处理后的结果:', this.results);

      } catch (error) {
        console.error('名字翻译错误:', error);
        console.error('错误堆栈:', error.stack);
        message.error(error.message || '翻译失败，请重试');
        this.errorMessage = this.$t('translate.errors.translationFailed');
        
        // 生成后备结果
        const fallbackResults = this.getFallbackResults();
        this.results = fallbackResults.map(item => ({
          translatedName: item.characters,
          pronunciationGuide: item.pinyin,
          explanation: item.meaning,
          cultural: ''
        }));
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
            characters: lastName + option.char,
            pinyin: this.getSurnamePinyin(lastName) + ' ' + option.pinyin,
            meaning: option.char + '(' + option.pinyin + ')' + option.meaning,
            pronunciationSimilarity: 8
          });
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
      
      if (results.length < 3) {
        results.push({
          characters: lastName + '宇',
          pinyin: this.getSurnamePinyin(lastName) + ' Yǔ',
          meaning: '宇(yǔ)意为"宇宙、空间"，象征广阔的胸怀和远大的志向。',
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
    
    playPronunciation(characters) {
      // 未来实现: 接入文字转语音API
      console.log(`播放发音: ${characters}`);
      alert(`播放发音: ${characters}`);
      
      // 示例实现方向:
      // 1. 调用语音合成API（如百度、讯飞等）
      // 2. 播放返回的音频
    },
    
    // 添加处理播放发音的点击事件方法
    handlePlayClick(result) {
      if (result && result.characters) {
        this.playPronunciation(result.characters);
      } else if (this.results && this.results.length > 0) {
        // 如果没有单个结果对象但有结果数组，播放第一个结果的发音
        this.playPronunciation(this.results[0].characters || this.results[0].translatedName);
      }
    },
    
    copyToClipboard(text) {
      navigator.clipboard.writeText(text).then(() => {
        message.success(this.$t('common.copied'));
      });
    },
    
    shareResult(result) {
      const shareText = `我的中文名字是 ${result.name} (${result.pronunciation})`;
      
      if (navigator.share) {
        navigator.share({
          title: this.$t('translate.shareTitle'),
          text: shareText,
          url: window.location.href
        })
        .catch((error) => console.log('分享失败:', error));
      } else {
        message.info(`分享: ${shareText}`);
      }
    },
    switchLanguage(code) {
      this.currentLanguage = code;
      // 清空已有结果
      this.results = [];
      // 可以选择是否要清空输入框
      // this.formData.fullName = '';
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