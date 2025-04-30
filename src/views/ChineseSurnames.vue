<template>
  <div class="chinese-surnames-page">
    <div class="container">
      <h1 class="page-title">{{ $t('chineseSurnames.title') }} | Translating Chinese Names | Noms de Famille Chinois | 中国の姓 | Китайские Фамилии</h1>
      <p class="seo-description">Explore Chinese surnames, their meanings, and origins. Learn how to translate your name into Chinese. Explorez les noms de famille chinois. Entdecken Sie chinesische Nachnamen. Исследуйте китайские фамилии. 中国の姓の意味と起源を探りましょう。</p>
      
      <div class="article-content">
        <section class="intro-section">
          <h2>{{ $t('chineseSurnames.intro.title') }}</h2>
          <p>{{ $t('chineseSurnames.intro.content') }}</p>
          
          <div class="image-container">
            <img src="@/assets/images/name.png" alt="中国姓氏" class="article-image" />
            <div class="image-caption">{{ $t('chineseSurnames.intro.imageCaption') }}</div>
          </div>
        </section>
        
        <section>
          <h2>{{ $t('chineseSurnames.distinction.title') }}</h2>
          <p>{{ $t('chineseSurnames.distinction.content') }}</p>
          <ul>
            <li><strong>{{ $t('chineseSurnames.distinction.surname').split('：')[0] }}</strong>{{ $t('chineseSurnames.distinction.surname').split('：')[1] }}</li>
            <li><strong>{{ $t('chineseSurnames.distinction.clan').split('：')[0] }}</strong>{{ $t('chineseSurnames.distinction.clan').split('：')[1] }}</li>
          </ul>
          <p>{{ $t('chineseSurnames.distinction.merge') }}</p>
        </section>
        
        <section>
          <h2>{{ $t('chineseSurnames.origins.title') }}</h2>
          <p>{{ $t('chineseSurnames.origins.intro') }}</p>
          
          <div class="origin-card">
            <h3>{{ $t('chineseSurnames.origins.totem.title') }}</h3>
            <p>{{ $t('chineseSurnames.origins.totem.content') }}</p>
            <ul>
              <li v-if="$i18n.locale === 'zh'">熊（熊图腾）</li>
              <li v-if="$i18n.locale === 'zh'">马（马图腾）</li>
              <li v-if="$i18n.locale === 'zh'">龙（龙图腾）</li>
              
              <li v-if="$i18n.locale === 'en'">熊 (Xiong) (Bear totem)</li>
              <li v-if="$i18n.locale === 'en'">马 (Ma) (Horse totem)</li>
              <li v-if="$i18n.locale === 'en'">龙 (Long) (Dragon totem)</li>
            </ul>
          </div>
          
          <div class="origin-card">
            <h3>{{ $t('chineseSurnames.origins.ancestor.title') }}</h3>
            <p>{{ $t('chineseSurnames.origins.ancestor.content') }}</p>
            <ul>
              <li v-if="$i18n.locale === 'zh'">姬（黄帝名姬轩辕，其后代以姬为姓）</li>
              <li v-if="$i18n.locale === 'zh'">赵、钱、孙、李等源于祖先名</li>
              
              <li v-if="$i18n.locale === 'en'">姬 (Ji) (Yellow Emperor was named Ji Xuanyuan, his descendants took Ji as their surname)</li>
              <li v-if="$i18n.locale === 'en'">赵 (Zhao)、钱 (Qian)、孙 (Sun)、李 (Li) etc. derived from ancestral names</li>
            </ul>
          </div>
          
          <div class="origin-card">
            <h3>{{ $t('chineseSurnames.origins.territory.title') }}</h3>
            <p>{{ $t('chineseSurnames.origins.territory.content') }}</p>
            <ul>
              <li v-if="$i18n.locale === 'zh'">齐（源于齐国）</li>
              <li v-if="$i18n.locale === 'zh'">鲁（源于鲁国）</li>
              <li v-if="$i18n.locale === 'zh'">卫（源于卫国）</li>
              
              <li v-if="$i18n.locale === 'en'">齐 (Qi) (derived from the State of Qi)</li>
              <li v-if="$i18n.locale === 'en'">鲁 (Lu) (derived from the State of Lu)</li>
              <li v-if="$i18n.locale === 'en'">卫 (Wei) (derived from the State of Wei)</li>
            </ul>
          </div>
          
          <div class="origin-card">
            <h3>{{ $t('chineseSurnames.origins.official.title') }}</h3>
            <p>{{ $t('chineseSurnames.origins.official.content') }}</p>
            <ul>
              <li v-if="$i18n.locale === 'zh'">司马（主管军事的官员）</li>
              <li v-if="$i18n.locale === 'zh'">司徒（主管民事的官员）</li>
              <li v-if="$i18n.locale === 'zh'">司空（主管工程的官员）</li>
              
              <li v-if="$i18n.locale === 'en'">司马 (Sima) (official in charge of military affairs)</li>
              <li v-if="$i18n.locale === 'en'">司徒 (Situ) (official in charge of civilian affairs)</li>
              <li v-if="$i18n.locale === 'en'">司空 (Sikong) (official in charge of engineering works)</li>
            </ul>
          </div>
          
          <div class="origin-card migration-origins">
            <h3>{{ $t('chineseSurnames.origins.migration.title') }}</h3>
            <p>{{ $t('chineseSurnames.origins.migration.content') }}</p>
            <ul>
              <li v-if="$i18n.locale === 'zh'">完颜氏改为王氏</li>
              <li v-if="$i18n.locale === 'zh'">爱新觉罗氏改为金、金啸等</li>
              
              <li v-if="$i18n.locale === 'en'">完颜 (Wanyan) changed to 王 (Wang)</li>
              <li v-if="$i18n.locale === 'en'">爱新觉罗 (Aisin Gioro) changed to 金 (Jin), 金啸 (Jin Xiao), etc.</li>
            </ul>
          </div>
          
          <div class="origin-card">
            <h3>{{ $t('chineseSurnames.origins.minority.title') }}</h3>
            <p>{{ $t('chineseSurnames.origins.minority.content') }}</p>
            <ul>
              <li v-if="$i18n.locale === 'zh'">完颜氏改为王氏</li>
              <li v-if="$i18n.locale === 'zh'">爱新觉罗氏改为金、金啸等</li>
              
              <li v-if="$i18n.locale === 'en'">Wanyan changed to Wang</li>
              <li v-if="$i18n.locale === 'en'">Aisin Gioro changed to Jin, Jin Xiao, etc.</li>
            </ul>
          </div>
        </section>
        
        <section>
          <h2>{{ $t('chineseSurnames.distribution.title') }}</h2>
          <p>{{ $t('chineseSurnames.distribution.intro') }}</p>
          
          <div class="top-surnames">
            <div v-if="$i18n.locale === 'zh'" class="surname-item">
              <div class="surname-rank">1</div>
              <div class="surname-char">李</div>
              <div class="surname-info">约占总人口的7.9%</div>
            </div>
            <div v-if="$i18n.locale === 'zh'" class="surname-item">
              <div class="surname-rank">2</div>
              <div class="surname-char">王</div>
              <div class="surname-info">约占总人口的7.4%</div>
            </div>
            <div v-if="$i18n.locale === 'zh'" class="surname-item">
              <div class="surname-rank">3</div>
              <div class="surname-char">张</div>
              <div class="surname-info">约占总人口的7.1%</div>
            </div>
            <div v-if="$i18n.locale === 'zh'" class="surname-item">
              <div class="surname-rank">4</div>
              <div class="surname-char">刘</div>
              <div class="surname-info">约占总人口的5.4%</div>
            </div>
            <div v-if="$i18n.locale === 'zh'" class="surname-item">
              <div class="surname-rank">5</div>
              <div class="surname-char">陈</div>
              <div class="surname-info">约占总人口的4.5%</div>
            </div>
            
            <div v-if="$i18n.locale === 'en'" class="surname-item">
              <div class="surname-rank">1</div>
              <div class="surname-char">李 (Li)</div>
              <div class="surname-info">About 7.9% of the total population</div>
            </div>
            <div v-if="$i18n.locale === 'en'" class="surname-item">
              <div class="surname-rank">2</div>
              <div class="surname-char">王 (Wang)</div>
              <div class="surname-info">About 7.4% of the total population</div>
            </div>
            <div v-if="$i18n.locale === 'en'" class="surname-item">
              <div class="surname-rank">3</div>
              <div class="surname-char">张 (Zhang)</div>
              <div class="surname-info">About 7.1% of the total population</div>
            </div>
            <div v-if="$i18n.locale === 'en'" class="surname-item">
              <div class="surname-rank">4</div>
              <div class="surname-char">刘 (Liu)</div>
              <div class="surname-info">About 5.4% of the total population</div>
            </div>
            <div v-if="$i18n.locale === 'en'" class="surname-item">
              <div class="surname-rank">5</div>
              <div class="surname-char">陈 (Chen)</div>
              <div class="surname-info">About 4.5% of the total population</div>
            </div>
          </div>
          
          <p>{{ $t('chineseSurnames.distribution.conclusion') }}</p>
        </section>
        
        <section>
          <h2>Hundred Family Surnames and Surname Culture</h2>
          <p v-if="$i18n.locale === 'zh'">《百家姓》是中国古代姓氏文化的重要载体，成书于北宋初年，按照"赵钱孙李，周吴郑王..."的顺序记录了宋代常见的姓氏。这部启蒙读物不仅记录了姓氏，也成为中国传统文化的重要组成部分。</p>
          <p v-if="$i18n.locale === 'en'">The "Hundred Family Surnames" (Bai Jia Xing) is an important carrier of ancient Chinese surname culture. Compiled in the early Northern Song Dynasty, it records common surnames of the Song Dynasty in the order of "Zhao, Qian, Sun, Li, Zhou, Wu, Zheng, Wang...". This primer not only records surnames but has also become an important part of traditional Chinese culture.</p>
          
          <div class="bajia-content">
            <div v-if="$i18n.locale === 'zh'" class="bajia-poem">
              <h3>《百家姓》开篇</h3>
              <p class="poem-text">
                赵钱孙李，周吴郑王。<br>
                冯陈褚卫，蒋沈韩杨。<br>
                朱秦尤许，何吕施张。<br>
                孔曹严华，金魏陶姜。
              </p>
            </div>
            
            <div v-if="$i18n.locale === 'en'" class="bajia-poem">
              <h3>Opening of "Hundred Family Surnames"</h3>
              <p class="poem-text">
                赵 (Zhao), 钱 (Qian), 孙 (Sun), 李 (Li), 周 (Zhou), 吴 (Wu), 郑 (Zheng), 王 (Wang).<br>
                冯 (Feng), 陈 (Chen), 褚 (Chu), 卫 (Wei), 蒋 (Jiang), 沈 (Shen), 韩 (Han), 杨 (Yang).<br>
                朱 (Zhu), 秦 (Qin), 尤 (You), 许 (Xu), 何 (He), 吕 (Lü), 施 (Shi), 张 (Zhang).<br>
                孔 (Kong), 曹 (Cao), 严 (Yan), 华 (Hua), 金 (Jin), 魏 (Wei), 陶 (Tao), 姜 (Jiang).
              </p>
            </div>
            
            <div class="bajia-significance">
              <h3 v-if="$i18n.locale === 'zh'">文化意义</h3>
              <h3 v-if="$i18n.locale === 'en'">Cultural Significance</h3>
              <ul>
                <li v-if="$i18n.locale === 'zh'">社会地位反映：《百家姓》中姓氏排列顺序在某种程度上反映了当时的社会地位和影响力</li>
                <li v-if="$i18n.locale === 'zh'">教育功能：作为儿童启蒙读物，与《三字经》《千字文》并称"三百千"</li>
                <li v-if="$i18n.locale === 'zh'">历史价值：记录了宋代主要姓氏的分布情况，为研究姓氏迁徙提供了重要线索</li>
                <li v-if="$i18n.locale === 'zh'">文化传承：成为中国姓氏文化的象征，代代相传</li>
                
                <li v-if="$i18n.locale === 'en'">Reflection of Social Status: The order of surnames in "Hundred Family Surnames" to some extent reflects the social status and influence at that time</li>
                <li v-if="$i18n.locale === 'en'">Educational Function: As a children's primer, it is collectively known as "Three, Hundred, Thousand" along with "Three Character Classic" and "Thousand Character Text"</li>
                <li v-if="$i18n.locale === 'en'">Historical Value: It records the distribution of major surnames in the Song Dynasty, providing important clues for studying surname migration</li>
                <li v-if="$i18n.locale === 'en'">Cultural Heritage: It has become a symbol of Chinese surname culture, passed down from generation to generation</li>
              </ul>
            </div>
          </div>
        </section>
        
        <section>
          <h2>{{ $t('chineseSurnames.significance.title') }}</h2>
          <p>{{ $t('chineseSurnames.significance.intro') }}</p>
          <ul>
            <li v-if="$i18n.locale === 'zh'">血缘纽带：姓氏是血缘关系的象征，维系着家族的凝聚力</li>
            <li v-if="$i18n.locale === 'zh'">历史见证：不同姓氏的兴衰反映了中国社会的历史变迁</li>
            <li v-if="$i18n.locale === 'zh'">文化传承：姓氏家谱记录了家族历史和文化传统</li>
            <li v-if="$i18n.locale === 'zh'">地域特色：某些姓氏在特定地区高度集中，形成了独特的区域文化</li>
            
            <li v-if="$i18n.locale === 'en'">Blood Bond: Surnames are symbols of blood relationships that maintain family cohesion</li>
            <li v-if="$i18n.locale === 'en'">Historical Witness: The rise and fall of different surnames reflect the historical changes in Chinese society</li>
            <li v-if="$i18n.locale === 'en'">Cultural Heritage: Family genealogies record family history and cultural traditions</li>
            <li v-if="$i18n.locale === 'en'">Regional Characteristics: Some surnames are highly concentrated in specific regions, forming unique regional cultures</li>
          </ul>
        </section>
        
        <section>
          <h2 v-if="$i18n.locale === 'zh'">地域性姓氏特征</h2>
          <h2 v-if="$i18n.locale === 'en'">Regional Surname Characteristics</h2>
          
          <p v-if="$i18n.locale === 'zh'">中国不同地区的姓氏分布存在明显的地域性特征，这些特征是历史迁徙、政治变革和文化传统共同作用的结果。</p>
          <p v-if="$i18n.locale === 'en'">The distribution of surnames in different regions of China shows obvious regional characteristics, which are the result of historical migration, political changes, and cultural traditions.</p>
          
          <div class="region-cards">
            <div class="region-card">
              <h3 v-if="$i18n.locale === 'zh'">北方地区</h3>
              <h3 v-if="$i18n.locale === 'en'">Northern Region</h3>
              <p v-if="$i18n.locale === 'zh'">北方地区（尤其是黄河流域）是中华文明的发源地，姓氏种类相对较少但分布广泛。常见姓氏如王、李、张、刘等在北方人口占比较高。这与北方历史上频繁的战争和人口迁徙有关，导致特定姓氏的大规模扩散。</p>
              <p v-if="$i18n.locale === 'en'">The northern region (especially the Yellow River Basin) is the cradle of Chinese civilization, with relatively fewer types of surnames but widespread distribution. Common surnames such as Wang, Li, Zhang, and Liu have a higher proportion of the population in the north. This is related to frequent wars and population migrations in northern history, leading to large-scale spread of specific surnames.</p>
            </div>
            
            <div class="region-card">
              <h3 v-if="$i18n.locale === 'zh'">南方地区</h3>
              <h3 v-if="$i18n.locale === 'en'">Southern Region</h3>
              <p v-if="$i18n.locale === 'zh'">南方地区（尤其是江南地区）姓氏多样性更高，存在许多在北方罕见的姓氏。如福建的林、黄，广东的梁、何等姓氏在当地分布密集。南方地区较为稳定的历史环境和相对封闭的地理条件促进了姓氏的多样性保存。</p>
              <p v-if="$i18n.locale === 'en'">The southern region (especially the Jiangnan area) has higher surname diversity, with many surnames that are rare in the north. Surnames such as Lin and Huang in Fujian, and Liang and He in Guangdong are densely distributed locally. The relatively stable historical environment and relatively closed geographical conditions in the southern region have promoted the preservation of surname diversity.</p>
            </div>
            
            <div class="region-card">
              <h3 v-if="$i18n.locale === 'zh'">边疆地区</h3>
              <h3 v-if="$i18n.locale === 'en'">Border Regions</h3>
              <p v-if="$i18n.locale === 'zh'">中国边疆地区如新疆、西藏、内蒙古等地，姓氏分布呈现民族特色。随着历史上的民族融合，一些少数民族姓氏汉化成为特定汉姓，如蒙古族的鲍尔吉特氏演变为鲍姓，满族的爱新觉罗氏演变为金、金啸等姓。</p>
              <p v-if="$i18n.locale === 'en'">In China's border regions such as Xinjiang, Tibet, and Inner Mongolia, surname distribution shows ethnic characteristics. With the historical integration of ethnicities, some minority surnames have been sinicized into specific Han surnames, such as the Mongolian Borjigin clan evolving into Bao, and the Manchu Aisin Gioro clan evolving into Jin, Jin Xiao, etc.</p>
            </div>
          </div>
          
          <div class="surname-phenomenon">
            <h3 v-if="$i18n.locale === 'zh'">单姓县：姓氏聚集现象</h3>
            <h3 v-if="$i18n.locale === 'en'">Single-Surname Counties: Surname Clustering Phenomenon</h3>
            <p v-if="$i18n.locale === 'zh'">中国存在一些"单姓县"现象，即某个县域内某一姓氏人口比例极高。著名的例子包括：</p>
            <p v-if="$i18n.locale === 'en'">There are "single-surname counties" in China, where the proportion of a certain surname in a county is extremely high. Famous examples include:</p>
            <ul>
              <li v-if="$i18n.locale === 'zh'">福建南靖县的张氏（客家张氏）</li>
              <li v-if="$i18n.locale === 'zh'">广东梅县的客家黄氏</li>
              <li v-if="$i18n.locale === 'zh'">江西的钟、吴姓聚集区</li>
              <li v-if="$i18n.locale === 'zh'">山东曲阜的孔姓（孔子后裔）</li>
              
              <li v-if="$i18n.locale === 'en'">The 张 (Zhang) clan in Nanjing County, Fujian (Hakka Zhang clan)</li>
              <li v-if="$i18n.locale === 'en'">The Hakka 黄 (Huang) clan in Mei County, Guangdong</li>
              <li v-if="$i18n.locale === 'en'">The 钟 (Zhong) and 吴 (Wu) surname clusters in Jiangxi</li>
              <li v-if="$i18n.locale === 'en'">The 孔 (Kong) surname in Qufu, Shandong (descendants of Confucius)</li>
            </ul>
            <p v-if="$i18n.locale === 'zh'">这种姓氏聚集现象与中国传统的家族观念、宗族聚居的生活方式以及历史上的人口迁徙密切相关。</p>
            <p v-if="$i18n.locale === 'en'">This surname clustering phenomenon is closely related to traditional Chinese family concepts, the lifestyle of clan settlements, and historical population migrations.</p>
          </div>
        </section>
        
        <section>
          <h2>{{ $t('chineseSurnames.modern.title') }}</h2>
          <p>{{ $t('chineseSurnames.modern.intro') }}</p>
          <ul>
            <li v-if="$i18n.locale === 'zh'">家族观念的传承与家谱研究的兴起</li>
            <li v-if="$i18n.locale === 'zh'">寻根问祖活动的普及，增强文化认同感</li>
            <li v-if="$i18n.locale === 'zh'">姓氏作为个人身份的重要组成部分</li>
            <li v-if="$i18n.locale === 'zh'">海外华人通过姓氏维系与祖国的联系</li>
            
            <li v-if="$i18n.locale === 'en'">Inheritance of family concepts and the rise of genealogical research</li>
            <li v-if="$i18n.locale === 'en'">Popularization of root-seeking activities, strengthening cultural identity</li>
            <li v-if="$i18n.locale === 'en'">Surnames as an important component of personal identity</li>
            <li v-if="$i18n.locale === 'en'">Overseas Chinese maintain connections with their homeland through surnames</li>
          </ul>
          <p>{{ $t('chineseSurnames.modern.conclusion') }}</p>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChineseSurnames',
  data() {
    return {
      surnameInput: '',
      lookupResult: null,
      surnamesDatabase: {
        '王': {
          rank: 1,
          origin: {
            zh: '源于姬姓，据传始于周文王时期。"王"字本意为统治者，初为称号，后成为姓氏。',
            en: 'Originated from Ji clan, believed to have started during the time of King Wen of Zhou. The character "Wang" originally meant ruler, initially a title before becoming a surname.'
          },
          famousPeople: {
            zh: '王羲之（东晋书法家），王安石（北宋政治家），王阳明（明代哲学家）',
            en: 'Wang Xizhi (Eastern Jin calligrapher), Wang Anshi (Northern Song politician), Wang Yangming (Ming dynasty philosopher)'
          },
          distribution: {
            zh: '全国各地均有分布，在北方地区如山东、河北、河南等省份占比较高。',
            en: 'Distributed throughout the country, with higher proportions in northern regions such as Shandong, Hebei, and Henan provinces.'
          }
        },
        '李': {
          rank: 2,
          origin: {
            zh: '起源于嬴姓，传说为唐尧后裔陵阳氏所改。"李"字与"杏"有关，相传与种植李子树有关联。',
            en: 'Originated from Ying clan, legend says it was adopted by descendants of Tang Yao from the Lingyang clan. The character "Li" is related to plum trees.'
          },
          famousPeople: {
            zh: '李白（唐代诗人），李世民（唐太宗），李清照（宋代女词人）',
            en: 'Li Bai (Tang dynasty poet), Li Shimin (Emperor Taizong of Tang), Li Qingzhao (Song dynasty female poet)'
          },
          distribution: {
            zh: '全国分布广泛，在四川、陕西、河南等地区尤为集中。',
            en: 'Widely distributed nationwide, especially concentrated in Sichuan, Shaanxi, and Henan regions.'
          }
        },
        '张': {
          rank: 3,
          origin: {
            zh: '源于姬姓，相传起于公输般（鲁班）。"张"本义为拉弓，与战争和手工业有关。',
            en: 'Originated from Ji clan, traditionally attributed to Gongshu Ban (Lu Ban). The character "Zhang" originally meant drawing a bow, related to warfare and craftsmanship.'
          },
          famousPeople: {
            zh: '张衡（东汉科学家），张自忠（抗日名将），张謇（晚清实业家）',
            en: 'Zhang Heng (Eastern Han scientist), Zhang Zizhong (anti-Japanese general), Zhang Jian (late Qing industrialist)'
          },
          distribution: {
            zh: '全国各地均有分布，在河北、山东、河南等华北地区较为集中。',
            en: 'Distributed throughout the country, more concentrated in North China regions such as Hebei, Shandong, and Henan.'
          }
        },
        '刘': {
          rank: 4,
          origin: {
            zh: '出自姬姓，相传为周武王弟弟康叔的后代所用。"刘"与古代农业和兵器相关。',
            en: 'Derived from Ji clan, said to be used by descendants of Kang Shu, brother of King Wu of Zhou. "Liu" is related to ancient agriculture and weapons.'
          },
          famousPeople: {
            zh: '刘邦（汉高祖），刘备（蜀汉先主），刘禹锡（唐代文学家）',
            en: 'Liu Bang (Emperor Gaozu of Han), Liu Bei (First Emperor of Shu Han), Liu Yuxi (Tang dynasty writer)'
          },
          distribution: {
            zh: '全国各地均有分布，在湖北、河南、山东等地区较为集中。',
            en: 'Distributed throughout the country, more concentrated in regions such as Hubei, Henan, and Shandong.'
          }
        },
        '陈': {
          rank: 5,
          origin: {
            zh: '源于妫姓，相传为舜帝后裔。亦有说法认为与古代的陈国有关，因国为姓。',
            en: 'Originated from Gui clan, traditionally believed to be descendants of Emperor Shun. Another theory relates it to the ancient State of Chen, adopting the state name as surname.'
          },
          famousPeople: {
            zh: '陈胜（秦末农民起义领袖），陈寿（三国志作者），陈独秀（新文化运动领袖）',
            en: 'Chen Sheng (leader of the peasant uprising at the end of Qin), Chen Shou (author of Records of the Three Kingdoms), Chen Duxiu (leader of the New Culture Movement)'
          },
          distribution: {
            zh: '全国分布广泛，在福建、广东、浙江等东南沿海地区尤为集中。',
            en: 'Widely distributed nationwide, particularly concentrated in southeastern coastal areas such as Fujian, Guangdong, and Zhejiang.'
          }
        },
        '杨': {
          rank: 6,
          origin: {
            zh: '源于姬姓，相传起源于春秋时期的杨国。"杨"与杨柳树有关，或与古代部落图腾有关。',
            en: 'Originated from Ji clan, traditionally believed to come from the State of Yang during the Spring and Autumn Period. "Yang" is related to willow trees or possibly ancient tribal totems.'
          },
          famousPeople: {
            zh: '杨贵妃（唐代著名美女），杨延昭（北宋名将），杨振宁（诺贝尔物理学奖获得者）',
            en: 'Yang Guifei (famous beauty of Tang dynasty), Yang Yanzhao (famous general of Northern Song), Yang Zhenning (Nobel Prize winner in Physics)'
          },
          distribution: {
            zh: '全国各地均有分布，在四川、陕西、云南等西南地区较为集中。',
            en: 'Distributed throughout the country, more concentrated in southwestern regions such as Sichuan, Shaanxi, and Yunnan.'
          }
        },
        '黄': {
          rank: 7,
          origin: {
            zh: '源于姬姓和姒姓，相传为黄帝后裔。亦有说法认为与古代的封地"黄"有关。',
            en: 'Derived from Ji clan and Si clan, traditionally believed to be descendants of the Yellow Emperor. Another theory relates it to the ancient fief named "Huang".'
          },
          famousPeople: {
            zh: '黄帝（华夏始祖），黄宗羲（明末清初思想家），黄兴（辛亥革命领袖）',
            en: 'Yellow Emperor (legendary ancestor of Chinese civilization), Huang Zongxi (late Ming/early Qing thinker), Huang Xing (leader of the 1911 Revolution)'
          },
          distribution: {
            zh: '全国分布广泛，在福建、广东、江西等南方地区尤为集中。',
            en: 'Widely distributed nationwide, particularly concentrated in southern regions such as Fujian, Guangdong, and Jiangxi.'
          }
        },
        '赵': {
          rank: 8,
          origin: {
            zh: '源于嬴姓，相传为造父之后，周武王时善于养马的功臣，因此得姓。',
            en: 'Originated from Ying clan, traditionally believed to be descendants of Zaofu, a meritorious official skilled in horse breeding during the reign of King Wu of Zhou.'
          },
          famousPeople: {
            zh: '赵匡胤（宋太祖），赵云（三国蜀汉名将），赵孟頫（元代书法家）',
            en: 'Zhao Kuangyin (Emperor Taizu of Song), Zhao Yun (famous general of Shu Han during Three Kingdoms), Zhao Mengfu (Yuan dynasty calligrapher)'
          },
          distribution: {
            zh: '全国各地均有分布，在华北地区如山西、河北等省份较为集中。',
            en: 'Distributed throughout the country, more concentrated in North China regions such as Shanxi and Hebei provinces.'
          }
        },
        '吴': {
          rank: 9,
          origin: {
            zh: '源于姬姓，相传为周成王少子吴王季札后裔。亦有说法认为与古代的吴国有关，因国为姓。',
            en: 'Originated from Ji clan, traditionally believed to be descendants of Ji Zha, Prince of Wu and the youngest son of King Cheng of Zhou. Another theory relates it to the ancient State of Wu.'
          },
          famousPeople: {
            zh: '吴道子（唐代画家），吴敬梓（清代小说家），吴承恩（明代小说家）',
            en: 'Wu Daozi (Tang dynasty painter), Wu Jingzi (Qing dynasty novelist), Wu Cheng\'en (Ming dynasty novelist)'
          },
          distribution: {
            zh: '全国分布广泛，在江苏、浙江等长江下游地区尤为集中。',
            en: 'Widely distributed nationwide, particularly concentrated in the lower Yangtze River regions such as Jiangsu and Zhejiang.'
          }
        },
        '周': {
          rank: 10,
          origin: {
            zh: '源于姬姓，相传为周文王后裔。亦有说法认为与古代的周国有关，因国为姓。',
            en: 'Originated from Ji clan, traditionally believed to be descendants of King Wen of Zhou. Another theory relates it to the ancient Zhou Dynasty, adopting the dynasty name as surname.'
          },
          famousPeople: {
            zh: '周公旦（周朝政治家），周敦颐（宋代哲学家），周恩来（中国开国总理）',
            en: 'Duke of Zhou (Zhou dynasty statesman), Zhou Dunyi (Song dynasty philosopher), Zhou Enlai (first Premier of the People\'s Republic of China)'
          },
          distribution: {
            zh: '全国各地均有分布，在湖南、四川等地区较为集中。',
            en: 'Distributed throughout the country, more concentrated in regions such as Hunan and Sichuan.'
          }
        }
      }
    }
  },
  methods: {
    lookupSurname() {
      if (!this.surnameInput.trim()) {
        this.lookupResult = null;
        return;
      }
      
      const surname = this.surnameInput.trim();
      if (this.surnamesDatabase[surname]) {
        this.lookupResult = {
          found: true,
          ...this.surnamesDatabase[surname]
        };
      } else {
        this.lookupResult = {
          found: false
        };
      }
    }
  }
}
</script>

