<template>
  <div class="wuxing-page">
    <div class="container">
      <h1 class="page-title">五行八字理论</h1>
      
      <div class="content-wrapper">
        <section class="intro-section">
          <div class="section-image">
            <img src="../assets/images/zhanbu.png" alt="五行八字示意图" />
          </div>
          <div class="section-content">
            <h2>五行八字概述</h2>
            <p>五行八字理论是中国传统文化中的核心哲学体系之一，融合了宇宙观、命理学和名学等多方面的智慧。它以阴阳五行为基础，通过分析一个人出生时的年、月、日、时所对应的天干地支，来解读个人命运特质和人生走向。</p>
            <p>在取名实践中，五行八字理论被用来选择能够平衡或补充个人命盘的汉字，以期达到"扶其不足，抑其太过"的效果，从而帮助个人更好地发展潜能，规避潜在的不利因素。</p>
          </div>
        </section>

        <section class="theory-section">
          <h2>五行基本概念</h2>
          <div class="elements-grid">
            <div class="element-card">
              <div class="element-icon wood-icon">木</div>
              <h3>木</h3>
              <p>代表生长、发展、向上、伸展</p>
              <p>性质：温和、柔软、生发、条达</p>
              <p>方位：东方</p>
              <p>季节：春季</p>
              <p>相关字：林、森、桐、松、柏、梁、楚、栋</p>
            </div>
            <div class="element-card">
              <div class="element-icon fire-icon">火</div>
              <h3>火</h3>
              <p>代表热情、光明、上升、扩张</p>
              <p>性质：炎热、上炎、光明、温暖</p>
              <p>方位：南方</p>
              <p>季节：夏季</p>
              <p>相关字：炎、燕、焱、煜、熙、晖、昊、晓</p>
            </div>
            <div class="element-card">
              <div class="element-icon earth-icon">土</div>
              <h3>土</h3>
              <p>代表稳定、包容、中正、厚重</p>
              <p>性质：厚重、包容、承载、中和</p>
              <p>方位：中央</p>
              <p>季节：四季末月</p>
              <p>相关字：坤、坚、城、垣、境、墨、基、垚</p>
            </div>
            <div class="element-card">
              <div class="element-icon metal-icon">金</div>
              <h3>金</h3>
              <p>代表坚固、刚毅、收敛、肃杀</p>
              <p>性质：坚固、锐利、果断、清洁</p>
              <p>方位：西方</p>
              <p>季节：秋季</p>
              <p>相关字：钧、铭、锐、钊、铿、锋、钱、鉴</p>
            </div>
            <div class="element-card">
              <div class="element-icon water-icon">水</div>
              <h3>水</h3>
              <p>代表智慧、流动、柔韧、下行</p>
              <p>性质：寒冷、向下、流动、滋润</p>
              <p>方位：北方</p>
              <p>季节：冬季</p>
              <p>相关字：潮、泽、洋、淼、涵、渊、源、清</p>
            </div>
          </div>
        </section>

        <section class="cycle-section">
          <h2>五行相生相克关系</h2>
          <div class="cycle-diagram">
            <img src="../assets/images/wuxing.png" alt="五行相生相克图" />
          </div>
          <div class="cycle-content">
            <div class="cycle-card">
              <h3>相生关系（促进）</h3>
              <ul>
                <li><strong>木生火：</strong>木材燃烧产生火</li>
                <li><strong>火生土：</strong>火焚烧后产生灰烬沉积为土</li>
                <li><strong>土生金：</strong>金属矿藏蕴含在土中</li>
                <li><strong>金生水：</strong>金属在寒冷时会凝结水珠</li>
                <li><strong>水生木：</strong>水滋养树木生长</li>
              </ul>
            </div>
            <div class="cycle-card">
              <h3>相克关系（抑制）</h3>
              <ul>
                <li><strong>木克土：</strong>树根穿透土壤</li>
                <li><strong>土克水：</strong>土堤可以阻挡水流</li>
                <li><strong>水克火：</strong>水可以熄灭火焰</li>
                <li><strong>火克金：</strong>火能够熔化金属</li>
                <li><strong>金克木：</strong>金属工具可以砍伐树木</li>
              </ul>
            </div>
          </div>
        </section>

        <section class="bazi-section">
          <h2>八字基础知识</h2>
          <p>"八字"，又称"四柱"，是指一个人出生时的年、月、日、时四个时间单位，每个单位由一个天干和一个地支组成，共八个字，因此称为"八字"。</p>
          
          <div class="columns-wrapper">
            <div class="column">
              <h3>十天干</h3>
              <ul class="basic-list">
                <li><strong>甲(木)：</strong>阳木，如参天大树</li>
                <li><strong>乙(木)：</strong>阴木，如绿草藤蔓</li>
                <li><strong>丙(火)：</strong>阳火，如烈日当空</li>
                <li><strong>丁(火)：</strong>阴火，如烛光灯火</li>
                <li><strong>戊(土)：</strong>阳土，如高山大地</li>
                <li><strong>己(土)：</strong>阴土，如田园土地</li>
                <li><strong>庚(金)：</strong>阳金，如刀剑兵器</li>
                <li><strong>辛(金)：</strong>阴金，如首饰金器</li>
                <li><strong>壬(水)：</strong>阳水，如江河湖海</li>
                <li><strong>癸(水)：</strong>阴水，如雨露霜雪</li>
              </ul>
            </div>
            
            <div class="column">
              <h3>十二地支</h3>
              <ul class="basic-list">
                <li><strong>子(水)：</strong>子时23-1点，属鼠</li>
                <li><strong>丑(土)：</strong>丑时1-3点，属牛</li>
                <li><strong>寅(木)：</strong>寅时3-5点，属虎</li>
                <li><strong>卯(木)：</strong>卯时5-7点，属兔</li>
                <li><strong>辰(土)：</strong>辰时7-9点，属龙</li>
                <li><strong>巳(火)：</strong>巳时9-11点，属蛇</li>
                <li><strong>午(火)：</strong>午时11-13点，属马</li>
                <li><strong>未(土)：</strong>未时13-15点，属羊</li>
                <li><strong>申(金)：</strong>申时15-17点，属猴</li>
                <li><strong>酉(金)：</strong>酉时17-19点，属鸡</li>
                <li><strong>戌(土)：</strong>戌时19-21点，属狗</li>
                <li><strong>亥(水)：</strong>亥时21-23点，属猪</li>
              </ul>
            </div>
          </div>
        </section>

        <section class="application-section">
          <h2>五行八字在取名中的应用</h2>
          <div class="application-content">
            <h3>步骤一：确定八字命盘</h3>
            <p>根据出生年、月、日、时确定一个人的八字命盘，分析其中五行的强弱和平衡状况。</p>
            
            <h3>步骤二：找出喜用神</h3>
            <p>"喜用神"是指能够帮助平衡命盘的五行元素。一般来说：</p>
            <ul>
              <li>如果命盘中某种五行太强，需要用其所克的五行来制约</li>
              <li>如果命盘中某种五行太弱，需要用生它的五行来扶助</li>
              <li>如果命盘中某种五行缺失，需要在名字中补充</li>
            </ul>
            
            <h3>步骤三：选择合适的汉字</h3>
            <p>在确定了喜用神后，选择符合以下条件的汉字：</p>
            <ul>
              <li>五行属性与喜用神相符</li>
              <li>字义吉祥、寓意美好</li>
              <li>读音优美、易于发音</li>
              <li>字形美观、笔画适中</li>
            </ul>
          </div>
          <div class="example-box">
            <h3>实例分析</h3>
            <p><strong>案例：</strong>一个出生在冬季的人，八字中"水"元素过旺，而"火"元素不足。</p>
            <p><strong>分析：</strong>根据五行相克原理，火克金，金克木，木克土，土克水。因此，可以选择具有"火"属性的字来制约过旺的"水"，或者选择"土"属性的字直接克制"水"。</p>
            <p><strong>取名建议：</strong></p>
            <ul>
              <li>火属性字：炎、焱、煜、晖、熙、昊、晗、炫</li>
              <li>土属性字：坤、垣、城、境、培、坚、均、圆</li>
            </ul>
            <p>例如，可以取名为"李焱城"、"张熙坤"、"王晖垣"等，既平衡了命盘中的五行，又有美好的寓意。</p>
          </div>
        </section>

        <section class="modern-view-section">
          <h2>现代视角下的五行八字</h2>
          <p>从现代角度看，五行八字理论可以被理解为一种古代智慧对人生平衡的探索。虽然其科学性仍有争议，但它所蕴含的平衡哲学、系统思维和整体观念，对现代人仍有启示意义。</p>
          <p>在现代取名实践中，我们可以将五行八字理论视为一种文化传统和取名参考系统，而非绝对遵循的规则。最重要的是选择寓意美好、音律和谐、书写美观的名字，同时尊重传统文化元素。</p>
          <div class="tips-box">
            <h3>取名小贴士</h3>
            <ul>
              <li>平衡五行只是取名的参考因素之一，不必过分拘泥</li>
              <li>名字的意义和读音往往比五行属性更为重要</li>
              <li>考虑家族传统和父母期望，但也要注重孩子的个性发展</li>
              <li>兼顾传统文化和现代审美，选择既有文化底蕴又易于当代社会接受的名字</li>
              <li>避免生僻字和难写字，减少未来可能的不便</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WuXingBaZi',
  data() {
    return {
      // 页面数据
    }
  },
  mounted() {
    // 页面加载完成后滚动到顶部
    window.scrollTo(0, 0);
  }
}
</script>

