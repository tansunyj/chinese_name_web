<template>
  <div class="zodiac-compatibility-page">
    <div class="container">
      <h1 class="page-title">生肖属相相配</h1>
      
      <div class="content">
        <div class="intro-section">
          <p class="intro-text">
            在中国传统文化中，生肖不仅代表出生年份的标志，还被广泛应用于姓名学、婚配、事业选择等多个方面。其中，生肖与姓氏的搭配被认为会影响一个人的命运。本文将详细介绍生肖与姓氏的关系，以及如何根据生肖特性选择适合的名字。
          </p>
        </div>

        <div class="section">
          <h2 class="section-title">生肖与姓氏的传统关系</h2>
          <div class="content-block">
            <p>在传统观念中，特定的姓氏与特定的生肖之间存在着相生相克的关系。这种关系主要基于以下几个方面：</p>
            <ul>
              <li><strong>姓氏的五行属性</strong>：每个汉字都有对应的五行属性（金、木、水、火、土），姓氏的五行属性与生肖的五行属性相配合，可以达到相生相助的效果。</li>
              <li><strong>姓氏的字形结构</strong>：某些姓氏的字形与某些生肖有象形或含义上的联系，可能会形成相生或相克关系。</li>
              <li><strong>历史文化渊源</strong>：一些姓氏与特定生肖之间有历史典故或文化联系，这些联系在民间被视为吉祥或不吉祥的象征。</li>
            </ul>
          </div>
        </div>

        <div class="section">
          <h2 class="section-title">十二生肖与姓氏的相配关系</h2>
          
          <div class="zodiac-section" v-for="(zodiac, index) in zodiacData" :key="index">
            <div class="zodiac-header">
              <div class="zodiac-icon">
                <img :src="getZodiacImage(zodiac.englishName)" :alt="zodiac.name" />
              </div>
              <div class="zodiac-info">
                <h3>{{ zodiac.name }}年</h3>
                <p>五行属性：<span class="element">{{ zodiac.element }}</span></p>
              </div>
            </div>
            
            <div class="compatibility-content">
              <div class="compatible-surnames">
                <h4>相配姓氏</h4>
                <p>{{ zodiac.compatibleSurnames.join('、') }}</p>
                <p class="explanation">{{ zodiac.compatibleExplanation }}</p>
              </div>
              
              <div class="naming-principles">
                <h4>取名原则</h4>
                <ul>
                  <li v-for="(principle, i) in zodiac.namingPrinciples" :key="i">{{ principle }}</li>
                </ul>
              </div>
              
              <div class="example-names">
                <h4>名字示例</h4>
                <div class="name-examples">
                  <div class="name-group">
                    <h5>男孩</h5>
                    <ul>
                      <li v-for="(name, i) in zodiac.maleNames" :key="i">
                        <span class="name">{{ name.characters }}</span>
                        <span class="pinyin">{{ name.pinyin }}</span>
                        <span class="meaning">{{ name.meaning }}</span>
                      </li>
                    </ul>
                  </div>
                  <div class="name-group">
                    <h5>女孩</h5>
                    <ul>
                      <li v-for="(name, i) in zodiac.femaleNames" :key="i">
                        <span class="name">{{ name.characters }}</span>
                        <span class="pinyin">{{ name.pinyin }}</span>
                        <span class="meaning">{{ name.meaning }}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="section">
          <h2 class="section-title">生肖属相相配的重要性</h2>
          <div class="content-block">
            <p>在给孩子取名时，考虑生肖与姓氏的匹配有以下几点意义：</p>
            <ol>
              <li><strong>文化传承</strong>：遵循传统命名文化，传承中华文明的精髓。</li>
              <li><strong>和谐共生</strong>：追求人与自然、个人与社会的和谐共生理念。</li>
              <li><strong>心理暗示</strong>：良好的姓名匹配可以给人带来正面的心理暗示和自信。</li>
              <li><strong>特色独特</strong>：根据生肖特点取名，使名字更有个人特色和文化内涵。</li>
            </ol>
            <p class="note">
              需要注意的是，生肖相配理论源于民间文化，并非科学理论。在现代社会，取名更应注重名字的实用性、审美性和对孩子成长的积极影响，将传统文化视为参考而非绝对准则。
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 生肖相关图片导入
import ShuImg from '@/assets/images/zodiac/shu.png';
import NiuImg from '@/assets/images/zodiac/niu.png';
import HuImg from '@/assets/images/zodiac/hu.png';
import TuImg from '@/assets/images/zodiac/tu.png';
import LongImg from '@/assets/images/zodiac/long.png';
import SheImg from '@/assets/images/zodiac/she.png';
import MaImg from '@/assets/images/zodiac/ma.png';
import YangImg from '@/assets/images/zodiac/yang.png';
import HouImg from '@/assets/images/zodiac/hou.png';
import JiImg from '@/assets/images/zodiac/ji.png';
import GouImg from '@/assets/images/zodiac/gou.png';
import ZhuImg from '@/assets/images/zodiac/zhu.png';

