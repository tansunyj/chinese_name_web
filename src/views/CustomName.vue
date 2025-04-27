<template>
  <div class="custom-name-page">
    <div class="container">
      <h1 class="page-title">{{ $t('custom.title') }}</h1>
      
      <div class="content">
        <div class="form-section">
          <form @submit.prevent="generateNames">
            <h3>{{ $t('custom.preferences') }}</h3>
            
            <div class="form-grid">
              <div class="form-group">
                <label for="lastName">{{ $t('translate.lastName') }} <span class="optional-label">({{ locale === 'zh' ? '可选' : 'optional' }})</span></label>
                <div class="input-with-button">
                  <input 
                    type="text" 
                    id="lastName" 
                    v-model="formData.lastName"
                    class="form-input"
                    :placeholder="locale === 'zh' ? '请输入您的姓氏(如：张、王、李)，不填则默认为李' : 'Enter your family name (e.g., Li, Wang, Zhang), defaults to Li if empty'"
                  />
                  <button 
                    type="button" 
                    class="select-surname-btn" 
                    @click="openSurnameSelector"
                    :title="locale === 'zh' ? '选择姓氏' : 'Select surname'"
                  >
                    <i class="select-icon-svg">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M3 9l9 6 9-6" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </i>
                    <span>{{ locale === 'zh' ? '选择' : 'Select' }}</span>
                  </button>
                </div>
              </div>
              
              <div class="form-group">
                <label for="gender">{{ $t('translate.gender') }}</label>
                <select 
                  id="gender" 
                  v-model="formData.gender"
                  class="form-input"
                >
                  <option value="male">{{ $t('translate.male') }}</option>
                  <option value="female">{{ $t('translate.female') }}</option>
                  <option value="other">{{ $t('translate.other') }}</option>
                </select>
              </div>
              
              <div class="form-group full-width">
                <label for="birthdate">{{ $t('custom.birthdate') }}</label>
                <div class="datetime-picker">
                  <input 
                    type="date" 
                    id="birthdate" 
                    v-model="formData.birthdate"
                    class="form-input date-part"
                  />
                  <input 
                    type="time" 
                    id="birthtime" 
                    v-model="formData.birthtime"
                    step="1"
                    class="form-input time-part"
                  />
                </div>
              </div>
            </div>
            
            <div class="form-group full-width">
              <label for="meaning">{{ $t('custom.meaning') }}</label>
              <textarea 
                id="meaning" 
                v-model="formData.meaning"
                class="form-input"
                rows="3"
              ></textarea>
            </div>
            
            <div class="form-group full-width">
              <label for="characteristics">{{ $t('custom.characteristics') }}</label>
              <div class="characteristics-container" :class="{ 'expanded': expandedTraits }">
                <div 
                  v-for="(trait, index) in visibleTraits" 
                  :key="index"
                  class="trait-chip"
                  :class="{ selected: selectedTraits.includes(trait) }"
                  @click="toggleTrait(trait)"
                >
                  {{ trait }}
                </div>
              </div>
              <button type="button" class="toggle-traits" @click.stop.prevent="toggleTraitsExpand">
                <span v-if="expandedTraits">{{ $t('custom.showLess') }}</span>
                <span v-else>{{ $t('custom.showMore') }}<i class="expand-icon">+</i></span>
                <span v-if="selectedTraits.length > 0" class="selected-traits-count">
                  {{ selectedTraits.length }}
                </span>
              </button>
            </div>
            
            <button type="submit" class="submit-button" :class="{ 'loading': isLoading }">
              <span v-if="isLoading">{{ $t('common.loading') }}</span>
              <span v-else>{{ $t('custom.generateButton') }}</span>
            </button>
          </form>
        </div>
        
        <!-- 加载指示器（当加载时显示） -->
        <LoadingIndicator v-if="isLoading" :text="$t('common.generatingNames')" />
        
        <div v-if="results.length" class="results-section">
          <h2>{{ $t('custom.results.title') }}</h2>
          
          <!-- 基本信息部分 -->
          <div class="basic-info-card">
            <h3>{{ locale === 'zh' ? '姓名基本信息' : 'Basic Information' }}</h3>
            <div class="basic-info-grid">
              <div class="info-item">
                <span class="info-label">{{ $t('translate.lastName') }}：</span>
                <span class="info-value">{{ formData.lastName || '李' }}</span>
              </div>
              <div class="info-item">
                <span class="info-label">{{ $t('translate.gender') }}：</span>
                <span class="info-value">
                  {{ formData.gender === 'male' ? (locale === 'zh' ? '男' : 'Male') : 
                     formData.gender === 'female' ? (locale === 'zh' ? '女' : 'Female') : 
                     (locale === 'zh' ? '其他' : 'Other') }}
                </span>
              </div>
              <div class="info-item full-width">
                <span class="info-label">{{ locale === 'zh' ? '公历' : 'Solar Calendar' }}：</span>
                <span class="info-value">{{ formData.birthdate }} {{ formData.birthtime }}</span>
              </div>
              <div class="info-item full-width">
                <span class="info-label">{{ locale === 'zh' ? '农历' : 'Lunar Calendar' }}：</span>
                <span class="info-value">{{ results[0]?.birthInfo?.lunarDate || '' }}</span>
              </div>
            </div>
          </div>
          
          <!-- 分析卡片 -->
          <div class="analysis-cards">
            <!-- 八字用字分析 -->
            <div class="analysis-card">
              <h3 class="analysis-title">{{ locale === 'zh' ? '八字用字分析' : 'Eight Characters Analysis' }}</h3>
              <div class="analysis-content">
                <p>{{ results[0]?.analysis?.eightCharacterAnalysis || 
                    (locale === 'zh' ? 
                    '根据八字喜用神，建议起名用带有木、金、土等属性的字，避开水、火属性。充分考虑八字命局特点，选取适合命主的用字以达到趋吉避凶的效果。' : 
                    'Based on the Eight Characters analysis, we recommend characters with Wood, Metal, and Earth attributes, avoiding Water and Fire. This considers the birth chart features to enhance fortunes.') }}</p>
              </div>
            </div>
            
            <!-- 五行用字分析 -->
            <div class="analysis-card">
              <h3 class="analysis-title">{{ locale === 'zh' ? '五行用字分析' : 'Five Elements Analysis' }}</h3>
              <div class="analysis-content">
                <p>{{ results[0]?.analysis?.fiveElementsAnalysis || 
                    (locale === 'zh' ? 
                    '姓名的五行平衡很重要，姓名宜包含互补的五行属性。您的姓属于木，建议名字包含金、土属性的字，使五行更加均衡，形成相生相助的关系。' : 
                    'Balance in the Five Elements is important. Your surname belongs to Wood element, so we suggest using characters with Metal and Earth attributes to create harmony in the Five Elements.') }}</p>
              </div>
            </div>
            
            <!-- 周易用字分析 -->
            <div class="analysis-card">
              <h3 class="analysis-title">{{ locale === 'zh' ? '周易用字分析' : 'I-Ching Analysis' }}</h3>
              <div class="analysis-content">
                <p>{{ results[0]?.analysis?.iChingAnalysis || 
                    (locale === 'zh' ? 
                    '根据周易理念，起名宜用风雅和谐、山高水长、寓意深远的字。建议选择具有吉祥寓意、音形义俱佳的字，融入传统文化的深厚底蕴。' : 
                    'According to I-Ching philosophy, names should use elegant and harmonious characters with deep meaning. We suggest characters with auspicious meanings and good sound-form-meaning combinations.') }}</p>
              </div>
            </div>
            
            <!-- 生肖用字分析 -->
            <div class="analysis-card">
              <h3 class="analysis-title">{{ locale === 'zh' ? '生肖用字分析' : 'Zodiac Analysis' }}</h3>
              <div class="analysis-content">
                <p>{{ results[0]?.analysis?.zodiacAnalysis || 
                    (locale === 'zh' ? 
                    '生肖属性为' + (results[0]?.birthInfo?.zodiac || '蛇') + '，起名宜用有"月"、"山"、"田"、"人"、"禾"、"木"、"气"、"金"、"目"、"王"、"玉"、"羊"等部首的字，以促方运畅通。' : 
                    'Your zodiac sign is ' + (results[0]?.birthInfo?.zodiac || 'Snake') + '. We recommend using characters with radicals like Moon, Mountain, Field, Person, Grain, Wood, Air, Gold, Eye, King, Jade, and Sheep to enhance your fortune.') }}</p>
              </div>
            </div>
            
            <!-- 姓名分析 -->
            <div class="analysis-card">
              <h3 class="analysis-title">{{ locale === 'zh' ? '姓名分析' : 'Name Analysis' }}</h3>
              <div class="analysis-content">
                <p>{{ results[0]?.analysis?.nameAnalysis || 
                    (locale === 'zh' ? 
                    '理想的姓名会令人感受到美好的期望，能帮助培养内在的学习能力、领导力、魅力与毅力，提升自信，促使德才兼备，彰显个性特点。我们的姓名生成充分考虑这些因素，为您呈现最佳选择。' : 
                    'An ideal name should convey positive expectations and help develop learning ability, leadership, charm, perseverance, and confidence. Our name generation fully considers these factors to present the best options for you.') }}</p>
              </div>
            </div>
          </div>
          
          <!-- 姓名结果卡片 -->
          <div class="results-grid">
            <div v-for="(result, index) in results" :key="index" class="result-card">
              <div class="result-header">
                <div class="result-pinyin-row">
                  <span v-for="(py, i) in result.pinyin.split(' ')" :key="i" class="pinyin-item">{{ py }}</span>
                </div>
                <div class="result-characters">{{ result.characters }}</div>
                <div class="result-elements">
                  <span v-for="(char, i) in result.characters" :key="i" 
                        class="element-tag"
                        :class="getElementClass(result.analysis.characterElements && result.analysis.characterElements[i] 
                                ? result.analysis.characterElements[i] 
                                : ['木', '金', '土', '水', '火'][i % 5])">
                    {{ result.analysis.characterElements && result.analysis.characterElements[i] 
                       ? result.analysis.characterElements[i] 
                       : ['木', '金', '土', '水', '火'][i % 5] }}
                  </span>
                </div>
              </div>
              
              <div class="result-score-section">
                <div class="overall-score">
                  <span class="score-value">{{ result.analysis.score || 92 }}</span>
                  <span class="score-label">{{ locale === 'zh' ? '分' : 'points' }}</span>
                </div>
              </div>
              
              <div class="detailed-scores">
                <div class="score-item">
                  <div class="score-name">{{ locale === 'zh' ? '五行八字' : 'Elements & Eight Characters' }}</div>
                  <div class="score-bar-container">
                    <div class="score-bar five-elements" :style="{width: ((result.analysis.subscores?.fiveElements || 92)/100*100) + '%'}"></div>
                  </div>
                  <div class="score-value-small">{{ result.analysis.subscores?.fiveElements || 92 }}</div>
                </div>
                <div class="score-item">
                  <div class="score-name">{{ locale === 'zh' ? '音律字形' : 'Sound & Shape' }}</div>
                  <div class="score-bar-container">
                    <div class="score-bar sound-shape" :style="{width: ((result.analysis.subscores?.soundShape || 97)/100*100) + '%'}"></div>
                  </div>
                  <div class="score-value-small">{{ result.analysis.subscores?.soundShape || 97 }}</div>
                </div>
                <div class="score-item">
                  <div class="score-name">{{ locale === 'zh' ? '格局寓意' : 'Meaning & Structure' }}</div>
                  <div class="score-bar-container">
                    <div class="score-bar meaning" :style="{width: ((result.analysis.subscores?.meaning || 95)/100*100) + '%'}"></div>
                  </div>
                  <div class="score-value-small">{{ result.analysis.subscores?.meaning || 95 }}</div>
                </div>
                <div class="score-item">
                  <div class="score-name">{{ locale === 'zh' ? '生肖属相' : 'Zodiac Compatibility' }}</div>
                  <div class="score-bar-container">
                    <div class="score-bar zodiac" :style="{width: ((result.analysis.subscores?.zodiac || 88)/100*100) + '%'}"></div>
                  </div>
                  <div class="score-value-small">{{ result.analysis.subscores?.zodiac || 88 }}</div>
                </div>
                <div class="score-item">
                  <div class="score-name">{{ locale === 'zh' ? '生辰八字' : 'Birth Chart' }}</div>
                  <div class="score-bar-container">
                    <div class="score-bar birth-chart" :style="{width: ((result.analysis.subscores?.birthChart || 100)/100*100) + '%'}"></div>
                  </div>
                  <div class="score-value-small">{{ result.analysis.subscores?.birthChart || 100 }}</div>
                </div>
                <div class="score-item">
                  <div class="score-name">{{ locale === 'zh' ? '国学应用' : 'Classical Usage' }}</div>
                  <div class="score-bar-container">
                    <div class="score-bar classical" :style="{width: ((result.analysis.subscores?.classical || 100)/100*100) + '%'}"></div>
                  </div>
                  <div class="score-value-small">{{ result.analysis.subscores?.classical || 100 }}</div>
                </div>
              </div>
              
              <div class="character-meanings">
                <div v-for="(char, i) in result.characters.substring(formData.lastName ? formData.lastName.length : 1)" 
                     :key="i" 
                     class="character-meaning-item">
                  <div class="character-box">{{ char }}</div>
                  <div class="character-explanation">
                    <strong>{{ char }}：</strong>
                    {{ getCharacterMeaning(result, char, i) }}
                  </div>
                </div>
              </div>
              
              <div class="result-actions">
                <button class="action-button copy" @click="copyToClipboard(result.characters)">
                  {{ $t('common.copy') }}
                </button>
                <button class="action-button save" @click="saveResult(result)">
                  {{ $t('custom.results.save') }}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- 姓氏选择对话框 -->
  <div v-if="showSurnameSelector" class="surname-dialog-container">
    <div class="surname-dialog">
      <div class="dialog-header">
        <h3>{{ locale === 'zh' ? '选择常用姓氏' : 'Select Common Surname' }}</h3>
        <button class="dialog-close" @click="showSurnameSelector = false">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor">
            <path d="M18 6L6 18M6 6l12 12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </div>
      
      <div class="dialog-body">
        <!-- 搜索框 -->
        <div class="search-bar">
          <div class="search-input-container">
            <input 
              type="text" 
              v-model="surnameSearch" 
              :placeholder="locale === 'zh' ? '搜索姓氏...' : 'Search surname...'"
              class="search-input"
            />
            <span class="search-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor">
                <circle cx="11" cy="11" r="7" stroke-width="2"/>
                <path d="M16 16l4 4" stroke-width="2" stroke-linecap="round"/>
              </svg>
            </span>
            <!-- 添加清除按钮 -->
            <button 
              v-if="surnameSearch || selectedStroke !== null" 
              class="clear-filter-btn" 
              @click="clearFilters"
              :title="locale === 'zh' ? '清除筛选条件' : 'Clear filters'"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
        
        <!-- 筛选选项 -->
        <div class="filter-options">
          <div class="filter-group">
            <span class="filter-label">{{ locale === 'zh' ? '按笔画' : 'By Strokes' }}</span>
            <div class="filter-buttons">
              <button 
                v-for="stroke in [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]" 
                :key="stroke"
                class="stroke-btn"
                :class="{ active: selectedStroke === stroke }"
                @click="filterByStroke(stroke)"
              >
                {{ stroke }}
              </button>
              <button 
                class="stroke-btn all-btn" 
                :class="{ active: selectedStroke === null }"
                @click="filterByStroke(null)"
              >
                {{ locale === 'zh' ? '全部' : 'All' }}
              </button>
            </div>
          </div>
        </div>
        
        <!-- 姓氏列表 -->
        <div class="surname-list">
          <template v-if="filteredSurnames.length > 0">
            <button 
              v-for="surname in filteredSurnames" 
              :key="surname.char"
              class="surname-item"
              @click="selectSurname(surname.char)"
            >
              <span class="surname-char">{{ surname.char }}</span>
              <span class="surname-pinyin">{{ surname.pinyin }}</span>
              <span class="stroke-count">{{ locale === 'zh' ? '笔画: ' : 'Strokes: ' }}{{ surname.strokes }}</span>
            </button>
          </template>
        </div>
      </div>
      
      <div class="dialog-footer">
        <button class="btn-cancel" @click="showSurnameSelector = false">
          {{ locale === 'zh' ? '取消' : 'Cancel' }}
        </button>
        <button class="btn-primary" @click="showSurnameSelector = false">
          {{ locale === 'zh' ? '确定' : 'Confirm' }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { useI18n } from 'vue-i18n'
import { sendAIRequest, parseAIResponse } from '@/services/aiService';
import { nameGenerationPrompts } from '@/services/promptTemplates';
import { nameGenerationSystemPrompt } from '@/config/systemPrompts';
import LoadingIndicator from '@/components/LoadingIndicator.vue';
import aiConfig from '@/config/aiConfig';
import chineseSurnames from '@/data/ChineseSurnames.js';

export default {
  name: 'CustomName',
  components: {
    LoadingIndicator
  },
  setup() {
    const { locale } = useI18n()
    return { locale }
  },
  data() {
    return {
      formData: {
        lastName: '',
        gender: 'male',
        birthdate: '',
        birthtime: '12:00:00'
      },
      traits: [
        // 智慧与思考相关
        'Intelligent', 'Creative', 'Wise', 'Analytical', 'Innovative', 'Scholarly', 'Visionary',
        
        // 性格与品德相关
        'Kind', 'Brave', 'Gentle', 'Honorable', 'Modest', 'Honest', 'Integrity', 'Empathetic', 'Compassionate',
        
        // 力量与决心相关
        'Strong', 'Determined', 'Resilient', 'Persistent', 'Steadfast', 'Courageous',
        
        // 社交与关系相关
        'Loyal', 'Friendly', 'Sociable', 'Charming', 'Diplomatic', 'Harmonious',
        
        // 情感特质
        'Calm', 'Cheerful', 'Passionate', 'Joyful', 'Peaceful', 'Serene',
        
        // 审美与品味相关
        'Elegant', 'Refined', 'Artistic', 'Sophisticated', 'Graceful',
        
        // 成就与抱负相关
        'Ambitious', 'Successful', 'Prosperous', 'Influential', 'Leadership',
        
        // 文化特定价值观
        'Virtuous', 'Traditional', 'Balanced', 'Spiritual', 'Independent', 'Adventurous', 'Respectful', 'Multicultural'
      ],
      visibleTraits: [],
      expandedTraits: false,
      selectedTraits: [],
      isLoading: false,
      results: [],
      showSurnameSelector: false,
      surnameSearch: '',
      selectedStroke: null,
      // 使用导入的姓氏数据
      surnames: chineseSurnames,
    }
  },
  computed: {
    // 计算筛选后的姓氏列表
    filteredSurnames() {
      let result = [...this.surnames];
      
      // 按笔画数筛选
      if (this.selectedStroke) {
        result = result.filter(surname => surname.strokes === this.selectedStroke);
      }
      
      // 按搜索关键词筛选
      if (this.surnameSearch.trim()) {
        const keyword = this.surnameSearch.trim().toLowerCase();
        result = result.filter(surname => 
          surname.char.includes(keyword) || 
          surname.pinyin.toLowerCase().includes(keyword)
        );
      }
      
      return result;
    }
  },
  mounted() {
    // 默认只显示前12个特质（约两行）
    this.updateVisibleTraits();
  },
  methods: {
    toggleTraitsExpand() {
      this.expandedTraits = !this.expandedTraits;
      this.updateVisibleTraits();
    },
    
    updateVisibleTraits() {
      // 无需动态切换visibleTraits的内容，直接显示所有特质
      // 收起/展开状态通过CSS控制显示效果
      this.visibleTraits = [...this.traits];
    },
    
    toggleTrait(trait) {
      if (this.selectedTraits.includes(trait)) {
        this.selectedTraits = this.selectedTraits.filter(t => t !== trait);
      } else {
        this.selectedTraits.push(trait);
      }
    },
    async generateNames() {
      this.isLoading = true;
      
      // 准备API调用参数
      const apiParams = {
        lastName: this.formData.lastName || '李',
        gender: this.formData.gender,
        birthDateTime: this.formData.birthdate + 'T' + this.formData.birthtime,
        characteristics: this.selectedTraits,
        desiredMeaning: this.formData.meaning,
        language: this.locale
      };
      
      try {
        // 获取对应语言的提示词模板
        const promptTemplate = nameGenerationPrompts[this.locale] || nameGenerationPrompts.zh;
        
        // 构建请求参数
        const requestBody = {
          model: aiConfig.models.nameGeneration,
          messages: [
            {
              role: "system",
              content: nameGenerationSystemPrompt
            },
            {
              role: "user",
              content: promptTemplate(apiParams)
            }
          ],
          temperature: aiConfig.temperatures.nameGeneration
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
        if (extractedData && extractedData.names && Array.isArray(extractedData.names)) {
          this.results = extractedData.names;
        } else {
          // 如果无法解析JSON，尝试使用结构化提取
          const structuredData = this.extractStructuredData(aiContent);
          if (structuredData && structuredData.length > 0) {
            this.results = structuredData;
          } else {
            throw new Error('无法从AI响应中提取有效数据');
          }
        }
      } catch (error) {
        console.error('AI名字生成错误:', error);
        // 仅在开发环境中使用模拟数据
        if (window.__env && window.__env.NODE_ENV === 'development') {
          this.results = this.createMockNames(apiParams);
          console.warn('使用模拟数据作为后备方案');
        } else {
          alert('无法连接到AI服务，请稍后再试');
          this.results = [];
        }
      } finally {
        this.isLoading = false;
      }
    },
    
    // 从非结构化文本中提取名字数据
    extractStructuredData(text) {
      try {
        const names = [];
        // 移除markdown格式
        text = text.replace(/```[a-z]*\n|```/g, '');
        
        // 尝试匹配名字模式
        const namePatterns = text.match(/([李王张刘陈杨赵黄周吴][\u4e00-\u9fa5]{1,2})\s*[（(]([^)）]+)[)）]/g) || [];
        const pinyinPatterns = text.match(/拼音[:：]\s*([\w\s]+)/g) || [];
        const meaningPatterns = text.match(/含义[:：]\s*([^\n]+)/g) || [];
        
        // 如果找到名字，构建结构化数据
        if (namePatterns.length > 0) {
          for (let i = 0; i < Math.min(namePatterns.length, 3); i++) {
            const nameMatch = namePatterns[i].match(/([李王张刘陈杨赵黄周吴][\u4e00-\u9fa5]{1,2})/);
            const pinyin = pinyinPatterns[i] ? pinyinPatterns[i].replace(/拼音[:：]\s*/, '') : '';
            const meaning = meaningPatterns[i] ? meaningPatterns[i].replace(/含义[:：]\s*/, '') : '';
            
            if (nameMatch) {
              names.push({
                characters: nameMatch[1],
                pinyin: pinyin || this.getPinyin(nameMatch[1][0]) + ' ' + this.getPinyinForCharacter(nameMatch[1].substring(1)),
                explanation: meaning || `${nameMatch[1]}是一个具有深厚文化底蕴的名字。`,
                cultural: this.locale === 'zh' ? 
                  '这个名字体现了中国传统命名的文化价值观。' : 
                  'This name reflects traditional Chinese naming cultural values.',
                birthInfo: this.createBirthInfo(apiParams.birthDateTime),
                analysis: this.createAnalysis(nameMatch[1])
              });
            }
          }
        }
        
        return names;
      } catch (error) {
        console.error('结构化提取失败:', error);
        return null;
      }
    },
    
    // 模拟生成八字信息
    createBirthInfo(birthDateTime) {
      return {
        solarDate: birthDateTime.replace('T', ' '),
        lunarDate: '辛巳年四月初四日',
        zodiac: this.locale === 'zh' ? '蛇' : 'Snake',
        eightChar: {
          year: '辛巳',
          month: '壬辰',
          day: '己未',
          hour: '丙子'
        },
        fiveElements: {
          year: '金水',
          month: '水土',
          day: '土土',
          hour: '火水'
        },
        naYin: {
          year: '白蜡金',
          month: '长流水',
          day: '天上火',
          hour: '涧下水'
        }
      };
    },
    
    // 模拟生成分析数据
    createAnalysis(name) {
      const strokes = this.getStrokeCount(name);
      return {
        strokes: strokes,
        fiveElementsBalance: '金[1] 木[1] 水[1] 火[1] 土[1]',
        soundMeaning: this.locale === 'zh' ? '音律和谐，寓意美好' : 'Harmonious sound with auspicious meaning',
        compatibility: this.locale === 'zh' ? '与八字五行匹配良好' : 'Good compatibility with birth chart elements',
        score: Math.floor(Math.random() * 11) + 85 // 生成85-95的随机分数
      };
    },
    
    // 简单估算笔画数
    getStrokeCount(name) {
      // 这只是一个简化的估算
      return name.length * 10 + Math.floor(Math.random() * 10);
    },
    
    // 简化的字符拼音转换
    getPinyinForCharacter(char) {
      const pinyinMap = {
        '明': 'Míng', '华': 'Huá', '安': 'Ān', '丽': 'Lì', '德': 'Dé',
        '智': 'Zhì', '勇': 'Yǒng', '文': 'Wén', '雅': 'Yǎ', '博': 'Bó',
        '阳': 'Yáng', '怡': 'Yí', '静': 'Jìng', '雨': 'Yǔ', '嘉': 'Jiā',
        '成': 'Chéng', '俊': 'Jùn', '豪': 'Háo', '婷': 'Tíng', '秀': 'Xiù'
      };
      
      return pinyinMap[char] || 'Míng';
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
    
    // 创建模拟名字数据(原mockNameGenerationAPI方法的逻辑)
    createMockNames(params) {
      return [
        {
          characters: params.lastName ? params.lastName + '智明' : '李智明',
          pinyin: params.lastName ? this.getPinyin(params.lastName) + ' Zhì Míng' : 'Lǐ Zhì Míng',
          explanation: this.locale === 'zh' ? 
            '智(zhì)意为"聪明、有智慧"，明(míng)意为"明亮、清晰、光明"。与姓氏组合，寓意一个既聪明又有光明前途的人。' : 
            'Zhi (智) means "wisdom, intelligence" and Ming (明) means "bright, clear, brilliant". Together with the surname, this name suggests a person who is both intelligent and has a bright future.',
          cultural: this.locale === 'zh' ? 
            '在中国文化中，智慧和光明是非常重视的品质。这个名字适合珍视知识和思想清晰的人。' : 
            'In Chinese culture, intelligence and brightness are highly valued traits. This name would be suitable for someone who values knowledge and clarity of thought.',
          birthInfo: this.createBirthInfo(params.birthDateTime),
          analysis: {
            strokes: 23,
            fiveElementsBalance: '金[2] 木[0] 水[1] 火[1] 土[2]',
            soundMeaning: this.locale === 'zh' ? '音韵和谐，寓意深远' : 'Harmonious pronunciation with deep meaning',
            compatibility: this.locale === 'zh' ? '与命主八字五行搭配协调' : 'Well balanced with birth chart elements',
            score: 92
          }
        },
        {
          characters: params.lastName ? params.lastName + '安德' : '李安德',
          pinyin: params.lastName ? this.getPinyin(params.lastName) + ' Ān Dé' : 'Lǐ Ān Dé',
          explanation: this.locale === 'zh' ? 
            '安(ān)意为"平安、安宁"，德(dé)意为"品德、道德"。与姓氏组合，寓意一个带来平安并拥有道德品质的人。' : 
            'An (安) means "peace, security" and De (德) means "virtue, morality". Combined with the surname, this name suggests a person who brings peace and embodies moral virtue.',
          cultural: this.locale === 'zh' ? 
            '和平与美德是中国传统儒家思想中的重要价值观。这个名字会与那些欣赏传统伦理原则的人产生共鸣。' : 
            'Peace and virtue are traditional Confucian values in Chinese culture. This name would resonate with those who appreciate traditional ethical principles.',
          birthInfo: this.createBirthInfo(params.birthDateTime),
          analysis: {
            strokes: 20,
            fiveElementsBalance: '金[1] 木[0] 水[1] 火[0] 土[3]',
            soundMeaning: this.locale === 'zh' ? '音韵平稳，寓意美好' : 'Balanced pronunciation with auspicious meaning',
            compatibility: this.locale === 'zh' ? '与命主八字五行搭配良好' : 'Good compatibility with birth chart elements',
            score: 88
          }
        }
      ];
    },
    
    // 已有的方法
    getPinyin(lastName) {
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
        '徐': 'Xú',
        '孙': 'Sūn',
        '马': 'Mǎ',
        '朱': 'Zhū',
        '胡': 'Hú',
        '郭': 'Guō',
        '何': 'Hé',
        '林': 'Lín',
        '罗': 'Luó'
      };
      return pinyinMap[lastName] || 'Lǐ';
    },
    copyToClipboard(text) {
      navigator.clipboard.writeText(text).then(() => {
        alert(this.$t('common.copied'));
      });
    },
    saveResult(result) {
      // 模拟保存功能
      alert(`${this.$t('custom.results.save')}: ${result.characters}`);
      // 将来实现保存到用户账户
    },
    filterByStroke(stroke) {
      this.selectedStroke = stroke;
    },
    selectSurname(surname) {
      this.formData.lastName = surname;
      this.showSurnameSelector = false;
    },
    openSurnameSelector() {
      // 重置筛选条件为初始状态
      this.surnameSearch = '';
      this.selectedStroke = null;
      this.showSurnameSelector = true;
    },
    clearFilters() {
      this.surnameSearch = '';
      this.selectedStroke = null;
    },
    getElementClass(element) {
      // 将中文五行属性映射到英文类名
      const elementMap = {
        '木': 'wood',
        '金': 'metal',
        '土': 'earth',
        '水': 'water',
        '火': 'fire'
      };
      
      // 尝试直接映射，如果不存在则使用默认值
      return elementMap[element] || 'wood';
    },
    getCharacterMeaning(result, char, index) {
      // 尝试从结果对象中获取字符含义
      if (result.characterMeanings && result.characterMeanings[char]) {
        return result.characterMeanings[char];
      }
      
      // 如果没有字符含义数据，则提供默认解释
      const defaultMeanings = {
        // 一些常见字符的默认含义
        '智': locale === 'zh' ? 
            '智：意为聪明、有智慧。读音zhì。指睿智、聪明才智，形容拥有高深的思考能力和见识。用作人名意指聪明、睿智、有才能之义。' : 
            "Zhì: Means wisdom and intelligence. Represents profound thinking ability and knowledge. As a name, it implies cleverness, wisdom and talent.",
        '明': locale === 'zh' ? 
            '明：意为光明、清晰、明亮。读音míng。指光亮、清楚、明白，也指睿智、英明。用作人名意指光明磊落、聪明睿智、前途光明之义。' : 
            "Míng: Means bright, clear, and luminous. Represents clarity and brilliance. As a name, it implies integrity, intelligence, and a bright future.",
        '辰': locale === 'zh' ? 
            '辰：意为时日、星辰。读音chén。为地支之一，代表龙，象征吉祥、高贵。用作人名意指朝气蓬勃、精力充沛、前程似锦之义。' : 
            "Chén: Represents time, celestial bodies. It is one of the Earthly Branches, symbolizing the dragon. As a name, it implies vigor, energy, and bright prospects.",
        '伟': locale === 'zh' ? 
            '伟：意为高大、壮丽、杰出。读音wěi。指宏伟、伟大、卓越。用作人名意指杰出、高大、有远大的志向、贡献卓越之义。' : 
            "Wěi: Means grand, magnificent, outstanding. Represents greatness and excellence. As a name, it implies distinction, greatness, and lofty aspirations.",
        '信': locale === 'zh' ? 
            '信：意为诚实、可靠、信念。读音xìn。指诚信、信任、相信。用作人名意指为人诚恳、值得信赖、有信念之义。' :
            "Xìn: Means honest, reliable, belief. Represents trustworthiness and faith. As a name, it implies sincerity, reliability, and conviction.",
        '杰': locale === 'zh' ? 
            '杰：意为才能出众、卓越。读音jié。指杰出、优秀、不凡。用作人名意指才华横溢、卓尔不群、成就非凡之义。' :
            "Jié: Means outstanding talent and excellence. Represents distinction and superiority. As a name, it implies extraordinary talent, uniqueness, and remarkable achievements.",
        '涵': locale === 'zh' ? 
            '涵：意为包容、涵养。读音hán。指包含、容纳、涵蓄。用作人名意指内涵丰富、修养良好、宽容大度之义。' :
            "Hán: Means inclusive, cultivated. Represents containment and tolerance. As a name, it implies rich inner qualities, good cultivation, and magnanimity.",
        '哲': locale === 'zh' ? 
            '哲：意为聪明、有智慧。读音zhé。指哲学、哲理、睿智。用作人名意指富有哲理、思想深刻、睿智通达之义。' :
            "Zhé: Means wise, philosophical. Represents wisdom and philosophy. As a name, it implies philosophical thinking, profound thoughts, and sagacity.",
        '瑞': locale === 'zh' ? 
            '瑞：意为吉祥、好预兆。读音ruì。指祥瑞、瑞气、吉兆。用作人名意指吉祥如意、福气、祥和之义。' :
            "Ruì: Means auspicious, good omen. Represents good fortune and blessing. As a name, it implies good luck, happiness, and harmony.",
        '宇': locale === 'zh' ? 
            '宇：意为宇宙、空间。读音yǔ。指宏大的空间、气度不凡。用作人名意指胸怀宽广、气度不凡、境界高远之义。' :
            "Yǔ: Means universe, space. Represents vast space and extraordinary bearing. As a name, it implies broad-mindedness, extraordinary demeanor, and lofty horizons."
      };
      
      // 返回默认含义或通用提示
      return defaultMeanings[char] || 
        (locale === 'zh' ? 
          `${char}：具有深厚文化底蕴的汉字，在名字中寓意着美好品质与祝福。` : 
          `${char}: A Chinese character with rich cultural connotations, symbolizing fine qualities and good wishes in a name.`);
    }
  }
}
</script>

<style scoped>
.custom-name-page {
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

.form-section h3 {
  margin-bottom: 25px;
  color: #333;
  font-size: 1.5rem;
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-bottom: 25px;
}

.form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}

.full-width {
  grid-column: 1 / -1;
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
  width: 100%;
}

.form-input:focus {
  outline: none;
  border-color: #e60012;
}

.characteristics-container {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 5px 0;
  margin-bottom: 10px;
  transition: all 0.3s ease;
  overflow: hidden;
  max-height: 120px; /* 约两行特质的高度 */
}

.characteristics-container.expanded {
  max-height: none; /* 不限制高度，显示所有特质 */
  overflow: visible;
  margin-bottom: 15px;
}

.trait-chip {
  background-color: #f8f8f8;
  border-radius: 20px;
  padding: 8px 15px;
  font-size: 0.95rem;
  cursor: pointer;
  transition: all 0.3s;
  border: 1px solid #eaeaea;
  box-shadow: 0 1px 2px rgba(0,0,0,0.05);
  margin-bottom: 5px;
}

.trait-chip:hover {
  background-color: #f0f0f0;
  border-color: #ddd;
  transform: translateY(-1px);
}

.trait-chip.selected {
  background-color: #e60012;
  color: white;
  border-color: #d00010;
  box-shadow: 0 2px 4px rgba(230,0,18,0.2);
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
  margin-top: 20px;
  position: relative;
  overflow: hidden;
}

.submit-button:hover {
  background-color: #d00010;
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
  
  .custom-name-page {
    padding: 70px 0;
  }
  
  .characteristics-container {
    max-height: 250px;
  }
  
  .trait-chip {
    padding: 6px 12px;
    font-size: 0.85rem;
  }
  
  .toggle-traits {
    width: 100%;
    margin-top: 15px;
  }
}

.datetime-picker {
  display: flex;
  gap: 10px;
}

.date-part {
  flex: 2;
}

.time-part {
  flex: 1;
}

.birth-info {
  margin: 10px 0;
}

.birth-info-item {
  margin-bottom: 5px;
}

.birth-info-item .label, 
.analysis-item .label {
  font-weight: 600;
  color: #555;
  display: inline-block;
  min-width: 100px;
}

.birth-info-item .value,
.analysis-item .value {
  color: #333;
}

.eight-char-table {
  margin: 15px 0;
  overflow-x: auto;
}

.eight-char-table table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.9rem;
}

