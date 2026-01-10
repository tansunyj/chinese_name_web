<template>
  <div class="translate-page chinese-men-names-page">
    <div class="container">
      <!-- 面包屑导航 -->
      <BreadcrumbNav />
      <h1 class="page-title">Chinese Men Names with Meanings (2026) | Professional Male Names for Adults</h1>
      
      <div class="seo-intro">
        <p class="seo-description">Discover professional Chinese names for adult men. Whether you're learning Chinese, working in China, or need an authentic name for business and social occasions, explore our collection of 300+ Chinese men names with meanings, pronunciations, and cultural significance.</p>
      </div>
      
      <!-- 内容容器开始 -->
      <div class="content-container">
        <div class="content">
        <!-- 表单部分 -->
        <div class="form-section">
          <h2 class="section-title">Find Professional Chinese Men Names (300+ Options)</h2>
          
          <div class="search-filters">
            <div class="search-box">
              <input type="text" v-model="searchQuery" placeholder="Search Chinese men names..." @input="filterNames" class="form-input" />
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
          <h2>Top Chinese Men Names</h2>
          <p class="results-description">These professional Chinese names are selected for their mature sound, meaningful characters, and appropriateness for adult men in business and social settings.</p>
          
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
          <h2>Understanding Chinese Men Names</h2>
          
          <div class="guide-grid">
            <div class="guide-card">
              <h3>Professional Names</h3>
              <p>Chinese names for adult men emphasize maturity, competence, and cultural sophistication. Characters representing wisdom, achievement, integrity, and leadership are particularly valued for professional and social contexts.</p>
            </div>
            
            <div class="guide-card">
              <h3>Cultural Significance</h3>
              <p>Men's names carry deeper meanings related to personal character, professional accomplishments, and cultural values. These names should sound authoritative and command respect in both business and social settings.</p>
            </div>
            
            <div class="guide-card">
              <h3>Business Appropriate</h3>
              <p>For professional settings, Chinese men's names should convey competence and cultural awareness. Names used on business cards, in email signatures, and official documents should project confidence and reliability.</p>
            </div>
            
            <div class="guide-card">
              <h3>Modern Choices</h3>
              <p>Contemporary Chinese men's names blend traditional strength with modern sensibilities, incorporating characters that represent global perspective, professional success, and personal integrity appropriate for today's business leaders.</p>
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
import { uniqueBoyNames } from '@/data/uniqueChineseBoyNames'; // 暂时复用boy names数据
import { filterNames, paginateNames } from '@/data/allChineseNames';

export default {
  name: 'ChineseMenNames',
  components: {
    ExploreMore,
    BreadcrumbNav
  },
  data() {
    return {
      searchQuery: '',
      expandedFaqs: Array(5).fill(false),
      
      // 分页相关数据
      currentPage: 1,
      pageSize: 20,
      totalItems: 0,
      
      // 全部名字数据 - 实际应用中可从 API 或数据库获取
      allNames: [], // 存储所有名字
      filteredNames: [], // 筛选后的名字
      
      // 当前显示的名字
      topNames: [],
      
      // 加载状态
      isLoading: false,
      
      faqs: [
        {
          question: 'What makes a good Chinese name for adult men?',
          answer: 'A good Chinese name for adult men should sound professional, authoritative, and culturally appropriate. It should use characters with meanings related to wisdom, integrity, achievement, and strength. The name should be memorable for native Chinese speakers while conveying maturity and competence suitable for business and social contexts.'
        },
        {
          question: 'Can I use my Chinese name on business cards and official documents?',
          answer: 'Absolutely! Many foreigners working in China or with Chinese businesses use their Chinese names on business cards, email signatures, and official documents. This demonstrates cultural respect and facilitates communication with Chinese colleagues and clients. Ensure your chosen name sounds professional and is written correctly in the appropriate character system.'
        },
        {
          question: 'Should I choose a Chinese name that sounds like my English name?',
          answer: 'You have options: phonetic translation (sound-alike) or meaning translation. For adult men in professional settings, many prefer names based on personal values or professional image rather than pure phonetic matching. A name representing your qualities or career goals can be more meaningful. Consult native speakers to ensure your choice sounds natural and appropriate.'
        },
        {
          question: 'How do Chinese men\'s names differ from boys\' names?',
          answer: 'Men\'s names for adults emphasize maturity, professional competence, and authority. They use more formal characters suggesting wisdom, achievement, and leadership. Boys\' names may include characters suggesting potential and youthful energy. Men\'s names avoid casual or diminutive forms, focusing on dignified characters appropriate for adult men in professional and social contexts.'
        },
        {
          question: 'Do I need to register my Chinese name officially?',
          answer: 'For most purposes, official registration isn\'t necessary. You can simply use your Chinese name in social and business contexts. However, if applying for Chinese citizenship, long-term residency, or need the name on official documents, registration through proper channels may be required. For everyday business cards, social media, and professional networking, informal adoption is perfectly acceptable.'
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
        // 暂时使用boy names数据，后续可以创建专门的men names数据集
        this.allNames = uniqueBoyNames;
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
                 name.meaning.toLowerCase().includes(this.searchQuery.toLowerCase());
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
      title: "Chinese Men Names with Meanings (2026) | Professional Male Names for Adults",
      meta: [
        { name: 'description', content: 'Discover 300+ professional Chinese names for adult men. Perfect for professionals, expats, and anyone needing authentic Chinese men names for business and social occasions.' },
        { name: 'keywords', content: 'chinese men names,chinese names for men,male chinese names,chinese man names,professional chinese names,adult chinese male names' }
      ],
      // 结构化数据
      script: [
        { type: 'application/ld+json', json: {
          '@context': 'https://schema.org',
          '@type': 'ItemList',
          'itemListElement': [
            // 这里会动态填充名字列表
          ],
          'numberOfItems': this.topNames.length
        }},
        { type: 'application/ld+json', json: {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          'mainEntity': this.faqs.map((faq, index) => ({
            '@type': 'Question',
            'name': faq.question,
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': faq.answer
            }
          }))
        }}
      ]
    };
  }
}
</script>

<style scoped>
/* 页面基础样式 */
.chinese-men-names-page {
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

.filter-groups {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
}

.filter-group {
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 200px;
}

.filter-group label {
  margin-bottom: 8px;
  font-size: 0.9rem;
  color: #555;
}

.form-select {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 0.95rem;
  background-color: white;
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
  transition: transform 0.2s;
}

.result-card:hover {
  transform: translateY(-5px);
}

.result-header {
  background-color: #f8f8f8;
  padding: 15px;
  border-bottom: 1px solid #eee;
  text-align: center;
}

.result-characters-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.result-characters {
  font-size: 2rem;
  font-weight: bold;
  color: #e60012;
}

.play-button {
  background-color: #e60012;
  border: none;
  border-radius: 50%;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: white;
  padding: 0;
  transition: all 0.2s ease;
}

.play-button:hover {
  background-color: #cc0010;
  transform: scale(1.05);
}

.play-button:active {
  transform: scale(0.95);
}

.result-pinyin {
  font-size: 1rem;
  color: #666;
  margin-top: 5px;
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
  font-size: 1rem;
  color: #333;
  margin-bottom: 5px;
}

.popularity-stars {
  display: flex;
}

.star {
  color: #ddd;
  font-size: 1.2rem;
}

.star.filled {
  color: #ffb400;
}

/* 名字分类部分 */
.name-categories-section {
  margin-bottom: 40px;
}

.name-categories-section h2 {
  font-size: 1.8rem;
  color: #333;
  margin-bottom: 10px;
  text-align: center;
}

.section-description {
  text-align: center;
  color: #666;
  margin-bottom: 25px;
}

.category-tabs {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 25px;
}

.tab-button {
  background: none;
  border: 1px solid #e60012;
  color: #e60012;
  padding: 8px 16px;
  border-radius: 20px;
  cursor: pointer;
  font-size: 0.95rem;
  transition: all 0.2s;
}

.tab-button.active {
  background-color: #e60012;
  color: white;
}

.names-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 15px;
}

.name-item {
  display: flex;
  align-items: center;
  padding: 12px 15px;
  border: 1px solid #eee;
  border-radius: 6px;
  background-color: white;
}

.name-chinese {
  font-size: 1.5rem;
  font-weight: bold;
  color: #e60012;
  margin-right: 15px;
  min-width: 60px;
  text-align: center;
}

.name-details {
  flex-grow: 1;
}

.name-pinyin {
  font-size: 0.95rem;
  color: #666;
  margin-bottom: 5px;
}

.name-meaning {
  font-size: 0.9rem;
  color: #444;
}

/* 使用指南 */
.usage-guide {
  margin-bottom: 40px;
}

.usage-guide h2 {
  font-size: 1.8rem;
  color: #333;
  margin-bottom: 25px;
  text-align: center;
}

.guide-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
}

