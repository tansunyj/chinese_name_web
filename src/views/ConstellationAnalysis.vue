<template>
  <div class="constellation-page">
    <div class="constellation-container">
      <div class="header">
        <h1>{{ t('constellation.title') }}</h1>
        <p>{{ t('constellation.subtitle') }}</p>
      </div>
      
      <div class="content">
        <div class="form-section">
          <form @submit.prevent="calculateConstellation">
            <div class="input-group">
              <label for="birthDate">{{ t('constellation.birthDate') }}</label>
              <input 
                type="date" 
                id="birthDate" 
                v-model="formData.birthDate" 
                required
                class="input-field"
              />
            </div>
            
            <div class="button-container">
              <button type="submit" class="submit-btn">
                <span v-if="isLoading">{{ t('common.loading') }}</span>
                <span v-else>{{ t('constellation.calculate') }}</span>
              </button>
            </div>
          </form>
        </div>
        
        <div v-if="results" class="results-section">
          <div class="results-header">
            <div class="zodiac-image">
              <img :src="getSignImage(results.sign)" :alt="results.sign" />
            </div>
            <div class="constellation-info">
              <h2 class="constellation-name">{{ getLocalizedSign(results.sign) }}</h2>
              <p class="date-range">{{ results.dateRange }}</p>
              <p class="guardian-star">{{ t('constellation.results.guardianStar') }}: {{ results.guardianStar }}</p>
              <p class="symbol-meaning">{{ t('constellation.results.symbolMeaning') }}: {{ results.symbolMeaning }}</p>
              <p class="element-badge" :class="`${results.element.toLowerCase()}`">{{ t(`constellation.elements.${results.element}`) }}</p>
            </div>
          </div>
          
          <div class="main-info">
            <div class="info-section">
              <h3 class="section-title">{{ t('constellation.results.traits') }}</h3>
              <div class="traits-container">
                <div v-for="(trait, index) in results.traits" :key="index" class="trait-tag">
                  {{ trait }}
                </div>
              </div>
            </div>
            
            <div class="strengths-weaknesses">
              <div class="column">
                <h4 class="column-title">{{ t('constellation.results.strengths') }}</h4>
                <ul>
                  <li v-for="(strength, index) in results.strengths" :key="index">{{ strength }}</li>
                </ul>
              </div>
              <div class="column">
                <h4 class="column-title">{{ t('constellation.results.weaknesses') }}</h4>
                <ul>
                  <li v-for="(weakness, index) in results.weaknesses" :key="index">{{ weakness }}</li>
                </ul>
              </div>
            </div>
            
            <div class="myth-section">
              <h3 class="section-title">{{ t('constellation.results.mythOrigin') }}</h3>
              <p class="myth-text">{{ results.mythOrigin }}</p>
            </div>
            
            <div class="naming-section">
              <h3 class="section-title">{{ t('constellation.results.namingTips') }}</h3>
              <p class="naming-tips">{{ results.namingTips }}</p>
              
              <div class="characters-grid">
                <div v-for="(character, index) in results.suggestedCharacters" :key="index" class="character-card">
                  <div class="character">{{ character.char }}</div>
                  <div class="pinyin">{{ character.pinyin }}</div>
                  <div class="char-meaning">{{ character.meaning }}</div>
                </div>
              </div>
            </div>
            
            <div class="famous-persons-section">
              <h3 class="section-title">{{ t('constellation.results.famousPersons') }}</h3>
              <div class="persons-list">
                <div v-for="(person, index) in results.famousPersons" :key="index" class="person-tag">
                  {{ person }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 预先导入所有星座图片
import AriesImg from '@/assets/images/constellations/Aries.png';
import TaurusImg from '@/assets/images/constellations/Taurus.png'; 
import GeminiImg from '@/assets/images/constellations/Gemini.png';
import CancerImg from '@/assets/images/constellations/Cancer.png';
import LeoImg from '@/assets/images/constellations/Leo.png';
import VirgoImg from '@/assets/images/constellations/Virgo.png';
import LibraImg from '@/assets/images/constellations/Libra.png';
import ScorpioImg from '@/assets/images/constellations/Scorpio.png';
import SagittariusImg from '@/assets/images/constellations/Sagittarius.png';
import CapricornImg from '@/assets/images/constellations/Capricorn.png';
import AquariusImg from '@/assets/images/constellations/Aquarius.png';
import PiscesImg from '@/assets/images/constellations/Pisc1es.png';
import { useI18n } from 'vue-i18n';

export default {
  name: 'ConstellationAnalysis',
  setup() {
    const { t, locale } = useI18n();
    return { t, locale };
  },
  data() {
    return {
      formData: {
        birthDate: '2000-01-01'
      },
      isLoading: false,
      results: null,
      // 将图片映射到每个星座名称
      constellationImages: {
        aries: AriesImg,
        taurus: TaurusImg,
        gemini: GeminiImg,
        cancer: CancerImg,
        leo: LeoImg,
        virgo: VirgoImg,
        libra: LibraImg,
        scorpio: ScorpioImg,
        sagittarius: SagittariusImg,
        capricorn: CapricornImg,
        aquarius: AquariusImg,
        pisces: PiscesImg
      }
    }
  },
  methods: {
    calculateConstellation() {
      this.isLoading = true;
      
      // 获取日期的月份和日期
      const birthDate = new Date(this.formData.birthDate);
      const month = birthDate.getMonth() + 1; // 月份从0开始
      const day = birthDate.getDate();
      
      // 确定星座
      const sign = this.getZodiacSign(month, day);
      
      // 模拟API调用
      setTimeout(() => {
        // 这里实际项目中应该从API获取数据
        this.results = this.getConstellationData(sign);
        this.isLoading = false;
      }, 1500);
    },
    
    getZodiacSign(month, day) {
      // 根据月日判断星座
      if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
        return 'aquarius';
      } else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
        return 'pisces';
      } else if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
        return 'aries';
      } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
        return 'taurus';
      } else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) {
        return 'gemini';
      } else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) {
        return 'cancer';
      } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
        return 'leo';
      } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
        return 'virgo';
      } else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) {
        return 'libra';
      } else if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) {
        return 'scorpio';
      } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
        return 'sagittarius';
      } else {
        return 'capricorn';
      }
    },
    
    getConstellationData(sign) {
      // 模拟数据，实际应从API获取
      const constellationData = {
        aries: {
          sign: 'aries',
          element: 'fire',
          dateRange: '3月21日 - 4月20日',
          guardianStar: '火星/象征能量与精力',
          symbolMeaning: '白羊座符号象征着新的开始，代表控制能量',
          luckyColor: '#FF3232',
          luckyColorName: '鲜红色',
          luckyNumber: '6、7',
          luckyStone: '紫水晶、钻石',
          luckyDay: '礼拜二',
          constellationFlower: '樱花、雏菊',
          flowerMeaning: '生命、幸福一生一世、暗恋',
          mythOrigin: '菲利塞斯是奈波勒之子，蒙上奸污碧雅蒂的不白之冤，而被判处死刑，临行之前一只金色的公羊及时将他和妹妹海一起背走。不幸的是，妹妹因不胜颠簸，一时眼花落下羊背，菲利塞斯则安然获救，他将公羊献给宙斯当祭礼，宙斯将它的形象化为天上的星座。后来杰生为了夺取这金羊的羊毛还展开了一段精彩的冒险故事。',
          traits: ['热情', '勇敢', '冲动', '领导力', '独立'],
          strengths: ['勇气', '决断力', '自信', '热情', '深爱自由', '企图心', '冒险精神'],
          weaknesses: ['冲动', '急躁', '自我中心', '不喜欢受到外界压抑'],
          compatibility: '天秤座、狮子座',
          namingTips: '白羊座的人适合有力量感和阳刚之气的名字，可选用带有"火、阳、力、勇"等字眼的字符。',
          suggestedCharacters: [
            { char: '阳', pinyin: 'Yáng', meaning: '太阳，积极，明亮' },
            { char: '烨', pinyin: 'Yè', meaning: '光明，闪耀' },
            { char: '强', pinyin: 'Qiáng', meaning: '强壮，有力' },
            { char: '勇', pinyin: 'Yǒng', meaning: '勇敢，无畏' }
          ],
          famousPersons: ['Robert Downey Jr.', 'Lady Gaga', 'Leonardo da Vinci', 'Emma Watson', 'Charlie Chaplin', 'Mariah Carey', 'Elton John', 'Kristen Stewart', 'Leona Lewis', 'Jackie Chan']
        },
        taurus: {
          sign: 'taurus',
          element: 'earth',
          dateRange: '4月21日 - 5月20日',
          guardianStar: '金星/象征爱与美的结合',
          symbolMeaning: '金牛座符号象征着力量，代表丰富能量',
          luckyColor: '#0000FF',
          luckyColorName: '蓝色',
          luckyNumber: '1、9',
          luckyStone: '蓝宝石',
          luckyDay: '礼拜五',
          constellationFlower: '牵牛花、康乃馨',
          flowerMeaning: '爱情永固、母爱、热情',
          mythOrigin: '传说素以风流著称的众神之王宙斯看上欧萝芭为了避开天后海的耳目，自己化身为白牛，将欧萝芭驮在背上，以随其所愿，事后宙斯又恢复原形将他的化身大公牛置于天上成为众星座之一。',
          traits: ['稳定', '忠诚', '实际', '固执', '感性'],
          strengths: ['耐心', '可靠', '善良', '对美的鉴赏力', '有主见', '意志坚定', '热情', '友善', '有责任感'],
          weaknesses: ['顽固', '不易改变', '占有欲'],
          compatibility: '处女座、摩羯座',
          namingTips: '金牛座的人适合沉稳、与大地相关的名字，可选用带有"土、安、稳、富"等字眼的字符。',
          suggestedCharacters: [
            { char: '安', pinyin: 'Ān', meaning: '平安，安宁' },
            { char: '稳', pinyin: 'Wěn', meaning: '稳重，可靠' },
            { char: '富', pinyin: 'Fù', meaning: '富有，富饶' },
            { char: '宁', pinyin: 'Níng', meaning: '宁静，和平' }
          ],
          famousPersons: ['Mark Zuckerberg', 'Adele', 'Dwayne Johnson', 'Penélope Cruz', 'George Clooney', 'Channing Tatum', 'David Beckham', 'Queen Elizabeth II', 'Jack Nicholson', 'Megan Fox']
        },
        gemini: {
          sign: 'gemini',
          element: 'air',
          dateRange: '5月21日 - 6月21日',
          guardianStar: '水星/象征心灵的交流',
          symbolMeaning: '双子座符号象征着智慧，代表掌握能量',
          luckyColor: '#C0C0C0',
          luckyColorName: '银色、灰色',
          luckyNumber: '3、4',
          luckyStone: '翠玉',
          luckyDay: '礼拜三',
          constellationFlower: '羊齿蕨、仙人掌、紫玫瑰',
          flowerMeaning: '勤劳、愉快、将爱进行到底、爱做梦',
          mythOrigin: '丽达王妃生了许多孩子其中有一对长相几乎一模一样的兄弟，哥哥是王妃与天神宙斯所生，弟弟是她与巴斯达国王所生，虽同母异父两人却非常要好。有一天，希腊遭一只巨大的野猪袭击，王子带着勇士打败了它，勇士却为争功结仇，而后在勇士之间的打斗中弟弟被杀身亡，身为神的哥哥痛不欲生便求父亲宙斯让弟弟复生，宙斯同意了，不过要把哥哥剩余的生命分给弟弟，哥哥答应了，从此两兄弟又一起快乐的生活了。',
          traits: ['好奇', '适应性强', '多变', '智慧', '交际'],
          strengths: ['沟通能力', '适应力', '智慧', '思考力', '机智', '敏捷', '活泼健谈', '多才多艺'],
          weaknesses: ['多变', '焦虑', '优柔寡断', '了解不深刻'],
          compatibility: '水瓶座、天秤座',
          namingTips: '双子座的人适合灵活、聪明的名字，可选用带有"双、巧、智、言"等字眼的字符。',
          suggestedCharacters: [
            { char: '巧', pinyin: 'Qiǎo', meaning: '灵巧，聪明' },
            { char: '智', pinyin: 'Zhì', meaning: '智慧，聪明' },
            { char: '文', pinyin: 'Wén', meaning: '文化，文学' },
            { char: '言', pinyin: 'Yán', meaning: '言语，表达' }
          ],
          famousPersons: ['Angelina Jolie', 'Morgan Freeman', 'Johnny Depp', 'Kanye West', 'Marilyn Monroe', 'Chris Evans', 'Nicole Kidman', 'Tom Holland', 'Natalie Portman', 'Colin Farrell']
        },
        cancer: {
          sign: 'cancer',
          element: 'water',
          dateRange: '6月22日 - 7月22日',
          guardianStar: '月亮/象征情绪和感觉',
          symbolMeaning: '巨蟹座符号象征着坚强，代表热情能量',
          luckyColor: '#C0C0C0',
          luckyColorName: '银色、白色',
          luckyNumber: '8、3',
          luckyStone: '珍珠和月长石',
          luckyDay: '礼拜五',
          constellationFlower: '昙花、百合、夜来香',
          flowerMeaning: '一瞬即永恒、纯洁的心、清纯、心心相印、美好',
          mythOrigin: '赫五力是宙斯与凡人生的儿子，他是希腊最伟大的英雄，世间最壮的人。天后希拉几次三番要置他于死地，曾派出一只巨大的螃蟹阻碍赫五力，但被赫五力杀死，巨蟹不顾一切的牺牲，让希拉心有戚戚，为了感谢它便把它置于天上，就成了巨蟹座。巨蟹座最早脱胎于巴比伦的传说。',
          traits: ['敏感', '情感丰富', '有保护欲', '直觉强', '记忆力好'],
          strengths: ['想象力', '忠诚', '同情心', '理财能力', '善良', '热心', '敏感', '领悟力好', '适应力佳'],
          weaknesses: ['情绪化', '多愁善感', '控制欲', '外表时常冷漠'],
          compatibility: '天蝎座、双鱼座',
          namingTips: '巨蟹座的人适合温柔、与水相关的名字，可选用带有"水、柔、情、爱"等字眼的字符。',
          suggestedCharacters: [
            { char: '柔', pinyin: 'Róu', meaning: '柔和，温柔' },
            { char: '情', pinyin: 'Qíng', meaning: '感情，情意' },
            { char: '爱', pinyin: 'Ài', meaning: '爱心，爱护' },
            { char: '月', pinyin: 'Yuè', meaning: '月亮，温柔' }
          ],
          famousPersons: ['Tom Hanks', 'Meryl Streep', 'Elon Musk', 'Selena Gomez', 'Tom Cruise', 'Princess Diana', 'Post Malone', 'Ariana Grande', 'Kevin Hart', 'Sylvester Stallone']
        },
        leo: {
          sign: 'leo',
          element: 'fire',
          dateRange: '7月23日 - 8月22日',
          guardianStar: '太阳/象征热情和活力',
          symbolMeaning: '狮子座符号象征着权力，代表清醒能量',
          luckyColor: '#FFA500',
          luckyColorName: '金色、橘色',
          luckyNumber: '5、9',
          luckyStone: '红宝石',
          luckyDay: '礼拜日',
          constellationFlower: '向日葵、金盏花',
          flowerMeaning: '沉默的爱、爱慕、悲伤嫉妒、离别之痛',
          mythOrigin: '传说中和这星座有关的是位于希腊之米安谷地的一头狮子，在一次搏斗中被海克利斯杀死。',
          traits: ['自信', '慷慨', '忠诚', '热情', '有领导力'],
          strengths: ['创新能力', '热心', '慷慨', '有领导力', '博爱', '慷慨', '思想开阔'],
          weaknesses: ['骄傲', '专横', '虚荣', '容易虚荣和骄傲'],
          compatibility: '射手座、白羊座',
          namingTips: '狮子座的人适合阳光、与太阳相关的名字，可选用带有"日、光、辉、耀"等字眼的字符。',
          suggestedCharacters: [
            { char: '辉', pinyin: 'Huī', meaning: '光辉，辉煌' },
            { char: '耀', pinyin: 'Yào', meaning: '光耀，闪耀' },
            { char: '伟', pinyin: 'Wěi', meaning: '伟大，高大' },
            { char: '明', pinyin: 'Míng', meaning: '明亮，光明' }
          ],
          famousPersons: ['Barack Obama', 'Jennifer Lopez', 'Daniel Radcliffe', 'Mick Jagger', 'Sandra Bullock', 'Arnold Schwarzenegger', 'Madonna', 'Kylie Jenner', 'Roger Federer', 'Jennifer Lawrence']
        },
        virgo: {
          sign: 'virgo',
          element: 'earth',
          dateRange: '8月23日 - 9月22日',
          guardianStar: '水星/象征知性和工作',
          symbolMeaning: '处女座符号象征着美丽，代表分析能量',
          luckyColor: '#808080',
          luckyColorName: '灰色',
          luckyNumber: '8、4',
          luckyStone: '红缟玛瑙',
          luckyDay: '礼拜三',
          constellationFlower: '紫薇、葱兰、文心兰',
          flowerMeaning: '沉迷的爱、好运、初恋、快乐无忧',
          mythOrigin: '根据罗马神话，处女座又名艾思翠诗，为天神邾比特和希蜜丝女神的女儿，是正义女神。黄金时代末期，人类触犯了她，于是大怒之下回到天庭。',
          traits: ['谦虚', '实际', '细心', '分析能力强', '完美主义'],
          strengths: ['分析力', '整洁', '勤劳', '可靠', '谦虚', '喜欢整洁', '处事小心', '头脑清晰'],
          weaknesses: ['挑剔', '过度批评', '忧虑', '追求完美'],
          compatibility: '摩羯座、金牛座',
          namingTips: '处女座的人适合优雅、与纯洁相关的名字，可选用带有"洁、净、雅、秀"等字眼的字符。',
          suggestedCharacters: [
            { char: '洁', pinyin: 'Jié', meaning: '洁净，纯洁' },
            { char: '雅', pinyin: 'Yǎ', meaning: '优雅，高雅' },
            { char: '秀', pinyin: 'Xiù', meaning: '秀美，秀丽' },
            { char: '珊', pinyin: 'Shān', meaning: '珊瑚，美好' }
          ],
          famousPersons: ['Michael Jackson', 'Beyoncé', 'Keanu Reeves', 'Blake Lively', 'Zendaya', 'Adam Sandler', 'Cameron Diaz', 'Idris Elba', 'Kobe Bryant', 'Chris Pine']
        },
        libra: {
          sign: 'libra',
          element: 'air',
          dateRange: '9月23日 - 10月23日',
          guardianStar: '金星/象征爱与美的结合',
          symbolMeaning: '天秤座符号象征着平衡，代表衡量能量',
          luckyColor: '#1E90FF',
          luckyColorName: '青蓝色',
          luckyNumber: '6、9',
          luckyStone: '贵橄榄石',
          luckyDay: '礼拜五',
          constellationFlower: '非洲菊、猫尾花、海芋',
          flowerMeaning: '互敬互爱、努力、简单',
          mythOrigin: '是希腊女祭司手中那个掌管善恶的天秤飞到天上变成的。大约西元前2000年此星座和巴比伦宗教主宰生死的审判有关，天秤是用来衡量灵魂的善恶之用。',
          traits: ['公平', '社交', '优雅', '和谐', '浪漫'],
          strengths: ['交际能力', '公正', '对美的追求', '和平', '外形高雅', '善于交际', '平易近人', '注重罗曼蒂克'],
          weaknesses: ['优柔寡断', '逃避冲突', '依赖他人', '公平没有标准'],
          compatibility: '水瓶座、双子座',
          namingTips: '天秤座的人适合优雅、与平衡相关的名字，可选用带有"平、和、美、雅"等字眼的字符。',
          suggestedCharacters: [
            { char: '和', pinyin: 'Hé', meaning: '和平，和谐' },
            { char: '雅', pinyin: 'Yǎ', meaning: '优雅，高雅' },
            { char: '美', pinyin: 'Měi', meaning: '美丽，美好' },
            { char: '静', pinyin: 'Jìng', meaning: '安静，和平' }
          ],
          famousPersons: ['Kim Kardashian', 'Hugh Jackman', 'Will Smith', 'Gwyneth Paltrow', 'Eminem', 'Cardi B', 'Bruno Mars', 'Zac Efron', 'Simon Cowell', 'Bella Hadid']
        },
        scorpio: {
          sign: 'scorpio',
          element: 'water',
          dateRange: '10月24日 - 11月22日',
          guardianStar: '冥王星/象征着转变',
          symbolMeaning: '天蝎座符号象征着神秘，代表直觉能量',
          luckyColor: '#8B0000',
          luckyColorName: '暗红色',
          luckyNumber: '3、5',
          luckyStone: '黄玉',
          luckyDay: '礼拜二',
          constellationFlower: '剑兰、文竹',
          flowerMeaning: '怀念之情、用心、永远不变',
          mythOrigin: '天后朱娜命天蝎从阴暗的地底爬出来，攻击欧立安（戴安娜所钟情的猎人，后来化为猎户座）。另外一次，天蝎施放毒气攻击正驾着太阳神马车经过的菲顿，而使丘比特有机会发射雷电，将奔跑中的太阳车击毁。',
          traits: ['神秘', '热情', '精力充沛', '固执', '直觉'],
          strengths: ['决断力', '勇气', '专注', '洞察力', '有谋略', '富洞悉事物重点的能力', '果决', '实际'],
          weaknesses: ['嫉妒', '多疑', '记仇', '多变', '焦虑'],
          compatibility: '巨蟹座、双鱼座',
          namingTips: '天蝎座的人适合深邃、与变化相关的名字，可选用带有"玄、深、变、智"等字眼的字符。',
          suggestedCharacters: [
            { char: '玄', pinyin: 'Xuán', meaning: '深远，神秘' },
            { char: '深', pinyin: 'Shēn', meaning: '深刻，深厚' },
            { char: '谋', pinyin: 'Móu', meaning: '谋略，计划' },
            { char: '锐', pinyin: 'Ruì', meaning: '锐利，敏锐' }
          ],
          famousPersons: ['Leonardo DiCaprio', 'Bill Gates', 'Scarlett Johansson', 'Ryan Gosling', 'Julia Roberts', 'Drake', 'Anne Hathaway', 'Matthew McConaughey', 'Katy Perry', 'Ryan Reynolds']
        },
        sagittarius: {
          sign: 'sagittarius',
          element: 'fire',
          traits: ['乐观', '自由', '诚实', '冒险', '哲学'],
          strengths: ['乐观', '思想开明', '幽默', '直率'],
          weaknesses: ['冒失', '缺乏耐心', '许下无法实现的承诺'],
          compatibility: '白羊座、狮子座',
          namingTips: '射手座的人适合开朗、与自由相关的名字，可选用带有"远、飞、志、博"等字眼的字符。',
          suggestedCharacters: [
            { char: '远', pinyin: 'Yuǎn', meaning: '远大，长远' },
            { char: '飞', pinyin: 'Fēi', meaning: '飞翔，自由' },
            { char: '志', pinyin: 'Zhì', meaning: '志向，抱负' },
            { char: '博', pinyin: 'Bó', meaning: '博大，广博' }
          ],
          famousPersons: ['Brad Pitt', 'Taylor Swift', 'Bruce Lee', 'Miley Cyrus', 'Ben Stiller', 'Nicki Minaj', 'Britney Spears', 'Steven Spielberg', 'DJ Khaled', 'Jake Gyllenhaal']
        },
        capricorn: {
          sign: 'capricorn',
          element: 'earth',
          traits: ['务实', '有耐心', '谨慎', '有野心', '自律'],
          strengths: ['责任感', '纪律', '自控力', '管理能力'],
          weaknesses: ['固执', '悲观', '吝啬'],
          compatibility: '金牛座、处女座',
          namingTips: '摩羯座的人适合稳重、与成就相关的名字，可选用带有"德、成、稳、业"等字眼的字符。',
          suggestedCharacters: [
            { char: '德', pinyin: 'Dé', meaning: '道德，品德' },
            { char: '成', pinyin: 'Chéng', meaning: '成功，成就' },
            { char: '业', pinyin: 'Yè', meaning: '事业，成就' },
            { char: '恒', pinyin: 'Héng', meaning: '恒久，持续' }
          ],
          famousPersons: ['Jim Carrey', 'Muhammad Ali', 'Denzel Washington', 'Kate Middleton', 'Eddie Redmayne', 'Gayle King', 'Kevin Costner', 'Dolly Parton', 'Jude Law', 'LeBron James']
        },
        aquarius: {
          sign: 'aquarius',
          element: 'air',
          traits: ['独立', '创新', '人道主义', '理性', '友善'],
          strengths: ['独创性', '智慧', '博爱', '忠诚'],
          weaknesses: ['叛逆', '固执己见', '感情疏离'],
          compatibility: '双子座、天秤座',
          namingTips: '水瓶座的人适合创新、与科技相关的名字，可选用带有"新、智、思、维"等字眼的字符。',
          suggestedCharacters: [
            { char: '新', pinyin: 'Xīn', meaning: '创新，新颖' },
            { char: '智', pinyin: 'Zhì', meaning: '智慧，智能' },
            { char: '思', pinyin: 'Sī', meaning: '思考，思维' },
            { char: '维', pinyin: 'Wéi', meaning: '维度，思维' }
          ],
          famousPersons: ['Cristiano Ronaldo', 'Oprah Winfrey', 'Harry Styles', 'Jennifer Aniston', 'Ellen DeGeneres', 'Justin Timberlake', 'Shakira', 'Alicia Keys', 'John Travolta', 'Ed Sheeran']
        },
        pisces: {
          sign: 'pisces',
          element: 'water',
          traits: ['富有同情心', '直觉', '艺术', '适应力强', '理想主义'],
          strengths: ['创造力', '同情心', '温柔', '智慧'],
          weaknesses: ['逃避现实', '过度情感化', '自我牺牲'],
          compatibility: '天蝎座、巨蟹座',
          namingTips: '双鱼座的人适合温柔、与艺术相关的名字，可选用带有"艺、梦、幻、诗"等字眼的字符。',
          suggestedCharacters: [
            { char: '艺', pinyin: 'Yì', meaning: '艺术，技艺' },
            { char: '梦', pinyin: 'Mèng', meaning: '梦想，幻想' },
            { char: '诗', pinyin: 'Shī', meaning: '诗歌，诗意' },
            { char: '灵', pinyin: 'Líng', meaning: '灵性，灵气' }
          ],
          famousPersons: ['Justin Bieber', 'Rihanna', 'Albert Einstein', 'Steve Jobs', 'Millie Bobby Brown', 'Daniel Craig', 'Eva Mendes', 'Adam Levine', 'Bruce Willis', 'Drew Barrymore']
        }
      };
      
      return constellationData[sign] || constellationData.aries;
    },
    
    getSignImage(sign) {
      // 从映射表中直接返回预导入的图片
      return this.constellationImages[sign.toLowerCase()] || '';
    },
    
    getLocalizedSign(sign) {
      return this.t(`constellation.signs.${sign}`);
    },
    
    getLocalizedElement(element) {
      return this.t(`constellation.elements.${element}`);
    }
  }
}
</script>