.eight-char-table th,
.eight-char-table td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: center;
}

.eight-char-table th {
  background-color: #f5f5f5;
  font-weight: 600;
}

.name-analysis {
  margin: 10px 0;
}

.analysis-item {
  margin-bottom: 5px;
}

.analysis-score {
  margin-top: 10px;
  text-align: right;
}

.score-label {
  font-weight: 600;
  color: #555;
}

.score-value {
  font-size: 1.2rem;
  font-weight: 700;
  color: #e60012;
  padding: 2px 8px;
  border-radius: 4px;
  background-color: #ffeeee;
}

.optional-label {
  font-size: 0.85rem;
  font-weight: normal;
  color: #666;
  font-style: italic;
}

.toggle-traits {
  background-color: transparent;
  color: #e60012;
  border: 1px solid #e60012;
  border-radius: 20px;
  padding: 7px 15px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  display: block;
  width: auto;
  margin: 10px auto 20px;
}

.toggle-traits:hover {
  background-color: rgba(230,0,18,0.05);
  transform: translateY(-1px);
}

.expand-icon {
  display: inline-block;
  margin-left: 5px;
  font-style: normal;
  transition: transform 0.3s;
}

.selected-traits-count {
  display: inline-block;
  background-color: #e60012;
  color: white;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  line-height: 20px;
  text-align: center;
  font-size: 0.8rem;
  margin-left: 8px;
}

