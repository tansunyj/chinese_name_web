<template>
  <div class="name-generator-page">
    <div class="container">
      <div class="page-header">
        <h1 class="page-title">Chinese Name Generator | Create Your Authentic Chinese Name with Meaning</h1>
        <p class="page-description">Our intelligent Chinese name generator creates personalized Chinese names based on your preferences with proper cultural meanings and pronunciation</p>
      </div>

      <div class="seo-intro">
        <p>Looking for the perfect Chinese name? Our free Chinese name generator with meaning creates authentic Chinese names with proper cultural significance and pronunciation. Whether you need a Chinese name for business, travel, academic purposes, or personal interest, our Chinese name generator tool helps you find the perfect match that resonates with your personality and preferences. Generate a meaningful Chinese name that native speakers will appreciate and respect.</p>
      </div>

      <div class="generator-content">
        <!-- 左侧表单 -->
        <div class="input-section">
          <div class="form-card">
            <h2 class="form-title">Generate Your Chinese Name with Meaning</h2>
            
            <div class="form-group">
              <label for="surname">Family Name (Optional)</label>
              <input type="text" id="surname" v-model="formData.surname" placeholder="Enter Chinese surname or leave blank" />
            </div>
            
            <div class="form-group">
              <label>Gender</label>
              <div class="radio-group">
                <label class="radio-label">
                  <input type="radio" v-model="formData.gender" value="male" />
                  <span>Male</span>
                </label>
                <label class="radio-label">
                  <input type="radio" v-model="formData.gender" value="female" />
                  <span>Female</span>
                </label>
              </div>
            </div>
            
            <div class="form-group">
              <label for="birthdate">Birth Date (Optional)</label>
              <input type="date" id="birthdate" v-model="formData.birthdate" />
            </div>
            
            <div class="form-group">
              <label for="birthtime">Birth Time (Optional)</label>
              <input type="time" id="birthtime" v-model="formData.birthtime" />
            </div>
            
            <h2 class="form-title form-section-title">Name Preferences</h2>
            
            <div class="form-group">
              <label>Name Length</label>
              <div class="radio-group">
                <label class="radio-label">
                  <input type="radio" v-model="formData.nameLength" value="1" />
                  <span>Single Character</span>
                </label>
                <label class="radio-label">
                  <input type="radio" v-model="formData.nameLength" value="2" />
                  <span>Two Characters</span>
                </label>
              </div>
            </div>
            
            <div class="form-group">
              <label>Name Style</label>
              <select v-model="formData.style">
                <option value="">Select a name style</option>
                <option value="traditional">Classical & Elegant</option>
                <option value="modern">Modern & Contemporary</option>
                <option value="poetry">Poetic & Literary</option>
                <option value="nature">Nature-Inspired</option>
                <option value="fortune">Auspicious & Lucky</option>
              </select>
            </div>
            
            <div class="form-group">
              <label>Desired Meanings</label>
              <div class="tag-selector">
                <div 
                  v-for="(tag, index) in meaningTags" 
                  :key="index" 
                  class="meaning-tag"
                  :class="{ active: formData.meanings.includes(tag.value) }"
                  @click="toggleMeaning(tag.value)"
                >
                  {{ tag.label }}
                </div>
              </div>
            </div>
            
            <div class="form-group">
              <label for="avoidChars">Characters to Avoid</label>
              <input type="text" id="avoidChars" v-model="formData.avoidChars" placeholder="Characters to avoid in your name" />
            </div>
            
            <div class="form-group">
              <label for="additionalInfo">Additional Requirements</label>
              <textarea id="additionalInfo" v-model="formData.additionalInfo" rows="3" placeholder="Any special requirements for your Chinese name"></textarea>
            </div>
            
            <div class="form-actions">
              <button class="btn-primary" @click="generateNames">Generate Chinese Names</button>
              <button class="btn-secondary" @click="resetForm">Reset Form</button>
            </div>
          </div>
        </div>
        
        <!-- 右侧结果 -->
        <div class="result-section" v-if="showResults">
          <div class="result-header">
            <h2>Your Chinese Name Recommendations</h2>
            <p>Based on your preferences, we've generated these personalized Chinese names with meanings for you</p>
          </div>
          
          <div class="result-list">
            <div class="name-result-card" v-for="(result, index) in nameResults" :key="index" @click="selectName(index)">
              <div class="name-score-badge" :class="getScoreClass(result.score)">{{ result.score }}</div>
              <h3 class="result-name">{{ formData.surname + result.name }}</h3>
              <div class="name-meaning">
                <p>{{ result.meaning }}</p>
              </div>
              <div class="name-details" v-if="selectedNameIndex === index">
                <div class="detail-item">
                  <h4>Character Meaning Analysis</h4>
                  <p>{{ result.details.meanings }}</p>
                </div>
                <div class="detail-item">
                  <h4>Five Elements Analysis</h4>
                  <p>{{ result.details.fiveElements }}</p>
                </div>
                <div class="detail-item">
                  <h4>Pronunciation Analysis</h4>
                  <p>{{ result.details.pronunciation }}</p>
                </div>
                <div class="detail-item">
                  <h4>Literary Origin</h4>
                  <p>{{ result.details.origin }}</p>
                </div>
                <div class="name-tags">
                  <span class="tag" v-for="(tag, tagIndex) in result.tags" :key="tagIndex">{{ tag }}</span>
                </div>
              </div>
              <div class="name-actions" v-if="selectedNameIndex === index">
                <button class="btn-secondary">Save This Name</button>
                <button class="btn-primary">View Full Analysis</button>
              </div>
              <div class="name-expand" v-else>
                <span>View Analysis <i class="icon-arrow-down"></i></span>
              </div>
            </div>
          </div>
          
          <div class="result-pagination" v-if="nameResults.length > 0">
            <button class="btn-pagination" :disabled="currentPage === 1" @click="prevPage">Previous</button>
            <span class="page-info">{{ currentPage }}/{{ totalPages }}</span>
            <button class="btn-pagination" :disabled="currentPage === totalPages" @click="nextPage">Next</button>
          </div>
          
          <div class="result-actions">
            <button class="btn-tertiary">Generate Again</button>
            <button class="btn-primary">Save Results</button>
          </div>
        </div>
      </div>
      
      <div class="name-generator-guide">
        <h2>How Our Chinese Name Generator with Meaning Works</h2>
        <p>Our advanced Chinese name generator creates authentic Chinese names based on cultural traditions and linguistic principles. Unlike simple transliteration tools, we consider the meaning, pronunciation, and cultural significance of each character to create a name that truly represents you. Our Chinese name generator with meaning ensures that your Chinese name will be both beautiful and culturally appropriate.</p>
        
        <div class="guide-section">
          <h3>Why Chinese Names Matter</h3>
          <p>In Chinese culture, names carry significant meaning and are believed to influence a person's destiny. A good Chinese name should have positive connotations, pleasing sounds, and balanced structure. Our Chinese name generator follows traditional Chinese naming principles to create names that are both authentic and meaningful, respecting thousands of years of naming traditions.</p>
        </div>
        
        <div class="guide-section">
          <h3>Chinese Name Structure</h3>
          <p>A traditional Chinese name consists of a family name (surname) followed by a given name. The family name is typically one character, while the given name can be one or two characters. For example, in the name "Wang Wei," "Wang" is the family name and "Wei" is the given name. Our Chinese name generator can create names with or without a surname, depending on your preference.</p>
        </div>
        
        <div class="guide-section">
          <h3>Factors Our Chinese Name Generator Considers</h3>
          <ul>
            <li><strong>Gender</strong> - Different characters are traditionally used for male and female names</li>
            <li><strong>Five Elements</strong> - Balance of wood, fire, earth, metal, and water elements based on birth information</li>
            <li><strong>Character Meaning</strong> - Positive connotations and cultural significance appropriate for your personality</li>
            <li><strong>Pronunciation</strong> - Harmonious sounds and tones that flow naturally in Mandarin Chinese</li>
            <li><strong>Stroke Count</strong> - Traditional numerology for balance and luck according to Chinese traditions</li>
            <li><strong>Cultural Context</strong> - Ensuring the name is culturally appropriate and avoids unfortunate associations</li>
          </ul>
        </div>
        
        <div class="guide-section">
          <h3>Benefits of Using Our Chinese Name Generator</h3>
          <div class="benefits-grid">
            <div class="benefit-card">
              <h4>Cultural Authenticity</h4>
              <p>Our Chinese name generator creates names that native Chinese speakers would recognize as authentic and appropriate, not awkward translations.</p>
            </div>
            <div class="benefit-card">
              <h4>Personalized Meanings</h4>
              <p>Each name is created with specific meanings that align with your preferences, personality traits, and aspirations.</p>
            </div>
            <div class="benefit-card">
              <h4>Proper Pronunciation</h4>
              <p>We ensure the names generated have balanced tones and are easy to pronounce for both Chinese and non-Chinese speakers.</p>
            </div>
            <div class="benefit-card">
              <h4>Traditional Principles</h4>
              <p>Our algorithm incorporates traditional Chinese naming principles including the Five Elements theory and character stroke balance.</p>
            </div>
          </div>
        </div>
        
        <div class="guide-section">
          <h3>Frequently Asked Questions About Chinese Name Generation</h3>
          
          <div class="faq-section">
            <div class="faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
              <h4 itemprop="name">How does a Chinese name generator work?</h4>
              <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                <p itemprop="text">A Chinese name generator uses algorithms to select appropriate Chinese characters based on your preferences, gender, birth information, and desired meanings. Our advanced generator analyzes thousands of Chinese characters, considering their meanings, pronunciations, and cultural associations to create authentic names that follow traditional Chinese naming principles.</p>
              </div>
            </div>
            
            <div class="faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
              <h4 itemprop="name">Why should I use a Chinese name generator instead of just translating my name?</h4>
              <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                <p itemprop="text">Direct translation or transliteration of non-Chinese names often results in awkward combinations that may have unintended meanings or sound strange to native speakers. A Chinese name generator creates culturally appropriate names that consider phonetics, meaning, and cultural context, resulting in a name that Chinese speakers will find natural and meaningful.</p>
              </div>
            </div>
            
            <div class="faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
              <h4 itemprop="name">Can I get a Chinese name that sounds similar to my English name?</h4>
              <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                <p itemprop="text">Yes, our Chinese name generator can create names that sound phonetically similar to your original name while still maintaining proper Chinese structure and meaning. However, perfect sound matches are sometimes difficult due to the different phonetic systems of Chinese and English. We balance phonetic similarity with cultural appropriateness to create the best possible Chinese name for you.</p>
              </div>
            </div>
            
            <div class="faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
              <h4 itemprop="name">How important is the meaning of Chinese names?</h4>
              <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                <p itemprop="text">The meaning of Chinese names is extremely important in Chinese culture. Unlike many Western names where the original meaning may be forgotten or irrelevant, Chinese people regularly consider the literal meaning of name characters. A well-chosen Chinese name conveys positive qualities, aspirations, or beautiful imagery. Our Chinese name generator with meaning ensures that each character has positive connotations and appropriate cultural significance.</p>
              </div>
            </div>
            
            <div class="faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
              <h4 itemprop="name">Do I need a Chinese surname when using a Chinese name generator?</h4>
              <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                <p itemprop="text">While traditional Chinese names include a surname, foreigners adopting Chinese names often use just a given name without a Chinese surname. However, if you prefer a complete Chinese name, our generator allows you to either specify a Chinese surname or have one suggested based on common Chinese surnames. The choice depends on your personal preference and how you plan to use your Chinese name.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NameGenerator',
  data() {
    return {
      formData: {
        surname: '',
        gender: 'male',
        birthdate: '',
        birthtime: '',
        nameLength: '2',
        style: '',
        meanings: [],
        avoidChars: '',
        additionalInfo: ''
      },
      meaningTags: [
        { label: 'Wisdom & Intelligence', value: 'wisdom' },
        { label: 'Virtue & Morality', value: 'virtue' },
        { label: 'Courage & Strength', value: 'brave' },
        { label: 'Beauty & Elegance', value: 'beauty' },
        { label: 'Success & Achievement', value: 'success' },
        { label: 'Health & Longevity', value: 'health' },
        { label: 'Family & Harmony', value: 'family' },
        { label: 'Wealth & Prosperity', value: 'wealth' },
        { label: 'Happiness & Joy', value: 'happy' },
        { label: 'Literary & Poetic', value: 'poetic' }
      ],
      showResults: false,
      nameResults: [],
      selectedNameIndex: null,
      currentPage: 1,
      totalPages: 1
    }
  },
  metaInfo() {
    return {
      title: 'Chinese Name Generator | Create Your Authentic Chinese Name',
      meta: [
        { name: 'description', content: 'Generate authentic Chinese names with our free Chinese name generator. Create personalized Chinese names with proper meanings and cultural significance based on your preferences.' },
        { name: 'keywords', content: 'chinese name generator, chinese name, generate chinese name, chinese name maker, chinese name creator, mandarin name generator, chinese name with meaning' }
      ]
    }
  },
  methods: {
    toggleMeaning(value) {
      const index = this.formData.meanings.indexOf(value)
      if (index === -1) {
        if (this.formData.meanings.length < 3) {
          this.formData.meanings.push(value)
        }
      } else {
        this.formData.meanings.splice(index, 1)
      }
    },
    resetForm() {
      this.formData = {
        surname: '',
        gender: 'male',
        birthdate: '',
        birthtime: '',
        nameLength: '2',
        style: '',
        meanings: [],
        avoidChars: '',
        additionalInfo: ''
      }
      this.showResults = false
      this.selectedNameIndex = null
    },
    generateNames() {
      // 模拟生成名字的API调用
      // 实际项目中，这里应该调用后端API获取名字推荐
      
      // 生成模拟数据
      const mockNames = []
      
      if (this.formData.gender === 'male') {
        mockNames.push(
          {
            name: '浩然',
            meaning: '胸怀宽广，正直豁达',
            score: 98,
            tags: ['正气', '大气', '智慧'],
            details: {
              meanings: '"浩"指广大，气势磅礴；"然"表示形容词词尾，引申为如此的样子。整体寓意胸怀宽广，气宇轩昂。',
              fiveElements: '浩(水) 然(火) - 水火相济，五行平衡。',
              pronunciation: '声调和谐，读音优美，朗朗上口。',
              origin: '出自《孟子·公孙丑上》："浩然之气，至大至刚。"'
            }
          },
          {
            name: '子轩',
            meaning: '才华横溢，气宇轩昂',
            score: 95,
            tags: ['才华', '阳刚', '贵气'],
            details: {
              meanings: '"子"指有学问、有道德的人；"轩"指高大、气度不凡。整体寓意才华出众，气宇轩昂。',
              fiveElements: '子(水) 轩(火) - 水火相济，五行平衡。',
              pronunciation: '声调平仄相配，读音清晰响亮。',
              origin: '轩字出自《诗经·大雅·文王》："文王在上，於昭于天。周虽旧邦，其命维新。有周不显，帝命不时。文王陟降，在帝左右。"'
            }
          },
          {
            name: '明哲',
            meaning: '聪明睿智，通达事理',
            score: 92,
            tags: ['智慧', '理性', '通达'],
            details: {
              meanings: '"明"指光明、明亮；"哲"指聪明、有智慧。整体寓意聪明睿智，通达事理。',
              fiveElements: '明(火) 哲(水) - 水火相济，五行平衡。',
              pronunciation: '声调搭配和谐，读音朗朗上口。',
              origin: '出自《尚书·周官》："明哲保身"。'
            }
          }
        )
      } else {
        mockNames.push(
          {
            name: '芷若',
            meaning: '如同香草般清雅脱俗',
            score: 97,
            tags: ['淑女', '典雅', '气质'],
            details: {
              meanings: '"芷"是一种香草，比喻女子气质清新；"若"意为似乎、好像，引申为美好。整体寓意女子气质如同幽香般清新脱俗。',
              fiveElements: '芷(木) 若(木) - 木木相生，五行和谐。',
              pronunciation: '声调和缓，读音柔美。',
              origin: '芷出自屈原《离骚》："纫秋兰以为佩，搴芷若以为襦。"'
            }
          },
          {
            name: '雨晴',
            meaning: '雨过天晴，美好向上',
            score: 94,
            tags: ['清新', '希望', '柔美'],
            details: {
              meanings: '"雨"指雨水；"晴"指晴朗。整体寓意如雨过天晴般清新美好，充满希望。',
              fiveElements: '雨(水) 晴(火) - 水火相济，五行平衡。',
              pronunciation: '声调起伏有度，读音优美。',
              origin: '晴字化用自古诗"雨过天晴云破处，这般颜色做将来"。'
            }
          },
          {
            name: '静怡',
            meaning: '安静优雅，心情愉悦',
            score: 93,
            tags: ['恬静', '优雅', '平和'],
            details: {
              meanings: '"静"指安静、平静；"怡"指愉快、和悦。整体寓意性情恬静，心情愉悦。',
              fiveElements: '静(金) 怡(木) - 金生水生木，五行相生。',
              pronunciation: '声调和谐，读音婉转悦耳。',
              origin: '怡字出自《诗经·小雅·鹿鸣》："德音孔昭，视民不惑。君子如怡，君子如频。"'
            }
          }
        )
      }

      this.nameResults = mockNames
      this.showResults = true
      this.selectedNameIndex = null
      this.currentPage = 1
      this.totalPages = Math.ceil(mockNames.length / 5)
    },
    selectName(index) {
      if (this.selectedNameIndex === index) {
        this.selectedNameIndex = null
      } else {
        this.selectedNameIndex = index
      }
    },
    getScoreClass(score) {
      if (score >= 95) return 'score-excellent'
      if (score >= 90) return 'score-great'
      if (score >= 80) return 'score-good'
      return 'score-average'
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++
      }
    }
  }
}
</script>

