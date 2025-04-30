<template>
  <div class="regional-differences-page">
    <div class="container">
      <h1 class="page-title">Chinese Regional Naming Differences</h1>
      
      <div class="intro-section">
        <div class="intro-text">
          <h2>Regional Cultures and Naming Traditions</h2>
          <p>With its vast territory, China has developed a rich variety of naming customs across different regions due to variations in historical evolution, geographical environment, ethnic composition, and cultural traditions. From north to south, from coastal areas to inland regions, from Han Chinese to ethnic minorities, naming traditions display distinctive regional characteristics.</p>
          <p>Understanding regional naming differences not only helps us choose names with deeper cultural significance but also enhances our appreciation of China's diverse cultural heritage.</p>
        </div>
        <div class="intro-image">
          <img src="../assets/images/map.png" alt="Map of China" onerror="this.onerror=null; this.src='https://placehold.co/600x400?text=Map of China';" />
        </div>
      </div>

      <!-- 分类导航 -->
      <div class="category-nav">
        <div class="nav-item" @click="scrollToCategory('north')">
          <div class="nav-icon north-icon"></div>
          <span>Northern Region</span>
        </div>
        <div class="nav-item" @click="scrollToCategory('south')">
          <div class="nav-icon south-icon"></div>
          <span>Southern Region</span>
        </div>
        <div class="nav-item" @click="scrollToCategory('east')">
          <div class="nav-icon east-icon"></div>
          <span>Eastern Coastal Region</span>
        </div>
        <div class="nav-item" @click="scrollToCategory('west')">
          <div class="nav-icon west-icon"></div>
          <span>Western Region</span>
        </div>
        <div class="nav-item" @click="scrollToCategory('central')">
          <div class="nav-icon central-icon"></div>
          <span>Central Region</span>
        </div>
        <div class="nav-item" @click="scrollToCategory('ethnic')">
          <div class="nav-icon ethnic-icon"></div>
          <span>Ethnic Minority</span>
        </div>
      </div>

      <!-- 北方地区 -->
      <section id="north" class="region-section">
        <h2 class="section-title">Northern Region Naming Characteristics</h2>
        <p class="section-intro">The northern regions include the three northeastern provinces and the North China Plain, with naming styles that often reflect straightforward personalities and Confucian traditions.</p>
        
        <div class="region-content">
          <div class="region-feature">
            <h3>Overview of Characteristics</h3>
            <p>Names in northern China typically feature strength, simplicity, and forthrightness, often embodying the spirit of perseverance and resilience. Deeply influenced by Confucian culture, names frequently incorporate traditional values such as loyalty, filial piety, righteousness, benevolence, and trustworthiness.</p>
          </div>
          
          <div class="region-example">
            <h3>Common Naming Approaches</h3>
            <ul>
              <li><strong>Emphasizing strength and simplicity: </strong>Characters like "刚" (gang/strong), "强" (qiang/powerful), "伟" (wei/great), "壮" (zhuang/robust), "山" (shan/mountain), "石" (shi/rock), signifying strength, power, and stability</li>
              <li><strong>Highlighting traditional virtues: </strong>Characters like "德" (de/virtue), "义" (yi/righteousness), "仁" (ren/benevolence), "礼" (li/propriety), "信" (xin/trustworthiness), "忠" (zhong/loyalty), reflecting Confucian influence</li>
              <li><strong>Agricultural civilization references: </strong>Characters like "田" (tian/field), "禾" (he/grain), "稷" (ji/millet), "麦" (mai/wheat), "秋" (qiu/autumn), "丰" (feng/harvest), reflecting northern agricultural traditions</li>
              <li><strong>Expressing grand aspirations: </strong>Characters like "志" (zhi/ambition), "远" (yuan/far), "宏" (hong/grand), "图" (tu/plan), "飞" (fei/fly), "腾" (teng/soar), embodying the broad-mindedness of northerners</li>
            </ul>
          </div>
          
          <div class="region-details">
            <div class="detail-card">
              <h4>Northeastern Region</h4>
              <p>Influenced by Manchu and other ethnic minorities, names in northeastern China often display unique cultural fusion. People from the northeast have straightforward personalities, and their names are typically simple and direct with clear meanings, such as "大力" (Dali/great strength), "刚强" (Gangqiang/strong), "建国" (Jianguo/building the nation), and "卫东" (Weidong/defending the east).</p>
              <p>Contemporary northeastern names also often use melodious and beautiful words like "明月" (Mingyue/bright moon), "冰洁" (Bingjie/pure as ice), and "雪松" (Xuesong/snow pine), reflecting northern characteristics.</p>
            </div>
            
            <div class="detail-card">
              <h4>North China Plain</h4>
              <p>In the North China Plain region represented by Beijing and Tianjin, names are influenced by imperial capital culture and often carry elegant and modest qualities. Characters such as "文" (wen/cultured), "雅" (ya/elegant), "博" (bo/extensive knowledge), "华" (hua/splendid), "贤" (xian/virtuous), and "清" (qing/clear) are commonly used in names.</p>
              <p>Names in Hebei and Shanxi provinces often reflect Confucian thought and filial traditions, with characters like "忠" (zhong/loyalty), "孝" (xiao/filial piety), "诚" (cheng/sincerity), and "信" (xin/trustworthiness) appearing frequently.</p>
            </div>
          </div>
          
          <div class="naming-case">
            <h3>Case Analysis</h3>
            <p>Taking "李刚" (Li Gang) as an example of a common northern name, the character "刚" (gang) embodies the northern admiration for strength and resoluteness. The pronunciation is resonant, and the strokes are simple yet powerful, representing a typical northern naming style.</p>
            <p>Another example is "张志远" (Zhang Zhiyuan), where "志" (zhi) represents ambition, and "远" (yuan) suggests far-reaching goals. The entire name expresses grand aspirations and an enterprising spirit, typical of northern naming traditions.</p>
          </div>
        </div>
      </section>

      <!-- 南方地区 -->
      <section id="south" class="region-section">
        <h2 class="section-title">Southern Region Naming Characteristics</h2>
        <p class="section-intro">The southern regions include South China and Southwest China, with naming styles that often reflect subtlety, elegance, and intelligence.</p>
        
        <div class="region-content">
          <div class="region-feature">
            <h3>Overview of Characteristics</h3>
            <p>Southern Chinese names generally tend toward elegance and refinement, emphasizing phonetic harmony and beautiful meanings. Influenced by the water towns culture of the Yangtze River Delta and poetic traditions, names often display a graceful style, using soft, flowing characters that highlight intelligence and elegance.</p>
          </div>
          
          <div class="region-example">
            <h3>Common Naming Approaches</h3>
            <ul>
              <li><strong>Natural landscape imagery: </strong>Characters like "江" (jiang/river), "河" (he/river), "湖" (hu/lake), "水" (shui/water), "山" (shan/mountain), "峰" (feng/peak), reflecting the beautiful natural landscapes of southern China</li>
              <li><strong>Literary and poetic references: </strong>Characters like "诗" (shi/poetry), "词" (ci/lyrics), "雅" (ya/elegant), "韵" (yun/rhyme), "清" (qing/clear), "芳" (fang/fragrant), demonstrating rich cultural heritage</li>
              <li><strong>Flora references: </strong>Characters like "梅" (mei/plum blossom), "兰" (lan/orchid), "竹" (zhu/bamboo), "菊" (ju/chrysanthemum), "荷" (he/lotus), "莲" (lian/lotus), symbolizing noble character</li>
              <li><strong>Elegant and refined qualities: </strong>Characters like "婉" (wan/gentle), "秀" (xiu/elegant), "雅" (ya/refined), "静" (jing/quiet), "巧" (qiao/clever), "慧" (hui/wise), describing gentle and kind personality traits</li>
            </ul>
          </div>
          
          <div class="region-details">
            <div class="detail-card">
              <h4>Jiangnan Region</h4>
              <p>The Jiangnan region (south of the Yangtze River) has a long history of cultural prosperity, and its names often reflect scholarly traditions and artistic sensibilities. Characters like "文" (wen/literate), "雅" (ya/elegant), "芳" (fang/fragrant), "卿" (qing/minister), and "清" (qing/clear) are common in names from this region.</p>
              <p>Girls' names in the Jiangnan region are particularly delicate and elegant, often using characters related to flowers, birds, rivers, and lakes, such as "婉" (wan/gentle), "莹" (ying/crystal clear), "芸" (yun/rue plant), "娟" (juan/graceful), and "洁" (jie/pure).</p>
            </div>
            
            <div class="detail-card">
              <h4>Lingnan Region</h4>
              <p>The Lingnan region (south of the Five Ridges, including Guangdong, Guangxi, etc.) is influenced by Cantonese and Hakka cultures, with names that often emphasize practical success and good fortune. Characters like "庆" (qing/celebration), "发" (fa/prosperity), "兴" (xing/prosperity), "旺" (wang/flourishing), "顺" (shun/smooth), and "达" (da/attain) are frequently used.</p>
              <p>Due to frequent international exchanges, names in the Lingnan region sometimes show Western or international influences, especially in modern times, while maintaining traditional auspicious connotations.</p>
            </div>
          </div>
          
          <div class="naming-case">
            <h3>Case Analysis</h3>
            <p>Taking "陈雅婷" (Chen Yating) as an example of a typical southern girl's name, "雅" (ya) means elegant, and "婷" (ting) describes gracefulness. The entire name sounds melodious and expresses delicate beauty and elegance, perfectly embodying the southern preference for refined and gentle female names.</p>
            <p>Another example is "林清远" (Lin Qingyuan), where "清" (qing) suggests clarity and purity, and "远" (yuan) implies distance or depth. The name conveys a sense of clear vision and profound thought, reflecting the southern emphasis on scholarly qualities and aesthetic refinement.</p>
          </div>
        </div>
      </section>

      <!-- 东部沿海 -->
      <section id="east" class="region-section">
        <h2 class="section-title">Eastern Coastal Region Naming Characteristics</h2>
        <p class="section-intro">The eastern coastal regions include the Shandong Peninsula, Jiangsu, Zhejiang, Fujian, Taiwan, and other areas, with naming styles that often reflect openness, inclusiveness, and diversity.</p>
        
        <div class="region-content">
          <div class="region-feature">
            <h3>Overview of Characteristics</h3>
            <p>The eastern coastal regions have historically been at the forefront of cultural exchange between China and other countries, with naming styles that combine traditional and modern, domestic and foreign elements. Names often emphasize both traditional cultural connotations and international perspectives, reflecting openness, innovation, and progressive spirit.</p>
          </div>
          
          <div class="region-example">
            <h3>Common Naming Approaches</h3>
            <ul>
              <li><strong>Ocean imagery: </strong>Characters like "洋" (yang/ocean), "波" (bo/wave), "涛" (tao/billows), "海" (hai/sea), "帆" (fan/sail), "航" (hang/voyage), reflecting the coastal regions' close connection to the ocean</li>
              <li><strong>Emphasizing progressive spirit: </strong>Characters like "进" (jin/advance), "取" (qu/acquire), "博" (bo/extensive), "新" (xin/new), "创" (chuang/create), "拓" (tuo/expand), expressing innovative and pioneering spirit</li>
              <li><strong>Highlighting international vision: </strong>Characters like "环" (huan/global), "球" (qiu/globe), "宇" (yu/universe), "世" (shi/world), "洲" (zhou/continent), "际" (ji/international), symbolizing broad international perspectives</li>
              <li><strong>Focusing on practicality: </strong>Characters like "通" (tong/through), "达" (da/reach), "实" (shi/practical), "用" (yong/useful), "融" (rong/integrate), "合" (he/harmonize), reflecting pragmatic spirit</li>
            </ul>
          </div>
          
          <div class="region-details">
            <div class="detail-card">
              <h4>Shandong Peninsula</h4>
              <p>Names from Shandong often combine Confucian traditions with maritime culture, including both Confucian values like "仁" (ren/benevolence), "义" (yi/righteousness), "礼" (li/propriety), "智" (zhi/wisdom), "信" (xin/trustworthiness) and ocean elements like "洋" (yang/ocean), "海" (hai/sea), "帆" (fan/sail), "波" (bo/wave).</p>
              <p>Influenced by Qi-Lu culture, names often include characters like "文" (wen/culture), "博" (bo/extensive), "儒" (ru/Confucian), "礼" (li/propriety), highlighting cultural heritage.</p>
            </div>
            
            <div class="detail-card">
              <h4>Zhejiang-Fujian-Taiwan Region</h4>
              <p>Names in the Zhejiang-Fujian-Taiwan region often reflect a combination of maritime culture and commercial wisdom, frequently using characters like "智" (zhi/wisdom), "巧" (qiao/clever), "商" (shang/commerce), "贸" (mao/trade), "益" (yi/benefit), and "利" (li/profit).</p>
              <p>In southern Fujian and Taiwan, names often include characters like "宝" (bao/treasure), "金" (jin/gold), "玉" (yu/jade), "富" (fu/wealth), "财" (cai/wealth), and "吉" (ji/auspicious), expressing wishes for wealth and good fortune, reflecting commercial society characteristics.</p>
            </div>
          </div>
          
          <div class="naming-case">
            <h3>Case Analysis</h3>
            <p>Taking "王海拓" (Wang Haituo) as an example of a typical eastern coastal region name, "海" (hai) symbolizes the breadth of the ocean, and "拓" (tuo) means to expand or pioneer. The entire name suggests broad vision and innovative spirit, reflecting the open and progressive spirit of coastal regions.</p>
            <p>Another example is the girl's name "林欣怡" (Lin Xinyi), where "欣" (xin) represents joy, and "怡" (yi) means harmony and contentment. The overall sound is harmonious with beautiful meanings, retaining traditional feminine qualities while not lacking modern vitality, a common naming style in coastal cities.</p>
          </div>
        </div>
      </section>

      <!-- 西部地区 -->
      <section id="west" class="region-section">
        <h2 class="section-title">Western Region Naming Characteristics</h2>
        <p class="section-intro">The western regions include the northwestern and southwestern highlands, with naming styles that often reflect bold and expansive characteristics.</p>
        
        <div class="region-content">
          <div class="region-feature">
            <h3>Overview of Characteristics</h3>
            <p>Western Chinese names often incorporate elements of the vast and rugged landscape, reflecting the rough and unrestrained nature of the region. Names often relate to mountains, rivers, and the vast grasslands.</p>
          </div>
          
          <div class="region-example">
            <h3>Common Naming Approaches</h3>
            <ul>
              <li><strong>Mountain imagery: </strong>Characters like "山" (shan/mountain), "川" (chuan/river), "雪" (xue/snow), "峰" (feng/peak), "岭" (ling/ridge), reflecting the rugged mountain landscapes</li>
              <li><strong>River imagery: </strong>Characters like "江" (jiang/river), "河" (he/river), "湖" (hu/lake), "溪" (xi/stream), reflecting the abundant water resources</li>
              <li><strong>Grassland imagery: </strong>Characters like "原" (yuan/plain), "草" (cao/grass), "牧" (mu/pasture), "马" (ma/horse), reflecting the pastoral lifestyle</li>
              <li><strong>Animal imagery: </strong>Characters like "鹰" (ying/eagle), "鹿" (lu/deer), "狼" (lang/wolf), reflecting the diverse wildlife</li>
            </ul>
          </div>
          
          <div class="region-details">
            <div class="detail-card">
              <h4>Northwestern Region</h4>
              <p>The western region is home to many ethnic groups, each with its own unique naming traditions. Names often incorporate elements of the region's cultural and historical background.</p>
            </div>
            
            <div class="detail-card">
              <h4>Southwestern Region</h4>
              <p>The western region is home to many ethnic groups, each with its own unique naming traditions. Names often incorporate elements of the region's cultural and historical background.</p>
            </div>
          </div>
          
          <div class="naming-case">
            <h3>Case Analysis</h3>
            <p>Taking "马雄飞" (Ma Xiongfei) as an example of a common western name, "雄" (xiong) embodies the admiration for strength and courage, and "飞" (fei) suggests soaring high. The entire name reflects the bold and expansive spirit of the western region.</p>
            <p>Another example is "李高远" (Li Gaoyuan), where "高" (gao) suggests high aspirations, and "远" (yuan) implies a far-reaching goal. The name conveys a sense of lofty ambition and broad-mindedness, reflecting the western region's open and progressive spirit.</p>
          </div>
        </div>
      </section>

      <!-- 中部地区 -->
      <section id="central" class="region-section">
        <h2 class="section-title">Central Region Naming Characteristics</h2>
        <p class="section-intro">The central regions include Henan, Hubei, Hunan, Jiangxi, Anhui, and other provinces, with naming styles that often reflect balanced, steady, and eclectic characteristics.</p>
        
        <div class="region-content">
          <div class="region-feature">
            <h3>Overview of Characteristics</h3>
            <p>Located in the heartland of China, the central regions have a profound historical and cultural foundation. Names often reflect traditional cultural roots and the fusion of diverse cultural elements. They combine the resolute strength of the north with the graceful elegance of the south, and the innovative openness of the east with the broad-mindedness of the west.</p>
          </div>
          
          <div class="region-example">
            <h3>Common Naming Approaches</h3>
            <ul>
              <li><strong>Central Plains cultural heritage: </strong>Characters like "中" (zhong/central), "华" (hua/Chinese), "夏" (xia/Chinese civilization), "嵩" (song/Mount Song), "洛" (luo/Luoyang), "伊" (yi/Yi River), reflecting Central Plains history and culture</li>
              <li><strong>Chu and Han cultural blend: </strong>Characters like "楚" (chu/Chu state), "汉" (han/Han state), "荆" (jing/Jingzhou), "襄" (xiang/Xiangyang), "湘" (xiang/Xiang River), "鄂" (e/Hubei), showcasing the cultural characteristics of Chu and Han</li>
              <li><strong>River and lake imagery: </strong>Characters like "江" (jiang/river), "河" (he/river), "湖" (hu/lake), "汉" (han/Han River), "洞" (dong/cave), "庐" (lu/Mount Lu), reflecting the geographic features of abundant water systems</li>
              <li><strong>Balanced harmony orientation: </strong>Characters like "和" (he/harmony), "平" (ping/peace), "稳" (wen/steady), "安" (an/peaceful), "康" (kang/health), "宁" (ning/tranquility), conveying ideals of harmony and peace</li>
            </ul>
          </div>
          
          <div class="region-details">
            <div class="detail-card">
              <h4>Henan Region</h4>
              <p>As the cradle of Chinese civilization, Henan names often emphasize traditional cultural heritage, frequently using characters like "华" (hua/Chinese), "夏" (xia/Chinese civilization), "中" (zhong/central), "原" (yuan/plain), "嵩" (song/Mount Song), and "洛" (luo/Luoyang) to highlight Central Plains cultural identity.</p>
              <p>Henan names also often include characters that convey stability and prosperity, such as "安" (an/peaceful), "泰" (tai/peaceful), "丰" (feng/abundant), and "裕" (yu/abundant), reflecting the agricultural civilization's desire for stable and prosperous lives.</p>
            </div>
            
            <div class="detail-card">
              <h4>Hubei-Hunan Region</h4>
              <p>The Hubei-Hunan region has been influenced by Chu culture since ancient times, with names often incorporating elements of Chu culture using characters like "楚" (chu/Chu state), "荆" (jing/Jingzhou), "襄" (xiang/Xiangyang), and "湘" (xiang/Xiang River).</p>
              <p>Names in this region also often reflect local water features, using characters like "江" (jiang/river), "湖" (hu/lake), "洞" (dong/cave), and "潭" (tan/pool), as well as mountain features with characters like "岳" (yue/mountain), "峰" (feng/peak), and "岭" (ling/ridge).</p>
            </div>
          </div>
          
          <div class="naming-case">
            <h3>Case Analysis</h3>
            <p>Taking "张洛尧" (Zhang Luoyao) as an example of a central region name, "洛" (luo) refers to Luoyang, one of the ancient capitals in the Central Plains, and "尧" (yao) refers to Emperor Yao, a legendary ancient Chinese ruler. The entire name highlights the profound cultural heritage of the Central Plains and expresses respect for traditional culture.</p>
            <p>Another example is "何楚君" (He Chujun), where "楚" (chu) refers to the ancient state of Chu, and "君" (jun) means gentleman or ruler. The name embodies Chu cultural characteristics while conveying nobility and elegance, reflecting the cultural identity of the Hubei-Hunan region.</p>
          </div>
        </div>
      </section>

      <!-- 少数民族 -->
      <section id="ethnic" class="region-section">
        <h2 class="section-title">Ethnic Minority Naming Characteristics</h2>
        <p class="section-intro">China has 56 ethnic groups, and the 55 minority ethnic groups besides the Han Chinese have their distinctive naming traditions that enrich the diversity of Chinese naming culture.</p>
        
        <div class="region-content">
          <div class="region-feature">
            <h3>Overview of Characteristics</h3>
            <p>The naming traditions of ethnic minorities are deeply influenced by their respective ethnic cultures, religious beliefs, lifestyles, and historical heritage, forming naming systems and characteristics different from those of the Han Chinese. These names typically reflect worship of nature, reverence for ancestors, aspirations for a better life, and unique religious cultures.</p>
          </div>
          
          <div class="region-example">
            <h3>Major Ethnic Minority Naming Characteristics</h3>
            <ul>
              <li><strong>Mongolian: </strong>Names often relate to grasslands, herding, horses, and natural phenomena, such as "苏荣" (Surong), "巴图" (Batu), "乌兰" (Ulan), "特木尔" (Temür)</li>
              <li><strong>Tibetan: </strong>Most names are associated with Buddhism, such as "丹增" (Tenzin), "达瓦" (Dawa), "洛桑" (Lobsang), "次仁" (Tsering), meaning "dharma increase," "moon," "wisdom," and "long life" respectively</li>
              <li><strong>Uyghur: </strong>Deeply influenced by Islamic culture, boys often use names like "艾买提" (Ahmet), "阿布都拉" (Abdullah), "穆罕默德" (Muhammad), while girls use names like "古丽" (Guli), "艾尼娃" (Aniwa), "米娜" (Mina)</li>
              <li><strong>Yi: </strong>Names often express aspirations for a good life, such as "阿依" (Ayi), "阿果" (Aguo), "阿黑" (Ahei), or relate to natural objects</li>
              <li><strong>Zhuang: </strong>Many names use words with auspicious symbolism, such as "石" (shi/stone), "秀" (xiu/elegant), "凤" (feng/phoenix), "花" (hua/flower), "金" (jin/gold), "银" (yin/silver)</li>
              <li><strong>Korean: </strong>Typically composed of a surname and a two-syllable given name, emphasizing phonetic harmony, such as "金正恩" (Kim Jong-un), "朴槿惠" (Park Geun-hye), "崔琦濬" (Choi Ki-joon)</li>
            </ul>
          </div>
          
          <div class="region-details">
            <div class="detail-card">
              <h4>Northwestern Ethnic Groups</h4>
              <p>Northwestern ethnic groups such as Uyghur, Kazakh, and Hui are predominantly influenced by Islamic culture. Their names often incorporate Islamic elements, such as "阿卜杜拉" (Abdullah), meaning "servant of Allah," "阿里" (Ali), and "穆罕默德" (Muhammad).</p>
              <p>Traditional naming customs often include the father's name as part of a person's name, indicating patrilineal heritage and family relationships.</p>
            </div>
            
            <div class="detail-card">
              <h4>Southwestern Ethnic Groups</h4>
              <p>Southwestern ethnic groups such as Tibetan, Yi, Miao, and Dai have diverse naming cultures. Tibetan names are closely tied to Tibetan Buddhism, often incorporating religious elements and blessings.</p>
              <p>Some ethnic groups name children after natural objects, animals, or plants, reflecting their close relationship with nature and traditional ecological wisdom.</p>
            </div>
          </div>
          
          <div class="naming-case">
            <h3>Case Analysis</h3>
            <p><strong>Tibetan name: </strong>"丹增曲培" (Tenzin Chöpel) is a typical Tibetan name, where "丹增" (Tenzin) means "dharma increase" and "曲培" (Chöpel) means "propagation of dharma," reflecting the profound influence of Tibetan Buddhism.</p>
            <p><strong>Mongolian name: </strong>"乌兰其其格" (Ulan Qiqig) is a typical Mongolian girl's name meaning "red flower," reflecting the Mongolian admiration for natural beauty and aspirations for a good life.</p>
            <p><strong>Uyghur name: </strong>"阿不都热西提·阿不力孜" (Abduresit Abliz), the first part "阿不都热西提" (Abduresit) is the given name meaning "servant of the Merciful," and the second part "阿不力孜" (Abliz) is the patronymic, meaning "son of so-and-so," reflecting Islamic cultural influence.</p>
          </div>
        </div>
      </section>

      <div class="conclusion-section">
        <h2>Contemporary Significance of Regional Naming Differences</h2>
        <p>The differences in naming traditions across various regions of China not only reflect regional cultural diversity but also demonstrate the rich cultural heritage formed by the Chinese nation through its long historical development. Understanding these regional differences helps us both preserve cultural essence and incorporate contemporary characteristics when naming children.</p>
        
        <div class="significance-points">
          <div class="significance-item">
            <h3>Cultural Heritage Significance</h3>
            <p>Regional naming traditions are important components of local culture, transmitting core values and aesthetic tastes of regional cultures through names, serving as significant carriers of intangible cultural heritage.</p>
          </div>
          
          <div class="significance-item">
            <h3>Identity Significance</h3>
            <p>Names with regional characteristics can strengthen people's regional cultural identity and sense of belonging, maintaining cultural diversity and uniqueness in the context of globalization.</p>
          </div>
          
          <div class="significance-item">
            <h3>Modern Naming Inspiration</h3>
            <p>In contemporary society, understanding regional naming differences helps create names that maintain traditional cultural roots while being adapted to modern society, with both cultural depth and contemporary relevance.</p>
          </div>
        </div>
        
        <p class="final-note">Regardless of which regional naming style you choose, the most important aspect is to imbue the name with beautiful meanings and aspirations. We hope that the wisdom of these regional naming cultures will provide you with rich inspiration for your naming journey.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RegionalNamingDifferences',
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
    document.title = 'Regional Naming Differences - Chinese Name Generator';
  }
}
</script>

