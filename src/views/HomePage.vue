<template>
  <div class="home-page">
    <!-- Hero Section -->
    <section class="hero">
      <div class="container">
        <div class="hero-content">
          <div class="hero-image">
            <img src="@/assets/images/name.png" alt="ChineseName Logo" />
          </div>
          <div class="hero-text">
            <h1>Free Chinese Name Generator & Translator: Convert English to Chinese</h1>
            <h2 class="hero-subtitle">Translate Your Name to Chinese | Find Your Perfect Chinese Name</h2>
            <h2 class="hero-subtitle">中文起名 | 英文名翻译</h2>
            <p class="subtitle">{{ $t('home.hero.subtitle') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 个性化取名服务 -->
    <section class="features features-alt">
      <div class="container">
        <h2 class="section-title">{{ $t('home.categories.namingService') }}</h2>
        <div class="feature-grid naming-services-grid">
          <router-link to="/custom" class="feature-card-link">
            <div class="feature-card">
              <div class="icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                </svg>
              </div>
              <h3>{{ $t('home.features.namingService.custom.title') }}</h3>
              <p>{{ $t('home.features.namingService.custom.description') }}</p>
              <div class="feature-link">
                <img src="@/assets/images/ming.png" alt="ming" class="ming-icon" /> →
              </div>
            </div>
          </router-link>
          <!-- 名字翻译 -->
          <router-link to="/translate" class="feature-card-link">
            <div class="feature-card">
              <div class="icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                </svg>
              </div>
              <h3>{{ $t('home.features.translateName.title') }}</h3>
              <p>{{ $t('home.features.translateName.description') }}</p>
              <div class="feature-link">
                <img src="@/assets/images/ming.png" alt="ming" class="ming-icon" /> →
              </div>
            </div>
          </router-link>

          <!-- 生肖计算器 -->
          <router-link to="/zodiac-calculator" class="feature-card-link">
            <div class="feature-card">
              <div class="icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3>{{ $t('home.features.zodiacCalculator.title') }}</h3>
              <p>{{ $t('home.features.zodiacCalculator.description') }}</p>
              <div class="feature-link">
                <img src="@/assets/images/ming.png" alt="ming" class="ming-icon" /> →
              </div>
            </div>
          </router-link>
          
          <!-- 星座计算器 -->
          <router-link to="/constellation" class="feature-card-link">
            <div class="feature-card">
              <div class="icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
              <h3>{{ $t('home.features.constellation.title') }}</h3>
              <p>{{ $t('home.features.constellation.description') }}</p>
              <div class="feature-link">
                <img src="@/assets/images/ming.png" alt="ming" class="ming-icon" /> →
              </div>
            </div>
          </router-link>
          
          <!-- 姓名转拼音 -->
          <router-link to="/name-to-pinyin" class="feature-card-link">
            <div class="feature-card">
              <div class="icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
                </svg>
              </div>
              <h3>{{ $t('home.features.nameToPinyin.title') }}</h3>
              <p>{{ $t('home.features.nameToPinyin.description') }}</p>
              <div class="feature-link">
                <img src="@/assets/images/ming.png" alt="ming" class="ming-icon" /> →
              </div>
            </div>
          </router-link>
          
          <!-- 中文名转英文名 -->
          <router-link to="/chinese-to-english" class="feature-card-link">
            <div class="feature-card">
              <div class="icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                </svg>
              </div>
              <h3>Chinese to English Name</h3>
              <p>Convert your Chinese name to English with accurate pronunciation and cultural meaning</p>
              <div class="feature-link">
                <img src="@/assets/images/ming.png" alt="ming" class="ming-icon" /> →
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </section>

    <!-- 新增SEO优化:文本内容丰富的部分 -->
    <section class="about-chinese-names">
      <div class="container">
        <h2 class="section-title">About Chinese Names and Name Translation</h2>
        <div class="introduction-text">
          <p>Chinese names carry profound cultural significance, combining phonetic beauty with deep symbolic meanings. Unlike Western naming traditions, Chinese names traditionally consist of a family surname followed by a given name that often reflects aspirations, virtues, or natural elements.</p>
        </div>
        
        <div class="two-column-content">
          <div class="column">
            <div class="collapsible-section">
              <h3 class="collapsible-title" @click="toggleSection('nameStructure')">
                Understanding Chinese Name Structure
                <span class="toggle-icon">{{ isExpanded.nameStructure ? '−' : '+' }}</span>
              </h3>
              <div class="collapsible-content" v-show="isExpanded.nameStructure">
                <p>Most Chinese names follow a structure of a single-character surname followed by a one or two-character given name. With over 100 common surnames like Li (李), Wang (王), Zhang (张), and Chen (陈), these family names are passed down through generations. The given name, carefully selected by parents or family elders, carries hopes and wishes for the child's future.</p>
              </div>
            </div>
            
            <div class="collapsible-section">
              <h3 class="collapsible-title" @click="toggleSection('characterMeaning')">
                The Significance of Chinese Characters in Names
                <span class="toggle-icon">{{ isExpanded.characterMeaning ? '−' : '+' }}</span>
              </h3>
              <div class="collapsible-content" v-show="isExpanded.characterMeaning">
                <p>Each Chinese character used in names has its own meaning, pronunciation, and written form. Parents often consider factors such as:</p>
                <ul>
                  <li><strong>Character meaning</strong> - Characters representing virtues (wisdom, kindness), natural elements (mountain, water), or desirable qualities are popular choices.</li>
                  <li><strong>Five Elements (Wu Xing)</strong> - Traditional naming considers the balance of wood, fire, earth, metal, and water elements.</li>
                  <li><strong>Sound harmony</strong> - How the name sounds when pronounced in Chinese, including tonal aspects.</li>
                  <li><strong>Stroke count</strong> - The number of strokes in writing each character can have numerological significance.</li>
                  <li><strong>Visual balance</strong> - The aesthetic appearance of the written characters together.</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div class="column">
            <div class="collapsible-section">
              <h3 class="collapsible-title" @click="toggleSection('nameTranslation')">
                Translating English Names to Chinese
                <span class="toggle-icon">{{ isExpanded.nameTranslation ? '−' : '+' }}</span>
              </h3>
              <div class="collapsible-content" v-show="isExpanded.nameTranslation">
                <p>When translating English or other Western names into Chinese, several approaches are used:</p>
                <ul>
                  <li><strong>Phonetic translation</strong> - Choosing Chinese characters that sound similar to the original name.</li>
                  <li><strong>Semantic translation</strong> - Selecting characters based on the meaning of the original name.</li>
                  <li><strong>Combined approach</strong> - Using characters that both sound similar and carry meaningful symbolism.</li>
                </ul>
              </div>
            </div>
            
            <div class="collapsible-section">
              <h3 class="collapsible-title" @click="toggleSection('namingService')">
                Our Chinese Name Translation Services
                <span class="toggle-icon">{{ isExpanded.namingService ? '−' : '+' }}</span>
              </h3>
              <div class="collapsible-content" v-show="isExpanded.namingService">
                <p>Our Chinese name translation services provide personalized options that respect both linguistic and cultural traditions. Whether you're looking for a Chinese name for business, travel, or personal interest, our tools help you find a name that resonates with Chinese cultural sensibilities while connecting to your identity.</p>
                <p>Explore our comprehensive resources on Chinese naming traditions, surname meanings, character symbolism, and pronunciation guides to better understand the rich cultural heritage behind Chinese names.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div class="see-more-wrapper">
          <button class="see-more-btn" @click="toggleAllSections">
            {{ allSectionsExpanded ? 'Show Less' : 'Show More' }}
          </button>
        </div>
      </div>
    </section>

    <!-- 知识库 -->
    <section class="features">
      <div class="container">
        <h2 class="section-title">{{ $t('home.categories.knowledge') }}</h2>
        <div class="feature-grid">
          <router-link to="/knowledge" class="feature-card-link">
            <div class="feature-card">
              <div class="icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3>{{ $t('home.features.knowledge.title') }}</h3>
              <p>{{ $t('home.features.knowledge.description') }}</p>
              <div class="feature-link">
                <img src="@/assets/images/ming.png" alt="ming" class="ming-icon" /> →
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </section>

    <!-- 新增SEO优化: FAQ部分 -->
    <section class="faq-section">
      <div class="container">
        <h2 class="section-title">Frequently Asked Questions About Chinese Names</h2>
        
        <div class="faq-columns">
          <div class="faq-column">
            <div class="faq-item" :class="{'faq-expanded': isExpanded.faq1}" @click="toggleFaq('faq1')">
              <h3 class="faq-question">
                <span class="faq-q-marker">Q:</span> 
                How do I choose a Chinese name that sounds like my English name?
                <span class="faq-toggle">{{ isExpanded.faq1 ? '−' : '+' }}</span>
              </h3>
              <div class="faq-answer" v-show="isExpanded.faq1">
                <p><span class="faq-a-marker">A:</span> To choose a Chinese name that sounds similar to your English name, our translator considers Chinese characters with similar phonetics while ensuring the characters have positive meanings. For example, the name "Michael" might be translated as "麦克" (Mài Kè), which sounds similar while using characters with good connotations. Our translation tools analyze both sound and meaning to provide you with appropriate options.</p>
              </div>
            </div>
            
            <div class="faq-item" :class="{'faq-expanded': isExpanded.faq2}" @click="toggleFaq('faq2')">
              <h3 class="faq-question">
                <span class="faq-q-marker">Q:</span>
                What's the difference between a phonetic and meaningful Chinese name translation?
                <span class="faq-toggle">{{ isExpanded.faq2 ? '−' : '+' }}</span>
              </h3>
              <div class="faq-answer" v-show="isExpanded.faq2">
                <p><span class="faq-a-marker">A:</span> A phonetic translation focuses primarily on matching the sounds of your original name using Chinese characters, prioritizing pronunciation similarity. A meaningful translation, on the other hand, selects characters based on their symbolic significance and cultural relevance, sometimes at the expense of exact pronunciation. The best Chinese names often balance both approaches, finding characters that sound similar to your original name while also conveying positive meanings and cultural resonance.</p>
              </div>
            </div>
            
            <div class="faq-item" :class="{'faq-expanded': isExpanded.faq3}" @click="toggleFaq('faq3')">
              <h3 class="faq-question">
                <span class="faq-q-marker">Q:</span>
                Is it better to have a one-character or two-character given name in Chinese?
                <span class="faq-toggle">{{ isExpanded.faq3 ? '−' : '+' }}</span>
              </h3>
              <div class="faq-answer" v-show="isExpanded.faq3">
                <p><span class="faq-a-marker">A:</span> Both one-character and two-character given names are common in Chinese culture, with two-character names being more prevalent in modern times. Single-character names can be more distinctive and straightforward, while two-character names offer more flexibility for creating balance in meaning, sound, and five-element theory. Our name generator provides both options, allowing you to choose based on your preference and cultural considerations.</p>
              </div>
            </div>
          </div>
          
          <div class="faq-column">
            <div class="faq-item" :class="{'faq-expanded': isExpanded.faq4}" @click="toggleFaq('faq4')">
              <h3 class="faq-question">
                <span class="faq-q-marker">Q:</span>
                How important is the meaning of characters in a Chinese name?
                <span class="faq-toggle">{{ isExpanded.faq4 ? '−' : '+' }}</span>
              </h3>
              <div class="faq-answer" v-show="isExpanded.faq4">
                <p><span class="faq-a-marker">A:</span> The meaning of characters is extremely important in Chinese naming culture. Unlike in some Western cultures where names are chosen primarily for their sound or family heritage, Chinese names are selected with careful consideration of the characters' meanings, which often express parents' hopes and wishes for their child. Characters with positive connotations related to virtues, strength, beauty, intelligence, or success are commonly chosen. This is why our translation service emphasizes both phonetic similarity and meaningful character selection.</p>
              </div>
            </div>
            
            <div class="faq-item" :class="{'faq-expanded': isExpanded.faq5}" @click="toggleFaq('faq5')">
              <h3 class="faq-question">
                <span class="faq-q-marker">Q:</span>
                Can I use the same Chinese name for both personal and business purposes?
                <span class="faq-toggle">{{ isExpanded.faq5 ? '−' : '+' }}</span>
              </h3>
              <div class="faq-answer" v-show="isExpanded.faq5">
                <p><span class="faq-a-marker">A:</span> You can use the same Chinese name for both personal and business contexts, but it's worth considering whether different names might be advantageous. Business names in Chinese might prioritize professional qualities or industry relevance, while personal names might focus more on individual characteristics. Many foreigners doing business in China choose Chinese names that reflect professionalism while maintaining personal identity. Our service can help you generate appropriate options for both contexts.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div class="see-more-wrapper">
          <button class="see-more-btn" @click="toggleAllFaqs">
            {{ allFaqsExpanded ? 'Show Less FAQs' : 'Show All FAQs' }}
          </button>
        </div>
      </div>
    </section>

    <!-- 咨询服务 -->
    <div class="service-section">
      <h2>Our Chinese Name Services</h2>
      <div class="services-grid">
        <div class="service-card">
          <h3>English to Chinese Name Translation</h3>
          <p>Translate your English name to Chinese with accurate pronunciation and cultural meaning.</p>
          <router-link to="/translate" class="service-link">Translate Your Name</router-link>
        </div>
        <div class="service-card">
          <h3>Chinese to English Name Translation</h3>
          <p>Convert Chinese names to English with proper meaning and pronunciation guides.</p>
          <router-link to="/chinese-to-english" class="service-link">Translate Chinese Names</router-link>
        </div>
        <div class="service-card">
          <h3>Chinese Name Generator</h3>
          <p>Create authentic Chinese names based on your preferences and cultural meanings.</p>
          <router-link to="/name-generator" class="service-link">Generate Chinese Names</router-link>
        </div>
        <div class="service-card">
          <h3>Custom Chinese Name Creation</h3>
          <p>Get a personalized Chinese name tailored to your specific requirements.</p>
          <router-link to="/custom" class="service-link">Create Custom Name</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import 'ant-design-vue/dist/antd.css';

export default {
  name: 'HomePage',
  
  data() {
    return {
      isExpanded: {
        nameStructure: false,
        characterMeaning: false,
        nameTranslation: false,
        namingService: false,
        faq1: false,
        faq2: false,
        faq3: false,
        faq4: false,
        faq5: false
      }
    };
  },
  
  computed: {
    allSectionsExpanded() {
      return ['nameStructure', 'characterMeaning', 'nameTranslation', 'namingService']
        .every(section => this.isExpanded[section] === true);
    },
    
    allFaqsExpanded() {
      return ['faq1', 'faq2', 'faq3', 'faq4', 'faq5']
        .every(faq => this.isExpanded[faq] === true);
    }
  },
  
  methods: {
    toggleSection(section) {
      this.isExpanded[section] = !this.isExpanded[section];
    },
    
    toggleAllSections() {
      const newValue = !this.allSectionsExpanded;
      ['nameStructure', 'characterMeaning', 'nameTranslation', 'namingService']
        .forEach(key => {
          this.isExpanded[key] = newValue;
        });
    },
    
    toggleFaq(faq) {
      this.isExpanded[faq] = !this.isExpanded[faq];
    },
    
    toggleAllFaqs() {
      const newValue = !this.allFaqsExpanded;
      ['faq1', 'faq2', 'faq3', 'faq4', 'faq5']
        .forEach(key => {
          this.isExpanded[key] = newValue;
        });
    },
    
    // 添加JSON-LD结构化数据
    addJsonLdScript() {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How do I choose a Chinese name that sounds like my English name?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "To choose a Chinese name that sounds similar to your English name, our translator considers Chinese characters with similar phonetics while ensuring the characters have positive meanings. For example, the name 'Michael' might be translated as '麦克' (Mài Kè), which sounds similar while using characters with good connotations. Our translation tools analyze both sound and meaning to provide you with appropriate options."
            }
          },
          {
            "@type": "Question",
            "name": "What's the difference between a phonetic and meaningful Chinese name translation?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A phonetic translation focuses primarily on matching the sounds of your original name using Chinese characters, prioritizing pronunciation similarity. A meaningful translation, on the other hand, selects characters based on their symbolic significance and cultural relevance, sometimes at the expense of exact pronunciation. The best Chinese names often balance both approaches, finding characters that sound similar to your original name while also conveying positive meanings and cultural resonance."
            }
          },
          {
            "@type": "Question",
            "name": "Is it better to have a one-character or two-character given name in Chinese?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Both one-character and two-character given names are common in Chinese culture, with two-character names being more prevalent in modern times. Single-character names can be more distinctive and straightforward, while two-character names offer more flexibility for creating balance in meaning, sound, and five-element theory. Our name generator provides both options, allowing you to choose based on your preference and cultural considerations."
            }
          },
          {
            "@type": "Question",
            "name": "How important is the meaning of characters in a Chinese name?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The meaning of characters is extremely important in Chinese naming culture. Unlike in some Western cultures where names are chosen primarily for their sound or family heritage, Chinese names are selected with careful consideration of the characters' meanings, which often express parents' hopes and wishes for their child. Characters with positive connotations related to virtues, strength, beauty, intelligence, or success are commonly chosen. This is why our translation service emphasizes both phonetic similarity and meaningful character selection."
            }
          },
          {
            "@type": "Question",
            "name": "Can I use the same Chinese name for both personal and business purposes?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You can use the same Chinese name for both personal and business contexts, but it's worth considering whether different names might be advantageous. Business names in Chinese might prioritize professional qualities or industry relevance, while personal names might focus more on individual characteristics. Many foreigners doing business in China choose Chinese names that reflect professionalism while maintaining personal identity. Our service can help you generate appropriate options for both contexts."
            }
          }
        ]
      });
      document.head.appendChild(script);
    }
  },
  
  // 添加FAQ结构化数据
  mounted() {
    this.addJsonLdScript();
  }
}
</script>

