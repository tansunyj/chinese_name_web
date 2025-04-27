<template>
  <div class="home-page">
    <!-- 头部横幅 -->
    <section class="hero-section">
      <div class="container">
        <div class="hero-content">
          <h1 class="hero-title">传承中华文化，智能起名一站式服务</h1>
          <p class="hero-description">融合传统文化精髓与现代科技，为您的孩子创造一个美好的名字</p>
          <div class="hero-buttons">
            <router-link to="/name-generator" class="btn-primary">开始免费起名</router-link>
            <router-link to="/name-meanings" class="btn-secondary">了解名字寓意</router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- 服务特点 -->
    <section class="features-section">
      <div class="container">
        <h2 class="section-title">我们的服务特点</h2>
        
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">
              <i class="icon-culture"></i>
            </div>
            <h3 class="feature-title">传统文化精髓</h3>
            <p class="feature-description">根据中国传统文化、诗词歌赋及经典典籍，挑选寓意吉祥的字词组合。</p>
          </div>
          
          <div class="feature-card">
            <div class="feature-icon">
              <i class="icon-tech"></i>
            </div>
            <h3 class="feature-title">智能分析技术</h3>
            <p class="feature-description">运用先进的智能分析算法，为您推荐符合音律、字形和寓意的最佳名字。</p>
          </div>
          
          <div class="feature-card">
            <div class="feature-icon">
              <i class="icon-personalize"></i>
            </div>
            <h3 class="feature-title">个性化定制</h3>
            <p class="feature-description">根据您的姓氏、家族传统和个人喜好，提供个性化的名字推荐服务。</p>
          </div>
          
          <div class="feature-card">
            <div class="feature-icon">
              <i class="icon-fortune"></i>
            </div>
            <h3 class="feature-title">命理分析</h3>
            <p class="feature-description">提供名字五行分析、吉凶评测，助您选择一个吉祥如意的好名字。</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 拼音工具部分 -->
    <section class="features-section">
      <div class="container">
        <h2 class="section-title">{{ $t('home.features.title') || "拼音转换工具" }}</h2>
        <div class="features-grid">
          <router-link to="/name-to-pinyin" class="feature-card">
            <div class="feature-icon">
              <i class="icon-pinyin"></i>
            </div>
            <h3 class="feature-title">{{ $t('home.features.nameToPinyin.title') || "姓名转拼音" }}</h3>
            <p class="feature-description">{{ $t('home.features.nameToPinyin.description') || "将中文姓名转换为准确的拼音，附带声调标记和发音指导" }}</p>
            <div class="feature-link">{{ $t('common.goto') || "前往" }} →</div>
          </router-link>
          
          <router-link to="/pinyin-to-name" class="feature-card">
            <div class="feature-icon">
              <i class="icon-name"></i>
            </div>
            <h3 class="feature-title">{{ $t('home.features.pinyinToName.title') || "拼音查找汉字" }}</h3>
            <p class="feature-description">{{ $t('home.features.pinyinToName.description') || "根据拼音查找适合的汉字，帮助您选择理想的中文名字" }}</p>
            <div class="feature-link">{{ $t('common.goto') || "前往" }} →</div>
          </router-link>
          
          <router-link to="/character-strokes" class="feature-card">
            <div class="feature-icon">
              <i class="icon-brush"></i>
            </div>
            <h3 class="feature-title">{{ $t('home.features.characterStrokes.title') || "汉字笔画书写" }}</h3>
            <p class="feature-description">{{ $t('characterStrokes.subtitle') || "查看汉字的笔画书写顺序与拼音读法，学习正确的汉字书写方法" }}</p>
            <div class="feature-link">{{ $t('common.goto') || "前往" }} →</div>
          </router-link>
        </div>
      </div>
    </section>

    <!-- 起名流程 -->
    <section class="process-section">
      <div class="container">
        <h2 class="section-title">简单三步，轻松起好名</h2>
        
        <div class="process-steps">
          <div class="process-step">
            <div class="step-number">1</div>
            <h3 class="step-title">填写基本信息</h3>
            <p class="step-description">提供孩子的姓氏、出生日期等基本信息</p>
          </div>
          
          <div class="process-step">
            <div class="step-number">2</div>
            <h3 class="step-title">智能生成名字</h3>
            <p class="step-description">系统根据您的需求智能分析并生成适合的名字</p>
          </div>
          
          <div class="process-step">
            <div class="step-number">3</div>
            <h3 class="step-title">选择满意名字</h3>
            <p class="step-description">查看名字详细解析，选择您最满意的名字</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 推荐名字展示 -->
    <section class="showcase-section">
      <div class="container">
        <h2 class="section-title">精选名字推荐</h2>
        <p class="section-subtitle">每个名字都经过精心挑选，寓意深远</p>
        
        <div class="name-showcase">
          <div class="name-card" v-for="(name, index) in featuredNames" :key="index">
            <h3 class="name">{{ name.fullName }}</h3>
            <p class="name-meaning">{{ name.meaning }}</p>
            <div class="name-tags">
              <span class="tag" v-for="(tag, i) in name.tags" :key="i">{{ tag }}</span>
            </div>
          </div>
        </div>
        
        <div class="showcase-cta">
          <router-link to="/name-generator" class="btn-primary">查看更多名字</router-link>
        </div>
      </div>
    </section>

    <!-- 用户评价 -->
    <section class="testimonials-section">
      <div class="container">
        <h2 class="section-title">用户好评</h2>
        
        <div class="testimonials-slider">
          <div class="testimonial" v-for="(testimonial, index) in testimonials" :key="index">
            <div class="testimonial-content">
              <p class="testimonial-text">{{ testimonial.content }}</p>
            </div>
            <div class="testimonial-author">
              <p class="author-name">{{ testimonial.name }}</p>
              <p class="author-info">{{ testimonial.location }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 博客文章 -->
    <section class="blog-section">
      <div class="container">
        <h2 class="section-title">命理文章</h2>
        <p class="section-subtitle">了解更多关于中国传统文化与起名的知识</p>
        
        <div class="blog-posts">
          <div class="blog-card" v-for="(article, index) in articles" :key="index">
            <div class="blog-image">
              <img :src="article.image" :alt="article.title" />
            </div>
            <div class="blog-content">
              <h3 class="blog-title">{{ article.title }}</h3>
              <p class="blog-excerpt">{{ article.excerpt }}</p>
              <router-link :to="`/article/${article.id}`" class="blog-read-more">阅读全文</router-link>
            </div>
          </div>
        </div>
        
        <div class="blog-cta">
          <router-link to="/articles" class="btn-secondary">查看更多文章</router-link>
        </div>
      </div>
    </section>

    <!-- 咨询服务 -->
    <section class="consultation-section">
      <div class="container">
        <div class="consultation-content">
          <h2 class="consultation-title">需要专业命理师一对一咨询？</h2>
          <p class="consultation-description">我们的专业命理师团队可以为您提供更加个性化的起名服务</p>
          <button class="btn-primary">预约咨询</button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      featuredNames: [
        {
          fullName: '李芷若',
          meaning: '芷：芬芳的香草，若：文弱美好，寓意温婉贤淑，气质高雅。',
          tags: ['温婉', '气质', '智慧']
        },
        {
          fullName: '王浩然',
          meaning: '浩：广大，然：如此，寓意胸怀宽广，正直坦荡。',
          tags: ['阳光', '正直', '大气']
        },
        {
          fullName: '张雨晴',
          meaning: '雨：雨水，晴：晴朗，寓意雨过天晴，美好向上。',
          tags: ['美好', '希望', '清新']
        },
        {
          fullName: '赵子墨',
          meaning: '子：智慧，墨：墨宝，寓意博学多才，有文化内涵。',
          tags: ['才华', '内涵', '沉稳']
        }
      ],
      testimonials: [
        {
          content: '非常感谢中文起名网，为我们的女儿取了一个既好听又有意义的名字，全家人都很喜欢！',
          name: '林女士',
          location: '上海'
        },
        {
          content: '专业的服务和详细的名字解析让我们对孩子的名字更加满意，很高兴选择了这个平台。',
          name: '陈先生',
          location: '广州'
        },
        {
          content: '起名分析非常全面，考虑了五行、音律和字义，最终选定的名字既符合我们的期望，又很有文化内涵。',
          name: '王女士',
          location: '北京'
        }
      ],
      articles: [
        {
          id: 1,
          title: '中国传统起名文化的智慧',
          excerpt: '了解中国几千年传统文化中的起名智慧，探索名字背后的文化内涵...',
          image: '/images/article1.jpg'
        },
        {
          id: 2,
          title: '五行起名法详解',
          excerpt: '详细解析五行起名的基本原理和方法，帮助您理解如何选择五行平衡的好名字...',
          image: '/images/article2.jpg'
        },
        {
          id: 3,
          title: '如何挑选有诗意的名字',
          excerpt: '从古诗词中汲取灵感，为孩子取一个富有诗意和文化底蕴的美名...',
          image: '/images/article3.jpg'
        }
      ]
    }
  }
}
</script>

