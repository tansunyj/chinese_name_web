<template>
  <div class="translate-page chinese-boy-names-page">
    <div class="container">
      <!-- 面包屑导航 -->
      <BreadcrumbNav />
      <h1 class="page-title">Chinese Boy Names with Meanings (2025) | Authentic Male Names</h1>
      
      <div class="seo-intro">
        <p class="seo-description">Discover meaningful Chinese names for boys with pronunciations and cultural significance. Explore our collection of authentic strong, traditional and modern Chinese male names with their meanings and origins.</p>
      </div>
      
      <!-- 内容容器开始 -->
      <div class="content-container">
        <div class="content">
        <!-- 表单部分 -->
        <div class="form-section">
          <h2 class="section-title">Find Meaningful Chinese Boy Names</h2>
          
          <div class="search-filters">
            <div class="search-box">
              <input type="text" v-model="searchQuery" placeholder="Search Chinese boy names..." @input="filterNames" class="form-input" />
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
          <h2>Top Chinese Boy Names</h2>
          <p class="results-description">These strong Chinese male names are selected for their powerful meanings, distinguished characters, and cultural significance.</p>
          
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
          <h2>Understanding Chinese Boy Names</h2>
          
          <div class="guide-grid">
            <div class="guide-card">
              <h3>Character Selection</h3>
              <p>In Chinese culture, male names often use characters that represent strength, success, ambition, and moral virtue. Characters associated with mountains, dragons, literary talent, and leadership qualities are particularly popular for boys.</p>
            </div>
            
            <div class="guide-card">
              <h3>Sound Qualities</h3>
              <p>Chinese is a tonal language, and the sound quality of a name is important. Boys' names often use characters with stronger, falling tones (the 3rd and 4th tones) which create a more masculine and authoritative sound.</p>
            </div>
            
            <div class="guide-card">
              <h3>Meaning Layers</h3>
              <p>Chinese names can have multiple layers of meaning through visual composition, homophonic wordplay, historical allusions, and cultural references, creating rich and nuanced names with depth.</p>
            </div>
            
            <div class="guide-card">
              <h3>Modern Trends</h3>
              <p>Contemporary Chinese boy names often blend traditional values with modern aspirations, incorporating characters related to innovation, global perspective, and personal achievement while maintaining cultural roots.</p>
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
import { uniqueBoyNames } from '@/data/uniqueChineseBoyNames';
import { filterNames, paginateNames } from '@/data/allChineseNames';

export default {
  name: 'ChineseBoyNames',
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
          question: 'What are popular characters for Chinese boy names?',
          answer: 'Popular characters for Chinese boy names include 志 (will), 强 (strong), 明 (bright), 天 (heaven), 宇 (universe), 浩 (vast), 伟 (great), 俊 (handsome), 杰 (outstanding), and 智 (wisdom). These characters are chosen for their positive meanings that convey strength, intelligence, and good character.'
        },
        {
          question: 'How do Chinese names for boys differ from names for girls?',
          answer: 'Chinese boy names typically use characters associated with strength, intelligence, ambition, and moral virtues like righteousness. They often incorporate elements like mountains, dragons, or celestial bodies. Boy names tend to have stronger sounds with falling tones, while girl names typically have lighter, rising tones and include characters related to beauty, elegance, and gentleness.'
        },
        {
          question: 'Are there traditional Chinese boy names that are still popular today?',
          answer: 'Yes, many traditional Chinese boy names remain popular. Names containing characters like 文 (culture), 武 (martial), 德 (virtue), and 志 (ambition) have been used for generations and continue to be popular choices. These names connect boys to Chinese cultural values and historical traditions while maintaining relevance in modern society.'
        },
        {
          question: 'How many characters are typically in a Chinese boy\'s name?',
          answer: 'A typical Chinese boy\'s name consists of one character for the family surname followed by either one or two characters for the given name. Single-character given names (resulting in a two-character full name) are traditional and elegant, while two-character given names (three-character full names) provide more uniqueness and combinatorial possibilities for meaning.'
        },
        {
          question: 'Can I combine English and Chinese naming traditions?',
          answer: 'Absolutely! Many multicultural families choose a Chinese name that complements an English name, either phonetically or in meaning. For example, a boy named "William" might have a Chinese name with characters related to strength or determination. Some families use the Chinese name as a middle name or vice versa, creating a meaningful connection between different cultural naming traditions.'
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
        // 设置所有名字数据 - 使用去重后的数据
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
      title: "Chinese Boy Names with Meanings (2025) | Authentic Male Names",
      meta: [
        { name: 'description', content: 'Discover meaningful Chinese names for boys with pronunciations and cultural significance. Explore our collection of authentic strong, traditional and modern Chinese male names with their meanings.' },
        { name: 'keywords', content: 'chinese boy names,chinese names for boys,male chinese names,strong chinese boy names,chinese male names meaning,chinese baby boy names' }
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
.chinese-boy-names-page {
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
  background-color: #3b82f6;
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
  background-color: #2563eb;
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
</style>
