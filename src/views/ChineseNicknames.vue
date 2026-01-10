<template>
  <div class="nicknames-page">
    <div class="container">
      <BreadcrumbNav />
      
      <h1 class="page-title">50+ Cute Chinese Nicknames (Xiao Ming) for Babies, Couples & Friends (2026)</h1>
      
      <div class="seo-intro">
        <div class="meta-info">
          <span>Updated: Jan 2026</span> • <span>Culture & Trends</span>
        </div>
        <p class="seo-description">
          Have you heard someone being called "Maomao", "Doudou" or even "Dumpling"? These are <strong>Chinese Nicknames (小名 - Xiǎo Míng)</strong>. 
          They often use <strong>Reduplication (A-A pattern)</strong> or food names to sound cute. 
          These names are extremely popular for <strong>babies, children, and close couples</strong> in China.
        </p>
      </div>

      <div class="content">
        <!-- 卡片 1: Maomao 现象级卡片 -->
        <section class="guide-section highlight-section">
          <h2>🌟 The "Maomao" Phenomenon</h2>
          <div class="spotlight-wrapper">
            <div class="spotlight-left">
              <div class="big-char">毛毛</div>
              <div class="big-pinyin">Máo Mao</div>
              <button class="play-btn-large" @click="playAudio('毛毛')">🔊 Listen</button>
            </div>
            <div class="spotlight-right">
              <div class="meaning-box">
                <h4>Literal Meaning</h4>
                <p>Fur, Feather, Tiny, or Soft.</p>
              </div>
              <div class="context-box">
                <h4>Cultural Context</h4>
                <p>It implies something soft, small, and precious. It is a very common childhood nickname for boys and girls (and yes, sometimes cats too!).</p>
              </div>
              <div class="fun-fact">
                <em>🌟 Fun Fact: Maomao is also the beloved protagonist of the hit anime "The Apothecary Diaries".</em>
              </div>
            </div>
          </div>
        </section>

        <!-- 卡片 2: 食物系 (黄色主题) -->
        <section class="guide-section food-section">
          <h2>🥟 1. Food-Themed (The "Yummy" List)</h2>
          <p class="section-desc">Calling a baby by a food name is a huge trend. It signifies that the child is "sweet" and "edible" (in a cute way).</p>
          
          <div class="nickname-grid">
            <div class="name-card food-card" v-for="(name, index) in foodNicknames" :key="'food-'+index" @click="playAudio(name.char)">
              <div class="card-top">
                <span class="nc-char">{{ name.char }}</span>
                <button class="mini-play-btn" @click.stop="playAudio(name.char)">🔊</button>
              </div>
              <div class="nc-pinyin">{{ name.pinyin }}</div>
              <div class="nc-meaning">{{ name.meaning }}</div>
              <span class="nc-badge food-badge">Food</span>
            </div>
          </div>
        </section>

        <!-- 卡片 3: 自然系 (绿色主题) -->
        <section class="guide-section nature-section">
          <h2>🌿 2. Nature & Animals (The "Wild" List)</h2>
          <p class="section-desc">Inspired by the beauty of nature, these names are poetic yet adorable.</p>
          
          <div class="nickname-grid">
            <div class="name-card nature-card" v-for="(name, index) in natureNicknames" :key="'nature-'+index" @click="playAudio(name.char)">
              <div class="card-top">
                <span class="nc-char">{{ name.char }}</span>
                <button class="mini-play-btn" @click.stop="playAudio(name.char)">🔊</button>
              </div>
              <div class="nc-pinyin">{{ name.pinyin }}</div>
              <div class="nc-meaning">{{ name.meaning }}</div>
              <span class="nc-badge nature-badge">Nature</span>
            </div>
          </div>
        </section>

        <!-- 卡片 4: 特质系 (蓝色主题) -->
        <section class="guide-section trait-section">
          <h2>✨ 3. Personality & Virtues (The "Good Kid" List)</h2>
          <p class="section-desc">Parents often choose these nicknames to wish for good traits like intelligence, health, or happiness.</p>
          
          <div class="nickname-grid">
            <div class="name-card trait-card" v-for="(name, index) in traitNicknames" :key="'trait-'+index" @click="playAudio(name.char)">
              <div class="card-top">
                <span class="nc-char">{{ name.char }}</span>
                <button class="mini-play-btn" @click.stop="playAudio(name.char)">🔊</button>
              </div>
              <div class="nc-pinyin">{{ name.pinyin }}</div>
              <div class="nc-meaning">{{ name.meaning }}</div>
              <span class="nc-badge trait-badge">Virtue</span>
            </div>
          </div>
        </section>

        <!-- 卡片 5: 经典叠词 (红色主题) -->
        <section class="guide-section classic-section">
          <h2>🏮 4. Classic "A-A" Nicknames (Timeless)</h2>
          <p class="section-desc">The most traditional way to form a nickname is repeating a character. You will hear these everywhere in China.</p>
          
          <div class="nickname-grid">
            <div class="name-card classic-card" v-for="(name, index) in classicNicknames" :key="'classic-'+index" @click="playAudio(name.char)">
              <div class="card-top">
                <span class="nc-char">{{ name.char }}</span>
                <button class="mini-play-btn" @click.stop="playAudio(name.char)">🔊</button>
              </div>
              <div class="nc-pinyin">{{ name.pinyin }}</div>
              <div class="nc-meaning">{{ name.meaning }}</div>
              <span class="nc-badge classic-badge">{{ name.type }}</span>
            </div>
          </div>
        </section>

        <!-- 宠物导流卡片 -->
        <section class="guide-section link-section">
          <div class="link-content">
            <h3>🐶 Also looking for Pet Names?</h3>
            <p>If you specifically need a name for a dog or cat, check our dedicated pet guides:</p>
            <div class="link-buttons">
              <router-link to="/chinese-dog-names" class="link-btn">🐶 Chinese Dog Names</router-link>
              <router-link to="/chinese-cat-names" class="link-btn">🐱 Chinese Cat Names</router-link>
            </div>
          </div>
        </section>

        <ExploreMore :currentPath="$route.path" />
      </div>
    </div>
  </div>
