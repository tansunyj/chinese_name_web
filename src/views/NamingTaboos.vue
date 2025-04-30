<template>
  <div class="naming-taboos-page">
    <div class="container">
      <h1 class="page-title">Chinese Traditional Naming Taboos</h1>
      
      <div class="intro-section">
        <div class="intro-text">
          <h2>Cultural Background of Naming Taboos</h2>
          <p>In Chinese traditional culture, a name is not just a form of address but is considered an important symbol closely related to a person's destiny. Therefore, when naming a child, various taboos must be avoided to prevent unfavorable influences. These taboos reflect Chinese cultural concepts, social norms, and expectations for life.</p>
          <p>Understanding these naming taboos helps us both respect tradition and avoid potential cultural conflicts and negative implications when choosing a name.</p>
        </div>
        <div class="intro-image">
          <img src="../assets/images/jinji.png" alt="Naming Taboos" onerror="this.onerror=null; this.src='https://placehold.co/600x400?text=Naming Taboos';" />
        </div>
      </div>

      <!-- Category Navigation -->
      <div class="category-nav">
        <div class="nav-item" @click="scrollToCategory('ancestral')">
          <div class="nav-icon ancestral-icon"></div>
          <span>Ancestral Name Taboos (长辈名讳)</span>
        </div>
        <div class="nav-item" @click="scrollToCategory('homophones')">
          <div class="nav-icon homophones-icon"></div>
          <span>Homophone Taboos (谐音忌讳)</span>
        </div>
        <div class="nav-item" @click="scrollToCategory('zodiac')">
          <div class="nav-icon zodiac-icon"></div>
          <span>Zodiac Taboos (生肖禁忌)</span>
        </div>
        <div class="nav-item" @click="scrollToCategory('meaning')">
          <div class="nav-icon meaning-icon"></div>
          <span>Meaning Taboos (含义忌讳)</span>
        </div>
        <div class="nav-item" @click="scrollToCategory('structure')">
          <div class="nav-icon structure-icon"></div>
          <span>Structure Taboos (结构禁忌)</span>
        </div>
        <div class="nav-item" @click="scrollToCategory('modern')">
          <div class="nav-icon modern-icon"></div>
          <span>Modern Considerations (现代考量)</span>
        </div>
      </div>

      <!-- Ancestral Name Taboos -->
      <section id="ancestral" class="taboo-section">
        <h2 class="section-title">Ancestral Name Taboos (长辈名讳)</h2>
        <p class="section-intro">In Chinese traditional culture, name avoidance is a form of respect for elders and emperors. Children cannot use names that are the same as their parents, grandparents, or other elders, as this is considered disrespectful.</p>
        
        <div class="taboo-content">
          <div class="taboo-feature">
            <h3>Basic Principles</h3>
            <p>Chinese traditional culture emphasizes "not violating the taboo names of elders" (不犯长辈名讳), meaning not using the same characters as elders' names, as a sign of respect. This tradition can be traced back to the pre-Qin period and has gradually formed a complex system of taboo rules throughout history.</p>
          </div>
          
          <div class="taboo-example">
            <h3>Forms of Name Avoidance</h3>
            <ul>
              <li><strong>Complete avoidance (完全避讳): </strong>Completely avoiding the use of characters identical to elders' names</li>
              <li><strong>Partial avoidance (部分避讳): </strong>Avoiding characters with the same pronunciation as elders' names</li>
              <li><strong>Character modification (改字避讳): </strong>Slightly modifying the writing of identical characters</li>
              <li><strong>Pronunciation alteration (革音避讳): </strong>Slightly changing the pronunciation of identical characters</li>
            </ul>
          </div>
          
          <div class="taboo-details">
            <div class="detail-card">
              <h4>Imperial Taboos</h4>
              <p>In ancient China, characters in an emperor's name were taboo for the entire society. For example, during the Qing Dynasty, Emperor Kangxi's name was "玄烨" (Xuanye), so the character "玄" (xuan) was changed to "元" (yuan). For instance, "玄武门" (Xuanwu Gate) was renamed "元武门" (Yuanwu Gate), and "玄奘" (Xuanzang) became "元奘" (Yuanzang).</p>
              <p>Some dynasties even required avoiding the names of the emperor's ancestors, making the taboo system more complex.</p>
            </div>
            
            <div class="detail-card">
              <h4>Family Taboos</h4>
              <p>Within families, the taboo names of ancestors were especially important. Many families kept genealogical records documenting ancestors' names, and descendants needed to consult these records to avoid duplicate names. For example, if a grandfather's name was "志明" (Zhiming), grandchildren should not use either "志" (zhi) or "明" (ming) in their names.</p>
              <p>Due to this taboo tradition, analyzing the use of different characters in names across generations can help understand family generational relationships and inheritance history.</p>
            </div>
          </div>
          
          <div class="taboo-case">
            <h3>Modern Application</h3>
            <p>In modern society, while taboos regarding emperors' names are no longer strictly observed, taboos regarding family elders' names are still maintained in many families. When naming newborns, many families still consider avoiding the names of parents, grandparents, and other direct elders.</p>
            <p>Contemporary name avoidance is more of a respect for tradition and recognition of family order, rather than a strict cultural taboo. Some modern families have also begun to adopt more flexible approaches, such as avoiding completely identical characters but allowing characters with the same pronunciation but different writing.</p>
          </div>
        </div>
      </section>

      <!-- Homophone Taboos -->
      <section id="homophones" class="taboo-section">
        <h2 class="section-title">Homophone Taboos (谐音忌讳)</h2>
        <p class="section-intro">Chinese language is rich in homophones. When naming, special attention must be paid to avoid using characters that sound like inauspicious words, preventing negative associations.</p>
        
        <div class="taboo-content">
          <div class="taboo-feature">
            <h3>Importance of Homophone Issues</h3>
            <p>Chinese is a language rich in homophones, where many characters have the same or similar pronunciations despite different writings. Therefore, when naming, one must consider not only the literal meaning of the character but also the associations its sound might evoke, avoiding homophones with inauspicious, negative, or embarrassing connotations.</p>
          </div>
          
          <div class="taboo-example">
            <h3>Common Homophone Taboos</h3>
            <ul>
              <li><strong>Homophones with "死" (death): </strong>Avoiding characters that sound like "死" (sǐ/death), such as "思" (sī/think), "四" (sì/four), especially at the end of a name</li>
              <li><strong>Homophones with "苦" (suffering): </strong>Avoiding characters that sound like "苦" (kǔ/bitter), such as "库" (kù/storehouse)</li>
              <li><strong>Homophones with "穷" (poverty): </strong>Avoiding characters that sound like "穷" (qióng/poor), such as "琼" (qióng/jade)</li>
              <li><strong>Homophones with "败" (failure): </strong>Avoiding characters that sound like "败" (bài/defeat), such as "拜" (bài/to pay respect)</li>
              <li><strong>Specific combination homophones: </strong>Some characters may be fine when used alone but create unfortunate homophones when combined, such as "安息" (anxi/rest in peace) sounding like "暗死" (ansi/die in darkness), or "家贵" (jiagui/family prosperity) sounding like "加鬼" (jiagui/add ghost)</li>
            </ul>
          </div>
          
          <div class="taboo-details">
            <div class="detail-card">
              <h4>Dialect Considerations</h4>
              <p>Different regional dialects have pronunciation variations, so potential homophone issues in local dialects should also be considered when naming. For example, the character "诗" (shi/poem) in Standard Mandarin might sound similar to "尸" (shi/corpse) in some southern dialects.</p>
              <p>If a family has multiple dialect backgrounds or might live in different regions in the future, the name should be checked in multiple dialect contexts.</p>
            </div>
            
            <div class="detail-card">
              <h4>Numeric Homophones</h4>
              <p>Chinese culture is particularly sensitive to numeric homophones. For example, "四" (si/four) is considered unlucky because it sounds like "死" (si/death), while "八" (ba/eight) is considered lucky because it sounds like "发" (fa/prosperity).</p>
              <p>This numeric homophone taboo also affects name choices, especially for characters related to numeric forms or meanings. For instance, characters containing the "四" radical, such as "肆" (si/unbridled) or "泗" (si/name of a river), might be avoided.</p>
            </div>
          </div>
          
          <div class="taboo-case">
            <h3>Case Analysis</h3>
            <p><strong>Examples of unfortunate homophones: </strong>The name "王军" (Wang Jun) might sound like "亡军" (wang jun/defeated army) in some dialects; "高健" (Gao Jian) might sound like "告捡" (gao jian/inform and pick up) in some dialects; "陈寿" (Chen Shou) might evoke associations with "陈述" (chenshu/state) or the inauspicious concept of "寿终" (shouzhong/end of life).</p>
            <p><strong>Homophone checking methods: </strong>When finalizing a name, it's best to pronounce the full name in Standard Mandarin and any relevant dialects to check for unfortunate homophones. The name can also be combined with common words and idioms to see if it creates negative associations. Additionally, consulting people of different age groups and regions about their first impressions of the name can be helpful.</p>
          </div>
        </div>
      </section>

      <!-- Other sections will be added later; here we're only showing two sections as templates -->
      
      <div class="conclusion-section">
        <h2>Taboos and Wisdom: The Cautious Attitude of Ancient Chinese Naming</h2>
        <p>Chinese traditional naming taboos reflect ancient people's reverence for language and cautious attitude toward life. These taboos are not only manifestations of cultural traditions but also contain rich life wisdom and aesthetic orientations.</p>
        
        <div class="significance-points">
          <div class="significance-item">
            <h3>Cultural Heritage Significance</h3>
            <p>Naming taboos are an important part of Chinese culture. Understanding and respecting these taboos helps us inherit and promote the essence of Chinese culture.</p>
          </div>
          
          <div class="significance-item">
            <h3>Practical Value</h3>
            <p>Avoiding naming taboos can help children avoid potential social difficulties and psychological pressure, creating a better living and growing environment for them.</p>
          </div>
          
          <div class="significance-item">
            <h3>Modern Application and Inclusiveness</h3>
            <p>In modern society, we can view these taboos dialectically, both respecting tradition and not being bound by formalities, flexibly applying this wisdom to give children names that have cultural connotations while being suitable for modern society.</p>
          </div>
        </div>
        
        <p class="final-note">Naming is the first gift parents give to their children. Understanding naming taboos is not only a respect for tradition but also a responsibility for the child's future. We hope that the various naming taboos introduced in this article will provide valuable reference for your naming journey.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NamingTaboos',
  data() {
    return {
      // Data
    }
  },
  methods: {
    scrollToCategory(category) {
      const element = document.getElementById(category);
      if (element) {
        const yOffset = -80; // Consider the height of the top navigation bar
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({top: y, behavior: 'smooth'});
      }
    }
  },
  mounted() {
    // Code executed after page loading
    document.title = 'Chinese Traditional Naming Taboos - Name Generator';
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