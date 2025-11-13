<template>
  <div v-if="visible" class="surname-modal">
    <div class="surname-modal-content">
      <button class="modal-close" @click="close">&times;</button>
      <div class="modal-header">
        <div class="modal-surname">
          <div class="modal-chinese">{{ surname.chinese }}</div>
          <div class="modal-pinyin">{{ surname.pinyin }}</div>
        </div>
      </div>
      
      <div class="modal-body">
        <div class="modal-section">
          <h3>Meaning</h3>
          <p>{{ surname.detailedMeaning || defaultMeaning }}</p>
        </div>
        
        <div class="modal-section" v-if="surname.origin">
          <h3>Origin</h3>
          <p>{{ surname.origin }}</p>
        </div>
        
        <div class="modal-section" v-if="surname.historical_figures">
          <h3>Historical Figures</h3>
          <p>{{ surname.historical_figures }}</p>
        </div>
        
        <div class="modal-section">
          <h3>Prevalence</h3>
          <div class="modal-popularity">
            <div class="popularity-stars modal-stars">
              <span v-for="n in 5" :key="n" class="star" :class="{ 'filled': n <= surname.prevalence }">★</span>
            </div>
            <span class="prevalence-text">
              {{ getPrevalenceText(surname.prevalence) }}
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="modal-overlay" @click="close"></div>
  </div>
</template>

<script>
export default {
  name: 'SurnameDetailModal',
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    surname: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    defaultMeaning() {
      // 如果没有详细解释，生成一个默认的
      if (this.surname.chinese && this.surname.pinyin && this.surname.meaning) {
        return `The surname ${this.surname.pinyin} (${this.surname.chinese}) has significant meaning in Chinese culture as it relates to "${this.surname.meaning}". This character has been used as a surname for many generations and carries cultural importance in Chinese naming tradition. Throughout history, individuals with this surname have contributed to various aspects of Chinese society, maintaining family lineage while creating distinctive legacies across different periods.`;
      }
      return '';
    }
  },
  methods: {
    getPrevalenceText(prevalence) {
      switch(prevalence) {
        case 5: return 'Extremely common (Top 10)';
        case 4: return 'Very common (Top 50)';
        case 3: return 'Common (Top 100)';
        case 2: return 'Moderately common';
        case 1: return 'Less common';
        default: return 'Rare';
      }
    },
    close() {
      this.$emit('close');
    }
  }
}
</script>

<style scoped>
/* 详情弹窗样式 */
.surname-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.surname-modal-content {
  background-color: white;
  width: 90%;
  max-width: 500px;
  max-height: 90vh;
  border-radius: 8px;
  box-shadow: 0 5px 30px rgba(0,0,0,0.2);
  position: relative;
  z-index: 1010;
  overflow-y: auto;
  padding: 25px;
}

.modal-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.5);
  z-index: 1000;
}

.modal-close {
  position: absolute;
  top: 15px;
  right: 15px;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: #666;
  cursor: pointer;
  padding: 0;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.2s;
}

.modal-close:hover {
  background-color: #f1f1f1;
  color: #e60012;
}

.modal-header {
  margin-bottom: 20px;
  border-bottom: 1px solid #eee;
  padding-bottom: 15px;
}

.modal-surname {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.modal-chinese {
  font-size: 3rem;
  font-weight: bold;
  color: #e60012;
}

.modal-pinyin {
  font-size: 1.2rem;
  color: #666;
  margin-top: 5px;
}

.modal-body {
  padding-right: 10px;
}

.modal-section {
  margin-bottom: 20px;
}

.modal-section h3 {
  font-size: 1.1rem;
  color: #333;
  margin-bottom: 8px;
}

.modal-section p {
  color: #555;
  line-height: 1.6;
  margin: 0;
}

.modal-popularity {
  display: flex;
  align-items: center;
  gap: 10px;
}

.modal-stars {
  font-size: 1.3rem;
}

.star {
  color: #ddd;
  font-size: 1.2rem;
}

.star.filled {
  color: #ffb400;
}

.prevalence-text {
  color: #666;
  font-size: 0.9rem;
}
</style>