<style scoped>
.home-page {
  padding-top: 0;
  font-family: 'Noto Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
}

.hero {
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 0;
  min-height: 280px;
  margin-top: 20px;
  position: relative;
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 30%;
  background: linear-gradient(135deg, rgba(255,240,240,0.6) 0%, rgba(255,255,255,0) 100%);
  z-index: 0;
}

.hero .container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 40px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
}

.hero-content {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 5%;
  width: 100%;
}

.hero-image {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.hero-image::after {
  content: '';
  position: absolute;
  width: 240px;
  height: 240px;
  background: rgba(200, 50, 50, 0.07);
  border-radius: 50%;
  z-index: -1;
}

.hero-image img {
  display: block;
  width: 300px;
  height: auto;
  filter: drop-shadow(0 8px 16px rgba(0,0,0,0.12));
}

.hero-text {
  flex: 1 1 auto;
  max-width: 900px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.hero h1 {
  font-size: 2.5rem;
  color: #222;
  margin-top: 0;
  margin-bottom: 15px;
  line-height: 1.3;
  font-weight: 700;
}

.hero .subtitle {
  font-size: 1.3rem;
  color: #555;
  margin-top: 0;
  margin-bottom: 0;
  line-height: 1.5;
}

.features {
  padding: 70px 0;
  background-color: #fff;
  position: relative;
}

.features-alt {
  background-color: #f8f9fa;
  position: relative;
  padding: 80px 0;
  margin-top: 0;
}

.features::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,0.09), rgba(0,0,0,0));
}

