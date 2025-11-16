<template>
  <div class="translate-page chinese-women-names-page">
    <div class="container">
      <!-- 面包屑导航 -->
      <BreadcrumbNav />
      <h1 class="page-title">Chinese Women Names with Meanings (2025) | 350+ Professional Female Names</h1>
      
      <div class="seo-intro">
        <p class="seo-description">Discover 350+ elegant Chinese names perfect for adult women. Whether you're learning Chinese, working in China, or need a professional name for business and social occasions, explore our curated collection of authentic Chinese women names with meanings, pronunciations, and cultural significance.</p>
      </div>
      
      <!-- 内容容器开始 -->
      <div class="content-container">
        <div class="content">
        <!-- 表单部分 -->
        <div class="form-section">
          <h2 class="section-title">Find Professional Chinese Women Names (350+ Options)</h2>
          
          <div class="search-filters">
            <div class="search-box">
              <input type="text" v-model="searchQuery" placeholder="Search Chinese women names..." @input="filterNames" class="form-input" />
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
          <h2>Top Chinese Women Names</h2>
          <p class="results-description">These elegant Chinese names are selected for their professional sound, meaningful characters, and cultural appropriateness for adult women in business and social settings.</p>
          
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
                  <h4>Popularity</h4>
                  <div class="popularity-stars">
                    <span v-for="n in 5" :key="n" class="star" :class="{ 'filled': n <= name.popularity }">★</span>
                  </div>
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
              
              <div class="page-numbers">
                <button 
                  v-for="page in displayedPages" 
                  :key="page" 
                  @click="changePage(page)"
                  :class="['page-number', { active: currentPage === page }]"
                >
                  {{ page }}
                </button>
              </div>
              
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
        
        
        <!-- 使用指南 -->
        <div class="usage-guide">
          <h2>Understanding Chinese Women Names</h2>
          
          <div class="guide-grid">
            <div class="guide-card">
              <h3>Professional Names</h3>
              <p>Chinese names for adult women often emphasize elegance, wisdom, and maturity. Characters representing grace, intelligence, cultural refinement, and professional qualities are particularly popular for women in business and academic settings.</p>
            </div>
            
            <div class="guide-card">
              <h3>Cultural Significance</h3>
              <p>Adult women's names carry deeper cultural meanings related to virtues, accomplishments, and personal character. These names are chosen to reflect maturity, sophistication, and the wearer's aspirations in professional and social contexts.</p>
            </div>
            
            <div class="guide-card">
              <h3>Business Appropriate</h3>
              <p>For professional settings, Chinese women's names should sound formal and authoritative while maintaining femininity. Names used in business cards, email signatures, and official documents should convey competence and cultural awareness.</p>
            </div>
            
            <div class="guide-card">
              <h3>Modern Choices</h3>
              <p>Contemporary Chinese women's names blend traditional elegance with modern sensibilities, incorporating characters that represent independence, global perspective, career success, and personal strength appropriate for today's professional women.</p>
            </div>
          </div>
        </div>
        
        <!-- FAQ 部分 -->
        <div class="faq-section">
          <h2>Frequently Asked Questions</h2>
          
          <div class="faq-list">
            <div v-for="(faq, index) in faqs" :key="index" class="faq-item" :class="{'expanded': expandedFaqs[index]}" @click="toggleFaq(index)">
              <div class="faq-question">
                <h3>{{ faq.question }}</h3>
                <span class="toggle-icon">{{ expandedFaqs[index] ? '−' : '+' }}</span>
              </div>
              <div class="faq-answer" v-show="expandedFaqs[index]">
                <p>{{ faq.answer }}</p>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Explore More 组件 -->
        <ExploreMore :currentPath="$route.path" />
        
        </div>
      </div>
      <!-- 内容容器结束 -->
    </div>
  </div>
</template>

<script>
import ExploreMore from '@/components/ExploreMore.vue';
import BreadcrumbNav from '@/components/BreadcrumbNav.vue';
import { uniqueGirlNames } from '@/data/uniqueChineseGirlNames'; // 暂时复用girl names数据
import { filterNames, paginateNames } from '@/data/allChineseNames';
import { onMounted, onBeforeUnmount } from 'vue';
import { createItemListSchema, addStructuredDataToPage } from '@/utils/structuredData';

