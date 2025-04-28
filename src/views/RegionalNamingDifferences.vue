<template>
  <div class="regional-differences-page">
    <div class="container">
      <h1 class="page-title">中国区域命名差异</h1>
      
      <div class="intro-section">
        <div class="intro-text">
          <h2>地域文化与命名传统</h2>
          <p>中国幅员辽阔，各地区因历史沿革、地理环境、民族构成和文化传统的不同，形成了丰富多彩的命名习俗。从北方到南方，从沿海到内陆，从汉族到少数民族，命名传统展现出鲜明的地域特色。</p>
          <p>了解区域命名差异，不仅能帮助我们选择更具文化底蕴的名字，也能加深对中华多元文化的理解与欣赏。</p>
        </div>
        <div class="intro-image">
          <img src="../assets/images/map.png" alt="中国地图" onerror="this.onerror=null; this.src='https://placehold.co/600x400?text=中国地图';" />
        </div>
      </div>

      <!-- 分类导航 -->
      <div class="category-nav">
        <div class="nav-item" @click="scrollToCategory('north')">
          <div class="nav-icon north-icon"></div>
          <span>北方地区</span>
        </div>
        <div class="nav-item" @click="scrollToCategory('south')">
          <div class="nav-icon south-icon"></div>
          <span>南方地区</span>
        </div>
        <div class="nav-item" @click="scrollToCategory('east')">
          <div class="nav-icon east-icon"></div>
          <span>东部沿海</span>
        </div>
        <div class="nav-item" @click="scrollToCategory('west')">
          <div class="nav-icon west-icon"></div>
          <span>西部地区</span>
        </div>
        <div class="nav-item" @click="scrollToCategory('central')">
          <div class="nav-icon central-icon"></div>
          <span>中部地区</span>
        </div>
        <div class="nav-item" @click="scrollToCategory('ethnic')">
          <div class="nav-icon ethnic-icon"></div>
          <span>少数民族</span>
        </div>
      </div>

      <!-- 北方地区 -->
      <section id="north" class="region-section">
        <h2 class="section-title">北方地区命名特色</h2>
        <p class="section-intro">北方地区包括东北三省、华北平原等地区，命名风格多展现豪爽性格与儒家传统。</p>
        
        <div class="region-content">
          <div class="region-feature">
            <h3>特点概述</h3>
            <p>北方人的名字通常以刚强有力、朴实大气为特色，多体现出进取精神和坚韧品格。受儒家文化影响深远，名字常见寓意忠孝节义、仁义礼智信等传统价值观的字词。</p>
          </div>
          
          <div class="region-example">
            <h3>常见取名方式</h3>
            <ul>
              <li><strong>强调刚毅质朴：</strong>如"刚、强、伟、壮、山、石"等字，寓意坚强有力、宏大稳固</li>
              <li><strong>重视传统美德：</strong>如"德、义、仁、礼、信、忠"等字，体现儒家思想影响</li>
              <li><strong>农耕文明映射：</strong>如"田、禾、稷、麦、秋、丰"等字，反映北方农耕文明特色</li>
              <li><strong>直抒豪情壮志：</strong>如"志、远、宏、图、飞、腾"等字，体现北方人的开阔胸襟</li>
            </ul>
          </div>
          
          <div class="region-details">
            <div class="detail-card">
              <h4>东北地区</h4>
              <p>受满族等少数民族影响，东北地区名字有时会呈现独特的文化融合特色。东北人性格直爽，名字常常简单明了，寓意直接，如"大力、刚强、建国、卫东"等。</p>
              <p>当代东北地区也常使用朗朗上口、音律优美的名字，如"明月、冰洁、雪松"等，体现北国特色。</p>
            </div>
            
            <div class="detail-card">
              <h4>华北平原</h4>
              <p>以北京、天津为代表的华北地区，受帝都文化影响，名字常带有文雅含蓄的特质，如"文、雅、博、华、贤、清"等字在名字中较为常见。</p>
              <p>河北、山西等地的名字则多体现儒家思想和忠孝传统，如"忠、孝、诚、信"等字在名字中使用频率较高。</p>
            </div>
          </div>
          
          <div class="naming-case">
            <h3>实例分析</h3>
            <p>以"李刚"这个北方常见名字为例，"刚"字体现了北方人崇尚坚强、刚毅的性格特点，发音响亮，笔画简洁有力，是典型的北方命名风格。</p>
            <p>又如"张志远"，"志"表示志向，"远"表示高远，整个名字表达了远大抱负，饱含进取精神，是北方命名的典型代表。</p>
          </div>
        </div>
      </section>

      <!-- 南方地区 -->
      <section id="south" class="region-section">
        <h2 class="section-title">南方地区命名特色</h2>
        <p class="section-intro">南方地区包括华南、西南等地区，命名风格多展现含蓄委婉、灵秀聪慧的特质。</p>
        
        <div class="region-content">
          <div class="region-feature">
            <h3>特点概述</h3>
            <p>南方人的名字普遍偏向秀气典雅，注重声韵和谐、寓意美好。受江南水乡文化和诗词传统影响，名字常体现出婉约风格，多用柔美、灵动的字词，突显灵秀聪慧的品格。</p>
          </div>
          
          <div class="region-example">
            <h3>常见取名方式</h3>
            <ul>
              <li><strong>自然山水意象：</strong>如"江、河、湖、水、山、峰"等字，体现南方山水秀丽的地理特征</li>
              <li><strong>文学诗词典故：</strong>如"诗、词、雅、韵、清、芳"等字，展现浓厚的文化底蕴</li>
              <li><strong>花草木植物：</strong>如"梅、兰、竹、菊、荷、莲"等字，寓意高洁品格</li>
              <li><strong>优雅温润特质：</strong>如"婉、秀、雅、静、巧、慧"等字，描绘温柔敦厚的品性</li>
            </ul>
          </div>
          
          <div class="region-details">
            <div class="detail-card">
              <h4>江浙沪地区</h4>
              <p>江浙沪一带的名字多显文雅精致特点，注重声调和谐悦耳。名字中常见"雅、慧、婉、娴、翔、峰"等字，既体现才情智慧，又不失温婉气质。</p>
              <p>这一地区历史上文化发达，名字中常有来自古诗词的典故和意象，透露出浓厚的文人气息。</p>
            </div>
            
            <div class="detail-card">
              <h4>岭南地区</h4>
              <p>以广东、广西为代表的岭南地区，名字常含有吉祥如意的寓意，多用"福、寿、康、泰、兴、旺"等字。</p>
              <p>受方言影响，名字谐音考量较为重要，常选择在当地方言中发音优美、寓意吉祥的字词组合。</p>
            </div>

            <div class="detail-card">
              <h4>四川盆地</h4>
              <p>四川地区的名字融合了江南的秀气与西部的豪迈，既有"秀、丽、雅、颖"等温婉字眼，也有"壮、伟、雄、峻"等气势磅礴之字。</p>
              <p>地域文化独特，名字中可见巴蜀文化特色，如与山水、辣椒、竹子相关的意象常被运用。</p>
            </div>
          </div>
          
          <div class="naming-case">
            <h3>实例分析</h3>
            <p>以"陈雅婷"这个江南常见名字为例，"雅"代表文雅高洁，"婷"意为美好优雅，整个名字透露出温婉贤淑的气质，声调平仄结合（阳平+阴平+阳平），读起来悦耳动听，是典型的江南式命名。</p>
            <p>又如"林清涵"，"清"表清澈纯净，"涵"意为包容，寓意内涵丰富且心灵纯净，字形与水有关，体现南方水乡特色。</p>
          </div>
        </div>
      </section>

      <!-- 东部沿海 -->
      <section id="east" class="region-section">
        <h2 class="section-title">东部沿海命名特色</h2>
        <p class="section-intro">东部沿海地区包括山东半岛、江苏、浙江、福建、台湾等地，命名风格多展现开放包容、兼收并蓄的特点。</p>
        
        <div class="region-content">
          <div class="region-feature">
            <h3>特点概述</h3>
            <p>东部沿海地区历来是中外文化交流的前沿，命名风格兼具传统与现代、本土与外来的特点。既重视传统文化内涵，又关注国际化视野，名字常体现出开放、创新、进取的精神。</p>
          </div>
          
          <div class="region-example">
            <h3>常见取名方式</h3>
            <ul>
              <li><strong>借鉴海洋意象：</strong>如"洋、波、涛、海、帆、航"等字，体现沿海地区与海洋的紧密联系</li>
              <li><strong>强调进取精神：</strong>如"进、取、博、新、创、拓"等字，表现开拓创新的时代精神</li>
              <li><strong>突显国际视野：</strong>如"环、球、宇、世、洲、际"等字，寓意开阔的国际视野</li>
              <li><strong>注重实用通达：</strong>如"通、达、实、用、融、合"等字，体现务实精神</li>
            </ul>
          </div>
          
          <div class="region-details">
            <div class="detail-card">
              <h4>山东半岛</h4>
              <p>山东名字多体现儒家传统与海洋文化的结合，既有"仁、义、礼、智、信"等儒家思想传承，也有"洋、海、帆、波"等海洋元素。</p>
              <p>受齐鲁文化影响，名字中常见"文、博、儒、礼"等字，彰显文化底蕴。</p>
            </div>
            
            <div class="detail-card">
              <h4>浙闽台地区</h4>
              <p>浙闽台地区的名字常体现海洋文化与商业智慧的结合，多用"智、巧、商、贸、益、利"等字。</p>
              <p>闽南和台湾地区的名字中常加入"宝、金、玉、富、财、吉"等字，寄托富贵吉祥的美好愿望，体现商业社会特征。</p>
            </div>
          </div>
          
          <div class="naming-case">
            <h3>实例分析</h3>
            <p>以"王海拓"这个典型的东部沿海地区名字为例，"海"象征海洋胸怀，"拓"意为开拓进取，整个名字寓意胸怀广阔、开拓创新，体现了沿海地区开放进取的精神风貌。</p>
            <p>又如女孩名字"林欣怡"，"欣"表喜悦，"怡"意为和悦，整体音律和谐、寓意美好，既保留传统淑女气质，又不失现代活力，是沿海城市中常见的命名风格。</p>
          </div>
        </div>
      </section>

      <!-- 西部地区 -->
      <section id="west" class="region-section">
        <h2 class="section-title">西部地区命名特色</h2>
        <p class="section-intro">西部地区包括西北、西南高原等地区，命名风格多展现豪迈奔放、高远博大的特点。</p>
        
        <div class="region-content">
          <div class="region-feature">
            <h3>特点概述</h3>
            <p>西部地区山川壮阔，民族多元，名字常体现出粗犷豪迈、高远广博的气质。受地域文化影响，西部人的名字常与高山、大漠、草原、雄鹰等意象相关，寄托高远志向和奔放个性。</p>
          </div>
          
          <div class="region-example">
            <h3>常见取名方式</h3>
            <ul>
              <li><strong>大漠戈壁意象：</strong>如"沙、漠、戈、川、雄、鹰"等字，体现西北荒漠地区特色</li>
              <li><strong>高山雪域元素：</strong>如"山、川、雪、峰、岭、巅"等字，展现青藏高原壮美景象</li>
              <li><strong>草原游牧文化：</strong>如"牧、马、云、风、天、原"等字，反映游牧民族生活</li>
              <li><strong>丝路文明交融：</strong>如"丝、路、驼、商、通、远"等字，寓意古代丝绸之路文化交流</li>
            </ul>
          </div>
          
          <div class="region-details">
            <div class="detail-card">
              <h4>西北地区</h4>
              <p>西北地区的名字常具豪迈气概，多用"雄、强、壮、勇、铁、山"等字，表现出刚毅坚强的性格和不屈不挠的精神。</p>
              <p>受丝绸之路多元文化影响，名字中也常见体现多民族融合特色的元素，如维吾尔族、哈萨克族等少数民族文化元素的融入。</p>
            </div>
            
            <div class="detail-card">
              <h4>西南高原</h4>
              <p>西南高原地区的名字常含有雪山、江河、草原等高原特色元素，如"雪、江、湖、草、林、溪"等字。</p>
              <p>受藏族、彝族等少数民族文化影响，名字常带有神秘色彩和自然崇拜的特质，如与日月星辰、花草树木相关的字词较为常见。</p>
            </div>
          </div>
          
          <div class="naming-case">
            <h3>实例分析</h3>
            <p>以"马雄飞"这个西部常见名字为例，"雄"象征雄壮有力，"飞"意为飞翔腾越，整个名字体现了西部地区崇尚自由、豪迈奔放的性格特点，音调响亮有力。</p>
            <p>又如"李高远"，"高"与"远"都表示高远博大，寓意志向高远，胸怀宽广，体现了西部人的开阔胸襟和远大抱负。</p>
          </div>
        </div>
      </section>

      <!-- 中部地区 -->
      <section id="central" class="region-section">
        <h2 class="section-title">中部地区命名特色</h2>
        <p class="section-intro">中部地区包括河南、湖北、湖南、江西、安徽等省份，命名风格多展现中和稳健、博采多长的特点。</p>
        
        <div class="region-content">
          <div class="region-feature">
            <h3>特点概述</h3>
            <p>中部地区位居华夏腹地，历史文化底蕴深厚，名字常体现出传统文化根基与多元文化交融的特点。既有北方的刚毅沉稳，又有南方的灵秀婉约，兼具东方的开放创新与西部的博大胸怀。</p>
          </div>
          
          <div class="region-example">
            <h3>常见取名方式</h3>
            <ul>
              <li><strong>中原文化传承：</strong>如"中、华、夏、嵩、洛、伊"等字，体现中原历史文化</li>
              <li><strong>楚风汉韵结合：</strong>如"楚、汉、荆、襄、湘、鄂"等字，展现楚汉文化特色</li>
              <li><strong>江河湖泊意象：</strong>如"江、河、湖、汉、洞、庐"等字，反映水系发达的地理特征</li>
              <li><strong>中和平稳取向：</strong>如"和、平、稳、安、康、宁"等字，寓意中和平安的生活理想</li>
            </ul>
          </div>
          
          <div class="region-details">
            <div class="detail-card">
              <h4>中原地区</h4>
              <p>以河南为代表的中原地区，名字常体现厚重的历史感与文化传承。多用"中、华、夏、文、典、礼"等字，彰显华夏文明摇篮的身份认同。</p>
              <p>名字取向多偏向稳重实用，讲究内涵，注重传统美德，如"德、仁、义、礼、诚、信"等字在名字中较为常见。</p>
            </div>
            
            <div class="detail-card">
              <h4>江汉平原</h4>
              <p>湖北、湖南一带的名字常带有楚文化特色，灵动而不失厚重，如"楚、荆、湘、沅、屈、宋"等楚地人文地理元素较为常见。</p>
              <p>受长江、洞庭湖水系影响，名字中也常见"江、湖、洞、沅、潇、浏"等与水相关的字词。</p>
            </div>

            <div class="detail-card">
              <h4>皖赣地区</h4>
              <p>安徽、江西地区的名字融合了北方与南方的特点，既有徽文化、赣文化的独特元素，也体现出与周边地区的文化交融。</p>
              <p>徽州文化区的名字常含"徽、黟、歙、休、祁、婺"等地域特色，而赣地名字则多见"赣、洪、鄱、庐、潭、瑞"等元素。</p>
            </div>
          </div>
          
          <div class="naming-case">
            <h3>实例分析</h3>
            <p>以"张华中"这个中原常见名字为例，"华"象征中华文明，"中"意为中和或中原，整个名字体现了对中华文化的认同和中原人的身份认同。</p>
            <p>又如"吴湘江"，融合了湖南的地理特征，"湘"指湘江，"江"表示大江大河，体现了楚地水乡的人文特色，具有鲜明的地域标识。</p>
          </div>
        </div>
      </section>

      <!-- 少数民族 -->
      <section id="ethnic" class="region-section">
        <h2 class="section-title">少数民族命名特色</h2>
        <p class="section-intro">中国有56个民族，除汉族外的55个少数民族各具特色的命名传统，丰富了中华命名文化的多样性。</p>
        
        <div class="region-content">
          <div class="region-feature">
            <h3>特点概述</h3>
            <p>少数民族的命名传统深受各自民族文化、宗教信仰、生活方式和历史传承的影响，形成了与汉族不同的命名体系和特色。这些名字通常反映了对自然的崇拜、对祖先的敬仰、对美好生活的向往以及独特的宗教文化。</p>
          </div>
          
          <div class="region-example">
            <h3>主要少数民族命名特点</h3>
            <ul>
              <li><strong>蒙古族：</strong>名字多与草原、牧业、骏马、自然现象有关，如"苏荣、巴图、乌兰、特木尔"等</li>
              <li><strong>藏族：</strong>名字大多与佛教有关，如"丹增、达瓦、洛桑、次仁"等，意为佛法增长、月亮、智慧、持明者</li>
              <li><strong>维吾尔族：</strong>深受伊斯兰文化影响，男孩常用"艾买提、阿布都拉、穆罕默德"等名，女孩则用"古丽、艾尼娃、米娜"等</li>
              <li><strong>彝族：</strong>名字常表达对美好生活的向往，如"阿依、阿果、阿黑"等，或与自然事物相关</li>
              <li><strong>壮族：</strong>多用有吉祥象征的词语，如"石、秀、凤、花、金、银"等</li>
              <li><strong>朝鲜族：</strong>通常由姓氏和双音节名字组成，注重音韵和谐，如"金正恩、朴槿惠、崔琦濬"等</li>
            </ul>
          </div>
          
          <div class="region-details">
            <div class="detail-card">
              <h4>命名原则与习俗</h4>
              <p><strong>宗教影响：</strong>如藏族受藏传佛教影响，维吾尔族受伊斯兰教影响，彝族受萨满教影响等，名字中常包含宗教元素。</p>
              <p><strong>图腾崇拜：</strong>一些少数民族保留了对图腾的崇拜，如蒙古族的狼图腾、鹰图腾，傣族的孔雀图腾等，这些图腾元素也常见于命名中。</p>
              <p><strong>自然崇拜：</strong>对山川、江河、日月星辰等自然物象的崇拜，常体现在名字中，如"太阳、月亮、星星、山峰"等。</p>
              <p><strong>名字禁忌：</strong>各民族有各自的禁忌，如一些民族禁用已故亲人的名字，一些民族避免使用某些自然现象或动物的名称。</p>
            </div>
            
            <div class="detail-card">
              <h4>命名结构特点</h4>
              <p><strong>复姓现象：</strong>一些少数民族有复姓传统，如藏族的"贡布、尼玛"等，满族的"爱新觉罗、叶赫那拉"等。</p>
              <p><strong>无姓氏传统：</strong>一些少数民族历史上没有姓氏传统，如早期藏族，只有名字没有姓氏，或以父名作为姓氏。</p>
              <p><strong>辈分命名：</strong>一些少数民族有辈分命名传统，如苗族、瑶族等，同一辈分的人名字中往往有共同的字或音节。</p>
              <p><strong>音节特点：</strong>不同民族的名字音节结构有差异，如壮族、侗族多为单音节名，而藏族、蒙古族则多为多音节名字。</p>
            </div>
          </div>
          
          <div class="naming-case">
            <h3>实例分析</h3>
            <p><strong>藏族名字：</strong>"丹增曲培"是一个典型的藏族名字，"丹增"意为佛法增长，"曲培"意为弘扬，整个名字体现了藏传佛教文化的深远影响。</p>
            <p><strong>蒙古族名字：</strong>"乌兰其其格"是一个典型的蒙古族女孩名字，意为"红色的花朵"，体现了蒙古族对自然美的赞美和对美好生活的向往。</p>
            <p><strong>维吾尔族名字：</strong>"阿不都热西提·阿不力孜"，前半部分"阿不都热西提"是个人名，意为"仁慈者的仆人"，后半部分"阿不力孜"是父名，表示"某某的儿子"，体现了伊斯兰文化的影响。</p>
          </div>
        </div>
      </section>

      <div class="conclusion-section">
        <h2>区域命名差异的当代意义</h2>
        <p>中国各地区命名传统的差异，不仅反映了地域文化的多样性，也体现了中华民族在长期历史发展中形成的丰富文化遗产。了解这些区域差异，有助于我们在为孩子命名时，既能传承文化精髓，又能赋予时代特色。</p>
        
        <div class="significance-points">
          <div class="significance-item">
            <h3>文化传承意义</h3>
            <p>区域命名传统是地方文化的重要组成部分，通过名字可以传递地域文化的核心价值观和审美情趣，是非物质文化遗产的重要载体。</p>
          </div>
          
          <div class="significance-item">
            <h3>身份认同意义</h3>
            <p>区域特色的名字能够强化人们的地域文化认同和归属感，在全球化背景下保持文化的多样性和独特性。</p>
          </div>
          
          <div class="significance-item">
            <h3>现代命名启示</h3>
            <p>在当代社会，了解区域命名差异，有助于在保持传统文化根基的同时，创造出既有文化深度又适应现代社会的名字。</p>
          </div>
        </div>
        
        <p class="final-note">无论选择哪种区域风格的命名方式，最重要的是赋予名字美好的寓意和期望，希望这些区域命名文化的智慧能够为您的命名之旅提供丰富的灵感。</p>
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
    // 页面加载后执行的代码
    document.title = '中国区域命名差异 - 起名网';
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