<style scoped>
.name-generator-page {
  padding: 40px 0 80px;
  background-color: #f9f9f9;
  min-height: 100vh;
}

.page-header {
  text-align: center;
  margin-bottom: 40px;
}

.page-title {
  font-size: 2.2rem;
  color: #333;
  margin-bottom: 10px;
}

.page-description {
  color: #666;
  font-size: 1.1rem;
}

.seo-intro {
  max-width: 800px;
  margin: 0 auto 2rem;
  text-align: center;
  font-size: 1.1rem;
  line-height: 1.6;
  color: #555;
}

.generator-content {
  display: flex;
  gap: 30px;
}

/* 表单样式 */
.input-section {
  flex: 0 0 40%;
}

.form-card {
  background: #fff;
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
}

.form-title {
  font-size: 1.4rem;
  margin-bottom: 25px;
  color: #333;
  position: relative;
  padding-bottom: 10px;
}

.form-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 40px;
  height: 3px;
  background-color: #e74c3c;
}

.form-section-title {
  margin-top: 30px;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
  color: #444;
}

.form-group input[type="text"],
.form-group input[type="date"],
.form-group input[type="time"],
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 12px 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  color: #333;
  transition: border-color 0.3s;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  border-color: #e74c3c;
  outline: none;
}

.radio-group {
  display: flex;
  gap: 20px;
}

