<template>
  <div class="translate-page funny-chinese-names-page">
    <div class="container">
      <!-- 面包屑导航 -->
      <BreadcrumbNav />
      <h1 class="page-title">Funny Chinese Names and Meanings | Humorous Chinese Name Ideas</h1>
      
      <div class="seo-intro">
        <p class="seo-description">Discover funny Chinese names with meanings and cultural context. Learn about amusing Chinese name translations and naming jokes with respectful cultural explanations. These names showcase Chinese language humor and common translation mishaps.</p>
      </div>
      
      <div class="content">
        <!-- 表单部分 -->
        <div class="form-section">
          <h2 class="section-title">Explore Funny Chinese Names</h2>
          
          <div class="search-filters">
            <div class="search-box">
              <input type="text" v-model="searchQuery" placeholder="Search funny Chinese names..." @input="filterNames" class="form-input" />
              <button class="search-btn" @click="filterNames">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        <!-- 结果部分 -->
        <div class="results-section">
          <h2>Humorous Chinese Names Collection</h2>
          <p class="results-description">These names demonstrate Chinese language humor and are not typically used as real names. Understanding them provides insight into Chinese culture and linguistic wordplay.</p>
          
          <!-- 加载指示器 -->
          <div v-if="isLoading" class="loading-indicator">
            <div class="spinner"></div>
            <p>Loading names...</p>
          </div>
          
          <!-- 无结果提示 -->
          <div v-else-if="filteredNames.length === 0" class="no-results">
            <p>No names match your search criteria. Please try different filters.</p>
          </div>
          
          <!-- 结果网格 -->
          <div v-else class="results-grid">
            <div v-for="name in topNames" :key="name.id" class="result-card">
              <div class="result-header">
                <div class="result-characters-container">
                  <div class="result-characters">{{ name.chinese }}</div>
                  <button class="play-button" @click="playPronunciation(name.chinese)" title="Play pronunciation">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" height="20">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </button>
                </div>
                <div class="result-pinyin">{{ name.pinyin }}</div>
              </div>
              <div class="result-details">
                <div class="result-item">
                  <h4>Meaning</h4>
                  <p>{{ name.meaning }}</p>
                </div>
                <div class="result-item">
                  <h4>Humor Level</h4>
                  <div class="popularity-stars">
                    <span v-for="n in 5" :key="n" class="star" :class="{ 'filled': n <= name.popularity }">★</span>
                  </div>
                </div>
                <div class="result-item category-tag">
                  <span class="category">{{ name.category }}</span>
                </div>
              </div>
            </div>
          </div>
          
          <!-- 分页控制 -->
          <div class="pagination-controls" v-if="filteredNames.length > 0">
            <div class="pagination-info">
              Showing {{ paginationInfo.startItem }}-{{ paginationInfo.endItem }} of {{ filteredNames.length }} names
            </div>
            <div class="pagination-buttons">
              <button 
                @click="changePage(currentPage - 1)" 
                :disabled="currentPage === 1"
                class="page-button"
              >
                &laquo; Previous
              </button>
              
              <button 
                v-for="page in displayedPages" 
                :key="page" 
                @click="changePage(page)"
                class="page-button"
                :class="{ active: currentPage === page }"
              >
                {{ page }}
              </button>
              
              <button 
                @click="changePage(currentPage + 1)" 
                :disabled="currentPage === totalPages"
                class="page-button"
              >
                Next &raquo;
              </button>
            </div>
          </div>
        </div>
        
        <!-- 常见问题部分 -->
        <div class="faq-section">
          <h2>FAQs About Funny Chinese Names</h2>
          
          <div class="faq-list">
            <div v-for="(faq, index) in faqs" :key="index" class="faq-item">
              <div class="faq-question" @click="toggleFaq(index)">
                <h3>{{ faq.question }}</h3>
                <span class="toggle-icon">{{ expandedFaqs[index] ? '−' : '+' }}</span>
              </div>
              <div class="faq-answer" v-show="expandedFaqs[index]">
                <p>{{ faq.answer }}</p>
              </div>
            </div>
          </div>
        </div>
        
        <!-- 额外内容：中文幽默说明 -->
        <div class="info-section">
          <h2>Understanding Chinese Name Humor</h2>
          <p>Chinese name humor often involves wordplay, homonyms, and cultural references. What makes names funny in Chinese culture is often tied to:</p>
          
          <ul class="info-list">
            <li><strong>Homonyms</strong> - Words that sound alike but have different meanings can create unintended humor.</li>
            <li><strong>Food References</strong> - Names that reference common foods (like "Potato" or "Steamed Bun") sound endearing but humorous as formal names.</li>
            <li><strong>Literal Translations</strong> - Many English names translated literally into Chinese can create amusing results.</li>
            <li><strong>Cultural Context</strong> - Some phrases used as names would be immediately recognized as odd by native speakers.</li>
          </ul>
          
          <p>While these names showcase linguistic humor, it's important to approach Chinese naming with respect for the culture and traditions. In actual practice, Chinese parents choose names with positive meanings and cultural significance.</p>
        </div>
        
        <!-- 相关页面推荐 -->
        <ExploreMore :currentPath="$route.path" />
        
      </div>
    </div>
  </div>