<style scoped>
.wuxing-page {
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

.content-wrapper {
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  padding: 40px;
  margin-bottom: 30px;
}

.intro-section {
  display: flex;
  gap: 30px;
  margin-bottom: 40px;
}

.section-image {
  flex: 0 0 40%;
}

.section-image img {
  width: 100%;
  border-radius: 8px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
}

.section-content {
  flex: 0 0 60%;
}

.section-content h2,
.theory-section h2,
.cycle-section h2,
.bazi-section h2,
.application-section h2,
.modern-view-section h2 {
  color: #e60012;
  margin-bottom: 20px;
  font-size: 1.8rem;
}

.section-content p {
  color: #333;
  line-height: 1.8;
  margin-bottom: 15px;
}

.elements-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  margin-bottom: 40px;
}

.element-card {
  background-color: #f9f9f9;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.05);
  text-align: center;
}

.element-icon {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 15px;
  font-size: 2rem;
  font-weight: bold;
  color: white;
}

.wood-icon {
  background-color: #4CAF50;
}

.fire-icon {
  background-color: #F44336;
}

.earth-icon {
  background-color: #FFC107;
}

.metal-icon {
  background-color: #9E9E9E;
}

.water-icon {
  background-color: #2196F3;
}

.element-card h3 {
  font-size: 1.4rem;
  margin-bottom: 10px;
  color: #333;
}