.radio-label {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.radio-label input {
  margin-right: 8px;
  cursor: pointer;
}

.tag-selector {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 5px;
}

.meaning-tag {
  padding: 8px 15px;
  background-color: #f1f1f1;
  border-radius: 20px;
  font-size: 0.9rem;
  color: #555;
  cursor: pointer;
  transition: all 0.3s;
}

.meaning-tag:hover {
  background-color: #e0e0e0;
}

.meaning-tag.active {
  background-color: #e74c3c;
  color: white;
}

.form-actions {
  display: flex;
  gap: 15px;
  margin-top: 30px;
}

.btn-primary, .btn-secondary, .btn-tertiary {
  padding: 12px 25px;
  border-radius: 5px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s;
  border: none;
}

.btn-primary {
  background-color: #e74c3c;
  color: white;
  flex: 1;
}

.btn-primary:hover {
  background-color: #c0392b;
}

.btn-secondary {
  background-color: white;
  color: #e74c3c;
  border: 1px solid #e74c3c;
}

.btn-secondary:hover {
  background-color: #f8f9fa;
}

.btn-tertiary {
  background-color: #f1f1f1;
  color: #555;
}

.btn-tertiary:hover {
  background-color: #e0e0e0;
}

/* 结果样式 */
.result-section {
  flex: 0 0 55%;
}

.result-header {
  margin-bottom: 25px;
  text-align: center;
}

.result-header h2 {
  font-size: 1.6rem;
  color: #333;
  margin-bottom: 10px;
}

.result-header p {
  color: #666;
}

.result-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 30px;
}