</template>

<script>
import ExploreMore from '@/components/ExploreMore.vue';
import BreadcrumbNav from '@/components/BreadcrumbNav.vue';
import { allFunnyNames, filterNames, paginateNames } from '@/data/allChineseNames';
import { onMounted, onBeforeUnmount } from 'vue';
import { createItemListSchema, addStructuredDataToPage } from '@/utils/structuredData';

export default {
  name: 'FunnyChineseNames',
  components: {
    ExploreMore,
    BreadcrumbNav
  },
  setup() {
    // 结构化数据脚本引用
    let structuredDataScript = null;
    
    // 在组件挂载后添加结构化数据
    onMounted(() => {
      addItemListStructuredData();
    });
    
    // 在组件卸载前移除结构化数据
    onBeforeUnmount(() => {
      if (structuredDataScript && structuredDataScript.parentNode) {
        structuredDataScript.parentNode.removeChild(structuredDataScript);
      }
    });
    
    // 添加ItemList结构化数据
    const addItemListStructuredData = () => {
      // 创建ItemList结构化数据
      const itemListItems = allFunnyNames.slice(0, 10).map((name, index) => ({
        name: `${name.chinese} (${name.pinyin})`,
        description: name.meaning,
        url: `https://chinesename.us/funny-chinese-names#${name.chinese}`,
        type: 'Thing'
      }));
      
      const itemListSchema = createItemListSchema(
        { name: 'Funny Chinese Names Collection' },
        itemListItems
      );
      
      // 添加结构化数据到页面
      structuredDataScript = addStructuredDataToPage(itemListSchema, 'funny-names-structured-data');
    };
  },
  data() {
    return {
      searchQuery: '',
      expandedFaqs: Array(5).fill(false),
      
      // 分页相关数据
      currentPage: 1,
      pageSize: 12,
      totalItems: 0,
      
      // 全部名字数据
      allNames: [], // 存储所有名字
      filteredNames: [], // 筛选后的名字
      
      // 当前显示的名字
      topNames: [],
      
      // 加载状态
      isLoading: false,
      
      faqs: [
        {
          question: 'Are these names actually used in China?',
          answer: 'No, these names are generally not used as real Chinese names. They are examples of humorous wordplay, literal translations, or names that would sound strange or amusing to native Chinese speakers. Actual Chinese names are carefully chosen for positive meanings and cultural significance.'
        },
        {
          question: 'Why would a Chinese name be considered funny?',
          answer: 'Chinese names can be considered funny for several reasons: they may reference common objects or foods inappropriate for personal names, contain homonyms that create unintended meanings, use phrases rather than proper names, or have meanings that would be considered too literal or blunt in naming contexts.'
        },
        {
          question: 'Is naming humor similar between Chinese and English cultures?',
          answer: 'There are both similarities and differences. Both cultures find humor in names that reference everyday objects (like naming someone "Potato"). However, Chinese has unique linguistic features like tonal distinctions and character combinations that create humor differently than in English. Additionally, cultural context heavily influences what makes a name funny in each language.'
        },
        {
          question: 'How do translation errors create funny Chinese names?',
          answer: 'Translation errors often occur when English names are translated literally instead of phonetically. For example, the name "Dustin" might be literally translated as "dust inside" rather than finding characters that sound similar to "Dustin." Machine translations can also create humorous results by failing to understand naming conventions or selecting inappropriate characters.'
        },
        {
          question: 'Can I use these funny names for a Chinese character in fiction?',
          answer: 'While you could use these names for comedy purposes in fiction, doing so for a serious character would be similar to naming an English character "Washing Machine" or "Breakfast Pancake." If you want authenticity, it\'s better to use proper Chinese naming conventions, even for humorous characters, unless the joke specifically involves the character having an unusual name.'
        }
      ]
    };
  },
  computed: {
    // 计算总页数
    totalPages() {
      return Math.ceil(this.filteredNames.length / this.pageSize);
    },
    
    // 计算要显示的页码
    displayedPages() {
      const pages = [];
      const maxVisiblePages = 10; // 最多显示10个页码
      
      if (this.totalPages <= maxVisiblePages) {
        // 如果总页数少于等于10，全部显示
        for (let i = 1; i <= this.totalPages; i++) {
          pages.push(i);
        }
      } else {
        // 如果总页数超过10，显示当前页附近的页码
        let start = Math.max(1, this.currentPage - Math.floor(maxVisiblePages / 2));
        let end = Math.min(this.totalPages, start + maxVisiblePages - 1);
        
        // 调整起始页，确保显示10个页码
        if (end - start + 1 < maxVisiblePages) {
          start = Math.max(1, end - maxVisiblePages + 1);
        }
        
        for (let i = start; i <= end; i++) {
          pages.push(i);
        }
      }
      
      return pages;
    },
    
    // 计算分页信息
    paginationInfo() {
      const startItem = (this.currentPage - 1) * this.pageSize + 1;
      const endItem = Math.min(startItem + this.pageSize - 1, this.filteredNames.length);
      return { startItem, endItem };
    }
  },
  created() {
    // 在组件创建时初始化数据
    this.initializeData();
  },
  methods: {
    // 初始化数据
    initializeData() {
      this.isLoading = true;
      
      // 模拟异步加载
      setTimeout(() => {
        // 设置所有名字数据
        this.allNames = allFunnyNames;
        this.totalItems = this.allNames.length;
        
        // 初始过滤和分页
        this.filterAndPaginateNames();
        this.isLoading = false;
      }, 500); // 500毫秒后加载数据，模拟网络请求
    },
    
    // 过滤名字
    filterNames() {
      // 将重置为第一页，因为过滤条件变化
      this.currentPage = 1;
      this.filterAndPaginateNames();
    },
    
    // 过滤并分页名字
    filterAndPaginateNames() {
      // 先应用过滤
      if (this.searchQuery && this.searchQuery.trim() !== '') {
        this.filteredNames = this.allNames.filter(name => {
          return name.chinese.includes(this.searchQuery) || 
                 name.pinyin.toLowerCase().includes(this.searchQuery.toLowerCase()) || 
                 name.meaning.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
                 name.category.toLowerCase().includes(this.searchQuery.toLowerCase());
        });
      } else {
        this.filteredNames = [...this.allNames];
      }
      
      // 再应用分页
      this.topNames = paginateNames(this.filteredNames, this.currentPage, this.pageSize);
    },
    
    // 更改页码
    changePage(page) {
      if (page < 1 || page > this.totalPages) return;
      
      this.currentPage = page;
      this.filterAndPaginateNames();
      
      // 不滚动页面，保持当前位置
    },
    
    toggleFaq(index) {
      this.$set(this.expandedFaqs, index, !this.expandedFaqs[index]);
    },
    
    // 播放发音
    playPronunciation(text) {
      if ('speechSynthesis' in window) {
        // 停止之前可能正在播放的语音
        window.speechSynthesis.cancel();
        
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = "zh-CN";
        utterance.rate = 0.8; // 稍微放慢速度，使发音更清晰
        
        speechSynthesis.speak(utterance);
      } else {
        alert("您的浏览器不支持语音合成");
      }
    }
  },
  head() {
    return {
      title: "Funny Chinese Names and Meanings | Humorous Chinese Name Ideas",
      meta: [
        { name: 'description', content: 'Discover funny Chinese names with meanings and cultural context. Learn about amusing Chinese name translations and naming jokes with respectful cultural explanations.' },
        { name: 'keywords', content: 'funny chinese names, humorous chinese names, chinese name jokes, chinese name translation fails, chinese name humor, amusing chinese names, weird chinese names, silly chinese names' }
      ]
    };
  }
}
</script>

