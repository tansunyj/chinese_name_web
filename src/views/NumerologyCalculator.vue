<template>
  <div class="numerology-page">
    <div class="container">
      <!-- 面包屑导航 -->
      <BreadcrumbNav />
      <h1 class="page-title">{{ $t('numerology.title') }}</h1>
      <div class="intro-text">
        <p>Name numerology analyzes the vibration of each letter in your full name to reveal personality traits, strengths, and growth potential.</p>
        <p>Enter your name below to calculate key numerology numbers and receive tailored insights based on Pythagorean or Chaldean systems.</p>
      </div>
      
      <!-- 内容容器开始 -->
      <div class="content-container">
        <div class="content">
        <div class="form-section">
          <form @submit.prevent="calculateNumerology">
            <div class="form-group">
              <label for="fullName">{{ $t('numerology.fullName') }}</label>
              <div class="input-wrapper">
                <input 
                  type="text" 
                  id="fullName" 
                  v-model="formData.fullName" 
                  required
                  class="form-input"
                  :placeholder="$t('numerology.fullNamePlaceholder')"
                  @input="validateNameInput"
                />
                <div class="input-info" v-if="inputErrorMessage">
                  <div class="input-error">
                    <span class="error-icon">⚠️</span> {{ inputErrorMessage }}
                  </div>
                </div>
                <div class="input-tip">
                  <span class="tip-icon">ℹ️</span> English letters and spaces only
                </div>
              </div>
            </div>
            
            <div class="system-selector">
              <label>{{ $t('numerology.selectSystem') }}</label>
              <div class="radio-group">
                <label class="radio-label">
                  <input 
                    type="radio" 
                    name="numerologySystem" 
                    value="pythagorean" 
                    v-model="formData.system"
                  />
                  <span class="radio-text">{{ $t('numerology.pythagorean') }}</span>
                </label>
                <label class="radio-label">
                  <input 
                    type="radio" 
                    name="numerologySystem" 
                    value="chaldean" 
                    v-model="formData.system"
                  />
                  <span class="radio-text">{{ $t('numerology.chaldean') }}</span>
                </label>
              </div>
            </div>
            
            <button type="submit" class="submit-button">
              <span v-if="isLoading">{{ $t('common.loading') }}</span>
              <span v-else>{{ $t('numerology.calculateButton') }}</span>
            </button>
          </form>
        </div>
        
        <!-- 加载指示器 -->
        <MysticalLoader v-if="isLoading" />
        
        <!-- 结果显示区域 -->
        <div v-if="results.expressionNumber" class="results-section">
          <h2>{{ $t('numerology.results.title') }}</h2>
          
          <div class="numerology-card">
            <div class="numerology-header">
              <div class="numerology-icon">
                <div class="number-circle">
                  {{ results.expressionNumber }}
                </div>
              </div>
              <div class="numerology-name">
                <h3>{{ results.fullName }}</h3>
                <span class="system-tag">{{ formData.system === 'pythagorean' ? $t('numerology.pythagorean') : $t('numerology.chaldean') }}</span>
              </div>
              
              <!-- 幸运色和幸运石直接放在名字右侧 -->
              <div class="lucky-section-inline">
                <!-- 幸运色 -->
                <div class="lucky-column-inline">
                  <h4 class="lucky-title-inline">{{ $t('numerology.results.luckyColors') }}</h4>
                  <div class="lucky-colors-inline">
                    <div 
                      v-for="(color, index) in results.luckyColors" 
                      :key="'color-'+index" 
                      class="color-block-inline"
                    >
                      <div 
                        class="color-box-inline"
                        :style="{ backgroundColor: getColorCode(color) }"
                      >
                      </div>
                      <span class="color-name-inline">{{ color }}</span>
                    </div>
                  </div>
                </div>
                
                <!-- 幸运石 -->
                <div class="lucky-column-inline">
                  <h4 class="lucky-title-inline">{{ $t('numerology.results.luckyGems') }}</h4>
                  <div class="gems-inline">
                    <div v-for="(gem, index) in results.luckyGems" :key="'gem-'+index" class="gem-item-inline">
                      <div class="gem-image-container-inline">
                        <img :src="getGemImage(gem)" :alt="gem" class="gem-image-inline" />
                      </div>
                      <span class="gem-name-inline">{{ gem }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="numerology-details">
              <div class="detail-section">
                <h4>{{ $t('numerology.results.coreNumbers') }}</h4>
                <div class="numbers-progress-container">
                  <div class="number-progress-item">
                    <div class="number-progress-header">
                      <div class="number-progress-label">{{ $t('numerology.results.expressionNumber') }}</div>
                      <div class="score-display"><span class="score-value">{{ results.expressionNumber }}</span><span class="score-total">/9</span></div>
                    </div>
                    <div class="number-progress-bar-wrapper">
                      <div class="number-progress-bar-container">
                        <div class="number-progress-bar" :style="{ width: (results.expressionNumber * 11.1) + '%', backgroundColor: getProgressColor(1) }">
                          <div class="number-progress-value-overlay">{{ results.expressionNumber }}</div>
                        </div>
                      </div>
                    </div>
                    <div class="score-caption">{{ getScoreCaption(results.expressionNumber) }}</div>
                  </div>
                  
                  <div class="number-progress-item">
                    <div class="number-progress-header">
                      <div class="number-progress-label">{{ $t('numerology.results.soulUrgeNumber') }}</div>
                      <div class="score-display"><span class="score-value">{{ results.soulUrgeNumber }}</span><span class="score-total">/9</span></div>
                    </div>
                    <div class="number-progress-bar-wrapper">
                      <div class="number-progress-bar-container">
                        <div class="number-progress-bar" :style="{ width: (results.soulUrgeNumber * 11.1) + '%', backgroundColor: getProgressColor(2) }">
                          <div class="number-progress-value-overlay">{{ results.soulUrgeNumber }}</div>
                        </div>
                      </div>
                    </div>
                    <div class="score-caption">{{ getScoreCaption(results.soulUrgeNumber) }}</div>
                  </div>
                  
                  <div class="number-progress-item">
                    <div class="number-progress-header">
                      <div class="number-progress-label">{{ $t('numerology.results.personalityNumber') }}</div>
                      <div class="score-display"><span class="score-value">{{ results.personalityNumber }}</span><span class="score-total">/9</span></div>
                    </div>
                    <div class="number-progress-bar-wrapper">
                      <div class="number-progress-bar-container">
                        <div class="number-progress-bar" :style="{ width: (results.personalityNumber * 11.1) + '%', backgroundColor: getProgressColor(3) }">
                          <div class="number-progress-value-overlay">{{ results.personalityNumber }}</div>
                        </div>
                      </div>
                    </div>
                    <div class="score-caption">{{ getScoreCaption(results.personalityNumber) }}</div>
                  </div>
                </div>
              </div>
              
              <div class="detail-section">
                <h4>{{ $t('numerology.results.meaningTitle') }}</h4>
                <div class="meaning-box expression-meaning">
                  <h5>🌟 {{ $t('numerology.results.expressionNumber') }} ({{ results.expressionNumber }})</h5>
                  <p class="meaning-text" v-html="expressionMeaning"></p>
                </div>
                
                <div class="meaning-box soul-urge-meaning">
                  <h5>💫 {{ $t('numerology.results.soulUrgeNumber') }} ({{ results.soulUrgeNumber }})</h5>
                  <p class="meaning-text" v-html="soulUrgeMeaning"></p>
                </div>
                
                <div class="meaning-box personality-meaning">
                  <h5>✨ {{ $t('numerology.results.personalityNumber') }} ({{ results.personalityNumber }})</h5>
                  <p class="meaning-text" v-html="personalityMeaning"></p>
                </div>
              </div>
              
              <div class="detail-section">
                <h4>{{ $t('numerology.results.traits') }}</h4>
                <div class="traits-expanded">
                  <div class="traits-description">
                    <p>{{ getTraitsDescription(results.expressionNumber) }}</p>
                  </div>
                  <div class="traits-container">
                    <div v-for="(trait, index) in results.traits" :key="index" class="trait-tag">
                      {{ trait }}
                    </div>
                  </div>
                </div>
              </div>
              
              <div class="calculation-section">
                <h4>{{ $t('numerology.results.calculationDetails') }}</h4>
                <div class="calculation-details">
                  <div class="calculation-box">
                    <h5>{{ $t('numerology.results.expressionCalculation') }}</h5>
                    <div class="letter-values">
                      <span v-for="(value, index) in letterValues" :key="'exp-'+index" class="letter-value">
                        {{ value.letter }}: {{ value.value }}
                      </span>
                    </div>
                    <p class="calculation-formula">{{ $t('numerology.results.sum') }}: {{ calculationDetails.expressionSum }}</p>
                    <p class="calculation-formula" v-if="calculationDetails.expressionReduction">{{ $t('numerology.results.reduction') }}: {{ calculationDetails.expressionReduction }}</p>
                  </div>
                  
                  <div class="calculation-box">
                    <h5>{{ $t('numerology.results.soulUrgeCalculation') }}</h5>
                    <div class="letter-values">
                      <span v-for="(value, index) in vowelValues" :key="'soul-'+index" class="letter-value vowel-value">
                        {{ value.letter }}: {{ value.value }}
                      </span>
                    </div>
                    <p class="calculation-formula">{{ $t('numerology.results.sum') }}: {{ calculationDetails.soulUrgeSum }}</p>
                    <p class="calculation-formula" v-if="calculationDetails.soulUrgeReduction">{{ $t('numerology.results.reduction') }}: {{ calculationDetails.soulUrgeReduction }}</p>
                  </div>
                  
                  <div class="calculation-box">
                    <h5>{{ $t('numerology.results.personalityCalculation') }}</h5>
                    <div class="letter-values">
                      <span v-for="(value, index) in consonantValues" :key="'pers-'+index" class="letter-value consonant-value">
                        {{ value.letter }}: {{ value.value }}
                      </span>
                    </div>
                    <p class="calculation-formula">{{ $t('numerology.results.sum') }}: {{ calculationDetails.personalitySum }}</p>
                    <p class="calculation-formula" v-if="calculationDetails.personalityReduction">{{ $t('numerology.results.reduction') }}: {{ calculationDetails.personalityReduction }}</p>
                  </div>
                </div>
              </div>
              
              <!-- 幸运色和幸运石已经移动到姓名下方 -->
            </div>
          </div>
        </div>
        
        <!-- 使用指南 -->
        <UsageGuide 
          :title="$t('numerology.guideTitle')"
          :steps="usageSteps"
        />
        
        <!-- Explore More 组件 -->
        <ExploreMore :currentPath="$route.path" />
                
        <!-- 添加文字说明部分 -->
        <div class="numerology-guide-section">
          <h2 class="guide-title">{{ $t('numerology.guide.title') }}</h2>
          
          <div class="guide-content">
            <p class="guide-intro">{{ $t('numerology.guide.intro') }}</p>
            
            <div class="guide-block">
              <h3 class="block-title">{{ $t('numerology.guide.systems.title') }}</h3>
              <p>{{ $t('numerology.guide.systems.content') }}</p>
              <div class="systems-comparison">
                <div class="system-item system-pythagorean">
                  <h4>{{ $t('numerology.pythagorean') }}</h4>
                  <p>{{ $t('numerology.guide.systems.pythagoreanDesc') }}</p>
                </div>
                <div class="system-item system-chaldean">
                  <h4>{{ $t('numerology.chaldean') }}</h4>
                  <p>{{ $t('numerology.guide.systems.chaldeanDesc') }}</p>
                </div>
              </div>
            </div>
            
            <div class="guide-block">
              <h3 class="block-title">{{ $t('numerology.guide.coreNumbers.title') }}</h3>
              <p>{{ $t('numerology.guide.coreNumbers.content') }}</p>
              <div class="number-explanations">
                <div class="number-explanation">
                  <h4>{{ $t('numerology.results.expressionNumber') }}</h4>
                  <p>{{ $t('numerology.guide.coreNumbers.expressionDesc') }}</p>
                </div>
                <div class="number-explanation">
                  <h4>{{ $t('numerology.results.soulUrgeNumber') }}</h4>
                  <p>{{ $t('numerology.guide.coreNumbers.soulUrgeDesc') }}</p>
                </div>
                <div class="number-explanation">
                  <h4>{{ $t('numerology.results.personalityNumber') }}</h4>
                  <p>{{ $t('numerology.guide.coreNumbers.personalityDesc') }}</p>
                </div>
              </div>
            </div>
            
            <div class="guide-block faq-block">
              <h3 class="block-title">{{ $t('numerology.guide.faq.title') }}</h3>
              
              <div class="faq-item">
                <h4 class="faq-question">{{ $t('numerology.guide.faq.q1') }}</h4>
                <p class="faq-answer">{{ $t('numerology.guide.faq.a1') }}</p>
              </div>
              
              <div class="faq-item">
                <h4 class="faq-question">{{ $t('numerology.guide.faq.q2') }}</h4>
                <p class="faq-answer">{{ $t('numerology.guide.faq.a2') }}</p>
              </div>
              
              <div class="faq-item">
                <h4 class="faq-question">{{ $t('numerology.guide.faq.q3') }}</h4>
                <p class="faq-answer">{{ $t('numerology.guide.faq.a3') }}</p>
              </div>
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
import { useI18n } from 'vue-i18n';

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
  name: 'NumerologyCalculator',
  
  computed: {
    // 表达数详细解释
    expressionMeaning() {
      const number = this.results.expressionNumber;
      const meanings = {
        '1': 'Your Expression Number 1 reveals you as a born leader and innovator. You are independent, original, and pioneering, with strong willpower and determination. You have excellent executive abilities and are driven to achieve your goals. While sometimes appearing self-focused, your strength lies in your ability to break new ground and inspire others with your courage and originality.',
        '2': 'Your Expression Number 2 shows your natural diplomatic abilities. You are cooperative, considerate, and highly perceptive of others\'s feelings. Your greatest strength lies in your ability to bring people together and create harmony in difficult situations. You make an excellent mediator and partner, with exceptional attention to detail and a nurturing presence.',
        '3': 'With Expression Number 3, you possess exceptional creative and communicative abilities. You have a natural gift for self-expression, whether through words, art, or performance. Your optimistic outlook and charisma draw others to you. While sometimes scattered in your energies, your joy, inspiration, and ability to uplift others is your greatest contribution.',
        '4': 'Your Expression Number 4 identifies you as practical, reliable, and methodical. You value order, system, and organization, approaching life with a disciplined, step-by-step approach. Your honesty and strong work ethic make you dependable in all situations. Though sometimes appearing stubborn, your steadfast nature ensures solid foundations for everything you build.',
        '5': 'Expression Number 5 reveals your versatile, freedom-loving nature. You crave variety, adventure, and change, with a quick mind that readily adapts to new situations. Your progressive thinking and persuasive communication skills make you an excellent marketer or agent of change. While sometimes restless, your adaptability and resilience are remarkable strengths.',
        '6': 'With Expression Number 6, you are naturally nurturing and responsible. You have a deep sense of duty toward family and community, with strong artistic sensibilities and appreciation for beauty. Your protective nature makes you an excellent caregiver, counselor, or teacher. Your challenge is to avoid taking on too many responsibilities and becoming overwhelmed by others\'s needs.',
        '7': 'Your Expression Number 7 reveals your analytical, introspective nature. You have a seeking mind that searches for deeper understanding and spiritual truth. Your perceptive abilities often give you exceptional insights that others miss. While sometimes appearing aloof or distant, your wisdom, technical precision, and ability to see beyond the surface are your greatest gifts.',
        '8': 'Expression Number 8 shows your executive abilities and practical judgment. You have natural organizational talent and understand the material world of business, finance, and power. Your ambition and efficiency can lead to significant achievements in business or leadership. While sometimes appearing overly focused on material success, your ability to manifest abundance can benefit many.',
        '9': 'With Expression Number 9, you embody compassion and humanitarianism on a global scale. Your broad understanding of human nature gives you great empathy and artistic sensitivity. You often feel a sense of universal responsibility and mission in life. Though sometimes idealistic, your ability to inspire others toward greater understanding and unity is your special gift.',
        '11': 'Your master Expression Number 11 indicates heightened intuition and inspirational qualities. You are highly sensitive and often receive insights and awareness beyond normal understanding. Your idealism and vision can inspire others to reach for higher possibilities. You may struggle with nervous tension due to your sensitivity, but your ability to channel higher wisdom is your extraordinary gift.',
        '22': 'With master Expression Number 22, you possess exceptional practical vision and the ability to manifest large-scale projects. You combine idealism with pragmatic skills to build structures that serve humanity. Your organizational abilities are extraordinary, allowing you to turn dreams into reality. Though sometimes overwhelmed by your potential, your ability to create lasting, tangible achievements is your remarkable contribution.',
        '33': 'Your rare master Expression Number 33 reveals you as a natural teacher and healer with profound compassion. You embody selfless service and unconditional love, with the ability to uplift others through your presence alone. While you may struggle with the weight of your sensitivity, your capacity to nurture the potential in others and create environments of healing is your extraordinary gift to the world.'
      };
      
      return meanings[number] || 'Your Expression Number represents your natural abilities and potential in this lifetime. It reveals your strengths, challenges, and the qualities you\'re developing through your life experiences.';
    },
    
    // 灵魂渴望数详细解释
    soulUrgeMeaning() {
      const number = this.results.soulUrgeNumber;
      const meanings = {
        '1': 'Your Soul Urge Number 1 reveals your deep inner desire for independence and achievement. You yearn to be a leader, pioneer, or innovator—someone who makes a distinct individual impact. You are motivated by recognition of your uniqueness and originality. Deep down, you want the freedom to forge your own path and be acknowledged for your personal accomplishments.',
        '2': 'With Soul Urge Number 2, your heart longs for harmonious relationships and peaceful cooperation. You have a deep desire to connect meaningfully with others and create environments where everyone feels valued. Your inner motivation comes from bringing people together, resolving conflicts, and establishing balance. You find fulfillment through partnerships and situations where your sensitivity and diplomacy are appreciated.',
        '3': 'Your Soul Urge Number 3 indicates a profound desire for creative self-expression and joyful living. Your inner self yearns to communicate, inspire, and uplift others through words, art, or performance. You seek social connection, appreciation for your creative talents, and the freedom to express your emotions authentically. Your inner happiness comes from bringing beauty and joy into the world.',
        '4': 'With Soul Urge Number 4, your heart desires stability, security, and order. You have a deep need for structure and predictability in your life. Inner fulfillment comes from building something substantial and long-lasting, whether in your career, home, or relationships. You value honesty, loyalty, and dependability above all, and seek these qualities in your environment and relationships.',
        '5': 'Your Soul Urge Number 5 reveals an inner craving for freedom, variety, and adventure. Your heart desires stimulation, new experiences, and the opportunity to explore life without restriction. You feel most alive when experiencing change and having the liberty to follow your curiosity. Deep down, you want to taste all that life has to offer and fear being trapped in routine or monotony.',
        '6': 'With Soul Urge Number 6, your deepest desire is to nurture, protect, and serve those you love. You yearn to create harmony and beauty in your environment and seek deep, meaningful connections with family and community. Your heart longs to be needed and appreciated for the care and support you provide. You find fulfillment in helping others and creating environments of comfort and aesthetic beauty.',
        '7': 'Your Soul Urge Number 7 indicates a profound inner need for wisdom, understanding, and spiritual truth. Your heart yearns for knowledge that goes beyond surface explanations. You seek solitude and time for reflection, feeling most fulfilled when discovering deeper meaning in life. Inner peace comes from connecting with your spiritual nature and understanding the mysteries of existence.',
        '8': 'With Soul Urge Number 8, your heart desires material comfort, financial security, and recognition of your achievements. You have a deep need to create abundance and demonstrate your executive abilities. You seek situations where your practical judgment and organizational skills are valued. Inner satisfaction comes from building something substantial in the material world and achieving tangible results.',
        '9': 'Your Soul Urge Number 9 reveals a deep yearning to serve humanity and contribute to the greater good. Your heart desires to make a meaningful difference in the world through compassion, creativity, or wisdom. You seek universal understanding and connection that transcends cultural and social boundaries. Your inner fulfillment comes from selfless giving and seeing how your contributions improve the lives of many.',
        '11': 'With master Soul Urge Number 11, your inner self yearns for spiritual insight and illumination. You have a profound desire to access higher wisdom and share inspirational messages with others. Your heart seeks experiences that transcend ordinary understanding, often feeling connected to something greater than yourself. Inner peace comes from following your intuition and using your sensitivity as a channel for higher guidance.',
        '22': 'Your master Soul Urge Number 22 indicates a deep desire to build structures that benefit humanity on a large scale. Your heart yearns to transform visionary ideas into practical realities that serve many people. You seek opportunities to use your exceptional organizational abilities to create lasting improvements in the world. Inner fulfillment comes from seeing your idealistic dreams take concrete form.',
        '33': 'With the rare master Soul Urge Number 33, your heart profoundly desires to nurture the spiritual awareness and growth of humanity. You have an inner calling to heal, teach, and uplift others through unconditional love. You seek to create environments where others can recognize their divine nature and highest potential. Your deepest fulfillment comes from selfless service and witnessing the spiritual evolution of those you touch.'
      };
      
      return meanings[number] || 'Your Soul Urge Number represents your heart\'s deepest desires and motivations. It reveals what truly drives you and what you\'re seeking to experience in this lifetime on an emotional and spiritual level.';
    },
    
    // 个性数详细解释
    personalityMeaning() {
      const number = this.results.personalityNumber;
      const meanings = {
        '1': 'Your Personality Number 1 shows that others see you as strong, independent, and decisive. You present yourself as confident, capable, and willing to take the lead. People perceive you as someone who stands their ground and isn\'t easily influenced by others. You may come across as ambitious and self-reliant, sometimes appearing too focused on your own goals or reluctant to ask for help.',
        '2': 'With Personality Number 2, you appear cooperative, considerate, and tactful to others. People experience you as a good listener with diplomatic skills and sensitivity to their feelings. You come across as someone who values harmony and works well in partnerships and groups. Others may see you as gentle and agreeable, sometimes perceiving this as indecisiveness or excessive concern about what others think.',
        '3': 'Your Personality Number 3 shows that others see you as charismatic, expressive, and socially engaging. You come across as optimistic, creative, and entertaining, with a good sense of humor that draws people to you. Others perceive you as someone who enjoys the spotlight and communicates with flair. People may sometimes see you as scattered or too talkative, but they\'re generally attracted to your positive energy.',
        '4': 'With Personality Number 4, you present yourself as reliable, methodical, and practical. Others perceive you as someone who is organized, detail-oriented, and follows through on commitments. You come across as straightforward and honest, valuing tradition and established methods. People may sometimes view you as rigid or overly cautious, but they trust your consistent and dependable nature.',
        '5': 'Your Personality Number 5 shows that others see you as versatile, adventurous, and dynamic. You present yourself as progressive and adaptable, with diverse interests and experiences. People perceive you as someone who values freedom and embraces change. You come across as engaging and persuasive in communication, though sometimes others may see you as restless or uncommitted to long-term plans.',
        '6': 'With Personality Number 6, you appear responsible, caring, and harmonious to others. People experience you as someone who takes care of practical matters while maintaining aesthetic sensitivity. You come across as nurturing and willing to help, with a strong sense of duty toward family and community. Others may sometimes see you as too involved in their business or perfectionist, but they appreciate your supportive nature.',
        '7': 'Your Personality Number 7 shows that others perceive you as thoughtful, private, and analytical. You present yourself as someone who observes carefully before speaking or acting. People experience you as dignified and somewhat reserved, with depth of knowledge in your areas of interest. You may come across as mysterious or distant to some, but those who know you appreciate your wisdom and integrity.',
        '8': 'With Personality Number 8, others see you as authoritative, ambitious, and business-minded. You present yourself as confident in handling practical affairs and making executive decisions. People perceive you as someone who understands material realities and can organize resources effectively. You may come across as status-conscious or dominant to some, but many respect your managerial capabilities and practical wisdom.',
        '9': 'Your Personality Number 9 shows that others experience you as sophisticated, compassionate, and idealistic. You present yourself as someone with broad understanding and humanitarian values. People perceive you as cultured, with artistic or spiritual sensibilities. You come across as having a global perspective rather than a narrowly focused viewpoint. Some may see you as somewhat aloof or impractical, but many are inspired by your visionary outlook.',
        '11': 'With Personality Number 11, others perceive you as highly intuitive, sensitive, and inspirational. You present yourself as someone who has unusual insights or creative vision. People experience you as idealistic and somewhat otherworldly, with a special magnetism that draws them in. You may come across as high-strung or nervous at times, but many are attracted to your unique perspective and spiritual awareness.',
        '22': 'Your Personality Number 22 shows that others see you as highly capable, practical, and visionary at the same time. You present yourself as someone who can handle large-scale projects and bring big ideas into reality. People perceive you as ambitious but community-minded, with exceptional organizational skills. You may come across as demanding or overwhelming to some, but many respect your ability to create tangible results from conceptual beginnings.',
        '33': 'With the rare Personality Number 33, others perceive you as exceptionally nurturing, wise, and altruistic. You present yourself as someone deeply concerned with others\'s welfare and growth. People experience you as having a special quality of compassion that makes them feel understood and supported. You come across as selfless, sometimes to the point where others worry about you not taking care of your own needs, but your presence is often experienced as healing and uplifting.'
      };
      
      return meanings[number] || 'Your Personality Number represents how others perceive you upon first meeting. It reveals the aspects of yourself that you show to the world and the impression you make on others before they get to know you more deeply.';
    }
  },
  setup() {
    const { t, locale } = useI18n();
    return { t, locale };
  },
  data() {
    // ...
    return {
      formData: {
        fullName: '',
        system: 'pythagorean' // Default system
      },
      inputErrorMessage: '', // 添加错误信息状态变量
      isLoading: false,
      results: {
        fullName: '',
        expressionNumber: '',
        soulUrgeNumber: '',
        personalityNumber: '',
        meaning: '',
        traits: [],
        luckyColors: [],
        luckyGems: []
      },
      letterValues: [], // 存储名字中每个字母对应的数值
      vowelValues: [], // 存储名字中元音字母对应的数值
      consonantValues: [], // 存储名字中辅音字母对应的数值
      calculationDetails: {
        expressionSum: '',
        expressionReduction: '',
        soulUrgeSum: '',
        soulUrgeReduction: '',
        personalitySum: '',
        personalityReduction: ''
      },
      // 使用指南步骤
      usageSteps: [
        {
          title: 'Enter Your Name',
          description: 'Enter your full name in the input field'
        },
        {
          title: 'Select System',
          description: 'Choose between Pythagorean or Chaldean numerology systems'
        },
        {
          title: 'Get Your Numbers',
          description: 'Click the calculate button to see your numerology analysis'
        }
      ],
      // 数字解读数据
      numberMeanings: {
        '1': {
          meaning: 'The Pioneer. Number 1 represents leadership, individuality, and new beginnings. You are independent, determined, and original in your thinking.',
          traits: ['Leader', 'Independent', 'Original', 'Ambitious', 'Strong-willed'],
          luckyColors: ['Red', 'Yellow', 'Orange'],
          luckyGems: ['Ruby', 'Garnet', 'Amber']
        },
        '2': {
          meaning: 'The Peacemaker. Number 2 represents cooperation, harmony, and diplomacy. You are sensitive, tactful, and have strong intuition.',
          traits: ['Diplomatic', 'Sensitive', 'Cooperative', 'Intuitive', 'Patient'],
          luckyColors: ['Green', 'Blue', 'Cream'],
          luckyGems: ['Moonstone', 'Pearl', 'Jade']
        },
        '3': {
          meaning: 'The Expressive One. Number 3 represents creativity, communication, and self-expression. You are optimistic, sociable, and enjoy sharing your ideas.',
          traits: ['Creative', 'Expressive', 'Sociable', 'Optimistic', 'Entertaining'],
          luckyColors: ['Yellow', 'Pink', 'Purple'],
          luckyGems: ['Amber', 'Topaz', 'Citrine']
        },
        '4': {
          meaning: 'The Builder. Number 4 represents stability, practicality, and organization. You are hardworking, reliable, and have strong values.',
          traits: ['Practical', 'Reliable', 'Organized', 'Hardworking', 'Loyal'],
          luckyColors: ['Green', 'Blue', 'Brown'],
          luckyGems: ['Emerald', 'Sapphire', 'Jasper']
        },
        '5': {
          meaning: 'The Freedom Seeker. Number 5 represents change, adventure, and versatility. You are adaptable, progressive, and love freedom and new experiences.',
          traits: ['Adaptable', 'Adventurous', 'Progressive', 'Versatile', 'Curious'],
          luckyColors: ['Turquoise', 'Silver', 'White'],
          luckyGems: ['Aquamarine', 'Turquoise', 'Opal']
        },
        '6': {
          meaning: 'The Nurturer. Number 6 represents responsibility, care, and harmony. You are compassionate, protective, and find fulfillment in helping others.',
          traits: ['Caring', 'Responsible', 'Nurturing', 'Protective', 'Balanced'],
          luckyColors: ['Blue', 'Green', 'Indigo'],
          luckyGems: ['Sapphire', 'Turquoise', 'Lapis Lazuli']
        },
        '7': {
          meaning: 'The Seeker. Number 7 represents wisdom, intellect, and spirituality. You are analytical, reflective, and drawn to life\'s deeper questions.',
          traits: ['Analytical', 'Spiritual', 'Intellectual', 'Intuitive', 'Perfectionist'],
          luckyColors: ['Purple', 'Blue', 'Silver'],
          luckyGems: ['Amethyst', 'Diamond', 'Crystal']
        },
        '8': {
          meaning: 'The Powerhouse. Number 8 represents ambition, achievement, and authority. You are goal-oriented, practical, and have strong leadership abilities.',
          traits: ['Ambitious', 'Authoritative', 'Successful', 'Disciplined', 'Confident'],
          luckyColors: ['Purple', 'Blue', 'Black'],
          luckyGems: ['Diamond', 'Sapphire', 'Onyx']
        },
        '9': {
          meaning: 'The Humanitarian. Number 9 represents compassion, universal love, and completion. You are idealistic, generous, and have a global perspective.',
          traits: ['Compassionate', 'Generous', 'Idealistic', 'Artistic', 'Selfless'],
          luckyColors: ['Purple', 'Lavender', 'Gold'],
          luckyGems: ['Amethyst', 'Rose Quartz', 'Topaz']
        },
        '11': {
          meaning: 'The Intuitive. Master Number 11 represents intuition, inspiration, and enlightenment. You are highly intuitive, idealistic, and have heightened sensitivity.',
          traits: ['Intuitive', 'Inspirational', 'Visionary', 'Idealistic', 'Sensitive'],
          luckyColors: ['White', 'Ivory', 'Silver'],
          luckyGems: ['Moonstone', 'Clear Quartz', 'Diamond']
        },
        '22': {
          meaning: 'The Master Builder. Master Number 22 represents vision, practical idealism, and large-scale achievement. You have the ability to transform dreams into reality.',
          traits: ['Visionary', 'Practical', 'Powerful', 'Determined', 'Capable'],
          luckyColors: ['Gold', 'Royal Blue', 'Green'],
          luckyGems: ['Amber', 'Sapphire', 'Emerald']
        },
        '33': {
          meaning: 'The Master Teacher. Master Number 33 represents altruism, compassion, and raising consciousness. You are nurturing, selfless, and devoted to serving humanity.',
          traits: ['Compassionate', 'Spiritual', 'Nurturing', 'Inspiring', 'Selfless'],
          luckyColors: ['Magenta', 'Purple', 'Gold'],
          luckyGems: ['Rose Quartz', 'Amethyst', 'Topaz']
        },
      },
      // 颜色代码
      colorCodes: {
        'Red': '#e60012',
        'Blue': '#1e88e5',
        'Green': '#4caf50',
        'Yellow': '#ffc107',
        'Gold': '#ffd700',
        'Silver': '#c0c0c0',
        'Grey': '#9e9e9e',
        'Black': '#212121',
        'Purple': '#9c27b0',
        'Orange': '#ff9800',
        'Pink': '#f48fb1',
        'Brown': '#795548',
        'Turquoise': '#00BCD4',
        'White': '#ffffff',
        'Cream': '#FFF8DC',
        'Indigo': '#3f51b5',
        'Lavender': '#E6E6FA',
        'Magenta': '#FF00FF',
        'Ivory': '#FFFFF0',
        'Royal Blue': '#4169E1',
      },
      // 字母数字映射 - Pythagorean
      pythagoreanMap: {
        'A': 1, 'J': 1, 'S': 1,
        'B': 2, 'K': 2, 'T': 2,
        'C': 3, 'L': 3, 'U': 3,
        'D': 4, 'M': 4, 'V': 4,
        'E': 5, 'N': 5, 'W': 5,
        'F': 6, 'O': 6, 'X': 6,
        'G': 7, 'P': 7, 'Y': 7,
        'H': 8, 'Q': 8, 'Z': 8,
        'I': 9, 'R': 9
      },
      // 字母数字映射 - Chaldean
      chaldeanMap: {
        'A': 1, 'I': 1, 'J': 1, 'Q': 1, 'Y': 1,
        'B': 2, 'K': 2, 'R': 2,
        'C': 3, 'G': 3, 'L': 3, 'S': 3,
        'D': 4, 'M': 4, 'T': 4,
        'E': 5, 'H': 5, 'N': 5, 'X': 5,
        'U': 6, 'V': 6, 'W': 6,
        'O': 7, 'Z': 7,
        'F': 8, 'P': 8
      }
    };
  },
  methods: {
    // 验证输入，只允许英文字母和空格
    validateNameInput() {
      const input = this.formData.fullName;
      // 检查是否包含非英文字母和非空格字符
      if (/[^a-zA-Z\s]/.test(input)) {
        // 移除非英文字母和空格
        this.formData.fullName = input.replace(/[^a-zA-Z\s]/g, '');
        this.inputErrorMessage = 'Only English letters and spaces are allowed';
      } else if (/\s{2,}/.test(input)) {
        // 移除多余的空格
        this.formData.fullName = input.replace(/\s{2,}/g, ' ');
        this.inputErrorMessage = 'Multiple spaces are not allowed';
      } else {
        this.inputErrorMessage = '';
      }
    },
      
    calculateNumerology() {
      if (!this.formData.fullName.trim()) return;
      
      // 检查是否输入有效（仅英文字母和空格）
      if (/[^a-zA-Z\s]/.test(this.formData.fullName)) {
        this.inputErrorMessage = 'Only English letters and spaces are allowed';
        return;
      }
      
      this.isLoading = true;
      
      // 延时模拟计算过程
      setTimeout(() => {
        const fullName = this.formData.fullName.trim();
        const system = this.formData.system;
        
        // 重置计算详情
        this.letterValues = [];
        this.vowelValues = [];
        this.consonantValues = [];
        this.calculationDetails = {
          expressionSum: '',
          expressionReduction: '',
          soulUrgeSum: '',
          soulUrgeReduction: '',
          personalitySum: '',
          personalityReduction: ''
        };
        
        // 计算各个数字和详细过程
        const expressionResult = this.calculateExpressionNumberWithDetails(fullName, system);
        const soulUrgeResult = this.calculateSoulUrgeNumberWithDetails(fullName, system);
        const personalityResult = this.calculatePersonalityNumberWithDetails(fullName, system);
        
        // 保存计算结果
        const expressionNumber = expressionResult.number;
        const soulUrgeNumber = soulUrgeResult.number;
        const personalityNumber = personalityResult.number;
        
        // 保存计算详情
        this.letterValues = expressionResult.letterValues;
        this.vowelValues = soulUrgeResult.letterValues;
        this.consonantValues = personalityResult.letterValues;
        
        this.calculationDetails = {
          expressionSum: expressionResult.sum,
          expressionReduction: expressionResult.reduction,
          soulUrgeSum: soulUrgeResult.sum,
          soulUrgeReduction: soulUrgeResult.reduction,
          personalitySum: personalityResult.sum,
          personalityReduction: personalityResult.reduction
        };
        
        // 获取相关解读
        const numberData = this.numberMeanings[expressionNumber] || this.numberMeanings['1'];
        
        // 设置结果
        this.results = {
          fullName: fullName,
          expressionNumber: expressionNumber,
          soulUrgeNumber: soulUrgeNumber,
          personalityNumber: personalityNumber,
          meaning: numberData.meaning,
          traits: numberData.traits,
          luckyColors: numberData.luckyColors,
          luckyGems: numberData.luckyGems
        };
        
        this.isLoading = false;
      }, 800);
    },
    
    // 计算表达数/命运数及详情
    calculateExpressionNumberWithDetails(name, system) {
      const map = system === 'pythagorean' ? this.pythagoreanMap : this.chaldeanMap;
      let sum = 0;
      let letterValues = [];
      
      for (let char of name.toUpperCase()) {
        if (/[A-Z]/.test(char) && map[char]) {
          letterValues.push({
            letter: char,
            value: map[char]
          });
          sum += map[char];
        }
      }
      
      const originalSum = sum;
      let reduction = '';
      let finalNumber = this.reduceToSingleDigit(sum, system);
      
      // 记录化简过程
      if (String(originalSum) !== finalNumber) {
        if (originalSum > 9 && (originalSum !== 11 && originalSum !== 22 && originalSum !== 33)) {
          reduction = String(originalSum).split('').join(' + ') + ' = ' + finalNumber;
        }
      }
      
      return {
        number: finalNumber,
        letterValues: letterValues,
        sum: String(originalSum),
        reduction: reduction
      };
    },
    
    // 计算灵魂渴望数及详情
    calculateSoulUrgeNumberWithDetails(name, system) {
      const map = system === 'pythagorean' ? this.pythagoreanMap : this.chaldeanMap;
      const vowels = ['A', 'E', 'I', 'O', 'U', 'Y'];
      let sum = 0;
      let letterValues = [];
      
      for (let char of name.toUpperCase()) {
        if (vowels.includes(char) && map[char]) {
          letterValues.push({
            letter: char,
            value: map[char]
          });
          sum += map[char];
        }
      }
      
      const originalSum = sum;
      let reduction = '';
      let finalNumber = this.reduceToSingleDigit(sum, system);
      
      // 记录化简过程
      if (String(originalSum) !== finalNumber) {
        if (originalSum > 9 && (originalSum !== 11 && originalSum !== 22 && originalSum !== 33)) {
          reduction = String(originalSum).split('').join(' + ') + ' = ' + finalNumber;
        }
      }
      
      return {
        number: finalNumber,
        letterValues: letterValues,
        sum: String(originalSum),
        reduction: reduction
      };
    },
    
    // 计算个性数及详情
    calculatePersonalityNumberWithDetails(name, system) {
      const map = system === 'pythagorean' ? this.pythagoreanMap : this.chaldeanMap;
      const vowels = ['A', 'E', 'I', 'O', 'U', 'Y'];
      let sum = 0;
      let letterValues = [];
      
      for (let char of name.toUpperCase()) {
        if (/[A-Z]/.test(char) && !vowels.includes(char) && map[char]) {
          letterValues.push({
            letter: char,
            value: map[char]
          });
          sum += map[char];
        }
      }
      
      const originalSum = sum;
      let reduction = '';
      let finalNumber = this.reduceToSingleDigit(sum, system);
      
      // 记录化简过程
      if (String(originalSum) !== finalNumber) {
        if (originalSum > 9 && (originalSum !== 11 && originalSum !== 22 && originalSum !== 33)) {
          reduction = String(originalSum).split('').join(' + ') + ' = ' + finalNumber;
        }
      }
      
      return {
        number: finalNumber,
        letterValues: letterValues,
        sum: String(originalSum),
        reduction: reduction
      };
    },
    
    // 兼容旧方法
    calculateExpressionNumber(name, system) {
      return this.calculateExpressionNumberWithDetails(name, system).number;
    },
    
    calculateSoulUrgeNumber(name, system) {
      return this.calculateSoulUrgeNumberWithDetails(name, system).number;
    },
    
    calculatePersonalityNumber(name, system) {
      return this.calculatePersonalityNumberWithDetails(name, system).number;
    },
    
    // 将数字缩减为个位数（但保留主数字11、22、33）
    reduceToSingleDigit(num, system) {
      // 迦勒底系统中9是神圣数字，不参与计算
      if (system === 'chaldean' && num === 9) return '9';
      
      // 检查是否是主数字
      const masterNumbers = ['11', '22', '33'];
      if (masterNumbers.includes(String(num))) return String(num);
      
      // 将数字减少到个位
      while (num > 9 && !masterNumbers.includes(String(num))) {
        num = String(num).split('').reduce((a, b) => a + parseInt(b, 10), 0);
      }
      
      return String(num);
    },
    // 获取颜色代码
    getColorCode(color) {
      return this.colorCodes[color] || '#cccccc';
    },
    
    // 获取宝石形状 - 更加适合每种宝石的真实形状
    getGemShape(gem) {
      const shapes = {
        // 红宝石家族
        'Ruby': 'oval',          // 红宝石通常是椭圆形切割
        'Garnet': 'round',       // 石榈石多为圆形
        
        // 黄色/橙色宝石
        'Amber': 'oval',         // 玉镶多为椭圆形或自然形状
        'Topaz': 'triangle',     // 黄玉常切割成三角形或其他多面形
        'Citrine': 'hexagon',     // 黄水晶常切割成六边形
        
        // 绿色宝石
        'Emerald': 'rectangle',  // 祖母绿常为方形或长方形切割
        'Jade': 'square',        // 玉石主要切割成方形
        
        // 蓝色宝石
        'Sapphire': 'oval',      // 蓝宝石切割成椭圆形
        'Aquamarine': 'oval',    // 海蓝宝石常为椭圆形
        'Lapis Lazuli': 'round', // 青金石常切成圆形或不规则形状
        'Turquoise': 'irregular', // 绯石常保持自然不规则形状
        
        // 紫色宝石
        'Amethyst': 'hexagon',    // 紫水晶常切割成六边形
        
        // 白色/透明宝石
        'Diamond': 'diamond',    // 钻石经典的明亮切割形状
        'Crystal': 'point',      // 水晶常有尖顶
        'Moonstone': 'round',    // 月光石常切成圆形
        'Pearl': 'round',        // 珍珠天然圆形
        'Opal': 'oval',          // 蛋白石常切成椭圆形
        
        // 其他宝石
        'Jasper': 'round',       // 碑碑石常切成圆形
        'Onyx': 'rectangle',     // 缙纹玛瑙常切成长方形
        'Rose Quartz': 'heart',  // 玉髓常切成心形
        'Clear Quartz': 'point'  // 水晶常有尖顶状结构
      };
      
      return shapes[gem] || 'round';
    },
    
    // 获取宝石颜色
    getGemColor(gem) {
      const colors = {
        'Ruby': '#e0115f',
        'Garnet': '#790004',
        'Amber': '#ffbf00',
        'Moonstone': '#f5f3f5',
        'Pearl': '#fdeef4',
        'Jade': '#00a86b',
        'Topaz': '#ffc87c',
        'Citrine': '#e4d00a',
        'Emerald': '#046307',
        'Sapphire': '#0f52ba',
        'Jasper': '#d0592a',
        'Aquamarine': '#7fffd4',
        'Turquoise': '#30d5c8',
        'Opal': '#a8c3bc',
        'Lapis Lazuli': '#26619c',
        'Amethyst': '#9966cc',
        'Diamond': '#b9f2ff',
        'Crystal': '#a7d8de',
        'Onyx': '#353839',
        'Rose Quartz': '#ffc0cb',
        'Clear Quartz': '#f8f8ff'
      };
      
      return colors[gem] || '#cccccc';
    },
    
    // 获取宝石图片
    getGemImage(gem) {
      // 使用正确的资源导入路径，让Vite正确处理资源
      try {
        // 使用动态导入语法，让Vite在构建时可以识别并打包这些图片
        return new URL(`../assets/images/gems/${gem}.png`, import.meta.url).href;
      } catch (e) {
        console.error(`Failed to load gem image for ${gem}:`, e);
        // 回退到相对路径，为了开发时调试
        return `/assets/images/gems/${gem}.png`;
      }
    },
    
    // 获取进度条颜色
    getProgressColor(type) {
      // 不同的数字类型使用不同的颜色
      const colors = {
        1: '#4a6bdf', // 表达数 - 蓝色
        2: '#b159c7', // 灵魂渴望数 - 紫色
        3: '#e60012'  // 个性数 - 红色
      };
      return colors[type] || '#4a6bdf';
    },
    
    // 获取分数评价
    getScoreCaption(number) {
      const captions = {
        '1': 'Foundational energy - Beginning of a cycle',
        '2': 'Cooperative energy - Partnership and harmony',
        '3': 'Creative energy - Self-expression and joy',
        '4': 'Practical energy - Stability and order',
        '5': 'Freedom energy - Change and adventure',
        '6': 'Nurturing energy - Responsibility and love',
        '7': 'Analytical energy - Wisdom and spirituality',
        '8': 'Power energy - Abundance and achievement',
        '9': 'Humanitarian energy - Compassion and completion',
        '11': 'Master intuitive energy - Inspiration and insight',
        '22': 'Master builder energy - Manifestation and vision',
        '33': 'Master teacher energy - Healing and enlightenment'
      };
      return captions[number] || 'Your unique numerical vibration';
    },
    
    // 获取特质的详细描述
    getTraitsDescription(number) {
      const descriptions = {
        '1': 'As a person with Expression Number 1, you are a born innovator and leader. Your personality is filled with confidence and independence, with a strong sense of original thinking and creativity. You dare to walk your own path, avoiding the crowd, and can always find unique solutions to difficult situations. Your intuition is sharp, you have strong initiative, and you are able to turn ideas into reality. In interpersonal relationships, you are usually the decision-maker and like to be in control.',
        '2': 'As a person with Expression Number 2, you possess a strong sense of harmony and diplomatic skill. You are a born mediator and peacemaker, able to see different perspectives in disputes and find the balance point. You are sensitive, compassionate, and deeply understand others\'s feelings. You play an important role in teams, are good listeners, and create harmonious working environments. Your patience and gentleness make you valued in relationships, especially in situations requiring careful care.',
        '3': 'As a person with Expression Number 3, you are a natural expresser and communication master. You possess irresistible charm and expressive ability, easily communicating your thoughts and feelings through words, writing, or artistic forms. You are full of creativity and imagination, always seeing the world from a unique perspective. You are optimistic, love life, and are good at seeing hope in difficult moments. Your sense of humor and social skills make you the center of attention in any occasion.',
        '4': 'As a person with Expression Number 4, you are a practitioner and builder, known for reliability and firmness. You have a strong sense of responsibility and mission, are meticulous in what you do, and focus on details and precision. Your organizational skills are excellent, adept at creating systems and structures to make work more efficient. You are honest and trustworthy, always keeping your word and never backing down from commitments. While sometimes appearing stubborn or conservative, this is precisely a manifestation of your adherence to principles and values.',
        '5': 'As a person with Expression Number 5, you are full of energy and adventure, eager to experience all possibilities in life. You are naturally curious, flexible in thinking, and able to quickly adapt to changing environments and situations. You value freedom and independence, dislike being constrained, and are always looking for new challenges and stimulation. You have excellent communication skills and can connect with people from various backgrounds. Your versatility and adaptability make you excel in changing environments.',
        '6': 'As a person with Expression Number 6, you are a natural nurturer and harmonizer. You are highly responsible and always willing to provide help and support to others. You value family and community, willing to work for harmonious relationships. You have a strong sense of justice, often speaking out for vulnerable groups. You pursue balance and aesthetics, possibly having special talent in art and design. You are warm, caring, and willing to take responsibility, making you a pillar for friends and family.',
        '7': 'As a person with Expression Number 7, you are a thinker and analyst with deep philosophical thinking and insight. You value knowledge and wisdom, constantly seeking truth and deeper understanding. You need time alone to think and introspect, which is crucial for your mental health. You don\'t easily believe surface phenomena, always looking for the truth hidden behind. You might have a special interest in mysticism or spiritual areas, and sometimes even possess extraordinary intuitive abilities.',
        '8': 'As a person with Expression Number 8, you naturally possess a business mind and organizational leadership abilities. You understand how the real world works and can effectively navigate materials and resources. You have great goals and ambitions, not afraid of hard work to achieve them. You focus on efficiency and practical results, excelling in management and decision-making. You have a sense of authority and persuasiveness, able to influence and inspire others. While pursuing success and wealth, you also understand the importance of fair exchange.',
        '9': 'As a person with Expression Number 9, you are a philanthropist and idealist with a broad mind and global vision. You are compassionate and generous, eager to make a positive contribution to the world. You are gifted in art and creative expression, able to touch others\'s emotions. You usually have a strong sense of morality and responsibility, fighting for just causes. Your inclusiveness and tolerance allow you to transcend cultural and background differences, seeing what humanity has in common.',
        '11': 'As a person with Expression Number 11, you possess extremely high spiritual awakening and intuitive abilities. You are a natural recipient and transmitter of inspiration, able to connect the bridge between reality and the beyond. You think acutely, have rich imagination, and have a special understanding of art and spiritual realms. You may have prophet-like insight in certain aspects, able to foresee future developments. You have profound compassion for the human condition, hoping to contribute to raising collective consciousness in your own way.',
        '22': 'As a person with Expression Number 22, you are a great builder and practitioner with the extraordinary ability to transform grand visions into reality. You combine idealism and pragmatism, able to realize spiritual goals in the material world. Your organizational ability and leadership skills enable you to create lasting structures and systems that benefit many. You are diligent, firm, and unafraid of challenges brought by large-scale projects. Your influence often extends beyond the personal level to the community or even global scale.',
        '33': 'As a person with Expression Number 33, you are a born teacher and healer with a sacred mission to enlighten and uplift others. You have selfless love and dedication, willing to give everything for others\' growth and development. Your wisdom and empathy allow you to guide others in a gentle yet powerful way. You can usually see the inner light and potential in each person, helping them recognize and maximize their abilities. Your influence is typically achieved through deep personal connections.'
      };
      
      return descriptions[number] || 'Your name contains unique energy vibrations that are reflected in your core traits. These traits shape your personality and influence how you interact with the world and how you are perceived by others. By understanding these core traits, you can better leverage your strengths, recognize potential challenges, and achieve greater success and fulfillment in life and career.';
    },
    // 进度条样式
    getProgressStyle(type) {
      return {
        backgroundColor: this.getProgressColor(type),
        borderRadius: '6px',
        height: '10px',
        width: '100%'
      };
    }
  }
};
</script>