.features .container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 40px;
}

.section-title {
  font-size: 2.4rem;
  color: #222;
  margin-bottom: 60px;
  text-align: center;
  position: relative;
  font-weight: 700;
}

.section-title::after {
  content: '';
  display: block;
  width: 60px;
  height: 3px;
  background-color: #d10a11;
  margin: 20px auto 0;
  border-radius: 2px;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 35px;
  margin-bottom: 40px;
}

.feature-card-link {
  display: block;
  text-decoration: none;
  color: inherit;
  transition: transform 0.3s;
}

.feature-card-link:hover {
  transform: translateY(-7px);
}

.feature-card {
  background-color: white;
  border-radius: 16px;
  padding: 40px;
  transition: all 0.3s ease;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  height: auto;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(0,0,0,0.06);
  position: relative;
  z-index: 1;
  overflow: hidden;
}

.features-alt .feature-card {
  background-color: white;
  border: 1px solid rgba(0,0,0,0.06);
}

.feature-card:hover {
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
  border-color: rgba(0,0,0,0.08);
}

.feature-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 5px;
  height: 100%;
  background: linear-gradient(to bottom, #d10a11, #f05252);
  z-index: 2;
  border-top-left-radius: 16px;
  border-bottom-left-radius: 16px;
}

.feature-card .icon {
  width: 65px;
  height: 65px;
  background-color: rgba(209, 10, 17, 0.08);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 25px;
  transition: all 0.3s ease;
}