<style scoped>
/* 页面基础样式 */
.funny-chinese-names-page {
  padding-bottom: 60px;
}

.page-title {
  font-size: 2rem;
  margin-bottom: 20px;
  color: #333;
}

.seo-description {
  font-size: 1rem;
  line-height: 1.6;
  color: #555;
  margin-bottom: 30px;
}

.form-section {
  background-color: #fff;
  border-radius: 8px;
  padding: 25px;
  margin-bottom: 30px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.section-title {
  font-size: 1.5rem;
  margin-bottom: 20px;
  color: #333;
}

.search-filters {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.search-box {
  display: flex;
  max-width: 100%;
}

.form-input {
  flex-grow: 1;
  padding: 12px 15px;
  border: 1px solid #ddd;
  border-radius: 4px 0 0 4px;
  font-size: 1rem;
  outline: none;
}

.search-btn {
  background-color: #e60012;
  color: white;
  border: none;
  border-radius: 0 4px 4px 0;
  padding: 0 15px;
  cursor: pointer;
}

.search-btn svg {
  width: 20px;
  height: 20px;
}

/* 结果部分样式 */
.results-section {
  margin-bottom: 40px;
}

.results-section h2 {
  font-size: 1.8rem;
  color: #333;
  margin-bottom: 10px;
  text-align: center;
}

.results-description {
  text-align: center;
  color: #666;
  margin-bottom: 25px;
}

.results-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
}

.result-card {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.result-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
}

.result-header {
  background-color: #f8f8f8;
  padding: 15px;
  text-align: center;
  border-bottom: 1px solid #eee;
}

.result-characters-container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 5px;
}

