<template>
  <div class="zodiac-compatibility-page">
    <div class="container">
      <h1 class="page-title">Chinese Zodiac Compatibility (生肖属相相配)</h1>
      
      <div class="content">
        <div class="intro-section">
          <p class="intro-text">
            In traditional Chinese culture, the zodiac sign not only represents the year of birth, but is also widely applied in naming studies, marriage matching, career choices, and many other aspects. Among these, the compatibility between zodiac signs and surnames is believed to affect a person's destiny. This article will introduce in detail the relationship between zodiac signs and surnames, and how to choose appropriate names based on zodiac characteristics.
          </p>
        </div>

        <div class="section">
          <h2 class="section-title">Traditional Relationship Between Zodiac Signs and Surnames (生肖与姓氏的传统关系)</h2>
          <div class="content-block">
            <p>In traditional concepts, there are relationships of mutual generation and mutual restraint between specific surnames and specific zodiac signs. These relationships are mainly based on the following aspects:</p>
            <ul>
              <li><strong>Five Elements of Surnames (姓氏的五行属性)</strong>: Each Chinese character corresponds to one of the Five Elements (Metal, Wood, Water, Fire, Earth). The Five Elements of surnames working in harmony with the Five Elements of zodiac signs can achieve a mutually beneficial effect.</li>
              <li><strong>Character Structure of Surnames (姓氏的字形结构)</strong>: Some surnames have pictographic or meaningful connections with certain zodiac signs, which may form relationships of mutual generation or mutual restraint.</li>
              <li><strong>Historical and Cultural Origins (历史文化渊源)</strong>: There are historical anecdotes or cultural connections between some surnames and specific zodiac signs, which are regarded in folk culture as auspicious or inauspicious symbols.</li>
            </ul>
          </div>
        </div>

        <div class="section">
          <h2 class="section-title">Compatibility Relationships Between the Twelve Zodiac Signs and Surnames (十二生肖与姓氏的相配关系)</h2>
          
          <div class="zodiac-section" v-for="(zodiac, index) in zodiacData" :key="index">
            <div class="zodiac-header">
              <div class="zodiac-icon">
                <img :src="getZodiacImage(zodiac.englishName)" :alt="zodiac.name" />
              </div>
              <div class="zodiac-info">
                <h3>{{ zodiac.name }} Year ({{ zodiac.name }}年)</h3>
                <p>Five Elements: <span class="element">{{ zodiac.element }} ({{ zodiac.element }})</span></p>
              </div>
            </div>
            
            <div class="compatibility-content">
              <div class="compatible-surnames">
                <h4>Compatible Surnames (相配姓氏)</h4>
                <p>{{ zodiac.compatibleSurnames.join('、') }}</p>
                <p class="explanation">{{ zodiac.compatibleExplanation }}</p>
              </div>
              
              <div class="naming-principles">
                <h4>Naming Principles (取名原则)</h4>
                <ul>
                  <li v-for="(principle, i) in zodiac.namingPrinciples" :key="i">{{ principle }}</li>
                </ul>
              </div>
              
              <div class="example-names">
                <h4>Name Examples (名字示例)</h4>
                <div class="name-examples">
                  <div class="name-group">
                    <h5>Boys (男孩)</h5>
                    <ul>
                      <li v-for="(name, i) in zodiac.maleNames" :key="i">
                        <span class="name">{{ name.characters }}</span>
                        <span class="pinyin">{{ name.pinyin }}</span>
                        <span class="meaning">{{ name.meaning }}</span>
                      </li>
                    </ul>
                  </div>
                  <div class="name-group">
                    <h5>Girls (女孩)</h5>
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
          <h2 class="section-title">Importance of Zodiac Compatibility (生肖属相相配的重要性)</h2>
          <div class="content-block">
            <p>When naming a child, considering the compatibility between zodiac sign and surname has the following significance:</p>
            <ol>
              <li><strong>Cultural Inheritance (文化传承)</strong>: Following traditional naming culture, inheriting the essence of Chinese civilization.</li>
              <li><strong>Harmonious Coexistence (和谐共生)</strong>: Pursuing the concept of harmony between humans and nature, individuals and society.</li>
              <li><strong>Psychological Suggestion (心理暗示)</strong>: Good name matching can bring positive psychological suggestions and confidence.</li>
              <li><strong>Distinctive Characteristics (特色独特)</strong>: Naming based on zodiac characteristics makes the name more personal and culturally meaningful.</li>
            </ol>
            <p class="note">
              It should be noted that zodiac compatibility theory originates from folk culture, not scientific theory. In modern society, naming should focus more on the practicality, aesthetics, and positive impact on a child's growth, viewing traditional culture as a reference rather than an absolute rule.
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
          compatibleExplanation: 'People born in the Year of the Rat are suitable for surnames with Water or Wood elements, which can enhance the flexible and clever characteristics of the Rat, achieving a mutually beneficial effect.',
          namingPrinciples: [
            'It is advisable to use characters with "氵", "冫", "水" and other water-related components, such as: 洋 (yang), 清 (qing), 润 (run), 泽 (ze), etc.',
            'It is advisable to use characters with "艹", "木", "林" and other wood-related components, reflecting the mutual generation of Wood producing Water in the Five Elements theory',
            'Avoid using characters related to natural enemies such as "猫" (cat), "蛇" (snake), etc.',
            'Names with components like "智" (wisdom), "灵" (clever), "慧" (intelligent) are suitable, symbolizing intelligence and cleverness'
          ],
          maleNames: [
            { characters: '智远', pinyin: 'Zhì Yuǎn', meaning: 'Intelligent and wise, with foresight' },
            { characters: '泽宇', pinyin: 'Zé Yǔ', meaning: 'Grace as vast as the universe' },
            { characters: '哲瀚', pinyin: 'Zhé Hàn', meaning: 'Philosophical wisdom as deep as the sea' }
          ],
          femaleNames: [
            { characters: '灵秀', pinyin: 'Líng Xiù', meaning: 'Clever and elegant' },
            { characters: '慧莲', pinyin: 'Huì Lián', meaning: 'Intelligent, pure as a lotus' },
            { characters: '雨婷', pinyin: 'Yǔ Tíng', meaning: 'Beautiful as rain, gracefully standing' }
          ]
        },
        {
          name: '牛',
          englishName: 'Ox',
          element: '土',
          compatibleSurnames: ['张', '刘', '陈', '杨', '黄', '赵', '吴', '周'],
          compatibleExplanation: 'People born in the Year of the Ox are suitable for surnames with Earth or Metal elements, which can enhance the solid and diligent characteristics of the Ox, achieving a mutually beneficial effect.',
          namingPrinciples: [
            'It is advisable to use characters with "土", "田", "阜" and other earth-related components, such as: 坤 (kun), 坚 (jian), 培 (pei), 岩 (yan), etc.',
            'It is advisable to use characters with "金", "钅" and other metal-related components, reflecting the mutual generation of Metal producing Earth in the Five Elements theory',
            'Avoid using characters related to conflicting animals such as "虎" (tiger), etc.',
            'Names with components like "勤" (diligent), "德" (virtue), "诚" (honest) are suitable, symbolizing diligence and honesty'
          ],
          maleNames: [
            { characters: '铸鼎', pinyin: 'Zhù Dǐng', meaning: 'As strong and solid as cast tripods' },
            { characters: '耕德', pinyin: 'Gēng Dé', meaning: 'Cultivating diligently, of high virtue' },
            { characters: '坚毅', pinyin: 'Jiān Yì', meaning: 'Firm and resolute, unyielding' }
          ],
          femaleNames: [
            { characters: '琼瑶', pinyin: 'Qióng Yáo', meaning: 'As precious and pure as beautiful jade' },
            { characters: '嘉励', pinyin: 'Jiā Lì', meaning: 'Excellence and encouragement, constantly improving' },
            { characters: '恬静', pinyin: 'Tián Jìng', meaning: 'Serene and quiet, mild and elegant' }
          ]
        },
        {
          name: '虎',
          englishName: 'Tiger',
          element: '木',
          compatibleSurnames: ['李', '杨', '吴', '刘', '陈', '郑', '孙', '高'],
          compatibleExplanation: 'People born in the Year of the Tiger are suitable for surnames with Wood or Fire elements, which can enhance the brave and majestic characteristics of the Tiger, achieving a mutually beneficial effect.',
          namingPrinciples: [
            'It is advisable to use characters with "木", "林", "艹" and other wood-related components, such as: 森 (sen), 林 (lin), 茂 (mao), 华 (hua), etc.',
            'It is advisable to use characters with "火", "灬" and other fire-related components, reflecting the mutual generation of Wood producing Fire in the Five Elements theory',
            'Avoid using characters related to conflicting animals such as "猴" (monkey), etc.',
            'Names with components like "威" (might), "猛" (fierce), "力" (strength) are suitable, symbolizing might and power'
          ],
          maleNames: [
            { characters: '林彪', pinyin: 'Lín Biāo', meaning: 'Abundant as forests, swift as tigers' },
            { characters: '烨辉', pinyin: 'Yè Huī', meaning: 'Radiant and brilliant, splendid and luminous' },
            { characters: '涵柏', pinyin: 'Hán Bǎi', meaning: 'Broad and encompassing, as firm as cypress' }
          ],
          femaleNames: [
            { characters: '雅竹', pinyin: 'Yǎ Zhú', meaning: 'Elegant as bamboo, refined and upright' },
            { characters: '炎玉', pinyin: 'Yán Yù', meaning: 'Passionate as flames, pure as jade' },
            { characters: '菲华', pinyin: 'Fēi Huá', meaning: 'Fragrant and magnificent, outstanding in quality' }
          ]
        },
        {
          name: '兔',
          englishName: 'Rabbit',
          element: '木',
          compatibleSurnames: ['杨', '张', '王', '刘', '陈', '赵', '钱', '孙'],
          compatibleExplanation: 'People born in the Year of the Rabbit are suitable for surnames with Wood or Water elements, which can enhance the gentle and sensitive characteristics of the Rabbit, achieving a mutually beneficial effect.',
          namingPrinciples: [
            'It is advisable to use characters with "木", "林", "艹" and other wood-related components, such as: 柔 (rou), 樱 (ying), 苏 (su), 菲 (fei), etc.',
            'It is advisable to use characters with "氵", "冫", "水" and other water-related components, reflecting the mutual generation of Water producing Wood in the Five Elements theory',
            'Avoid using characters related to predators such as "鹰" (eagle), "狼" (wolf), etc.',
            'Names with components like "柔" (gentle), "雅" (elegant), "美" (beautiful) are suitable, symbolizing gentleness and elegance'
          ],
          maleNames: [
            { characters: '宸宇', pinyin: 'Chén Yǔ', meaning: 'Majestic as a palace, encompassing as the universe' },
            { characters: '君茂', pinyin: 'Jūn Mào', meaning: 'Noble as a lord, flourishing and prosperous' },
            { characters: '安和', pinyin: 'Ān Hé', meaning: 'Peaceful and harmonious, gentle and modest' }
          ],
          femaleNames: [
            { characters: '芷若', pinyin: 'Zhǐ Ruò', meaning: 'Fragrant as herbs, gentle as a breeze' },
            { characters: '琳琅', pinyin: 'Lín Láng', meaning: 'Beautiful jade treasures, beautiful and captivating' },
            { characters: '舒雅', pinyin: 'Shū Yǎ', meaning: 'Comfortable and natural, elegant and graceful' }
          ]
        },
        {
          name: '龙',
          englishName: 'Dragon',
          element: '土',
          compatibleSurnames: ['陈', '黄', '吴', '刘', '李', '赵', '孙', '周'],
          compatibleExplanation: 'People born in the Year of the Dragon are suitable for surnames with Earth or Fire elements, which can enhance the noble and majestic characteristics of the Dragon, achieving a mutually beneficial effect.',
          namingPrinciples: [
            'It is advisable to use characters with "土", "田", "阜" and other earth-related components, such as: 基 (ji), 坤 (kun), 峰 (feng), 岳 (yue), etc.',
            'It is advisable to use characters with "火", "灬" and other fire-related components, reflecting the mutual generation of Fire producing Earth in the Five Elements theory',
            'It is advisable to use characters with "龙" (dragon), "云" (cloud), "天" (sky) and other noble and prominent components',
            'Names with components like "威" (might), "宏" (grand), "嘉" (excellent) are suitable, symbolizing majesty and grandeur'
          ],
          maleNames: [
            { characters: '天翔', pinyin: 'Tiān Xiáng', meaning: 'Soaring in the sky, with lofty aspirations' },
            { characters: '嘉鸿', pinyin: 'Jiā Hóng', meaning: 'Excellent and auspicious, like a great wild goose spreading its wings' },
            { characters: '鸿运', pinyin: 'Hóng Yùn', meaning: 'Great and magnificent, with prosperous fortune' }
          ],
          femaleNames: [
            { characters: '瑾萱', pinyin: 'Jǐn Xuān', meaning: 'Precious as jade, warm as daylilies' },
            { characters: '凤仪', pinyin: 'Fèng Yí', meaning: 'Noble as a phoenix, with dignified bearing' },
            { characters: '熙雯', pinyin: 'Xī Wén', meaning: 'Bright and beautiful, refined and elegant' }
          ]
        },
        {
          name: '蛇',
          englishName: 'Snake',
          element: '火',
          compatibleSurnames: ['杨', '高', '赵', '钱', '孙', '李', '陈', '王'],
          compatibleExplanation: 'People born in the Year of the Snake are suitable for surnames with Fire or Earth elements, which can enhance the wisdom and acuity characteristics of the Snake, achieving a mutually beneficial effect.',
          namingPrinciples: [
            'It is advisable to use characters with "火", "灬" and other fire-related components, such as: 炫 (xuan), 煜 (yu), 炜 (wei), 焱 (yan), etc.',
            'It is advisable to use characters with "土", "田", "阜" and other earth-related components, reflecting the mutual generation of Earth producing Fire in the Five Elements theory',
            'Avoid using characters related to natural enemies such as "鹤" (crane), "猫" (cat), etc.',
            'Names with components like "智" (wisdom), "巧" (clever), "灵" (clever) are suitable, symbolizing wisdom and agility'
          ],
          maleNames: [
            { characters: '炎焱', pinyin: 'Yán Yàn', meaning: 'Raging flames, extraordinary presence' },
            { characters: '展鹏', pinyin: 'Zhǎn Péng', meaning: 'Spreading wings, like a great bird soaring' },
            { characters: '睿智', pinyin: 'Ruì Zhì', meaning: 'Wise and intelligent, with broad knowledge' }
          ],
          femaleNames: [
            { characters: '妙菡', pinyin: 'Miào Hàn', meaning: 'Wonderful and clever, beautiful as lotus' },
            { characters: '欣妍', pinyin: 'Xīn Yán', meaning: 'Joyful and beautiful, with a beautiful countenance' },
            { characters: '芊雅', pinyin: 'Qiān Yǎ', meaning: 'Luxuriant vegetation, elegant and refined' }
          ]
        },
        {
          name: '马',
          englishName: 'Horse',
          element: '火',
          compatibleSurnames: ['李', '刘', '赵', '钱', '孙', '杨', '高', '王'],
          compatibleExplanation: 'People born in the Year of the Horse are suitable for surnames with Fire or Wood elements, which can enhance the vitality and passion characteristics of the Horse, achieving a mutually beneficial effect.',
          namingPrinciples: [
            'It is advisable to use characters with "火", "灬" and other fire-related components, such as: 炎 (yan), 煌 (huang), 炫 (xuan), 晖 (hui), etc.',
            'It is advisable to use characters with "木", "林", "艹" and other wood-related components, reflecting the mutual generation of Wood producing Fire in the Five Elements theory',
            'Avoid using characters related to conflicting animals such as "鼠" (rat), etc.',
            'Names with components like "奔" (gallop), "驰" (race), "行" (travel) are suitable, symbolizing galloping vitality'
          ],
          maleNames: [
            { characters: '奔腾', pinyin: 'Bēn Téng', meaning: 'Galloping like a horse, powerful and magnificent' },
            { characters: '烨磊', pinyin: 'Yè Lěi', meaning: 'Radiant splendor, solid as stones' },
            { characters: '锋煜', pinyin: 'Fēng Yù', meaning: 'Sharp and prominent, bright and hot' }
          ],
          femaleNames: [
            { characters: '骊萱', pinyin: 'Lí Xuān', meaning: 'Black steed, warm as daylilies' },
            { characters: '梦驰', pinyin: 'Mèng Chí', meaning: 'Galloping in dreams, free-spirited' },
            { characters: '熙雅', pinyin: 'Xī Yǎ', meaning: 'Bright and beautiful, elegant and graceful' }
          ]
        },
        {
          name: '羊',
          englishName: 'Goat',
          element: '土',
          compatibleSurnames: ['张', '陈', '赵', '钱', '孙', '李', '周', '吴'],
          compatibleExplanation: 'People born in the Year of the Goat are suitable for surnames with Earth or Fire elements, which can enhance the gentle and kind characteristics of the Goat, achieving a mutually beneficial effect.',
          namingPrinciples: [
            'It is advisable to use characters with "土", "田", "阜" and other earth-related components, such as: 坤 (kun), 培 (pei), 岩 (yan), 壤 (rang), etc.',
            'It is advisable to use characters with "火", "灬" and other fire-related components, reflecting the mutual generation of Fire producing Earth in the Five Elements theory',
            'Avoid using characters related to natural enemies such as "虎" (tiger), "狼" (wolf), etc.',
            'Names with components like "美" (beautiful), "善" (kind), "优" (excellent) are suitable, symbolizing gentleness and elegance'
          ],
          maleNames: [
            { characters: '俊彦', pinyin: 'Jùn Yàn', meaning: 'Handsome and outstanding, talented in both appearance and ability' },
            { characters: '善和', pinyin: 'Shàn Hé', meaning: 'Kind and harmonious, amiable and approachable' },
            { characters: '煜祺', pinyin: 'Yù Qí', meaning: 'Bright radiance, auspicious and fortunate' }
          ],
          femaleNames: [
            { characters: '美琳', pinyin: 'Měi Lín', meaning: 'Beautiful and pretty, precious as jade' },
            { characters: '柔婷', pinyin: 'Róu Tíng', meaning: 'Gentle and soft, gracefully standing' },
            { characters: '雅萱', pinyin: 'Yǎ Xuān', meaning: 'Elegant and graceful, warm as daylilies' }
          ]
        },
        {
          name: '猴',
          englishName: 'Monkey',
          element: '金',
          compatibleSurnames: ['王', '高', '陈', '杨', '赵', '钱', '孙', '李'],
          compatibleExplanation: 'People born in the Year of the Monkey are suitable for surnames with Metal or Water elements, which can enhance the clever and agile characteristics of the Monkey, achieving a mutually beneficial effect.',
          namingPrinciples: [
            'It is advisable to use characters with "金", "钅" and other metal-related components, such as: 铭 (ming), 锐 (rui), 钧 (jun), 铮 (zheng), etc.',
            'It is advisable to use characters with "氵", "冫", "水" and other water-related components, reflecting the mutual generation of Metal producing Water in the Five Elements theory',
            'Avoid using characters related to conflicting animals such as "蛇" (snake), "虎" (tiger), etc.',
            'Names with components like "巧" (clever), "捷" (quick), "敏" (agile) are suitable, symbolizing cleverness and agility'
          ],
          maleNames: [
            { characters: '聪睿', pinyin: 'Cōng Ruì', meaning: 'Clever and intelligent, exceptionally wise' },
            { characters: '锐志', pinyin: 'Ruì Zhì', meaning: 'Sharp and determined, with strong will' },
            { characters: '金鑫', pinyin: 'Jīn Xīn', meaning: 'Shining gold, prosperous wealth' }
          ],
          femaleNames: [
            { characters: '巧琳', pinyin: 'Qiǎo Lín', meaning: 'Clever and ingenious, precious as jade' },
            { characters: '慧颖', pinyin: 'Huì Yǐng', meaning: 'Intelligent and perceptive, quick in response' },
            { characters: '瑾瑜', pinyin: 'Jǐn Yú', meaning: 'Precious and beautiful, like flawless jade' }
          ]
        },
        {
          name: '鸡',
          englishName: 'Rooster',
          element: '金',
          compatibleSurnames: ['陈', '杨', '黄', '赵', '钱', '孙', '李', '周'],
          compatibleExplanation: 'People born in the Year of the Rooster are suitable for surnames with Metal or Earth elements, which can enhance the diligent and confident characteristics of the Rooster, achieving a mutually beneficial effect.',
          namingPrinciples: [
            'It is advisable to use characters with "金", "钅" and other metal-related components, such as: 钟 (zhong), 铭 (ming), 锋 (feng), 铄 (shuo), etc.',
            'It is advisable to use characters with "土", "田", "阜" and other earth-related components, reflecting the mutual generation of Earth producing Metal in the Five Elements theory',
            'Avoid using characters related to natural enemies such as "狐" (fox), "狼" (wolf), etc.',
            'Names with components like "勤" (diligent), "晨" (morning), "明" (bright) are suitable, symbolizing early rising and diligence'
          ],
          maleNames: [
            { characters: '金鸣', pinyin: 'Jīn Míng', meaning: 'Gold abundance, widely known' },
            { characters: '晨阳', pinyin: 'Chén Yáng', meaning: 'Morning sunshine, full of vitality' },
            { characters: '铭志', pinyin: 'Míng Zhì', meaning: 'Inscribed in heart, with lofty aspirations' }
          ],
          femaleNames: [
            { characters: '曦瑶', pinyin: 'Xī Yáo', meaning: 'Rising sun, precious as jade' },
            { characters: '慧颖', pinyin: 'Huì Yǐng', meaning: 'Intelligent and perceptive, exceptionally talented' },
            { characters: '锦媛', pinyin: 'Jǐn Yuán', meaning: 'Splendid and beautiful, graceful and beautiful' }
          ]
        },
        {
          name: '狗',
          englishName: 'Dog',
          element: '土',
          compatibleSurnames: ['刘', '张', '周', '赵', '钱', '孙', '李', '王'],
          compatibleExplanation: 'People born in the Year of the Dog are suitable for surnames with Earth or Metal elements, which can enhance the loyal and reliable characteristics of the Dog, achieving a mutually beneficial effect.',
          namingPrinciples: [
            'It is advisable to use characters with "土", "田", "阜" and other earth-related components, such as: 均 (jun), 坚 (jian), 岗 (gang), 培 (pei), etc.',
            'It is advisable to use characters with "金", "钅" and other metal-related components, reflecting the Five Elements theory where Metal conquers Wood (enemies)',
            'Avoid using characters related to conflicting animals such as "兔" (rabbit), etc.',
            'Names with components like "忠" (loyal), "诚" (honest), "信" (trustworthy) are suitable, symbolizing loyalty and honesty'
          ],
          maleNames: [
            { characters: '忠毅', pinyin: 'Zhōng Yì', meaning: 'Loyal and resolute, strong and unyielding' },
            { characters: '信然', pinyin: 'Xìn Rán', meaning: 'Trustworthy and assured, calm and composed' },
            { characters: '铮诚', pinyin: 'Zhēng Chéng', meaning: 'Strong as iron, honest and reliable' }
          ],
          femaleNames: [
            { characters: '慧真', pinyin: 'Huì Zhēn', meaning: 'Intelligent and sincere, genuinely pure' },
            { characters: '依林', pinyin: 'Yī Lín', meaning: 'Gentle and dependent, sheltering like a forest' },
            { characters: '珺瑶', pinyin: 'Jùn Yáo', meaning: 'Good and precious, pure as beautiful jade' }
          ]
        },
        {
          name: '猪',
          englishName: 'Pig',
          element: '水',
          compatibleSurnames: ['张', '王', '赵', '钱', '孙', '李', '周', '吴'],
          compatibleExplanation: 'People born in the Year of the Pig are suitable for surnames with Water or Wood elements, which can enhance the kind and honest characteristics of the Pig, achieving a mutually beneficial effect.',
          namingPrinciples: [
            'It is advisable to use characters with "氵", "冫", "水" and other water-related components, such as: 涵 (han), 润 (run), 泽 (ze), 清 (qing), etc.',
            'It is advisable to use characters with "木", "林", "艹" and other wood-related components, reflecting the mutual generation of Water producing Wood in the Five Elements theory',
            'Avoid using characters related to conflicting animals such as "蛇" (snake), etc.',
            'Names with components like "福" (fortune), "安" (peace), "和" (harmony) are suitable, symbolizing wealth and harmony'
          ],
          maleNames: [
            { characters: '福泽', pinyin: 'Fú Zé', meaning: 'Fortune and blessing, widespread beneficence' },
            { characters: '安然', pinyin: 'Ān Rán', meaning: 'Peaceful and calm, composed and at ease' },
            { characters: '宏济', pinyin: 'Hóng Jì', meaning: 'Great and vast, helping the world and benefiting people' }
          ],
          femaleNames: [
            { characters: '雅琳', pinyin: 'Yǎ Lín', meaning: 'Elegant and graceful, precious as jade' },
            { characters: '安芮', pinyin: 'Ān Ruì', meaning: 'Peaceful and beautiful, like tender sprouts full of vitality' },
            { characters: '涵蕊', pinyin: 'Hán Ruǐ', meaning: 'Inclusive and nurturing, beautiful as flower buds' }
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