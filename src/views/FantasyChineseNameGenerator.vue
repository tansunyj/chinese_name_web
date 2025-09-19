<template>
  <div class="fantasy-chinese-name-page">
    <div class="container">
      <h1 class="page-title">Fantasy Chinese Name Generator for Games, Novels & Characters | ChineseName.us</h1>
      
      <div class="seo-intro">
        <p class="seo-description">Generate enchanting fantasy Chinese names for your characters, stories, and creative projects. Our advanced fantasy Chinese name generator creates authentic mystical names combining traditional Chinese culture with magical elements. Perfect for fantasy novels, games, role-playing characters, wuxia stories, xianxia cultivation novels, and creative writing. Get unique fantasy Chinese names with deep cultural meaning, mystical significance, and supernatural powers.</p>
      </div>
      
      <div class="content">
        <div class="form-section">
          <form @submit.prevent="generateFantasyName">
            <div class="form-row">
              <div class="form-group">
                <label for="fantasyTheme">Fantasy Theme</label>
                <select id="fantasyTheme" v-model="formData.fantasyTheme" class="form-select">
                  <option value="celestial">🌟 Celestial & Heavenly</option>
                  <option value="elemental">🔥 Elemental Powers</option>
                  <option value="mystical">✨ Mystical & Spiritual</option>
                  <option value="martial">⚔️ Martial Arts & Warriors</option>
                  <option value="imperial">👑 Imperial & Royal</option>
                  <option value="nature">🌸 Nature & Harmony</option>
                  <option value="shadow">🌙 Shadow & Mystery</option>
                  <option value="dragon">🐉 Dragon & Phoenix</option>
                  <option value="mythical">🦄 Mythical Creatures</option>
                  <option value="ancient">🏛️ Ancient Legends</option>
                  <option value="alchemy">⚗️ Alchemy & Magic</option>
                  <option value="wuxia">🗡️ Wuxia Heroes</option>
                  <option value="xianxia">☯️ Xianxia Cultivation</option>
                  <option value="random">🎲 Random Mix</option>
                </select>
              </div>
              
              <div class="form-group">
                <label for="characterType">Character Type</label>
                <select id="characterType" v-model="formData.characterType" class="form-select">
                  <option value="hero">🦸 Hero/Protagonist</option>
                  <option value="villain">😈 Villain/Antagonist</option>
                  <option value="sage">👴 Wise Sage/Master</option>
                  <option value="warrior">⚔️ Warrior/Fighter</option>
                  <option value="mage">🧙 Mage/Sorcerer</option>
                  <option value="noble">👑 Noble/Royalty</option>
                  <option value="assassin">🥷 Assassin/Ninja</option>
                  <option value="merchant">💰 Merchant/Trader</option>
                  <option value="cleric">⛪ Cleric/Priest</option>
                  <option value="scholar">📚 Scholar/Researcher</option>
                  <option value="monk">🧘 Monk/Martial Artist</option>
                  <option value="healer">💊 Healer/Doctor</option>
                  <option value="beast_tamer">🐺 Beast Tamer</option>
                  <option value="cultivator">☯️ Immortal Cultivator</option>
                </select>
              </div>
            </div>
            
            <div class="form-row">
              <div class="form-group">
                <label for="gender">Gender</label>
                <select id="gender" v-model="formData.gender" class="form-select">
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="unisex">Unisex</option>
                </select>
              </div>
              
              <div class="form-group">
                <label for="powerLevel">Power Level</label>
                <select id="powerLevel" v-model="formData.powerLevel" class="form-select">
                  <option value="mortal">Mortal</option>
                  <option value="cultivator">Cultivator</option>
                  <option value="master">Master</option>
                  <option value="grandmaster">Grandmaster</option>
                  <option value="immortal">Immortal</option>
                  <option value="deity">Deity</option>
                </select>
              </div>
            </div>
            
            <button type="submit" class="submit-button" :class="{ 'loading': isLoading }">
              <span v-if="isLoading">{{ $t('common.loading') }}</span>
              <span v-else>Generate Fantasy Chinese Names</span>
            </button>
          </form>
        </div>
        
              <!-- 加载指示器 -->
      <MysticalLoader v-if="isLoading" />
        
        <!-- 错误信息显示 -->
        <div v-if="errorMessage && !isLoading" class="error-container">
          <div class="error-card">
            <div class="error-icon">⚠️</div>
            <div class="error-content">
              <h3>Generation Error</h3>
              <p>{{ errorMessage }}</p>
              <div class="error-help">
                <p><strong>Troubleshooting Tips:</strong></p>
                <ul>
                  <li>Make sure the proxy server is running on port 8788</li>
                  <li>Check your internet connection</li>
                  <li>Verify OpenAI API configuration in .env file</li>
                  <li>Try refreshing the page and generating again</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div v-if="results.length" class="results-section">
          <div class="results-header">
            <h2>✨ Your Mystical Chinese Name Collection</h2>
            <p class="results-subtitle">{{ results.length }} unique fantasy names crafted just for you</p>
          </div>
          
          <div class="results-grid">
            <div class="result-card" v-for="(result, index) in results" :key="index">
              <div class="result-header">
                <div class="result-chinese">{{ result.chinese_name }}</div>
                <div class="result-pinyin">{{ result.pinyin }}</div>
              </div>
              <div class="result-english">
                <h3>{{ result.english_meaning }}</h3>
              </div>
              <div class="result-details">
                <div class="result-item">
                  <h4>Mystical Meaning</h4>
                  <p>{{ result.mystical_meaning }}</p>
                </div>
                <div class="result-item">
                  <h4>Fantasy Background</h4>
                  <p>{{ result.fantasy_background }}</p>
                </div>
                <div class="result-item" v-if="result.powers">
                  <h4>Associated Powers</h4>
                  <p>{{ result.powers }}</p>
                </div>
                <div class="result-item" v-if="result.cultural_origin">
                  <h4>Cultural Origin</h4>
                  <p>{{ result.cultural_origin }}</p>
                </div>
              </div>
              <div class="action-buttons">
                <button 
                  class="action-btn copy-btn" 
                  @click.prevent="copyToClipboard(result.chinese_name)"
                  type="button"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2">
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                  </svg>
                  Copy Name
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div class="fantasy-guide">
          <h2>Fantasy Chinese Name Generator Guide</h2>
          <p>Our Fantasy Chinese Name Generator creates authentic mystical names that blend traditional Chinese naming conventions with fantastical elements. Perfect for writers, gamers, and creators who need compelling Chinese fantasy character names.</p>
          
          <h3>How Our Fantasy Chinese Name Generator Works</h3>
          <ol>
            <li><strong>Theme Selection</strong> - Choose from celestial, elemental, mystical, martial arts, and other fantasy themes that influence the name's magical properties.</li>
            <li><strong>Character Analysis</strong> - Define your character's role, from heroes to villains, sages to warriors, each requiring different naming approaches.</li>
            <li><strong>Power Integration</strong> - Select power levels from mortal to deity, affecting the grandeur and mystical quality of generated names.</li>
            <li><strong>Cultural Authenticity</strong> - Every name maintains traditional Chinese linguistic patterns while incorporating fantasy elements.</li>
            <li><strong>Meaning Depth</strong> - Each generated name includes mystical meanings, cultural backgrounds, and associated supernatural powers.</li>
          </ol>
          
          <div class="fantasy-themes-section">
            <h3>Fantasy Chinese Name Themes</h3>
            <div class="themes-grid">
              <div class="theme-card">
                <h4>🌟 Celestial & Heavenly</h4>
                <p>Names inspired by stars, moons, heaven, and cosmic forces. Perfect for divine characters and celestial beings.</p>
              </div>
              <div class="theme-card">
                <h4>🔥 Elemental Powers</h4>
                <p>Names embodying fire, water, earth, air, and metal elements from traditional Chinese Five Elements theory.</p>
              </div>
              <div class="theme-card">
                <h4>✨ Mystical & Spiritual</h4>
                <p>Names with spiritual depth, incorporating concepts of enlightenment, meditation, and inner power.</p>
              </div>
              <div class="theme-card">
                <h4>⚔️ Martial Arts & Warriors</h4>
                <p>Names suitable for martial artists, fighters, and warriors, emphasizing strength and combat prowess.</p>
              </div>
              <div class="theme-card">
                <h4>👑 Imperial & Royal</h4>
                <p>Regal names fit for emperors, princesses, and nobility, conveying authority and elegance.</p>
              </div>
              <div class="theme-card">
                <h4>🌸 Nature & Harmony</h4>
                <p>Names inspired by natural elements, seasons, plants, and animals from Chinese cultural traditions.</p>
              </div>
              <div class="theme-card">
                <h4>🦄 Mythical Creatures</h4>
                <p>Names embodying legendary beasts, divine animals, and supernatural beings from Chinese mythology.</p>
              </div>
              <div class="theme-card">
                <h4>🗡️ Wuxia Heroes</h4>
                <p>Names perfect for martial arts heroes, emphasizing honor, righteousness, and earthly heroism.</p>
              </div>
              <div class="theme-card">
                <h4>☯️ Xianxia Cultivation</h4>
                <p>Ethereal names for immortal cultivators, incorporating spiritual transcendence and celestial power.</p>
              </div>
            </div>
          </div>
          
          <h3>Why Use Our Fantasy Chinese Name Generator?</h3>
          <div class="benefits-section">
            <ul>
              <li><strong>Cultural Authenticity</strong> - All names follow traditional Chinese naming patterns and linguistic rules.</li>
              <li><strong>Fantasy Integration</strong> - Seamlessly blends mystical elements with authentic Chinese culture.</li>
              <li><strong>Multiple Options</strong> - Generate various names for different character types and fantasy themes.</li>
              <li><strong>Detailed Explanations</strong> - Each name includes meaning, cultural background, and fantasy significance.</li>
              <li><strong>Versatile Usage</strong> - Perfect for novels, games, role-playing, creative writing, and world-building.</li>
              <li><strong>Power-Level Appropriate</strong> - Names scale from mortal characters to immortal deities.</li>
            </ul>
          </div>
          
          <h3>Fantasy Chinese Naming Conventions</h3>
          <p>Chinese fantasy names often incorporate concepts from Taoism, Buddhism, martial arts traditions, and classical literature. Our generator respects these cultural foundations while adding creative fantasy elements suitable for modern storytelling.</p>
          
          <h3>Frequently Asked Questions About Fantasy Chinese Names</h3>
          
          <div class="faq-section">
            <div class="faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
              <h4 itemprop="name">What makes a Chinese name suitable for fantasy settings?</h4>
              <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                <p itemprop="text">Fantasy Chinese names typically incorporate elements like celestial phenomena, mythical creatures, elemental forces, and spiritual concepts. They often use characters related to power, mysticism, nature, and virtue while maintaining traditional Chinese naming structure. Our generator creates names that sound authentic to Chinese speakers while conveying the magical or supernatural qualities needed for fantasy characters.</p>
              </div>
            </div>
            
            <div class="faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
              <h4 itemprop="name">How do I choose the right fantasy theme for my character?</h4>
              <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                <p itemprop="text">Consider your character's role, personality, and abilities. Celestial themes work well for divine or enlightened characters, elemental themes suit characters with magical powers, martial themes fit warriors and fighters, while mystical themes are perfect for sages and spiritual characters. The theme should reflect your character's essence and the type of fantasy world they inhabit.</p>
              </div>
            </div>
            
            <div class="faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
              <h4 itemprop="name">Can I use these fantasy Chinese names in my published works?</h4>
              <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                <p itemprop="text">Yes, all names generated by our fantasy Chinese name generator are free to use in your creative projects, including published novels, games, and other commercial works. The names are original combinations created based on traditional Chinese naming principles and fantasy elements, making them suitable for any creative application.</p>
              </div>
            </div>
            
            <div class="faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
              <h4 itemprop="name">How do power levels affect the generated fantasy names?</h4>
              <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                <p itemprop="text">Power levels influence the grandeur and complexity of generated names. Mortal-level names use more common characters and concepts, while immortal and deity-level names incorporate grander, more mystical elements. Higher power levels tend to generate names with celestial references, ancient wisdom concepts, and characters suggesting transcendence or divine authority.</p>
              </div>
            </div>
            
            <div class="faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
              <h4 itemprop="name">What's the difference between fantasy Chinese names and regular Chinese names?</h4>
              <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                <p itemprop="text">Fantasy Chinese names often use characters and combinations that are more dramatic, mystical, or powerful than typical modern Chinese names. They may incorporate ancient or literary characters, mythological references, and supernatural concepts that aren't commonly used in everyday naming. While still maintaining authentic Chinese linguistic structure, fantasy names are designed to evoke magic, power, and otherworldly qualities.</p>
              </div>
            </div>
            
            <div class="faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
              <h4 itemprop="name">How can I ensure the fantasy Chinese names fit my story's world-building?</h4>
              <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                <p itemprop="text">Consider the cultural setting of your fantasy world. If it's based on historical China, choose names with classical or traditional elements. For completely fictional worlds, you can be more creative with combinations while maintaining Chinese linguistic patterns. Use the theme and power level settings to match your world's magic system and social hierarchy. The cultural background provided with each name can help you understand how it fits into different fantasy contexts.</p>
              </div>
            </div>

            <div class="faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
              <h4 itemprop="name">What's the difference between Wuxia and Xianxia naming styles?</h4>
              <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                <p itemprop="text">Wuxia names typically focus on martial arts themes, honor, righteousness, and earthly heroism. They often use characters related to weapons, nature, and moral virtues. Xianxia names are more ethereal and mystical, incorporating elements of immortality, spiritual cultivation, celestial phenomena, and transcendence. Xianxia names may include references to stars, clouds, immortal realms, and spiritual enlightenment.</p>
              </div>
            </div>

            <div class="faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
              <h4 itemprop="name">Can I generate names for specific fantasy races or creatures?</h4>
              <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                <p itemprop="text">Yes! Our generator creates names suitable for various fantasy beings. Use "Mythical Creatures" theme for dragon-kin, phoenix-born, or spirit beings. "Beast Tamer" character type works well for shapeshifters or animal companions. Higher power levels (Immortal/Deity) generate names appropriate for ancient dragons, celestial beings, or supernatural entities. The mystical meanings provided often include references to transformation and supernatural abilities.</p>
              </div>
            </div>

            <div class="faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
              <h4 itemprop="name">How do I pronounce the generated Chinese names correctly?</h4>
              <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                <p itemprop="text">Each generated name includes pinyin pronunciation guide using tone marks. The pinyin follows standard Mandarin pronunciation: tones are crucial for authentic pronunciation. You can use online pinyin pronunciation tools or Chinese language learning apps to hear the correct pronunciation. For fantasy settings, slight variations in pronunciation are acceptable as long as they maintain the flow and musicality of the original Chinese sounds.</p>
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
import LoadingIndicator from '@/components/LoadingIndicator.vue';
import MysticalLoader from '@/components/MysticalLoader.vue';
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

