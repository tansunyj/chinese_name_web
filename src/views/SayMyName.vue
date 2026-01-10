<template>
  <div class="say-my-name-page">
    <div class="container">
      <!-- 面包屑导航 -->
      <BreadcrumbNav />
      
      <h1 class="page-title">How to Say "My Name Is" in Chinese: Pronunciation & Spelling Guide (2026)</h1>
      
      <div class="seo-intro">
        <div class="meta-info">
          <span>Updated: Jan 2026</span> • <span>Interactive Guide</span>
        </div>
        <p class="seo-description">
          Asking "How to say my name is in Chinese?" is the first step to connecting with locals. 
          Unlike English, Chinese is a tonal language. This guide will teach you the standard phrases, 
          and let you <strong>practice with your own name</strong> instantly.
        </p>
      </div>

      <div class="content">
        <!-- 卡片 1: 核心互动区 -->
        <section class="guide-section interactive-card">
          <h2>🎧 Interactive Practice: Try Your Name</h2>
          <p>Enter your Chinese name below (or English name to hear the transliteration) and click the speaker icons.</p>
          
          <!-- 名字输入框 -->
          <div class="name-input-container">
            <label for="userName">Your Name (Chinese or English):</label>
            <div class="input-wrapper">
              <input 
                id="userName"
                type="text" 
                v-model="userChineseName" 
                placeholder="e.g. 大卫 (Type here)"
                class="demo-input"
              />
              <!-- 名字播放按钮 -->
              <button 
                class="name-play-btn" 
                @click="playNameOnly" 
                :disabled="!userChineseName"
                :class="{ 'active': userChineseName }"
                title="Listen to name pronunciation"
              >
                🔊
              </button>
            </div>
            <p class="input-hint" v-if="!userChineseName">
              Don't have a Chinese name yet? <router-link to="/english-to-chinese-translator" class="hint-link">Get one freely here</router-link>.
            </p>
          </div>

          <p class="instruction" v-if="userChineseName">
            Great! Now listen to how you introduce yourself as <strong>{{ userChineseName }}</strong>:
          </p>

          <!-- 句型展示网格 -->
          <div class="phrases-grid">
            <!-- 句型 1 -->
            <div class="phrase-card">
              <div class="phrase-header">
                <span class="badge">Casual</span>
                <span class="usage-label">For Friends</span>
              </div>
              <div class="chinese-text">
                我叫 <span class="highlight-name">{{ userChineseName || '...' }}</span>
                <button class="play-btn" @click="playDynamicAudio('我叫')">
                  <span v-if="isPlaying === '我叫'">🔊</span>
                  <span v-else>▶️</span>
                </button>
              </div>
              <div class="pinyin">Wǒ jiào {{ userChineseName ? '[Name]' : '...' }}</div>
              <div class="english">"I am called..."</div>
            </div>

            <!-- 句型 2 -->
            <div class="phrase-card">
              <div class="phrase-header">
                <span class="badge blue">Formal</span>
                <span class="usage-label">For Business</span>
              </div>
              <div class="chinese-text">
                我的名字是 <span class="highlight-name">{{ userChineseName || '...' }}</span>
                <button class="play-btn" @click="playDynamicAudio('我的名字是')">
                   <span v-if="isPlaying === '我的名字是'">🔊</span>
                   <span v-else>▶️</span>
                </button>
              </div>
              <div class="pinyin">Wǒ de míng zì shì {{ userChineseName ? '[Name]' : '...' }}</div>
              <div class="english">"My name is..."</div>
            </div>
          </div>
        </section>

        <!-- 卡片 2: 拼写原理 -->
        <section class="guide-section">
          <h2>🤔 How to "Spell" in Chinese? (The Big Misconception)</h2>
          <p>Many people search for <strong>"how to spell in Chinese words"</strong>. However, Chinese does not use an alphabet like A-B-C. You cannot "spell" an English name letter-by-letter.</p>
          
          <div class="highlight-box">
            <h3>We use Transliteration (音译)</h3>
            <p>Instead of spelling, we find Chinese characters that <strong>sound similar</strong> to your English name.</p>
            
            <div class="example-grid">
              <div class="example-item wrong">
                <span class="icon">❌</span>
                <h4>Spelling "David"</h4>
                <p>D-A-V-I-D</p>
                <small>(Does not exist in Chinese)</small>
              </div>
              <div class="example-item right">
                <span class="icon">✅</span>
                <h4>Transliterating "David"</h4>
                <p class="chinese-lg">大卫 (Dà Wèi)</p>
                <small>(Sounds like Da-Wei)</small>
              </div>
            </div>
          </div>
        </section>

        <!-- 卡片 3: FAQ -->
        <section class="guide-section">
          <h2>💬 Common Questions</h2>
          <div class="faq-list">
            <div class="faq-item" v-for="(faq, index) in faqs" :key="index" @click="toggleFaq(index)" :class="{ 'active': expandedFaqs[index] }">
              <div class="faq-question">
                <h3>{{ faq.question }}</h3>
                <span class="toggle-icon">{{ expandedFaqs[index] ? '−' : '+' }}</span>
              </div>
              <transition name="fade">
                <div class="faq-answer" v-show="expandedFaqs[index]">
                  <p>{{ faq.answer }}</p>
                </div>
              </transition>
            </div>
          </div>
        </section>

        <!-- Explore More 组件 (现在完美对齐) -->
        <ExploreMore :currentPath="$route.path" />
      </div>
    </div>
  </div>