<style scoped>
.home-page {
  background-color: #fff;
}

/* 头部横幅样式 */
.hero-section {
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  padding: 100px 0;
  text-align: center;
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
}

.hero-title {
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 20px;
}

.hero-description {
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 40px;
}

.hero-buttons {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.btn-primary, .btn-secondary {
  display: inline-block;
  padding: 12px 30px;
  border-radius: 5px;
  font-weight: 500;
  text-align: center;
  transition: all 0.3s;
}

.btn-primary {
  background-color: #e74c3c;
  color: white;
}

.btn-primary:hover {
  background-color: #c0392b;
  transform: translateY(-2px);
}

.btn-secondary {
  background-color: white;
  color: #e74c3c;
  border: 1px solid #e74c3c;
}

.btn-secondary:hover {
  background-color: #f8f9fa;
  transform: translateY(-2px);
}

/* 通用部分样式 */
.section-title {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 50px;
  position: relative;
  padding-bottom: 15px;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 3px;
  background-color: #e74c3c;
}

.section-subtitle {
  text-align: center;
  color: #666;
  margin-top: -30px;
  margin-bottom: 40px;
}

/* 服务特点样式 */
.features-section {
  padding: 80px 0;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
}

.feature-card {
  background: #fff;
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  text-align: center;
  text-decoration: none;
  color: inherit;
  display: block;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}

.feature-icon {
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #e74c3c;
}

.feature-title {
  margin: 15px 0;
  font-size: 1.2rem;
}

.feature-description {
  color: #666;
  line-height: 1.6;
}

.feature-link {
  margin-top: 15px;
  color: #e74c3c;
  font-weight: 500;
}

.icon-pinyin:before {
  content: "拼";
  font-family: Arial, sans-serif;
}

.icon-name:before {
  content: "字";
  font-family: Arial, sans-serif;
}

/* 起名流程样式 */
.process-section {
  background-color: #f8f9fa;
  padding: 80px 0;
}

.process-steps {
  display: flex;
  justify-content: space-between;
  max-width: 1000px;
  margin: 0 auto;
}

.process-step {
  text-align: center;
  flex-basis: 30%;
  position: relative;
}

.process-step::after {
  content: '';
  position: absolute;
  top: 40px;
  right: -50%;
  width: 100%;
  height: 2px;
  background-color: #e0e0e0;
  z-index: 1;
}

.process-step:last-child::after {
  display: none;
}

.step-number {
  background-color: #e74c3c;
  color: white;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  margin: 0 auto 20px;
  position: relative;
  z-index: 2;
}

.step-title {
  margin: 15px 0;
  font-size: 1.2rem;
}

.step-description {
  color: #666;
}

/* 推荐名字展示样式 */
.showcase-section {
  padding: 80px 0;
}

.name-showcase {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin-bottom: 40px;
}

.name-card {
  background: #fff;
  border-radius: 10px;
  padding: 25px;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s;
}

.name-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}