export default {
  name: 'ZodiacNaming',
  data() {
    return {
      // 生肖图片映射
      zodiacImages: {
        'shu': ShuImg,
        'niu': NiuImg,
        'hu': HuImg,
        'tu': TuImg,
        'long': LongImg,
        'she': SheImg,
        'ma': MaImg,
        'yang': YangImg,
        'hou': HouImg,
        'ji': JiImg,
        'gou': GouImg,
        'zhu': ZhuImg
      },
      // 生肖英文名对应拼音映射
      zodiacPinyinMap: {
        'Rat': 'shu',
        'Ox': 'niu',
        'Tiger': 'hu',
        'Rabbit': 'tu',
        'Dragon': 'long',
        'Snake': 'she',
        'Horse': 'ma',
        'Goat': 'yang',
        'Monkey': 'hou',
        'Rooster': 'ji',
        'Dog': 'gou',
        'Pig': 'zhu'
      },
      // 生肖数据
      zodiacData: [
        {
          name: '鼠',
          englishName: 'Rat',
          element: '水',
          compatibleSurnames: ['赵', '钱', '孙', '李', '周', '吴', '郑', '王'],
          compatibleExplanation: '鼠年出生的人适合与五行属水或属木的姓氏相配，这些姓氏能增强鼠的灵活机智特性，达到相生相助的效果。',
          namingPrinciples: [
            '宜用带"氵"、"冫"、"水"等与水相关的字，如：洋、清、润、泽等',
            '宜用带"艹"、"木"、"林"等与木相关的字，体现木生水的五行相生',
            '避免使用与"猫"、"蛇"等天敌相关的字',
            '适合有"智"、"灵"、"慧"等字根的名字，象征聪明机智'
          ],
          maleNames: [
            { characters: '智远', pinyin: 'Zhì Yuǎn', meaning: '聪明睿智，有远见' },
            { characters: '泽宇', pinyin: 'Zé Yǔ', meaning: '恩泽广如宇宙' },
            { characters: '哲瀚', pinyin: 'Zhé Hàn', meaning: '哲学的智慧如海般深邃' }
          ],
          femaleNames: [
            { characters: '灵秀', pinyin: 'Líng Xiù', meaning: '灵动秀气' },
            { characters: '慧莲', pinyin: 'Huì Lián', meaning: '聪慧如莲花般纯净' },
            { characters: '雨婷', pinyin: 'Yǔ Tíng', meaning: '如雨般清丽，亭亭玉立' }
          ]
        },
        {
          name: '牛',
          englishName: 'Ox',
          element: '土',
          compatibleSurnames: ['张', '刘', '陈', '杨', '黄', '赵', '吴', '周'],
          compatibleExplanation: '牛年出生的人适合与五行属土或属金的姓氏相配，这些姓氏能增强牛的踏实勤勉特性，达到相生相助的效果。',
          namingPrinciples: [
            '宜用带"土"、"田"、"阜"等与土相关的字，如：坤、坚、培、岩等',
            '宜用带"金"、"钅"等与金相关的字，体现金生土的五行相生',
            '避免使用与"虎"等相冲动物相关的字',
            '适合有"勤"、"德"、"诚"等字根的名字，象征勤劳诚实'
          ],
          maleNames: [
            { characters: '铸鼎', pinyin: 'Zhù Dǐng', meaning: '如铸造鼎器般坚固有力' },
            { characters: '耕德', pinyin: 'Gēng Dé', meaning: '勤耕不辍，德行高尚' },
            { characters: '坚毅', pinyin: 'Jiān Yì', meaning: '坚定毅力，不屈不挠' }
          ],
          femaleNames: [
            { characters: '琼瑶', pinyin: 'Qióng Yáo', meaning: '如美玉般珍贵纯净' },
            { characters: '嘉励', pinyin: 'Jiā Lì', meaning: '嘉美勉励，不断进取' },
            { characters: '恬静', pinyin: 'Tián Jìng', meaning: '恬淡宁静，温和淡雅' }
          ]
        },
        {
          name: '虎',
          englishName: 'Tiger',
          element: '木',
          compatibleSurnames: ['李', '杨', '吴', '刘', '陈', '郑', '孙', '高'],
          compatibleExplanation: '虎年出生的人适合与五行属木或属火的姓氏相配，这些姓氏能增强虎的勇猛威严特性，达到相生相助的效果。',
          namingPrinciples: [
            '宜用带"木"、"林"、"艹"等与木相关的字，如：森、林、茂、华等',
            '宜用带"火"、"灬"等与火相关的字，体现木生火的五行相生',
            '避免使用与"猴"等相冲动物相关的字',
            '适合有"威"、"猛"、"力"等字根的名字，象征威猛有力'
          ],
          maleNames: [
            { characters: '林彪', pinyin: 'Lín Biāo', meaning: '如森林般茂盛，迅捷如虎' },
            { characters: '烨辉', pinyin: 'Yè Huī', meaning: '光彩照人，辉煌灿烂' },
            { characters: '涵柏', pinyin: 'Hán Bǎi', meaning: '包容宽广，坚韧如柏' }
          ],
          femaleNames: [
            { characters: '雅竹', pinyin: 'Yǎ Zhú', meaning: '优雅如竹，清雅挺拔' },
            { characters: '炎玉', pinyin: 'Yán Yù', meaning: '火焰般热情，美玉般纯洁' },
            { characters: '菲华', pinyin: 'Fēi Huá', meaning: '芬芳华美，气质出众' }
          ]
        },
        {
          name: '兔',
          englishName: 'Rabbit',
          element: '木',
          compatibleSurnames: ['杨', '张', '王', '刘', '陈', '赵', '钱', '孙'],
          compatibleExplanation: '兔年出生的人适合与五行属木或属水的姓氏相配，这些姓氏能增强兔的温和敏感特性，达到相生相助的效果。',
          namingPrinciples: [
            '宜用带"木"、"林"、"艹"等与木相关的字，如：柔、樱、苏、菲等',
            '宜用带"氵"、"冫"、"水"等与水相关的字，体现水生木的五行相生',
            '避免使用与"鹰"、"狼"等捕食者相关的字',
            '适合有"柔"、"雅"、"美"等字根的名字，象征温柔优雅'
          ],
          maleNames: [
            { characters: '宸宇', pinyin: 'Chén Yǔ', meaning: '如宫殿一般宏伟，包容宇宙' },
            { characters: '君茂', pinyin: 'Jūn Mào', meaning: '如君王一般高贵，茂盛发达' },
            { characters: '安和', pinyin: 'Ān Hé', meaning: '安宁和顺，温和谦逊' }
          ],
          femaleNames: [
            { characters: '芷若', pinyin: 'Zhǐ Ruò', meaning: '如同香草般芬芳，婉若清风' },
            { characters: '琳琅', pinyin: 'Lín Láng', meaning: '美玉琳琅，美丽动人' },
            { characters: '舒雅', pinyin: 'Shū Yǎ', meaning: '舒适自然，雅致大方' }
          ]
        },
        {
          name: '龙',
          englishName: 'Dragon',
          element: '土',
          compatibleSurnames: ['陈', '黄', '吴', '刘', '李', '赵', '孙', '周'],
          compatibleExplanation: '龙年出生的人适合与五行属土或属火的姓氏相配，这些姓氏能增强龙的尊贵威严特性，达到相生相助的效果。',
          namingPrinciples: [
            '宜用带"土"、"田"、"阜"等与土相关的字，如：基、坤、峰、岳等',
            '宜用带"火"、"灬"等与火相关的字，体现火生土的五行相生',
            '宜用带"龙"、"云"、"天"等高贵显赫的字',
            '适合有"威"、"宏"、"嘉"等字根的名字，象征威严宏大'
          ],
          maleNames: [
            { characters: '天翔', pinyin: 'Tiān Xiáng', meaning: '翱翔于天空，志向高远' },
            { characters: '嘉鸿', pinyin: 'Jiā Hóng', meaning: '美好吉祥，如大鸿鹄展翅高飞' },
            { characters: '鸿运', pinyin: 'Hóng Yùn', meaning: '宏大鸿达，运势亨通' }
          ],
          femaleNames: [
            { characters: '瑾萱', pinyin: 'Jǐn Xuān', meaning: '美玉般珍贵，如萱草般温暖' },
            { characters: '凤仪', pinyin: 'Fèng Yí', meaning: '如凤凰般高贵，仪态万千' },
            { characters: '熙雯', pinyin: 'Xī Wén', meaning: '光明美好，文雅秀丽' }
          ]
        },
        {
          name: '蛇',
          englishName: 'Snake',
          element: '火',
          compatibleSurnames: ['杨', '高', '赵', '钱', '孙', '李', '陈', '王'],
          compatibleExplanation: '蛇年出生的人适合与五行属火或属土的姓氏相配，这些姓氏能增强蛇的智慧敏锐特性，达到相生相助的效果。',
          namingPrinciples: [
            '宜用带"火"、"灬"等与火相关的字，如：炫、煜、炜、焱等',
            '宜用带"土"、"田"、"阜"等与土相关的字，体现土生火的五行相生',
            '避免使用与"鹤"、"猫"等天敌相关的字',
            '适合有"智"、"巧"、"灵"等字根的名字，象征智慧灵动'
          ],
          maleNames: [
            { characters: '炎焱', pinyin: 'Yán Yàn', meaning: '火焰熊熊，气势不凡' },
            { characters: '展鹏', pinyin: 'Zhǎn Péng', meaning: '展翅高飞，如大鹏展翅' },
            { characters: '睿智', pinyin: 'Ruì Zhì', meaning: '明睿聪智，见识广博' }
          ],
          femaleNames: [
            { characters: '妙菡', pinyin: 'Miào Hàn', meaning: '巧妙灵动，如莲花般美丽' },
            { characters: '欣妍', pinyin: 'Xīn Yán', meaning: '欣喜美好，容颜秀丽' },
            { characters: '芊雅', pinyin: 'Qiān Yǎ', meaning: '草木丰茂，雅致优美' }
          ]
        },
        {
          name: '马',
          englishName: 'Horse',
          element: '火',
          compatibleSurnames: ['李', '刘', '赵', '钱', '孙', '杨', '高', '王'],
          compatibleExplanation: '马年出生的人适合与五行属火或属木的姓氏相配，这些姓氏能增强马的活力奔放特性，达到相生相助的效果。',
          namingPrinciples: [
            '宜用带"火"、"灬"等与火相关的字，如：炎、煌、炫、晖等',
            '宜用带"木"、"林"、"艹"等与木相关的字，体现木生火的五行相生',
            '避免使用与"鼠"等相冲动物相关的字',
            '适合有"奔"、"驰"、"行"等字根的名字，象征奔腾活力'
          ],
          maleNames: [
            { characters: '奔腾', pinyin: 'Bēn Téng', meaning: '如马奔腾，气势磅礴' },
            { characters: '烨磊', pinyin: 'Yè Lěi', meaning: '光芒四射，如磊石般坚实' },
            { characters: '锋煜', pinyin: 'Fēng Yù', meaning: '锋芒毕露，光明炽热' }
          ],
          femaleNames: [
            { characters: '骊萱', pinyin: 'Lí Xuān', meaning: '黑色骏马，如萱草般温暖' },
            { characters: '梦驰', pinyin: 'Mèng Chí', meaning: '梦中驰骋，自由奔放' },
            { characters: '熙雅', pinyin: 'Xī Yǎ', meaning: '光明美好，高雅大方' }
          ]
        },
        {
          name: '羊',
          englishName: 'Goat',
          element: '土',
          compatibleSurnames: ['张', '陈', '赵', '钱', '孙', '李', '周', '吴'],
          compatibleExplanation: '羊年出生的人适合与五行属土或属火的姓氏相配，这些姓氏能增强羊的温和善良特性，达到相生相助的效果。',
          namingPrinciples: [
            '宜用带"土"、"田"、"阜"等与土相关的字，如：坤、培、岩、壤等',
            '宜用带"火"、"灬"等与火相关的字，体现火生土的五行相生',
            '避免使用与"虎"、"狼"等天敌相关的字',
            '适合有"美"、"善"、"优"等字根的名字，象征温顺优雅'
          ],
          maleNames: [
            { characters: '俊彦', pinyin: 'Jùn Yàn', meaning: '英俊卓越，才貌双全' },
            { characters: '善和', pinyin: 'Shàn Hé', meaning: '善良和睦，平易近人' },
            { characters: '煜祺', pinyin: 'Yù Qí', meaning: '光明照耀，吉祥如意' }
          ],
          femaleNames: [
            { characters: '美琳', pinyin: 'Měi Lín', meaning: '美丽漂亮，如美玉般珍贵' },
            { characters: '柔婷', pinyin: 'Róu Tíng', meaning: '柔和温婉，亭亭玉立' },
            { characters: '雅萱', pinyin: 'Yǎ Xuān', meaning: '优雅大方，如萱草般温暖' }
          ]
        },
        {
          name: '猴',
          englishName: 'Monkey',
          element: '金',
          compatibleSurnames: ['王', '高', '陈', '杨', '赵', '钱', '孙', '李'],
          compatibleExplanation: '猴年出生的人适合与五行属金或属水的姓氏相配，这些姓氏能增强猴的聪明灵活特性，达到相生相助的效果。',
          namingPrinciples: [
            '宜用带"金"、"钅"等与金相关的字，如：铭、锐、钧、铮等',
            '宜用带"氵"、"冫"、"水"等与水相关的字，体现金生水的五行相生',
            '避免使用与"蛇"、"虎"等相冲动物相关的字',
            '适合有"巧"、"捷"、"敏"等字根的名字，象征机智灵活'
          ],
          maleNames: [
            { characters: '聪睿', pinyin: 'Cōng Ruì', meaning: '聪明智慧，睿智过人' },
            { characters: '锐志', pinyin: 'Ruì Zhì', meaning: '锐利坚定，意志坚强' },
            { characters: '金鑫', pinyin: 'Jīn Xīn', meaning: '金光闪闪，财富兴盛' }
          ],
          femaleNames: [
            { characters: '巧琳', pinyin: 'Qiǎo Lín', meaning: '灵巧聪明，如美玉般珍贵' },
            { characters: '慧颖', pinyin: 'Huì Yǐng', meaning: '聪慧颖悟，反应敏捷' },
            { characters: '瑾瑜', pinyin: 'Jǐn Yú', meaning: '美好珍贵，如美玉无瑕' }
          ]
        },
        {
          name: '鸡',
          englishName: 'Rooster',
          element: '金',
          compatibleSurnames: ['陈', '杨', '黄', '赵', '钱', '孙', '李', '周'],
          compatibleExplanation: '鸡年出生的人适合与五行属金或属土的姓氏相配，这些姓氏能增强鸡的勤勉自信特性，达到相生相助的效果。',
          namingPrinciples: [
            '宜用带"金"、"钅"等与金相关的字，如：钟、铭、锋、铄等',
            '宜用带"土"、"田"、"阜"等与土相关的字，体现土生金的五行相生',
            '避免使用与"狐"、"狼"等天敌相关的字',
            '适合有"勤"、"晨"、"明"等字根的名字，象征早起勤奋'
          ],
          maleNames: [
            { characters: '金鸣', pinyin: 'Jīn Míng', meaning: '金玉满堂，声名远播' },
            { characters: '晨阳', pinyin: 'Chén Yáng', meaning: '清晨阳光，朝气蓬勃' },
            { characters: '铭志', pinyin: 'Míng Zhì', meaning: '铭记于心，志向远大' }
          ],
          femaleNames: [
            { characters: '曦瑶', pinyin: 'Xī Yáo', meaning: '旭日东升，如美玉般珍贵' },
            { characters: '慧颖', pinyin: 'Huì Yǐng', meaning: '聪慧颖悟，才智过人' },
            { characters: '锦媛', pinyin: 'Jǐn Yuán', meaning: '锦绣华丽，贤淑美丽' }
          ]
        },
        {
          name: '狗',
          englishName: 'Dog',
          element: '土',
          compatibleSurnames: ['刘', '张', '周', '赵', '钱', '孙', '李', '王'],
          compatibleExplanation: '狗年出生的人适合与五行属土或属金的姓氏相配，这些姓氏能增强狗的忠诚可靠特性，达到相生相助的效果。',
          namingPrinciples: [
            '宜用带"土"、"田"、"阜"等与土相关的字，如：均、坚、岗、培等',
            '宜用带"金"、"钅"等与金相关的字，体现金克木(敌人)的五行相生',
            '避免使用与"兔"等相冲动物相关的字',
            '适合有"忠"、"诚"、"信"等字根的名字，象征忠诚守信'
          ],
          maleNames: [
            { characters: '忠毅', pinyin: 'Zhōng Yì', meaning: '忠诚坚毅，刚强不屈' },
            { characters: '信然', pinyin: 'Xìn Rán', meaning: '诚信无疑，坦然自若' },
            { characters: '铮诚', pinyin: 'Zhēng Chéng', meaning: '铮铮铁骨，诚实可靠' }
          ],
          femaleNames: [
            { characters: '慧真', pinyin: 'Huì Zhēn', meaning: '聪慧真诚，本性纯真' },
            { characters: '依林', pinyin: 'Yī Lín', meaning: '温顺依人，如林般庇护' },
            { characters: '珺瑶', pinyin: 'Jùn Yáo', meaning: '美好珍贵，如美玉般纯净' }
          ]
        },
        {
          name: '猪',
          englishName: 'Pig',
          element: '水',
          compatibleSurnames: ['张', '王', '赵', '钱', '孙', '李', '周', '吴'],
          compatibleExplanation: '猪年出生的人适合与五行属水或属木的姓氏相配，这些姓氏能增强猪的温厚诚实特性，达到相生相助的效果。',
          namingPrinciples: [
            '宜用带"氵"、"冫"、"水"等与水相关的字，如：涵、润、泽、清等',
            '宜用带"木"、"林"、"艹"等与木相关的字，体现水生木的五行相生',
            '避免使用与"蛇"等相冲动物相关的字',
            '适合有"福"、"安"、"和"等字根的名字，象征富足和美'
          ],
          maleNames: [
            { characters: '福泽', pinyin: 'Fú Zé', meaning: '福气深厚，恩泽广被' },
            { characters: '安然', pinyin: 'Ān Rán', meaning: '安宁祥和，坦然自若' },
            { characters: '宏济', pinyin: 'Hóng Jì', meaning: '宏大博远，济世利人' }
          ],
          femaleNames: [
            { characters: '雅琳', pinyin: 'Yǎ Lín', meaning: '优雅大方，如美玉般珍贵' },
            { characters: '安芮', pinyin: 'Ān Ruì', meaning: '安宁美好，如嫩芽般生机' },
            { characters: '涵蕊', pinyin: 'Hán Ruǐ', meaning: '包容涵养，如花蕊般美丽' }
          ]
        }
      ]
    }
  },
  methods: {
    // 获取生肖图片
    getZodiacImage(englishName) {
      const pinyin = this.zodiacPinyinMap[englishName];
      if (pinyin && this.zodiacImages[pinyin]) {
        return this.zodiacImages[pinyin];
      }
      // 如果没有找到对应图片，返回占位图
      return `https://placehold.co/200x200/e60012/white?text=${englishName}`;
    }
  }
}
</script>

