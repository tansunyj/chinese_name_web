<template>
  <div class="pinyin-to-name-page">
    <div class="container">
      <h1 class="page-title">{{ $t('pinyinToName.title') }} | Chinese Name Finder | Chercheur de Noms Chinois | 中国語名前検索 | Поиск Китайских Имен</h1>
      <p class="seo-description">Find perfect Chinese characters for your name based on pinyin. Translate your name into Chinese. Trouvez des caractères chinois parfaits basés sur le pinyin. Finden Sie chinesische Zeichen für Ihren Namen. Найдите идеальные китайские иероглифы для вашего имени. 拼音から完璧な漢字を見つけましょう。</p>
      
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
        
        <LoadingIndicator v-if="isLoading" :text="$t('common.searching')" />
        
        <div v-if="showResults" class="result-section">
          <h2 class="section-title">{{ $t('pinyinToName.results.title') }}</h2>
          
          <div class="result-header">
            <p class="result-count">{{ $t('pinyinToName.results.found', { count: results.length }) }}</p>
            <div class="result-actions">
              <a-button type="primary" @click="copyResults">
                <template #icon><CopyOutlined /></template>
                {{ $t('pinyinToName.actions.copyResults') }}
              </a-button>
              <a-button @click="resetForm">
                <template #icon><ReloadOutlined /></template>
                {{ $t('pinyinToName.actions.newSearch') }}
              </a-button>
            </div>
          </div>
          
          <div class="character-grid">
            <a-card 
              v-for="(item, index) in results" 
              :key="index"
              class="character-card"
              :class="{ 'high-popularity': item.popularity > 80, 'medium-popularity': item.popularity > 50 && item.popularity <= 80 }"
              @click="selectCharacter(item)"
            >
              <div class="character-content">
                <div class="character">{{ item.character }}</div>
                <div class="pinyin">{{ item.pinyin }}</div>
                
                <div class="meaning" v-if="item.meaning">{{ item.meaning }}</div>
                <div class="meaning" v-else>{{ getPresetMeaning(item.character) }}</div>
                
                <div class="popularity-bar">
                  <div class="popularity-label">{{ $t('pinyinToName.results.popularity') }}</div>
                  <a-progress 
                    :percent="item.popularity" 
                    size="small" 
                    :stroke-color="getPopularityColor(item.popularity)"
                  />
                </div>
              </div>
            </a-card>
          </div>
          
          <div v-if="selectedCharacters.length > 0" class="selected-section">
            <h3>{{ $t('pinyinToName.selected.title') }}</h3>
            
            <div class="selected-characters">
              <a-tag 
                v-for="(char, index) in selectedCharacters" 
                :key="index" 
                class="selected-tag"
                closable
                @close="removeSelectedCharacter(index)"
              >
                {{ char.character }}
                <span class="selected-pinyin">({{ char.pinyin }})</span>
              </a-tag>
              
              <a-button type="primary" @click="finalizeName" class="finalize-btn">
                {{ $t('pinyinToName.selected.finalize') }}
              </a-button>
            </div>
            
            <div v-if="finalName" class="final-name-section">
              <h3>{{ $t('pinyinToName.finalName.title') }}</h3>
              <div class="final-name">{{ finalName }}</div>
              
              <div class="final-name-meaning">
                <h4>{{ $t('pinyinToName.finalName.meaning') }}</h4>
                <p>{{ finalNameMeaning }}</p>
              </div>
              
              <div class="final-name-actions">
                <a-button type="primary" @click="copyFinalName">
                  <template #icon><CopyOutlined /></template>
                  {{ $t('pinyinToName.actions.copyName') }}
                </a-button>
                <a-button @click="shareFinalName">
                  <template #icon><ShareAltOutlined /></template>
                  {{ $t('pinyinToName.actions.share') }}
                </a-button>
              </div>
            </div>
          </div>
          
          <div v-if="results.length === 0 && !isLoading" class="no-results">
            <a-empty :description="$t('pinyinToName.results.noResults')" />
            <a-button type="primary" @click="resetForm">
              {{ $t('pinyinToName.actions.tryAgain') }}
            </a-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { message, Empty, Button, Card, Tag, Progress } from 'ant-design-vue';