.element-card p {
  color: #555;
  font-size: 0.9rem;
  margin-bottom: 5px;
  line-height: 1.5;
}

.cycle-diagram {
  text-align: center;
  margin-bottom: 30px;
}

.cycle-diagram img {
  max-width: 100%;
  border-radius: 8px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
}

.cycle-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-bottom: 40px;
}

.cycle-card {
  background-color: #f9f9f9;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.05);
}

.cycle-card h3 {
  color: #333;
  margin-bottom: 15px;
  font-size: 1.3rem;
}

.cycle-card ul {
  padding-left: 20px;
}

.cycle-card li {
  margin-bottom: 10px;
  color: #555;
  line-height: 1.5;
}

.columns-wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-bottom: 40px;
}

.column h3 {
  color: #333;
  margin-bottom: 15px;
  font-size: 1.3rem;
}

.basic-list {
  list-style-type: none;
  padding: 0;
}

.basic-list li {
  margin-bottom: 10px;
  padding: 10px;
  background-color: #f9f9f9;
  border-radius: 5px;
  color: #555;
}

.application-content {
  margin-bottom: 30px;
}

.application-content h3,
.example-box h3,
.tips-box h3 {
  color: #333;
  margin-bottom: 15px;
  font-size: 1.3rem;
}

.application-content p,
.example-box p,
.modern-view-section p {
  color: #555;
  line-height: 1.7;
  margin-bottom: 15px;
}

.application-content ul,
.example-box ul,
.tips-box ul {
  padding-left: 20px;
  margin-bottom: 20px;
}

.application-content li,
.example-box li,
.tips-box li {
  margin-bottom: 10px;
  color: #555;
  line-height: 1.5;
}

.example-box {
  background-color: #f9f9f9;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.05);
  margin-bottom: 40px;
}

.tips-box {
  background-color: #FFF8E1;
  border-left: 4px solid #FFC107;
  border-radius: 8px;
  padding: 20px;
  margin-top: 20px;
}

@media (max-width: 768px) {
  .intro-section {
    flex-direction: column;
  }
  
  .section-image, 
  .section-content {
    flex: 0 0 100%;
  }
  
  .page-title {
    font-size: 2rem;
  }
  
  .content-wrapper {
    padding: 20px;
  }
  
  .elements-grid {
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  }
  
  .cycle-content {
    grid-template-columns: 1fr;
  }
  
  .columns-wrapper {
    grid-template-columns: 1fr;
  }
}
</style> 