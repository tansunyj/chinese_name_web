<template>
  <div class="knowledge-page">
    <div class="container">
      <h1 class="page-title">{{ $t('knowledge.title') }}</h1>
      
      <div class="knowledge-grid">
        <div class="category-card" @click="goToCategory('surnames')">
          <div class="card-icon">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <h2>{{ $t('knowledge.categories.surnames') }}</h2>
          <p>Explore common Chinese surnames, their origins, meanings, and geographic distribution.</p>
        </div>
        
        <div class="category-card" @click="goToCategory('naming')">
          <div class="card-icon">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <h2>{{ $t('knowledge.categories.naming') }}</h2>
          <p>Learn about Chinese naming traditions, generational naming practices, and how names reflect cultural values.</p>
        </div>
        
        <div class="category-card" @click="goToCategory('historical')">
          <div class="card-icon">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2>{{ $t('knowledge.categories.historical') }}</h2>
          <p>Discover the names of famous historical figures in Chinese culture and the meanings behind them.</p>
        </div>
        
        <div class="category-card" @click="goToCategory('regional')">
          <div class="card-icon">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2>{{ $t('knowledge.categories.regional') }}</h2>
          <p>Explore the different naming practices across various regions of China and among ethnic minorities.</p>
        </div>
        
        <div class="category-card" @click="goToCategory('taboos')">
          <div class="card-icon">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
            </svg>
          </div>
          <h2>{{ $t('knowledge.categories.taboos') }}</h2>
          <p>Understand naming taboos and potential pitfalls to avoid when choosing a Chinese name.</p>
        </div>
      </div>
      
      <div v-if="activeCategory" class="category-content">
        <div class="category-header">
          <button class="back-button" @click="activeCategory = null">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back
          </button>
          <h2>{{ $t(`knowledge.categories.${activeCategory}`) }}</h2>
        </div>
        
        <div class="article-list">
          <div v-for="(article, index) in getCategoryArticles()" :key="index" class="article-card">
            <div class="article-image" :style="{ backgroundImage: `url(${article.image})` }"></div>
            <div class="article-content">
              <h3>{{ article.title }}</h3>
              <p>{{ article.summary }}</p>
              <button class="read-button" @click="readArticle(article)">Read More</button>
            </div>
          </div>
        </div>
      </div>
      
      <div v-if="activeArticle" class="article-modal">
        <div class="article-modal-content">
          <button class="close-button" @click="activeArticle = null">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <div class="article-header">
            <h2>{{ activeArticle.title }}</h2>
            <div class="article-meta">
              <span>{{ activeArticle.date }}</span>
            </div>
          </div>
          
          <div class="article-body" v-html="activeArticle.content"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'KnowledgeBase',
  data() {
    return {
      activeCategory: null,
      activeArticle: null,
      articles: {
        surnames: [
          {
            title: 'Top 100 Chinese Surnames and Their Meanings',
            summary: 'Explore the most common Chinese surnames, their historical origins, and meanings.',
            image: 'https://placehold.co/600x400',
            date: 'January 15, 2023',
            content: '<p>China has over 5,000 surnames, but the top 100 are used by nearly 85% of the population. Here we explore the most common ones.</p><h3>Li (李)</h3><p>Meaning "plum", Li is one of the most common surnames in China, with around 95 million people bearing this name. The surname has its origins dating back to the ancient times over 4,000 years ago.</p><h3>Wang (王)</h3><p>Meaning "king", Wang is another extremely common surname with over 90 million people. It originated during the Zhou Dynasty (1046-256 BCE).</p><h3>Zhang (张/張)</h3><p>Meaning "to stretch" or "to open up", Zhang is used by approximately 85 million people. It emerged in the Spring and Autumn Period (771-476 BCE).</p>'
          },
          {
            title: 'Geographical Distribution of Chinese Surnames',
            summary: 'Learn how Chinese surnames are distributed across different regions of China.',
            image: 'https://placehold.co/600x400',
            date: 'February 22, 2023',
            content: '<p>Chinese surnames have distinct geographical distributions that reflect historical migration patterns and regional influences.</p><h3>Regional Variations</h3><p>Many Chinese surnames have strong regional associations. For instance, Chen (陈/陳) is particularly common in Fujian province and among Hokkien speakers, while Zhuang (庄/莊) is common in parts of southern China.</p><h3>North vs. South</h3><p>Northern China tends to have a higher concentration of surnames like Wang (王) and Li (李), while southern regions, particularly Guangdong and Fujian, have more diverse surname patterns with names like Lin (林) and Huang (黄/黃) being prevalent.</p>'
          }
        ],
        naming: [
          {
            title: 'The Art of Chinese Name Selection',
            summary: 'Understand the principles and considerations in selecting a meaningful Chinese name.',
            image: 'https://placehold.co/600x400',
            date: 'March 5, 2023',
            content: '<p>Choosing a Chinese name is considered an art form that involves careful consideration of multiple factors.</p><h3>Sound Harmony</h3><p>The phonetic quality of a name is extremely important. Names should flow smoothly when pronounced and avoid awkward sound combinations. The tones of each character should create a pleasing rhythm.</p><h3>Character Meaning</h3><p>Each Chinese character carries its own meaning, and the combination of characters creates layers of symbolism. Parents often choose characters that represent their hopes for their child\'s personality, achievements, or physical attributes.</p><h3>Visual Aesthetics</h3><p>The written form of the characters matters as well. Some parents prefer characters with balanced structures or a specific number of strokes, which can be influenced by traditional beliefs about lucky numbers.</p>'
          },
          {
            title: 'Generational Names in Chinese Families',
            summary: 'Discover how Chinese families use generational naming systems to indicate family relationships.',
            image: 'https://placehold.co/600x400',
            date: 'April 12, 2023',
            content: '<p>Many Chinese families follow a generational naming system where siblings and cousins of the same generation share a common character in their names.</p><h3>Poem-Based Naming</h3><p>One traditional method involves selecting characters from a specific poem or creating a new poem. Each character in the poem is used for successive generations. This system can span many generations, sometimes planned for 20-30 generations in advance.</p><h3>Contemporary Practices</h3><p>While some families still adhere strictly to generational naming practices, many modern Chinese families, especially in urban areas, have moved away from this tradition. However, it remains common in rural areas and within families that value traditional customs.</p>'
          }
        ],
        historical: [
          {
            title: 'Famous Names in Chinese History',
            summary: 'Learn about the names of influential figures in Chinese history and their significance.',
            image: 'https://placehold.co/600x400',
            date: 'May 8, 2023',
            content: '<p>The names of historical figures in China often reflect the values and aspirations of their time.</p><h3>Confucius (孔子, Kǒng Zǐ)</h3><p>Born as Kong Qiu (孔丘), Confucius is respectfully referred to as Kong Zi, meaning "Master Kong." His teachings on ethics, morality, and social philosophy have profoundly influenced Chinese culture for over 2,500 years.</p><h3>Emperor Qin Shi Huang (秦始皇)</h3><p>Born as Ying Zheng (嬴政), he took the title Qin Shi Huang, which means "First Emperor of Qin," after unifying China. This name signifies his achievement in establishing the first imperial dynasty of a unified China.</p><h3>Li Bai (李白)</h3><p>One of China\'s most revered poets, Li Bai\'s name is elegant and simple. The character 白 (bai) means "white" or "pure," reflecting the clarity and vividness found in his poetry.</p>'
          }
        ],
        regional: [
          {
            title: 'Naming Practices Among Chinese Ethnic Minorities',
            summary: 'Explore how different ethnic groups within China approach naming traditions.',
            image: 'https://placehold.co/600x400',
            date: 'June 15, 2023',
            content: '<p>China has 56 recognized ethnic groups, each with distinct naming practices that reflect their cultural heritage.</p><h3>Tibetan Names</h3><p>Tibetan names often have religious significance, with many names referencing Buddhist deities or concepts. Traditionally, Tibetans do not have surnames, but may use clan names in certain contexts. Many Tibetan names include honorific prefixes like "Tashi" (auspicious) or "Norbu" (jewel).</p><h3>Uyghur Names</h3><p>Uyghur naming practices are influenced by Islamic traditions. Names often include Arabic or Persian elements, and most Uyghurs have a given name followed by a patronymic (father\'s name). Common male names include Muhammad, Ali, and Ibrahim, while female names include Fatima, Amina, and Aysha.</p><h3>Mongolian Names</h3><p>Traditional Mongolian names often relate to nature, strength, or positive attributes. Historically, Mongolians did not use surnames, though this has changed in modern times. Names like Batbayar (strong joy) or Altantsetseg (golden flower) reflect values important to Mongolian culture.</p>'
          }
        ],
        taboos: [
          {
            title: 'Naming Taboos to Avoid',
            summary: 'Understand cultural sensitivities and taboos when selecting a Chinese name.',
            image: 'https://placehold.co/600x400',
            date: 'July 20, 2023',
            content: '<p>When choosing a Chinese name, there are several taboos and considerations to be aware of to avoid cultural missteps.</p><h3>Homophones with Negative Meanings</h3><p>Chinese is rich in homophones (words that sound the same but have different meanings). A character might sound like another word with an unfortunate meaning. For example, the number four (四, sì) sounds similar to death (死, sǐ), making it an inauspicious choice for a name.</p><h3>Historical Name Avoidance</h3><p>Traditionally, using the names of ancestors, especially the personal names of recent ancestors, was considered disrespectful. Similarly, names of current or recent emperors were taboo for commoners to use.</p><h3>Inappropriate Character Combinations</h3><p>Some character combinations might create unintended meanings or awkward phrases. It\'s important to consider how characters interact semantically when placed together.</p><h3>Modern Considerations</h3><p>In contemporary times, avoiding names that could lead to bullying or misunderstanding is important. Names that are too unusual, difficult to pronounce, or have potentially embarrassing meanings should be avoided.</p>'
          }
        ]
      }
    }
  },
  methods: {
    goToCategory(category) {
      this.activeCategory = category;
      // Scroll to top when changing categories
      window.scrollTo(0, 0);
    },
    getCategoryArticles() {
      return this.activeCategory ? this.articles[this.activeCategory] : [];
    },
    readArticle(article) {
      this.activeArticle = article;
      // Prevent body scrolling when article modal is open
      document.body.style.overflow = 'hidden';
    },
    closeArticle() {
      this.activeArticle = null;
      // Restore body scrolling when article modal is closed
      document.body.style.overflow = 'auto';
    }
  },
  watch: {
    activeArticle(newVal) {
      if (!newVal) {
        // Restore body scrolling when article modal is closed
        document.body.style.overflow = 'auto';
      }
    }
  }
}
</script>