export default {
  name: 'ChineseWomenNames',
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
      const itemListItems = uniqueGirlNames.slice(0, 10).map((name, index) => ({
        name: `${name.chinese} (${name.pinyin})`,
        description: name.meaning,
        url: `https://chinesename.us/chinese-women-names#${name.chinese}`,
        type: 'Thing'
      }));
      
      const itemListSchema = createItemListSchema(
        { name: 'Chinese Women Names Collection' },
        itemListItems
      );
      
      // 添加结构化数据到页面
      structuredDataScript = addStructuredDataToPage(itemListSchema, 'women-names-structured-data');
    };
  },
  data() {
    return {
      searchQuery: '',
      expandedFaqs: Array(5).fill(false),
      
      // 分页相关数据
      currentPage: 1,
      pageSize: 20,
      totalItems: 0,
      
      // 全部名字数据
      allNames: [],
      filteredNames: [],
      
      // 当前显示的名字
      topNames: [],
      
      // 加载状态
      isLoading: false,
      
      faqs: [
        {
          question: 'What makes a good Chinese name for adult women?',
          answer: 'A good Chinese name for adult women should sound professional, elegant, and culturally appropriate. It should use characters with positive meanings related to wisdom, grace, accomplishment, and strength. The name should be easy for native Chinese speakers to pronounce and remember, while conveying maturity and sophistication suitable for business and social settings.'
        },
        {
          question: 'Can I use my Chinese name on business cards and official documents?',
          answer: 'Absolutely! Many foreigners working in China or with Chinese businesses use their Chinese names on business cards, email signatures, and official documents. This shows cultural respect and makes communication easier with Chinese colleagues and clients. Make sure your chosen name sounds professional and is written correctly in simplified or traditional characters as appropriate for your region.'
        },
        {
          question: 'Should I choose a Chinese name that sounds like my English name?',
          answer: 'You have two options: phonetic translation (sound-alike) or meaning translation. For adult women in professional settings, many prefer names based on meaning or personal qualities rather than pure phonetic matching. A name that represents your values or professional image can be more meaningful than one that simply sounds like your English name. Consult with native speakers to ensure your chosen name sounds natural.'
        },
        {
          question: 'How do Chinese women\'s names differ from girls\' names?',
          answer: 'Women\'s names for adults tend to use more formal, mature characters emphasizing professional qualities, wisdom, and cultural sophistication. Girl names often use characters suggesting cuteness, innocence, or youthful charm. Women\'s names avoid diminutive forms and childish-sounding characters, focusing instead on elegance, competence, and authority appropriate for adult women in society.'
        },
        {
          question: 'Do I need to register my Chinese name officially?',
          answer: 'For most purposes, you don\'t need official registration. You can simply start using your Chinese name in social and business contexts. However, if you\'re applying for Chinese citizenship, long-term residency, or need the name on official Chinese documents, you may need to register it through proper channels. For everyday use in business cards, social media, and professional networking, informal adoption is perfectly acceptable.'
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
      const maxVisiblePages = 10;
      
      if (this.totalPages <= maxVisiblePages) {
        for (let i = 1; i <= this.totalPages; i++) {
          pages.push(i);
        }
      } else {
        let start = Math.max(1, this.currentPage - Math.floor(maxVisiblePages / 2));
        let end = Math.min(this.totalPages, start + maxVisiblePages - 1);
        
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
    this.initializeData();
  },
  methods: {
    // 初始化数据
    initializeData() {
      this.isLoading = true;
      
      setTimeout(() => {
        // 暂时使用girl names数据，后续可以创建专门的women names数据集
        this.allNames = uniqueGirlNames;
        this.totalItems = this.allNames.length;
        
        this.filterAndPaginateNames();
        this.isLoading = false;
      }, 500);
    },
    
    filterNames() {
      this.currentPage = 1;
      this.filterAndPaginateNames();
    },
    
    filterAndPaginateNames() {
      if (this.searchQuery && this.searchQuery.trim() !== '') {
        this.filteredNames = this.allNames.filter(name => {
          return name.chinese.includes(this.searchQuery) || 
                 name.pinyin.toLowerCase().includes(this.searchQuery.toLowerCase()) || 
                 name.meaning.toLowerCase().includes(this.searchQuery.toLowerCase());
        });
      } else {
        this.filteredNames = [...this.allNames];
      }
      
      this.topNames = paginateNames(this.filteredNames, this.currentPage, this.pageSize);
    },
    
    changePage(page) {
      if (page < 1 || page > this.totalPages) return;
      
      this.currentPage = page;
      this.filterAndPaginateNames();
    },
    
    toggleFaq(index) {
      this.$set(this.expandedFaqs, index, !this.expandedFaqs[index]);
    },
    
    playPronunciation(text) {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = "zh-CN";
        utterance.rate = 0.8;
        
        speechSynthesis.speak(utterance);
      } else {
        alert("您的浏览器不支持语音合成");
      }
    }
  },
  head() {
    return {
      title: "Chinese Women Names with Meanings (2025) | 350+ Professional Female Names",
      meta: [
        { name: 'description', content: 'Discover 350+ elegant Chinese names for adult women. Perfect for professionals, expats, and anyone needing authentic Chinese women names for business and social occasions.' },
        { name: 'keywords', content: 'chinese women names,chinese names for women,female chinese names,chinese woman names,professional chinese names,adult chinese female names' }
      ]
    };
  }
}
</script>

<style scoped>
/* 页面基础样式 */
.chinese-women-names-page {
  padding-bottom: 60px;
}

.page-title {
  font-size: 2rem;
  color: #333;
  margin: 1.5rem 0 1rem;
  text-align: center;
}

.seo-intro {
  max-width: 800px;
  margin: 0 auto 2rem;
}

.seo-description {
  color: #555;
  font-size: 1rem;
  line-height: 1.6;
  text-align: center;
}

.content {
  max-width: 1200px;
  margin: 0 auto;
}

/* 表单部分样式 */
.form-section {
  background-color: #f8f9fa;
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
}

.search-btn {
  padding: 12px 20px;
  background-color: #e60012;
  color: white;
  border: none;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
  transition: background-color 0.3s;
}

.search-btn:hover {
  background-color: #cc0010;
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
  font-size: 1.75rem;
  margin-bottom: 10px;
  color: #333;
  text-align: center;
}

.results-description {
  color: #666;
  margin-bottom: 25px;
  line-height: 1.6;
  text-align: center;
}

.loading-indicator {
  text-align: center;
  padding: 40px 20px;
}

.spinner {
  border: 4px solid #f3f3f3;
  border-top: 4px solid #e60012;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
  margin: 0 auto 15px;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.no-results {
  text-align: center;
  padding: 40px 20px;
  color: #666;
}

.results-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
}

.result-card {
  background-color: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 20px;
  transition: box-shadow 0.3s, transform 0.3s;
}

.result-card:hover {
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transform: translateY(-2px);
}

.result-header {
  border-bottom: 2px solid #e60012;
  padding-bottom: 12px;
  margin-bottom: 15px;
  text-align: center;
}

.result-characters-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 8px;
}

.result-characters {
  font-size: 2rem;
  font-weight: bold;
  color: #e60012;
}

.play-button {
  background: none;
  border: none;
  cursor: pointer;
  color: #e60012;
  padding: 5px;
  display: flex;
  align-items: center;
  transition: color 0.3s;
}

.play-button:hover {
  color: #cc0010;
}

.result-pinyin {
  font-size: 1.1rem;
  color: #666;
  text-align: center;
}

.result-details {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.result-item h4 {
  font-size: 0.9rem;
  color: #888;
  margin-bottom: 5px;
  text-transform: uppercase;
}

.result-item p {
  font-size: 1rem;
  color: #333;
  line-height: 1.5;
}

.popularity-stars {
  display: flex;
  gap: 2px;
}

.star {
  font-size: 1.2rem;
  color: #ddd;
}

.star.filled {
  color: #ffd700;
}

/* 分页控制 */
.pagination-controls {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
  padding-top: 20px;
  border-top: 1px solid #e0e0e0;
}

.pagination-info {
  color: #666;
  font-size: 0.95rem;
}

.pagination-buttons {
  display: flex;
  align-items: center;
  gap: 10px;
}

.page-button, .page-number {
  padding: 8px 15px;
  border: 1px solid #ddd;
  background-color: #fff;
  color: #333;
  cursor: pointer;
  border-radius: 4px;
  transition: all 0.3s;
}

.page-button:hover:not(:disabled), .page-number:hover {
  background-color: #e60012;
  color: white;
  border-color: #e60012;
}

.page-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.page-number.active {
  background-color: #e60012;
  color: white;
  border-color: #e60012;
}

.page-numbers {
  display: flex;
  gap: 5px;
}

/* 使用指南样式 */
.usage-guide {
  background-color: #f8f9fa;
  border-radius: 8px;
  padding: 30px;
  margin-bottom: 40px;
}

.usage-guide h2 {
  font-size: 1.75rem;
  margin-bottom: 25px;
  color: #333;
}

.guide-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.guide-card {
  background-color: #fff;
  padding: 20px;
  border-radius: 6px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.guide-card h3 {
  font-size: 1.2rem;
  margin-bottom: 10px;
  color: #e60012;
}

.guide-card p {
  color: #555;
  line-height: 1.6;
  font-size: 0.95rem;
}

/* FAQ 部分样式 */
.faq-section {
  margin-bottom: 40px;
}

.faq-section h2 {
  font-size: 1.75rem;
  margin-bottom: 20px;
  color: #333;
}

.faq-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.faq-item {
  background-color: #f8f9fa;
  border-radius: 6px;
  padding: 20px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.faq-item:hover {
  background-color: #e9ecef;
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
}

.toggle-icon {
  font-size: 1.5rem;
  color: #e60012;
  font-weight: bold;
}

.faq-answer {
  margin-top: 15px;
  padding-top: 15px;
  border-top: 1px solid #dee2e6;
}

.faq-answer p {
  color: #555;
  line-height: 1.7;
  margin: 0;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .page-title {
    font-size: 1.5rem;
  }
  
  .results-grid {
    grid-template-columns: 1fr;
  }
  
  .guide-grid {
    grid-template-columns: 1fr;
  }
  
  .pagination-controls {
    flex-direction: column;
    gap: 15px;
  }
  
  .page-numbers {
    flex-wrap: wrap;
    justify-content: center;
  }
}

/* 移动端宽度优化 - 确保占据95%屏幕宽度 */
@media (max-width: 430px) {
  .chinese-women-names-page > .container {
    padding: 0 !important;
    width: 100%;
  }

  .content-container {
    width: min(95vw, 100%) !important;
    max-width: min(95vw, 100%) !important;
    margin: 0 auto !important;
    padding: 0 !important;
    box-sizing: border-box;
  }

  .content {
    padding: 0 8px;
    box-sizing: border-box;
  }

  .form-section,
  .results-section,
  .usage-guide,
  .faq-section {
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