</template>

<script>
import BreadcrumbNav from '@/components/BreadcrumbNav.vue';
import ExploreMore from '@/components/ExploreMore.vue';

export default {
  name: 'ChineseNicknames',
  components: {
    BreadcrumbNav,
    ExploreMore
  },
  data() {
    return {
      // 1. 食物系
      foodNicknames: [
        { char: '小汤圆', pinyin: 'Xiǎo Tāng Yuán', meaning: 'Little Sticky Rice Ball' },
        { char: '饺子', pinyin: 'Jiǎo Zi', meaning: 'Dumpling' },
        { char: '豆包', pinyin: 'Dòu Bāo', meaning: 'Bean Bun (Chubby)' },
        { char: '肉肉', pinyin: 'Ròu Ròu', meaning: 'Meaty / Chubby' },
        { char: '糖糖', pinyin: 'Táng Táng', meaning: 'Candy / Sugar' },
        { char: '米粒', pinyin: 'Mǐ Lì', meaning: 'Rice Grain (Tiny)' },
        { char: '可乐', pinyin: 'Kě Lè', meaning: 'Cola (Happy)' },
        { char: '土豆', pinyin: 'Tǔ Dòu', meaning: 'Potato' },
        { char: '葡萄', pinyin: 'Pú Táo', meaning: 'Grape (Big Eyes)' },
        { char: '丸子', pinyin: 'Wán Zi', meaning: 'Meatball' },
        { char: '草莓', pinyin: 'Cǎo Méi', meaning: 'Strawberry' },
        { char: '布丁', pinyin: 'Bù Dīng', meaning: 'Pudding' }
      ],
      // 2. 自然系
      natureNicknames: [
        { char: '星星', pinyin: 'Xīng Xīng', meaning: 'Star' },
        { char: '月月', pinyin: 'Yuè Yuè', meaning: 'Moon' },
        { char: '阳阳', pinyin: 'Yáng Yáng', meaning: 'Sun / Ocean' },
        { char: '云云', pinyin: 'Yún Yún', meaning: 'Cloud' },
        { char: '花花', pinyin: 'Huā Huā', meaning: 'Flower' },
        { char: '果果', pinyin: 'Guǒ Guǒ', meaning: 'Fruit' },
        { char: '木木', pinyin: 'Mù Mù', meaning: 'Wood / Forest' },
        { char: '小雨', pinyin: 'Xiǎo Yǔ', meaning: 'Little Rain' },
        { char: '牛牛', pinyin: 'Niú Niú', meaning: 'Little Ox (Strong)' },
        { char: '虎虎', pinyin: 'Hǔ Hǔ', meaning: 'Tiger (Brave)' }
      ],
      // 3. 特质系
      traitNicknames: [
        { char: '聪聪', pinyin: 'Cōng Cōng', meaning: 'Clever / Smart' },
        { char: '壮壮', pinyin: 'Zhuàng Zhuàng', meaning: 'Strong / Robust' },
        { char: '乖乖', pinyin: 'Guāi Guāi', meaning: 'Obedient / Good' },
        { char: '静静', pinyin: 'Jìng Jìng', meaning: 'Quiet / Calm' },
        { char: '快快', pinyin: 'Kuài Kuài', meaning: 'Fast / Quick' },
        { char: '好好', pinyin: 'Hǎo Hǎo', meaning: 'Good' },
        { char: '甜甜', pinyin: 'Tián Tián', meaning: 'Sweet' },
        { char: '帅帅', pinyin: 'Shuài Shuài', meaning: 'Handsome' },
        { char: '美美', pinyin: 'Měi Měi', meaning: 'Beautiful' },
        { char: '亮亮', pinyin: 'Liàng Liàng', meaning: 'Bright / Shining' }
      ],
      // 4. 经典叠词
      classicNicknames: [
        { char: '豆豆', pinyin: 'Dòu Dòu', meaning: 'Little Bean', type: 'Unisex' },
        { char: '宝宝', pinyin: 'Bǎo Bǎo', meaning: 'Baby / Treasure', type: 'All' },
        { char: '乐乐', pinyin: 'Lè Lè', meaning: 'Happiness', type: 'Unisex' },
        { char: '贝贝', pinyin: 'Bèi Bèi', meaning: 'Precious Shell', type: 'Unisex' },
        { char: '天天', pinyin: 'Tiān Tiān', meaning: 'Day / Sky', type: 'Boys' },
        { char: '妞妞', pinyin: 'Niū Niū', meaning: 'Little Girl', type: 'Girls' },
        { char: '明明', pinyin: 'Míng Míng', meaning: 'Bright', type: 'Boys' },
        { char: '安安', pinyin: 'Ān Ān', meaning: 'Peace', type: 'Unisex' },
        { char: '菲菲', pinyin: 'Fēi Fēi', meaning: 'Fragrant', type: 'Girls' },
        { char: '芳芳', pinyin: 'Fāng Fāng', meaning: 'Fragrant', type: 'Girls' },
        { char: '婷婷', pinyin: 'Tíng Tíng', meaning: 'Graceful', type: 'Girls' },
        { char: '佳佳', pinyin: 'Jiā Jiā', meaning: 'Excellent', type: 'Unisex' },
        { char: '娜娜', pinyin: 'Nà Nà', meaning: 'Elegant', type: 'Girls' },
        { char: '露露', pinyin: 'Lù Lù', meaning: 'Dew', type: 'Girls' },
        { char: '熙熙', pinyin: 'Xī Xī', meaning: 'Sunny', type: 'Unisex' },
        { char: '瑶瑶', pinyin: 'Yáo Yáo', meaning: 'Jade', type: 'Girls' },
        { char: '琳琳', pinyin: 'Lín Lín', meaning: 'Beautiful Jade', type: 'Girls' },
        { char: '圆圆', pinyin: 'Yuán Yuán', meaning: 'Round', type: 'Girls' },
        { char: '晨晨', pinyin: 'Chén Chén', meaning: 'Morning', type: 'Unisex' },
        { char: '轩轩', pinyin: 'Xuān Xuān', meaning: 'High/Lofty', type: 'Boys' }
      ]
    };
  },
  methods: {
    playAudio(text) {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = "zh-CN";
        utterance.rate = 0.9;
        speechSynthesis.speak(utterance);
      } else {
        alert("Audio not supported.");
      }
    }
  },
  head() {
    return {
      title: "50+ Cute Chinese Nicknames (Xiao Ming) for Babies & Couples (2026)",
      meta: [
        { name: 'description', content: 'What does Maomao mean? Discover 50+ cute Chinese nicknames like "Little Dumpling", "Doudou" & "Tangyuan" for babies, kids, and loved ones.' },
        { name: 'keywords', content: 'chinese nicknames,xiao ming,cute chinese baby names,what does maomao mean,food nicknames chinese,doudou meaning' }
      ]
    };
  }
}
</script>