<style scoped>
.regional-differences-page {
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

.north-icon {
  background-image: url('../assets/images/north-icon.png');
  background-color: #f0f8ff; /* 临时颜色，图像加载失败时显示 */
  border-radius: 50%;
}

.south-icon {
  background-image: url('../assets/images/south-icon.png');
  background-color: #f0fff0;
  border-radius: 50%;
}

.east-icon {
  background-image: url('../assets/images/east-icon.png');
  background-color: #fff0f0;
  border-radius: 50%;
}

.west-icon {
  background-image: url('../assets/images/west-icon.png');
  background-color: #fff8f0;
  border-radius: 50%;
}

.central-icon {
  background-image: url('../assets/images/central-icon.png');
  background-color: #f8f0ff;
  border-radius: 50%;
}

.ethnic-icon {
  background-image: url('../assets/images/ethnic-icon.png');
  background-color: #f0ffff;
  border-radius: 50%;
}

.nav-item span {
  font-size: 1.1rem;
  color: #333;
  font-weight: 500;
}

/* 区域部分样式 */
.region-section {
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

.region-content {
  margin-top: 30px;
}

.region-feature, .region-example, .naming-case {
  margin-bottom: 30px;
}

.region-feature h3, .region-example h3, .naming-case h3 {
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 15px;
  border-left: 4px solid #e60012;
  padding-left: 15px;
}

.region-feature p, .naming-case p {
  color: #555;
  line-height: 1.7;
  margin-bottom: 15px;
}

.region-example ul {
  list-style-type: none;
  padding-left: 0;
}

.region-example li {
  color: #555;
  line-height: 1.7;
  margin-bottom: 12px;
  padding-left: 20px;
  position: relative;
}

.region-example li::before {
  content: "•";
  color: #e60012;
  font-weight: bold;
  position: absolute;
  left: 0;
}

.region-details {
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

/* 响应式调整 */
@media (max-width: 992px) {
  .intro-section {
    flex-direction: column;
  }
  
  .intro-image {
    width: 100%;
    height: 300px;
  }
  
  .region-details {
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
@media (max-width: 768px) {
  .significance-points {
    grid-template-columns: 1fr;
  }
  
  .conclusion-section h2 {
    font-size: 1.6rem;
  }
}
</style> 