.feature-card:hover .icon {
  background-color: rgba(209, 10, 17, 0.12);
  transform: scale(1.05);
}

.feature-card .icon svg {
  width: 32px;
  height: 32px;
  color: #d10a11;
}

.feature-card h3 {
  font-size: 1.5rem;
  margin-bottom: 16px;
  color: #222;
  font-weight: 600;
}

.feature-card p {
  color: #555;
  margin-bottom: 25px;
  line-height: 1.7;
  flex-grow: 1;
  font-size: 1.05rem;
}

.feature-link {
  color: #d10a11;
  text-decoration: none;
  font-weight: 600;
  display: inline-block;
  margin-top: auto;
  display: flex;
  align-items: center;
  font-size: 1.05rem;
  transition: all 0.2s ease;
}

.feature-card:hover .feature-link {
  color: #b80000;
}

.ming-icon {
  width: 26px;
  height: 26px;
  margin-right: 8px;
  transition: transform 0.3s ease;
}

.feature-link:hover .ming-icon {
  transform: translateX(5px);
}

.naming-services-grid {
  grid-template-columns: repeat(2, 1fr);
  max-width: 1400px;
  margin: 0 auto;
  gap: 40px;
}

/* 文本内容丰富部分样式 */
.about-chinese-names {
  padding: 100px 0;
  background-color: #fdf8f8;
  position: relative;
  overflow: hidden;
}