.name-result-card {
  background: #fff;
  border-radius: 10px;
  padding: 25px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  position: relative;
  transition: all 0.3s;
  cursor: pointer;
}

.name-result-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}

.name-score-badge {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  border-radius: 50%;
}

.score-excellent {
  background-color: #e74c3c;
}

.score-great {
  background-color: #f39c12;
}

.score-good {
  background-color: #27ae60;
}

.score-average {
  background-color: #7f8c8d;
}

.result-name {
  font-size: 2rem;
  margin-bottom: 15px;
  color: #333;
}

.name-meaning {
  color: #555;
  margin-bottom: 20px;
  line-height: 1.5;
}

.name-details {
  border-top: 1px solid #eee;
  padding-top: 20px;
  margin-top: 15px;
}

.detail-item {
  margin-bottom: 15px;
}

.detail-item h4 {
  font-size: 1rem;
  color: #444;
  margin-bottom: 5px;
}

.detail-item p {
  color: #666;
  line-height: 1.6;
}

.name-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 15px;
  margin-bottom: 20px;
}

.tag {
  background-color: #f8f9fa;
  padding: 5px 12px;
  border-radius: 20px;
  font-size: 0.9rem;
  color: #555;
}

.name-actions {
  display: flex;
  gap: 15px;
  margin-top: 20px;
}

