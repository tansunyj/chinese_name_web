<template>
  <div class="taboos-page">
    <div class="container">
      <div class="back-link">
        <router-link to="/knowledge">
          <i class="arrow-left"></i> 返回知识库
        </router-link>
      </div>
      
      <h1 class="page-title">字音字形避讳</h1>
      <div class="subtitle">避免与长辈、名人同名或与不吉利含义谐音的字</div>
      
      <div class="content-section">
        <div class="section-container">
          <div class="content-wrapper">
            <div class="article-content">
              <div class="intro-section">
                <p>在中国传统文化中，取名是一件极为重要的事情，而名字的字音和字形避讳则是取名过程中不可忽视的关键环节。正确理解和应用字音字形避讳原则，可以避免许多文化禁忌，为取名者提供更加符合文化传统和现代审美的名字选择。</p>
              </div>

              <section id="sound-taboos">
                <h2>一、字音避讳</h2>
                
                <div class="subsection">
                  <h3>1. 谐音避讳</h3>
                  <p>汉语拥有大量同音字和近音字，在取名时需要避免与不吉利词语发生谐音。</p>
                  <div class="example-box">
                    <h4>常见谐音避讳示例：</h4>
                    <ul>
                      <li><span class="highlight">死(sǐ)</span>：避免使用与"死"谐音的字，如"思、司、四"等四声字</li>
                      <li><span class="highlight">穷(qióng)</span>：避免使用与"穷"谐音的字，如"琼、邛、穹"等</li>
                      <li><span class="highlight">苦(kǔ)</span>：避免使用与"苦"谐音的字，如"库、酷"等</li>
                      <li><span class="highlight">败(bài)</span>：避免使用与"败"谐音的字，如"拜、稗"等</li>
                      <li><span class="highlight">散(sàn)</span>：避免使用与"散（离散）"谐音的字，如"伞"等</li>
                    </ul>
                  </div>
                </div>
                
                <div class="subsection">
                  <h3>2. 多方言考量</h3>
                  <p>中国拥有多种方言，同一个字在不同方言中的发音可能有很大差异，取名时应考虑家族主要使用的方言以及普通话中的发音情况。</p>
                  <div class="example-box">
                    <h4>方言差异示例：</h4>
                    <ul>
                      <li>"福"字在普通话中读fú，寓意美好，但在某些南方方言中与"服（丧）"谐音</li>
                      <li>"娶"字在普通话中读qǔ，但在某些方言中与"去"谐音，可能产生"娶妻离去"的不佳联想</li>
                      <li>"六"字在普通话中读liù，但在粤语中与"落（下跌）"谐音</li>
                    </ul>
                  </div>
                </div>
                
                <div class="subsection">
                  <h3>3. 长辈名讳避讳</h3>
                  <p>传统上，中国人非常注重避免使用与长辈，特别是父母、祖父母同名的字，这被视为对长辈的尊重。</p>
                  <div class="example-box">
                    <h4>长辈名讳实践：</h4>
                    <ul>
                      <li>传统上，子女不使用与父母完全相同的字</li>
                      <li>即使不是完全相同的字，也会避免使用发音相近的字</li>
                      <li>现代社会中，这一传统有所弱化，但在许多家庭中仍被遵循</li>
                    </ul>
                  </div>
                </div>
                
                <div class="subsection">
                  <h3>4. 名人名讳避讳</h3>
                  <p>历史上，中国有避讳帝王和著名人物名字的传统，这一传统在现代虽然不再严格遵循，但在某些场合仍有体现。</p>
                  <div class="example-box">
                    <h4>历史避讳实例：</h4>
                    <ul>
                      <li>汉朝时期避讳皇帝刘邦的"邦"字，改用"国"字</li>
                      <li>唐朝时期避讳李世民的"世"字，以"代"或其他字替代</li>
                      <li>家族中若有著名人物，后代通常避免使用其名字中的字</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section id="form-taboos">
                <h2>二、字形避讳</h2>
                
                <div class="subsection">
                  <h3>1. 部首避讳</h3>
                  <p>某些部首在特定语境中可能具有负面含义，在取名时需要慎重考虑。</p>
                  <div class="example-box">
                    <h4>常见避讳部首：</h4>
                    <ul>
                      <li><span class="highlight">疒（病字旁）</span>：与疾病相关，如"疾、痛、瘦"等</li>
                      <li><span class="highlight">歹（歹字旁）</span>：与不好、死亡相关，如"歼、残"等</li>
                      <li><span class="highlight">辶（走之旁）</span>：在某些情况下可能暗示"离去"，如"逃、逝"等</li>
                      <li><span class="highlight">刀（刀字旁）</span>：与锋利、伤害相关，需根据具体字义判断</li>
                    </ul>
                  </div>
                </div>
                
                <div class="subsection">
                  <h3>2. 字形结构避讳</h3>
                  <p>某些字的结构可能被解读为不吉利的含义，尤其在按照拆字方式理解时。</p>
                  <div class="example-box">
                    <h4>字形结构避讳示例：</h4>
                    <ul>
                      <li>"舍"字可拆分为"人"和"舌"，有"人舌"之嫌</li>
                      <li>"破"字包含"皮"和"文"，可能被解读为"皮开文现"</li>
                      <li>"圭"上面一横加"土"成为"圭"，使用时需注意可能的负面联想</li>
                      <li>"贫"字从"分"从"贝"，有分离财富之意</li>
                    </ul>
                  </div>
                </div>
                
                <div class="subsection">
                  <h3>3. 笔画缺失或不平衡</h3>
                  <p>传统上认为名字中的字应当笔画完整、结构平衡，避免使用残缺或不平衡的字。</p>
                  <div class="example-box">
                    <h4>需注意的字形特点：</h4>
                    <ul>
                      <li>缺乏"口"的字可能被视为不能好好说话</li>
                      <li>缺乏"心"的字可能被视为缺乏情感</li>
                      <li>偏旁结构严重不平衡的字可能被视为性格不稳定</li>
                      <li>过于简单的字（如一、二、三）可能被视为缺乏内涵</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section id="combination-taboos">
                <h2>三、字音字形组合避讳</h2>
                
                <div class="subsection">
                  <h3>1. 名字整体组合</h3>
                  <p>名字中的字在组合后可能产生新的含义或谐音，需要全面考虑。</p>
                  <div class="example-box">
                    <h4>组合避讳示例：</h4>
                    <ul>
                      <li>"王冠"组合虽然字义良好，但与"亡官"谐音</li>
                      <li>"高明"组合可能与"膏盲"谐音</li>
                      <li>"马洪"组合与"马虹"谐音，后者有"瘦马"的歧义</li>
                      <li>"贾斌"组合可能与"假币"谐音</li>
                    </ul>
                  </div>
                </div>
                
                <div class="subsection">
                  <h3>2. 姓名联合考量</h3>
                  <p>名字需要与姓氏和谐搭配，避免与姓氏组合后产生不良含义。</p>
                  <div class="example-box">
                    <h4>姓名组合避讳：</h4>
                    <ul>
                      <li>姓"胡"者避免取名"闹"，否则成为"胡闹"</li>
                      <li>姓"温"者避免取名"柔"，否则成为"温柔"</li>
                      <li>姓"赵"者避免取名"钱"，否则成为"找钱"</li>
                      <li>姓"第"者避免取名"一"，否则成为"第一"</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section id="modern-considerations">
                <h2>四、现代社会的避讳考量</h2>
                
                <div class="subsection">
                  <h3>1. 国际化考量</h3>
                  <p>在全球化背景下，名字在其他语言中的发音和含义也需要考虑。</p>
                  <div class="example-box">
                    <h4>国际化避讳示例：</h4>
                    <ul>
                      <li>避免使用在英语或其他常见语言中有负面含义的发音</li>
                      <li>考虑名字的罗马字母拼写是否容易书写和记忆</li>
                      <li>避免使用在国际交流中可能引起误解的字</li>
                    </ul>
                  </div>
                </div>
                
                <div class="subsection">
                  <h3>2. 网络时代的新避讳</h3>
                  <p>互联网和社交媒体的普及带来了新的避讳考量。</p>
                  <div class="example-box">
                    <h4>现代避讳考量：</h4>
                    <ul>
                      <li>避免使用与网络流行词汇谐音的名字</li>
                      <li>考虑名字是否易于在数字平台上使用</li>
                      <li>避免可能被用于制作网络梗的名字组合</li>
                    </ul>
                  </div>
                </div>
                
                <div class="subsection">
                  <h3>3. 职业发展考量</h3>
                  <p>名字可能对未来的职业发展产生影响，需要前瞻性考虑。</p>
                  <div class="example-box">
                    <h4>职业避讳建议：</h4>
                    <ul>
                      <li>避免使用在特定行业中可能引起负面联想的字</li>
                      <li>考虑名字是否适合正式场合和专业环境</li>
                      <li>避免使用过于花哨或难以记忆的字组合</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section id="practical-guidelines">
                <h2>五、实用命名指南</h2>
                
                <div class="subsection">
                  <h3>1. 避讳检查清单</h3>
                  <div class="checklist-box">
                    <h4>命名前的全面检查：</h4>
                    <ul>
                      <li>检查名字的普通话发音是否有不良谐音</li>
                      <li>检查家族使用的方言中是否有不良谐音</li>
                      <li>检查名字的字形是否有不良联想</li>
                      <li>检查姓名组合后是否有不良含义</li>
                      <li>检查是否与长辈、名人名字有冲突</li>
                      <li>检查名字在国际语境中是否合适</li>
                      <li>咨询多位家庭成员的意见，获取不同视角</li>
                    </ul>
                  </div>
                </div>
                
                <div class="subsection">
                  <h3>2. 平衡传统与现代</h3>
                  <p>在遵循传统避讳原则的同时，可以融入现代审美和价值观。</p>
                  <div class="example-box">
                    <h4>平衡建议：</h4>
                    <ul>
                      <li>尊重核心的传统避讳原则，如不使用与逝者同名的字</li>
                      <li>对某些过于迷信的避讳可以适度放宽</li>
                      <li>结合家族传统和个人喜好做出平衡选择</li>
                      <li>考虑名字在现代社会中的实用性和适应性</li>
                    </ul>
                  </div>
                </div>
                
                <div class="subsection">
                  <h3>3. 专业建议</h3>
                  <p>对于重视传统取名的家庭，可以考虑咨询专业人士。</p>
                  <div class="service-box">
                    <h4>专业命名服务可提供：</h4>
                    <ul>
                      <li>基于家族历史的个性化避讳分析</li>
                      <li>全面的字音字形评估</li>
                      <li>结合八字和五行的名字选择</li>
                      <li>多元文化背景下的名字合适性评估</li>
                    </ul>
                  </div>
                </div>
              </section>

              <div class="conclusion">
                <p>字音字形避讳是中国传统命名文化中的重要环节，它体现了中华民族对语言、文字深刻理解和巧妙运用的智慧。在现代社会中，合理应用这些避讳原则，可以为孩子取一个既符合传统文化精神又适应现代社会需求的好名字。最重要的是，名字应当传递父母的美好祝愿，反映家族的文化传承，并为孩子未来的人生旅程带来积极的影响。</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NameSoundFormTaboos',
  data() {
    return {
      // 数据在模板中直接使用
    }
  },
  methods: {
    // 可能需要的方法
  },
  mounted() {
    // 页面加载完成后执行的操作
    window.scrollTo(0, 0);  // 确保页面从顶部开始
  }
}
</script>