.about-chinese-names::before {
  content: '';
  position: absolute;
  width: 400px;
  height: 400px;
  right: -200px;
  top: -200px;
  background: radial-gradient(circle, rgba(209,10,17,0.03) 0%, rgba(209,10,17,0) 70%);
  border-radius: 50%;
}

.about-chinese-names::after {
  content: '';
  position: absolute;
  width: 300px;
  height: 300px;
  left: -150px;
  bottom: -150px;
  background: radial-gradient(circle, rgba(209,10,17,0.03) 0%, rgba(209,10,17,0) 70%);
  border-radius: 50%;
}

.introduction-text {
  font-size: 1.05rem;
  line-height: 1.7;
  color: #333;
  max-width: 900px;
  margin: 0 auto 40px;
  text-align: center;
}

.two-column-content {
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto;
}

.column {
  flex: 1 1 calc(50% - 20px);
  min-width: 300px;
}

.collapsible-section {
  margin-bottom: 25px;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  overflow: hidden;
  transition: all 0.3s ease;
}

.collapsible-title {
  font-size: 1.3rem;
  color: #d10a11;
  margin: 0;
  padding: 18px 20px;
  cursor: pointer;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 600;
}

.toggle-icon {
  font-size: 1.4rem;
  color: #d10a11;
  font-weight: bold;
}

