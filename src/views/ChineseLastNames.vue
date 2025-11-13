<template>
  <div class="translate-page chinese-last-names-page">
    <div class="container">
      <!-- 面包屑导航 -->
      <BreadcrumbNav />
      <h1 class="page-title">Chinese Last Names: 110+ Family Surnames & Meanings (2025)</h1>
      
      <div class="seo-intro">
        <p class="seo-description">Explore 110+ Chinese surnames and family names with meanings, origins, and pronunciation. Discover the most common Chinese last names and their historical significance in Chinese culture and genealogy.</p>
      </div>
      
      <!-- 内容容器开始 -->
      <div class="content-container">
        <div class="content">
        <!-- 表单部分 -->
        <div class="form-section">
          <h2 class="section-title">Find Chinese Family Names (110+ Options)</h2>
          
          <div class="search-filters">
            <div class="search-box">
              <input type="text" v-model="searchQuery" placeholder="Search Chinese surnames..." @input="filterSurnames" class="form-input" />
              <button class="search-btn" @click="filterSurnames">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        <!-- 结果部分 -->
        <div class="results-section">
          <h2>Most Common Chinese Surnames</h2>
          <p class="results-description">The top Chinese family names used by millions of people in China and around the world.</p>
          
          <!-- 加载指示器 -->
          <div v-if="isLoading" class="loading-indicator">
            <div class="spinner"></div>
            <p>Loading surnames...</p>
          </div>
          
          <!-- 无结果提示 -->
          <div v-else-if="filteredNames.length === 0" class="no-results">
            <p>No surnames match your search criteria. Please try different filters.</p>
          </div>
          
          <!-- 结果网格 -->
          <div v-else class="results-grid">
            <div v-for="surname in topNames" :key="surname.id" class="result-card" @click="showSurnameDetail(surname)">
              <div class="result-header">
                <div class="result-characters-container">
                  <div class="result-characters">{{ surname.chinese }}</div>
                  <button class="play-button" @click.stop="playPronunciation(surname.chinese)" title="Play pronunciation">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" height="20">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </button>
                </div>
                <div class="result-pinyin">{{ surname.pinyin }}</div>
              </div>
              <div class="result-details">
                <div class="result-item">
                  <h4>Meaning</h4>
                  <p>{{ getTruncatedMeaning(surname) }}</p>
                </div>
                <div class="result-item">
                  <h4>Prevalence</h4>
                  <div class="popularity-stars">
                    <span v-for="n in 5" :key="n" class="star" :class="{ 'filled': n <= surname.prevalence }">★</span>
                  </div>
                </div>
              </div>
              <div class="view-more">
                <span class="view-more-text">Click for details</span>
              </div>
            </div>
          </div>
          
          <!-- 详情弹窗 - 使用通用组件 -->
          <surname-detail-modal 
            :visible="!!selectedSurname" 
            :surname="enrichedSurname" 
            @close="closeSurnameDetail"
          />
          
          <!-- 分页控件 -->
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
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M15 18l-6-6 6-6"></path>
                </svg>
              </button>
              
              <button 
                v-for="page in displayedPages" 
                :key="page" 
                @click="changePage(page)" 
                class="page-button"
                :class="{ 'active': page === currentPage }"
              >
                {{ page }}
              </button>
              
              <button 
                @click="changePage(currentPage + 1)" 
                :disabled="currentPage === totalPages"
                class="page-button"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M9 18l6-6-6-6"></path>
                </svg>
              </button>
            </div>
          </div>
        
        <!-- 姓氏分类部分已移除 -->
        
        <!-- 使用指南 -->
        <div class="usage-guide">
          <h2>Understanding Chinese Family Names</h2>
          
          <div class="guide-grid">
            <div class="guide-card">
              <h3>Historical Significance</h3>
              <p>Chinese surnames are typically placed before given names, reflecting the traditional importance of family lineage. Many date back thousands of years and carry rich historical and cultural significance.</p>
            </div>
            
            <div class="guide-card">
              <h3>Distribution Patterns</h3>
              <p>Just 100 surnames are used by 85% of the population in China. The top three surnames—Wang (王), Li (李), and Zhang (张)—alone account for more than 20% of the Chinese population.</p>
            </div>
            
            <div class="guide-card">
              <h3>Origin Types</h3>
              <p>Chinese surnames can originate from ancestral states, geographical locations, occupations, titles, clan names, or distinguished ancestors. Each type reflects different aspects of Chinese history.</p>
            </div>
            
            <div class="guide-card">
              <h3>Regional Variations</h3>
              <p>Some surnames are more common in specific regions of China, reflecting historical migration patterns, ancient states, and regional cultural developments over centuries.</p>
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
  </div>
