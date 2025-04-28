<template>
  <div class="naming-taboos-page">
    <div class="container">
      <h1 class="page-title">中国传统命名禁忌</h1>
      
      <div class="intro-section">
        <div class="intro-text">
          <h2>命名禁忌的文化背景</h2>
          <p>在中国传统文化中，名字不仅仅是一个称呼，更被视为与一个人命运息息相关的重要符号。因此，命名时需要避开各种禁忌，以免给孩子带来不利影响。这些禁忌反映了中国人的文化观念、社会规范和对生活的期望。</p>
          <p>了解这些命名禁忌，有助于我们在取名时既尊重传统，又避免潜在的文化冲突和不良暗示。</p>
        </div>
        <div class="intro-image">
          <img src="../assets/images/jinji.png" alt="命名禁忌" onerror="this.onerror=null; this.src='https://placehold.co/600x400?text=命名禁忌';" />
        </div>
      </div>

      <!-- 分类导航 -->
      <div class="category-nav">
        <div class="nav-item" @click="scrollToCategory('ancestral')">
          <div class="nav-icon ancestral-icon"></div>
          <span>长辈名讳</span>
        </div>
        <div class="nav-item" @click="scrollToCategory('homophones')">
          <div class="nav-icon homophones-icon"></div>
          <span>谐音忌讳</span>
        </div>
        <div class="nav-item" @click="scrollToCategory('zodiac')">
          <div class="nav-icon zodiac-icon"></div>
          <span>生肖禁忌</span>
        </div>
        <div class="nav-item" @click="scrollToCategory('meaning')">
          <div class="nav-icon meaning-icon"></div>
          <span>含义忌讳</span>
        </div>
        <div class="nav-item" @click="scrollToCategory('structure')">
          <div class="nav-icon structure-icon"></div>
          <span>结构禁忌</span>
        </div>
        <div class="nav-item" @click="scrollToCategory('modern')">
          <div class="nav-icon modern-icon"></div>
          <span>现代考量</span>
        </div>
      </div>

      <!-- 长辈名讳 -->
      <section id="ancestral" class="taboo-section">
        <h2 class="section-title">长辈名讳</h2>
        <p class="section-intro">在中国传统文化中，避讳是对长辈和帝王的一种尊重。子女不能使用与父母、祖父母等长辈相同的名字，这被视为不敬之举。</p>
        
        <div class="taboo-content">
          <div class="taboo-feature">
            <h3>基本原则</h3>
            <p>中国传统文化强调"不犯长辈名讳"，即不使用与长辈相同的字作为名字，以示尊重。这一传统可以追溯到先秦时期，并在漫长的历史中逐渐形成了一套复杂的避讳规则。</p>
          </div>
          
          <div class="taboo-example">
            <h3>避讳形式</h3>
            <ul>
              <li><strong>完全避讳：</strong>彻底避免使用与长辈名字相同的字</li>
              <li><strong>部分避讳：</strong>避免使用与长辈名字相同音的字</li>
              <li><strong>改字避讳：</strong>将相同的字在书写时略加改动</li>
              <li><strong>革音避讳：</strong>将相同的字在读音上略加改变</li>
            </ul>
          </div>
          
          <div class="taboo-details">
            <div class="detail-card">
              <h4>皇家避讳</h4>
              <p>在中国古代，皇帝名字中的字是全社会必须避讳的。例如，清朝康熙皇帝名为"玄烨"，因此"玄"字被改为"元"，如"玄武门"改称"元武门"，"玄奘"改称"元奘"等。</p>
              <p>有些朝代甚至规定避讳皇帝祖先的名字，使得避讳系统更加复杂。</p>
            </div>
            
            <div class="detail-card">
              <h4>家族避讳</h4>
              <p>在家族内部，对祖先的名讳尤其重视。许多家族有族谱记载祖先名字，子孙取名时需查阅族谱以避免重名。例如，如果祖父名为"志明"，孙辈则不应使用"志"或"明"字。</p>
              <p>由于这种避讳传统，可以通过分析一个家族中不同辈分的名字使用情况，了解该家族的辈分关系和传承历史。</p>
            </div>
          </div>
          
          <div class="taboo-case">
            <h3>现代应用</h3>
            <p>现代社会中，虽然对皇帝的避讳已不再严格执行，但对家族长辈的避讳在许多家庭中仍然保留。在为新生儿取名时，许多家庭仍会考虑避开父母、祖父母等直系长辈的名字。</p>
            <p>当代避讳更多体现为一种对传统的尊重和对家族秩序的认同，而非严格的文化禁忌。一些现代家庭也开始采取更灵活的方式，例如避开完全相同的字，但允许使用同音不同字的情况。</p>
          </div>
        </div>
      </section>

      <!-- 谐音忌讳 -->
      <section id="homophones" class="taboo-section">
        <h2 class="section-title">谐音忌讳</h2>
        <p class="section-intro">中国语言中同音字非常丰富，在命名时需要特别注意避免使用与不吉利词语谐音的字，以免产生不良联想。</p>
        
        <div class="taboo-content">
          <div class="taboo-feature">
            <h3>谐音问题的重要性</h3>
            <p>汉语是一种同音字丰富的语言，许多字尽管写法不同，但发音相同或相近。因此，在取名时不仅要考虑字的本义，还要考虑其谐音可能带来的联想，避免与不吉利、负面或尴尬的词语谐音。</p>
          </div>
          
          <div class="taboo-example">
            <h3>常见谐音忌讳</h3>
            <ul>
              <li><strong>与"死"谐音：</strong>避免使用与"死(sǐ)"谐音的字，如"思(sī)"、"四(sì)"等，特别是在名字的末尾</li>
              <li><strong>与"苦"谐音：</strong>避免使用与"苦(kǔ)"谐音的字，如"库(kù)"等</li>
              <li><strong>与"穷"谐音：</strong>避免使用与"穷(qióng)"谐音的字，如"琼(qióng)"等</li>
              <li><strong>与"败"谐音：</strong>避免使用与"败(bài)"谐音的字，如"拜(bài)"等</li>
              <li><strong>特定组合谐音：</strong>某些字单独使用没问题，但组合后可能产生不良谐音，如"安息"谐音"暗死"，"家贵"谐音"加鬼"等</li>
            </ul>
          </div>
          
          <div class="taboo-details">
            <div class="detail-card">
              <h4>方言考量</h4>
              <p>不同地区的方言发音存在差异，在取名时还需考虑当地方言中可能产生的谐音问题。例如，普通话中的"诗"在某些南方方言里可能与"尸"发音相似。</p>
              <p>如果家庭有多地方言背景，或未来可能在不同地区生活，则需要在多种方言语境下检查名字的发音。</p>
            </div>
            
            <div class="detail-card">
              <h4>数字谐音</h4>
              <p>中国文化中对数字谐音尤为敏感。例如，"四"因与"死"谐音被视为不吉利，而"八"因与"发"谐音被视为吉利。</p>
              <p>这种数字谐音的禁忌也会影响到名字的选择，尤其是那些与数字字形或数字含义相关的字。例如，含"四"字根的字如"肆"、"泗"等可能会被避免使用。</p>
            </div>
          </div>
          
          <div class="taboo-case">
            <h3>实例分析</h3>
            <p><strong>不良谐音示例：</strong>"王军"在某些方言中可能听起来像"亡军"；"高健"在某些方言中可能听起来像"告捡"；"陈寿"可能让人联想到"陈述"或与"寿终"相关的不吉利含义。</p>
            <p><strong>谐音检查方法：</strong>在确定名字时，最好以普通话和可能接触到的方言分别读出全名，检查是否有不良谐音。还可以将名字与常见词语、成语结合，看是否会产生不良联想。同时，也可以咨询不同年龄层、不同地区的人对这个名字的第一印象。</p>
          </div>
        </div>
      </section>

      <!-- 其他章节会在后续继续添加，这里先只展示两个章节作为模板 -->
      
      <div class="conclusion-section">
        <h2>避讳与智慧：古人命名的谨慎态度</h2>
        <p>中国传统的命名禁忌反映了古人对语言的敬畏和对人生的谨慎态度。这些禁忌不仅是文化传统的体现，也包含了丰富的生活智慧和审美取向。</p>
        
        <div class="significance-points">
          <div class="significance-item">
            <h3>文化传承意义</h3>
            <p>命名禁忌是中华文化的重要组成部分，了解并尊重这些禁忌，有助于我们传承和弘扬中华文化的精髓。</p>
          </div>
          
          <div class="significance-item">
            <h3>实用价值</h3>
            <p>避开命名禁忌，可以帮助孩子避免潜在的社交困扰和心理压力，为孩子创造更好的生活和成长环境。</p>
          </div>
          
          <div class="significance-item">
            <h3>现代应用与包容</h3>
            <p>在现代社会，我们可以辩证地看待这些禁忌，既尊重传统，又不拘泥于形式，灵活运用这些智慧，为孩子取一个既有文化内涵又适应现代社会的好名字。</p>
          </div>
        </div>
        
        <p class="final-note">命名是父母送给孩子的第一份礼物，了解命名禁忌，不仅是对传统的尊重，更是对孩子未来的负责。希望本文介绍的各种命名禁忌能够为您的命名之旅提供有益的参考。</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NamingTaboos',
  data() {
    return {
      // 数据
    }
  },
  methods: {
    scrollToCategory(category) {
      const element = document.getElementById(category);
      if (element) {
        const yOffset = -80; // 考虑顶部导航栏的高度
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({top: y, behavior: 'smooth'});
      }
    }
  },
  mounted() {
    // 页面加载后执行的代码
    document.title = '中国传统命名禁忌 - 起名网';
  }
}
</script>

