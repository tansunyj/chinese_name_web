<template>
  <div class="name-generator-page">
    <div class="container">
      <div class="page-header">
        <h1 class="page-title">智能起名</h1>
        <p class="page-description">根据您提供的信息，我们将为您推荐最合适的名字</p>
      </div>

      <div class="generator-content">
        <!-- 左侧表单 -->
        <div class="input-section">
          <div class="form-card">
            <h2 class="form-title">基本信息</h2>
            
            <div class="form-group">
              <label for="surname">姓氏</label>
              <input type="text" id="surname" v-model="formData.surname" placeholder="请输入姓氏" />
            </div>
            
            <div class="form-group">
              <label>性别</label>
              <div class="radio-group">
                <label class="radio-label">
                  <input type="radio" v-model="formData.gender" value="male" />
                  <span>男孩</span>
                </label>
                <label class="radio-label">
                  <input type="radio" v-model="formData.gender" value="female" />
                  <span>女孩</span>
                </label>
              </div>
            </div>
            
            <div class="form-group">
              <label for="birthdate">出生日期</label>
              <input type="date" id="birthdate" v-model="formData.birthdate" />
            </div>
            
            <div class="form-group">
              <label for="birthtime">出生时间</label>
              <input type="time" id="birthtime" v-model="formData.birthtime" />
            </div>
            
            <h2 class="form-title form-section-title">名字偏好</h2>
            
            <div class="form-group">
              <label>名字字数</label>
              <div class="radio-group">
                <label class="radio-label">
                  <input type="radio" v-model="formData.nameLength" value="1" />
                  <span>单字</span>
                </label>
                <label class="radio-label">
                  <input type="radio" v-model="formData.nameLength" value="2" />
                  <span>双字</span>
                </label>
              </div>
            </div>
            
            <div class="form-group">
              <label>名字风格</label>
              <select v-model="formData.style">
                <option value="">请选择名字风格</option>
                <option value="traditional">古典文雅</option>
                <option value="modern">现代时尚</option>
                <option value="poetry">诗词典故</option>
                <option value="nature">自然灵动</option>
                <option value="fortune">吉祥如意</option>
              </select>
            </div>
            
            <div class="form-group">
              <label>期望寓意</label>
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
              <label for="avoidChars">避免使用的字</label>
              <input type="text" id="avoidChars" v-model="formData.avoidChars" placeholder="例如：同音字、家族已有名字中的字等" />
            </div>
            
            <div class="form-group">
              <label for="additionalInfo">其他要求</label>
              <textarea id="additionalInfo" v-model="formData.additionalInfo" rows="3" placeholder="请输入您的其他特殊要求"></textarea>
            </div>
            
            <div class="form-actions">
              <button class="btn-primary" @click="generateNames">开始智能起名</button>
              <button class="btn-secondary" @click="resetForm">重置表单</button>
            </div>
          </div>
        </div>
        
        <!-- 右侧结果 -->
        <div class="result-section" v-if="showResults">
          <div class="result-header">
            <h2>为您推荐的名字</h2>
            <p>根据您提供的信息，我们为您精选了以下名字</p>
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
                  <h4>字义分析</h4>
                  <p>{{ result.details.meanings }}</p>
                </div>
                <div class="detail-item">
                  <h4>五行分析</h4>
                  <p>{{ result.details.fiveElements }}</p>
                </div>
                <div class="detail-item">
                  <h4>音律分析</h4>
                  <p>{{ result.details.pronunciation }}</p>
                </div>
                <div class="detail-item">
                  <h4>诗词出处</h4>
                  <p>{{ result.details.origin }}</p>
                </div>
                <div class="name-tags">
                  <span class="tag" v-for="(tag, tagIndex) in result.tags" :key="tagIndex">{{ tag }}</span>
                </div>
              </div>
              <div class="name-actions" v-if="selectedNameIndex === index">
                <button class="btn-secondary">收藏此名</button>
                <button class="btn-primary">查看完整分析</button>
              </div>
              <div class="name-expand" v-else>
                <span>查看分析 <i class="icon-arrow-down"></i></span>
              </div>
            </div>
          </div>
          
          <div class="result-pagination" v-if="nameResults.length > 0">
            <button class="btn-pagination" :disabled="currentPage === 1" @click="prevPage">上一页</button>
            <span class="page-info">{{ currentPage }}/{{ totalPages }}</span>
            <button class="btn-pagination" :disabled="currentPage === totalPages" @click="nextPage">下一页</button>
          </div>
          
          <div class="result-actions">
            <button class="btn-tertiary">重新生成</button>
            <button class="btn-primary">保存结果</button>
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
        { label: '才华智慧', value: 'wisdom' },
        { label: '品德高尚', value: 'virtue' },
        { label: '勇敢坚强', value: 'brave' },
        { label: '秀丽气质', value: 'beauty' },
        { label: '事业成功', value: 'success' },
        { label: '健康平安', value: 'health' },
        { label: '家庭和睦', value: 'family' },
        { label: '财富丰裕', value: 'wealth' },
        { label: '快乐幸福', value: 'happy' },
        { label: '文雅诗意', value: 'poetic' }
      ],
      showResults: false,
      nameResults: [],
      selectedNameIndex: null,
      currentPage: 1,
      totalPages: 1
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