.input-with-button {
  position: relative;
}

.select-surname-btn {
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  background: none;
  border: none;
  padding: 0 15px;
  margin: 0;
  cursor: pointer;
  font-size: 0.9rem;
  color: #e60012;
  background-color: #f8f8f8;
  border-left: 1px solid #ddd;
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
  transition: all 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
}

.select-surname-btn:hover {
  background-color: #f0f0f0;
  color: #d00010;
}

.select-surname-btn:active {
  background-color: #e8e8e8;
}

.select-icon-svg {
  display: flex;
  align-items: center;
}

.surname-dialog-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  animation: fadeIn 0.2s ease-out;
}

.surname-dialog {
  width: 95%;
  max-width: 1200px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 5px 30px rgba(0, 0, 0, 0.2);
  position: relative;
  height: 85vh; /* 设置固定高度，使用视口高度的百分比 */
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideUp {
  from { transform: translateY(30px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

.dialog-header {
  padding: 16px 20px;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.dialog-header h3 {
  font-size: 1.5rem;
  color: #333;
  margin: 0;
  font-weight: 600;
}

.dialog-close {
  background: none;
  border: none;
  color: #666;
  cursor: pointer;
  padding: 8px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.dialog-close:hover {
  background-color: #f5f5f5;
  color: #333;
}

.dialog-body {
  padding: 16px 20px;
  flex-grow: 1;
  overflow-y: auto;
  /* 移除max-height设置，让内容区域自适应父容器 */
}

.search-bar {
  margin: 20px 0;
}

.search-input-container {
  position: relative;
  width: 100%;
}

.search-input {
  padding: 12px 40px 12px 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 16px;
  width: 100%;
  background-color: #f8f8f8;
  transition: all 0.3s;
}

.search-input:focus {
  outline: none;
  border-color: #e60012;
  background-color: #fff;
  box-shadow: 0 0 0 3px rgba(230, 0, 18, 0.1);
}

.search-icon {
  position: absolute;
  right: 45px; /* 调整到右侧，让位给清除按钮 */
  top: 50%;
  transform: translateY(-50%);
  color: #999;
}

.filter-options {
  margin-bottom: 20px;
}

.filter-group {
  margin-bottom: 16px;
}

.filter-group .filter-label {
  font-weight: 600;
  color: #555;
  margin-bottom: 12px;
  display: block;
}

.filter-buttons {
  display: flex;
  flex-wrap: nowrap;
  gap: 5px;
  margin-top: 8px;
  overflow-x: auto;
  padding-bottom: 5px;
  width: 100%;
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.filter-buttons::-webkit-scrollbar {
  display: none;
}

.stroke-btn {
  min-width: 36px;
  height: 36px;
  padding: 0;
  flex: 0 0 auto;
  background-color: #f8f8f8;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s;
  font-weight: 500;
  color: #333;
}

.stroke-btn:hover {
  background-color: #eee;
  border-color: #ccc;
}

.stroke-btn.active {
  background-color: #e60012;
  color: white;
  border-color: #e60012;
  box-shadow: 0 2px 5px rgba(230, 0, 18, 0.2);
}

.stroke-btn.all-btn {
  min-width: 50px;
  background-color: #f8f8f8;
  font-weight: 600;
}

.stroke-btn.all-btn.active {
  background-color: #e60012;
  color: white;
}

.surname-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(95px, 1fr));
  gap: 10px;
  height: calc(85vh - 220px);
  min-height: 400px;
  overflow-y: auto;
  padding: 15px 10px 20px 10px;
  border-radius: 8px;
  grid-row-gap: 10px;
  grid-auto-rows: 130px;
}

.surname-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 5px;
  background: white;
  border: 1px solid #eee;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;
  text-align: center;
  position: relative;
  overflow: hidden;
  height: 130px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.05);
  width: 100%;
  box-sizing: border-box;
}

.surname-item:hover {
  background-color: #f9f9f9;
  border-color: #ddd;
  transform: translateY(-2px);
  box-shadow: 0 3px 10px rgba(0,0,0,0.1);
}

.surname-char {
  font-weight: 600;
  color: #333;
  font-size: 2rem;
  margin-top: 15px;
  margin-bottom: 8px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.surname-pinyin {
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 5px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.stroke-count {
  font-size: 0.75rem;
  color: #888;
  background-color: #f5f5f5;
  padding: 3px 8px;
  border-radius: 10px;
  margin-top: auto;
  margin-bottom: 15px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.surname-item::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background-color: #e60012;
  opacity: 0;
  transition: opacity 0.2s;
}

.surname-item:hover::after {
  opacity: 1;
}

.dialog-footer {
  display: flex;
  justify-content: flex-end;
  padding: 12px 20px;
  background-color: #f9f9f9;
  border-top: 1px solid #eee;
  gap: 12px;
}

.btn-cancel {
  background-color: #fff;
  color: #555;
  border: 1px solid #ddd;
  border-radius: 6px;
  padding: 10px 20px;
  font-size: 0.95rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-cancel:hover {
  background-color: #f5f5f5;
  border-color: #ccc;
}

.btn-primary {
  background-color: #e60012;
  color: white;
  border: none;
  border-radius: 6px;
  padding: 10px 20px;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;
}

.btn-primary:hover {
  background-color: #d00010;
  box-shadow: 0 2px 5px rgba(230, 0, 18, 0.3);
}

@media (max-width: 768px) {
  .surname-dialog {
    width: 95%;
    max-width: none;
    height: 90vh;
  }
  
  .surname-list {
    grid-template-columns: repeat(auto-fill, minmax(90px, 1fr));
    height: calc(90vh - 220px);
    gap: 8px;
    grid-row-gap: 8px;
    grid-auto-rows: 120px;
    padding: 10px 5px 16px 5px;
  }
  
  .surname-item {
    padding: 8px 5px;
    height: 120px;
  }
  
  .surname-char {
    font-size: 1.8rem;
    margin-top: 10px;
    margin-bottom: 5px;
  }
  
  .surname-pinyin {
    font-size: 0.85rem;
    margin-bottom: 3px;
  }
  
  .stroke-count {
    font-size: 0.7rem;
    padding: 2px 6px;
    margin-bottom: 10px;
  }
}

/* 添加空状态样式，确保即使没有结果也保持固定高度 */
.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: #888;
  font-size: 16px;
  text-align: center;
  padding: 30px;
}

.empty-state svg {
  width: 60px;
  height: 60px;
  margin-bottom: 15px;
  color: #ddd;
}

/* 当没有搜索结果时显示空状态提示 */
.empty-state-message {
  margin-top: 10px;
}

.clear-filter-btn {
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  background: #f0f0f0;
  border: none;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #666;
  z-index: 2;
}

.clear-filter-btn:hover {
  background: #e0e0e0;
  color: #e60012;
}

.basic-info-card {
  background-color: white;
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 25px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
}

.basic-info-card h3 {
  color: #333;
  font-size: 1.3rem;
  margin-bottom: 15px;
  border-left: 4px solid #e60012;
  padding-left: 10px;
}

.basic-info-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
}

.info-item {
  display: flex;
  align-items: center;
}

.info-item.full-width {
  grid-column: span 2;
}

.info-label {
  color: #555;
  font-weight: 500;
  min-width: 90px;
}

.info-value {
  color: #333;
}

.analysis-cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
}

.analysis-card {
  background-color: white;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  transition: transform 0.2s;
}

.analysis-card:hover {
  transform: translateY(-3px);
}

.analysis-title {
  color: #e60012;
  font-size: 1.2rem;
  margin-bottom: 15px;
  border-bottom: 1px solid #eee;
  padding-bottom: 10px;
  position: relative;
}

.analysis-title::before {
  content: '';
  position: absolute;
  left: -20px;
  top: 50%;
  width: 5px;
  height: 20px;
  background-color: #e60012;
  transform: translateY(-50%);
}

.analysis-content {
  color: #333;
  line-height: 1.6;
}

.result-card {
  background-color: white;
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.3s, box-shadow 0.3s;
  display: flex;
  flex-direction: column;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  margin-bottom: 30px;
}

.result-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}

.result-header {
  background-color: #f9f9fa;
  padding: 20px;
  text-align: center;
  border-bottom: 1px solid #eee;
}

.result-pinyin-row {
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
}

.pinyin-item {
  margin: 0 5px;
  color: #666;
}

.result-elements {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 10px;
}

.element-tag {
  padding: 3px 8px;
  border-radius: 15px;
  font-size: 0.9rem;
  color: white;
}

.element-tag.wood {
  background-color: #5cb85c;
}

.element-tag.metal {
  background-color: #f0ad4e;
}

.element-tag.earth {
  background-color: #d9534f;
}

.element-tag.water {
  background-color: #5bc0de;
}

.element-tag.fire {
  background-color: #d9534f;
}

.result-score-section {
  display: flex;
  justify-content: center;
  padding: 15px;
  background-color: #f9f9fa;
  border-bottom: 1px solid #eee;
}

.overall-score {
  text-align: center;
}

.score-value {
  font-size: 2.5rem;
  font-weight: 700;
  color: #e60012;
}

.score-label {
  font-size: 1.2rem;
  color: #666;
}

.detailed-scores {
  padding: 20px;
  border-bottom: 1px solid #eee;
}

.score-item {
  display: flex;
  align-items: center;
  margin-bottom: 12px;
}

.score-name {
  width: 120px;
  color: #555;
  font-size: 0.95rem;
}

.score-bar-container {
  flex: 1;
  height: 12px;
  background-color: #eee;
  border-radius: 10px;
  overflow: hidden;
  margin: 0 10px;
}

.score-bar {
  height: 100%;
  border-radius: 10px;
}

.score-bar.five-elements {
  background-color: #5bc0de;
}

.score-bar.sound-shape {
  background-color: #9c27b0;
}

.score-bar.meaning {
  background-color: #5cb85c;
}

.score-bar.zodiac {
  background-color: #f0ad4e;
}

.score-bar.birth-chart {
  background-color: #2196F3;
}

.score-bar.classical {
  background-color: #e91e63;
}

.score-value-small {
  width: 40px;
  text-align: right;
  color: #333;
  font-weight: 600;
}

.character-meanings {
  padding: 20px;
}

.character-meaning-item {
  display: flex;
  margin-bottom: 15px;
}

.character-box {
  width: 50px;
  height: 50px;
  border: 1px solid #eee;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: #333;
  background-color: #f9f9fa;
  margin-right: 15px;
  flex-shrink: 0;
}

.character-explanation {
  flex: 1;
  line-height: 1.5;
  color: #333;
}

@media (max-width: 768px) {
  .basic-info-grid {
    grid-template-columns: 1fr;
  }
  
  .info-item.full-width {
    grid-column: span 1;
  }
  
  .analysis-cards {
    grid-template-columns: 1fr;
  }
  
  .result-characters {
    font-size: 2.3rem;
  }
  
  .score-name {
    width: 100px;
    font-size: 0.85rem;
  }
}
</style>