<style scoped>
.naming-taboos-page {
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
  color: #333;
}

/* 介绍部分样式 */
.intro-section {
  display: flex;
  align-items: center;
  margin-bottom: 50px;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  overflow: hidden;
}

.intro-text {
  padding: 40px;
  flex: 1;
}

.intro-text h2 {
  font-size: 1.8rem;
  color: #e60012;
  margin-bottom: 20px;
}

.intro-text p {
  color: #555;
  line-height: 1.8;
  margin-bottom: 15px;
}

.intro-image {
  flex: 1;
  height: 400px;
  overflow: hidden;
}

.intro-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* 分类导航 */
.category-nav {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 50px;
  gap: 15px;
}

.nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  background-color: white;
  border-radius: 10px;
  cursor: pointer;
  transition: transform 0.3s, box-shadow 0.3s;
  flex: 1;
  min-width: 150px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.05);
}

.nav-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}

.nav-icon {
  width: 60px;
  height: 60px;
  margin-bottom: 15px;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
}

.ancestral-icon {
  background-image: url('../assets/images/ancestral-icon.png');
  background-color: #f0f8ff; /* 临时颜色，图像加载失败时显示 */
  border-radius: 50%;
}

.homophones-icon {
  background-image: url('../assets/images/homophones-icon.png');
  background-color: #f0fff0;
  border-radius: 50%;
}