<style scoped>
.chinese-surnames-page {
  padding-top: 70px;
  padding-bottom: 50px;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
}

.page-title {
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 40px;
  color: #333;
}

.article-content {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  padding: 30px;
}

section {
  margin-bottom: 40px;
}

h2 {
  font-size: 1.8rem;
  color: #333;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid #eee;
}

h3 {
  font-size: 1.4rem;
  color: #444;
  margin-top: 20px;
  margin-bottom: 15px;
}

p {
  line-height: 1.7;
  margin-bottom: 15px;
  color: #555;
  font-size: 1.05rem;
}

ul {
  margin-left: 20px;
  margin-bottom: 20px;
}

li {
  margin-bottom: 10px;
  line-height: 1.6;
  color: #555;
}

.image-container {
  text-align: center;
  margin: 30px 0;
}

.article-image {
  max-width: 100%;
  border-radius: 6px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
}

.image-caption {
  margin-top: 10px;
  color: #666;
  font-style: italic;
}

.origin-card {
  background-color: #f9f9f9;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
}

.origin-card h3 {
  margin-top: 0;
  color: #3a6ea5;
}

.top-surnames {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 30px 0;
}

.surname-item {
  width: 18%;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  border-radius: 8px;
  padding: 15px;
  text-align: center;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 15px;
}