.collapsible-content {
  padding: 0 20px 20px;
  line-height: 1.7;
  color: #444;
}

.collapsible-content p {
  margin-top: 0;
  margin-bottom: 15px;
}

.collapsible-content ul {
  padding-left: 20px;
  margin-bottom: 15px;
}

.collapsible-content li {
  margin-bottom: 8px;
}

.see-more-wrapper {
  text-align: center;
  margin-top: 30px;
}

.see-more-btn {
  background-color: transparent;
  border: 2px solid #d10a11;
  color: #d10a11;
  padding: 10px 25px;
  border-radius: 30px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1rem;
}

.see-more-btn:hover {
  background-color: #d10a11;
  color: white;
}

/* FAQ 部分样式 */
.faq-section {
  padding: 100px 0;
  background-color: #f8f9fa;
  position: relative;
}

.faq-columns {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto 30px;
}

.faq-column {
  flex: 1 1 calc(50% - 15px);
  min-width: 300px;
}

.faq-container {
  max-width: 900px;
  margin: 0 auto;
}

.faq-item {
  background-color: #fff;
  border-radius: 16px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.04);
  margin-bottom: 20px;
  transition: all 0.3s ease;
  border: 1px solid rgba(0,0,0,0.05);
  cursor: pointer;
  overflow: hidden;
}