import { convertPinyinToChinese } from '@/services/openaiService';
import LoadingIndicator from '@/components/LoadingIndicator.vue';
import { CopyOutlined, ReloadOutlined, ShareAltOutlined } from '@ant-design/icons-vue';

export default {
  name: 'PinyinToName',
  components: {
    LoadingIndicator,
    CopyOutlined,
    ReloadOutlined,
    ShareAltOutlined,
    AEmpty: Empty,
    AButton: Button,
    ACard: Card,
    ATag: Tag,
    AProgress: Progress
  },
  data() {
    return {
      formData: {
        pinyin: '',
        gender: 'neutral'
      },
      isLoading: false,
      results: [],
      showResults: false,
      selectedCharacters: [],
      finalName: '',
      finalNameMeaning: ''
    }
  },
  mounted() {
    // 添加自动滚动到顶部的功能
    window.scrollTo(0, 0);
  },
  methods: {
    async findCharacters() {
      // 如果没有拼音输入，显示错误提示
      if (!this.formData.pinyin.trim()) {
        message.error(this.$t('pinyinToName.errors.noPinyin'));
        return;
      }

      // 设置加载状态
      this.isLoading = true;
      this.results = []; // 清空之前的结果

      try {
        // 处理拼音输入
        const processedPinyin = this.processPinyinInput(this.formData.pinyin);
        console.log('处理后的拼音:', processedPinyin);
        
        // 确保拼音不为空
        if (!processedPinyin) {
          throw new Error('拼音处理后为空');
        }
        
        // 调用API转换拼音到汉字
        const response = await convertPinyinToChinese({
          pinyin: processedPinyin,
          purpose: this.formData.gender === 'male' ? 'male_name' : 
                  this.formData.gender === 'female' ? 'female_name' : 'name',
          preference: 'common'
        });
        
        console.log('API响应:', response);
        
        // 提取数据
        const extractedResults = this.extractDataFromResponse(response);
        
        // 如果没有结果，使用备选数据
        if (!extractedResults || extractedResults.length === 0) {
          console.log('没有提取到有效结果，使用备选数据');
          this.useFallbackData();
        } else {
          this.results = extractedResults;
        }
        
        // 显示结果
        this.showResults = true;
      } catch (error) {
        console.error('Error converting pinyin to Chinese:', error);
        message.error(this.$t('pinyinToName.errors.conversionFailed'));
        
        // 使用备选数据
        this.useFallbackData();
        this.showResults = true;
      } finally {
        this.isLoading = false;
      }
    },
    
    // 从响应中提取数据的统一方法
    extractDataFromResponse(response) {
      console.log('API返回数据:', response); // 添加日志调试
      
      if (!response) {
        console.error('响应为空');
        return [];
      }
      
      try {
        let options = [];
        
        // 尝试从不同的可能路径获取options
        if (response.object && Array.isArray(response.object.options)) {
          // 标准路径: response.object.options
          options = response.object.options;
          console.log('从标准路径找到options数组:', options.length);
        } else if (response.object && Array.isArray(response.object)) {
          // 替代路径1: response.object是数组
          options = response.object;
          console.log('从替代路径1找到options数组:', options.length);
        } else if (Array.isArray(response)) {
          // 替代路径2: response直接是数组
          options = response;
          console.log('从替代路径2找到options数组:', options.length);
        } else if (response.data && Array.isArray(response.data)) {
          // 替代路径3: response.data是数组
          options = response.data;
          console.log('从替代路径3找到options数组:', options.length);
        } else {
          console.warn('未找到有效的options数组，检查完整响应:', response);
          return [];
        }
        
        // 提取并格式化数据
        return options.map(item => {
          // 提取字符
          const character = item.characters || item.character || '';
          
          // 提取拼音
          const pinyin = item.pinyin || '';
          
          // 提取含义
          const meaning = item.meaning || '';
          
          // 计算流行度
          const popularity = item.popularity || Math.floor(Math.random() * 30) + 70;
          
          console.log(`提取项: 字符=${character}, 拼音=${pinyin}, 含义长度=${meaning.length}`);
          
          return {
            character,
            pinyin,
            meaning,
            popularity,
            tone: 1,
            strokes: 0
          };
        }).filter(item => item.character); // 过滤掉没有字符的项
      } catch (error) {
        console.error('提取数据时出错:', error);
        return [];
      }
    },
    
    // 获取预设的字符含义
    getPresetMeaning(character) {
      const meanings = {
        '明': '明亮、光明',
        '华': '华丽、光彩',
        '平': '平安、平静',
        '安': '安宁、安稳',
        '文': '文雅、有学问',
        '德': '道德、品德',
        '美': '美丽、美好',
        '丽': '美丽、漂亮',
        '雅': '优雅、文雅',
        '静': '安静、平静',
        '智': '智慧、聪明',
        '强': '强壮、坚强',
        '勇': '勇敢、勇气',
        '毅': '毅力、坚毅',
        '忠': '忠诚、忠实',
        '信': '诚信、信任',
        '爱': '爱心、仁爱',
        '和': '和平、和谐',
        '善': '善良、美好',
        '真': '真实、真诚'
      };
      
      return meanings[character] || this.$t('pinyinToName.noMeaningProvided');
    },
    
    // 根据字符计算流行度
    calculatePopularityForChar(char) {
      // 常用字流行度评分
      const popularityMap = {
        // 常用姓氏
        '李': 98, '王': 97, '张': 96, '刘': 95, '陈': 94, '杨': 93, '赵': 92, '黄': 91, '周': 90, '吴': 89,
        // 常用名字用字
        '华': 88, '德': 85, '天': 87, '明': 89, '智': 83, '勇': 82, '文': 86, '雅': 81, '博': 84, '宇': 86,
        '伟': 85, '强': 82, '军': 81, '平': 79, '东': 78, '辉': 77, '力': 76, '顺': 75, '安': 80, '健': 82,
        '立': 77, '家': 79, '晓': 78, '国': 81, '洋': 76, '刚': 75, '亮': 77, '飞': 76, '鹏': 75, '涛': 74,
        '清': 79, '青': 78, '春': 77, '江': 76, '海': 78, '山': 75, '冰': 74, '峰': 76, '云': 75, '雪': 74,
        '莲': 77, '梅': 76, '兰': 75, '竹': 74, '菊': 73, '芳': 75, '丽': 76, '娜': 75, '洁': 74, '静': 73,
        // 其他常用字
        '达': 72, '凯': 71, '昌': 70, '欣': 69, '可': 68, '心': 67, '思': 66, '聪': 65, '睿': 64, '君': 63
      };
      
      // 如果在常用字库中有这个字，直接返回预设流行度
      if (popularityMap[char]) {
        return popularityMap[char];
      }
      
      // 否则返回中等流行度
      return 70 + Math.floor(Math.random() * 10); // 70-80之间的随机值
    },
    
    // 生成随机流行度
    calculateRandomPopularity() {
      return Math.floor(Math.random() * 30) + 70; // 生成70-100之间的随机数
    },
    
    // 使用回退数据
    useFallbackData() {
      // 根据拼音生成模拟数据
      const pinyin = this.formData.pinyin.toLowerCase();
      
      // 针对常见拼音提供特定的回退数据
      const fallbackMap = {
        'li': [
          { character: '李', pinyin: 'lǐ', meaning: '李子树，常用姓氏，象征坚韧、聪明', popularity: 95 },
          { character: '理', pinyin: 'lǐ', meaning: '道理、规律，象征有条理、明事理', popularity: 80 },
          { character: '立', pinyin: 'lì', meaning: '站立、建立，象征独立、坚定', popularity: 75 }
        ],
        'qing': [
          { character: '清', pinyin: 'qīng', meaning: '清澈、纯净，象征纯洁无瑕', popularity: 90 },
          { character: '青', pinyin: 'qīng', meaning: '青色、青春，象征朝气蓬勃', popularity: 85 },
          { character: '轻', pinyin: 'qīng', meaning: '轻盈、轻松，象征无忧无虑', popularity: 75 }
        ],
        'chu': [
          { character: '楚', pinyin: 'chǔ', meaning: '鲜明、清晰，象征卓尔不群', popularity: 88 },
          { character: '初', pinyin: 'chū', meaning: '开始、初次，象征新的开始', popularity: 82 },
          { character: '处', pinyin: 'chǔ', meaning: '处所、安置，象征安定', popularity: 76 }
        ],
        'hua': [
          { character: '华', pinyin: 'huá', meaning: '光彩、光华，象征繁荣昌盛', popularity: 92 },
          { character: '花', pinyin: 'huā', meaning: '花朵、美丽，象征鲜艳美丽', popularity: 88 },
          { character: '化', pinyin: 'huà', meaning: '变化、教化，象征积极变化', popularity: 78 }
        ]
      };
      
      // 尝试匹配完整拼音
      if (fallbackMap[pinyin]) {
        this.results = [...fallbackMap[pinyin]];
      } else {
        // 尝试匹配部分拼音（如对于"qing chu"匹配"qing"和"chu"）
        const parts = pinyin.split(/\s+/);
        let allResults = [];
        
        for (const part of parts) {
          if (fallbackMap[part]) {
            allResults = [...allResults, ...fallbackMap[part]];
          }
        }
        
        if (allResults.length > 0) {
          // 最多显示6个结果
          this.results = allResults.slice(0, 6);
        } else {
          // 通用回退数据
          this.generateGenericFallbackData();
        }
      }
      
      // 根据性别筛选结果
      if (this.formData.gender === 'female') {
        // 为女性添加一些适合的字符
        const femaleChars = [
          { character: '丽', pinyin: 'lì', meaning: '美丽、漂亮，象征美好、华丽', popularity: 85 },
          { character: '美', pinyin: 'měi', meaning: '美丽、优美，象征美好', popularity: 88 },
          { character: '雅', pinyin: 'yǎ', meaning: '文雅、高雅，象征品味与格调', popularity: 84 }
        ];
        
        // 如果结果少于3个，添加适合女性的字符
        if (this.results.length < 3) {
          this.results = [...this.results, ...femaleChars.slice(0, 3 - this.results.length)];
        }
      } else if (this.formData.gender === 'male') {
        // 为男性添加一些适合的字符
        const maleChars = [
          { character: '力', pinyin: 'lì', meaning: '力量、能力，象征强大、有力', popularity: 78 },
          { character: '强', pinyin: 'qiáng', meaning: '强壮、强大，象征力量', popularity: 82 },
          { character: '勇', pinyin: 'yǒng', meaning: '勇敢、无畏，象征勇气', popularity: 80 }
        ];
        
        // 如果结果少于3个，添加适合男性的字符
        if (this.results.length < 3) {
          this.results = [...this.results, ...maleChars.slice(0, 3 - this.results.length)];
        }
      }
    },
    
    // 生成通用的回退数据
    generateGenericFallbackData() {
      const characters = ['华', '德', '天', '明', '智', '勇', '文', '雅', '博', '宇'];
      const pinyins = ['huá', 'dé', 'tiān', 'míng', 'zhì', 'yǒng', 'wén', 'yǎ', 'bó', 'yǔ'];
      const meanings = [
        '代表美好、善良，象征繁荣昌盛',
        '象征高尚品德、道德品质',
        '象征宽广、崇高，如天空般广阔',
        '体现光明、智慧，如光明磊落',
        '寓意聪明、智慧，善于思考',
        '表示勇敢、坚强，勇往直前',
        '代表文化、文采，有文学素养',
        '象征优雅、文雅，气质高雅',
        '表示博学、博大，学识渊博',
        '代表广阔、宇宙，胸怀宽广'
      ];
      
      this.results = [];
      const count = Math.min(6, characters.length);
      for (let i = 0; i < count; i++) {
        const character = characters[i];
        const meaning = meanings[i % meanings.length];
        const popularity = Math.floor(Math.random() * 30) + 70;
        
        this.results.push({
          character: character,
          pinyin: pinyins[i],
          meaning: meaning,
          popularity: popularity
        });
      }
    },
    
    playPronunciation(char) {
      if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(char);
        utterance.lang = "zh-CN";
        speechSynthesis.speak(utterance);
      } else {
        message.warning("您的浏览器不支持语音合成");
      }
    },
    
    copyToClipboard(text) {
      navigator.clipboard.writeText(text)
        .then(() => {
          message.success(this.$t('common.copied'));
        })
        .catch(err => {
          console.error('复制失败:', err);
          message.error(this.$t('common.copyFailed'));
        });
    },
    
    // 处理拼音输入
    processPinyinInput(input) {
      if (!input || !input.trim()) {
        console.warn('拼音输入为空');
        return '';
      }
      
      // 去除多余空格，调整格式
      let processed = input.trim().toLowerCase();
      console.log('去除空格后:', processed);
      
      // 如果用户使用逗号或其他分隔符，统一替换为空格
      processed = processed.replace(/[,，、]/g, ' ');
      console.log('替换分隔符后:', processed);
      
      // 移除重复空格
      processed = processed.replace(/\s+/g, ' ');
      console.log('移除重复空格后:', processed);
      
      return processed;
    },
    
    selectCharacter(item) {
      const index = this.selectedCharacters.findIndex(c => c.character === item.character);
      
      if (index === -1) {
        // 添加到已选字符
        this.selectedCharacters.push(item);
      } else {
        // 从已选字符中移除
        this.selectedCharacters.splice(index, 1);
      }
      
      // 更新最终名字
      this.updateFinalName();
    },
    
    removeSelectedCharacter(index) {
      this.selectedCharacters.splice(index, 1);
    },
    
    updateFinalName() {
      if (this.selectedCharacters.length === 0) {
        this.finalName = '';
        this.finalNameMeaning = '';
        return;
      }
      
      // 构建最终名字
      this.finalName = this.selectedCharacters.map(c => c.character).join('');
      
      // 构建最终名字含义
      this.finalNameMeaning = this.selectedCharacters.map(c => {
        const meaning = c.meaning || this.getPresetMeaning(c.character);
        return `${c.character}: ${meaning}`;
      }).join('; ');
    },
    
    finalizeName() {
      if (!this.finalName) {
        message.warning(this.$t('pinyinToName.errors.noNameSelected'));
        return;
      }
      
      // 将最终名字和含义保存到历史记录
      this.saveNameToHistory({
        name: this.finalName,
        meaning: this.finalNameMeaning,
        timestamp: new Date().toISOString()
      });
      
      // 显示成功提示
      message.success(this.$t('pinyinToName.nameFinalized'));
    },
    
    copyFinalName() {
      this.copyToClipboard(this.finalName);
    },
    
    shareFinalName() {
      if (!this.finalName) {
        return;
      }
      
      // 如果浏览器支持Web Share API，则使用它
      if (navigator.share) {
        navigator.share({
          title: this.$t('pinyinToName.share.title'),
          text: `${this.$t('pinyinToName.share.text')} ${this.finalName} - ${this.finalNameMeaning}`,
          url: window.location.href
        }).catch(err => {
          console.error('分享失败:', err);
        });
      } else {
        // 退回到复制链接
        const shareText = `${this.$t('pinyinToName.share.text')} ${this.finalName} - ${this.finalNameMeaning}`;
        this.copyToClipboard(shareText);
      }
    },
    
    copyResults() {
      if (this.results.length === 0) {
        return;
      }
      
      const textToCopy = this.results.map(item => {
        return `${item.character} (${item.pinyin}): ${item.meaning || this.getPresetMeaning(item.character)}`;
      }).join('\n');
      
      this.copyToClipboard(textToCopy);
    },
    
    resetForm() {
      this.formData = {
        pinyin: '',
        gender: 'neutral'
      };
      this.results = [];
      this.showResults = false;
      this.selectedCharacters = [];
      this.finalName = '';
      this.finalNameMeaning = '';
    },
    
    getPopularityColor(popularity) {
      if (popularity > 80) return '#e60012';
      if (popularity > 50) return '#ffa500';
      return '#52c41a';
    },
    
    // 保存名字到历史记录
    saveNameToHistory(nameData) {
      try {
        // 从本地存储获取历史记录
        let history = JSON.parse(localStorage.getItem('nameHistory') || '[]');
        
        // 添加新名字到历史
        history.unshift(nameData);
        
        // 限制历史记录长度
        if (history.length > 10) {
          history = history.slice(0, 10);
        }
        
        // 保存回本地存储
        localStorage.setItem('nameHistory', JSON.stringify(history));
      } catch (error) {
        console.error('保存历史记录失败:', error);
      }
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

.result-section {
  margin-top: 20px;
}

.section-title {
  font-size: 1.8rem;
  color: #333;
  margin-bottom: 25px;
}

.result-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.result-count {
  font-size: 0.9rem;
  color: #888;
}

.result-actions {
  display: flex;
  gap: 10px;
}

.a-button {
  background-color: #f0f0f0;
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: all 0.3s;
}

.a-button:hover {
  background-color: #e60012;
  color: white;
}

.a-button:hover svg {
  color: white;
}

.character-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
}

.character-card {
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.3s;
}

.character-card:hover {
  transform: translateY(-5px);
}

.character-content {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
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

.meaning {
  margin-bottom: 15px;
  color: #333;
  font-size: 0.95rem;
  line-height: 1.5;
}

.popularity-bar {
  width: 100%;
  margin-top: auto;
}

.popularity-label {
  font-size: 0.9rem;
  color: #888;
  margin-bottom: 5px;
}

.a-progress {
  height: 8px;
  background-color: #f0f0f0;
  border-radius: 4px;
  overflow: hidden;
}

.a-progress-inner {
  height: 100%;
  background-color: #e60012;
  border-radius: 4px;
}

.selected-section {
  margin-top: 20px;
}

.selected-section h3 {
  font-size: 1.8rem;
  color: #333;
  margin-bottom: 25px;
}

.selected-characters {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.selected-tag {
  background-color: #f0f0f0;
  padding: 8px 16px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  gap: 5px;
}

.selected-pinyin {
  font-size: 0.85rem;
  color: #666;
}

.final-name-section {
  margin-top: 20px;
}

.final-name-section h3 {
  font-size: 1.8rem;
  color: #333;
  margin-bottom: 25px;
}

.final-name {
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 10px;
}

.final-name-meaning {
  margin-bottom: 10px;
}

.final-name-meaning h4 {
  font-size: 0.9rem;
  color: #888;
  margin-bottom: 5px;
}

.final-name-meaning p {
  margin: 0;
  color: #333;
  font-size: 0.95rem;
  line-height: 1.5;
}

.final-name-actions {
  display: flex;
  gap: 10px;
}

.no-results {
  margin-top: 20px;
  text-align: center;
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
  
  .character-grid {
    grid-template-columns: 1fr;
  }
}
</style> 