<style scoped>
.taboos-page {
  padding-top: 70px;
  padding-bottom: 50px;
  background-color: #f8f9fa;
  min-height: 100vh;
  color: #333;
}

.container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 20px;
}

.back-link {
  margin-bottom: 20px;
}

.back-link a {
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  color: #555;
  font-size: 1rem;
  transition: color 0.3s;
}

.back-link a:hover {
  color: #e60012;
}

.arrow-left {
  display: inline-block;
  width: 20px;
  height: 20px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23555555'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M10 19l-7-7m0 0l7-7m-7 7h18' /%3E%3C/svg%3E");
  background-size: contain;
  background-repeat: no-repeat;
  margin-right: 5px;
}

.page-title {
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 10px;
  color: #333;
}

.subtitle {
  text-align: center;
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 40px;
}

.content-section {
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  overflow: hidden;
}

.section-container {
  padding: 40px;
}

.content-wrapper {
  display: flex;
  flex-direction: column;
}

.article-content {
  flex: 1;
  line-height: 1.8;
}

.intro-section {
  font-size: 1.1rem;
  color: #555;
  margin-bottom: 30px;
  border-left: 4px solid #e60012;
  padding-left: 20px;
  background-color: rgba(230, 0, 18, 0.05);
  padding: 15px 20px;
  border-radius: 0 8px 8px 0;
}