<style scoped>
.knowledge-page {
  padding: 20px 0 100px;
  min-height: 100vh;
  background-color: #f8f9fa;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.page-title {
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 50px;
  margin-top: 70px;
  text-align: center;
}

.knowledge-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
}

.category-card {
  background-color: white;
  border-radius: 12px;
  padding: 30px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s, box-shadow 0.3s;
  cursor: pointer;
  text-align: center;
}

.category-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}

.card-icon {
  width: 70px;
  height: 70px;
  background-color: rgba(230, 0, 18, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
}

.card-icon svg {
  width: 35px;
  height: 35px;
  color: #e60012;
}

.category-card h2 {
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 15px;
}

.category-card p {
  color: #666;
  line-height: 1.6;
}

.category-content {
  margin-top: 50px;
}

.category-header {
  display: flex;
  align-items: center;
  margin-bottom: 30px;
}

.back-button {
  display: flex;
  align-items: center;
  background-color: transparent;
  border: none;
  font-size: 1rem;
  color: #555;
  cursor: pointer;
  padding: 10px 15px;
  margin-right: 20px;
  border-radius: 6px;
  transition: background-color 0.3s;
}

.back-button:hover {
  background-color: #f0f0f0;
}

.back-button svg {
  width: 20px;
  height: 20px;
  margin-right: 5px;
}

.category-header h2 {
  font-size: 2rem;
  color: #333;
}

.article-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 30px;
}