.guide-card {
  background-color: #f8f9fa;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
}

.guide-card h3 {
  color: #e60012;
  margin-bottom: 10px;
  font-size: 1.2rem;
}

.guide-card p {
  color: #555;
  line-height: 1.6;
}

/* FAQ部分 */
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
  border-bottom: 1px solid #eee;
  padding: 15px 0;
  cursor: pointer;
}

.faq-question {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.faq-question h3 {
  font-size: 1.1rem;
  font-weight: 500;
  color: #333;
  margin: 0;
}

.toggle-icon {
  font-size: 1.5rem;
  color: #e60012;
}

.faq-answer {
  padding-top: 15px;
  color: #555;
  line-height: 1.6;
}

/* 加载指示器样式 */
.loading-indicator {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 0;
}

.spinner {
  width: 40px;
  height: 40px;
  border: 4px solid rgba(230, 0, 18, 0.2);
  border-top-color: #e60012;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-bottom: 15px;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.loading-indicator p {
  color: #666;
  font-size: 1rem;
}

/* 无结果提示 */
.no-results {
  text-align: center;
  padding: 30px;
  background-color: #f8f9fa;
  border-radius: 8px;
  margin: 20px 0;
}

.no-results p {
  color: #666;
  font-size: 1rem;
}

/* 分页控件样式 */
.pagination-controls {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
}

.pagination-info {
  margin-bottom: 15px;
  color: #666;
  font-size: 0.9rem;
}

.pagination-buttons {
  display: flex;
  align-items: center;
}

.page-button {
  padding: 8px 12px;
  background-color: #f0f0f0;
  border: 1px solid #ddd;
  color: #333;
  cursor: pointer;
  transition: background-color 0.2s;
  margin: 0 5px;
}

.page-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.page-button:hover:not(:disabled) {
  background-color: #e0e0e0;
}

.page-numbers {
  display: flex;
}

.page-number {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #ddd;
  margin: 0 2px;
  background-color: white;
  color: #333;
  cursor: pointer;
  transition: all 0.2s;
}

.page-number.active {
  background-color: #e60012;
  color: white;
  border-color: #e60012;
}

.page-number:hover:not(.active) {
  background-color: #f0f0f0;
}

/* 响应式调整 */
@media (max-width: 768px) {
  .results-grid, .guide-grid {
    grid-template-columns: 1fr;
  }
  
  .filter-groups {
    flex-direction: column;
  }
  
  .filter-group {
    min-width: 100%;
  }
}

@media (max-width: 430px) {
  .chinese-men-names-page > .container {
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