.faq-item:hover {
  box-shadow: 0 12px 25px rgba(0,0,0,0.08);
  transform: translateY(-3px);
}

.faq-expanded {
  box-shadow: 0 15px 30px rgba(0,0,0,0.1);
}

.faq-question {
  font-size: 1.15rem;
  color: #333;
  margin: 0;
  padding: 20px;
  font-weight: 600;
  position: relative;
  display: flex;
  align-items: flex-start;
}

.faq-q-marker, .faq-a-marker {
  color: #d10a11;
  font-weight: 700;
  margin-right: 8px;
  flex-shrink: 0;
}

.faq-toggle {
  margin-left: auto;
  color: #d10a11;
  font-size: 1.3rem;
  font-weight: bold;
  padding-left: 10px;
  flex-shrink: 0;
}

.faq-answer {
  padding: 0 20px 20px 20px;
  color: #444;
  line-height: 1.7;
}

.faq-answer p {
  margin: 0;
  display: flex;
  align-items: flex-start;
}

/* 咨询服务部分样式 */
.service-section {
  padding: 100px 0;
  background-color: #fdf8f8;
  position: relative;
  overflow: hidden;
}

.service-section::before {
  content: '';
  position: absolute;
  width: 400px;
  height: 400px;
  left: -200px;
  top: -200px;
  background: radial-gradient(circle, rgba(209,10,17,0.03) 0%, rgba(209,10,17,0) 70%);
  border-radius: 50%;
}

.service-section::after {
  content: '';
  position: absolute;
  width: 300px;
  height: 300px;
  right: -150px;
  bottom: -150px;
  background: radial-gradient(circle, rgba(209,10,17,0.03) 0%, rgba(209,10,17,0) 70%);
  border-radius: 50%;
}

.service-section h2 {
  font-size: 2.4rem;
  color: #222;
  margin-bottom: 60px;
  text-align: center;
  position: relative;
  font-weight: 700;
}

.service-section h2::after {
  content: '';
  display: block;
  width: 60px;
  height: 3px;
  background-color: #d10a11;
  margin: 20px auto 0;
  border-radius: 2px;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 35px;
  margin-bottom: 40px;
}

.service-card {
  background-color: white;
  border-radius: 16px;
  padding: 40px;
  transition: all 0.3s ease;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  height: auto;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(0,0,0,0.06);
  position: relative;
  z-index: 1;
  overflow: hidden;
}

.service-card:hover {
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
  border-color: rgba(0,0,0,0.08);
}

