<template>
  <div class="zodiac-page">
    <div class="container">
      <h1 class="page-title">{{ $t('zodiac.title') }}</h1>
      
      <div class="content">
        <div class="form-section">
          <form @submit.prevent="calculateZodiac">
            <div class="form-group">
              <label for="birthYear">{{ $t('zodiac.birthYear') }}</label>
              <input 
                type="number" 
                id="birthYear" 
                v-model.number="formData.birthYear" 
                required
                min="1990"
                max="2100"
                class="form-input"
                placeholder="1990"
              />
            </div>
            
            <button type="submit" class="submit-button">
              <span v-if="isLoading">{{ $t('common.loading') }}</span>
              <span v-else>{{ $t('zodiac.calculateButton') }}</span>
            </button>
          </form>
        </div>
        
        <div v-if="results.sign" class="results-section">
          <h2>{{ $t('zodiac.results.title') }}</h2>
          
          <div class="zodiac-card">
            <div class="zodiac-header">
              <div class="zodiac-icon">
                <img :src="getZodiacImage(results.sign)" :alt="results.sign" />
              </div>
              <div class="zodiac-name">
                <h3>{{ results.sign }} {{ results.years }}</h3>
                <p class="element" :class="'element-' + results.element">{{ results.element }}</p>
              </div>
            </div>
            
            <div class="zodiac-details">
              <div class="detail-section">
                <h4>{{ $t('zodiac.results.personality') }}</h4>
                <div class="traits-container">
                  <div v-for="(trait, index) in results.personality" :key="index" class="trait-tag">
                    {{ trait }}
                  </div>
                </div>
              </div>
              
              <div class="detail-section">
                <h4>{{ $t('zodiac.results.compatibility') }}</h4>
                <div class="compatibility">
                  <div class="compatibility-group">
                    <h5>{{ locale === 'zh' ? '最佳配对' : 'Best Match' }}</h5>
                    <div class="compatibility-icons">
                      <div v-for="(zodiac, index) in results.bestMatch" :key="'best-'+index" class="mini-zodiac">
                        <img :src="getZodiacImage(zodiac)" :alt="zodiac" />
                        <span>{{ zodiac }}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div class="compatibility-group">
                    <h5>{{ locale === 'zh' ? '最差配对' : 'Worst Match' }}</h5>
                    <div class="compatibility-icons">
                      <div v-for="(zodiac, index) in results.worstMatch" :key="'worst-'+index" class="mini-zodiac">
                        <img :src="getZodiacImage(zodiac)" :alt="zodiac" />
                        <span>{{ zodiac }}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div class="lucky-section">
                <div class="lucky-item">
                  <h4>{{ $t('zodiac.results.luckyNumbers') }}</h4>
                  <div class="lucky-numbers">
                    <span v-for="(number, index) in results.luckyNumbers" :key="'num-'+index">{{ number }}</span>
                  </div>
                </div>
                
                <div class="lucky-item">
                  <h4>{{ $t('zodiac.results.luckyColors') }}</h4>
                  <div class="lucky-colors">
                    <div 
                      v-for="(color, index) in results.luckyColors" 
                      :key="'color-'+index" 
                      class="color-block"
                    >
                      <div 
                        class="color-box"
                        :style="{ backgroundColor: getColorCode(color) }"
                      ></div>
                      <span class="color-name">{{ color }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 导入所有生肖图片
import ShuImg from '@/assets/images/zodiac/shu.png';
import NiuImg from '@/assets/images/zodiac/niu.png';
import HuImg from '@/assets/images/zodiac/hu.png';
import TuImg from '@/assets/images/zodiac/tu.png';
import LongImg from '@/assets/images/zodiac/long.png';
import SheImg from '@/assets/images/zodiac/she.png';
import MaImg from '@/assets/images/zodiac/ma.png';
import YangImg from '@/assets/images/zodiac/yang.png';
import HouImg from '@/assets/images/zodiac/hou.png';
import JiImg from '@/assets/images/zodiac/ji.png';
import GouImg from '@/assets/images/zodiac/gou.png';
import ZhuImg from '@/assets/images/zodiac/zhu.png';
import { useI18n } from 'vue-i18n';

export default {
  name: 'ZodiacCalculator',
  setup() {
    const { t, locale } = useI18n();
    return { t, locale };
  },
  data() {
    return {
      formData: {
        birthYear: null
      },
      isLoading: false,
      results: {
        sign: '',
        years: '',
        element: '',
        personality: [],
        bestMatch: [],
        worstMatch: [],
        luckyNumbers: [],
        luckyColors: []
      },
      // 中国生肖数据
      zodiacData: {
        'Rat': {
          personality: ['聪明机智', '灵活应变', '好奇心强', '适应力强', '有野心'],
          personalityEn: ['Smart', 'Adaptable', 'Curious', 'Flexible', 'Ambitious'],
          bestMatch: ['Dragon', 'Monkey', 'Ox'],
          worstMatch: ['Horse', 'Rabbit'],
          luckyNumbers: [2, 3, 6, 8],
          luckyColors: ['蓝色', '金色', '绿色'],
          luckyColorsEn: ['Blue', 'Gold', 'Green'],
          element: '水',
          elementEn: 'Water'
        },
        'Ox': {
          personality: ['勤劳踏实', '可靠稳重', '坚持不懈', '有耐心', '保守'],
          personalityEn: ['Hardworking', 'Reliable', 'Persistent', 'Patient', 'Conservative'],
          bestMatch: ['Rat', 'Snake', 'Rooster'],
          worstMatch: ['Goat', 'Horse', 'Dog'],
          luckyNumbers: [1, 4, 9],
          luckyColors: ['白色', '黄色', '绿色'],
          luckyColorsEn: ['White', 'Yellow', 'Green'],
          element: '土',
          elementEn: 'Earth'
        },
        'Tiger': {
          personality: ['勇敢无畏', '自信强大', '有领导力', '有魅力', '冲动'],
          personalityEn: ['Brave', 'Confident', 'Leader', 'Charming', 'Impulsive'],
          bestMatch: ['Dragon', 'Horse', 'Pig'],
          worstMatch: ['Monkey', 'Snake'],
          luckyNumbers: [1, 3, 4, 7],
          luckyColors: ['蓝色', '灰色', '橙色'],
          luckyColorsEn: ['Blue', 'Grey', 'Orange'],
          element: '木',
          elementEn: 'Wood'
        },
        'Rabbit': {
          personality: ['温柔善良', '安静内敛', '谦虚有礼', '敏感细腻', '谨慎'],
          personalityEn: ['Gentle', 'Quiet', 'Modest', 'Sensitive', 'Cautious'],
          bestMatch: ['Goat', 'Pig', 'Dog'],
          worstMatch: ['Rat', 'Dragon'],
          luckyNumbers: [3, 4, 6, 7],
          luckyColors: ['红色', '粉色', '紫色', '蓝色'],
          luckyColorsEn: ['Red', 'Pink', 'Purple', 'Blue'],
          element: '木',
          elementEn: 'Wood'
        },
        'Dragon': {
          personality: ['充满活力', '自信自强', '野心勃勃', '理想主义', '专注'],
          personalityEn: ['Energetic', 'Confident', 'Ambitious', 'Idealistic', 'Focused'],
          bestMatch: ['Rat', 'Tiger', 'Monkey'],
          worstMatch: ['Dog', 'Rabbit', 'Dragon'],
          luckyNumbers: [1, 6, 7],
          luckyColors: ['金色', '银色', '灰色'],
          luckyColorsEn: ['Gold', 'Silver', 'Grey'],
          element: '土',
          elementEn: 'Earth'
        },
        'Snake': {
          personality: ['聪明智慧', '优雅神秘', '直觉敏锐', '深沉内敛', '谨慎'],
          personalityEn: ['Wise', 'Elegant', 'Intuitive', 'Deep', 'Cautious'],
          bestMatch: ['Ox', 'Rooster', 'Monkey'],
          worstMatch: ['Tiger', 'Pig'],
          luckyNumbers: [2, 8, 9],
          luckyColors: ['红色', '淡黄色', '黑色'],
          luckyColorsEn: ['Red', 'Light Yellow', 'Black'],
          element: '火',
          elementEn: 'Fire'
        },
        'Horse': {
          personality: ['活泼开朗', '热情洋溢', '独立自由', '冒险精神', '不安定'],
          personalityEn: ['Lively', 'Enthusiastic', 'Independent', 'Adventurous', 'Restless'],
          bestMatch: ['Tiger', 'Goat', 'Dog'],
          worstMatch: ['Rat', 'Ox', 'Rabbit'],
          luckyNumbers: [2, 3, 7, 8],
          luckyColors: ['棕色', '黄色', '紫色'],
          luckyColorsEn: ['Brown', 'Yellow', 'Purple'],
          element: '火',
          elementEn: 'Fire'
        },
        'Goat': {
          personality: ['温和善良', '富有同情心', '创造力强', '敏感脆弱', '优雅'],
          personalityEn: ['Gentle', 'Compassionate', 'Creative', 'Sensitive', 'Elegant'],
          bestMatch: ['Rabbit', 'Horse', 'Pig'],
          worstMatch: ['Ox', 'Dog'],
          luckyNumbers: [2, 7, 9],
          luckyColors: ['绿色', '红色', '紫色'],
          luckyColorsEn: ['Green', 'Red', 'Purple'],
          element: '土',
          elementEn: 'Earth'
        },
        'Monkey': {
          personality: ['聪明机智', '幽默风趣', '灵活多变', '好奇心强', '调皮'],
          personalityEn: ['Smart', 'Humorous', 'Versatile', 'Curious', 'Mischievous'],
          bestMatch: ['Rat', 'Dragon', 'Snake'],
          worstMatch: ['Tiger', 'Pig'],
          luckyNumbers: [1, 7, 8],
          luckyColors: ['白色', '蓝色', '金色'],
          luckyColorsEn: ['White', 'Blue', 'Gold'],
          element: '金',
          elementEn: 'Metal'
        },
        'Rooster': {
          personality: ['勤劳勇敢', '自信骄傲', '观察力强', '注重外表', '坦率'],
          personalityEn: ['Hardworking', 'Confident', 'Observant', 'Appearance-conscious', 'Frank'],
          bestMatch: ['Ox', 'Snake', 'Dragon'],
          worstMatch: ['Rat', 'Rabbit', 'Dog'],
          luckyNumbers: [5, 7, 8],
          luckyColors: ['金色', '棕色', '黄色'],
          luckyColorsEn: ['Gold', 'Brown', 'Yellow'],
          element: '金',
          elementEn: 'Metal'
        },
        'Dog': {
          personality: ['忠诚可靠', '诚实正直', '警觉性高', '富有正义感', '固执'],
          personalityEn: ['Loyal', 'Honest', 'Alert', 'Just', 'Stubborn'],
          bestMatch: ['Rabbit', 'Tiger', 'Horse'],
          worstMatch: ['Dragon', 'Goat', 'Rooster'],
          luckyNumbers: [3, 4, 9],
          luckyColors: ['绿色', '红色', '紫色'],
          luckyColorsEn: ['Green', 'Red', 'Purple'],
          element: '土',
          elementEn: 'Earth'
        },
        'Pig': {
          personality: ['诚实善良', '宽容大度', '乐观开朗', '真诚慷慨', '享乐主义'],
          personalityEn: ['Honest', 'Tolerant', 'Optimistic', 'Sincere', 'Hedonistic'],
          bestMatch: ['Tiger', 'Rabbit', 'Goat'],
          worstMatch: ['Snake', 'Monkey'],
          luckyNumbers: [2, 5, 8, 9],
          luckyColors: ['黄色', '灰色', '棕色'],
          luckyColorsEn: ['Yellow', 'Grey', 'Brown'],
          element: '水',
          elementEn: 'Water'
        }
      },
      // 中文名称映射
      zodiacNamesChinese: {
        'Rat': '鼠',
        'Ox': '牛',
        'Tiger': '虎',
        'Rabbit': '兔',
        'Dragon': '龙',
        'Snake': '蛇',
        'Horse': '马',
        'Goat': '羊',
        'Monkey': '猴',
        'Rooster': '鸡',
        'Dog': '狗',
        'Pig': '猪'
      },
      // 英文名称映射
      zodiacNamesEnglish: {
        'Rat': 'Rat',
        'Ox': 'Ox',
        'Tiger': 'Tiger',
        'Rabbit': 'Rabbit',
        'Dragon': 'Dragon',
        'Snake': 'Snake',
        'Horse': 'Horse',
        'Goat': 'Goat',
        'Monkey': 'Monkey',
        'Rooster': 'Rooster',
        'Dog': 'Dog',
        'Pig': 'Pig'
      },
      // 英文名称对应拼音映射
      zodiacPinyinMap: {
        'Rat': 'shu',
        'Ox': 'niu',
        'Tiger': 'hu',
        'Rabbit': 'tu',
        'Dragon': 'long',
        'Snake': 'she',
        'Horse': 'ma',
        'Goat': 'yang',
        'Monkey': 'hou',
        'Rooster': 'ji',
        'Dog': 'gou',
        'Pig': 'zhu'
      },
      // 生肖图片映射
      zodiacImages: {
        'shu': ShuImg,
        'niu': NiuImg,
        'hu': HuImg,
        'tu': TuImg,
        'long': LongImg,
        'she': SheImg,
        'ma': MaImg,
        'yang': YangImg,
        'hou': HouImg,
        'ji': JiImg,
        'gou': GouImg,
        'zhu': ZhuImg
      },
      // 五行映射
      elementsChinese: {
        '水': '水',
        '土': '土',
        '木': '木',
        '火': '火',
        '金': '金'
      },
      // 英文五行映射
      elementsEnglish: {
        '水': 'Water',
        '土': 'Earth',
        '木': 'Wood',
        '火': 'Fire',
        '金': 'Metal'
      },
      // 颜色代码
      colorCodes: {
        '红色': '#e60012',
        '蓝色': '#1e88e5',
        '绿色': '#4caf50',
        '黄色': '#ffc107',
        '金色': '#ffd700',
        '银色': '#c0c0c0',
        '灰色': '#9e9e9e',
        '黑色': '#212121',
        '紫色': '#9c27b0',
        '橙色': '#ff9800',
        '粉色': '#f48fb1',
        '棕色': '#795548',
        '淡黄色': '#fff59d',
        // 英文颜色映射
        'Red': '#e60012',
        'Blue': '#1e88e5',
        'Green': '#4caf50',
        'Yellow': '#ffc107',
        'Gold': '#ffd700',
        'Silver': '#c0c0c0',
        'Grey': '#9e9e9e',
        'Gray': '#9e9e9e',
        'Black': '#212121',
        'Purple': '#9c27b0',
        'Orange': '#ff9800',
        'Pink': '#f48fb1',
        'Brown': '#795548',
        'Light Yellow': '#fff59d',
        'White': '#ffffff'
      }
    }
  },
  methods: {
    calculateZodiac() {
      if (!this.formData.birthYear) return;
      
      this.isLoading = true;
      
      // 延时模拟API调用
      setTimeout(() => {
        const year = this.formData.birthYear;
        
        // 计算生肖
        const zodiacIndex = (year - 4) % 12; // 1900年是鼠年
        const zodiacSigns = ['Rat', 'Ox', 'Tiger', 'Rabbit', 'Dragon', 'Snake', 'Horse', 'Goat', 'Monkey', 'Rooster', 'Dog', 'Pig'];
        const zodiacSign = zodiacSigns[zodiacIndex];
        
        // 设置结果
        const zodiacData = this.zodiacData[zodiacSign];
        this.results = {
          sign: this.getLocalizedZodiacName(zodiacSign),
          years: this.formData.birthYear,
          element: this.getLocalizedElement(zodiacData.element),
          personality: this.locale === 'zh' ? zodiacData.personality : zodiacData.personalityEn,
          bestMatch: zodiacData.bestMatch.map(sign => this.getLocalizedZodiacName(sign)),
          worstMatch: zodiacData.worstMatch.map(sign => this.getLocalizedZodiacName(sign)),
          luckyNumbers: zodiacData.luckyNumbers,
          luckyColors: this.locale === 'zh' ? zodiacData.luckyColors : zodiacData.luckyColorsEn
        };
        
        this.isLoading = false;
      }, 800);
    },
    getZodiacImage(zodiacName) {
      // 首先判断是否是英文名称
      if (Object.values(this.zodiacNamesEnglish).includes(zodiacName)) {
        // 如果是英文名称，找到对应的拼音
        const englishName = Object.keys(this.zodiacNamesEnglish).find(
          key => this.zodiacNamesEnglish[key] === zodiacName
        );
        
        if (englishName && this.zodiacPinyinMap[englishName]) {
          const pinyin = this.zodiacPinyinMap[englishName];
          return this.zodiacImages[pinyin];
        }
      }
      
      // 如果是中文名称，按原来的逻辑处理
      const englishName = Object.keys(this.zodiacNamesChinese).find(
        key => this.zodiacNamesChinese[key] === zodiacName
      );
      
      // 获取对应的拼音
      if (englishName && this.zodiacPinyinMap[englishName]) {
        const pinyin = this.zodiacPinyinMap[englishName];
        // 返回对应的图片
        return this.zodiacImages[pinyin];
      }
      
      // 如果没有找到对应图片，返回占位图
      return `https://placehold.co/200x200/e60012/white?text=${zodiacName}`;
    },
    getLocalizedZodiacName(englishName) {
      return this.locale === 'zh' ? 
        this.zodiacNamesChinese[englishName] || englishName :
        this.zodiacNamesEnglish[englishName] || englishName;
    },
    getLocalizedElement(element) {
      return this.locale === 'zh' ? 
        this.elementsChinese[element] || element : 
        this.elementsEnglish[element] || element;
    },
    getColorCode(colorName) {
      return this.colorCodes[colorName] || '#cccccc';
    }
  }
}
</script>

<style scoped>
.zodiac-page {
  padding: 20px 0 100px;
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

.zodiac-card {
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  overflow: hidden;
}

.zodiac-header {
  background-color: #e60012;
  color: white;
  padding: 25px;
  display: flex;
  align-items: center;
}

.zodiac-icon {
  width: 80px;
  height: 80px;
  margin-right: 20px;
}

.zodiac-icon img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}

.zodiac-name h3 {
  font-size: 2rem;
  margin: 0 0 5px 0;
}

.element {
  display: inline-block;
  min-width: 60px;
  padding: 8px 22px;
  border-radius: 16px;
  font-size: 1.3rem;
  font-weight: bold;
  color: #fff;
  text-align: center;
  margin-top: 8px;
  margin-bottom: 0;
  letter-spacing: 6px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.10);
}