<style scoped>
.constellation-page {
  padding: 80px 0 60px;
  min-height: 100vh;
  background-color: #f8f9fa;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  position: relative;
  overflow: hidden;
}

.constellation-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f8f9fb;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.header {
  text-align: center;
  margin-bottom: 30px;
}

.header h1 {
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 10px;
  font-weight: 600;
}

.header p {
  font-size: 1.1rem;
  color: #666;
  max-width: 700px;
  margin: 0 auto;
}

.content {
  display: flex;
  flex-direction: column;
  gap: 25px;
}

.form-section {
  background-color: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  margin-bottom: 30px;
}

.form-title {
  font-size: 1.5rem;
  margin-bottom: 20px;
  color: #444;
  font-weight: 500;
}

.input-group {
  margin-bottom: 20px;
}

.input-group label {
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
  color: #555;
}

.input-field {
  width: 100%;
  padding: 12px 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  transition: border 0.3s ease;
}

.input-field:focus {
  border-color: #e60012;
  outline: none;
  box-shadow: 0 0 0 2px rgba(230, 0, 18, 0.2);
}

.button-container {
  width: 100%;
  margin-top: 15px;
}

.submit-btn {
  background-color: #e60012;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 12px 25px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 500;
  width: 100%;
  display: block;
}

.submit-btn:hover {
  background-color: #d00010;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.submit-btn:active {
  transform: translateY(0);
}