.service-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 5px;
  height: 100%;
  background: linear-gradient(to bottom, #d10a11, #f05252);
  z-index: 2;
  border-top-left-radius: 16px;
  border-bottom-left-radius: 16px;
}

.service-card .icon {
  width: 65px;
  height: 65px;
  background-color: rgba(209, 10, 17, 0.08);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 25px;
  transition: all 0.3s ease;
}

.service-card:hover .icon {
  background-color: rgba(209, 10, 17, 0.12);
  transform: scale(1.05);
}

.service-card .icon svg {
  width: 32px;
  height: 32px;
  color: #d10a11;
}

.service-card h3 {
  font-size: 1.5rem;
  margin-bottom: 16px;
  color: #222;
  font-weight: 600;
}

.service-card p {
  color: #555;
  margin-bottom: 25px;
  line-height: 1.7;
  flex-grow: 1;
  font-size: 1.05rem;
}

.service-link {
  color: #d10a11;
  text-decoration: none;
  font-weight: 600;
  display: inline-block;
  margin-top: auto;
  display: flex;
  align-items: center;
  font-size: 1.05rem;
  transition: all 0.2s ease;
}

.service-card:hover .service-link {
  color: #b80000;
}

.service-link:hover .ming-icon {
  transform: translateX(5px);
}

@media (max-width: 1200px) {
  .hero-content {
    gap: 4%;
  }
  
  .hero-image img {
    width: 200px;
  }
  
  .hero h1 {
    font-size: 2.2rem;
  }
}

@media (max-width: 992px) {
  .hero {
    padding: 40px 0;
    min-height: auto;
    margin-top: 15px;
  }
  
  .hero-content {
    flex-direction: column;
    gap: 30px;
    text-align: center;
  }
  
  .hero-text {
    align-items: center;
    max-width: 100%;
  }
  
  .hero h1 {
    font-size: 2rem;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .naming-services-grid {
    grid-template-columns: 1fr;
  }
  
  .rich-text-content {
    padding: 0 20px;
  }
}

@media (max-width: 768px) {
  .hero {
    padding: 30px 0;
    margin-top: 10px;
  }
  
  .hero-content {
    gap: 30px;
  }
  
  .hero-image img {
    width: 160px;
  }
  
  .hero h1 {
    font-size: 1.9rem;
  }
  
  .hero .subtitle {
    font-size: 1.1rem;
  }
  
  .features, .features-alt, .about-chinese-names, .faq-section, .service-section {
    padding: 70px 0;
  }
  
  .section-title {
    font-size: 1.8rem;
    margin-bottom: 40px;
  }
  
  .feature-card {
    padding: 25px;
  }
  
  .faq-item {
    padding: 25px;
  }
  
  .faq-question, .faq-answer {
    padding-left: 25px;
  }
  
  .faq-question {
    font-size: 1.2rem;
  }
  
  .naming-services-grid {
    grid-template-columns: 1fr;
  }
  
  .empty-card-placeholder {
    display: none;
  }
  
  .two-column-content {
    flex-direction: column;
    gap: 20px;
  }
  
  .column {
    flex: 1 1 100%;
  }
  
  .collapsible-title {
    font-size: 1.2rem;
    padding: 15px;
  }
  
  .collapsible-content {
    padding: 0 15px 15px;
  }

  .services-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .hero {
    padding: 30px 0;
  }
  
  .hero .container, .features .container {
    padding: 0 20px;
  }
  
  .hero-image img {
    width: 130px;
  }
  
  .hero h1 {
    font-size: 1.6rem;
  }
  
  .hero .subtitle {
    font-size: 1rem;
  }
  
  .feature-grid {
    grid-template-columns: 1fr;
  }
  
  .section-title {
    font-size: 1.6rem;
  }
  
  .feature-card .icon {
    width: 55px;
    height: 55px;
  }
  
  .feature-card h3 {
    font-size: 1.3rem;
  }

  .service-card {
    padding: 25px;
  }

  .service-card h3 {
    font-size: 1.2rem;
  }
}
</style>