/* 五行专属配色 */
.element-土 {
  background: linear-gradient(135deg, #c2b280 60%, #a67c52 100%);
  color: #fff;
}
.element-木 {
  background: linear-gradient(135deg, #43a047 60%, #2ecc40 100%);
  color: #fff;
}
.element-水 {
  background: linear-gradient(135deg, #2196f3 60%, #1565c0 100%);
  color: #fff;
}
.element-金 {
  background: linear-gradient(135deg, #ffd700 60%, #bfa640 100%);
  color: #fff;
  text-shadow: 0 1px 2px #bfa640;
}
.element-火 {
  background: linear-gradient(135deg, #ff7043 60%, #d32f2f 100%);
  color: #fff;
}

.zodiac-details {
  padding: 25px;
}

.detail-section {
  margin-bottom: 30px;
}

.detail-section h4 {
  font-size: 1.3rem;
  color: #333;
  margin-bottom: 15px;
  border-bottom: 1px solid #eee;
  padding-bottom: 8px;
}

.detail-section ul {
  padding-left: 20px;
  margin: 0;
}

.detail-section li {
  margin-bottom: 8px;
  color: #555;
}

.traits-container {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 15px;
}

.trait-tag {
  background-color: #f5f5f5;
  padding: 8px 15px;
  border-radius: 30px;
  font-size: 1rem;
  color: #333;
  transition: all 0.25s;
  border: 1px solid #e0e0e0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.trait-tag:hover {
  background-color: #e60012;
  color: white;
  transform: translateY(-3px);
  box-shadow: 0 5px 10px rgba(230, 0, 18, 0.2);
}

.compatibility {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.compatibility-group {
  flex: 1;
  min-width: 45%;
}

.compatibility-group h5 {
  font-size: 1rem;
  color: #666;
  margin-bottom: 10px;
}

.compatibility-icons {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
}

.mini-zodiac {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60px;
}

.mini-zodiac img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 5px;
}

.mini-zodiac span {
  font-size: 0.9rem;
  color: #555;
}

.lucky-section {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
}

.lucky-item {
  flex: 1;
  min-width: 45%;
}

.lucky-item h4 {
  font-size: 1.3rem;
  color: #333;
  margin-bottom: 15px;
  border-bottom: 1px solid #eee;
  padding-bottom: 8px;
}

.lucky-numbers {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.lucky-numbers span {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: #e60012;
  color: white;
  border-radius: 50%;
  font-weight: 600;
}

.lucky-colors {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin-top: 15px;
}

.color-block {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.color-box {
  width: 70px;
  height: 35px;
  border-radius: 6px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
  border: 1px solid rgba(0, 0, 0, 0.1);
}

.color-box:hover {
  transform: translateY(-3px);
  box-shadow: 0 5px 12px rgba(0, 0, 0, 0.2);
}

.color-name {
  margin-top: 8px;
  color: #333;
  font-size: 0.9rem;
  text-align: center;
}

@media (max-width: 768px) {
  .page-title {
    font-size: 2rem;
  }
  
  .zodiac-page {
    padding: 70px 0;
  }
  
  .zodiac-header {
    flex-direction: column;
    text-align: center;
  }
  
  .zodiac-icon {
    margin-right: 0;
    margin-bottom: 15px;
  }
  
  .compatibility, 
  .lucky-section {
    flex-direction: column;
    gap: 20px;
  }
}
</style> 