.name {
  font-size: 1.8rem;
  margin-bottom: 15px;
  color: #333;
}

.name-meaning {
  color: #666;
  margin-bottom: 15px;
  line-height: 1.6;
}

.name-tags {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
}

.tag {
  background-color: #f8f9fa;
  padding: 5px 12px;
  border-radius: 20px;
  font-size: 0.9rem;
  color: #555;
}

.showcase-cta {
  text-align: center;
  margin-top: 20px;
}

/* 用户评价样式 */
.testimonials-section {
  background-color: #f8f9fa;
  padding: 80px 0;
}

.testimonials-slider {
  display: flex;
  overflow-x: auto;
  gap: 30px;
  padding: 20px 0;
  scrollbar-width: none;
}

.testimonials-slider::-webkit-scrollbar {
  display: none;
}

.testimonial {
  flex: 0 0 350px;
  background: #fff;
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
}

.testimonial-text {
  font-style: italic;
  color: #555;
  line-height: 1.6;
  margin-bottom: 20px;
}

.testimonial-author {
  display: flex;
  flex-direction: column;
}

.author-name {
  font-weight: 600;
  color: #333;
}

.author-info {
  color: #777;
  font-size: 0.9rem;
}

/* 博客文章样式 */
.blog-section {
  padding: 80px 0;
}

.blog-posts {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-bottom: 40px;
}

.blog-card {
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s;
}

.blog-card:hover {
  transform: translateY(-5px);
}

.blog-image {
  height: 200px;
  overflow: hidden;
}

.blog-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s;
}

.blog-card:hover .blog-image img {
  transform: scale(1.05);
}

.blog-content {
  padding: 25px;
}

.blog-title {
  font-size: 1.2rem;
  margin-bottom: 15px;
}

.blog-excerpt {
  color: #666;
  margin-bottom: 20px;
  line-height: 1.6;
}

.blog-read-more {
  color: #e74c3c;
  font-weight: 500;
}

.blog-cta {
  text-align: center;
}

/* 咨询服务样式 */
.consultation-section {
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  padding: 80px 0;
  text-align: center;
}

.consultation-content {
  max-width: 700px;
  margin: 0 auto;
}

.consultation-title {
  font-size: 2rem;
  margin-bottom: 20px;
  color: #333;
}

.consultation-description {
  color: #555;
  margin-bottom: 30px;
  font-size: 1.1rem;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .hero-title {
    font-size: 2rem;
  }
  
  .process-steps {
    flex-direction: column;
    gap: 40px;
  }
  
  .process-step {
    flex-basis: 100%;
  }
  
  .process-step::after {
    display: none;
  }
  
  .testimonials-slider {
    padding-bottom: 30px;
  }
  
  .testimonial {
    flex: 0 0 280px;
  }
}

@media (max-width: 576px) {
  .hero-buttons {
    flex-direction: column;
    gap: 15px;
  }
  
  .section-title {
    font-size: 1.8rem;
  }
}
</style> 