.loading {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
}

.results-section {
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  animation: fadeIn 0.5s ease-in-out;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

.results-header {
  background-color: #fef6f6;
  padding: 25px 30px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #f8e0e0;
}

.zodiac-image {
  width: 280px;
  height: 280px;
  border-radius: 10px;
  object-fit: contain;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  background-color: #fef6f6;
  padding: 10px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.zodiac-image:hover {
  transform: scale(1.02);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
}

.constellation-info {
  margin-left: 30px;
  flex: 1;
}

.constellation-name {
  font-size: 2.2rem;
  color: #333;
  margin-bottom: 5px;
  font-weight: 600;
}

.date-range {
  font-size: 1.1rem;
  color: #666;
  margin-bottom: 15px;
}

.guardian-star, .symbol-meaning {
  font-size: 1rem;
  color: #555;
  margin-bottom: 10px;
  line-height: 1.5;
}

.element-badge {
  display: inline-block;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
  margin-bottom: 15px;
}

.fire {
  background-color: rgba(255, 99, 71, 0.15);
  color: #ff5a49;
}

.earth {
  background-color: rgba(76, 175, 80, 0.15);
  color: #43a047;
}

.air {
  background-color: rgba(79, 195, 247, 0.15);
  color: #29b6f6;
}

.water {
  background-color: rgba(41, 121, 255, 0.15);
  color: #2979ff;
}

.lucky-info {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
  margin-top: 20px;
}

.lucky-item {
  display: flex;
  align-items: center;
  font-size: 0.95rem;
  color: #666;
}

.lucky-item-label {
  font-weight: 500;
  margin-right: 10px;
  color: #444;
}

.color-sample {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: inline-block;
  margin-right: 10px;
  border: 1px solid rgba(0, 0, 0, 0.1);
}

.main-info {
  padding: 30px;
}

.info-section {
  margin-bottom: 30px;
}

.section-title {
  font-size: 1.3rem;
  color: #444;
  margin-bottom: 15px;
  font-weight: 500;
  position: relative;
  padding-left: 15px;
}

.section-title::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 5px;
  height: 20px;
  background-color: #e60012;
  border-radius: 3px;
}

.traits-container {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 20px;
}

.trait-tag {
  background-color: #fef0f0;
  color: #e60012;
  border: 1px solid #f9d7d7;
  border-radius: 20px;
  padding: 8px 16px;
  font-size: 0.95rem;
  transition: all 0.3s ease;
}

.trait-tag:hover {
  background-color: #fae0e0;
  transform: translateY(-2px);
}

.strengths-weaknesses {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 25px;
}

.column-title {
  font-size: 1.1rem;
  color: #444;
  margin-bottom: 15px;
  font-weight: 500;
}

.column {
  background-color: #f9fafc;
  border-radius: 10px;
  padding: 20px;
}

.strengths-column {
  border-left: 3px solid #43a047;
}

.weaknesses-column {
  border-left: 3px solid #ff5a49;
}

.column ul {
  padding-left: 20px;
  margin: 0;
}

.column li {
  margin-bottom: 8px;
  color: #555;
  line-height: 1.5;
}

.compatibility-section {
  margin-top: 15px;
}

.compatibility-text {
  font-size: 1rem;
  color: #555;
  line-height: 1.5;
}

.myth-section {
  background-color: #f9fafc;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 30px;
}

.myth-text {
  color: #555;
  line-height: 1.6;
  text-align: justify;
}

.naming-section {
  background-color: #fef6f6;
  border-radius: 10px;
  padding: 25px;
  margin-bottom: 30px;
  position: relative;
  overflow: hidden;
}

.naming-section::before {
  content: '命';
  position: absolute;
  right: -15px;
  top: -30px;
  font-size: 9rem;
  opacity: 0.05;
  color: #e60012;
  font-weight: bold;
}

.naming-tips {
  color: #555;
  line-height: 1.6;
  margin-bottom: 20px;
}

.characters-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 15px;
}