.name-actions button {
  flex: 1;
}

.name-expand {
  text-align: center;
  color: #e74c3c;
  margin-top: 10px;
  font-weight: 500;
}

.result-pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  margin: 20px 0;
}

.btn-pagination {
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 8px 15px;
  cursor: pointer;
  transition: all 0.3s;
}

.btn-pagination:hover:not(:disabled) {
  background-color: #f1f1f1;
}

.btn-pagination:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.page-info {
  font-size: 0.9rem;
  color: #666;
}

.result-actions {
  display: flex;
  gap: 15px;
  margin-top: 30px;
}

.result-actions button {
  flex: 1;
}

.name-generator-guide {
  margin-top: 4rem;
  padding: 2rem;
  background-color: #f9f9f9;
  border-radius: 8px;
}

.name-generator-guide h2 {
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 1rem;
}

.guide-section {
  margin-top: 1.5rem;
}

.guide-section h3 {
  font-size: 1.2rem;
  color: #444;
  margin-bottom: 0.75rem;
}

.guide-section p {
  font-size: 1rem;
  line-height: 1.6;
  color: #555;
  margin-bottom: 1rem;
}

.guide-section ul {
  padding-left: 1.5rem;
}

.guide-section li {
  margin-bottom: 0.5rem;
  font-size: 1rem;
  line-height: 1.5;
  color: #555;
}