.article-card {
  background-color: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s, box-shadow 0.3s;
}

.article-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}

.article-image {
  height: 200px;
  background-size: cover;
  background-position: center;
}

.article-content {
  padding: 25px;
}

.article-content h3 {
  font-size: 1.3rem;
  color: #333;
  margin-bottom: 15px;
}

.article-content p {
  color: #666;
  line-height: 1.6;
  margin-bottom: 20px;
}

.read-button {
  background-color: transparent;
  color: #e60012;
  border: 1px solid #e60012;
  border-radius: 6px;
  padding: 8px 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s;
}

.read-button:hover {
  background-color: #e60012;
  color: white;
}

.article-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
}

.article-modal-content {
  background-color: white;
  border-radius: 12px;
  max-width: 800px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  padding: 30px;
}

.close-button {
  position: absolute;
  top: 15px;
  right: 15px;
  background-color: transparent;
  border: none;
  cursor: pointer;
}

.close-button svg {
  width: 24px;
  height: 24px;
  color: #555;
}

.article-header {
  margin-bottom: 25px;
}

.article-header h2 {
  font-size: 2rem;
  color: #333;
  margin-bottom: 10px;
}

.article-meta {
  color: #666;
  font-size: 0.9rem;
}

.article-body {
  color: #333;
  line-height: 1.8;
}

.article-body h3 {
  font-size: 1.5rem;
  color: #333;
  margin: 25px 0 15px;
}

.article-body p {
  margin-bottom: 15px;
}

@media (max-width: 768px) {
  .page-title {
    font-size: 2rem;
  }
  
  .knowledge-page {
    padding: 70px 0;
  }
  
  .article-list {
    grid-template-columns: 1fr;
  }
  
  .category-header h2 {
    font-size: 1.5rem;
  }
  
  .article-modal-content {
    padding: 20px;
  }
  
  .article-header h2 {
    font-size: 1.5rem;
  }
}
</style> 