</template>

<script>
import BreadcrumbNav from '@/components/BreadcrumbNav.vue';
import ExploreMore from '@/components/ExploreMore.vue';

export default {
  name: 'SayMyNameGuide',
  components: {
    BreadcrumbNav,
    ExploreMore
  },
  data() {
    return {
      userChineseName: '',
      isPlaying: null,
      expandedFaqs: [true, false, false],
      faqs: [
        {
          question: 'How to write "Chinese" (Language) in characters?',
          answer: 'The word for the Chinese language is written as 中文 (Zhōng wén) or 汉语 (Hàn yǔ). If you refer to a Chinese person, it is 中国人 (Zhōng guó rén).'
        },
        {
          question: 'How do I ask "What is your name?"',
          answer: 'You can say "Nǐ jiào shén me míng zì?" (你叫什么名字?). It is polite to say this after you have introduced yourself first.'
        },
        {
          question: 'Do tones really matter?',
          answer: 'Yes! Mandarin has 4 tones. However, when saying foreign names, locals are usually forgiving if your tones are not perfect. The most important part is getting the syllables right.'
        }
      ]
    };
  },
  methods: {
    playNameOnly() {
      if (!this.userChineseName) return;
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(this.userChineseName);
        utterance.lang = "zh-CN";
        utterance.rate = 0.8;
        speechSynthesis.speak(utterance);
      }
    },
    playDynamicAudio(prefixPhrase) {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel(); 
        let textToRead = prefixPhrase;
        if (this.userChineseName && this.userChineseName.trim() !== '') {
          textToRead = `${prefixPhrase}${this.userChineseName}`;
        }
        const utterance = new SpeechSynthesisUtterance(textToRead);
        utterance.lang = "zh-CN"; 
        utterance.rate = 0.8; 
        this.isPlaying = prefixPhrase;
        utterance.onend = () => { this.isPlaying = null; };
        speechSynthesis.speak(utterance);
      } else {
        alert("Audio not supported.");
      }
    },
    toggleFaq(index) {
      this.$set(this.expandedFaqs, index, !this.expandedFaqs[index]);
    }
  },
  head() {
    return {
      title: "How to Say 'My Name Is' in Chinese: Pronunciation & Spelling Guide (2026)",
      meta: [
        { name: 'description', content: 'Learn how to say "My name is" in Chinese. Enter your name to hear the audio pronunciation instantly. Guide on spelling English names in Chinese.' },
        { name: 'keywords', content: 'how to say my name is in chinese,how to spell in chinese,chinese introductions,pronunciation guide' }
      ]
    };
  }
}
</script>

<style scoped>
/* =========== 页面布局 (复制自 Fantasy Guide 模板) =========== */
.say-my-name-page {
  padding: 20px 0 100px;
  min-height: 100vh;
  background-color: #f8f9fa; /* 统一背景色 */
}

.container {
  max-width: 1200px; /* 关键：与模板一致的宽度 */
  margin: 0 auto;
  padding: 0 20px;
  width: 100%;
  box-sizing: border-box;
}