.benefits-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.benefit-card {
  background-color: #fff;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.05);
  text-align: center;
}

.benefit-card h4 {
  font-size: 1.1rem;
  color: #333;
  margin-bottom: 10px;
}

.benefit-card p {
  font-size: 0.9rem;
  color: #666;
  line-height: 1.5;
}

.faq-section {
  margin-top: 2rem;
}

.faq-item {
  background-color: #f8f9fa;
  border-radius: 8px;
  padding: 15px 20px;
  margin-bottom: 15px;
  border: 1px solid #eee;
}

.faq-item h4 {
  font-size: 1.1rem;
  color: #333;
  margin-bottom: 10px;
  cursor: pointer;
}

.faq-item p {
  font-size: 0.9rem;
  color: #666;
  line-height: 1.6;
  margin-bottom: 10px;
}

/* 响应式调整 */
@media (max-width: 992px) {
  .generator-content {
    flex-direction: column;
  }
  
  .input-section, .result-section {
    flex: none;
    width: 100%;
  }
}

@media (max-width: 576px) {
  .form-actions, .name-actions, .result-actions {
    flex-direction: column;
  }
  
  .radio-group {
    flex-direction: column;
    gap: 10px;
  }
  
  .result-name {
    font-size: 1.8rem;
  }
}
</style> 