export default {
  name: 'FantasyChineseNameGenerator',
  components: {
    LoadingIndicator,
    MysticalLoader
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
        "name": "Fantasy Chinese Name Generator",
        "url": "https://chinesename.us/fantasy-chinese-name-generator",
        "applicationCategory": "UtilityApplication",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        },
        "description": "Generate enchanting fantasy Chinese names for characters, stories, and creative projects. Create mystical names with authentic Chinese culture and magical elements.",
        "keywords": "fantasy chinese name generator, fantasy chinese names, mystical chinese names, chinese fantasy character names, magical chinese names",
        "creator": {
          "@type": "Organization",
          "name": "ChineseName.us"
        }
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
        fantasyTheme: 'celestial',
        characterType: 'hero',
        gender: 'unisex',
        powerLevel: 'cultivator'
      },
      isLoading: false,
      results: [],
      errorMessage: ''
    }
  },
  methods: {
    async generateFantasyName() {
      this.isLoading = true;
      this.results = [];
      this.errorMessage = '';
      
      try {
        console.log('🚀 开始生成奇幻名字...');
        console.log('📋 请求参数:', {
          type: 'fantasyChineseName',
          fantasyTheme: this.formData.fantasyTheme,
          characterType: this.formData.characterType,
          gender: this.formData.gender,
          powerLevel: this.formData.powerLevel,
          locale: this.locale
        });
        console.log('🌐 API端点:', aiConfig.baseConfig.proxyUrl);

        // 使用类型化API发送请求
        const response = await fetch(aiConfig.baseConfig.proxyUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            type: 'fantasyChineseName',
            fantasyTheme: this.formData.fantasyTheme,
            characterType: this.formData.characterType,
            gender: this.formData.gender,
            powerLevel: this.formData.powerLevel,
            locale: this.locale
          })
        });

        console.log('📡 响应状态:', response.status, response.statusText);
        
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }

        const responseData = await response.json();
        console.log('🔍 AI原始响应:', responseData);

        let parsedData = null;

        // 处理OpenAI的响应格式
        if (responseData && responseData.choices && responseData.choices[0] && responseData.choices[0].message) {
          try {
            const contentString = responseData.choices[0].message.content;
            parsedData = JSON.parse(contentString);
            console.log('✅ 解析后的JSON数据:', parsedData);
          } catch (parseError) {
            console.error('❌ 解析JSON失败:', parseError);
            const extractedData = this.extractDataFromText(responseData.choices[0].message.content);
            if (extractedData) {
              parsedData = extractedData;
            }
          }
        } else if (responseData && responseData.names) {
          parsedData = responseData;
        } else {
          const extractedData = this.extractDataFromText(JSON.stringify(responseData));
          if (extractedData) {
            parsedData = extractedData;
          }
        }

        if (parsedData && (parsedData.names || parsedData.fantasy_names)) {
          let namesData = parsedData.names || parsedData.fantasy_names;

          if (Array.isArray(namesData)) {
            this.results = namesData.map(item => ({
              chinese_name: item.chinese_name || item.name || item.characters || '魔幻名字',
              pinyin: item.pinyin || item.pronunciation || this.generatePinyin(item.chinese_name || '魔幻名字'),
              english_meaning: item.english_meaning || item.meaning || item.translation || 'Mystical Name',
              mystical_meaning: item.mystical_meaning || item.fantasy_meaning || item.explanation || 'A name with deep mystical significance',
              fantasy_background: item.fantasy_background || item.background || item.cultural || 'Rooted in ancient Chinese mysticism and fantasy traditions',
              powers: item.powers || item.abilities || item.associated_powers || '',
              cultural_origin: item.cultural_origin || item.origin || 'Traditional Chinese fantasy naming conventions'
            }));
          } else {
            this.results = this.createFallbackResults();
          }
        } else {
          console.log('⚠️ 无法从响应中提取名字数据，使用备用结果');
          this.results = this.createFallbackResults();
        }
        
        console.log('✅ 生成完成，结果数量:', this.results.length);
      } catch (error) {
        console.error('❌ 生成失败:', error);
        this.errorMessage = `生成失败: ${error.message}`;
        
        if (error.message.includes('HTTP 500')) {
          message.error('服务器内部错误，请检查API配置');
        } else if (error.message.includes('Failed to fetch')) {
          message.error('网络连接失败，请检查代理服务器是否运行');
        } else {
          message.error('Generation failed, please try again');
        }
        
        // 使用备用结果以确保用户仍能看到一些名字
        this.results = this.createFallbackResults();
      } finally {
        this.isLoading = false;
      }
    },
    
    async copyToClipboard(text) {
      if (!text) {
        alert('No content to copy');
        return;
      }

      try {
        await navigator.clipboard.writeText(text);
        this.showCopyToast('✅ Copied to clipboard!');
      } catch (err) {
        console.error('复制失败: ', err);
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        
        try {
          document.execCommand('copy');
          this.showCopyToast('✅ Copied to clipboard!');
        } catch (e) {
          alert('Copy failed, please copy manually');
        } finally {
          document.body.removeChild(textarea);
        }
      }
    },

    shareOnTwitter(result) {
      const text = `🐉 Generated a mystical Chinese fantasy name: ${result.chinese_name} (${result.pinyin}) - ${result.english_meaning}\n\n✨ ${result.mystical_meaning}\n\nGenerated with ChineseName.us Fantasy Name Generator`;
      const url = 'https://chinesename.us/fantasy-chinese-name-generator';
      const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}&hashtags=FantasyNames,ChineseNames,CharacterNames`;
      
      window.open(twitterUrl, '_blank', 'width=550,height=420');
    },
    
    showCopyToast(message) {
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
      
      document.body.appendChild(toast);
      
      setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => {
          document.body.removeChild(toast);
        }, 300);
      }, 2000);
    },
    
    createFallbackResults() {
      const themeNames = {
        celestial: [
          { chinese: '星云', pinyin: 'Xīng Yún', english: 'Star Cloud', meaning: 'A mystical name representing the cosmic nebulae where stars are born' },
          { chinese: '月灵', pinyin: 'Yuè Líng', english: 'Moon Spirit', meaning: 'Embodies the spiritual essence of lunar magic and celestial wisdom' },
          { chinese: '天羽', pinyin: 'Tiān Yǔ', english: 'Heaven Feather', meaning: 'Symbolizes divine messenger with wings that touch the heavens' }
        ],
        elemental: [
          { chinese: '炎龙', pinyin: 'Yán Lóng', english: 'Flame Dragon', meaning: 'Master of fire elements with the power of ancient dragons' },
          { chinese: '水韵', pinyin: 'Shuǐ Yùn', english: 'Water Harmony', meaning: 'Flows with the rhythm of water, bringing balance and healing' },
          { chinese: '雷峰', pinyin: 'Léi Fēng', english: 'Thunder Peak', meaning: 'Commands lightning from the highest mountain peaks' }
        ],
        mystical: [
          { chinese: '道心', pinyin: 'Dào Xīn', english: 'Tao Heart', meaning: 'Possesses a heart aligned with the mystical way of the universe' },
          { chinese: '幻影', pinyin: 'Huàn Yǐng', english: 'Phantom Shadow', meaning: 'Master of illusions and ethereal magic' },
          { chinese: '禅悟', pinyin: 'Chán Wù', english: 'Zen Enlightenment', meaning: 'Achieved spiritual awakening through meditation and wisdom' }
        ],
        wuxia: [
          { chinese: '剑心', pinyin: 'Jiàn Xīn', english: 'Sword Heart', meaning: 'A warrior whose heart beats with the rhythm of righteous steel' },
          { chinese: '风行', pinyin: 'Fēng Xíng', english: 'Wind Walker', meaning: 'Moves with the speed and grace of mountain winds' },
          { chinese: '义侠', pinyin: 'Yì Xiá', english: 'Righteous Hero', meaning: 'Embodies the true spirit of martial arts chivalry' }
        ],
        xianxia: [
          { chinese: '紫霄', pinyin: 'Zǐ Xiāo', english: 'Purple Heaven', meaning: 'Cultivator who has reached the purple realm of immortal ascension' },
          { chinese: '逍遥', pinyin: 'Xiāo Yáo', english: 'Carefree Wanderer', meaning: 'Immortal who wanders freely between realms' },
          { chinese: '玄机', pinyin: 'Xuán Jī', english: 'Mysterious Essence', meaning: 'Holds the secrets of celestial cultivation methods' }
        ],
        mythical: [
          { chinese: '凤鸣', pinyin: 'Fèng Míng', english: 'Phoenix Song', meaning: 'Carries the melodic power of the legendary phoenix' },
          { chinese: '龙吟', pinyin: 'Lóng Yín', english: 'Dragon Chant', meaning: 'Voice resonates with ancient dragon magic' },
          { chinese: '麒麟', pinyin: 'Qí Lín', english: 'Qilin Guardian', meaning: 'Protected by the mythical beast of righteousness' }
        ]
      };
      
      const selectedTheme = themeNames[this.formData.fantasyTheme] || themeNames.celestial;
      
      return selectedTheme.map(item => ({
        chinese_name: item.chinese,
        pinyin: item.pinyin,
        english_meaning: item.english,
        mystical_meaning: item.meaning,
        fantasy_background: 'This name draws from ancient Chinese mystical traditions and fantasy literature',
        powers: 'Associated with supernatural abilities and mystical energy',
        cultural_origin: 'Rooted in traditional Chinese philosophy and fantasy naming conventions'
      }));
    },
    
    generatePinyin(chineseName) {
      const pinyinMap = {
        '星': 'Xīng', '云': 'Yún', '月': 'Yuè', '灵': 'Líng', '天': 'Tiān', '羽': 'Yǔ',
        '炎': 'Yán', '龙': 'Lóng', '水': 'Shuǐ', '韵': 'Yùn', '雷': 'Léi', '峰': 'Fēng',
        '道': 'Dào', '心': 'Xīn', '幻': 'Huàn', '影': 'Yǐng', '禅': 'Chán', '悟': 'Wù',
        '魔': 'Mó', '幻': 'Huàn', '名': 'Míng', '字': 'Zì'
      };
      
      return chineseName.split('').map(char => pinyinMap[char] || char).join(' ');
    },
    
    extractDataFromText(text) {
      try {
        const namePattern = /(?:Chinese|chinese)[:\s]*([^\n,]+)/gi;
        const englishPattern = /(?:English|english|meaning)[:\s]*([^\n,]+)/gi;
        
        const chineseMatches = text.match(namePattern);
        const englishMatches = text.match(englishPattern);
        
        if (chineseMatches && chineseMatches.length > 0) {
          const names = [];
          
          chineseMatches.forEach((match, index) => {
            const chineseName = match.replace(/(?:Chinese|chinese)[:\s]*/, '').trim();
            const englishMeaning = englishMatches && englishMatches[index] 
              ? englishMatches[index].replace(/(?:English|english|meaning)[:\s]*/, '').trim()
              : 'Mystical Name';
            
            names.push({
              chinese_name: chineseName,
              pinyin: this.generatePinyin(chineseName),
              english_meaning: englishMeaning,
              mystical_meaning: 'A fantasy name with deep mystical significance',
              fantasy_background: 'Rooted in Chinese fantasy traditions',
              powers: 'Associated with supernatural abilities',
              cultural_origin: 'Traditional Chinese naming conventions'
            });
          });
          
          return { names };
        }
        
        return null;
      } catch (error) {
        console.error('提取数据失败:', error);
        return null;
      }
    }
  }
}
</script>

<style scoped>
.fantasy-chinese-name-page {
  padding: 20px 0 100px;
  min-height: 100vh;
  background-color: #f8f9fa;
}

.container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 20px;
  width: 100%;
  box-sizing: border-box;
}

.page-title {
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 40px;
  margin-top: 70px;
  text-align: center;
}

.seo-intro {
  max-width: 900px;
  margin: 0 auto 3rem;
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
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  padding: 30px;
}

.form-row {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-bottom: 25px;
}

.form-group {
  display: flex;
  flex-direction: column;
}

label {
  margin-bottom: 8px;
  font-weight: 500;
  color: #555;
}

.form-select {
  padding: 12px 15px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 1rem;
  transition: border-color 0.3s;
  width: 100%;
}

.form-select:focus {
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
  margin-top: 20px;
  position: relative;
  overflow: hidden;
}

.submit-button:hover {
  background-color: #d00010;
}

.submit-button:disabled {
  background-color: #f08080;
  cursor: not-allowed;
  opacity: 0.7;
}

.submit-button.loading {
  background-color: #f08080;
  cursor: not-allowed;
  opacity: 0.7;
}

.results-section {
  margin-top: 40px;
}

.results-header {
  text-align: center;
  margin-bottom: 30px;
}

.results-header h2 {
  font-size: 1.8rem;
  color: #333;
  margin-bottom: 10px;
}

.results-subtitle {
  color: #666;
  font-size: 1rem;
  margin: 0;
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

.result-chinese {
  font-size: 2.5rem;
  font-weight: 600;
  color: #e60012;
  margin-bottom: 10px;
}

.result-pinyin {
  font-size: 1.2rem;
  color: #666;
}

.result-english {
  padding: 20px;
}

.result-english h3 {
  font-size: 1rem;
  color: #555;
  margin: 0;
}

.result-details {
  padding: 20px;
}

.result-item {
  margin-bottom: 20px;
}

.result-item:last-child {
  margin-bottom: 0;
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

.action-buttons {
  display: flex;
  border-top: 1px solid #eee;
}

.action-btn {
  padding: 10px 20px;
  border: none;
  background-color: #f0f0f0;
  color: #333;
  font-size: 0.95rem;
  cursor: pointer;
  flex: 1;
  transition: all 0.2s ease;
  border-radius: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
}

.action-btn:hover {
  background-color: #e60012;
  color: white;
}

.copy-btn {
  background-color: #f8f9fa;
}

.share-btn {
  background-color: #1da1f2;
  color: white;
}

.share-btn:hover {
  background-color: #1991db;
}

/* 移除了加载动画样式，现在使用公共组件 MysticalLoader */

.fantasy-guide {
  margin-top: 60px;
  padding: 30px;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
}

.fantasy-guide h2 {
  font-size: 1.8rem;
  color: #333;
  margin-bottom: 25px;
}

.fantasy-guide h3 {
  font-size: 1.5rem;
  color: #333;
  margin: 35px 0 20px;
}

.fantasy-guide p {
  color: #333;
  line-height: 1.6;
  margin: 0;
}

.fantasy-guide ol {
  padding-left: 25px;
  margin-bottom: 25px;
}

.fantasy-guide li {
  margin-bottom: 15px;
  line-height: 1.6;
  color: #333;
}

.fantasy-themes-section {
  margin: 40px 0;
}

.themes-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 25px;
}

.theme-card {
  background-color: #f8f9fa;
  border-radius: 8px;
  padding: 20px;
  border: 1px solid #ddd;
  transition: transform 0.2s;
}

.theme-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.theme-card h4 {
  color: #333;
  margin-bottom: 10px;
}

.theme-card p {
  color: #666;
  margin: 0;
  line-height: 1.5;
}

.benefits-section ul {
  list-style: none;
  padding: 0;
  margin: 20px 0;
}

.benefits-section li {
  margin-bottom: 12px;
  color: #333;
  position: relative;
  padding-left: 25px;
  line-height: 1.6;
}

.benefits-section li::before {
  content: "•";
  position: absolute;
  left: 0;
  top: 0;
  color: #e60012;
  font-weight: bold;
}

.faq-section {
  margin-top: 40px;
}

.faq-item {
  margin-bottom: 25px;
  background-color: #f8f9fa;
  border-radius: 8px;
  padding: 20px;
  border: 1px solid #ddd;
}

.faq-item h4 {
  color: #333;
  margin-bottom: 12px;
}

.faq-item p {
  line-height: 1.6;
  color: #666;
  margin: 0;
}

/* 错误信息样式 */
.error-container {
  margin: 20px 0;
}

.error-card {
  background-color: #fff5f5;
  border: 1px solid #feb2b2;
  border-radius: 12px;
  padding: 20px;
  display: flex;
  align-items: flex-start;
  gap: 15px;
  box-shadow: 0 2px 8px rgba(254, 178, 178, 0.2);
}

.error-icon {
  font-size: 24px;
  flex-shrink: 0;
}

.error-content h3 {
  color: #c53030;
  margin: 0 0 10px 0;
  font-size: 18px;
}

.error-content p {
  color: #742a2a;
  margin: 0 0 15px 0;
  line-height: 1.5;
}

.error-help {
  background-color: #fed7d7;
  border-radius: 8px;
  padding: 15px;
  margin-top: 15px;
}

.error-help p {
  margin: 0 0 10px 0;
  font-weight: 600;
  color: #742a2a;
}

.error-help ul {
  margin: 0;
  padding-left: 20px;
  color: #742a2a;
}

.error-help li {
  margin-bottom: 5px;
  line-height: 1.4;
}

@media (max-width: 768px) {
  .page-title {
    font-size: 2rem;
  }
  
  .fantasy-chinese-name-page {
    padding: 70px 0;
  }
  
  .form-row {
    grid-template-columns: 1fr;
  }
  
  .form-section, .fantasy-guide {
    padding: 20px;
  }
  
  .results-grid {
    grid-template-columns: 1fr;
  }
  
  .result-chinese {
    font-size: 2rem;
  }
  
  .themes-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 15px;
  }
}
</style> 