<style scoped>
.zodiac-compatibility-page {
  padding: 20px 0 100px;
  min-height: 100vh;
  background-color: #f8f9fa;
}

.container {
  max-width: 900px;
  margin: 0 auto;
  padding: 0 20px;
}

.page-title {
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 40px;
  margin-top: 70px;
  text-align: center;
  border-bottom: 2px solid #e60012;
  padding-bottom: 20px;
}

.content {
  display: flex;
  flex-direction: column;
  gap: 50px;
}

.intro-section {
  background-color: rgba(230, 0, 18, 0.05);
  border-radius: 12px;
  padding: 25px;
  margin-bottom: 30px;
}

.intro-text {
  font-size: 1.1rem;
  line-height: 1.7;
  color: #333;
  margin: 0;
}

.section {
  margin-bottom: 50px;
}

.section-title {
  font-size: 1.8rem;
  color: #e60012;
  margin-bottom: 25px;
  border-left: 5px solid #e60012;
  padding-left: 15px;
}

.content-block {
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  padding: 25px;
  margin-bottom: 30px;
}

.content-block p {
  line-height: 1.7;
  margin-bottom: 15px;
}

.content-block ul, 
.content-block ol {
  margin-left: 20px;
  margin-bottom: 15px;
}

.content-block li {
  margin-bottom: 10px;
  line-height: 1.6;
}