<style scoped>
/* 计算详情样式 */
.calculation-section {
  background-color: #f9f9f9;
  border-radius: 12px;
  padding: 25px;
  margin-top: 30px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.calculation-details {
  display: flex;
  flex-direction: column;
  gap: 25px;
}

.calculation-box {
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
}

.calculation-box h5 {
  font-size: 1.2rem;
  margin-bottom: 15px;
  color: #333;
  font-weight: 600;
  border-bottom: 1px solid #f0f0f0;
  padding-bottom: 8px;
}

.letter-values {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 15px;
}

.letter-value {
  font-size: 1.1rem;
  padding: 8px 15px;
  background-color: #f5f5f5;
  border-radius: 8px;
  color: #333;
  font-weight: 500;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.vowel-value {
  background-color: #b159c726;
  border: 1px solid #b159c7;
}

.consonant-value {
  background-color: #e6001226;
  border: 1px solid #e60012;
}

.calculation-formula {
  font-size: 1.2rem;
  margin-top: 12px;
  color: #333;
  font-weight: 500;
  padding: 10px 15px;
  background-color: #f5f5f5;
  border-radius: 8px;
  display: inline-block;
}
.numerology-page {
  padding: 20px 0 100px;
  min-height: 100vh;
  background-color: #f8f9fa;
}

.content-container {
  width: 80%;
  margin: 0 auto;
}

.page-title {
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 40px;
  margin-top: 70px;
  text-align: center;
}

.intro-text {
  width: 80%;
  max-width: 900px;
  margin: 0 auto 36px;
  text-align: left;
  color: #4a4a4a;
  line-height: 1.6;
}

.intro-text p {
  margin-bottom: 14px;
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
  padding: 30px;
  margin: 0 0 30px;
  width: 100%;
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
  border-color: #3f51b5;
}

.input-wrapper {
  position: relative;
  width: 100%;
}

.input-info {
  margin-top: 8px;
}

.input-error {
  color: #d32f2f;
  font-size: 0.9rem;
  padding: 5px 10px;
  background-color: rgba(211, 47, 47, 0.08);
  border-radius: 4px;
  display: flex;
  align-items: center;
}

.error-icon {
  margin-right: 6px;
}

.input-tip {
  color: #555;
  font-size: 0.85rem;
  margin-top: 6px;
  display: flex;
  align-items: center;
}

.tip-icon {
  margin-right: 6px;
}

.system-selector {
  margin-bottom: 25px;
}

.system-selector label {
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
  color: #555;
}

.radio-group {
  display: flex;
  gap: 20px;
  margin-top: 10px;
}

.radio-label {
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
  position: relative;
}

.radio-label input[type="radio"] {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.radio-text {
  position: relative;
  padding-left: 30px;
  font-size: 1rem;
}

.radio-text:before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 18px;
  height: 18px;
  border: 2px solid #ccc;
  border-radius: 50%;
  background-color: white;
  transition: all 0.2s ease;
}

.radio-label input[type="radio"]:checked + .radio-text:before {
  border-color: #e60012;
  background-color: white;
}

.radio-text:after {
  content: '';
  position: absolute;
  left: 5px;
  top: 50%;
  transform: translateY(-50%);
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #e60012;
  opacity: 0;
  transition: all 0.2s ease;
}

.radio-label input[type="radio"]:checked + .radio-text:after {
  opacity: 1;
}

.submit-button {
  background-color: #e60012; /* 红色按钮 */
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
  background-color: #c0000f; /* 深一点的红色 */
}

.results-section {
  margin-top: 30px;
  margin: 30px 0 0;
  width: 100%;
}

.results-section h2 {
  font-size: 1.8rem;
  color: #333;
  margin-bottom: 25px;
}

.numerology-card {
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  overflow: hidden;
}

.numerology-header {
  background-color: #3f51b5;
  background: linear-gradient(145deg, #4a6bdf 0%, #3f51b5 100%);
  color: white;
  padding: 25px;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  position: relative;
}

.numerology-icon {
  margin-right: 20px;
}

.number-circle {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: white;
  color: #3f51b5;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  font-weight: bold;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

.numerology-name {
  flex: 0 0 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.numerology-name h3 {
  font-size: 1.5rem;
  color: white;
  margin: 0 0 5px 0;
}

.system-tag {
  display: inline-block;
  border-radius: 4px;
  font-size: 0.8rem;
  color: white;
  background-color: rgba(255, 255, 255, 0.2);
  padding: 2px 8px;
  font-weight: 500;
  width: fit-content;
}

.lucky-section-inline {
  flex: 1;
  display: flex;
  gap: 30px;
  margin-left: auto;
}

.lucky-column-inline {
  flex: 1;
}

.numerology-details {
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

.numbers-progress-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
}

.number-progress-item {
  width: 100%;
}

.number-progress-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.number-progress-label {
  font-size: 1.1rem;
  font-weight: 500;
  color: #333;
}

.score-display {
  display: flex;
  align-items: baseline;
}

.score-value {
  font-size: 1.6rem;
  font-weight: 700;
  color: #333;
}

.score-total {
  font-size: 1rem;
  color: #888;
  margin-left: 2px;
}

.score-caption {
  margin-top: 8px;
  font-size: 0.9rem;
  color: #555;
  font-style: italic;
}

.number-progress-bar-wrapper {
  display: flex;
  align-items: center;
  gap: 15px;
}

.number-progress-bar-container {
  flex-grow: 1;
  height: 40px;
  background-color: #f0f0f0;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
  position: relative;
}

.number-progress-bar {
  height: 100%;
  transition: width 1s ease-in-out;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 20px;
  min-width: 40px;
}

.number-progress-value {
  font-size: 2.5rem;
  font-weight: 700;
  color: #333;
  min-width: 40px;
  text-align: right;
  line-height: 1;
}

.number-progress-value-overlay {
  color: white;
  font-size: 1.6rem;
  font-weight: 700;
  position: relative;
  z-index: 2;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
}

/* 保留旧样式以兼容 */
.numbers-grid {
  display: none; /* 隐藏旧的布局 */
}

.number-box {
  display: none; /* 隐藏旧的布局 */
}

.number-value {
  font-size: 2rem;
  font-weight: bold;
  color: #3f51b5;
  margin-bottom: 8px;
}

.number-label {
  font-size: 0.9rem;
  color: #666;
}

.meaning-text {
  line-height: 1.6;
  color: #333;
  font-size: 1.1rem;
}

.traits-expanded {
  margin-top: 15px;
}

.traits-description {
  background-color: #f8f8f8;
  border-radius: 8px;
  padding: 15px 20px;
  margin-bottom: 20px;
  font-size: 1.05rem;
  line-height: 1.6;
  color: #333;
  border-left: 4px solid #e60012;
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
  background-color: #3f51b5;
  color: white;
  transform: translateY(-3px);
  box-shadow: 0 5px 10px rgba(63, 81, 181, 0.2);
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

.lucky-colors {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  margin-top: 10px;
}

.color-block {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60px;
  margin: 0 8px;
}

.color-box {
  width: 40px;
  height: 40px;
  border-radius: 6px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
  border: 1px solid rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.color-box:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.color-name-overlay {
  color: white;
  font-weight: 600;
  font-size: 1rem;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.color-box:hover .color-name-overlay {
  opacity: 1;
}

.color-name {
  margin-top: 6px;
  color: #333;
  font-size: 0.8rem;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}

.gem-list {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  margin-top: 10px;
}

.gem-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60px;
  margin: 0 8px 8px;
}

.gem-image-container {
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-bottom: 6px;
  perspective: 800px;
}

.gem-image {
  width: 45px;
  height: 45px;
  object-fit: contain;
  transition: all 0.5s ease;
  filter: drop-shadow(0 3px 6px rgba(0, 0, 0, 0.3));
}

.gem-image:hover {
  transform: translateY(-5px) rotate(5deg) scale(1.1);
  filter: drop-shadow(0 12px 20px rgba(0, 0, 0, 0.4)) brightness(1.1);
}

.gem-name {
  font-size: 0.8rem;
  font-weight: 500;
  color: #333;
  text-align: center;
  margin-top: 5px;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.numerology-guide-section {
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
  background-color: #3f51b5;
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
  background-color: #3f51b5;
  border-radius: 2px;
}

.systems-comparison {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 20px;
}

.system-item {
  flex: 1;
  min-width: 45%;
  padding: 20px;
  border-radius: 10px;
  color: white;
}

.system-pythagorean {
  background: linear-gradient(135deg, #3f51b5 0%, #7986cb 100%);
}

.system-chaldean {
  background: linear-gradient(135deg, #9c27b0 0%, #ce93d8 100%);
}

.system-item h4 {
  margin: 0 0 10px 0;
  font-size: 1.2rem;
  color: white;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  padding-bottom: 10px;
}

.system-item p {
  margin: 0;
  line-height: 1.6;
}

.number-explanations {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 20px;
}

.number-explanation {
  padding: 15px;
  background-color: #f5f5f5;
  border-radius: 8px;
  border-left: 4px solid #3f51b5;
}

.number-explanation h4 {
  margin: 0 0 8px 0;
  font-size: 1.1rem;
  color: #333;
  border-bottom: none;
}

.number-explanation p {
  margin: 0;
  color: #555;
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

@media (max-width: 768px) {
  .page-title {
    font-size: 2rem;
  }
  
  .numerology-page {
    padding: 70px 0;
  }
  
  .numerology-header {
    flex-direction: column;
    text-align: center;
  }
  
  .numerology-icon {
    margin-right: 0;
    margin-bottom: 15px;
  }
  
  .numerology-name {
    flex: 1 1 100%;
    margin-bottom: 15px;
  }
  
  .lucky-section-inline {
    flex-direction: column;
    margin-left: 0;
    width: 100%;
    margin-top: 15px;
  }
  
  .lucky-column-inline {
    margin-bottom: 15px;
  }
  
  .system-tag {
    margin-top: 5px;
  }
  
  .lucky-section {
    flex-direction: column;
  }
  
  .systems-comparison {
    flex-direction: column;
  }
  
  .block-title {
    font-size: 1.3rem;
  }
  
  .guide-title {
    font-size: 1.6rem;
  }
  
  .content-container {
    width: 90%;
  }
  
  .intro-text {
    width: min(90%, 640px);
    padding: 0 12px;
  }
}

@media (max-width: 430px) {
  .numerology-page > .container {
    padding: 0 !important;
    width: 100%;
  }

  .content-container,
  .form-section,
  .results-section,
  :deep(.usage-guide) {
    width: min(95vw, 100%) !important;
    max-width: min(95vw, 100%) !important;
    margin-left: auto !important;
    margin-right: auto !important;
  }

  .form-section {
    padding: 18px 14px;
    margin-bottom: 24px;
  }

  .intro-text {
    width: min(95vw, 100%);
    text-align: center;
    padding: 0;
    margin: 0 auto 28px;
  }

  .intro-text p {
    text-align: center;
    font-size: 0.95rem;
  }

  .page-title {
    width: min(95vw, 100%);
    margin-left: auto;
    margin-right: auto;
  }
}

/* 幸运色和幸运石内联样式 */
.lucky-title-inline {
  color: white;
  font-size: 0.85rem;
  font-weight: 500;
  margin: 0 0 10px 0;
  display: flex;
  align-items: center;
}

.lucky-title-inline:before {
  content: '✨';
  margin-right: 5px;
  color: #ffeb3b;
}

/* 幸运色样式 */
.lucky-colors-inline {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.color-block-inline {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 4px;
}

.color-box-inline {
  width: 22px;
  height: 22px;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: transform 0.2s;
}

.color-box-inline:hover {
  transform: scale(1.2);
}

.color-name-inline {
  font-size: 0.7rem;
  color: white;
  margin-top: 4px;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
}

/* 幸运石样式 */
.gems-inline {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.gem-item-inline {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 4px;
}

.gem-image-container-inline {
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s;
}

.gem-image-container-inline:hover {
  transform: scale(1.2);
}

.gem-image-inline {
  width: 22px;
  height: 22px;
  object-fit: contain;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
}

.gem-name-inline {
  font-size: 0.7rem;
  color: white;
  margin-top: 4px;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
}
</style>