.character-card {
  background-color: white;
  border-radius: 8px;
  padding: 15px;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.character-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  border: 1px solid #f9d7d7;
}

.character {
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 5px;
}

.pinyin {
  font-size: 0.9rem;
  color: #777;
  margin-bottom: 8px;
}

.char-meaning {
  font-size: 0.85rem;
  color: #666;
  line-height: 1.4;
}

.famous-persons-section {
  margin-top: 30px;
}

.persons-list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.person-tag {
  background-color: #fef6f6;
  color: #666;
  border: 1px solid #f9d7d7;
  border-radius: 20px;
  padding: 8px 16px;
  font-size: 0.9rem;
  transition: all 0.3s ease;
}

.person-tag:hover {
  background-color: #fae0e0;
  color: #444;
  transform: translateY(-2px);
}

/* 移动端适配 */
@media (max-width: 768px) {
  .results-header {
    flex-direction: column;
    text-align: center;
  }
  
  .zodiac-image {
    width: 220px;
    height: 220px;
    margin-bottom: 20px;
  }
  
  .constellation-info {
    margin-left: 0;
  }
  
  .strengths-weaknesses {
    grid-template-columns: 1fr;
  }
  
  .characters-grid {
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  }
}

@media (max-width: 480px) {
  .lucky-info {
    grid-template-columns: 1fr;
  }
  
  .zodiac-image {
    width: 180px;
    height: 180px;
  }
  
  .constellation-name {
    font-size: 1.8rem;
  }
  
  .characters-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style> 