.surname-rank {
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 5px;
}

.surname-char {
  font-size: 2.5rem;
  font-weight: bold;
  color: #333;
  margin: 5px 0;
}

.surname-info {
  font-size: 0.8rem;
  color: #555;
}

@media (max-width: 768px) {
  .page-title {
    font-size: 2rem;
  }
  
  h2 {
    font-size: 1.5rem;
  }
  
  h3 {
    font-size: 1.2rem;
  }
  
  .surname-item {
    width: 48%;
  }
}

@media (max-width: 480px) {
  .surname-item {
    width: 100%;
  }
}

.bajia-content {
  margin: 25px 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.bajia-poem {
  background-color: #f9f6f0;
  border-left: 4px solid #e60012;
  padding: 20px;
  border-radius: 6px;
}

.poem-text {
  font-family: 'SimSun', 'STSong', serif;
  font-size: 1.1rem;
  line-height: 2;
  color: #333;
  text-align: center;
}

.bajia-significance h3 {
  color: #3a6ea5;
  margin-bottom: 15px;
}

@media (max-width: 768px) {
  .bajia-content {
    flex-direction: column;
  }
}

.region-cards {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin: 20px 0;
}

.region-card {
  flex: 1;
  min-width: 250px;
  background-color: #f8f9fa;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.06);
  border-top: 3px solid #4a89dc;
}

.region-card h3 {
  color: #3a6ea5;
  margin-top: 0;
  margin-bottom: 15px;
  font-size: 1.3rem;
}

.surname-phenomenon {
  background-color: #f0f7ff;
  border-radius: 8px;
  padding: 20px;
  margin-top: 25px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.surname-phenomenon h3 {
  color: #3a6ea5;
  margin-top: 0;
}

@media (max-width: 768px) {
  .region-cards {
    flex-direction: column;
  }
  
  .region-card {
    width: 100%;
  }
}

/* 姓氏查询工具样式 */
.surname-lookup {
  margin-top: 40px;
  padding: 30px;
  background-color: #f9f9f9;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.lookup-form {
  display: flex;
  margin: 20px 0;
}

.lookup-form input {
  flex: 1;
  padding: 12px 15px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 6px 0 0 6px;
  outline: none;
}

.lookup-form button {
  padding: 12px 24px;
  background-color: #4a89dc;
  color: white;
  border: none;
  border-radius: 0 6px 6px 0;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.2s;
}

.lookup-form button:hover {
  background-color: #3a6ea5;
}

.lookup-result {
  margin-top: 25px;
  padding: 20px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.lookup-result h3 {
  font-size: 24px;
  color: #333;
  margin-top: 0;
  margin-bottom: 15px;
  border-bottom: 2px solid #4a89dc;
  padding-bottom: 10px;
}

.lookup-result p {
  margin: 12px 0;
}

.not-found {
  color: #666;
  padding: 15px;
  background-color: #f0f0f0;
  border-radius: 6px;
  margin-top: 10px;
}

@media (max-width: 768px) {
  .lookup-form {
    flex-direction: column;
  }
  
  .lookup-form input {
    border-radius: 6px;
    margin-bottom: 10px;
  }
  
  .lookup-form button {
    border-radius: 6px;
    width: 100%;
  }
}
</style> 