section {
  margin-bottom: 40px;
}

h2 {
  font-size: 1.8rem;
  color: #333;
  margin-bottom: 20px;
  border-bottom: 2px solid #e60012;
  padding-bottom: 10px;
  display: inline-block;
}

.subsection {
  margin-bottom: 25px;
}

h3 {
  font-size: 1.4rem;
  color: #444;
  margin-bottom: 15px;
}

p {
  margin-bottom: 15px;
}

.example-box, .checklist-box, .service-box {
  background-color: #f9f9f9;
  border-radius: 8px;
  padding: 20px;
  margin: 15px 0;
  border-left: 4px solid #e60012;
}

.example-box h4, .checklist-box h4, .service-box h4 {
  color: #e60012;
  margin-bottom: 10px;
  font-size: 1.1rem;
}

ul {
  padding-left: 20px;
  margin-bottom: 0;
}

li {
  margin-bottom: 8px;
  line-height: 1.6;
}

.highlight {
  color: #e60012;
  font-weight: bold;
}

.conclusion {
  margin-top: 40px;
  padding: 20px;
  background-color: rgba(230, 0, 18, 0.05);
  border-radius: 8px;
  font-size: 1.1rem;
  line-height: 1.8;
}

@media (max-width: 768px) {
  .section-container {
    padding: 25px;
  }
  
  .page-title {
    font-size: 2rem;
  }
  
  .subtitle {
    font-size: 1rem;
  }
  
  h2 {
    font-size: 1.5rem;
  }
  
  h3 {
    font-size: 1.2rem;
  }
  
  .intro-section, .conclusion {
    font-size: 1rem;
  }
}
</style> 