</template>

<script>
import ExploreMore from '@/components/ExploreMore.vue';
import BreadcrumbNav from '@/components/BreadcrumbNav.vue';
import { filterNames, paginateNames, getDetailedLastName } from '@/data/allChineseNames';
import { surnameDetails } from '@/data/surnameDetails';
import SurnameDetailModal from '@/components/SurnameDetailModal.vue';
// 导入完整的姓氏数据源
import { uniqueLastNames } from '@/data/uniqueLastNames';

export default {
  name: 'ChineseLastNames',
  components: {
    ExploreMore,
    BreadcrumbNav,
    SurnameDetailModal
  },
  data() {
    return {
      searchQuery: '',
      expandedFaqs: Array(5).fill(false),
      alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''),
      
      // 分页相关数据
      currentPage: 1,
      pageSize: 20,
      totalItems: 0,
      
      // 全部姓氏数据
      allNames: [], // 存储所有姓氏
      filteredNames: [], // 筛选后的姓氏
      
      // 当前显示的姓氏
      topNames: [],
      
      // 加载状态
      isLoading: false,
      
      // 详情弹窗相关数据
      selectedSurname: null,
      detailedSurname: null,
      
      faqs: [
        {
          question: 'Why do so many Chinese people share the same surnames?',
          answer: 'The concentration of Chinese surnames is due to historical factors like population growth, imperial naming policies, and cultural practices. Over centuries, some clans grew much larger than others, and some surnames were adopted by multiple unrelated families. Additionally, during certain periods in Chinese history, emperors bestowed their surnames on favored subjects or officials, further increasing the prevalence of certain family names.'
        },
        {
          question: 'How are Chinese surnames different from Western surnames?',
          answer: 'Chinese surnames come before given names, unlike Western naming traditions where surnames come last. Chinese surnames are also much older, with many dating back 3,000+ years, while most Western surnames became common only 500-1,000 years ago. Chinese surnames are typically single characters, while most Western surnames are multi-syllabic. Additionally, there are only about 4,000 Chinese surnames in use, compared to hundreds of thousands of Western surnames.'
        },
        {
          question: 'Why do Chinese people put their family name first?',
          answer: 'In Chinese culture, the family name comes first to emphasize the importance of family lineage over individual identity, reflecting Confucian values that prioritize family and ancestry. This ordering shows respect for ancestors and highlights the continuity of the family line. The individual\'s given name, which comes after the family name, is considered more personal and often used only by close friends and family members.'
        },
        {
          question: 'Can Chinese surnames change over time?',
          answer: 'While Chinese surnames remain remarkably stable compared to many other cultures, they can change through several mechanisms. Historically, people might adopt a new surname when serving a new ruler or migrating to a new region. Character simplification in the 20th century altered the written form of many surnames. Some ethnic minorities in China adopted Han Chinese surnames when assimilating. In rare cases, pronunciation shifts over centuries transformed certain surnames into new forms.'
        },
        {
          question: 'Are there unique naming traditions for Chinese diaspora communities?',
          answer: 'Yes, Chinese diaspora communities often adapt their naming practices to local customs. In Southeast Asia, many Chinese families follow local naming orders. In Western countries, some Chinese-Americans may reverse the traditional order, placing given names before family names. Some may adopt Western given names while retaining their Chinese surname, or use their Chinese given name as a middle name. Romanization systems also vary by region, leading to different spelling conventions for the same Chinese surname.'
        }
      ]
    };
  },
  computed: {
    // 将选中的姓氏数据与详细信息结合
    enrichedSurname() {
      if (!this.selectedSurname) return {};
      
      // 进行深复制，避免修改原始数据
      const enriched = JSON.parse(JSON.stringify(this.selectedSurname));
      
      // 获取详细信息
      const details = surnameDetails[enriched.chinese];
      if (details) {
        // 合并详细信息
        enriched.detailedMeaning = details.detailedMeaning;
        enriched.historical_figures = details.historical_figures;
      }
      
      return enriched;
    },
    
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
        // 计算起始页，使当前页尽量居中显示
        let halfVisiblePages = Math.floor(maxVisiblePages / 2);
        let start = Math.max(1, this.currentPage - halfVisiblePages);
        let end = Math.min(this.totalPages, start + maxVisiblePages - 1);
        
        // 如果计算出来的页数少于需要显示的页码数，则调整起始页
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
      
      // 使用完整的姓氏数据源，包含约110+条数据
      this.allNames = uniqueLastNames;
      this.totalItems = this.allNames.length;
      
      // 只在开发模式下输出日志
      if (process.env.NODE_ENV === 'development') {
        console.log('Loaded complete surnames data:', this.totalItems, 'items');
      }
      
      // 立即应用过滤和分页
      this.filterAndPaginateNames();
      
      // 更新加载状态
      this.isLoading = false;
      
      // 开发模式下检查结果
      if (process.env.NODE_ENV === 'development') {
        console.log('当前显示姓氏数量:', this.topNames.length);
        console.log('总姓氏数量:', this.filteredNames.length);
        
        if (this.topNames.length === 0) {
          console.error('页面内容加载失败 - 没有数据显示');
        }
      }
    },
    
    // 过滤姓氏
    filterSurnames() {
      // 将重置为第一页，因为过滤条件变化
      this.currentPage = 1;
      this.filterAndPaginateNames();
    },
    
    // 过滤并分页姓氏 - 增强版
    filterAndPaginateNames() {
      try {
        // 检查数据是否存在
        if (!this.allNames || !Array.isArray(this.allNames) || this.allNames.length === 0) {
          console.error('没有可用的姓氏数据');
          // 使用空数组定义
          this.filteredNames = [];
          this.topNames = [];
          return;
        }
        
        // 1. 先应用过滤
        if (this.searchQuery && this.searchQuery.trim() !== '') {
          // 有搜索条件，使用导入的过滤函数
          this.filteredNames = filterNames(this.allNames, {
            query: this.searchQuery
          });
        } else {
          // 无搜索条件，直接使用全部数据
          this.filteredNames = [...this.allNames];
        }
        
        // 2. 再应用分页
        const startIndex = (this.currentPage - 1) * this.pageSize;
        const endIndex = startIndex + this.pageSize;
        
        if (startIndex >= this.filteredNames.length) {
          // 起始索引超出范围，重置为第一页
          this.currentPage = 1;
          this.topNames = this.filteredNames.slice(0, this.pageSize);
        } else {
          // 正常分页
          this.topNames = this.filteredNames.slice(startIndex, endIndex);
        }
        
        // 输出调试信息
        if (process.env.NODE_ENV === 'development') {
          console.log('过滤后数据数量:', this.filteredNames.length);
          console.log('当前显示数据数量:', this.topNames.length);
        }
      } catch (err) {
        console.error('过滤和分页出错:', err);
        // 出错时确保至少有空数组
        this.filteredNames = [];
        this.topNames = [];
      }
    },
    
    // 更改页码
    changePage(page) {
      if (page < 1 || page > this.totalPages) return;
      
      this.currentPage = page;
      this.filterAndPaginateNames();
      // 移除滚动到顶部的代码，保留用户当前滚动位置
    },
    
    // 显示姓氏详情
    showSurnameDetail(surname) {
      this.selectedSurname = surname;
      this.detailedSurname = getDetailedLastName(surname.chinese);
    },
    
    // 关闭姓氏详情弹窗
    closeSurnameDetail() {
      this.selectedSurname = null;
      this.detailedSurname = null;
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
    },
    
    // 从详细解释中获取截断后的文本，用于卡片显示
    getTruncatedMeaning(surname) {
      try {
        // 截取长度
        const length = 60;
        
        // 如果没有surname数据或其属性，返回默认文本
        if (!surname || !surname.chinese || !surname.pinyin) {
          return 'This surname has cultural significance in Chinese history and tradition.';
        }
        
        // 简化流程，直接生成常见姓氏的解释
        let meaning = surname.meaning || '';
        let detailedMeaning = `The surname ${surname.pinyin} (${surname.chinese}) has significant meaning in Chinese culture`;
        
        if (meaning && meaning.length > 0) {
          detailedMeaning += ` as it relates to "${meaning}".`;
        } else {
          detailedMeaning += `.`;
        }
        
        detailedMeaning += ` This character has been used as a surname for many generations in Chinese history.`;
        
        // 截取适当长度
        if (detailedMeaning.length > length) {
          return detailedMeaning.substring(0, length) + '...';
        } else {
          return detailedMeaning;
        }
      } catch (err) {
        console.error('获取姓氏含义出错:', err);
        return 'Chinese surname with cultural significance.';
      }
    },
    
    toggleFaq(index) {
      this.$set(this.expandedFaqs, index, !this.expandedFaqs[index]);
    }
  },
  head() {
    return {
      title: "Chinese Last Names: 110+ Family Surnames & Meanings (2025)",
      meta: [
        { name: 'description', content: 'Explore 110+ Chinese surnames and family names with meanings, origins, and pronunciation. Discover the most common Chinese last names and their historical significance in Chinese culture.' },
        { name: 'keywords', content: 'chinese last names,chinese family names,common chinese surnames,chinese surnames,chinese surname meanings,list of chinese surnames' }
      ],
      // 结构化数据
      script: [
        { type: 'application/ld+json', json: {
          '@context': 'https://schema.org',
          '@type': 'ItemList',
          'itemListElement': [
            // 这里会动态填充姓氏列表
          ],
          'numberOfItems': this.topNames ? this.topNames.length : 0
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
.chinese-last-names-page {
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

/* 使用内容容器样式替代 */
.content {
  width: 100%;
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

.result-item p {
  color: #555;
  line-height: 1.4;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  height: auto;
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

/* 姓氏分类部分 */
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

/* 分页控件样式 */
.pagination-controls {
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.pagination-info {
  margin-bottom: 15px;
  color: #333; /* 加深颜色，提高可读性 */
  font-size: 0.95rem;
  font-weight: 500; /* 增加字重 */
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
  color: #333 !important; /* 强制设置文字颜色，确保可见性 */
  font-weight: 500; /* 增加字重 */
}

.page-button:hover {
  border-color: #e60012;
  color: #e60012 !important; /* 悬停时的文字颜色 */
  background-color: #fff8f8; /* 添加悬停背景色 */
}

.page-button.active {
  background-color: #e60012;
  border-color: #e60012;
  color: white !important; /* 确保激活状态的文字颜色始终为白色 */
  font-weight: 600; /* 增加当前页码的字重 */
}

.page-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  color: #777 !important; /* 禁用状态的文字颜色 */
}

.page-numbers {
  display: flex;
  gap: 5px;
  margin: 0 5px;
}

.page-number {
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #f8f9fa;
  cursor: pointer;
  font-size: 0.9rem;
  transition: all 0.2s;
}

.page-number:hover {
  background-color: #eee;
}

.page-number.active {
  background-color: #e60012;
  color: white;
  border-color: #e60012;
}

/* 卡片点击查看详情样式 */
.result-card {
  position: relative;
  cursor: pointer;
}

.view-more {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0,0,0,0.05));
  padding: 10px 0;
  text-align: center;
  color: #e60012;
  font-size: 0.85rem;
  opacity: 0;
  transition: opacity 0.2s;
}

.result-card:hover .view-more {
  opacity: 1;
}

/* 详情弹窗样式已移至通用组件中 */
</style>
