<template>
  <div class="zodiac-page">
    <div class="container">
      <!-- 面包屑导航 -->
      <BreadcrumbNav />
      <h1 class="page-title">{{ $t('zodiac.title') }}</h1>
      
      <!-- 添加中国算命和预测的简介 -->
      <div class="intro-text">
        <p>Chinese astrology, with its 5,000-year history, combines zodiac signs, elements, and birth dates to reveal insights about personality and life paths.</p>
        <p>Enter your details below for personalized guidance based on traditional Chinese wisdom.</p>
      </div>
      
      <!-- 内容容器开始 -->
      <div class="content-container">
        <div class="content">
        <div class="form-section">
          <!-- 标题和描述已删除 -->
          
          <form @submit.prevent="calculateZodiac" class="new-form-layout">
            <!-- 第一行：将 Full Name、Gender、Birth Date 放在同一行 -->
            <div class="form-row">
              <div class="form-field name-field">
                <label for="fullName">Full Name <span class="required-star">*</span></label>
                <input 
                  type="text" 
                  id="fullName" 
                  v-model="formData.fullName" 
                  required
                  class="form-input"
                  placeholder="Enter your full name"
                />
              </div>
              
              <div class="form-field gender-field">
                <label for="gender">Gender <span class="required-star">*</span></label>
                <div class="radio-group">
                  <label class="radio-label">
                    <input type="radio" v-model="formData.gender" value="male" required />
                    Male
                  </label>
                  <label class="radio-label">
                    <input type="radio" v-model="formData.gender" value="female" required />
                    Female
                  </label>
                </div>
              </div>
              
              <div class="form-field date-field">
                <label for="birthDate">Birth Date <span class="required-star">*</span></label>
                <div class="date-inputs">
                  <input 
                    type="datetime-local" 
                    id="birthDate" 
                    v-model="formData.birthDate" 
                    required
                    class="form-input date-input"
                  />
                </div>
              </div>
            </div>
            
            <!-- 第二行：Your Intention单独一行 -->
            <div class="form-row">
              <div class="form-field full-width">
                <label for="intention">Your Intention <span class="required-star">*</span></label>
                <textarea 
                  id="intention" 
                  v-model="formData.intention" 
                  required
                  class="form-input textarea-input"
                  placeholder="Examples:
1. I would like to know my luck in career for the next 3 years.
2. How will my relationships develop in the coming year?
3. What changes should I make to improve my health and wellbeing?