.result-characters {
  font-size: 2rem;
  color: #e60012;
  margin-right: 10px;
}

.result-pinyin {
  font-size: 1rem;
  color: #666;
}

.play-button {
  background: none;
  border: none;
  color: #555;
  cursor: pointer;
  padding: 5px;
  transition: color 0.3s ease;
}

.play-button:hover {
  color: #e60012;
}

.result-details {
  padding: 15px;
}

.result-item {
  margin-bottom: 15px;
}

.result-item:last-child {
  margin-bottom: 0;
}

.result-item h4 {
  font-size: 0.95rem;
  margin-bottom: 5px;
  color: #333;
}

.result-item p {
  font-size: 0.9rem;
  color: #555;
  line-height: 1.5;
}

.popularity-stars {
  display: flex;
  gap: 2px;
}

.star {
  color: #ccc;
  font-size: 1.2rem;
}

.star.filled {
  color: #ffc107;
}

.category-tag {
  display: flex;
}

.category {
  font-size: 0.8rem;
  background-color: #f0f0f0;
  color: #666;
  padding: 3px 10px;
  border-radius: 15px;
  text-transform: capitalize;
}

/* 分页控制样式 */
.pagination-controls {
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.pagination-info {
  margin-bottom: 15px;
  color: #666;
  font-size: 0.9rem;
}

.pagination-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  justify-content: center;
}

.page-button {
  min-width: 40px;
  height: 40px;
  border: 1px solid #ddd;
  background-color: #fff;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
}

.page-button:hover {
  border-color: #e60012;
  color: #e60012;
}

.page-button.active {
  background-color: #e60012;
  border-color: #e60012;
  color: white;
}

.page-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* FAQ部分样式 */
.faq-section {
  margin-bottom: 40px;
}

.faq-section h2 {
  font-size: 1.8rem;
  color: #333;
  margin-bottom: 25px;
  text-align: center;
}

.faq-item {
  margin-bottom: 15px;
  border: 1px solid #eee;
  border-radius: 8px;
  overflow: hidden;
}

.faq-question {
  background-color: #f8f8f8;
  padding: 15px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.faq-question:hover {
  background-color: #f0f0f0;
}

.faq-question h3 {
  font-size: 1.1rem;
  margin: 0;
  color: #333;
}

.toggle-icon {
  font-size: 1.5rem;
  color: #e60012;
}

.faq-answer {
  padding: 20px;
  background-color: #fff;
  border-top: 1px solid #eee;
}

.faq-answer p {
  margin: 0;
  color: #555;
  line-height: 1.6;
}

/* 信息部分样式 */
.info-section {
  background-color: #f9f9f9;
  padding: 30px;
  border-radius: 8px;
  margin-bottom: 40px;
}

.info-section h2 {
  font-size: 1.6rem;
  color: #333;
  margin-bottom: 15px;
}

.info-section p {
  color: #555;
  line-height: 1.6;
  margin-bottom: 15px;
}

.info-list {
  padding-left: 20px;
  margin-bottom: 15px;
}

.info-list li {
  margin-bottom: 10px;
  color: #555;
}

/* 响应式样式 */
@media (max-width: 768px) {
  .results-grid {
    grid-template-columns: 1fr;
  }
  
  .page-title {
    font-size: 1.6rem;
  }
  
  .form-section, .info-section {
    padding: 20px;
  }
}

@media (max-width: 430px) {
  .funny-chinese-names-page > .container {
    padding: 0 !important;
    width: 100%;
  }

  .content {
    width: min(95vw, 100%) !important;
    max-width: min(95vw, 100%) !important;
    margin: 0 auto !important;
    padding: 0 8px;
    box-sizing: border-box;
  }

  .form-section,
  .results-section,
  .faq-section,
  .info-section {
    width: min(95vw, 100%) !important;
    max-width: min(95vw, 100%) !important;
    margin-left: auto !important;
    margin-right: auto !important;
  }

  .form-section {
    padding: 18px 14px;
    margin-bottom: 24px;
  }

  .page-title,
  .seo-intro {
    width: min(95vw, 100%) !important;
    margin-left: auto !important;
    margin-right: auto !important;
  }
}
</style>