<style scoped>
/* =========== 页面全局样式 (复制自 Fantasy Guide) =========== */
.nicknames-page {
  padding: 20px 0 100px;
  min-height: 100vh;
  background-color: #f8f9fa;
}

.container {
  max-width: 1200px; /* 关键：与 ExploreMore 统一的 1200px */
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
  background: linear-gradient(135deg, #e60012 0%, #ff5e62 100%);
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

/* =========== 内容区卡片化 =========== */
.content {
  display: flex;
  flex-direction: column;
  gap: 50px;
}

.guide-section {
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  padding: 40px;
  border-top: 4px solid #ddd; /* 默认顶边框 */
}

/* 个性化卡片颜色 */
.highlight-section { border-top-color: #e60012; }
.food-section { border-top-color: #f59e0b; }
.nature-section { border-top-color: #10b981; }
.trait-section { border-top-color: #3b82f6; }
.classic-section { border-top-color: #8b5cf6; }

.guide-section h2 {
  font-size: 2rem;
  color: #333;
  margin-bottom: 15px;
}

.section-desc {
  color: #666;
  font-size: 1.05rem;
  margin-bottom: 30px;
}

/* =========== Maomao Spotlight 样式 =========== */
.spotlight-wrapper {
  display: flex;
  gap: 40px;
  background: #fff5f5; /* 浅红背景 */
  padding: 30px;
  border-radius: 12px;
  border: 1px dashed #feb2b2;
}

.spotlight-left {
  text-align: center;
  min-width: 150px;
}

.big-char {
  font-size: 4rem;
  font-weight: 800;
  color: #e60012;
  line-height: 1;
}

.big-pinyin {
  font-size: 1.2rem;
  color: #555;
  margin: 10px 0;
}

.play-btn-large {
  padding: 8px 20px;
  background: #e60012;
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-weight: bold;
  transition: transform 0.2s;
}

.play-btn-large:hover { transform: scale(1.05); }

.spotlight-right h4 {
  color: #e60012;
  margin-bottom: 5px;
  font-size: 1rem;
}

.spotlight-right p { margin-bottom: 15px; color: #444; }

.fun-fact {
  background: white;
  padding: 10px 15px;
  border-radius: 6px;
  border-left: 3px solid #e60012;
  font-size: 0.95rem;
  color: #555;
}

/* =========== 名字网格样式 =========== */
.nickname-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
}

.name-card {
  background: #f9fafb;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 20px;
  text-align: center;
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.name-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.06);
  background: white;
}

/* 卡片类型微调 */
.food-card:hover { border-color: #fcd34d; }
.nature-card:hover { border-color: #6ee7b7; }
.trait-card:hover { border-color: #93c5fd; }
.classic-card:hover { border-color: #c4b5fd; }

.card-top {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-bottom: 5px;
}

.nc-char {
  font-size: 1.8rem;
  font-weight: 700;
  color: #1f2937;
}

.mini-play-btn {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 1px solid #ddd;
  background: white;
  font-size: 0.7rem;
  cursor: pointer;
  color: #888;
  display: flex;
  align-items: center;
  justify-content: center;
}

.name-card:hover .mini-play-btn {
  background: #333;
  color: white;
  border-color: #333;
}

.nc-pinyin { color: #e60012; font-weight: 500; font-size: 0.95rem; margin-bottom: 8px; }
.nc-meaning { color: #666; font-size: 0.9rem; margin-bottom: 12px; min-height: 40px; }

/* 标签样式 */
.nc-badge {
  font-size: 0.75rem;
  padding: 2px 8px;
  border-radius: 4px;
  font-weight: 500;
}
.food-badge { background: #fffbeb; color: #b45309; }
.nature-badge { background: #ecfdf5; color: #047857; }
.trait-badge { background: #eff6ff; color: #1d4ed8; }
.classic-badge { background: #f5f3ff; color: #6d28d9; }

/* Link Section */
.link-content {
  text-align: center;
  background: #f8f9fa;
  padding: 30px;
  border-radius: 12px;
}

.link-buttons {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
}

.link-btn {
  background: white;
  border: 1px solid #ddd;
  padding: 10px 25px;
  border-radius: 25px;
  text-decoration: none;
  color: #333;
  font-weight: 600;
  transition: all 0.2s;
}

.link-btn:hover {
  border-color: #e60012;
  color: #e60012;
}

/* 移动端适配 */
@media (max-width: 768px) {
  .page-title { font-size: 1.8rem; margin-top: 30px; }
  .guide-section { padding: 25px; }
  .spotlight-wrapper { flex-direction: column; text-align: center; }
  .nickname-grid { grid-template-columns: repeat(2, 1fr); gap: 10px; }
  .name-card { padding: 15px 10px; }
}
</style>
