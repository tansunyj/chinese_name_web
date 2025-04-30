<template>
  <div class="historical-names-page">
    <div class="container">
      <h1 class="page-title">Chinese Historical Figure Names</h1>
      
      <div class="intro-section">
        <div class="intro-text">
          <h2>Wisdom and Culture Preserved in History</h2>
          <p>China has a long history with numerous notable figures. The names of historical figures not only record individual life stories but also reflect the cultural characteristics and social landscape of specific historical periods. The ancient Chinese system of multiple appellations including given names, courtesy names, and pseudonyms carries rich cultural connotations and historical wisdom.</p>
          <p>By interpreting the names of historical figures, we can glimpse the profound heritage of ancient naming culture and understand the aesthetic orientations and values of different eras.</p>
        </div>
        <div class="intro-image">
          <img src="../assets/images/huangdi.png" alt="Chinese Historical Figures" />
        </div>
      </div>

      <!-- Category Navigation -->
      <div class="category-nav">
        <div class="nav-item" @click="scrollToCategory('emperors')">
          <div class="nav-icon emperor-icon"></div>
          <span>Emperors and Ministers (帝王将相)</span>
        </div>
        <div class="nav-item" @click="scrollToCategory('scholars')">
          <div class="nav-icon scholar-icon"></div>
          <span>Scholars and Literati (文人雅士)</span>
        </div>
        <div class="nav-item" @click="scrollToCategory('generals')">
          <div class="nav-icon general-icon"></div>
          <span>Heroes and Warriors (英雄豪杰)</span>
        </div>
        <div class="nav-item" @click="scrollToCategory('women')">
          <div class="nav-icon woman-icon"></div>
          <span>Notable Women (巾帼风华)</span>
        </div>
        <div class="nav-item" @click="scrollToCategory('fiction')">
          <div class="nav-icon fiction-icon"></div>
          <span>Fictional Characters (小说传奇)</span>
        </div>
        <div class="nav-item" @click="scrollToCategory('myth')">
          <div class="nav-icon myth-icon"></div>
          <span>Mythological Figures (神话传说)</span>
        </div>
      </div>

      <!-- Emperors and Ministers -->
      <section id="emperors" class="history-section">
        <h2 class="section-title">Emperors and Ministers (帝王将相)</h2>
        <p class="section-intro">The names of Chinese emperors and high officials throughout history often reflect authority and governance ideals, emphasizing nobility, majesty, and profound meaning.</p>
        
        <div class="historical-figures">
          <div class="figure-card">
            <div class="figure-image"><img src="../assets/images/yingzheng.png" alt="Qin Shi Huang" /></div>
            <div class="figure-content">
              <h3>嬴政 (Ying Zheng / First Emperor of Qin)</h3>
              <p><strong>Life: </strong>259 BCE - 210 BCE, renowned politician, strategist, and reformer in Chinese history who achieved the unification of China.</p>
              <p><strong>Name Analysis: </strong>"嬴" (Ying) is the surname from the Zhao clan of the Ying lineage; "政" (Zheng) derives from "governing the people righteously," symbolizing the aspiration to be a wise ruler.</p>
              <p><strong>Title Evolution: </strong>After ascending the throne, he was called "King Zheng of Qin," and after unification, he styled himself "First Emperor" (始皇帝), indicating the beginning of the imperial system.</p>
            </div>
          </div>
          
          <div class="figure-card">
            <div class="figure-image"><img src="../assets/images/liuche.png" alt="Emperor Wu of Han" /></div>
            <div class="figure-content">
              <h3>刘彻 (Liu Che / Emperor Wu of Han)</h3>
              <p><strong>Life: </strong>156 BCE - 87 BCE, the seventh emperor of the Han Dynasty, whose reign marked the most prosperous period of the Western Han Dynasty.</p>
              <p><strong>Name Analysis: </strong>"刘" (Liu) is the surname of the Han imperial family; "彻" (Che) means thorough or penetrating, expressing the hope to fully understand statecraft and comprehend worldly affairs.</p>
              <p><strong>Title Evolution: </strong>Posthumously titled "Emperor Xiao Wu" (孝武皇帝), temple name "Shizong" (世宗), and commonly known as "Emperor Wu" (武帝) due to his military achievements.</p>
            </div>
          </div>
          
          <div class="figure-card">
            <div class="figure-image"><img src="../assets/images/lishimin.png" alt="Emperor Taizong of Tang" /></div>
            <div class="figure-content">
              <h3>李世民 (Li Shimin / Emperor Taizong of Tang)</h3>
              <p><strong>Life: </strong>598 CE - 649 CE, the second emperor of the Tang Dynasty who created the prosperous "Zhenguan Era."</p>
              <p><strong>Name Analysis: </strong>"李" (Li) is the surname; "世民" (Shimin) means "bringing peace to the people across generations," reflecting his aspiration to pacify the populace and benefit future generations.</p>
              <p><strong>Title Evolution: </strong>His reign was known as the "Zhenguan Era" (贞观), posthumously titled "Emperor Wen" (文皇帝), with the temple name "Taizong" (太宗).</p>
            </div>
          </div>
          
          <div class="figure-card">
            <div class="figure-image"><img src="../assets/images/kangxi.png" alt="Emperor Kangxi" /></div>
            <div class="figure-content">
              <h3>爱新觉罗·玄烨 (Aisin Gioro Xuanye / Emperor Kangxi)</h3>
              <p><strong>Life: </strong>1654 - 1722, the fourth emperor of the Qing Dynasty who reigned for 61 years and initiated the first phase of the "Kangxi-Qianlong Prosperity."</p>
              <p><strong>Name Analysis: </strong>"爱新觉罗" (Aisin Gioro) is the surname; "玄" (Xuan) refers to profound and lofty, "烨" (Ye) means bright and magnificent, together symbolizing profound wisdom and splendid brilliance.</p>
              <p><strong>Title Evolution: </strong>Reign title "Kangxi" (康熙), posthumously titled "Emperor Shengzu Ren" (圣祖仁皇帝), temple name "Shengzu" (圣祖).</p>
            </div>
          </div>
        </div>
        
        <div class="view-more-btn" @click="showMoreEmperors = !showMoreEmperors">
          {{ showMoreEmperors ? 'Collapse' : 'View More' }}
          <i class="arrow" :class="{ 'arrow-down': !showMoreEmperors, 'arrow-up': showMoreEmperors }"></i>
        </div>
        
        <div class="historical-figures" v-if="showMoreEmperors">
          <div class="figure-card">
            <div class="figure-image"><img src="../assets/images/jichang.png" alt="King Wen of Zhou" /></div>
            <div class="figure-content">
              <h3>姬昌 (Ji Chang / King Wen of Zhou)</h3>
              <p><strong>Life: </strong>Approximately 1152 BCE - 1056 BCE, founder of the Zhou Dynasty and one of the authors of the "Book of Changes" (I Ching).</p>
              <p><strong>Name Analysis: </strong>"姬" (Ji) is the surname; "昌" (Chang) means prosperous and flourishing, indicating his aspiration to make the country prosperous.</p>
              <p><strong>Title Evolution: </strong>Posthumously titled "King Wen" (文王) for his literary and cultural achievements, and revered as the founder of the Zhou Dynasty after his death.</p>
            </div>
          </div>
          
          <div class="figure-card">
            <div class="figure-image"><img src="../assets/images/caocao.png" alt="Cao Cao" /></div>
            <div class="figure-content">
              <h3>曹操 (Cao Cao / Emperor Wu of Wei)</h3>
              <p><strong>Life: </strong>155 - 220, outstanding politician and military strategist of the late Eastern Han Dynasty, and founder of the Wei state during the Three Kingdoms period.</p>
              <p><strong>Name Analysis: </strong>"曹" (Cao) is the surname; "操" (Cao) means to control or grasp, indicating the ability to control the situation and master circumstances.</p>
              <p><strong>Title Evolution: </strong>During his lifetime, Cao Cao was King of Wei. After his death, his son Cao Pi posthumously honored him as Emperor Wu of Wei (魏武皇帝).</p>
            </div>
          </div>
          
          <div class="figure-card">
            <div class="figure-image"><img src="../assets/images/zhugeliang.png" alt="Zhuge Liang" /></div>
            <div class="figure-content">
              <h3>诸葛亮 (Zhuge Liang / Kongming)</h3>
              <p><strong>Life: </strong>181 - 234, outstanding politician and military strategist of Shu Han during the Three Kingdoms period, honored as the "Sage of Wisdom."</p>
              <p><strong>Name Analysis: </strong>"诸葛" (Zhuge) is the compound surname; "亮" (Liang) means bright and clear, symbolizing wisdom and insight; courtesy name "孔明" (Kongming) means profound wisdom and clear vision.</p>
              <p><strong>Title Evolution: </strong>Honored as "Marquis of Wuxiang" (武乡侯) and "Marquis Zhongwu" (忠武侯), later generations revered him as "Marquis Zhuge Wu" (诸葛武侯) or "Master Wolong" (卧龙先生).</p>
            </div>
          </div>
          
          <div class="figure-card">
            <div class="figure-image"><img src="../assets/images/zengguofan.png" alt="Zeng Guofan" /></div>
            <div class="figure-content">
              <h3>曾国藩 (Zeng Guofan / Disheng)</h3>
              <p><strong>Life: </strong>1811 - 1872, late Qing Dynasty official, founder of the Xiang Army, and a prominent statesman of the Tongzhi Restoration.</p>
              <p><strong>Name Analysis: </strong>"曾" (Zeng) is the surname; in "国藩" (Guofan), "国" refers to the country and "藩" means barrier, expressing the hope to become a shield for the country; courtesy name "涤生" (Disheng) means cleansing oneself to achieve rebirth.</p>
              <p><strong>Title Evolution: </strong>Rose to become Governor-General of Liangjiang, enfeoffed as Marquis Yiyong of the First Rank, posthumously titled "Wenzheng" (文正).</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Scholars and Literati -->
      <section id="scholars" class="history-section">
        <h2 class="section-title">Scholars and Literati (文人雅士)</h2>
        <p class="section-intro">The names of ancient Chinese scholars and literati often reflect literary cultivation and aesthetic tastes, emphasizing elegant imagery and rich connotations.</p>
        
        <div class="historical-figures">
          <div class="figure-card">
            <div class="figure-image"><img src="../assets/images/kongzi.png" alt="Confucius" /></div>
            <div class="figure-content">
              <h3>孔丘 (Kong Qiu / Confucius)</h3>
              <p><strong>Life: </strong>551 BCE - 479 BCE, renowned thinker and educator of the Spring and Autumn Period, founder of Confucianism.</p>
              <p><strong>Name Analysis: </strong>"孔" (Kong) is the surname; "丘" (Qiu) was derived from his birthplace Ni Hill (尼丘), also meaning "high" or "gathering"; "子" (Zi) is an honorific title for a person of virtue and learning.</p>
              <p><strong>Title Evolution: </strong>Later generations honored him as "Most Sacred Teacher" (至圣先师) and "Model Teacher for All Ages" (万世师表).</p>
            </div>
          </div>
          
          <div class="figure-card">
            <div class="figure-image"><img src="../assets/images/libai.png" alt="Li Bai" /></div>
            <div class="figure-content">
              <h3>李白 (Li Bai / Taibai)</h3>
              <p><strong>Life: </strong>701 - 762, great romantic poet of the Tang Dynasty, known as the "Immortal Poet."</p>
              <p><strong>Name Analysis: </strong>"李" (Li) is the surname; "白" (Bai) means pure and bright, also related to his birth when the room was unusually bright; courtesy name "太白" (Taibai), derived from Venus (the Taibai star), symbolizing extraordinary talent and radiance.</p>
              <p><strong>Title Evolution: </strong>Known as the "Immortal Poet" (诗仙), paired with Du Fu the "Sage Poet" (诗圣), together known as the "Great Li-Du" (大李杜).</p>
            </div>
          </div>
          
          <div class="figure-card">
            <div class="figure-image"><img src="../assets/images/dufu.png" alt="Du Fu" /></div>
            <div class="figure-content">
              <h3>杜甫 (Du Fu / Zimei)</h3>
              <p><strong>Life: </strong>712 - 770, great realist poet of the Tang Dynasty, known as the "Sage Poet."</p>
              <p><strong>Name Analysis: </strong>"杜" (Du) is the surname; "甫" (Fu) means a person of virtue, also derived from "Being bright and wise to preserve oneself" from the Book of Songs; courtesy name "子美" (Zimei) signifies beauty of character.</p>
              <p><strong>Title Evolution: </strong>Known as the "Sage Poet" (诗圣), his poetry honored as "Poetry History" (诗史), paired with Li Bai as "Li-Du."</p>
            </div>
          </div>
          
          <div class="figure-card">
            <div class="figure-image"><img src="../assets/images/sushi.png" alt="Su Shi" /></div>
            <div class="figure-content">
              <h3>苏轼 (Su Shi / Zizhan)</h3>
              <p><strong>Life: </strong>1037 - 1101, Northern Song Dynasty literary master, painter, and gourmet, one of the "Eight Great Masters of Tang and Song."</p>
              <p><strong>Name Analysis: </strong>"苏" (Su) is the surname; "轼" (Shi) refers to the handrail of an ancient carriage, derived from Mencius' saying "Following one's heart's desire without overstepping the bounds"; courtesy name "子瞻" (Zizhan) means farsighted and visionary.</p>
              <p><strong>Title Evolution: </strong>Known as "Su the Immortal" (苏仙), also called "Su Dongpo" (苏东坡) as he styled himself "Dongpo Resident" when serving as prefect of Huangzhou.</p>
            </div>
          </div>
        </div>
        
        <div class="view-more-btn" @click="showMoreScholars = !showMoreScholars">
          {{ showMoreScholars ? 'Collapse' : 'View More' }}
          <i class="arrow" :class="{ 'arrow-down': !showMoreScholars, 'arrow-up': showMoreScholars }"></i>
        </div>
        
        <div class="historical-figures" v-if="showMoreScholars">
          <div class="figure-card">
            <div class="figure-image"><img src="../assets/images/lier.png" alt="Laozi" /></div>
            <div class="figure-content">
              <h3>李耳 (Li Er / Laozi)</h3>
              <p><strong>Life: </strong>Approximately 571 BCE - ?, philosopher and thinker of the Spring and Autumn Period, founder of Taoism.</p>
              <p><strong>Name Analysis: </strong>"李" (Li) is the surname; "耳" (Er) may be related to his long ears; "老" (Lao) is an honorific for elders, "子" (Zi) refers to a person of virtue and talent, and "老子" (Laozi) together is a respectful term for a venerable sage.</p>
              <p><strong>Title Evolution: </strong>Known as "Supreme Lord Lao" (太上老君), revered as the founder of Taoism.</p>
            </div>
          </div>
          
          <div class="figure-card">
            <div class="figure-image"><img src="../assets/images/quyuan.png" alt="Qu Yuan" /></div>
            <div class="figure-content">
              <h3>屈原 (Qu Yuan / Ping)</h3>
              <p><strong>Life: </strong>Approximately 340 BCE - 278 BCE, poet and politician of the Warring States Period from the state of Chu, China's earliest patriotic poet.</p>
              <p><strong>Name Analysis: </strong>"屈" (Qu) is the surname; "原" (Yuan) means source or origin, symbolizing the fountainhead of thought; courtesy name "平" (Ping) means fairness and straightforwardness, suggesting integrity of character.</p>
              <p><strong>Title Evolution: </strong>Honored as the "Father of Chu Ci" (楚辞之祖), with the Dragon Boat Festival commemorating his patriotic spirit.</p>
            </div>
          </div>
          
          <div class="figure-card">
            <div class="figure-image"><img src="../assets/images/liqingzhao.png" alt="Li Qingzhao" /></div>
            <div class="figure-content">
              <h3>李清照 (Li Qingzhao / Yi'an)</h3>
              <p><strong>Life: </strong>1084 - approximately 1155, female poet of the Song Dynasty, known as the "Greatest Female Talent in History."</p>
              <p><strong>Name Analysis: </strong>"李" (Li) is the surname; "清照" (Qingzhao) means pure and illuminating, reflecting noble character; she styled herself "Yi'an Resident" (易安居士), with "易安" (Yi'an) being a homophone combining her husband Zhao Mingcheng's style name "Yanming" (彦明) and her own childhood name "Yinan" (宜男).</p>
              <p><strong>Title Evolution: </strong>Celebrated as the representative of "Graceful Poetry" (婉约词), also known as "Yi'an Resident" or "Yi'an Poet."</p>
            </div>
          </div>
          
          <div class="figure-card">
            <div class="figure-image"><img src="../assets/images/luxun.png" alt="Lu Xun" /></div>
            <div class="figure-content">
              <h3>周树人 (Zhou Shuren / Lu Xun)</h3>
              <p><strong>Life: </strong>1881 - 1936, modern writer, thinker, and revolutionary, important participant in the New Culture Movement.</p>
              <p><strong>Name Analysis: </strong>"周" (Zhou) is the surname; original name "树人" (Shuren) derives from the concept "From the emperor to the common people, all must cultivate themselves as the foundation"; pen name "鲁迅" (Lu Xun) with "鲁" (Lu) from his hometown Shaoxing's ancient name Kuaiji (associated with the state of Lu), and "迅" (Xun) meaning swift revival.</p>
              <p><strong>Title Evolution: </strong>Honored as the "Soul of the Nation" and the founder of modern Chinese literature.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Heroes and Warriors -->
      <section id="generals" class="history-section">
        <h2 class="section-title">Heroes and Warriors (英雄豪杰)</h2>
        <p class="section-intro">The names of heroic figures in Chinese history often highlight integrity and valor, embodying the spirit of unyielding courage and self-sacrifice.</p>
        
        <div class="historical-figures">
          <div class="figure-card">
            <div class="figure-image"><img src="../assets/images/yuefei.png" alt="Yue Fei" /></div>
            <div class="figure-content">
              <h3>岳飞 (Yue Fei / Pengju)</h3>
              <p><strong>Life: </strong>1103 - 1142, famous general who resisted the Jin invasion during the Southern Song Dynasty, renowned national hero in Chinese history.</p>
              <p><strong>Name Analysis: </strong>"岳" (Yue) is the surname; "飞" (Fei) means to fly, legend has it that a large bird flew over the roof when he was born, hence the name "Fei"; courtesy name "鹏举" (Pengju), derived from Zhuangzi's "The giant Peng bird migrates to the southern sea, striking the water for three thousand li, rising on the whirlwind ninety thousand li high," symbolizing lofty aspirations.</p>
              <p><strong>Title Evolution: </strong>Later generations honored him as "Wumu" (武穆) and "King Zhongwu" (忠武王), along with Guan Yu and Zhang Fei, he was called a "Martial Saint" (武圣).</p>
            </div>
          </div>
          
          <div class="figure-card">
            <div class="figure-image"><img src="../assets/images/wentianxiang.png" alt="Wen Tianxiang" /></div>
            <div class="figure-content">
              <h3>文天祥 (Wen Tianxiang / Songrui)</h3>
              <p><strong>Life: </strong>1236 - 1283, politician, military strategist, and patriotic poet of the late Southern Song Dynasty, a national hero.</p>
              <p><strong>Name Analysis: </strong>"文" (Wen) is the surname; "天祥" (Tianxiang) means auspicious blessing from heaven, expressing good wishes for his life; courtesy name "宋瑞" (Songrui) means auspicious omen for the Song Dynasty, indicating his loyalty to the Song.</p>
              <p><strong>Title Evolution: </strong>Known as "Wen Wenshan" (文文山) due to his posthumous title "Wenshan" (文山), paired with Yue Fei as the two loyal heroes of the Song Dynasty.</p>
            </div>
          </div>
          
          <div class="figure-card">
            <div class="figure-image"><img src="../assets/images/zhangsanfeng.png" alt="Zhang Sanfeng" /></div>
            <div class="figure-content">
              <h3>张三丰 (Zhang Sanfeng / Junbao)</h3>
              <p><strong>Life: </strong>Approximately 1247 - ?, famous Taoist priest of the late Yuan and early Ming dynasties, founder of the Wudang School of martial arts.</p>
              <p><strong>Name Analysis: </strong>"张" (Zhang) is the surname; in "三丰" (Sanfeng), "三" means many and "丰" means abundant, symbolizing great achievements, also carrying the Taoist meaning of "Three Origins and Three Treasures"; name "君宝" (Junbao) means precious and valuable gentleman.</p>
              <p><strong>Title Evolution: </strong>Known as "Zhang the Perfected" (张真人), Emperor Chengzu of Ming conferred upon him the title "Perfected One of Penetrating Mystery and Manifest Transformation" (通微显化真人), commonly called "Zhang Daoling" by people.</p>
            </div>
          </div>
          
          <div class="figure-card">
            <div class="figure-image"><img src="../assets/images/liuhulan.png" alt="Liu Hulan" /></div>
            <div class="figure-content">
              <h3>刘胡兰 (Liu Hulan)</h3>
              <p><strong>Life: </strong>1932 - 1947, underground worker for the Chinese Communist Party, revolutionary martyr.</p>
              <p><strong>Name Analysis: </strong>"刘" (Liu) is the surname; in "胡兰" (Hulan), "胡" refers to the Hu people and "兰" to the orchid, symbolizing noble character. The name follows the rural custom of giving girls flower names.</p>
              <p><strong>Title Evolution: </strong>Mao Zedong praised her saying "A great life, a glorious death" (生的伟大，死的光荣), she was honored as the "Unyielding Red Plum" (不屈的红梅).</p>
            </div>
          </div>
        </div>
        
        <div class="view-more-btn" @click="showMoreGenerals = !showMoreGenerals">
          {{ showMoreGenerals ? 'Collapse' : 'View More' }}
          <i class="arrow" :class="{ 'arrow-down': !showMoreGenerals, 'arrow-up': showMoreGenerals }"></i>
        </div>
        
        <div class="historical-figures" v-if="showMoreGenerals">
          <div class="figure-card">
            <div class="figure-image"><img src="../assets/images/guanyu.png" alt="Guan Yu" /></div>
            <div class="figure-content">
              <h3>关羽 (Guan Yu / Yunchang)</h3>
              <p><strong>Life: </strong>Approximately 160 - 220, famous general of Shu Han during the Three Kingdoms period, one of Liu Bei's important advisers.</p>
              <p><strong>Name Analysis: </strong>"关" (Guan) is the surname; "羽" (Yu) means wing, symbolizing flight and swiftness; courtesy name "云长" (Yunchang) means towering into the clouds, suggesting imposing presence.</p>
              <p><strong>Title Evolution: </strong>Revered as the "Martial Saint" (武圣), with dozens of titles conferred throughout dynasties, such as "Loyal and Righteous, Divine and Martial, Spiritual and Benevolent, Brave and Illustrious Emperor Guan" (忠义神武灵佑仁勇威显关圣大帝).</p>
            </div>
          </div>
          
          <div class="figure-card">
            <div class="figure-image"><img src="../assets/images/zhougong.png" alt="Duke of Zhou" /></div>
            <div class="figure-content">
              <h3>姬旦 (Ji Dan / Duke of Zhou)</h3>
              <p><strong>Life: </strong>Approximately 1100 BCE - 1043 BCE, statesman, regent, and philosopher of the early Western Zhou Dynasty, regarded as a model of loyalty and good governance.</p>
              <p><strong>Name Analysis: </strong>"姬" (Ji) is the surname of the Zhou royal family; "旦" (Dan) means dawn or morning, symbolizing the beginning of a new era; he is better known as the "Duke of Zhou" (周公) in Chinese history.</p>
              <p><strong>Title Evolution: </strong>Honored as "Perfect Duke" (周公旦) and "Cultural Saint" (文圣), respected by Confucius as the ideal ruler and statesman who established the foundations of Zhou Dynasty's political system.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Continue with other sections... -->
      
    </div>
  </div>
</template>

<script>
export default {
  name: 'HistoricalNames',
  data() {
    return {
      showMoreEmperors: false,
      showMoreScholars: false,
      showMoreGenerals: false,
      showMoreWomen: false,
      showMoreFiction: false,
      showMoreMyth: false
    }
  },
  methods: {
    scrollToCategory(category) {
      const element = document.getElementById(category);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
}
</script>

<style scoped>
.historical-names-page {
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

.emperor-icon {
  background-image: url('../assets/images/emperor-icon.png');
}

.scholar-icon {
  background-image: url('../assets/images/scholar-icon.png');
}

.general-icon {
  background-image: url('../assets/images/general-icon.png');
}

.woman-icon {
  background-image: url('../assets/images/woman-icon.png');
}

.fiction-icon {
  background-image: url('../assets/images/fiction-icon.png');
}

.myth-icon {
  background-image: url('../assets/images/myth-icon.png');
}

.nav-item span {
  font-size: 1.1rem;
  color: #333;
  font-weight: 500;
}

/* 历史部分样式 */
.history-section {
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

.historical-figures {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
  gap: 30px;
  margin-bottom: 30px;
}

.figure-card {
  display: flex;
  background-color: #f9f9f9;
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.3s, box-shadow 0.3s;
}

.figure-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.figure-image {
  width: 180px;
  height: 220px;
  overflow: hidden;
}

.figure-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.figure-content {
  flex: 1;
  padding: 20px;
}

.figure-content h3 {
  font-size: 1.4rem;
  color: #333;
  margin-bottom: 15px;
}

.figure-content p {
  color: #555;
  line-height: 1.5;
  margin-bottom: 10px;
  font-size: 0.95rem;
}

.view-more-btn {
  text-align: center;
  color: #e60012;
  font-weight: 500;
  cursor: pointer;
  padding: 10px;
  transition: all 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
}

.view-more-btn:hover {
  background-color: rgba(230, 0, 18, 0.05);
  border-radius: 6px;
}

.arrow {
  display: inline-block;
  width: 0;
  height: 0;
  margin-left: 8px;
  transition: transform 0.3s;
}

.arrow-down {
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 6px solid #e60012;
}

.arrow-up {
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-bottom: 6px solid #e60012;
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

/* 响应式调整 */
@media (max-width: 992px) {
  .intro-section {
    flex-direction: column;
  }
  
  .intro-image {
    width: 100%;
    height: 300px;
  }
  
  .historical-figures {
    grid-template-columns: 1fr;
  }
  
  .figure-card {
    flex-direction: column;
  }
  
  .figure-image {
    width: 100%;
    height: 250px;
  }
}

@media (max-width: 768px) {
  .page-title {
    font-size: 2rem;
  }
  
  .intro-text h2, .conclusion-section h2 {
    font-size: 1.5rem;
  }
  
  .section-title {
    font-size: 1.7rem;
  }
  
  .nav-item {
    min-width: 120px;
  }
  
  .nav-icon {
    width: 50px;
    height: 50px;
  }
}
</style> 