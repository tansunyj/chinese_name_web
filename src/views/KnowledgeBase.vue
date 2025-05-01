<template>
  <div class="knowledge-page">
    <div class="container">
      <h1 class="page-title">Chinese Names Guide</h1>
      <p class="seo-description">Discover the art of Chinese naming traditions, character meanings, and cultural practices. Learn how Chinese names are translated and how to say your name in Chinese. Découvrez l'art des traditions de nommage chinois. Entdecken Sie die Kunst der chinesischen Namenstraditionen. Узнайте о традициях китайских имен. 中国の名前の伝統と文化的意義を発見しましょう。</p>
      
      <div class="knowledge-grid">
        <!-- 新增热门中文名字卡片 -->
        <router-link to="/popular-chinese-names" class="category-card">
          <div class="card-icon">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
          </div>
          <h2>150 Popular Chinese Names for Boys and Girls</h2>
          <p>Discover the most popular Chinese names with their meanings and pronunciations for both boys and girls.</p>
        </router-link>
        
        <router-link to="/chinese-surnames" class="category-card">
          <div class="card-icon">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <h2>Chinese Surnames</h2>
          <p>Explore the origins, meanings, and geographical distribution of common Chinese surnames.</p>
        </router-link>
        
        <!-- 百家姓卡片 -->
        <router-link to="/baijiaxing" class="category-card baijiaxing-card">
          <div class="card-icon">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h2>Hundred Family Surnames</h2>
          <p>Explore the origins, history and detailed sources of ancient Chinese "Hundred Family Surnames", including the origins of major surnames such as Zhao, Qian, Sun, Li, etc.</p>
        </router-link>
        
        <router-link to="/naming-traditions" class="category-card">
          <div class="card-icon">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <h2>Naming Traditions</h2>
          <p>Learn about Chinese naming traditions, generational naming practices, and how names reflect cultural values.</p>
        </router-link>
        
        <router-link to="/historical-names" class="category-card">
          <div class="card-icon">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2>Historical Figures</h2>
          <p>Explore the names of famous historical figures in Chinese culture and their meanings.</p>
        </router-link>
        
        <router-link to="/regional-naming-differences" class="category-card">
          <div class="card-icon">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2>Regional Differences</h2>
          <p>Explore naming customs differences across various regions and ethnic minorities in China.</p>
        </router-link>
        
        <router-link to="/naming-taboos" class="category-card">
          <div class="card-icon">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
            </svg>
          </div>
          <h2>Naming Taboos</h2>
          <p>Learn about cultural taboos and potential pitfalls to avoid when choosing a Chinese name.</p>
        </router-link>

        <!-- 修改五行八字理论卡片 -->
        <router-link to="/wuxing-bazi" class="category-card">
          <div class="card-icon">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h2>Five Elements and Eight Characters Theory</h2>
          <p>Learn how to choose characters that balance or complement your birth chart based on your birth time and date.</p>
        </router-link>

        <!-- 修改姓名学数理卡片 -->
        <router-link to="/name-numerology" class="category-card">
          <div class="card-icon">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
          </div>
          <h2>Name Numerology</h2>
          <p>Understand the numerical significance of name strokes, including analysis of celestial, terrestrial, human, outer and total patterns.</p>
        </router-link>

        <!-- 新增音韵和谐卡片 -->
        <router-link to="/sound-harmony" class="category-card">
          <div class="card-icon">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
            </svg>
          </div>
          <h2>Sound Harmony</h2>
          <p>Harmony of tones and sounds in names, including the use of level and oblique tones and vocal aesthetics.</p>
        </router-link>

        <!-- 新增形义结合卡片 -->
        <router-link to="/form-meaning" class="category-card">
          <div class="card-icon">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <h2>Form and Meaning Integration</h2>
          <p>The aesthetic balance of Chinese character structure and the art of character meaning combinations.</p>
        </router-link>

        <!-- 新增典籍用字卡片 -->
        <router-link to="/classical-characters" class="category-card">
          <div class="card-icon">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <h2>Classical Literature Characters</h2>
          <p>Selecting characters with profound cultural significance from classical literature, poetry and prose.</p>
        </router-link>

        <!-- 新增季节时令用字卡片 -->
        <router-link to="/seasonal-characters" class="category-card">
          <div class="card-icon">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
          </div>
          <h2>Seasonal Characters</h2>
          <p>Choosing Chinese characters related to the birth season and its corresponding natural elements.</p>
        </router-link>

        <!-- 新增家族命名规则卡片 -->
        <router-link to="/family-naming-rules" class="category-card">
          <div class="card-icon">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
          <h2>Family Naming Conventions</h2>
          <p>Analysis and application of family genealogy, generational characters and traditional family naming customs.</p>
        </router-link>

        <!-- 新增生肖属相相配卡片 -->
        <router-link to="/zodiac-naming" class="category-card">
          <div class="card-icon">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <h2>Chinese Zodiac Compatibility</h2>
          <p>Naming suggestions and taboos related to individual Chinese zodiac signs.</p>
        </router-link>

        <!-- 新增字音字形避讳卡片 -->
        <router-link to="/naming-sound-form-taboos" class="category-card">
          <div class="card-icon">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <h2>Sound and Form Avoidance</h2>
          <p>Avoiding characters that share names with elders or celebrities, or have homophonic associations with unlucky meanings.</p>
        </router-link>

        <!-- 新增现代与传统的结合卡片 -->
        <router-link to="/modern-traditional" class="category-card">
          <div class="card-icon">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
          </div>
          <h2>Blending Modern and Traditional</h2>
          <p>Balancing traditional cultural elements with modern aesthetics in name selection.</p>
        </router-link>

        <!-- 新增时代取名风格卡片 -->
        <router-link to="/era-naming-styles" class="category-card">
          <div class="card-icon">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2>Era Naming Styles</h2>
          <p>Explore popular naming styles and era characteristics from different historical periods in China.</p>
        </router-link>
      </div>
      
      <div v-if="activeCategory" class="category-content">
        <div class="category-header">
          <button class="back-button" @click="activeCategory = null">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            返回
          </button>
          <h2>{{ $t(`knowledge.categories.${activeCategory}`) }}</h2>
        </div>
        
        <div class="article-list">
          <div v-for="(article, index) in getCategoryArticles()" :key="index" class="article-card">
            <div class="article-image" :style="{ backgroundImage: `url(${article.image})` }"></div>
            <div class="article-content">
              <h3>{{ article.title }}</h3>
              <p>{{ article.summary }}</p>
              <button class="read-button" @click="readArticle(article)">阅读更多</button>
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
            title: '《百家姓》与中国姓氏渊源',
            summary: '详细解析《百家姓》的历史、文化意义及收录的主要姓氏来源',
            image: 'https://placehold.co/600x400',
            date: '2023年6月10日',
            content: '<h3>《百家姓》简介</h3><p>《百家姓》是中国历史上流传最广的姓氏类书籍之一，成书于北宋初年（约公元960-1127年），按"赵钱孙李，周吴郑王..."的顺序记录了当时常见的姓氏。全书共收录了411个单姓和30个复姓，是了解中国姓氏文化的重要文献。</p><h3>历史渊源</h3><p>《百家姓》原为北宋时期教育幼童的启蒙读物，与《三字经》、《千字文》并称为"三百千"。编排顺序据信与当时社会地位和政治影响力有关，"赵"姓排在首位是因为宋朝皇室姓赵。</p><h3>主要姓氏来源详解</h3><h4>1. 赵氏</h4><p>源于嬴姓，相传为赵衰之后，周武王时善于养马的功臣，因此得姓。著名人物包括赵匡胤（宋太祖）、赵云（三国蜀汉名将）、赵孟頫（元代书法家）。</p><h4>2. 钱氏</h4><p>源于姬姓，相传为春秋时期楚国贵族钱伯之后。五代十国时期的吴越国开国君主钱镠使该姓在江浙一带广为流传。</p><h4>3. 孙氏</h4><p>源于子姓，相传为商朝微子启之后。春秋时期，宋国公子孙氏因封地得姓。著名人物包括孙武（春秋军事家）、孙权（三国吴国君主）、孙中山（中国民主革命先驱）。</p><h4>4. 李氏</h4><p>起源于嬴姓，传说为唐尧后裔陵阳氏所改。"李"字与"杏"有关，相传与种植李子树有关联。著名人物包括李白（唐代诗人）、李世民（唐太宗）、李清照（宋代女词人）。</p><h4>5. 周氏</h4><p>源于姬姓，相传为周文王后裔。另有说法认为与古代的周国有关，因国为姓。著名人物包括周公旦（周朝政治家）、周敦颐（宋代哲学家）、周恩来（中国开国总理）。</p><h4>6. 吴氏</h4><p>源于姬姓，相传为周成王少子吴王季札后裔。亦有说法认为与古代的吴国有关。著名人物包括吴道子（唐代画家）、吴敬梓（清代小说家）。</p><h4>7. 郑氏</h4><p>源于姬姓，相传为周武王弟弟康叔的子孙。康叔被封于卫，其后裔因居住在郑地而得姓郑。著名人物包括郑成功（明末清初民族英雄）。</p><h4>8. 王氏</h4><p>源于姬姓，据传始于周文王时期。"王"字本意为统治者，初为称号，后成为姓氏。著名人物包括王羲之（东晋书法家）、王安石（北宋政治家）。</p><h3>其他重要姓氏</h3><p><strong>张氏：</strong>源于姬姓，相传起于公输般（鲁班）。"张"本义为拉弓，与战争和手工业有关。</p><p><strong>刘氏：</strong>出自姬姓，相传为周武王弟弟康叔的后代所用。刘邦建立汉朝后，刘姓在全国广为流传。</p><p><strong>陈氏：</strong>源于妫姓，相传为舜帝后裔。亦有说法认为与古代的陈国有关。</p><p><strong>杨氏：</strong>源于姬姓，相传起源于春秋时期的杨国。"杨"与杨柳树有关。</p><p><strong>黄氏：</strong>源于姬姓和姒姓，相传为黄帝后裔。在南方地区尤为常见。</p><h3>姓氏的分类来源</h3><p><strong>1. 以祖先名字为姓：</strong>如姬、姚、姜、嬴等。</p><p><strong>2. 以官职为姓：</strong>如司马（掌管军事）、司徒（掌管民政）、司空（掌管工程）。</p><p><strong>3. 以国名为姓：</strong>如齐、鲁、燕、赵、魏等。</p><p><strong>4. 以地名为姓：</strong>如东郭、南宫、上官等。</p><p><strong>5. 以图腾为姓：</strong>如马、牛、羊、熊等。</p><p><strong>6. 以职业为姓：</strong>如陶（制陶）、冶（冶金）、匠（工匠）等。</p><h3>文化意义</h3><p>《百家姓》不仅是姓氏的汇编，更是中国社会历史变迁的缩影。它展现了中华民族的迁徙历史、政治变革和文化传承，是研究中国姓氏文化和家族历史的重要参考。</p>'
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
        taboos: [
          {
            title: 'Naming Taboos to Avoid',
            summary: 'Understand cultural sensitivities and taboos when selecting a Chinese name.',
            image: 'https://placehold.co/600x400',
            date: 'July 20, 2023',
            content: '<p>When choosing a Chinese name, there are several taboos and considerations to be aware of to avoid cultural missteps.</p><h3>Homophones with Negative Meanings</h3><p>Chinese is rich in homophones (words that sound the same but have different meanings). A character might sound like another word with an unfortunate meaning. For example, the number four (四, sì) sounds similar to death (死, sǐ), making it an inauspicious choice for a name.</p><h3>Historical Name Avoidance</h3><p>Traditionally, using the names of ancestors, especially the personal names of recent ancestors, was considered disrespectful. Similarly, names of current or recent emperors were taboo for commoners to use.</p><h3>Inappropriate Character Combinations</h3><p>Some character combinations might create unintended meanings or awkward phrases. It\'s important to consider how characters interact semantically when placed together.</p><h3>Modern Considerations</h3><p>In contemporary times, avoiding names that could lead to bullying or misunderstanding is important. Names that are too unusual, difficult to pronounce, or have potentially embarrassing meanings should be avoided.</p>'
          }
        ],
        fiveElements: [
          {
            title: 'Understanding the Five Elements Theory in Naming',
            summary: 'Learn how the five elements theory influences Chinese name selection and its importance in achieving balance.',
            image: 'https://placehold.co/600x400',
            date: 'August 5, 2023',
            content: '<p>The Five Elements Theory (五行理论) is a cornerstone of Chinese cosmology and plays a significant role in name selection.</p><h3>Elements and Their Attributes</h3><p>The five elements - Wood (木), Fire (火), Earth (土), Metal (金), and Water (水) - each have associated characteristics, qualities, and interactions. In naming, characters are associated with specific elements based on their meaning, radical, or pronunciation.</p><h3>Balancing Elements in Names</h3><p>An ideal name should balance the five elements or complement one\'s birth chart. For example, if a person\'s birth chart shows weakness in the Wood element, incorporating characters associated with Wood in their name might be considered beneficial.</p><h3>Element Interactions</h3><p>The five elements interact in cycles of generation and restriction. Wood generates Fire, Fire generates Earth, Earth generates Metal, Metal generates Water, and Water generates Wood. Understanding these interactions helps in creating harmonious name combinations.</p>'
          },
          {
            title: 'Eight Characters (BaZi) and Name Selection',
            summary: 'Discover how your birth time and date influence your eight characters chart and name recommendations.',
            image: 'https://placehold.co/600x400',
            date: 'August 12, 2023',
            content: '<p>The Eight Characters (八字), also known as the Four Pillars of Destiny, are derived from a person\'s birth date and time.</p><h3>What Are the Eight Characters?</h3><p>The eight characters consist of four pairs of Heavenly Stems and Earthly Branches that represent the year, month, day, and hour of birth. Each pair corresponds to different aspects of a person\'s life and character.</p><h3>Name Selection Based on BaZi</h3><p>A professional name selection often begins with a BaZi analysis to identify which elements are abundant or lacking in a person\'s chart. The name can then be designed to supplement deficient elements or moderate excessive ones.</p><h3>The Role of the Day Master</h3><p>The Day Master (日主) is particularly important in BaZi analysis for naming purposes. It represents the core of a person\'s being and influences which elements would be most beneficial in their name.</p>'
          }
        ],
        nameNumerology: [
          {
            title: 'The Numerology of Chinese Names',
            summary: 'Explore how stroke counts and numerical values influence the fortune of a Chinese name.',
            image: 'https://placehold.co/600x400',
            date: 'August 18, 2023',
            content: '<p>Stroke count analysis is a systematic approach to evaluating the auspiciousness of Chinese names based on numerical values.</p><h3>The Five Formations</h3><p>Chinese name numerology typically involves calculating five key numbers: Heavenly Formation (天格), Human Formation (人格), Earthly Formation (地格), External Formation (外格), and Total Formation (总格). Each has specific significance in determining how the name influences different aspects of life.</p><h3>Auspicious Numbers</h3><p>Certain stroke counts are considered more fortunate than others. For example, numbers 1, 3, 5, 7, 8, 11, 13, 15, 16, 18, 21, 23, 24, 29, 31, 32, 33, 35, 37, 39, 41, 45, 47, and 48 are often considered lucky in Chinese numerology.</p><h3>Balancing the Formations</h3><p>An ideal name should have harmonious relationships between the five formations. The Human Formation, which represents the person\'s core self, is particularly important to be auspicious.</p>'
          }
        ],
        soundHarmony: [
          {
            title: 'The Musicality of Chinese Names',
            summary: 'Learn about tonal patterns and phonetic balance in creating melodious Chinese names.',
            image: 'https://placehold.co/600x400',
            date: 'August 25, 2023',
            content: '<p>The sound harmony of a Chinese name significantly impacts its aesthetic quality and cultural appropriateness.</p><h3>Tonal Patterns</h3><p>Mandarin Chinese has four main tones plus a neutral tone. A harmonious name often involves a pleasing arrangement of these tones, avoiding monotony or awkward combinations. Traditional naming sometimes follows patterns like "level-rising" (平上) or "rising-falling" (上去) for two-character names.</p><h3>Consonant and Vowel Balance</h3><p>Beyond tones, the distribution of consonants and vowels affects how smoothly a name flows. Names that are too consonant-heavy may sound harsh, while those with too many similar vowels might blend together unclearly.</p><h3>Regional Considerations</h3><p>Different Chinese dialects have varying phonetic systems, which can influence name selection. A name that sounds melodious in Mandarin might be awkward or even take on unfortunate meanings in Cantonese, Hokkien, or other regional languages.</p>'
          }
        ],
        formMeaning: [
          {
            title: 'Visual Aesthetics in Chinese Characters',
            summary: 'Understand the importance of character structure and visual balance in name selection.',
            image: 'https://placehold.co/600x400',
            date: 'September 1, 2023',
            content: '<p>The visual form of Chinese characters adds another dimension to name selection that is unique to Chinese culture.</p><h3>Character Structure Types</h3><p>Chinese characters have different structural compositions: pictographs, ideographs, compound ideographs, phono-semantic compounds, and more. The visual balance of these structures within a name contributes to its overall aesthetic appeal.</p><h3>Structural Harmony</h3><p>A visually harmonious name often balances complex and simple characters. For example, pairing a character with many strokes with one that has fewer strokes creates visual rhythm. Additionally, complementary structures (such as balancing a left-right structure with a top-bottom structure) can create visual interest.</p><h3>Semantic-Visual Alignment</h3><p>Ideally, the visual form of a character should reinforce its meaning. For example, characters with water radicals (氵) might be appropriate for someone born near water, while characters with expansive, open structures might suit someone destined for a life of freedom and exploration.</p>'
          }
        ],
        classicalLiterature: [
          {
            title: 'Names Inspired by Classical Chinese Literature',
            summary: 'Discover how traditional texts and poems serve as rich sources for meaningful Chinese names.',
            image: 'https://placehold.co/600x400',
            date: 'September 8, 2023',
            content: '<p>Classical Chinese literature offers a treasure trove of elegant expressions and profound concepts for name inspiration.</p><h3>Poetic Sources</h3><p>Many Chinese names draw from renowned poetry collections like the "Book of Songs" (诗经), "Tang Poems" (唐诗), and "Song Lyrics" (宋词). These works contain beautiful language and cultural references that add depth to a name.</p><h3>The Four Books and Five Classics</h3><p>Confucian texts like the Analects, Mencius, and the Book of Changes provide characters associated with virtue, wisdom, and moral excellence. Names drawn from these sources often carry connotations of scholarship and ethical conduct.</p><h3>Literary Allusions</h3><p>Beyond individual characters, some names reference specific literary scenes or historical anecdotes. These allusions create layers of meaning that educated Chinese speakers would recognize, adding cultural richness to the name.</p>'
          }
        ],
        seasonalNames: [
          {
            title: 'Seasonal Elements in Chinese Names',
            summary: 'Learn how a person\'s birth season can influence appropriate character choices for their name.',
            image: 'https://placehold.co/600x400',
            date: 'September 15, 2023',
            content: '<p>The season and environmental conditions at the time of birth have traditionally influenced Chinese naming practices.</p><h3>Spring Names</h3><p>Children born in spring are often given names containing elements of growth, renewal, and vitality. Characters related to flowers (花, 芳), new growth (苗, 萌), or spring itself (春) are common choices.</p><h3>Summer Names</h3><p>Summer-born children might receive names with bright, energetic qualities. Characters related to light (晖, 炎), strength (强, 健), or specific summer plants and phenomena (荷, 雨) can reflect the season\'s characteristics.</p><h3>Autumn Names</h3><p>Autumn names often incorporate themes of harvest, maturity, and clarity. Characters related to clear weather (清, 爽), autumn scenery (霜, 枫), or harvest (实, 收) may be selected.</p><h3>Winter Names</h3><p>Winter births might inspire names with qualities of purity, endurance, or hidden potential. Characters related to snow (雪, 霜), resilience (坚, 毅), or dormant potential (蕴, 藏) are traditional choices.</p>'
          }
        ],
        familyRules: [
          {
            title: 'Family Naming Systems in Chinese Culture',
            summary: 'Explore traditional family naming conventions and how they connect generations.',
            image: 'https://placehold.co/600x400',
            date: 'September 22, 2023',
            content: '<p>Family naming systems in China create continuity across generations and strengthen family identity.</p><h3>Generation Names</h3><p>Many Chinese families use a generation naming system (排辈) where all siblings and cousins of the same generation share a common character in their names. This system helps immediately identify which generation a person belongs to within a large extended family.</p><h3>Family Poems</h3><p>Some families create or adopt generation name poems (辈分诗) that pre-determine the generation names for many generations to come. Each character in the poem is used in sequence as the generation name for successive generations.</p><h3>Regional Variations</h3><p>Different regions of China have distinct approaches to family naming. Southern Chinese families often maintain more complex generational naming systems, while northern families might have simpler conventions or have moved away from strict generational naming in recent decades.</p><h3>Modern Adaptations</h3><p>While some urban families have abandoned traditional generational naming, many still maintain modified versions of the practice, sometimes using related characters rather than identical ones for flexibility while preserving the connection.</p>'
          }
        ],
        threeElementsFiveFormations: [
          {
            title: 'The Three Talents in Chinese Name Analysis',
            summary: 'Understand how Heaven, Earth, and Human elements interact in a balanced Chinese name.',
            image: 'https://placehold.co/600x400',
            date: 'September 29, 2023',
            content: '<p>The Three Talents (三才) principle is a sophisticated aspect of Chinese name analysis that examines the harmony between cosmic forces.</p><h3>Heaven Talent</h3><p>The Heaven Talent (天才) is derived from the Heavenly Formation number and represents a person\'s relationship with authority figures, their inherited qualities, and higher aspirations. It influences potential achievements and relationships with superiors.</p><h3>Human Talent</h3><p>The Human Talent (人才) is based on the Human Formation number and reflects a person\'s core self, personality, and ability to relate to peers. It is considered particularly important as it directly shapes one\'s character and social interactions.</p><h3>Earth Talent</h3><p>The Earth Talent (地才) comes from the Earthly Formation number and indicates a person\'s relationship with those under their influence, their material foundations, and practical accomplishments. It affects wealth, career, and home life.</p><h3>Auspicious Combinations</h3><p>The relationship between these three talents is analyzed to determine if they form auspicious patterns. Ideally, they should be in a harmonious relationship of mutual support rather than conflict.</p>'
          }
        ],
        zodiacMatching: [
          {
            title: 'Chinese Zodiac Considerations in Naming',
            summary: 'Learn which characters are auspicious for different animal signs and why.',
            image: 'https://placehold.co/600x400',
            date: 'October 6, 2023',
            content: '<p>A person\'s Chinese zodiac sign (生肖) can influence appropriate character choices for their name.</p><h3>Favorable Elements by Zodiac</h3><p>Each zodiac sign has associated favorable elements. For example, those born in the Year of the Rat generally benefit from Water element characters, while those born in the Year of the Horse may benefit from Fire element characters.</p><h3>Complementary Characters</h3><p>Some characters are considered particularly auspicious for specific zodiac signs. For instance, people born in the Year of the Rabbit might benefit from characters containing wood radicals, while those born in the Year of the Dragon might benefit from characters related to water or wealth.</p><h3>Avoiding Conflicting Elements</h3><p>Certain character elements might conflict with a person\'s zodiac sign. For example, those born in the Year of the Ox might avoid characters with strong fire associations, as fire is considered to melt metal (the element associated with the Ox).</p><h3>Balancing Birth Chart and Zodiac</h3><p>The challenge in modern naming is to balance zodiac considerations with other factors like the eight characters chart, which may suggest different elemental needs. Professional name selection often involves finding this balance.</p>'
          }
        ],
        avoidance: [
          {
            title: 'Name Taboos and Avoidance Practices',
            summary: 'Understand traditional and modern naming taboos that go beyond general cultural prohibitions.',
            image: 'https://placehold.co/600x400',
            date: 'October 13, 2023',
            content: '<p>Beyond general cultural taboos, there are specific personal considerations in Chinese name avoidance.</p><h3>Ancestor Name Avoidance</h3><p>Traditionally, Chinese families avoided using the personal names of recent ancestors, especially parents and grandparents, as a sign of respect. Using the same character was considered disrespectful, though modern practices have relaxed somewhat.</p><h3>Sound-Alike Avoidance</h3><p>Names that sound similar to unfortunate words or phrases, even if written differently, are typically avoided. This requires consideration of potential homophones in all relevant dialects the person might encounter.</p><h3>Difficult-to-Pronounce Combinations</h3><p>Character combinations that create challenging tongue-twisters or awkward transitions between syllables are best avoided, as they may lead to frequent mispronunciation or hesitation.</p><h3>Internationally Problematic Sounds</h3><p>For families with international connections, names that might have unfortunate pronunciations or meanings in commonly encountered foreign languages deserve consideration. This is increasingly important in a globalized world.</p>'
          }
        ],
        modernTraditional: [
          {
            title: 'Balancing Tradition and Modernity in Chinese Names',
            summary: 'Discover how contemporary naming practices honor tradition while embracing modern sensibilities.',
            image: 'https://placehold.co/600x400',
            date: 'October 20, 2023',
            content: '<p>Modern Chinese naming often involves finding a balance between honoring cultural heritage and embracing contemporary values.</p><h3>Simplified vs. Traditional Characters</h3><p>The choice between simplified and traditional character forms reflects both practical considerations and cultural values. Some families insist on traditional forms to maintain historical continuity, while others opt for simplified characters for everyday practicality.</p><h3>Contemporary Character Selection</h3><p>Modern names often favor characters that are distinctive yet not overly complex, avoiding obscure characters that might create difficulties in daily life. There\'s also a trend toward selecting characters with positive associations in contemporary culture rather than solely classical references.</p><h3>Cross-Cultural Considerations</h3><p>Families with international connections increasingly consider how a Chinese name might function across cultures. This may involve selecting characters that have pronunciations more easily approximated in other languages or meanings that translate well cross-culturally.</p><h3>Gender-Neutral Naming</h3><p>While traditional Chinese naming often reflected clear gender distinctions, some modern parents select more gender-neutral characters that focus on qualities or virtues rather than traditionally gendered attributes.</p>'
          },
          {
            title: '中国古代取名风格（先秦至汉朝）',
            summary: '探索中国早期取名风格的特点与代表性名字。',
            image: 'https://placehold.co/600x400',
            date: '2023年11月5日',
            content: '<p>中国古代的取名风格深受礼制和氏族文化影响，强调家族传承与德行彰显。</p><h3>先秦时期（约前21世纪-前221年）</h3><p>先秦时期的名字往往简洁直白，多为单字，如历史上的"禹"、"汤"、"文"、"武"等。名与字的制度开始形成，贵族拥有名、字、号，平民则多为单名。</p><p><strong>常见特点：</strong></p><ul><li>单字为主，注重声音洪亮</li><li>取名多与勇武、道德、政治抱负相关</li><li>氏、姓分别使用，复杂的姓名系统</li></ul><p><strong>代表性名字：</strong></p><ul><li>伯夷、叔齐（古代圣贤）</li><li>孔丘，字仲尼（孔子）</li><li>嬴政（秦始皇）</li><li>吕不韦（商人、政治家）</li></ul><h3>秦汉时期（前221年-220年）</h3><p>秦汉时期的取名风格开始强调家族传统，名与字的使用更加规范化。汉代名字多体现对道德品质和文学修养的追求。</p><p><strong>常见特点：</strong></p><ul><li>两字名逐渐增多</li><li>注重表达德行与志向</li><li>"名""字"制度完善，男子二十冠礼后称字</li><li>避讳制度开始形成</li></ul><p><strong>代表性名字：</strong></p><ul><li>刘邦，字季（汉高祖）</li><li>司马迁，字子长（《史记》作者）</li><li>王昭君（四大美人之一）</li><li>卫青、霍去病（汉代名将）</li><li>班固，字孟坚（《汉书》作者）</li></ul>'
          },
          {
            title: '中古时期取名风格（魏晋南北朝至隋唐）',
            summary: '了解魏晋风度与唐代气象如何影响当时的命名特点。',
            image: 'https://placehold.co/600x400',
            date: '2023年11月10日',
            content: '<p>中古时期的取名风格更加注重诗意与美学，文人风骨与贵族气息交融。</p><h3>魏晋南北朝时期（220年-589年）</h3><p>魏晋时期崇尚自然、尚情任性的文化思潮影响了取名风格，名字中充满诗意与个性。这一时期士族文化鼎盛，名士风流，名字也体现出超逸不群的气质。</p><p><strong>常见特点：</strong></p><ul><li>字、号使用广泛，注重声韵美感</li><li>崇尚清雅、玄远的意境</li><li>名字中多用"之"、"若"等语助词</li><li>取自然景物为名，如风、月、竹、松等</li></ul><p><strong>代表性名字：</strong></p><ul><li>嵇康，字叔夜（竹林七贤之一）</li><li>阮籍（竹林七贤之一）</li><li>陶渊明，字元亮（田园诗人）</li><li>谢道韫（才女）</li><li>王羲之，字逸少（书法家）</li></ul><h3>隋唐时期（589年-907年）</h3><p>隋唐时期的取名风格体现出大气磅礴、开放包容的特点，名字更加多样且富有文化内涵。由于科举制度兴盛，文人雅士对名字的文学性要求更高。</p><p><strong>常见特点：</strong></p><ul><li>取名追求气势恢宏</li><li>多用典故、诗词入名</li><li>重视字辈排行，家族命名系统完善</li><li>多民族文化交融，名字更加多元</li></ul><p><strong>代表性名字：</strong></p><ul><li>李世民，字叔明（唐太宗）</li><li>李白，字太白（诗仙）</li><li>杜甫，字子美（诗圣）</li><li>王维，字摩诘（诗佛）</li><li>武则天（中国历史上唯一的女皇帝）</li><li>杨玉环（贵妃）</li></ul>'
          },
          {
            title: '宋元明清时期取名风格（960年-1911年）',
            summary: '了解传统文化巅峰时期的命名传统与变迁。',
            image: 'https://placehold.co/600x400',
            date: '2023年11月15日',
            content: '<p>宋元明清时期，取名风格更加重视文化素养与家族传承，体现出中国传统文化的成熟与精致。</p><h3>宋代（960年-1279年）</h3><p>宋代文人重视理学，名字多体现出修身齐家的儒家理想。这一时期的取名更加注重内涵与理性。</p><p><strong>常见特点：</strong></p><ul><li>理学思想影响，注重道德品质</li><li>名字结构严谨，讲究对仗</li><li>家族排辈制度更加完善</li><li>崇尚简洁含蓄的美学风格</li></ul><p><strong>代表性名字：</strong></p><ul><li>赵匡胤（宋太祖）</li><li>苏轼，字子瞻（苏东坡）</li><li>李清照（宋代女词人）</li><li>朱熹，字元晦（理学家）</li><li>辛弃疾，字幼安（词人）</li></ul><h3>元代（1271年-1368年）</h3><p>元代蒙古统治时期，名字反映多元文化的交融，汉族士人名字常常透露出对故国的思念和抱负。</p><p><strong>常见特点：</strong></p><ul><li>多元文化交融，蒙古名与汉名并存</li><li>文人名字流露亡国情怀</li><li>戏曲文学兴盛，名字也带有戏剧色彩</li></ul><p><strong>代表性名字：</strong></p><ul><li>忽必烈（元世祖）</li><li>郭守敬（天文学家）</li><li>马致远（元曲作家）</li><li>王实甫（《西厢记》作者）</li></ul><h3>明代（1368年-1644年）</h3><p>明代是中国传统文化的繁荣时期，名字呈现出强烈的民族自豪感和复兴意识，文人名字多带有浪漫气息。</p><p><strong>常见特点：</strong></p><ul><li>追求雅致，崇尚复古</li><li>重视家族谱系，辈分明确</li><li>文人多取号，如"青莲居士"、"板桥居士"等</li><li>商品经济发展，市民阶层名字更加多样</li></ul><p><strong>代表性名字：</strong></p><ul><li>朱元璋（明太祖）</li><li>戚继光（抗倭名将）</li><li>唐伯虎，字子华（画家）</li><li>李时珍（医药学家）</li><li>汤显祖（剧作家）</li></ul><h3>清代（1644年-1911年）</h3><p>清代满族统治时期，取名同时受满族和汉族文化影响。随着西方文化的传入，部分名字也开始反映这种变化。</p><p><strong>常见特点：</strong></p><ul><li>满汉文化交融，满族名多带有世系</li><li>名号制度完备，士大夫多有斋号、堂号等</li><li>避讳制度严密复杂</li><li>晚清时期出现反映变革思想的名字</li></ul><p><strong>代表性名字：</strong></p><ul><li>爱新觉罗·玄烨（康熙皇帝）</li><li>曹雪芹（《红楼梦》作者）</li><li>林则徐（禁烟名臣）</li><li>梁启超（维新派代表人物）</li><li>谭嗣同（戊戌六君子之一）</li></ul>'
          },
          {
            title: '近现代取名风格（1912年-1978年）',
            summary: '探索中国近现代革命与建设年代的命名特点。',
            image: 'https://placehold.co/600x400',
            date: '2023年11月20日',
            content: '<p>近现代中国经历了翻天覆地的变化，取名风格也随之发生革命性转变，反映出强烈的时代特征。</p><h3>民国时期（1912年-1949年）</h3><p>民国时期是中国文化转型的关键阶段，名字开始融入现代思想与革命精神，同时也保留了部分传统元素。</p><p><strong>常见特点：</strong></p><ul><li>爱国主义和革命精神入名，如"建国"、"爱民"</li><li>西方思想影响，出现"民主"、"科学"等词汇入名</li><li>传统文化与现代思想的交融</li><li>"字"的使用减少，简化命名系统</li></ul><p><strong>代表性名字：</strong></p><ul><li>孙中山（孙文，号逸仙）</li><li>蔡元培（教育家）</li><li>鲁迅（周树人）</li><li>胡适（新文化运动领袖）</li><li>张学良（爱国将领）</li><li>宋庆龄、宋美龄（宋氏三姐妹）</li></ul><h3>革命战争时期（1927年-1949年）</h3><p>在革命战争年代，名字充满了战斗精神和理想色彩，反映出对新中国的向往与对革命胜利的期盼。</p><p><strong>常见特点：</strong></p><ul><li>革命精神和战斗意志高度体现</li><li>党内化名（革命化名）广泛使用</li><li>体现阶级立场的名字增多</li><li>女性名字开始彰显独立与平等意识</li></ul><p><strong>代表性名字及化名：</strong></p><ul><li>毛泽东（字润之）</li><li>周恩来</li><li>朱德</li><li>刘少奇</li><li>邓小平（原名邓先圣）</li><li>江姐（江竹筠）</li></ul><h3>建国初期至文革前（1949年-1966年）</h3><p>建国初期的名字充满了建设新中国的热情和社会主义理想，体现出那个时代特有的乐观与进取精神。</p><p><strong>常见特点：</strong></p><ul><li>"建国"、"建设"、"建华"等名字大量出现</li><li>反映工农业发展的名字流行，如"铁强"、"钢"</li><li>体现国际友谊的名字，如"友谊"、"和平"</li><li>革命传统与民族自豪感结合</li></ul><p><strong>常见流行名字：</strong></p><ul><li>建国、建华、建军</li><li>卫东、卫红</li><li>志强、志刚</li><li>红梅、红军</li><li>跃进、卫国</li></ul><h3>文革时期（1966年-1976年）</h3><p>文化大革命时期的名字极具政治色彩，反映出特殊历史时期的意识形态和社会心态。</p><p><strong>常见特点：</strong></p><ul><li>高度政治化的名字大量出现</li><li>红色词汇广泛使用</li><li>革命英雄主义色彩强烈</li><li>集体主义精神体现</li></ul><p><strong>常见流行名字：</strong></p><ul><li>卫东、卫红、卫国</li><li>向阳、向红</li><li>东方红</li><li>跃进、进步</li><li>铁军、铁梅</li></ul>'
          },
          {
            title: '改革开放以来取名风格（1978年至今）',
            summary: '了解当代中国人取名的多元趋势与时代特点。',
            image: 'https://placehold.co/600x400',
            date: '2023年11月25日',
            content: '<p>改革开放以来，中国人的取名风格呈现出多元化、个性化的趋势，同时也在全球化背景下不断发展演变。</p><h3>1980年代</h3><p>改革开放初期，名字开始摆脱强烈的政治色彩，转向更加个人化和多样化的表达，同时传统文化元素开始回归。</p><p><strong>常见特点：</strong></p><ul><li>追求文化内涵，古典诗词入名</li><li>强调个人理想和抱负</li><li>重视音韵美感</li><li>"伟"、"强"、"勇"等寓意积极进取的字词流行</li></ul><p><strong>常见流行名字：</strong></p><ul><li>伟明、伟华</li><li>文静、文慧</li><li>亚男、亚楠</li><li>小平、小军</li><li>婷婷、芳芳</li></ul><h3>1990年代</h3><p>1990年代是中国经济快速发展的时期，名字开始反映出对成功、卓越的向往，同时受到港台流行文化的影响。</p><p><strong>常见特点：</strong></p><ul><li>注重美学价值和文化品位</li><li>独特稀有字的使用增多</li><li>双字结构名字主流</li><li>港台明星影响，如"嘉"、"俊"等字广泛使用</li></ul><p><strong>常见流行名字：</strong></p><ul><li>俊杰、俊哲</li><li>嘉欣、嘉怡</li><li>梦婷、梦琪</li><li>志远、志强</li><li>雪莲、雪梅</li></ul><h3>2000年代</h3><p>步入21世纪，中国名字呈现出更加多元的格局，既有对传统文化的回归，也有现代意识的体现。</p><p><strong>常见特点：</strong></p><ul><li>传统文化元素强调，如"轩"、"宸"等古典用字</li><li>重视名字的独特性和区别性</li><li>音调和韵律和谐，避免生僻难读</li><li>社会竞争意识反映，如"睿"、"智"、"博"等字流行</li></ul><p><strong>常见流行名字：</strong></p><ul><li>浩然、浩宇</li><li>梓轩、子轩</li><li>紫涵、梓涵</li><li>欣怡、欣然</li><li>博文、博宇</li></ul><h3>2010年代至今</h3><p>近年来的取名风格更加注重文化底蕴和精神价值，同时也体现出全球视野与中国文化自信的结合。</p><p><strong>常见特点：</strong></p><ul><li>传统文化深度复兴，古典雅致成主流</li><li>重视字义的吉祥内涵与文化寓意</li><li>注重国际化视野，考虑中英文转换</li><li>独特稀缺性与美学价值的平衡</li></ul><p><strong>常见流行名字：</strong></p><ul><li>宸宇、宸熙</li><li>梓晗、梓萱</li><li>沐恩、沐阳</li><li>芷若、芷晴</li><li>晟睿、晟轩</li><li>奕辰、奕然</li></ul><h3>取名的时代烙印</h3><p>每个时代的取名风格都反映了特定历史时期的社会价值观和文化走向。从革命时期的理想主义，到改革开放的进取精神，再到当下对传统文化的回归与创新，名字是时代变迁的一面镜子。随着社会的发展，中国人在汲取传统文化精华的同时，也在不断创造符合时代特色的新名字，展现了中华文化的生命力与创造力。</p>'
          }
        ],
        eraNamingStyles: [
          {
            title: '中国古代取名风格（先秦至汉朝）',
            summary: '探索中国早期取名风格的特点与代表性名字。',
            image: 'https://placehold.co/600x400',
            date: '2023年11月5日',
            content: '<p>中国古代的取名风格深受礼制和氏族文化影响，强调家族传承与德行彰显。</p><h3>先秦时期（约前21世纪-前221年）</h3><p>先秦时期的名字往往简洁直白，多为单字，如历史上的"禹"、"汤"、"文"、"武"等。名与字的制度开始形成，贵族拥有名、字、号，平民则多为单名。</p><p><strong>常见特点：</strong></p><ul><li>单字为主，注重声音洪亮</li><li>取名多与勇武、道德、政治抱负相关</li><li>氏、姓分别使用，复杂的姓名系统</li></ul><p><strong>代表性名字：</strong></p><ul><li>伯夷、叔齐（古代圣贤）</li><li>孔丘，字仲尼（孔子）</li><li>嬴政（秦始皇）</li><li>吕不韦（商人、政治家）</li></ul><h3>秦汉时期（前221年-220年）</h3><p>秦汉时期的取名风格开始强调家族传统，名与字的使用更加规范化。汉代名字多体现对道德品质和文学修养的追求。</p><p><strong>常见特点：</strong></p><ul><li>两字名逐渐增多</li><li>注重表达德行与志向</li><li>"名""字"制度完善，男子二十冠礼后称字</li><li>避讳制度开始形成</li></ul><p><strong>代表性名字：</strong></p><ul><li>刘邦，字季（汉高祖）</li><li>司马迁，字子长（《史记》作者）</li><li>王昭君（四大美人之一）</li><li>卫青、霍去病（汉代名将）</li><li>班固，字孟坚（《汉书》作者）</li></ul>'
          },
          {
            title: '中古时期取名风格（魏晋南北朝至隋唐）',
            summary: '了解魏晋风度与唐代气象如何影响当时的命名特点。',
            image: 'https://placehold.co/600x400',
            date: '2023年11月10日',
            content: '<p>中古时期的取名风格更加注重诗意与美学，文人风骨与贵族气息交融。</p><h3>魏晋南北朝时期（220年-589年）</h3><p>魏晋时期崇尚自然、尚情任性的文化思潮影响了取名风格，名字中充满诗意与个性。这一时期士族文化鼎盛，名士风流，名字也体现出超逸不群的气质。</p><p><strong>常见特点：</strong></p><ul><li>字、号使用广泛，注重声韵美感</li><li>崇尚清雅、玄远的意境</li><li>名字中多用"之"、"若"等语助词</li><li>取自然景物为名，如风、月、竹、松等</li></ul><p><strong>代表性名字：</strong></p><ul><li>嵇康，字叔夜（竹林七贤之一）</li><li>阮籍（竹林七贤之一）</li><li>陶渊明，字元亮（田园诗人）</li><li>谢道韫（才女）</li><li>王羲之，字逸少（书法家）</li></ul><h3>隋唐时期（589年-907年）</h3><p>隋唐时期的取名风格体现出大气磅礴、开放包容的特点，名字更加多样且富有文化内涵。由于科举制度兴盛，文人雅士对名字的文学性要求更高。</p><p><strong>常见特点：</strong></p><ul><li>取名追求气势恢宏</li><li>多用典故、诗词入名</li><li>重视字辈排行，家族命名系统完善</li><li>多民族文化交融，名字更加多元</li></ul><p><strong>代表性名字：</strong></p><ul><li>李世民，字叔明（唐太宗）</li><li>李白，字太白（诗仙）</li><li>杜甫，字子美（诗圣）</li><li>王维，字摩诘（诗佛）</li><li>武则天（中国历史上唯一的女皇帝）</li><li>杨玉环（贵妃）</li></ul>'
          },
          {
            title: '宋元明清时期取名风格（960年-1911年）',
            summary: '了解传统文化巅峰时期的命名传统与变迁。',
            image: 'https://placehold.co/600x400',
            date: '2023年11月15日',
            content: '<p>宋元明清时期，取名风格更加重视文化素养与家族传承，体现出中国传统文化的成熟与精致。</p><h3>宋代（960年-1279年）</h3><p>宋代文人重视理学，名字多体现出修身齐家的儒家理想。这一时期的取名更加注重内涵与理性。</p><p><strong>常见特点：</strong></p><ul><li>理学思想影响，注重道德品质</li><li>名字结构严谨，讲究对仗</li><li>家族排辈制度更加完善</li><li>崇尚简洁含蓄的美学风格</li></ul><p><strong>代表性名字：</strong></p><ul><li>赵匡胤（宋太祖）</li><li>苏轼，字子瞻（苏东坡）</li><li>李清照（宋代女词人）</li><li>朱熹，字元晦（理学家）</li><li>辛弃疾，字幼安（词人）</li></ul><h3>元代（1271年-1368年）</h3><p>元代蒙古统治时期，名字反映多元文化的交融，汉族士人名字常常透露出对故国的思念和抱负。</p><p><strong>常见特点：</strong></p><ul><li>多元文化交融，蒙古名与汉名并存</li><li>文人名字流露亡国情怀</li><li>戏曲文学兴盛，名字也带有戏剧色彩</li></ul><p><strong>代表性名字：</strong></p><ul><li>忽必烈（元世祖）</li><li>郭守敬（天文学家）</li><li>马致远（元曲作家）</li><li>王实甫（《西厢记》作者）</li></ul><h3>明代（1368年-1644年）</h3><p>明代是中国传统文化的繁荣时期，名字呈现出强烈的民族自豪感和复兴意识，文人名字多带有浪漫气息。</p><p><strong>常见特点：</strong></p><ul><li>追求雅致，崇尚复古</li><li>重视家族谱系，辈分明确</li><li>文人多取号，如"青莲居士"、"板桥居士"等</li><li>商品经济发展，市民阶层名字更加多样</li></ul><p><strong>代表性名字：</strong></p><ul><li>朱元璋（明太祖）</li><li>戚继光（抗倭名将）</li><li>唐伯虎，字子华（画家）</li><li>李时珍（医药学家）</li><li>汤显祖（剧作家）</li></ul><h3>清代（1644年-1911年）</h3><p>清代满族统治时期，取名同时受满族和汉族文化影响。随着西方文化的传入，部分名字也开始反映这种变化。</p><p><strong>常见特点：</strong></p><ul><li>满汉文化交融，满族名多带有世系</li><li>名号制度完备，士大夫多有斋号、堂号等</li><li>避讳制度严密复杂</li><li>晚清时期出现反映变革思想的名字</li></ul><p><strong>代表性名字：</strong></p><ul><li>爱新觉罗·玄烨（康熙皇帝）</li><li>曹雪芹（《红楼梦》作者）</li><li>林则徐（禁烟名臣）</li><li>梁启超（维新派代表人物）</li><li>谭嗣同（戊戌六君子之一）</li></ul>'
          },
          {
            title: '近现代取名风格（1912年-1978年）',
            summary: '探索中国近现代革命与建设年代的命名特点。',
            image: 'https://placehold.co/600x400',
            date: '2023年11月20日',
            content: '<p>近现代中国经历了翻天覆地的变化，取名风格也随之发生革命性转变，反映出强烈的时代特征。</p><h3>民国时期（1912年-1949年）</h3><p>民国时期是中国文化转型的关键阶段，名字开始融入现代思想与革命精神，同时也保留了部分传统元素。</p><p><strong>常见特点：</strong></p><ul><li>爱国主义和革命精神入名，如"建国"、"爱民"</li><li>西方思想影响，出现"民主"、"科学"等词汇入名</li><li>传统文化与现代思想的交融</li><li>"字"的使用减少，简化命名系统</li></ul><p><strong>代表性名字：</strong></p><ul><li>孙中山（孙文，号逸仙）</li><li>蔡元培（教育家）</li><li>鲁迅（周树人）</li><li>胡适（新文化运动领袖）</li><li>张学良（爱国将领）</li><li>宋庆龄、宋美龄（宋氏三姐妹）</li></ul><h3>革命战争时期（1927年-1949年）</h3><p>在革命战争年代，名字充满了战斗精神和理想色彩，反映出对新中国的向往与对革命胜利的期盼。</p><p><strong>常见特点：</strong></p><ul><li>革命精神和战斗意志高度体现</li><li>党内化名（革命化名）广泛使用</li><li>体现阶级立场的名字增多</li><li>女性名字开始彰显独立与平等意识</li></ul><p><strong>代表性名字及化名：</strong></p><ul><li>毛泽东（字润之）</li><li>周恩来</li><li>朱德</li><li>刘少奇</li><li>邓小平（原名邓先圣）</li><li>江姐（江竹筠）</li></ul><h3>建国初期至文革前（1949年-1966年）</h3><p>建国初期的名字充满了建设新中国的热情和社会主义理想，体现出那个时代特有的乐观与进取精神。</p><p><strong>常见特点：</strong></p><ul><li>"建国"、"建设"、"建华"等名字大量出现</li><li>反映工农业发展的名字流行，如"铁强"、"钢"</li><li>体现国际友谊的名字，如"友谊"、"和平"</li><li>革命传统与民族自豪感结合</li></ul><p><strong>常见流行名字：</strong></p><ul><li>建国、建华、建军</li><li>卫东、卫红</li><li>志强、志刚</li><li>红梅、红军</li><li>跃进、卫国</li></ul><h3>文革时期（1966年-1976年）</h3><p>文化大革命时期的名字极具政治色彩，反映出特殊历史时期的意识形态和社会心态。</p><p><strong>常见特点：</strong></p><ul><li>高度政治化的名字大量出现</li><li>红色词汇广泛使用</li><li>革命英雄主义色彩强烈</li><li>集体主义精神体现</li></ul><p><strong>常见流行名字：</strong></p><ul><li>卫东、卫红、卫国</li><li>向阳、向红</li><li>东方红</li><li>跃进、进步</li><li>铁军、铁梅</li></ul>'
          },
          {
            title: '改革开放以来取名风格（1978年至今）',
            summary: '了解当代中国人取名的多元趋势与时代特点。',
            image: 'https://placehold.co/600x400',
            date: '2023年11月25日',
            content: '<p>改革开放以来，中国人的取名风格呈现出多元化、个性化的趋势，同时也在全球化背景下不断发展演变。</p><h3>1980年代</h3><p>改革开放初期，名字开始摆脱强烈的政治色彩，转向更加个人化和多样化的表达，同时传统文化元素开始回归。</p><p><strong>常见特点：</strong></p><ul><li>追求文化内涵，古典诗词入名</li><li>强调个人理想和抱负</li><li>重视音韵美感</li><li>"伟"、"强"、"勇"等寓意积极进取的字词流行</li></ul><p><strong>常见流行名字：</strong></p><ul><li>伟明、伟华</li><li>文静、文慧</li><li>亚男、亚楠</li><li>小平、小军</li><li>婷婷、芳芳</li></ul><h3>1990年代</h3><p>1990年代是中国经济快速发展的时期，名字开始反映出对成功、卓越的向往，同时受到港台流行文化的影响。</p><p><strong>常见特点：</strong></p><ul><li>注重美学价值和文化品位</li><li>独特稀有字的使用增多</li><li>双字结构名字主流</li><li>港台明星影响，如"嘉"、"俊"等字广泛使用</li></ul><p><strong>常见流行名字：</strong></p><ul><li>俊杰、俊哲</li><li>嘉欣、嘉怡</li><li>梦婷、梦琪</li><li>志远、志强</li><li>雪莲、雪梅</li></ul><h3>2000年代</h3><p>步入21世纪，中国名字呈现出更加多元的格局，既有对传统文化的回归，也有现代意识的体现。</p><p><strong>常见特点：</strong></p><ul><li>传统文化元素强调，如"轩"、"宸"等古典用字</li><li>重视名字的独特性和区别性</li><li>音调和韵律和谐，避免生僻难读</li><li>社会竞争意识反映，如"睿"、"智"、"博"等字流行</li></ul><p><strong>常见流行名字：</strong></p><ul><li>浩然、浩宇</li><li>梓轩、子轩</li><li>紫涵、梓涵</li><li>欣怡、欣然</li><li>博文、博宇</li></ul><h3>2010年代至今</h3><p>近年来的取名风格更加注重文化底蕴和精神价值，同时也体现出全球视野与中国文化自信的结合。</p><p><strong>常见特点：</strong></p><ul><li>传统文化深度复兴，古典雅致成主流</li><li>重视字义的吉祥内涵与文化寓意</li><li>注重国际化视野，考虑中英文转换</li><li>独特稀缺性与美学价值的平衡</li></ul><p><strong>常见流行名字：</strong></p><ul><li>宸宇、宸熙</li><li>梓晗、梓萱</li><li>沐恩、沐阳</li><li>芷若、芷晴</li><li>晟睿、晟轩</li><li>奕辰、奕然</li></ul><h3>取名的时代烙印</h3><p>每个时代的取名风格都反映了特定历史时期的社会价值观和文化走向。从革命时期的理想主义，到改革开放的进取精神，再到当下对传统文化的回归与创新，名字是时代变迁的一面镜子。随着社会的发展，中国人在汲取传统文化精华的同时，也在不断创造符合时代特色的新名字，展现了中华文化的生命力与创造力。</p>'
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
  padding-top: 70px;
  padding-bottom: 50px;
  background-color: #f8f9fa;
  min-height: 100vh;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.page-title {
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 40px;
  margin-top: 0;
  color: #333;
}

.knowledge-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
  margin-bottom: 40px;
}

.category-card {
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  padding: 30px;
  transition: transform 0.3s, box-shadow 0.3s;
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
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
  border-radius: 50%;
  background-color: rgba(230, 0, 18, 0.1);
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

/* 百家姓卡片特殊样式 */
.baijiaxing-card {
  background-color: white;
  border: none;
}

.baijiaxing-card .card-icon {
  background-color: rgba(230, 0, 18, 0.1);
}

.baijiaxing-card .card-icon svg {
  color: #e60012;
}

.baijiaxing-card:hover {
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
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