Please describe your intention or question..."
                  rows="6"
                ></textarea>
              </div>
            </div>
            
            <!-- 提交按钮 -->
            <div class="form-row">
              <div class="form-buttons full-width">
                <button type="submit" class="submit-button">
                  {{ isLoading ? 'Processing...' : $t('zodiac.calculateButton') }}
                </button>
              </div>
            </div>
          </form>
        </div>
        
                <!-- 加载指示器 -->
        <MysticalLoader v-if="isLoading" />
        
        <!-- 结果显示区域 -->
        <div v-if="showResults" class="results-section">
          <h2>{{ $t('zodiac.results.title') }}</h2>
          
          <!-- 新格式数据展示区域 -->
            <div v-if="results.divination" class="new-data-section">
              <!-- 个人信息部分 -->
              <div class="data-card">
                <h5>Personal Information</h5>
                <div class="info-grid">
                  <div class="info-item">
                    <span class="info-label">Name:</span>
                    <span class="info-value">{{ results.divination.personalInfo.name }}</span>
                  </div>
                  <div class="info-item">
                    <span class="info-label">Gender:</span>
                    <span class="info-value">{{ results.divination.personalInfo.gender }}</span>
                  </div>
                  <div class="info-item">
                    <span class="info-label">Birth Date:</span>
                    <span class="info-value">{{ results.divination.personalInfo.birthDate }}</span>
                  </div>
                  <div class="info-item">
                    <span class="info-label">Intention:</span>
                    <span class="info-value">{{ results.divination.personalInfo.intention }}</span>
                  </div>
                </div>
              </div>
              
              <!-- 生肖分析部分 -->
              <div class="data-card">
                <h5>Zodiac Analysis</h5>
                <div class="zodiac-header-box">
                  <div class="zodiac-sign-container">
                    <div class="zodiac-sign-label">Sign</div>
                    <div class="zodiac-sign-content">
                      <div class="zodiac-avatar">
                        <img :src="getZodiacImageFromText(results.divination.zodiacAnalysis.sign)" :alt="getZodiacNameFromText(results.divination.zodiacAnalysis.sign)">
                      </div>
                      <div class="zodiac-sign-value">{{ results.divination.zodiacAnalysis.sign }}</div>
                    </div>
                  </div>
                  <div class="zodiac-element-container">
                    <div class="zodiac-element-label">Element</div>
                    <div class="zodiac-element-value" :class="'element-' + results.divination.zodiacAnalysis.element.toLowerCase()">
                      <div class="element-icon-large" :class="results.divination.zodiacAnalysis.element.toLowerCase()"></div>
                      <span>{{ results.divination.zodiacAnalysis.element }}</span>
                    </div>
                  </div>
                </div>
                
                <h6 class="sub-title">Personality Traits:</h6>
                <div class="personality-row">
                  <div v-for="(trait, index) in results.divination.zodiacAnalysis.personality" :key="'pers-'+index" class="personality-tag">
                    {{ trait }}
                  </div>
                </div>
                
                <div class="two-column">
                  <div class="column">
                    <h6 class="sub-title">Strengths:</h6>
                    <ul class="trait-list">
                      <li v-for="(strength, index) in results.divination.zodiacAnalysis.strengths" :key="'str-'+index">
                        {{ strength }}
                      </li>
                    </ul>
                  </div>
                  <div class="column">
                    <h6 class="sub-title">Challenges:</h6>
                    <ul class="trait-list">
                      <li v-for="(challenge, index) in results.divination.zodiacAnalysis.challenges" :key="'chall-'+index">
                        {{ challenge }}
                      </li>
                    </ul>
                  </div>
                </div>
                
                <h6 class="sub-title">Compatibility:</h6>
                <div class="two-column">
                  <div class="column">
                    <h6>Most Compatible:</h6>
                    <div class="compatibility-icons-grid">
                      <div class="compatibility-item" v-for="(sign, index) in results.divination.zodiacAnalysis.compatibility.most" :key="'comp-m-'+index">
                        <div class="compatibility-icon">
                          <img :src="getZodiacImageFromText(sign)" :alt="getZodiacNameFromText(sign)">
                        </div>
                        <span class="compatibility-name">{{ sign }}</span>
                      </div>
                    </div>
                  </div>
                  <div class="column">
                    <h6>Least Compatible:</h6>
                    <div class="compatibility-icons-grid">
                      <div class="compatibility-item" v-for="(sign, index) in results.divination.zodiacAnalysis.compatibility.least" :key="'comp-l-'+index">
                        <div class="compatibility-icon">
                          <img :src="getZodiacImageFromText(sign)" :alt="getZodiacNameFromText(sign)">
                        </div>
                        <span class="compatibility-name">{{ sign }}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <!-- 元素分析部分 -->
              <div class="data-card">
                <h5>Elemental Analysis</h5>
                <div class="element-summary-row">
                  <div class="element-summary-item">
                    <span class="element-summary-label">Birth Year Element:</span>
                    <span class="element-summary-value" :class="'element-' + results.divination.elementalAnalysis.birthYearElement.toLowerCase()">{{ results.divination.elementalAnalysis.birthYearElement }}</span>
                  </div>
                  <div class="element-summary-item">
                    <span class="element-summary-label">Dominant Element:</span>
                    <span class="element-summary-value" :class="'element-' + results.divination.elementalAnalysis.dominantElement.toLowerCase()">{{ results.divination.elementalAnalysis.dominantElement }}</span>
                  </div>
                  <div class="element-summary-item">
                    <span class="element-summary-label">Deficient Element:</span>
                    <span class="element-summary-value" :class="'element-' + results.divination.elementalAnalysis.deficientElement.toLowerCase()">{{ results.divination.elementalAnalysis.deficientElement }}</span>
                  </div>
                </div>
                
                <h6 class="sub-title">Element Balance:</h6>
                <div class="element-balance-grid">
                  <div class="element-balance-item" v-for="(status, element) in results.divination.elementalAnalysis.elementBalance" :key="element">
                    <div class="element-icon" :class="element.toLowerCase()"></div>
                    <div class="element-info">
                      <span class="element-name">{{ element.charAt(0).toUpperCase() + element.slice(1) }}</span>
                      <div class="element-bar-container">
                        <div class="element-bar" :class="status.toLowerCase()"></div>
                      </div>
                      <span class="element-status" :class="status.toLowerCase()">{{ status }}</span>
                    </div>
                  </div>
                </div>
                
                <div class="info-grid">
                  <div class="info-item">
                    <span class="info-label">Celestial Stem:</span>
                    <span class="info-value">{{ results.divination.elementalAnalysis.celestialStem }}</span>
                  </div>
                  <div class="info-item">
                    <span class="info-label">Earthly Branch:</span>
                    <span class="info-value">{{ results.divination.elementalAnalysis.earthlyBranch }}</span>
                  </div>
                </div>
                
                <div class="info-item full-width">
                  <span class="info-label">Eight Trigram Influence:</span>
                  <span class="info-value">{{ results.divination.elementalAnalysis.eightTrigramInfluence }}</span>
                </div>
              </div>
              
              <!-- 命运分析部分 -->
              <div class="data-card">
                <h5>Life Destiny</h5>
                <div class="info-item full-width">
                  <span class="info-label">Life Path:</span>
                  <p class="info-value">{{ results.divination.lifeDestiny.lifePath }}</p>
                </div>
                
                <h6 class="sub-title">Fortune Periods:</h6>
                <div class="two-column">
                  <div class="column">
                    <h6>Favorable:</h6>
                    <ul class="trait-list">
                      <li v-for="(period, index) in results.divination.lifeDestiny.fortunePeriods.favorable" :key="'fav-'+index">
                        {{ period }}
                      </li>
                    </ul>
                  </div>
                  <div class="column">
                    <h6>Challenging:</h6>
                    <ul class="trait-list">
                      <li v-for="(period, index) in results.divination.lifeDestiny.fortunePeriods.challenging" :key="'chall-p-'+index">
                        {{ period }}
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div class="info-item full-width">
                  <span class="info-label">Career Insights:</span>
                  <p class="info-value">{{ results.divination.lifeDestiny.careerInsights }}</p>
                </div>
                
                <div class="info-item full-width">
                  <span class="info-label">Wealth Prospects:</span>
                  <p class="info-value">{{ results.divination.lifeDestiny.wealthProspects }}</p>
                </div>
                
                <div class="info-item full-width">
                  <span class="info-label">Relationship Guidance:</span>
                  <p class="info-value">{{ results.divination.lifeDestiny.relationshipGuidance }}</p>
                </div>
                
                <div class="info-item full-width">
                  <span class="info-label">Health Considerations:</span>
                  <p class="info-value">{{ results.divination.lifeDestiny.healthConsiderations }}</p>
                </div>
              </div>
              
              <!-- 运势评分部分 -->
              <div class="data-card">
                <h5>Fortune Scores</h5>
                <div class="fortune-scores">
                  <div class="score-item" v-for="(score, category) in results.divination.fortuneScores" :key="category">
                    <div class="score-label">{{ formatScoreLabel(category) }}</div>
                    <div class="score-bar-container">
                      <div class="score-bar" :style="{ width: score + '%' }" :class="getScoreClass(score)"></div>
                      <div class="score-value">{{ score }}</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <!-- 用户意图分析部分 -->
              <div class="data-card">
                <h5>User Intention Analysis</h5>
                <div class="insight-panel">
                  <div class="insight-content">
                    <h6 class="insight-title">Analysis</h6>
                    <p class="insight-text">{{ results.divination.userIntentionAnalysis.analysis }}</p>
                  </div>
                </div>
                
                <h6 class="sub-title recommendation-header">Recommendations:</h6>
                <div class="recommendation-container">
                  <div class="recommendation-item" v-for="(rec, index) in results.divination.userIntentionAnalysis.recommendations" :key="'rec-'+index">
                    <div class="recommendation-number">{{ index + 1 }}</div>
                    <div class="recommendation-text">{{ rec }}</div>
                  </div>
                </div>
                
                <div class="two-column timing-section">
                  <div class="timing-item">
                    <h6 class="timing-title">Favorable Timing</h6>
                    <p class="timing-text">{{ results.divination.userIntentionAnalysis.favorableTiming }}</p>
                  </div>
                  
                  <div class="timing-item caution">
                    <h6 class="timing-title">Cautions</h6>
                    <p class="timing-text">{{ results.divination.userIntentionAnalysis.cautions }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        
        <!-- 使用指南 -->
        <UsageGuide 
          title="Chinese Zodiac Calculator Guide"
          :steps="usageSteps"
        />
        
        <!-- Explore More 组件 -->
        <ExploreMore :currentPath="$route.path" />
                
        <!-- 添加文字说明部分 -->
        <div class="zodiac-guide-section">
          <h2 class="guide-title">Chinese Zodiac Culture and Astrology</h2>
          
          <div class="guide-content">
            <p class="guide-intro">The Chinese zodiac is an important part of traditional Chinese culture with a history spanning thousands of years. The twelve zodiac signs are arranged in a cycle: Rat, Ox, Tiger, Rabbit, Dragon, Snake, Horse, Goat, Monkey, Rooster, Dog, and Pig. Each zodiac represents one year and corresponds to a person's birth year.</p>
            
            <div class="guide-block">
              <h3 class="block-title">Origin and Legend of the Chinese Zodiac</h3>
              <p>There are many legends about the origin of the twelve zodiac signs, with the most well-known being the "Great Race" story. According to legend, in ancient times, the Jade Emperor decided to select twelve animals as guardians of the years. He organized a race and invited all animals to participate. The first twelve animals to reach the finish line would be selected as zodiac signs in order of arrival. This is why the Rat ranks first and the Pig comes last.</p>
            </div>
            
            <div class="guide-block">
              <h3 class="block-title">Zodiac and the Five Elements</h3>
              <p>In traditional Chinese culture, the Five Elements (Metal, Wood, Water, Fire, and Earth) are combined with the twelve zodiac signs to form a complex astrological system. Each zodiac sign is associated with specific elemental properties, which influence a person's character traits, destiny, and compatibility with others.</p>
              <div class="element-grid">
                <div class="element-item element-金">
                  <h4>Metal</h4>
                  <p>Monkey, Rooster</p>
                </div>
                <div class="element-item element-木">
                  <h4>Wood</h4>
                  <p>Tiger, Rabbit</p>
                </div>
                <div class="element-item element-水">
                  <h4>Water</h4>
                  <p>Rat, Pig</p>
                </div>
                <div class="element-item element-火">
                  <h4>Fire</h4>
                  <p>Snake, Horse</p>
                </div>
                <div class="element-item element-土">
                  <h4>Earth</h4>
                  <p>Ox, Dragon, Goat, Dog</p>
                </div>
              </div>
            </div>
            
            <div class="guide-block">
              <h3 class="block-title">Application of Zodiac Signs in Modern Life</h3>
              <p>Although modern society has entered the technological age, zodiac culture still plays an important role in Chinese people's daily lives. From naming children and marriage matching to career choices, many people still refer to the characteristics and related advice of zodiac signs. During each Lunar New Year, people pay special attention to the fortune predictions for that year's zodiac sign.</p>
            </div>
            
            <div class="guide-block faq-block">
              <h3 class="block-title">Frequently Asked Questions</h3>
              
              <div class="faq-item">
                <h4 class="faq-question">What's the difference between Chinese zodiac and Western astrology?</h4>
                <p class="faq-answer">The Chinese zodiac is determined by birth year, with each zodiac cycle lasting 12 years, while Western astrology signs are determined by birth date (month and day), with each sign cycle lasting one year. The Chinese zodiac originates from traditional Chinese culture, while Western astrology comes from Western astrological traditions. The two represent different astrological systems from Eastern and Western cultures.</p>
              </div>
              
              <div class="faq-item">
                <h4 class="faq-question">Why do some people refer to their "lunar zodiac"?</h4>
                <p class="faq-answer">Traditional Chinese zodiac signs are calculated according to the lunar calendar. If a person is born around the time of the Lunar New Year, their zodiac sign might differ when calculated by the Gregorian calendar versus the lunar calendar. For example, if someone was born on January 22, 2023, but the Lunar New Year fell on January 23, 2023, then according to the lunar calendar, they would belong to the Year of the Rabbit rather than the Year of the Tiger.</p>
              </div>
              
              <div class="faq-item">
                <h4 class="faq-question">Is zodiac compatibility truly accurate?</h4>
                <p class="faq-answer">Zodiac compatibility is part of traditional Chinese culture and provides a perspective for understanding interpersonal relationships. While many people believe it has some reference value, modern science has not provided evidence supporting the accuracy of zodiac compatibility in predicting relationship development. In modern society, compatibility of personality, values, and lifestyle often proves more important.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 内容容器结束 -->
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
import aiConfig from '@/config/aiConfig';

import MysticalLoader from '@/components/MysticalLoader.vue';
import BreadcrumbNav from '@/components/BreadcrumbNav.vue';
import UsageGuide from '@/components/UsageGuide.vue';
import ExploreMore from '@/components/ExploreMore.vue';

export default {
  components: {
    MysticalLoader,
    BreadcrumbNav,
    UsageGuide,
    ExploreMore
  },
  name: 'ZodiacCalculator',
  setup() {
    const { t, locale } = useI18n();
    return { t, locale };
  },
  data() {
    return {
      formData: {
        fullName: '',
        gender: '',
        birthDate: '',
        intention: ''
      },
      isLoading: false,
      showResults: false, // 控制结果区域的显示
      results: {
        // 兼容旧数据结构
        sign: '',
        years: '',
        element: '',
        personality: [],
        bestMatch: [],
        worstMatch: [],
        luckyNumbers: [],
        luckyColors: [],
        aiAnalysis: {
          zodiacDetails: '',
          personalInsight: '',
          recommendation: ''
        },
        // 新数据结构
        divination: {
          personalInfo: {
            name: '',
            gender: '',
            birthDate: '',
            intention: ''
          },
          zodiacAnalysis: {
            sign: '',
            element: '',
            personality: [],
            strengths: [],
            challenges: [],
            compatibility: {
              most: [],
              least: []
            }
          },
          elementalAnalysis: {
            birthYearElement: '',
            elementBalance: {
              wood: '',
              fire: '',
              earth: '',
              metal: '',
              water: ''
            },
            dominantElement: '',
            deficientElement: '',
            celestialStem: '',
            earthlyBranch: '',
            eightTrigramInfluence: ''
          },
          lifeDestiny: {
            lifePath: '',
            fortunePeriods: {
              favorable: [],
              challenging: []
            },
            careerInsights: '',
            wealthProspects: '',
            relationshipGuidance: '',
            healthConsiderations: ''
          },
          fortuneScores: {
            careerPotential: 0,
            wealthAffinity: 0,
            relationshipHarmony: 0,
            healthConstitution: 0,
            intentionSpecificFortune: 0,
            overallLifeFortune: 0
          },
          userIntentionAnalysis: {
            analysis: '',
            recommendations: [],
            favorableTiming: '',
            cautions: ''
          }
        }
      },
      // 使用指南步骤
      usageSteps: [
        {
          title: 'Enter Your Information',
          description: 'Fill in your name, gender, birth date, and intention'
        },
        {
          title: 'Generate AI Analysis',
          description: 'Click the "Zodiac Analysis" button'
        },
        {
          title: 'Review Insights',
          description: 'Get personalized zodiac analysis and recommendations'
        }
      ],
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
      // 地支映射
      earthlyBranchesMap: {
        'Rat': '子',
        'Ox': '丑',
        'Tiger': '寅',
        'Rabbit': '卯',
        'Dragon': '辰',
        'Snake': '巳',
        'Horse': '午',
        'Goat': '未',
        'Monkey': '申',
        'Rooster': '酉',
        'Dog': '戌',
        'Pig': '亥'
      },
      // 地支对应生肖映射
      earthlyBranchToZodiac: {
        '子': 'Rat',
        '丑': 'Ox',
        '寅': 'Tiger',
        '卯': 'Rabbit',
        '辰': 'Dragon',
        '巳': 'Snake',
        '午': 'Horse',
        '未': 'Goat',
        '申': 'Monkey',
        '酉': 'Rooster',
        '戌': 'Dog',
        '亥': 'Pig'
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
    async calculateZodiac() {
      // 验证所有必填字段
      if (!this.formData.fullName || !this.formData.gender || !this.formData.birthDate || !this.formData.intention) {
        alert('Please fill in all required fields');
        return;
      }
      
      this.isLoading = true;
      this.showResults = false; // 重置结果显示状态
      
      // 从出生日期中提取年份
      const birthDate = new Date(this.formData.birthDate);
      const year = birthDate.getFullYear();
      
      // 计算生肖
      const zodiacIndex = (year - 4) % 12; // 1900年是鼠年
      const zodiacSigns = ['Rat', 'Ox', 'Tiger', 'Rabbit', 'Dragon', 'Snake', 'Horse', 'Goat', 'Monkey', 'Rooster', 'Dog', 'Pig'];
      const zodiacSign = zodiacSigns[zodiacIndex];
      const zodiacData = this.zodiacData[zodiacSign];
      
      // 准备API请求数据
      // 确保日期格式不包含T分隔符
      const formattedBirthDate = this.formData.birthDate;
      
      const apiRequestData = {
        type: 'zodiacAnalysis',  // 使用现有的生肖分析类型
        name: this.formData.fullName,
        birthDate: formattedBirthDate,
        gender: this.formData.gender,
        intention: this.formData.intention,
        locale: this.locale
      };
      
      try {
        // 使用fetch调用后端AI接口
        console.log('🌐 API端点:', aiConfig.baseConfig.proxyUrl);
        const response = await fetch(aiConfig.baseConfig.proxyUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(apiRequestData)
        });
        
        if (!response.ok) {
          throw new Error(`API request failed with status: ${response.status}`);
        }
        
        const data = await response.json();
        // 处理API响应
        this.handleApiResponse(data, zodiacSign, zodiacData);
      } catch (error) {
        console.error('Error calling AI API:', error);
        this.isLoading = false;
        
        // 当API调用失败时，回退到模拟数据
        // 注意：在生产环境中，您可能希望显示错误消息而不是使用模拟数据
        console.warn('Falling back to mock data due to API error');          
        
        // 生成模拟响应
        const mockAiResponse = this.generateMockResponse(zodiacSign, zodiacData);
        this.handleApiResponse(mockAiResponse, zodiacSign, zodiacData);
      }
    },
    
    // 生成模拟响应函数(在API调用失败时使用)
    generateMockResponse(zodiacSign, zodiacData) {
      return {
        zodiacDetails: `According to the Chinese Zodiac, you were born in the Year of the ${this.getLocalizedZodiacName(zodiacSign)}, which is associated with the ${this.getLocalizedElement(zodiacData.element)} element. This combination influences your core personality traits and life path in significant ways.`,
        personalInsight: `As a ${this.getLocalizedZodiacName(zodiacSign)}, you naturally possess qualities like ${(this.locale === 'zh' ? zodiacData.personality : zodiacData.personalityEn).join(', ')}. Your ${this.formData.intention} goals are particularly influenced by your zodiac sign's natural tendencies toward ${(this.locale === 'zh' ? zodiacData.personality[0] : zodiacData.personalityEn[0]).toLowerCase()} and ${(this.locale === 'zh' ? zodiacData.personality[2] : zodiacData.personalityEn[2]).toLowerCase()}.`,
        recommendation: `To optimize your success in ${this.formData.intention}, focus on leveraging your natural ${this.getLocalizedZodiacName(zodiacSign)} strengths while being mindful of potential challenges. Building connections with ${this.results.bestMatch ? this.results.bestMatch[0] : ''} and ${this.results.bestMatch ? this.results.bestMatch[1] : ''} individuals can create beneficial synergies for your goals.`
      };
    },
    
    handleApiResponse(apiResponse, zodiacSign, zodiacData) {
      // 提取出生日期的年份
      const birthDate = new Date(this.formData.birthDate);
      const year = birthDate.getFullYear();
      
      let divinationData = null;
      console.log('原始API响应:', apiResponse);
      
      // 检查API返回的不同数据格式情况
      if (apiResponse.divination) {
        // 直接返回divination对象的情况
        console.log('检测到直接返回divination对象');
        divinationData = apiResponse.divination;
      } 
      // OpenAI API格式的响应处理
      else if (apiResponse.choices && apiResponse.choices.length > 0 && 
               apiResponse.choices[0].message && apiResponse.choices[0].message.content) {
        try {
          console.log('处理OpenAI API格式响应...');
          const contentStr = apiResponse.choices[0].message.content;
          console.log('响应content字符串:', contentStr);
          const parsedContent = JSON.parse(contentStr);
          if (parsedContent.divination) {
            divinationData = parsedContent.divination;
            console.log('从OpenAI响应中解析出的divination:', divinationData);
          }
        } catch (error) {
          console.error('解析OpenAI响应失败:', error);
        }
      }
      // 处理其他可能的格式
      else if (apiResponse.message && apiResponse.message.content) {
        // message.content包含字符串形式的JSON
        try {
          console.log('尝试解析message.content中的JSON:', apiResponse.message.content);
          const parsedContent = JSON.parse(apiResponse.message.content);
          if (parsedContent.divination) {
            divinationData = parsedContent.divination;
            console.log('从内容中解析出的数据:', divinationData);
          }
        } catch (error) {
          console.error('解析message.content失败:', error);
        }
      } else if (typeof apiResponse === 'string') {
        // 直接是字符串的情况
        try {
          console.log('尝试解析字符串形式的响应');
          const parsedResponse = JSON.parse(apiResponse);
          if (parsedResponse.divination) {
            divinationData = parsedResponse.divination;
          } else if (parsedResponse.message && parsedResponse.message.content) {
            const parsedContent = JSON.parse(parsedResponse.message.content);
            if (parsedContent.divination) {
              divinationData = parsedContent.divination;
            }
          } else if (parsedResponse.choices && parsedResponse.choices[0]?.message?.content) {
            // 处理字符串形式的OpenAI响应
            const contentStr = parsedResponse.choices[0].message.content;
            try {
              const innerContent = JSON.parse(contentStr);
              if (innerContent.divination) {
                divinationData = innerContent.divination;
              }
            } catch (innerError) {
              console.error('解析嵌套content失败:', innerError);
            }
          }
        } catch (error) {
          console.error('解析字符串响应失败:', error);
        }
      }
      
      // 如果成功解析出了divination数据
      if (divinationData) {
        console.log('处理解析出的divination数据:', divinationData);
        this.results = {
          // 设置兼容属性，确保旧组件正常工作
          sign: divinationData.zodiacAnalysis.sign.split(' ')[0] || this.getLocalizedZodiacName(zodiacSign),
          years: year,
          element: divinationData.zodiacAnalysis.element || this.getLocalizedElement(zodiacData.element),
          personality: divinationData.zodiacAnalysis.personality || (this.locale === 'zh' ? zodiacData.personality : zodiacData.personalityEn),
          bestMatch: this.processCompatibilityArray(divinationData.zodiacAnalysis.compatibility.most) || zodiacData.bestMatch.map(sign => this.getLocalizedZodiacName(sign)),
          worstMatch: this.processCompatibilityArray(divinationData.zodiacAnalysis.compatibility.least) || zodiacData.worstMatch.map(sign => this.getLocalizedZodiacName(sign)),
          luckyNumbers: zodiacData.luckyNumbers,
          luckyColors: this.locale === 'zh' ? zodiacData.luckyColors : zodiacData.luckyColorsEn,
          aiAnalysis: {
            zodiacDetails: this.formatZodiacDetails(divinationData.zodiacAnalysis.sign, divinationData.elementalAnalysis.birthYearElement) || '',
            personalInsight: divinationData.userIntentionAnalysis.analysis || '',
            recommendation: divinationData.userIntentionAnalysis.recommendations.join(' ') || ''
          },
          // 保存完整的新格式数据
          divination: divinationData
        };
      } else {
        // 兼容旧数据格式
        console.log('使用旧格式数据处理:', apiResponse);
        this.results = {
          sign: this.getLocalizedZodiacName(zodiacSign),
          years: year,
          element: this.getLocalizedElement(zodiacData.element),
          personality: this.locale === 'zh' ? zodiacData.personality : zodiacData.personalityEn,
          bestMatch: zodiacData.bestMatch.map(sign => this.getLocalizedZodiacName(sign)),
          worstMatch: zodiacData.worstMatch.map(sign => this.getLocalizedZodiacName(sign)),
          luckyNumbers: zodiacData.luckyNumbers,
          luckyColors: this.locale === 'zh' ? zodiacData.luckyColors : zodiacData.luckyColorsEn,
          aiAnalysis: {
            zodiacDetails: apiResponse.zodiacDetails || '',
            personalInsight: apiResponse.personalInsight || '',
            recommendation: apiResponse.recommendation || ''
          }
        };
      }
      
      this.isLoading = false;
      this.showResults = true; // 显示结果区域
      
      // 滚动到结果部分
      setTimeout(() => {
        const resultsSection = document.querySelector('.results-section');
        if (resultsSection) {
          resultsSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
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
      // 如果含有括号，说明是"Dragon (龙)"这样的格式
      if (englishName && englishName.includes('(') && englishName.includes(')')) {
        const parts = englishName.split(' ');
        const baseName = parts[0]; // 取出如"Dragon"
        return this.locale === 'zh' ? 
          this.zodiacNamesChinese[baseName] || baseName : 
          this.zodiacNamesEnglish[baseName] || baseName;
      }
      
      return this.locale === 'zh' ? 
        this.zodiacNamesChinese[englishName] || englishName :
        this.zodiacNamesEnglish[englishName] || englishName;
    },
    getLocalizedElement(element) {
      return element === '\u91d1' ? 'Metal' : element === '\u6728' ? 'Wood' : element === '\u6c34' ? 'Water' : element === '\u706b' ? 'Fire' : element === '\u571f' ? 'Earth' : element;
    },
    
    // 格式化生肖详情
    // 处理生肖匹配数组，正确提取生肖名称
    processCompatibilityArray(compatibilityArray) {
      if (!compatibilityArray || !Array.isArray(compatibilityArray) || compatibilityArray.length === 0) {
        return [];
      }
      
      return compatibilityArray.map(item => {
        // 处理格式如 "Rat (鼠)" 的字符串
        if (item && typeof item === 'string' && item.includes('(') && item.includes(')')) {
          const zodiacName = item.split(' ')[0]; // 获取英文名称，如 "Rat"
          return this.getLocalizedZodiacName(zodiacName);
        }
        // 直接返回本地化的生肖名称
        return this.getLocalizedZodiacName(item);
      });
    },
    
    // 从生肖文本中提取生肖名称（如"Rat (鼠)" -> "Rat"）
    getZodiacNameFromText(text) {
      if (!text) return '';
      
      // 处理格式如 "Rat (鼠)" 的字符串
      if (text.includes('(') && text.includes(')')) {
        return text.split(' ')[0]; // 取出如"Rat"
      }
      
      return text;
    },
    
    // 从生肖文本中获取对应的图片
    getZodiacImageFromText(text) {
      const zodiacName = this.getZodiacNameFromText(text);
      const pinyin = this.zodiacPinyinMap[zodiacName];
      
      if (pinyin && this.zodiacImages[pinyin]) {
        return this.zodiacImages[pinyin];
      }
      
      // 如果找不到，返回占位图
      return `https://placehold.co/50x50/e60012/white?text=${zodiacName}`;
    },
    
    formatZodiacDetails(sign, element) {
      // 处理生肖符号，例如从"Dragon (龙)"提取"Dragon"
      let zodiacSign = sign;
      if (sign && sign.includes('(') && sign.includes(')')) {
        zodiacSign = sign.split(' ')[0];
      }
      
      // 生成格式化的输出
      const localizedSign = this.locale === 'zh' ? 
        `${this.zodiacNamesChinese[zodiacSign] || zodiacSign}` :
        `${zodiacSign}`;
      
      // 如果有地支信息，添加地支
      const branch = this.earthlyBranchesMap[zodiacSign];
      const branchStr = branch ? (this.locale === 'zh' ? ` (${branch})` : ` (${branch})`) : '';
      
      // 添加五行元素
      const elementStr = element ? ` - ${element}` : '';
      
      return `${localizedSign}${branchStr}${elementStr}`;
    },
    
    // 格式化评分标签
    formatScoreLabel(category) {
      // 将驼峰式命名转换为空格分隔并首字母大写
      return category
        .replace(/([A-Z])/g, ' $1') // 在大写字母前添加空格
        .replace(/^./, str => str.toUpperCase()) // 首字母大写
        .trim(); // 去除前后空格
    },
    
    // 根据分数获取样式类
    getScoreClass(score) {
      if (score >= 85) return 'excellent';
      if (score >= 70) return 'good';
      if (score >= 50) return 'average';
      return 'poor';
    },
    getColorCode(colorName) {
      return this.colorCodes[colorName] || '#cccccc';
    },
    
    // 测试新数据格式
    loadTestData() {
      // 模拟新格式数据
      const testData = {
        divination: {
          personalInfo: {
            name: "袁术",
            gender: "male",
            birthDate: "2000-02-03T16:30",
            intention: "lucky for future 3 years!"
          },
          zodiacAnalysis: {
            sign: "Dragon (龙)",
            element: "Metal",
            personality: [
              "Ambitious and charismatic",
              "Confident and energetic",
              "Innovative and visionary"
            ],
            strengths: [
              "Natural leadership abilities",
              "Strong determination and resilience"
            ],
            challenges: [
              "Can be overly dominant or arrogant",
              "May struggle with patience and attention to detail"
            ],
            compatibility: {
              most: [
                "Rat (鼠)",
                "Monkey (猴)"
              ],
              least: [
                "Dog (狗)",
                "Ox (牛)"
              ]
            }
          },
          elementalAnalysis: {
            birthYearElement: "Metal",
            elementBalance: {
              wood: "Weak",
              fire: "Balanced",
              earth: "Strong",
              metal: "Strong",
              water: "Weak"
            },
            dominantElement: "Metal",
            deficientElement: "Wood",
            celestialStem: "Geng (庚)",
            earthlyBranch: "Chen (辰)",
            eightTrigramInfluence: "Qian (乾) - Represents creativity, strength, and heaven's influence, indicating a path of leadership and innovation"
          },
          lifeDestiny: {
            lifePath: "A dynamic life marked by ambition, leadership opportunities, and significant personal growth, with phases of rapid advancement and occasional challenges requiring resilience.",
            fortunePeriods: {
              favorable: [
                "Ages 25-35",
                "Ages 45-55"
              ],
              challenging: [
                "Ages 18-24",
                "Ages 60-65"
              ]
            },
            careerInsights: "Excels in roles requiring initiative and authority, such as entrepreneurship, management, or creative fields; potential for rapid career progression if risks are managed wisely.",
            wealthProspects: "Strong capacity for wealth accumulation through bold investments or career advancements, but may face fluctuations; focus on steady growth over quick gains.",
            relationshipGuidance: "Attracts partners with charisma but may need to balance dominance with empathy; harmonious relationships with those who appreciate independence.",
            healthConsiderations: "Generally robust health with high energy; watch for stress-related issues or overexertion; regular exercise and mindfulness are beneficial."
          },
          fortuneScores: {
            careerPotential: 88,
            wealthAffinity: 80,
            relationshipHarmony: 75,
            healthConstitution: 85,
            intentionSpecificFortune: 82,
            overallLifeFortune: 82
          },
          userIntentionAnalysis: {
            analysis: "The next three years (based on current age and zodiac cycles) show a mix of opportunities and challenges for luck. As a Metal Dragon, you'll experience growth in career and personal endeavors, but must navigate potential setbacks with patience. The influence of the Geng Metal stem suggests resilience, while the weak Wood element indicates a need to foster flexibility and avoid rigidity in plans.",
            recommendations: [
              "Pursue new ventures in the first year to capitalize on Dragon energy",
              "Strengthen relationships with Rat and Monkey signs for support",
              "Incorporate Wood-element activities (e.g., gardening or planning) to balance deficiencies"
            ],
            favorableTiming: "The second half of each year may bring better luck, especially during autumn when Metal energy peaks.",
            cautions: "Avoid impulsive decisions in the first year; be mindful of conflicts with Dog or Ox signs that could disrupt luck."
          }
        }
      };
      
      // 使用测试数据
      const zodiacSign = 'Dragon';
      const zodiacData = this.zodiacData[zodiacSign];
      this.handleApiResponse(testData, zodiacSign, zodiacData);
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

/* 容器样式现在由全局样式控制 */
.container {
  /* 重要：不再限制容器的宽度，由全局样式来管理 */
  margin: 0 auto;
}

.page-title {
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 25px;
  margin-top: 70px;
  text-align: center;
}

/* 介绍文本样式 */
.intro-text {
  max-width: 900px;
  margin: 0 auto 40px;
  text-align: left;
  color: #555;
  line-height: 1.7;
  padding: 0 15px;
}

.intro-text p {
  margin-bottom: 16px;
  font-size: 1.05rem;
}

.intro-text p:last-child {
  margin-bottom: 0;
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
  padding: 40px 30px;
  /* 移除max-width的限制，使用内容容器的宽度 */
  margin: 0 0 30px;
  width: 100%;
}

/* 新的表单行布局样式 */
.new-form-layout {
  display: flex;
  flex-direction: column;
  gap: 25px;
  width: 100%;
}

.form-row {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  width: 100%;
}

.form-field {
  flex: 1;
  min-width: 150px;
}

/* 必填字段星号样式 */
.required-star {
  color: #e60012;
  font-weight: bold;
  margin-left: 2px;
}

.name-field {
  flex: 2;
  min-width: 250px;
}

.gender-field {
  flex: 0.8;
  min-width: 150px;
}

.date-field {
  flex: 1.2;
  min-width: 200px;
}

.full-width {
  width: 100%;
}

.form-buttons {
  display: flex;
  width: 100%;
}

.form-title {
  font-size: 1.8rem;
  color: #333;
  margin-bottom: 15px;
  text-align: center;
}

.form-description {
  color: #666;
  text-align: center;
  margin-bottom: 30px;
  font-size: 1.1rem;
  line-height: 1.6;
}

.form-group {
  margin-bottom: 25px;
  width: 100%;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
  color: #555;
}

.radio-group {
  display: flex;
  gap: 20px;
}

.radio-label {
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 8px 0;
}

.radio-label input {
  margin-right: 8px;
}

.date-group {
  margin-bottom: 30px;
}

.date-inputs {
  display: flex;
  gap: 15px;
}

.date-input-group {
  flex: 1;
}

.date-input-group label {
  font-size: 0.9rem;
  margin-bottom: 5px;
}

.form-input {
  width: 100%;
  padding: 12px 15px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 1rem;
  transition: border-color 0.3s;
  box-sizing: border-box;
}

.form-input:focus {
  outline: none;
  border-color: #e60012;
}

.textarea-input {
  min-height: 100px;
  resize: vertical;
}

input[type="datetime-local"] {
  padding-right: 10px;
}

.date-inputs {
  display: flex;
  gap: 10px;
}

.date-input {
  flex: 1;
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
  transition: all 0.3s;
  width: 100%; /* 让按钮占满容器宽度 */
}

.test-button {
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 6px;
  padding: 12px 25px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  margin-left: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 10px;
}

.submit-button:hover {
  background-color: #d00010;
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(230, 0, 18, 0.2);
}

.ai-icon {
  display: inline-block;
  width: 18px;
  height: 18px;
  background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white"><path d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M12,20c-4.42,0-8-3.58-8-8s3.58-8,8-8s8,3.58,8,8 S16.42,20,12,20z M15.5,11c0.83,0,1.5-0.67,1.5-1.5S16.33,8,15.5,8S14,8.67,14,9.5S14.67,11,15.5,11z M8.5,11 c0.83,0,1.5-0.67,1.5-1.5S9.33,8,8.5,8S7,8.67,7,9.5S7.67,11,8.5,11z M12,17.5c2.33,0,4.31-1.46,5.11-3.5H6.89 C7.69,16.04,9.67,17.5,12,17.5z"></path></svg>') no-repeat center center;
  background-size: contain;
  margin-right: 8px;
}

.results-section {
  margin-top: 30px;
  /* 移除max-width的限制，使用内容容器的宽度 */
  margin: 30px 0 0;
  width: 100%;
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

/* 添加新的样式 */
.zodiac-guide-section {
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
  padding: 35px;
  width: 100%;
  margin: 40px 0 0;
}

.guide-title {
  font-size: 1.8rem;
  color: #333;
  margin-bottom: 25px;
  text-align: center;
  position: relative;
  padding-bottom: 15px;
}

.guide-title:after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 3px;
  background-color: #e60012;
  border-radius: 2px;
}

.guide-content {
  color: #555;
  line-height: 1.7;
}

.guide-intro {
  font-size: 1.1rem;
  margin-bottom: 25px;
  text-align: justify;
}

.guide-block {
  margin-bottom: 30px;
  padding-bottom: 20px;
  border-bottom: 1px solid #eee;
}

.guide-block:last-child {
  border-bottom: none;
  padding-bottom: 0;
}

.block-title {
  font-size: 1.4rem;
  color: #333;
  margin-bottom: 15px;
  position: relative;
  padding-left: 15px;
}

.block-title:before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 5px;
  height: 20px;
  background-color: #e60012;
  border-radius: 2px;
}

.element-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 15px;
  margin-top: 20px;
}

.element-item {
  padding: 15px;
  border-radius: 8px;
  text-align: center;
  color: white;
  transition: transform 0.3s;
}

.element-item:hover {
  transform: translateY(-5px);
}

.element-item h4 {
  margin: 0 0 10px 0;
  font-size: 1.2rem;
  border-bottom: none;
}

.element-item p {
  margin: 0;
  font-size: 1rem;
}

.element-金 {
  background: linear-gradient(135deg, #ffd700 60%, #bfa640 100%);
}

.element-木 {
  background: linear-gradient(135deg, #43a047 60%, #2ecc40 100%);
}

.element-水 {
  background: linear-gradient(135deg, #2196f3 60%, #1565c0 100%);
}

.element-火 {
  background: linear-gradient(135deg, #ff7043 60%, #d32f2f 100%);
}

.element-土 {
  background: linear-gradient(135deg, #c2b280 60%, #a67c52 100%);
}

.faq-block {
  background-color: #f9f9f9;
  border-radius: 10px;
  padding: 20px;
  margin-top: 30px;
}

.faq-item {
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px dashed #ddd;
}

.faq-item:last-child {
  margin-bottom: 0;
  padding-bottom: 0;
  border-bottom: none;
}

.faq-question {
  font-size: 1.1rem;
  color: #333;
  margin-bottom: 10px;
  font-weight: 600;
}

.faq-answer {
  color: #555;
  line-height: 1.6;
  margin: 0;
}

/* AI分析区域样式 */
.ai-analysis-section {
  margin-top: 30px;
  padding: 25px;
  background-color: #f9f9fa;
  border-radius: 12px;
  border: 1px solid #e0e0e0;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.ai-title {
  font-size: 1.4rem;
  color: #333;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 2px solid #e60012;
  display: flex;
  align-items: center;
}

.ai-title .ai-icon {
  display: inline-block;
  width: 24px;
  height: 24px;
  background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%23e60012"><path d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M12,20c-4.42,0-8-3.58-8-8s3.58-8,8-8s8,3.58,8,8 S16.42,20,12,20z M15.5,11c0.83,0,1.5-0.67,1.5-1.5S16.33,8,15.5,8S14,8.67,14,9.5S14.67,11,15.5,11z M8.5,11 c0.83,0,1.5-0.67,1.5-1.5S9.33,8,8.5,8S7,8.67,7,9.5S7.67,11,8.5,11z M12,17.5c2.33,0,4.31-1.46,5.11-3.5H6.89 C7.69,16.04,9.67,17.5,12,17.5z"></path></svg>') no-repeat center center;
  background-size: contain;
  margin-right: 10px;
}

.ai-insight-box {
  margin-bottom: 20px;
  padding: 15px 20px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s, box-shadow 0.3s;
}

.ai-insight-box:last-child {
  margin-bottom: 0;
}

.ai-insight-box:hover {
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.ai-insight-box h5 {
  color: #e60012;
  font-size: 1.1rem;
  margin-bottom: 10px;
}

.ai-insight-box p {
  color: #444;
  line-height: 1.7;
  margin: 0;
}

@media (max-width: 768px) {
  .page-title {
    font-size: 2rem;
    margin-bottom: 20px;
    margin-top: 50px;
  }
  
  .intro-text {
    margin-bottom: 30px;
  }
  
  .intro-text p {
    font-size: 1rem;
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
  
  .element-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .block-title {
    font-size: 1.3rem;
  }
  
  .guide-title {
    font-size: 1.6rem;
  }
  
  .form-row {
    flex-direction: column;
    gap: 15px;
  }
  
  .form-field,
  .name-field,
  .gender-field,
  .date-field {
    flex: 1 1 100%;
    min-width: 100%;
  }
  
  .radio-group {
    flex-direction: row;
    gap: 20px;
  }
  
  .ai-insight-box {
    padding: 15px;
  }
}

/* 新格式数据区域样式 */
.new-data-section {
  margin-top: 30px;
  border-top: 1px solid #eee;
  padding-top: 20px;
}

.section-title {
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 20px;
  text-align: left;
}

.data-card {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
  padding: 20px;
  margin-bottom: 25px;
  position: relative;
  overflow: hidden;
}

.data-card h5 {
  font-size: 1.2rem;
  color: #333;
  margin: -20px -20px 15px -20px;
  padding: 12px 20px 12px 45px;
  background-color: #ffebee;
  border-bottom: 1px solid #ffcdd2;
  border-radius: 8px 8px 0 0;
  font-weight: 600;
  position: relative;
}

.data-card h5::before {
  content: '';
  position: absolute;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
  width: 16px;
  height: 16px;
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%23e60012"><path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z"/></svg>');
  background-size: contain;
  background-repeat: no-repeat;
  opacity: 0.7;
}

.data-card h5::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: linear-gradient(90deg, #e60012 0%, #e60012 50px, transparent 150px);
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
}

.info-item {
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
}

.full-width {
  grid-column: span 2;
}

.info-label {
  font-weight: bold;
  color: #555;
  margin-bottom: 3px;
}

.info-value {
  color: #333;
}

.sub-title {
  font-size: 1rem;
  color: #555;
  margin: 15px 0 8px;
}

.trait-list {
  list-style-type: disc;
  padding-left: 20px;
  margin: 0;
}

.recommendation-header {
  margin-top: 20px;
}

.recommendation-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 15px 0;
}

.recommendation-item {
  display: flex;
  align-items: flex-start;
  background-color: #f8f9fa;
  border-radius: 8px;
  padding: 12px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.05);
  transition: transform 0.2s;
}

.recommendation-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 3px 6px rgba(0,0,0,0.1);
}

.recommendation-number {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: #e60012;
  color: white;
  font-weight: bold;
  font-size: 0.9rem;
  margin-right: 12px;
  flex-shrink: 0;
}

.recommendation-text {
  color: #333;
  line-height: 1.5;
}

.trait-list li {
  margin-bottom: 5px;
}

.timing-section {
  margin-top: 20px;
}

.timing-item {
  background-color: #f8f9fa;
  border-radius: 8px;
  padding: 15px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.05);
}

.timing-item.caution {
  background-color: #fff8f8;
  border-left: 3px solid #e60012;
}

.timing-title {
  font-weight: 600;
  margin-bottom: 8px;
  color: #333;
  font-size: 0.95rem;
}

.timing-text {
  color: #444;
  line-height: 1.5;
  margin: 0;
}

/* 关于兼容性图标的样式 */
.compatibility-icons-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin-top: 10px;
}

.compatibility-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 5px;
}

.compatibility-icon {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
  background-color: #f8f9fa;
  border: 2px solid #e1e1e1;
  box-shadow: 0 3px 6px rgba(0,0,0,0.1);
  transition: transform 0.2s, box-shadow 0.2s;
  margin-bottom: 5px;
}

.compatibility-icon:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 12px rgba(0,0,0,0.15);
}

.compatibility-icon img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.compatibility-name {
  font-size: 0.9rem;
  color: #333;
  text-align: center;
  margin-top: 3px;
}

/* 性格标签的样式 */
.personality-row {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 20px;
}

.personality-tag {
  padding: 8px 16px;
  background-color: #f8f9fa;
  color: #333;
  border-radius: 50px;
  font-size: 0.95rem;
  box-shadow: 0 1px 3px rgba(0,0,0,0.05);
  border-left: 3px solid #e60012;
  transition: all 0.2s ease;
}

.personality-tag:hover {
  transform: translateY(-2px);
  box-shadow: 0 3px 6px rgba(0,0,0,0.1);
  background-color: #fff8f8;
}

.insight-panel {
  background-color: #f0f7ff;
  border-radius: 8px;
  padding: 15px;
  margin-top: 10px;
  border-left: 3px solid #2196f3;
}

.insight-title {
  font-weight: 600;
  margin-bottom: 8px;
  color: #0d47a1;
  font-size: 0.95rem;
}

.insight-text {
  color: #333;
  line-height: 1.6;
  margin: 0;
}

.two-column {
  display: flex;
  gap: 20px;
  margin-bottom: 15px;
}

.column {
  flex: 1;
}

.element-balance-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
  margin-bottom: 15px;
}

.element-balance-item {
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 8px;
  background-color: #f8f9fa;
  box-shadow: 0 2px 4px rgba(0,0,0,0.04);
  transition: transform 0.2s;
}

.element-balance-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.08);
}

.element-icon {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 12px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 60%;
}

.element-icon.wood {
  background-color: #43a047;
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white"><path d="M12,2L4.5,20.29L5.21,21L12,18L18.79,21L19.5,20.29L12,2Z"/></svg>');
}

.element-icon.fire {
  background-color: #ff7043;
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white"><path d="M17.66,11.2C17.43,10.9 17.15,10.64 16.89,10.38C16.22,9.78 15.46,9.35 14.82,8.72C13.33,7.26 13,4.85 13.95,3C13,3.23 12.17,3.75 11.46,4.32C8.87,6.4 7.85,10.07 9.07,13.22C9.11,13.32 9.15,13.42 9.15,13.55C9.15,13.77 9,13.97 8.8,14.05C8.57,14.15 8.33,14.09 8.14,13.93C8.08,13.88 8.04,13.83 8,13.76C6.87,12.33 6.69,10.28 7.45,8.64C5.78,10 4.87,12.3 5,14.47C5.06,14.97 5.12,15.47 5.29,15.97C5.43,16.57 5.7,17.17 6,17.7C7.08,19.43 8.95,20.67 10.96,20.92C13.1,21.19 15.39,20.8 17.03,19.32C18.86,17.66 19.5,15 18.56,12.72L18.43,12.46C18.22,12 17.66,11.2 17.66,11.2M14.5,17.5C14.22,17.74 13.76,18 13.4,18.1C12.28,18.5 11.16,17.94 10.5,17.28C11.69,17 12.4,16.12 12.61,15.23C12.78,14.43 12.46,13.77 12.33,13C12.21,12.26 12.23,11.63 12.5,10.94C12.69,11.32 12.89,11.7 13.13,12C13.9,13 15.11,13.44 15.37,14.8C15.41,14.94 15.43,15.08 15.43,15.23C15.46,16.05 15.1,16.95 14.5,17.5H14.5Z"/></svg>');
}

.element-icon.earth {
  background-color: #c2b280;
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white"><path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M12,6.5A5.5,5.5 0 0,1 17.5,12A5.5,5.5 0 0,1 12,17.5A5.5,5.5 0 0,1 6.5,12A5.5,5.5 0 0,1 12,6.5M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z"/></svg>');
}

.element-icon.metal {
  background-color: #bfa640;
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white"><path d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.21,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.21,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.67 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z"/></svg>');
}

.element-icon.water {
  background-color: #2196f3;
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white"><path d="M12,20A6,6 0 0,1 6,14C6,10 12,3.25 12,3.25C12,3.25 18,10 18,14A6,6 0 0,1 12,20Z"/></svg>');
}

.element-info {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.element-name {
  font-weight: 600;
  margin-bottom: 4px;
  color: #333;
}

.element-bar-container {
  height: 8px;
  width: 100%;
  background-color: #e0e0e0;
  border-radius: 4px;
  margin-bottom: 4px;
  overflow: hidden;
}

.element-bar {
  height: 100%;
  border-radius: 4px;
  transition: width 0.5s ease;
}

.element-bar.strong {
  width: 90%;
  background-color: #28a745;
}

.element-bar.weak {
  width: 30%;
  background-color: #dc3545;
}

.element-bar.balanced {
  width: 60%;
  background-color: #17a2b8;
}

.element-status {
  font-size: 0.75rem;
  color: #666;
  font-style: italic;
}

/* 新的生肖和元素样式 */
.zodiac-header-box {
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  margin-bottom: 20px;
  gap: 20px;
}

.zodiac-sign-container, .zodiac-element-container {
  flex: 1;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  display: flex;
  flex-direction: column;
}

.zodiac-sign-container {
  background-color: #f8f9fa;
  border-left: 4px solid #e60012;
}

.zodiac-element-container {
  background-color: #f8f9fa;
}

.zodiac-sign-label, .zodiac-element-label {
  font-size: 0.85rem;
  color: #666;
  margin-bottom: 8px;
}

.zodiac-sign-content {
  display: flex;
  align-items: center;
}

.zodiac-avatar {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 15px;
  border: 3px solid #fff;
  box-shadow: 0 4px 8px rgba(0,0,0,0.15);
  background-color: #f8f9fa;
}

.zodiac-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.zodiac-sign-value {
  font-size: 1.4rem;
  font-weight: bold;
  color: #333;
}

.zodiac-element-value {
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  font-weight: 600;
  color: #333;
}

.element-icon-large {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  margin-right: 12px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 60%;
}

.element-icon-large.wood {
  background-color: #43a047;
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white"><path d="M12,2L4.5,20.29L5.21,21L12,18L18.79,21L19.5,20.29L12,2Z"/></svg>');
}

.element-icon-large.fire {
  background-color: #ff7043;
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white"><path d="M17.66,11.2C17.43,10.9 17.15,10.64 16.89,10.38C16.22,9.78 15.46,9.35 14.82,8.72C13.33,7.26 13,4.85 13.95,3C13,3.23 12.17,3.75 11.46,4.32C8.87,6.4 7.85,10.07 9.07,13.22C9.11,13.32 9.15,13.42 9.15,13.55C9.15,13.77 9,13.97 8.8,14.05C8.57,14.15 8.33,14.09 8.14,13.93C8.08,13.88 8.04,13.83 8,13.76C6.87,12.33 6.69,10.28 7.45,8.64C5.78,10 4.87,12.3 5,14.47C5.06,14.97 5.12,15.47 5.29,15.97C5.43,16.57 5.7,17.17 6,17.7C7.08,19.43 8.95,20.67 10.96,20.92C13.1,21.19 15.39,20.8 17.03,19.32C18.86,17.66 19.5,15 18.56,12.72L18.43,12.46C18.22,12 17.66,11.2 17.66,11.2M14.5,17.5C14.22,17.74 13.76,18 13.4,18.1C12.28,18.5 11.16,17.94 10.5,17.28C11.69,17 12.4,16.12 12.61,15.23C12.78,14.43 12.46,13.77 12.33,13C12.21,12.26 12.23,11.63 12.5,10.94C12.69,11.32 12.89,11.7 13.13,12C13.9,13 15.11,13.44 15.37,14.8C15.41,14.94 15.43,15.08 15.43,15.23C15.46,16.05 15.1,16.95 14.5,17.5H14.5Z"/></svg>');
}

.element-icon-large.earth {
  background-color: #c2b280;
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white"><path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M12,6.5A5.5,5.5 0 0,1 17.5,12A5.5,5.5 0 0,1 12,17.5A5.5,5.5 0 0,1 6.5,12A5.5,5.5 0 0,1 12,6.5M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z"/></svg>');
}

.element-icon-large.metal {
  background-color: #bfa640;
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white"><path d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.21,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.21,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.67 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z"/></svg>');
}

.element-icon-large.water {
  background-color: #2196f3;
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white"><path d="M12,20A6,6 0 0,1 6,14C6,10 12,3.25 12,3.25C12,3.25 18,10 18,14A6,6 0 0,1 12,20Z"/></svg>');
}

/* 元素特定样式 */
.element-wood {
  color: #43a047;
}

.element-fire {
  color: #ff7043;
}

.element-earth {
  color: #c2b280;
}

.element-metal {
  color: #bfa640;
}

.element-water {
  color: #2196f3;
}

/* 元素总结行样式 */
.element-summary-row {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 15px;
  margin-bottom: 20px;
  padding-bottom: 15px;
  border-bottom: 1px solid #eee;
}

.element-summary-item {
  flex: 1;
  min-width: 150px;
  display: flex;
  flex-direction: column;
  background-color: #f8f9fa;
  padding: 12px;
  border-radius: 6px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.05);
}

.element-summary-label {
  font-size: 0.85rem;
  color: #666;
  margin-bottom: 5px;
  font-weight: 600;
}

.element-summary-value {
  font-size: 1.1rem;
  font-weight: bold;
}

@media (max-width: 768px) {
  .element-summary-row {
    flex-direction: column;
    gap: 10px;
  }

  .element-summary-item {
    flex: auto;
  }
}

.element-status.strong {
  background-color: #d4edda;
  color: #155724;
}

.element-status.weak {
  background-color: #f8d7da;
  color: #721c24;
}

.element-status.balanced {
  background-color: #cce5ff;
  color: #004085;
}

.fortune-scores {
  margin-top: 15px;
}

.score-item {
  margin-bottom: 12px;
}

.score-label {
  font-weight: 600;
  margin-bottom: 3px;
}

.score-bar-container {
  height: 20px;
  background-color: #d0d0d0; /* 加深的灰色背景 */
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  box-shadow: inset 0 1px 2px rgba(0,0,0,0.1); /* 添加内阴影效果增强立体感 */
}

.score-bar {
  height: 100%;
  border-radius: 10px;
  transition: width 1s ease-out;
}

.score-bar.excellent {
  background-color: #28a745;
}

.score-bar.good {
  background-color: #17a2b8;
}

.score-bar.average {
  background-color: #ffc107;
}

.score-bar.poor {
  background-color: #dc3545;
}

.score-value {
  position: absolute;
  right: 10px;
  top: 0;
  color: #fff;
  font-weight: 600;
  font-size: 0.85rem;
  line-height: 20px;
}
</style> 