.zodiac-icon {
  background-image: url('../assets/images/zodiac-icon.png');
  background-color: #fff0f0;
  border-radius: 50%;
}

.meaning-icon {
  background-image: url('../assets/images/meaning-icon.png');
  background-color: #fff8f0;
  border-radius: 50%;
}

.structure-icon {
  background-image: url('../assets/images/structure-icon.png');
  background-color: #f8f0ff;
  border-radius: 50%;
}

.modern-icon {
  background-image: url('../assets/images/modern-icon.png');
  background-color: #f0ffff;
  border-radius: 50%;
}

.nav-item span {
  font-size: 1.1rem;
  color: #333;
  font-weight: 500;
}

/* 禁忌章节样式 */
.taboo-section {
  margin-bottom: 70px;
  padding: 30px;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
}

.section-title {
  font-size: 2rem;
  color: #e60012;
  margin-bottom: 15px;
  text-align: center;
  position: relative;
  padding-bottom: 15px;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 3px;
  background-color: #e60012;
}

.section-intro {
  text-align: center;
  color: #666;
  max-width: 800px;
  margin: 0 auto 30px;
  font-size: 1.1rem;
  line-height: 1.6;
}

.taboo-content {
  margin-top: 30px;
}

.taboo-feature, .taboo-example, .taboo-case {
  margin-bottom: 30px;
}

.taboo-feature h3, .taboo-example h3, .taboo-case h3 {
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 15px;
  border-left: 4px solid #e60012;
  padding-left: 15px;
}

.taboo-feature p, .taboo-case p {
  color: #555;
  line-height: 1.7;
  margin-bottom: 15px;
}

.taboo-example ul {
  list-style-type: none;
  padding-left: 0;
}

.taboo-example li {
  color: #555;
  line-height: 1.7;
  margin-bottom: 12px;
  padding-left: 20px;
  position: relative;
}

.taboo-example li::before {
  content: "•";
  color: #e60012;
  font-weight: bold;
  position: absolute;
  left: 0;
}

.taboo-details {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));
  gap: 30px;
  margin-bottom: 30px;
}

.detail-card {
  background-color: #f9f9f9;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.03);
}

.detail-card h4 {
  font-size: 1.3rem;
  color: #333;
  margin-bottom: 15px;
  position: relative;
  padding-bottom: 10px;
}

.detail-card h4::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 40px;
  height: 2px;
  background-color: #e60012;
}

.detail-card p {
  color: #555;
  line-height: 1.6;
  margin-bottom: 10px;
}

/* 结论部分样式 */
.conclusion-section {
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  padding: 40px;
  margin-top: 50px;
}

.conclusion-section h2 {
  font-size: 1.8rem;
  color: #e60012;
  margin-bottom: 20px;
  text-align: center;
}

.conclusion-section p {
  color: #555;
  line-height: 1.8;
  margin-bottom: 15px;
}

.significance-points {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin: 30px 0;
}

.significance-item {
  background-color: #f9f9f9;
  padding: 25px;
  border-radius: 10px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.03);
}

.significance-item h3 {
  font-size: 1.3rem;
  color: #333;
  margin-bottom: 15px;
  border-left: 3px solid #e60012;
  padding-left: 12px;
}

.significance-item p {
  color: #555;
  line-height: 1.7;
}

.final-note {
  font-style: italic;
  color: #666;
  text-align: center;
  max-width: 900px;
  margin: 30px auto 10px;
}

/* 响应式调整 */
@media (max-width: 992px) {
  .intro-section {
    flex-direction: column;
  }
  
  .intro-image {
    width: 100%;
    height: 300px;
  }
  
  .taboo-details {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .page-title {
    font-size: 2rem;
  }
  
  .intro-text h2, .section-title {
    font-size: 1.7rem;
  }
  
  .nav-item {
    min-width: 120px;
  }
  
  .nav-icon {
    width: 50px;
    height: 50px;
  }
  
  .significance-points {
    grid-template-columns: 1fr;
  }
  
  .conclusion-section h2 {
    font-size: 1.6rem;
  }
}
</style> 