.note {
  font-style: italic;
  color: #666;
  border-left: 3px solid #e60012;
  padding-left: 15px;
  margin-top: 20px;
}

.zodiac-section {
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  margin-bottom: 30px;
  overflow: hidden;
}

.zodiac-header {
  background-color: #e60012;
  color: white;
  padding: 20px;
  display: flex;
  align-items: center;
}

.zodiac-icon {
  width: 70px;
  height: 70px;
  margin-right: 20px;
  background-color: white;
  border-radius: 50%;
  padding: 5px;
}

.zodiac-icon img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.zodiac-info h3 {
  font-size: 1.8rem;
  margin: 0 0 5px;
}

.zodiac-info p {
  margin: 0;
  font-size: 1.1rem;
}

.element {
  font-weight: bold;
}

.compatibility-content {
  padding: 25px;
}

.compatible-surnames,
.naming-principles,
.example-names {
  margin-bottom: 25px;
}

.compatible-surnames h4,
.naming-principles h4,
.example-names h4 {
  font-size: 1.3rem;
  color: #333;
  margin-bottom: 15px;
  border-bottom: 1px solid #eee;
  padding-bottom: 8px;
}

.compatible-surnames p {
  font-size: 1.1rem;
  color: #333;
  margin-bottom: 10px;
}