.page-title {
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 20px;
  margin-top: 50px;
  text-align: center;
  background: linear-gradient(135deg, #e60012 0%, #ff5e62 100%); /* 使用红色系渐变 */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 800;
}

.seo-intro {
  max-width: 900px;
  margin: 0 auto 3rem;
  text-align: center;
}

.meta-info {
  color: #888;
  font-size: 0.9rem;
  margin-bottom: 15px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.seo-description {
  font-size: 1.1rem;
  line-height: 1.6;
  color: #555;
}

/* =========== 内容卡片布局 =========== */
.content {
  display: flex;
  flex-direction: column;
  gap: 50px; /* 卡片间距 */
}

.guide-section {
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05); /* 统一阴影 */
  padding: 40px;
  border-top: 4px solid transparent; /* 预留顶部边框位置 */
}

/* 卡片个性化边框色 */
.interactive-card { border-top-color: #e60012; }
.guide-section:nth-child(2) { border-top-color: #3b82f6; }
.guide-section:nth-child(3) { border-top-color: #10b981; }

.guide-section h2 {
  font-size: 2rem;
  color: #333;
  margin-bottom: 25px;
  padding-bottom: 15px;
  border-bottom: 2px solid #f0f0f0;
}

.guide-section p {
  color: #444;
  line-height: 1.7;
  margin-bottom: 20px;
  font-size: 1.05rem;
}

/* =========== 互动区样式 =========== */
.name-input-container {
  background: #fff8f8;
  border: 2px dashed #ffcccb;
  padding: 30px;
  border-radius: 12px;
  text-align: center;
  margin: 20px 0 30px;
}

.name-input-container label {
  display: block;
  font-weight: bold;
  color: #e60012;
  margin-bottom: 15px;
  font-size: 1.1rem;
}

.input-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  max-width: 500px;
  margin: 0 auto;
}

.demo-input {
  flex-grow: 1;
  padding: 15px 20px;
  font-size: 1.2rem;
  border: 2px solid #eee;
  border-radius: 8px;
  text-align: left;
  transition: all 0.3s;
}

.demo-input:focus {
  border-color: #e60012;
  outline: none;
  box-shadow: 0 0 0 3px rgba(230,0,18,0.1);
}

.demo-input::placeholder { color: #aaa; transition: color 0.2s; }
.demo-input:focus::placeholder { color: transparent; }

.name-play-btn {
  width: 54px;
  height: 54px;
  background: #fff;
  border: 2px solid #eee;
  border-radius: 10px;
  font-size: 1.5rem;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
}

.name-play-btn.active {
  background: #e60012;
  color: white;
  border-color: #e60012;
  box-shadow: 0 5px 15px rgba(230,0,18,0.3);
}

.phrases-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 25px;
  margin-top: 20px;
}

.phrase-card {
  background: #f9fafb;
  border: 1px solid #e5e7eb;
  padding: 25px;
  border-radius: 12px;
  transition: transform 0.2s;
}

.phrase-card:hover {
  transform: translateY(-5px);
  border-color: #d1d5db;
  box-shadow: 0 10px 20px rgba(0,0,0,0.05);
}

.phrase-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
}

.badge {
  background: #e60012;
  color: white;
  padding: 4px 10px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: bold;
}
.badge.blue { background: #3b82f6; }

.usage-label { font-size: 0.85rem; color: #888; font-style: italic; }

.chinese-text {
  font-size: 2rem;
  font-weight: 800;
  color: #1f2937;
  display: flex;
  align-items: center;
  gap: 15px;
  margin: 15px 0;
  flex-wrap: wrap;
}

.highlight-name {
  color: #e60012;
  text-decoration: underline;
  text-decoration-style: dotted;
}

.play-btn {
  width: 40px;
  height: 40px;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
}
.play-btn:hover { background: #e60012; color: white; border-color: #e60012; }

.pinyin { font-size: 1.1rem; color: #e60012; margin-bottom: 5px; font-weight: 500; }

/* =========== 拼写误区样式 =========== */
.highlight-box {
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, rgba(147, 51, 234, 0.05) 100%);
  border-left: 4px solid #3b82f6;
  padding: 25px;
  border-radius: 8px;
  margin-top: 20px;
}

.highlight-box h3 {
  color: #3b82f6;
  margin-top: 0;
  margin-bottom: 15px;
}

.example-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-top: 20px;
}

.example-item {
  background: white;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  border: 2px solid transparent;
}

.example-item.wrong { border-color: #fecaca; background: #fef2f2; }
.example-item.right { border-color: #a7f3d0; background: #ecfdf5; }

.icon { font-size: 1.5rem; display: block; margin-bottom: 10px; }
.chinese-lg { font-size: 1.5rem; font-weight: bold; color: #059669; }

/* =========== FAQ 样式 =========== */
.faq-item {
  border-bottom: 1px solid #eee;
  padding: 20px 0;
  cursor: pointer;
}

.faq-question {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.faq-question h3 {
  font-size: 1.1rem;
  color: #333;
  margin: 0;
  font-weight: 600;
}

.toggle-icon { font-size: 1.5rem; color: #e60012; font-weight: 300; }

.faq-answer {
  padding-top: 15px;
  color: #666;
}

/* 链接样式 */
.hint-link { color: #e60012; font-weight: bold; text-decoration: underline; }

/* 响应式适配 */
@media (max-width: 768px) {
  .page-title { font-size: 1.8rem; margin-top: 30px; }
  .guide-section { padding: 25px; }
  .example-grid { grid-template-columns: 1fr; }
  .big-char { font-size: 3rem; }
  .phrases-grid { grid-template-columns: 1fr; }
  .input-wrapper { flex-direction: column; }
  .name-play-btn { width: 100%; }
}
</style>
