<template>
  <div class="historical-names-page">
    <div class="container">
      <h1 class="page-title">中国历史人物名字</h1>
      
      <div class="intro-section">
        <div class="intro-text">
          <h2>名留青史的智慧与文化</h2>
          <p>中国历史悠久，名人辈出。历代名人的称谓不仅记录了个体的生平事迹，更折射出特定历史时期的文化特色与社会风貌。古人的名、字、号等多重称谓系统，承载着丰富的文化内涵与历史智慧。</p>
          <p>通过解读历史人物的名字，我们能够窥见古代命名文化的深厚积淀，了解不同时代的审美取向与价值观念。</p>
        </div>
        <div class="intro-image">
          <img src="../assets/images/huangdi.png" alt="中国历史人物" />
        </div>
      </div>

      <!-- 分类导航 -->
      <div class="category-nav">
        <div class="nav-item" @click="scrollToCategory('emperors')">
          <div class="nav-icon emperor-icon"></div>
          <span>帝王将相</span>
        </div>
        <div class="nav-item" @click="scrollToCategory('scholars')">
          <div class="nav-icon scholar-icon"></div>
          <span>文人雅士</span>
        </div>
        <div class="nav-item" @click="scrollToCategory('generals')">
          <div class="nav-icon general-icon"></div>
          <span>英雄豪杰</span>
        </div>
        <div class="nav-item" @click="scrollToCategory('women')">
          <div class="nav-icon woman-icon"></div>
          <span>巾帼风华</span>
        </div>
        <div class="nav-item" @click="scrollToCategory('fiction')">
          <div class="nav-icon fiction-icon"></div>
          <span>小说传奇</span>
        </div>
        <div class="nav-item" @click="scrollToCategory('myth')">
          <div class="nav-icon myth-icon"></div>
          <span>神话传说</span>
        </div>
      </div>

      <!-- 帝王将相 -->
      <section id="emperors" class="history-section">
        <h2 class="section-title">帝王将相</h2>
        <p class="section-intro">中国历代帝王与重臣的名字往往体现了权威与治国理念，其命名讲究尊贵、威严且寓意深远。</p>
        
        <div class="historical-figures">
          <div class="figure-card">
            <div class="figure-image"><img src="../assets/images/ming.png" alt="秦始皇" /></div>
            <div class="figure-content">
              <h3>嬴政（秦始皇）</h3>
              <p><strong>生平：</strong>公元前259年-公元前210年，中国历史上著名的政治家、战略家、改革家，完成统一中国的伟业。</p>
              <p><strong>名字解析：</strong>"嬴"为姓氏，为嬴姓赵氏；"政"取自"万民为正"之意，表示治理天下、匡正万民，寓意成为贤明君主。</p>
              <p><strong>称号演变：</strong>登基后称"秦王政"，统一后自号"始皇帝"，表示开创皇帝制度之始。</p>
            </div>
          </div>
          
          <div class="figure-card">
            <div class="figure-image"><img src="../assets/images/ming.png" alt="汉武帝" /></div>
            <div class="figure-content">
              <h3>刘彻（汉武帝）</h3>
              <p><strong>生平：</strong>公元前156年-公元前87年，汉朝第七位皇帝，在位时期是西汉王朝最为强盛的时期。</p>
              <p><strong>名字解析：</strong>"刘"为姓氏，汉朝皇室姓氏；"彻"意为通达、明白，表期望完全理解治国之道、明察世事。</p>
              <p><strong>称号演变：</strong>谥号"孝武皇帝"，庙号"世宗"，因其好武而得称"武帝"。</p>
            </div>
          </div>
          
          <div class="figure-card">
            <div class="figure-image"><img src="../assets/images/ming.png" alt="唐太宗" /></div>
            <div class="figure-content">
              <h3>李世民（唐太宗）</h3>
              <p><strong>生平：</strong>公元598年-公元649年，唐朝第二位皇帝，开创"贞观之治"的盛世局面。</p>
              <p><strong>名字解析：</strong>"李"为姓氏；"世民"意为"济世安民"，表示安抚百姓、造福万世的抱负。</p>
              <p><strong>称号演变：</strong>在位时年号为"贞观"，谥号"文皇帝"，庙号"太宗"。</p>
            </div>
          </div>
          
          <div class="figure-card">
            <div class="figure-image"><img src="../assets/images/ming.png" alt="康熙皇帝" /></div>
            <div class="figure-content">
              <h3>爱新觉罗·玄烨（康熙皇帝）</h3>
              <p><strong>生平：</strong>1654年-1722年，清朝第四位皇帝，在位六十一年，开创"康乾盛世"的第一个阶段。</p>
              <p><strong>名字解析：</strong>"爱新觉罗"为姓氏；"玄"指深奥高远，"烨"指光明盛大，合起来表示博大精深、光明盛大。</p>
              <p><strong>称号演变：</strong>年号"康熙"，谥号"圣祖仁皇帝"，庙号"圣祖"。</p>
            </div>
          </div>
        </div>
        
        <div class="view-more-btn" @click="showMoreEmperors = !showMoreEmperors">
          {{ showMoreEmperors ? '收起' : '查看更多' }}
          <i class="arrow" :class="{ 'arrow-down': !showMoreEmperors, 'arrow-up': showMoreEmperors }"></i>
        </div>
        
        <div class="historical-figures" v-if="showMoreEmperors">
          <div class="figure-card">
            <div class="figure-image"><img src="../assets/images/ming.png" alt="周文王" /></div>
            <div class="figure-content">
              <h3>姬昌（周文王）</h3>
              <p><strong>生平：</strong>约公元前1152年-公元前1056年，周朝开国君主，《周易》的作者之一。</p>
              <p><strong>名字解析：</strong>"姬"为姓氏；"昌"意为兴盛、旺盛，表示使国家繁荣昌盛的志向。</p>
              <p><strong>称号演变：</strong>谥号"文王"，因其文德昭著而得名，死后被尊为周朝始祖。</p>
            </div>
          </div>
          
          <div class="figure-card">
            <div class="figure-image"><img src="../assets/images/wming.png" alt="曹操" /></div>
            <div class="figure-content">
              <h3>曹操（魏武帝）</h3>
              <p><strong>生平：</strong>155年-220年，东汉末年杰出的政治家、军事家，三国时期曹魏政权的奠基人。</p>
              <p><strong>名字解析：</strong>"曹"为姓氏；"操"意为执掌、把握，表示把握时局、掌控大势。</p>
              <p><strong>称号演变：</strong>曹操生前为魏王，死后其子曹丕追尊其为魏武皇帝。</p>
            </div>
          </div>
          
          <div class="figure-card">
            <div class="figure-image"><img src="../assets/images/ming.png" alt="诸葛亮" /></div>
            <div class="figure-content">
              <h3>诸葛亮（孔明）</h3>
              <p><strong>生平：</strong>181年-234年，三国时期蜀汉杰出的政治家、军事家，被誉为"智圣"。</p>
              <p><strong>名字解析：</strong>"诸葛"为复姓；"亮"意为明亮、清明，表示智慧与洞察力；字"孔明"，意为智慧通达、见解明晰。</p>
              <p><strong>称号演变：</strong>尊称"武乡侯"、"忠武侯"，后人尊称为"诸葛武侯"或"卧龙先生"。</p>
            </div>
          </div>
          
          <div class="figure-card">
            <div class="figure-image"><img src="../assets/images/ming.png" alt="曾国藩" /></div>
            <div class="figure-content">
              <h3>曾国藩（涤生）</h3>
              <p><strong>生平：</strong>1811年-1872年，晚清重臣，湘军创立者，中兴名臣。</p>
              <p><strong>名字解析：</strong>"曾"为姓氏；"国藩"中"国"表国家，"藩"意为屏障，表期望成为国家的屏障；字"涤生"，意为洗涤身心而获新生。</p>
              <p><strong>称号演变：</strong>官至两江总督，封一等毅勇侯，谥号"文正"。</p>
            </div>
          </div>
        </div>
      </section>

      <!-- 文人雅士 -->
      <section id="scholars" class="history-section">
        <h2 class="section-title">文人雅士</h2>
        <p class="section-intro">中国古代文人墨客的名字往往体现了文学修养与审美情趣，讲究意境优美、内涵丰富。</p>
        
        <div class="historical-figures">
          <div class="figure-card">
            <div class="figure-image"><img src="../assets/images/kongzi.png" alt="孔子" /></div>
            <div class="figure-content">
              <h3>孔丘（孔子）</h3>
              <p><strong>生平：</strong>公元前551年-公元前479年，春秋时期著名思想家、教育家，儒家学派创始人。</p>
              <p><strong>名字解析：</strong>"孔"为姓氏；"丘"取自其出生地尼丘，亦有"高"、"聚集"之意；"子"为尊称，意为有道德、有学问的人。</p>
              <p><strong>称号演变：</strong>后世尊称为"至圣先师"、"万世师表"。</p>
            </div>
          </div>
          
          <div class="figure-card">
            <div class="figure-image"><img src="../assets/images/ming.png" alt="李白" /></div>
            <div class="figure-content">
              <h3>李白（太白）</h3>
              <p><strong>生平：</strong>701年-762年，唐代伟大的浪漫主义诗人，被称为"诗仙"。</p>
              <p><strong>名字解析：</strong>"李"为姓氏；"白"意为纯洁、明亮，也与其出生时房内异常明亮有关；字"太白"，取自太白金星，象征才华横溢、光芒万丈。</p>
              <p><strong>称号演变：</strong>世称"诗仙"，与杜甫"诗圣"齐名，合称"大李杜"。</p>
            </div>
          </div>
          
          <div class="figure-card">
            <div class="figure-image"><img src="../assets/images/ming.png" alt="杜甫" /></div>
            <div class="figure-content">
              <h3>杜甫（子美）</h3>
              <p><strong>生平：</strong>712年-770年，唐代伟大的现实主义诗人，被称为"诗圣"。</p>
              <p><strong>名字解析：</strong>"杜"为姓氏；"甫"意为有德行的人，也取自《诗经》中"既明且哲，以保其身"之意；字"子美"，表示德行之美。</p>
              <p><strong>称号演变：</strong>世称"诗圣"，诗作被誉为"诗史"，与李白并称"李杜"。</p>
            </div>
          </div>
          
          <div class="figure-card">
            <div class="figure-image"><img src="../assets/images/ming.png" alt="苏轼" /></div>
            <div class="figure-content">
              <h3>苏轼（子瞻）</h3>
              <p><strong>生平：</strong>1037年-1101年，北宋文学家、书画家、美食家，"唐宋八大家"之一。</p>
              <p><strong>名字解析：</strong>"苏"为姓氏；"轼"指古代车前扶手，取自《孟子》"七十而从心所欲不逾矩"之意；字"子瞻"，意为远见卓识、高瞻远瞩。</p>
              <p><strong>称号演变：</strong>世称"苏仙"，又因任黄州太守时自号"东坡居士"，世称"苏东坡"。</p>
            </div>
          </div>
        </div>
        
        <div class="view-more-btn" @click="showMoreScholars = !showMoreScholars">
          {{ showMoreScholars ? '收起' : '查看更多' }}
          <i class="arrow" :class="{ 'arrow-down': !showMoreScholars, 'arrow-up': showMoreScholars }"></i>
        </div>
        
        <div class="historical-figures" v-if="showMoreScholars">
          <div class="figure-card">
            <div class="figure-image"><img src="../assets/images/ming.png" alt="老子" /></div>
            <div class="figure-content">
              <h3>李耳（老子）</h3>
              <p><strong>生平：</strong>约公元前571年-?，春秋时期思想家、哲学家，道家学派创始人。</p>
              <p><strong>名字解析：</strong>"李"为姓氏；"耳"可能与其长耳有关；"老"为尊称，"子"指有德有才的人，"老子"合起来是对年长有道者的敬称。</p>
              <p><strong>称号演变：</strong>世称"太上老君"，道教尊为教祖。</p>
            </div>
          </div>
          
          <div class="figure-card">
            <div class="figure-image"><img src="../assets/images/ming.png" alt="屈原" /></div>
            <div class="figure-content">
              <h3>屈原（平）</h3>
              <p><strong>生平：</strong>约公元前340年-公元前278年，战国时期楚国诗人、政治家，中国最早的爱国诗人。</p>
              <p><strong>名字解析：</strong>"屈"为姓氏；"原"意为泉源、本源，表示思想源头；字"平"，意为公平、平直，寓意为人正直。</p>
              <p><strong>称号演变：</strong>被誉为"楚辞之祖"，后世纪念其忠贞爱国精神而有端午节。</p>
            </div>
          </div>
          
          <div class="figure-card">
            <div class="figure-image"><img src="../assets/images/ming.png" alt="李清照" /></div>
            <div class="figure-content">
              <h3>李清照（易安）</h3>
              <p><strong>生平：</strong>1084年-约1155年，宋代女词人，有"千古第一才女"之称。</p>
              <p><strong>名字解析：</strong>"李"为姓氏；"清照"意为清白照人，表现高洁品格；自号"易安居士"，"易安"取自丈夫赵明诚的号"彦明"与自己闺名"宜男"的谐音。</p>
              <p><strong>称号演变：</strong>被誉为"婉约词"代表，亦称"易安居士"、"易安词人"。</p>
            </div>
          </div>
          
          <div class="figure-card">
            <div class="figure-image"><img src="../assets/images/ming.png" alt="鲁迅" /></div>
            <div class="figure-content">
              <h3>周树人（鲁迅）</h3>
              <p><strong>生平：</strong>1881年-1936年，现代文学家、思想家、革命家，新文化运动的重要参与者。</p>
              <p><strong>名字解析：</strong>"周"为姓氏；原名"树人"，取自"修身、齐家、治国、平天下，自天子以至于庶人，壹是皆以修身为本"的理念；笔名"鲁迅"，"鲁"取自故乡绍兴古称会稽，为春秋鲁国名，"迅"表迅速振作。</p>
              <p><strong>称号演变：</strong>被誉为"民族魂"，现代文学的奠基人。</p>
            </div>
          </div>
        </div>
      </section>

      <!-- 英雄豪杰 -->
      <section id="generals" class="history-section">
        <h2 class="section-title">英雄豪杰</h2>
        <p class="section-intro">中国历史上的英雄人物名字多彰显气节与豪迈，蕴含着威武不屈、舍生取义的精神。</p>
        
        <div class="historical-figures">
          <div class="figure-card">
            <div class="figure-image"><img src="../assets/images/ming.png" alt="岳飞" /></div>
            <div class="figure-content">
              <h3>岳飞（鹏举）</h3>
              <p><strong>生平：</strong>1103年-1142年，南宋抗金名将，中国历史上著名的民族英雄。</p>
              <p><strong>名字解析：</strong>"岳"为姓氏；"飞"意为飞翔，相传其出生时有大鸟飞过房顶，故取名"飞"；字"鹏举"，取自《庄子·逍遥游》中"鹏之徙于南冥也，水击三千里，抟扶摇而上者九万里"，寓意远大志向。</p>
              <p><strong>称号演变：</strong>后人尊称"武穆"、"忠武王"，与关羽、张飞等被称为"武圣"。</p>
            </div>
          </div>
          
          <div class="figure-card">
            <div class="figure-image"><img src="../assets/images/ming.png" alt="文天祥" /></div>
            <div class="figure-content">
              <h3>文天祥（宋瑞）</h3>
              <p><strong>生平：</strong>1236年-1283年，南宋末年政治家、军事家、爱国诗人，民族英雄。</p>
              <p><strong>名字解析：</strong>"文"为姓氏；"天祥"意为上天赐予的祥瑞，表达对其一生的美好期许；字"宋瑞"，意为宋朝的瑞祥，表明忠于宋朝的志向。</p>
              <p><strong>称号演变：</strong>世称"文文山"（因谥号"文山"），与岳飞并称宋代二忠。</p>
            </div>
          </div>
          
          <div class="figure-card">
            <div class="figure-image"><img src="../assets/images/ming.png" alt="张三丰" /></div>
            <div class="figure-content">
              <h3>张三丰（君宝）</h3>
              <p><strong>生平：</strong>约1247年-?，元末明初著名道士，武当派创始人。</p>
              <p><strong>名字解析：</strong>"张"为姓氏；"三丰"中"三"为多，"丰"为丰富、丰满，表示丰功伟业，亦有道教"三元三宝"之意；名"君宝"，意为珍贵、宝贵的君子。</p>
              <p><strong>称号演变：</strong>世称"张真人"，明成祖封其为"通微显化真人"，世人尊称"张道陵"。</p>
            </div>
          </div>
          
          <div class="figure-card">
            <div class="figure-image"><img src="../assets/images/ming.png" alt="刘胡兰" /></div>
            <div class="figure-content">
              <h3>刘胡兰</h3>
              <p><strong>生平：</strong>1932年-1947年，中国共产党地下工作者，革命烈士。</p>
              <p><strong>名字解析：</strong>"刘"为姓氏；"胡兰"中"胡"指胡族，"兰"为兰花，象征高洁品格，整体为花名，符合农村女孩常用花名的习惯。</p>
              <p><strong>称号演变：</strong>毛泽东称赞其"生的伟大，死的光荣"，被誉为"不屈的红梅"。</p>
            </div>
          </div>
        </div>
        
        <div class="view-more-btn" @click="showMoreGenerals = !showMoreGenerals">
          {{ showMoreGenerals ? '收起' : '查看更多' }}
          <i class="arrow" :class="{ 'arrow-down': !showMoreGenerals, 'arrow-up': showMoreGenerals }"></i>
        </div>
        
        <div class="historical-figures" v-if="showMoreGenerals">
          <div class="figure-card">
            <div class="figure-image"><img src="../assets/images/ming.png" alt="关羽" /></div>
            <div class="figure-content">
              <h3>关羽（云长）</h3>
              <p><strong>生平：</strong>约160年-220年，三国时期蜀汉名将，刘备的重要谋臣之一。</p>
              <p><strong>名字解析：</strong>"关"为姓氏；"羽"意为翅膀，象征飞翔、迅捷；字"云长"，意为高耸入云、气势不凡。</p>
              <p><strong>称号演变：</strong>被尊为"武圣"，历代封号达数十个，如"忠义神武灵佑仁勇威显关圣大帝"等。</p>
            </div>
          </div>
          
          <div class="figure-card">
            <div class="figure-image"><img src="../assets/images/ming.png" alt="孔明" /></div>
            <div class="figure-content">
              <h3>诸葛亮（孔明）</h3>
              <p><strong>生平：</strong>181年-234年，三国时期蜀汉丞相，杰出的政治家、军事家、发明家。</p>
              <p><strong>名字解析：</strong>"诸葛"为复姓；"亮"意为明亮、聪明，象征智慧；字"孔明"，意为智慧通达，广见博闻。</p>
              <p><strong>称号演变：</strong>尊称"卧龙"、"武乡侯"、"忠武侯"，后世称"诸葛武侯"、"孔明先生"。</p>
            </div>
          </div>
          
          <div class="figure-card">
            <div class="figure-image"><img src="../assets/images/ming.png" alt="杨惠妃" /></div>
            <div class="figure-content">
              <h3>杨玉环（太真）</h3>
              <p><strong>生平：</strong>719年-756年，唐朝贵妃，唐玄宗李隆基宠妃，中国古代四大美女之一。</p>
              <p><strong>名字解析：</strong>"杨"为姓氏；"玉环"中"玉"象征美好、珍贵，"环"指环形玉器，合起来象征完美无瑕的美玉；唐玄宗赐号"太真"，意为至真至美。</p>
              <p><strong>称号演变：</strong>封为"贵妃"，世称"杨贵妃"、"杨妃"。</p>
            </div>
          </div>
          
          <div class="figure-card">
            <div class="figure-image"><img src="../assets/images/ming.png" alt="孙悟空" /></div>
            <div class="figure-content">
              <h3>孙悟空（行者）</h3>
              <p><strong>生平：</strong>《西游记》中的神话人物，原为仙石孕育而生的猴王，后拜菩提祖师为师学艺。</p>
              <p><strong>名字解析：</strong>"孙"为姓氏，象征猴子的辈分（猴为申，与"申"谐音）；菩提祖师取法名"悟空"，意为顿悟空性、参透佛理；取号"行者"，意为修行之人。</p>
              <p><strong>称号演变：</strong>自称"齐天大圣"，佛教中尊称为"斗战胜佛"。</p>
            </div>
          </div>
        </div>
      </section>

      <!-- 巾帼风华 -->
      <section id="women" class="history-section">
        <h2 class="section-title">巾帼风华</h2>
        <p class="section-intro">中国历史上杰出女性的名字多带有温婉优雅的特质，同时蕴含着智慧与坚韧的品格。</p>
        
        <div class="historical-figures">
          <div class="figure-card">
            <div class="figure-image"><img src="../assets/images/ming.png" alt="武则天" /></div>
            <div class="figure-content">
              <h3>武则天（曌）</h3>
              <p><strong>生平：</strong>624年-705年，中国历史上唯一的正统女皇帝，政治家。</p>
              <p><strong>名字解析：</strong>"武"为姓氏；原名"媚"，后改名"曌"（zhào），为自创汉字，上"日"下"空"，意为日光普照；年号"则天"，表示法则应合天道。</p>
              <p><strong>称号演变：</strong>自称"圣神皇帝"，庙号"则天大圣皇帝"，死后唐中宗追谥为"则天大圣皇后"。</p>
            </div>
          </div>
          
          <div class="figure-card">
            <div class="figure-image"><img src="../assets/images/ming.png" alt="王昭君" /></div>
            <div class="figure-content">
              <h3>王昭君（嫱）</h3>
              <p><strong>生平：</strong>约公元前52年-前15年，西汉宫女，和亲匈奴，中国古代四大美女之一。</p>
              <p><strong>名字解析：</strong>"王"为姓氏；"昭君"中"昭"意为明亮、显著，"君"是敬称，表示高贵、尊贵；本名"嫱"（qiáng），意为美好、美丽的女子。</p>
              <p><strong>称号演变：</strong>匈奴称其为"宁胡阏氏"（和平公主），民间尊称"明妃"、"昭君"。</p>
            </div>
          </div>
          
          <div class="figure-card">
            <div class="figure-image"><img src="../assets/images/huamulan.jpg" alt="花木兰" /></div>
            <div class="figure-content">
              <h3>花木兰</h3>
              <p><strong>生平：</strong>约北魏时期（386年-534年）人物，传说中代父从军的巾帼英雄。</p>
              <p><strong>名字解析：</strong>"花"为姓氏，也可能是昵称；"木兰"为木兰花，象征坚韧、高洁的品格，也有勇敢美丽之意。</p>
              <p><strong>称号演变：</strong>民间称其为"巾帼英雄"、"女中豪杰"，被视为忠孝节义的代表。</p>
            </div>
          </div>
          
          <div class="figure-card">
            <div class="figure-image"><img src="../assets/images/cixi.jpg" alt="慈禧太后" /></div>
            <div class="figure-content">
              <h3>叶赫那拉·杏贞（慈禧）</h3>
              <p><strong>生平：</strong>1835年-1908年，清朝末期实际统治者，统治中国长达47年。</p>
              <p><strong>名字解析：</strong>"叶赫那拉"为满族姓氏；本名"杏贞"，"杏"为果实，"贞"意为坚贞，表示品行端正；年号"同治"时自称"慈禧皇太后"，"慈"意为慈爱，"禧"意为喜庆、吉祥。</p>
              <p><strong>称号演变：</strong>又称"西太后"（因居住西六宫），被讽为"老佛爷"。</p>
            </div>
          </div>
        </div>
        
        <div class="view-more-btn" @click="showMoreWomen = !showMoreWomen">
          {{ showMoreWomen ? '收起' : '查看更多' }}
          <i class="arrow" :class="{ 'arrow-down': !showMoreWomen, 'arrow-up': showMoreWomen }"></i>
        </div>
        
        <div class="historical-figures" v-if="showMoreWomen">
          <div class="figure-card">
            <div class="figure-image"><img src="../assets/images/diaochan.jpg" alt="貂蝉" /></div>
            <div class="figure-content">
              <h3>貂蝉</h3>
              <p><strong>生平：</strong>约东汉末年人物，《三国演义》中的人物，中国古代四大美女之一。</p>
              <p><strong>名字解析：</strong>传说为王允义女，"貂"为貂皮，"蝉"为蝉饰，均为古代女性饰物，合起来指美丽动人的女子，暗示其姿容绝美。</p>
              <p><strong>称号演变：</strong>被誉为"绝代佳人"，戏曲中有"闭月羞花之貌"的称赞。</p>
            </div>
          </div>
          
          <div class="figure-card">
            <div class="figure-image"><img src="../assets/images/xishi.jpg" alt="西施" /></div>
            <div class="figure-content">
              <h3>西施（施夷光）</h3>
              <p><strong>生平：</strong>约公元前506年-?，春秋末期越国美女，中国古代四大美女之一。</p>
              <p><strong>名字解析：</strong>本名"施夷光"，"施"为姓氏，"夷光"意为明亮的光芒；因出生在越国苎萝村西施浜，故称"西施"。</p>
              <p><strong>称号演变：</strong>被誉为"沉鱼"（传说西施浣纱时，鱼儿看得忘记游动而沉入水底）。</p>
            </div>
          </div>
          
          <div class="figure-card">
            <div class="figure-image"><img src="../assets/images/luzhishen.jpg" alt="林黛玉" /></div>
            <div class="figure-content">
              <h3>林黛玉</h3>
              <p><strong>生平：</strong>《红楼梦》中的主要女性角色，金陵十二钗之首。</p>
              <p><strong>名字解析：</strong>"林"为姓氏；"黛"为黑色眉墨，"玉"象征美好品质，合起来形容如玉般美丽且眉目如画的女子，暗示其美貌与高洁品格。</p>
              <p><strong>称号演变：</strong>小说中别称"颦儿"（因常愁眉不展），又称"林妹妹"。</p>
            </div>
          </div>
          
          <div class="figure-card">
            <div class="figure-image"><img src="../assets/images/pingyang.jpg" alt="平阳公主" /></div>
            <div class="figure-content">
              <h3>李秀宁（平阳公主）</h3>
              <p><strong>生平：</strong>唐高祖李渊长女，约566年-623年，唐朝开国功臣，女军事家。</p>
              <p><strong>名字解析：</strong>"李"为姓氏；"秀宁"中"秀"意为秀丽、出众，"宁"意为安宁、平静，表示容貌秀美且性格沉稳；封号"平阳"，为其封地，取自平阳郡。</p>
              <p><strong>称号演变：</strong>被誉为"巾帼英雄"，历史上颇有影响的女性军事统帅。</p>
            </div>
          </div>
        </div>
      </section>

      <!-- 小说传奇 -->
      <section id="fiction" class="history-section">
        <h2 class="section-title">小说传奇</h2>
        <p class="section-intro">中国古典小说中的人物名字往往寓意深刻，通过名字暗示人物性格、命运或角色定位。</p>
        
        <div class="historical-figures">
          <div class="figure-card">
            <div class="figure-image"><img src="../assets/images/shuihu.jpg" alt="宋江" /></div>
            <div class="figure-content">
              <h3>宋江（公明）</h3>
              <p><strong>生平：</strong>《水浒传》中的主要人物，梁山泊首领，绰号"及时雨"。</p>
              <p><strong>名字解析：</strong>"宋"为姓氏，也暗示其生活在宋朝；"江"意为江河，象征广阔胸怀与包容力；字"公明"，意为公正明理，符合其重义气、讲情义的形象。</p>
              <p><strong>称号演变：</strong>梁山泊尊称"及时雨"、"呼保义"，朝廷封为"忠义堂主"。</p>
            </div>
          </div>
          
          <div class="figure-card">
            <div class="figure-image"><img src="../assets/images/jiabaoyu.jpg" alt="贾宝玉" /></div>
            <div class="figure-content">
              <h3>贾宝玉（甄士隐）</h3>
              <p><strong>生平：</strong>《红楼梦》中的男主角，贾府嫡孙，生而口含一块玉。</p>
              <p><strong>名字解析：</strong>"贾"为姓氏；"宝玉"中"宝"意为珍贵，"玉"意为美玉，因其出生时口含玉而得名，象征其与众不同的命运；别名"甄士隐"与"贾宝玉"谐音"真事隐"，暗示小说中隐藏着真实故事。</p>
              <p><strong>称号演变：</strong>小说中被称为"二爷"、"宝二爷"，女眷亲切称为"宝玉"。</p>
            </div>
          </div>
          
          <div class="figure-card">
            <div class="figure-image"><img src="../assets/images/wukong.jpg" alt="孙悟空" /></div>
            <div class="figure-content">
              <h3>孙悟空（行者）</h3>
              <p><strong>生平：</strong>《西游记》中的主要角色，由仙石孕育而生，被困五行山五百年后随唐僧西天取经。</p>
              <p><strong>名字解析：</strong>"孙"为姓氏，谐音"猢"，暗示其猴性；"悟空"意为参透空性、领悟佛法真谛；号"行者"，意为修行之人。</p>
              <p><strong>称号演变：</strong>自封"美猴王"、"齐天大圣"，如来封其为"斗战胜佛"。</p>
            </div>
          </div>
          
          <div class="figure-card">
            <div class="figure-image"><img src="../assets/images/yingying.jpg" alt="崔莺莺" /></div>
            <div class="figure-content">
              <h3>崔莺莺</h3>
              <p><strong>生平：</strong>《西厢记》中的女主角，相国崔沧之女。</p>
              <p><strong>名字解析：</strong>"崔"为姓氏；"莺莺"取自黄莺鸟名，象征其声音婉转动听，也暗示其美丽活泼的性格特点。</p>
              <p><strong>称号演变：</strong>剧中被称为"小姐"、"崔家小姐"，成为中国古典爱情故事中的典型女性形象。</p>
            </div>
          </div>
        </div>
        
        <div class="view-more-btn" @click="showMoreFiction = !showMoreFiction">
          {{ showMoreFiction ? '收起' : '查看更多' }}
          <i class="arrow" :class="{ 'arrow-down': !showMoreFiction, 'arrow-up': showMoreFiction }"></i>
        </div>
        
        <div class="historical-figures" v-if="showMoreFiction">
          <div class="figure-card">
            <div class="figure-image"><img src="../assets/images/luweizhaoqi.jpg" alt="鲁智深" /></div>
            <div class="figure-content">
              <h3>鲁智深（花和尚）</h3>
              <p><strong>生平：</strong>《水浒传》中的主要人物，原为大相国寺飞云浮岛禅师，后上梁山。</p>
              <p><strong>名字解析：</strong>"鲁"为姓氏，也暗示其鲁莽性格；"智深"意为智慧深邃，具有一定的反讽意味，因其性格直率鲁莽；绰号"花和尚"，因其脸上刺有花纹。</p>
              <p><strong>称号演变：</strong>梁山绰号"花和尚"，亦称"鲁提辖"（因曾任提辖）。</p>
            </div>
          </div>
          
          <div class="figure-card">
            <div class="figure-image"><img src="../assets/images/ximen.jpg" alt="西门庆" /></div>
            <div class="figure-content">
              <h3>西门庆</h3>
              <p><strong>生平：</strong>《金瓶梅》中的主要人物，清河县富商，纵欲成性的反面角色。</p>
              <p><strong>名字解析：</strong>"西门"为姓氏；"庆"意为喜庆、庆贺，象征其享乐主义的生活态度；整个名字也暗喻为西方门户（阴门）中寻欢作乐之意，暗示其好色本性。</p>
              <p><strong>称号演变：</strong>小说中有"西门大官人"之称，象征其社会地位与财富。</p>
            </div>
          </div>
          
          <div class="figure-card">
            <div class="figure-image"><img src="../assets/images/linsanjie.jpg" alt="林三娘" /></div>
            <div class="figure-content">
              <h3>林冲（教头）</h3>
              <p><strong>生平：</strong>《水浒传》中的主要人物，原为东京八十万禁军教头，被高俅迫害后上梁山。</p>
              <p><strong>名字解析：</strong>"林"为姓氏；"冲"意为冲击、冲破，暗示其勇猛刚直的性格以及突破困境的命运轨迹；绰号"豹子头"，因其勇猛威武，如猛虎豹子。</p>
              <p><strong>称号演变：</strong>梁山绰号"豹子头"，尊称"林教头"，后为梁山第二把交椅。</p>
            </div>
          </div>
          
          <div class="figure-card">
            <div class="figure-image"><img src="../assets/images/jiayu.jpg" alt="贾雨村" /></div>
            <div class="figure-content">
              <h3>贾雨村（化名庚黄氏）</h3>
              <p><strong>生平：</strong>《红楼梦》中的人物，落魄文人，后仕途得意。</p>
              <p><strong>名字解析：</strong>"贾"为姓氏，与"假"谐音，暗示其人品虚伪；"雨村"象征风雨漂泊的村落，暗示其漂泊不定的人生；化名"庚黄氏"，是"更荒唐"的谐音，暗示小说情节更加荒诞。</p>
              <p><strong>称号演变：</strong>小说中由"贾雨村"变为"贾恩侯"，象征其由卑微到显赫的人生转变。</p>
            </div>
          </div>
        </div>
      </section>

      <!-- 神话传说 -->
      <section id="myth" class="history-section">
        <h2 class="section-title">神话传说</h2>
        <p class="section-intro">中国神话传说中的人物名字常带有神秘色彩，蕴含宇宙自然规律或寄托古人对美好世界的向往。</p>
        
        <div class="historical-figures">
          <div class="figure-card">
            <div class="figure-image"><img src="../assets/images/nvwa.jpg" alt="女娲" /></div>
            <div class="figure-content">
              <h3>女娲</h3>
              <p><strong>生平：</strong>中国上古神话中的创世女神，传说其抟土造人、炼石补天。</p>
              <p><strong>名字解析：</strong>"女"指女性，"娲"与"蛙"谐音，暗示其可能最初具有蛙形象征（古代蛙被视为多产的象征）；"女娲"之名也可解释为"女"与"挽救"之意，象征挽救世界的女神。</p>
              <p><strong>称号演变：</strong>道教尊称"女娲娘娘"、"女娲圣母"，被视为人类始祖之一。</p>
            </div>
          </div>
          
          <div class="figure-card">
            <div class="figure-image"><img src="../assets/images/fuxi.jpg" alt="伏羲" /></div>
            <div class="figure-content">
              <h3>伏羲（庖牺）</h3>
              <p><strong>生平：</strong>中国上古三皇之一，传说创造八卦，教民渔猎、结网捕鱼。</p>
              <p><strong>名字解析：</strong>"伏羲"中"伏"意为俯伏、隐藏，"羲"为牺牲、祭祀，合起来暗示其作为祭祀创始人的角色；又称"庖牺"，"庖"指厨房，传说其教民烹饪，故得此名。</p>
              <p><strong>称号演变：</strong>被尊为"人祖"、"伏牺氏"、"太昊"，与女娲并称为中国人文初祖。</p>
            </div>
          </div>
          
          <div class="figure-card">
            <div class="figure-image"><img src="../assets/images/changehyuetu.jpg" alt="嫦娥" /></div>
            <div class="figure-content">
              <h3>嫦娥（恒娥）</h3>
              <p><strong>生平：</strong>中国神话中奔月的美丽仙女，后羿之妻。</p>
              <p><strong>名字解析：</strong>"嫦"与"常"谐音，意为长久、永恒；"娥"意为美女，形容眉毛弯曲如月牙的美女；又作"恒娥"，更直接表达其永恒的象征意义。</p>
              <p><strong>称号演变：</strong>道教称"太阴星君"，民间称"月宫仙子"、"月中仙子"。</p>
            </div>
          </div>
          
          <div class="figure-card">
            <div class="figure-image"><img src="../assets/images/houyi.jpg" alt="后羿" /></div>
            <div class="figure-content">
              <h3>后羿（羿）</h3>
              <p><strong>生平：</strong>中国神话中的神射手，曾射落九个太阳拯救人间。</p>
              <p><strong>名字解析：</strong>"后"指首领、长官；"羿"为古代东夷族部落的首领，也意为善射之人；"后羿"合起来意为善射的部落首领。</p>
              <p><strong>称号演变：</strong>被尊为"射日英雄"，又称"大羿"、"夷羿"，象征着正义与勇气。</p>
            </div>
          </div>
        </div>
        
        <div class="view-more-btn" @click="showMoreMyth = !showMoreMyth">
          {{ showMoreMyth ? '收起' : '查看更多' }}
          <i class="arrow" :class="{ 'arrow-down': !showMoreMyth, 'arrow-up': showMoreMyth }"></i>
        </div>
        
        <div class="historical-figures" v-if="showMoreMyth">
          <div class="figure-card">
            <div class="figure-image"><img src="../assets/images/pangu.jpg" alt="盘古" /></div>
            <div class="figure-content">
              <h3>盘古</h3>
              <p><strong>生平：</strong>中国创世神话中的原始巨人，开天辟地，其身体化为宇宙万物。</p>
              <p><strong>名字解析：</strong>"盘"意为广大、弯曲；"古"意为久远、从前；"盘古"合起来象征远古的宏大存在，也有开辟混沌之意。一说来源于壮语中的"班姑"，意为"智慧的祖先"。</p>
              <p><strong>称号演变：</strong>道教尊称"盘古真人"、"盘古大帝"，被视为天地万物的始祖。</p>
            </div>
          </div>
          
          <div class="figure-card">
            <div class="figure-image"><img src="../assets/images/huangdi.jpg" alt="黄帝" /></div>
            <div class="figure-content">
              <h3>轩辕氏（黄帝）</h3>
              <p><strong>生平：</strong>中国上古传说中的部落联盟首领，华夏民族的共同祖先。</p>
              <p><strong>名字解析：</strong>姓"姬"，号"轩辕"，因居住地在轩辕之丘而得名；尊称"黄帝"，"黄"象征土德，与中央、黄河流域相关，体现了黄土文明的特点。</p>
              <p><strong>称号演变：</strong>被尊为"人文初祖"、"轩辕黄帝"，是中华民族最重要的文化符号之一。</p>
            </div>
          </div>
          
          <div class="figure-card">
            <div class="figure-image"><img src="../assets/images/panshenme.jpg" alt="彭祖" /></div>
            <div class="figure-content">
              <h3>彭祖（彭铿）</h3>
              <p><strong>生平：</strong>中国神话传说中的长寿者，相传活了八百岁。</p>
              <p><strong>名字解析：</strong>"彭"为姓氏；名"铿"（kēng），意为声音洪亮；后世称其为"彭祖"，意为彭氏的祖先，象征着长寿与养生智慧。</p>
              <p><strong>称号演变：</strong>被誉为"养生祖师"、"寿星"，是中国长寿文化的重要象征。</p>
            </div>
          </div>
          
          <div class="figure-card">
            <div class="figure-image"><img src="../assets/images/zhongli.jpg" alt="钟离权" /></div>
            <div class="figure-content">
              <h3>钟离权（正阳）</h3>
              <p><strong>生平：</strong>道教神话中的八仙之一，传说为汉代人，得道成仙。</p>
              <p><strong>名字解析：</strong>"钟离"为复姓；"权"意为权衡、掌握，象征其掌握修道奥秘的能力；号"正阳祖师"，"正阳"意为正面朝阳，象征阳刚之气。</p>
              <p><strong>称号演变：</strong>道教尊称"正阳真人"、"钟离祖师"，民间俗称"汉钟离"，常被描绘为赤膊露腹的形象。</p>
            </div>
          </div>
        </div>
      </section>

      <div class="conclusion-section">
        <h2>名字文化的传承与启示</h2>
        <p>中国历史人物的名字承载着丰富的文化内涵与历史智慧，反映了不同时代的价值取向与审美观念。从帝王将相的威严名号到文人墨客的雅致称谓，从女性的婉约名字到神话人物的神秘命名，无不体现着中华民族对名字的珍视与精心构思。</p>
        <p>这些历史人物名字的解读，不仅能帮助我们更深入地理解中国古代文化，也能为现代命名提供宝贵的参考。今天，越来越多的父母在为孩子取名时仍会借鉴传统命名理念，期望通过美好的名字寄托对孩子未来的期许。</p>
        <p>正如古人云："名之为言铭也，自铭之也，使人不忘。"一个好的名字，可能会成为一个人精神印记，甚至影响其一生的发展方向与精神追求。</p>
      </div>
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
        const yOffset = -80; // 考虑顶部导航栏的高度
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({top: y, behavior: 'smooth'});
      }
    }
  },
  mounted() {
    // 页面加载后执行的代码
    document.title = '中国历史人物名字 - 起名网';
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