.explanation {
  color: #666;
  font-size: 0.95rem;
  font-style: italic;
}

.naming-principles ul {
  margin-left: 20px;
}

.naming-principles li {
  margin-bottom: 8px;
  line-height: 1.6;
  color: #333;
}

.name-examples {
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
}

.name-group {
  flex: 1;
  min-width: 250px;
}

.name-group h5 {
  font-size: 1.1rem;
  color: #e60012;
  margin-bottom: 10px;
}

.name-group ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.name-group li {
  margin-bottom: 15px;
  padding-bottom: 10px;
  border-bottom: 1px dashed #eee;
}

.name {
  font-size: 1.3rem;
  font-weight: bold;
  color: #e60012;
  margin-right: 10px;
}

.pinyin {
  color: #666;
  font-size: 0.9rem;
  margin-right: 10px;
}

.meaning {
  display: block;
  color: #333;
  font-size: 0.95rem;
  margin-top: 5px;
}

@media (max-width: 768px) {
  .page-title {
    font-size: 2rem;
  }
  
  .zodiac-compatibility-page {
    padding: 10px 0 60px;
  }
  
  .zodiac-header {
    flex-direction: column;
    text-align: center;
  }
  
  .zodiac-icon {
    margin-right: 0;
    margin-bottom: 15px;
  }
  
  .name-examples {
    flex-direction: column;
    gap: 20px;
  }
}
</style> 