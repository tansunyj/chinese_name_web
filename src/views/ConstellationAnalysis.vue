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
    // 确保使用英文
    locale.value = 'en';
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
          dateRange: 'March 21 - April 20',
          guardianStar: 'Mars / Symbolizes energy and vitality',
          symbolMeaning: 'The Aries symbol represents new beginnings and energy control',
          luckyColor: '#FF3232',
          luckyColorName: 'Bright Red',
          luckyNumber: '6, 7',
          luckyStone: 'Amethyst, Diamond',
          luckyDay: 'Tuesday',
          constellationFlower: 'Cherry Blossom, Daisy',
          flowerMeaning: 'Life, Happiness Forever, Secret Love',
          mythOrigin: 'Phrixus, son of Athamas, was falsely accused of assaulting Biadice and sentenced to death. Before execution, a golden ram carried him and his sister Helle away. Unfortunately, his sister became dizzy and fell, but Phrixus was safely rescued. He sacrificed the ram to Zeus, who placed its image among the stars. Later, Jason undertook an exciting adventure to obtain the Golden Fleece.',
          traits: ['Enthusiastic', 'Brave', 'Impulsive', 'Leadership', 'Independent'],
          strengths: ['Courage', 'Decisiveness', 'Confidence', 'Enthusiasm', 'Love of Freedom', 'Ambition', 'Adventurous Spirit'],
          weaknesses: ['Impulsiveness', 'Impatience', 'Self-centered', 'Dislikes External Pressure'],
          compatibility: 'Libra, Leo',
          namingTips: "People born under Aries suit names with strength and masculine energy. Characters with meanings related to 'fire, sun, strength, courage' are recommended.",
          suggestedCharacters: [
            { char: '阳', pinyin: 'Yáng', meaning: 'Sun, Positive, Bright' },
            { char: '烨', pinyin: 'Yè', meaning: 'Brilliant, Radiant' },
            { char: '强', pinyin: 'Qiáng', meaning: 'Strong, Powerful' },
            { char: '勇', pinyin: 'Yǒng', meaning: 'Brave, Fearless' }
          ],
          famousPersons: ['Robert Downey Jr.', 'Lady Gaga', 'Leonardo da Vinci', 'Emma Watson', 'Charlie Chaplin', 'Mariah Carey', 'Elton John', 'Kristen Stewart', 'Leona Lewis', 'Jackie Chan']
        },
        taurus: {
          sign: 'taurus',
          element: 'earth',
          dateRange: 'April 21 - May 20',
          guardianStar: 'Venus / Symbolizes the union of love and beauty',
          symbolMeaning: 'The Taurus symbol represents strength and abundant energy',
          luckyColor: '#0000FF',
          luckyColorName: 'Blue',
          luckyNumber: '1, 9',
          luckyStone: 'Sapphire',
          luckyDay: 'Friday',
          constellationFlower: 'Morning Glory, Carnation',
          flowerMeaning: 'Eternal Love, Maternal Love, Passion',
          mythOrigin: 'Legend has it that Zeus, known for his romantic pursuits, transformed himself into a white bull to avoid his wife Hera\'s detection when pursuing Europa. He carried Europa on his back, and later restored his original form. Zeus then placed his bull form in the sky, creating the constellation.',
          traits: ['Stable', 'Loyal', 'Practical', 'Stubborn', 'Sensual'],
          strengths: ['Patience', 'Reliability', 'Kindness', 'Appreciation for Beauty', 'Strong-willed', 'Determination', 'Enthusiasm', 'Friendliness', 'Responsibility'],
          weaknesses: ['Stubbornness', 'Resistance to Change', 'Possessiveness'],
          compatibility: 'Virgo, Capricorn',
          namingTips: "Taurus individuals suit steady names related to earth. Characters with meanings related to 'earth, peace, stability, wealth' are recommended.",
          suggestedCharacters: [
            { char: '安', pinyin: 'Ān', meaning: 'Peace, Tranquility' },
            { char: '稳', pinyin: 'Wěn', meaning: 'Steady, Reliable' },
            { char: '富', pinyin: 'Fù', meaning: 'Wealthy, Abundant' },
            { char: '宁', pinyin: 'Níng', meaning: 'Peaceful, Calm' }
          ],
          famousPersons: ['Mark Zuckerberg', 'Adele', 'Dwayne Johnson', 'Penélope Cruz', 'George Clooney', 'Channing Tatum', 'David Beckham', 'Queen Elizabeth II', 'Jack Nicholson', 'Megan Fox']
        },
        gemini: {
          sign: 'gemini',
          element: 'air',
          dateRange: 'May 21 - June 21',
          guardianStar: 'Mercury / Symbolizes mental communication',
          symbolMeaning: 'The Gemini symbol represents wisdom and mastery of energy',
          luckyColor: '#C0C0C0',
          luckyColorName: 'Silver, Gray',
          luckyNumber: '3, 4',
          luckyStone: 'Emerald',
          luckyDay: 'Wednesday',
          constellationFlower: 'Fern, Cactus, Purple Rose',
          flowerMeaning: 'Diligence, Happiness, Love to the End, Dreamer',
          mythOrigin: 'Queen Leda had many children, including a pair of nearly identical brothers. The elder brother was the son of Zeus and the queen, while the younger was the son of King Sparta. Despite having different fathers, they were very close. One day, Greece was attacked by a giant boar, and the prince and warriors defeated it. However, a dispute over credit led to conflict, and the younger brother was killed. The divine elder brother, heartbroken, asked Zeus to resurrect his brother. Zeus agreed but required the elder to share his remaining life with his brother. The elder brother agreed, and the siblings lived happily together afterward.',
          traits: ['Curious', 'Adaptable', 'Versatile', 'Intelligent', 'Social'],
          strengths: ['Communication Skills', 'Adaptability', 'Intelligence', 'Thinking Ability', 'Wit', 'Agility', 'Lively Conversation', 'Versatility'],
          weaknesses: ['Changeability', 'Anxiety', 'Indecisiveness', 'Superficial Understanding'],
          compatibility: 'Aquarius, Libra',
          namingTips: "Gemini individuals suit flexible, clever names. Characters with meanings related to 'duality, cleverness, wisdom, speech' are recommended.",
          suggestedCharacters: [
            { char: '巧', pinyin: 'Qiǎo', meaning: 'Clever, Smart' },
            { char: '智', pinyin: 'Zhì', meaning: 'Wisdom, Intelligence' },
            { char: '文', pinyin: 'Wén', meaning: 'Culture, Literature' },
            { char: '言', pinyin: 'Yán', meaning: 'Speech, Expression' }
          ],
          famousPersons: ['Angelina Jolie', 'Morgan Freeman', 'Johnny Depp', 'Kanye West', 'Marilyn Monroe', 'Chris Evans', 'Nicole Kidman', 'Tom Holland', 'Natalie Portman', 'Colin Farrell']
        },
        cancer: {
          sign: 'cancer',
          element: 'water',
          dateRange: 'June 22 - July 22',
          guardianStar: 'Moon / Symbolizes emotions and feelings',
          symbolMeaning: 'The Cancer symbol represents strength and passionate energy',
          luckyColor: '#C0C0C0',
          luckyColorName: 'Silver, White',
          luckyNumber: '8, 3',
          luckyStone: 'Pearl and Moonstone',
          luckyDay: 'Friday',
          constellationFlower: 'Night-blooming Cereus, Lily, Tuberose',
          flowerMeaning: 'A Moment of Eternity, Pure Heart, Purity, Heart to Heart, Beauty',
          mythOrigin: 'Hercules, son of Zeus and a mortal, was the greatest hero of Greece and the strongest man in the world. Hera, Zeus\'s wife, repeatedly tried to kill him and once sent a giant crab to impede Hercules. The crab was killed by Hercules, but its selfless sacrifice touched Hera, who placed it in the sky as the Cancer constellation. Cancer originated from Babylonian legend.',
          traits: ['Sensitive', 'Emotional', 'Protective', 'Intuitive', 'Good Memory'],
          strengths: ['Imagination', 'Loyalty', 'Sympathy', 'Financial Acumen', 'Kindness', 'Enthusiasm', 'Sensitivity', 'Comprehension', 'Adaptability'],
          weaknesses: ['Emotional', 'Sentimental', 'Controlling', 'Often Appears Cold'],
          compatibility: 'Scorpio, Pisces',
          namingTips: "Cancer individuals suit gentle names related to water. Characters with meanings related to 'water, gentleness, emotion, love' are recommended.",
          suggestedCharacters: [
            { char: '柔', pinyin: 'Róu', meaning: 'Gentle, Tender' },
            { char: '情', pinyin: 'Qíng', meaning: 'Emotion, Feeling' },
            { char: '爱', pinyin: 'Ài', meaning: 'Love, Care' },
            { char: '月', pinyin: 'Yuè', meaning: 'Moon, Gentleness' }
          ],
          famousPersons: ['Tom Hanks', 'Meryl Streep', 'Elon Musk', 'Selena Gomez', 'Tom Cruise', 'Princess Diana', 'Post Malone', 'Ariana Grande', 'Kevin Hart', 'Sylvester Stallone']
        },
        leo: {
          sign: 'leo',
          element: 'fire',
          dateRange: 'July 23 - August 22',
          guardianStar: 'Sun / Symbolizes power and vitality',
          symbolMeaning: 'The Leo symbol represents power and royal energy',
          luckyColor: '#FFD700',
          luckyColorName: 'Gold, Yellow',
          luckyNumber: '1, 9',
          luckyStone: 'Ruby',
          luckyDay: 'Sunday',
          constellationFlower: 'Sunflower, Marigold',
          flowerMeaning: 'Loyalty, Brightness, Longevity',
          mythOrigin: "The Nemean Lion was a vicious monster in Greek mythology that terrorized the residents of Nemea. Its golden fur was impervious to attacks. As his first labor, Hercules was sent to slay the Nemean Lion. After finding that his arrows could not pierce the lion's hide, Hercules stunned the beast with his club and then strangled it to death. Zeus placed the lion in the sky to commemorate Hercules' first labor.",
          traits: ['Confident', 'Generous', 'Loyal', 'Proud', 'Dramatic'],
          strengths: ['Leadership', 'Courage', 'Warmth', 'Enthusiasm', 'Creativity', 'Optimism', 'Generosity'],
          weaknesses: ['Arrogance', 'Stubbornness', 'Dominance', 'Self-centeredness'],
          compatibility: 'Aries, Sagittarius',
          namingTips: "Leo individuals suit noble, bright names. Characters with meanings related to 'brightness, nobility, leadership, courage' are recommended.",
          suggestedCharacters: [
            { char: '辉', pinyin: 'Huī', meaning: 'Splendor, Brilliance' },
            { char: '阳', pinyin: 'Yáng', meaning: 'Sun, Positive' },
            { char: '耀', pinyin: 'Yào', meaning: 'Shine, Brilliance' },
            { char: '俊', pinyin: 'Jùn', meaning: 'Handsome, Talented' }
          ],
          famousPersons: ['Jennifer Lopez', 'Barack Obama', 'Kylie Jenner', 'Arnold Schwarzenegger', 'Madonna', 'Daniel Radcliffe', 'Sandra Bullock', 'Mick Jagger', 'Jason Momoa', 'Demi Lovato']
        },
        virgo: {
          sign: 'virgo',
          element: 'earth',
          dateRange: 'August 23 - September 22',
          guardianStar: 'Mercury / Symbolizes intellect and work',
          symbolMeaning: 'The Virgo symbol represents beauty and analytical energy',
          luckyColor: '#808080',
          luckyColorName: 'Gray',
          luckyNumber: '8, 4',
          luckyStone: 'Red Carnelian',
          luckyDay: 'Wednesday',
          constellationFlower: 'Crape Myrtle, Scallion Orchid, Cymbidium',
          flowerMeaning: 'Enchanted Love, Good Luck, First Love, Carefree Happiness',
          mythOrigin: "According to Roman mythology, Virgo is also known as Astraea, daughter of Jupiter and Themis, the goddess of justice. At the end of the Golden Age, humans offended her, so in great anger, she returned to the heavens.",
          traits: ['Modest', 'Practical', 'Meticulous', 'Analytical', 'Perfectionist'],
          strengths: ['Analytical Skills', 'Cleanliness', 'Diligence', 'Reliability', 'Modesty', 'Tidiness', 'Carefulness', 'Clear Thinking'],
          weaknesses: ['Pickiness', 'Excessive Criticism', 'Worry', 'Perfectionism'],
          compatibility: 'Capricorn, Taurus',
          namingTips: "Virgo individuals suit elegant names related to purity. Characters with meanings related to 'cleanliness, elegance, refinement, beauty' are recommended.",
          suggestedCharacters: [
            { char: '洁', pinyin: 'Jié', meaning: 'Clean, Pure' },
            { char: '雅', pinyin: 'Yǎ', meaning: 'Elegant, Refined' },
            { char: '秀', pinyin: 'Xiù', meaning: 'Graceful, Elegant' },
            { char: '珊', pinyin: 'Shān', meaning: 'Coral, Beautiful' }
          ],
          famousPersons: ['Michael Jackson', 'Beyoncé', 'Keanu Reeves', 'Blake Lively', 'Zendaya', 'Adam Sandler', 'Cameron Diaz', 'Idris Elba', 'Kobe Bryant', 'Chris Pine']
        },
        libra: {
          sign: 'libra',
          element: 'air',
          dateRange: 'September 23 - October 23',
          guardianStar: 'Venus / Symbolizes the union of love and beauty',
          symbolMeaning: 'The Libra symbol represents balance and measured energy',
          luckyColor: '#1E90FF',
          luckyColorName: 'Blue',
          luckyNumber: '6, 9',
          luckyStone: 'Peridot',
          luckyDay: 'Friday',
          constellationFlower: 'Gerbera, Cattail, Calla Lily',
          flowerMeaning: 'Mutual Respect and Love, Effort, Simplicity',
          mythOrigin: "It is the scales held by Greek priestesses that flew to the sky to judge good and evil. Around 2000 BCE, this constellation was related to the Babylonian religious judgment of life and death, with the scales used to weigh the souls' good and evil.",
          traits: ['Fair', 'Social', 'Elegant', 'Harmonious', 'Romantic'],
          strengths: ['Social Skills', 'Justice', 'Pursuit of Beauty', 'Peace', 'Elegant Appearance', 'Sociability', 'Approachability', 'Focus on Romance'],
          weaknesses: ['Indecisiveness', 'Conflict Avoidance', 'Dependence on Others', 'No Standard for Fairness'],
          compatibility: 'Aquarius, Gemini',
          namingTips: "Libra individuals suit elegant names related to balance. Characters with meanings related to 'balance, harmony, beauty, elegance' are recommended.",
          suggestedCharacters: [
            { char: '和', pinyin: 'Hé', meaning: 'Peace, Harmony' },
            { char: '雅', pinyin: 'Yǎ', meaning: 'Elegant, Refined' },
            { char: '美', pinyin: 'Měi', meaning: 'Beautiful, Lovely' },
            { char: '静', pinyin: 'Jìng', meaning: 'Quiet, Peaceful' }
          ],
          famousPersons: ['Kim Kardashian', 'Hugh Jackman', 'Will Smith', 'Gwyneth Paltrow', 'Eminem', 'Cardi B', 'Bruno Mars', 'Zac Efron', 'Simon Cowell', 'Bella Hadid']
        },
        scorpio: {
          sign: 'scorpio',
          element: 'water',
          dateRange: 'October 24 - November 22',
          guardianStar: 'Pluto / Symbolizes transformation',
          symbolMeaning: 'The Scorpio symbol represents mystery and intuitive energy',
          luckyColor: '#8B0000',
          luckyColorName: 'Dark Red',
          luckyNumber: '3, 5',
          luckyStone: 'Topaz',
          luckyDay: 'Tuesday',
          constellationFlower: 'Gladiolus, Asparagus Fern',
          flowerMeaning: 'Remembrance, Attentiveness, Never Changing',
          mythOrigin: "Queen Juno commanded a scorpion to crawl from the dark underground to attack Orion (the hunter loved by Diana). On another occasion, the scorpion released poison gas to attack Phaethon as he drove the sun god's chariot, giving Cupid the opportunity to shoot lightning and destroy the running solar chariot.",
          traits: ['Mysterious', 'Passionate', 'Energetic', 'Stubborn', 'Intuitive'],
          strengths: ['Decisiveness', 'Courage', 'Focus', 'Insight', 'Strategy', 'Ability to Identify Key Points', 'Determination', 'Practicality'],
          weaknesses: ['Jealousy', 'Suspicion', 'Grudge-holding', 'Changeability', 'Anxiety'],
          compatibility: 'Cancer, Pisces',
          namingTips: "Scorpio individuals suit profound names related to transformation. Characters with meanings related to 'mystery, depth, change, wisdom' are recommended.",
          suggestedCharacters: [
            { char: '玄', pinyin: 'Xuán', meaning: 'Profound, Mysterious' },
            { char: '深', pinyin: 'Shēn', meaning: 'Deep, Profound' },
            { char: '谋', pinyin: 'Móu', meaning: 'Strategy, Plan' },
            { char: '锐', pinyin: 'Ruì', meaning: 'Sharp, Acute' }
          ],
          famousPersons: ['Leonardo DiCaprio', 'Bill Gates', 'Scarlett Johansson', 'Ryan Gosling', 'Julia Roberts', 'Drake', 'Anne Hathaway', 'Matthew McConaughey', 'Katy Perry', 'Ryan Reynolds']
        },
        sagittarius: {
          sign: 'sagittarius',
          element: 'fire',
          dateRange: 'November 23 - December 21',
          guardianStar: 'Jupiter / Symbolizes expansion and fortune',
          symbolMeaning: 'The Sagittarius symbol represents freedom and target-driven energy',
          luckyColor: '#8000FF',
          luckyColorName: 'Purple',
          luckyNumber: '3, 7',
          luckyStone: 'Turquoise',
          luckyDay: 'Thursday',
          constellationFlower: 'Carnation, Chrysanthemum',
          flowerMeaning: 'Love, Nobleness, Purity',
          mythOrigin: 'In Greek mythology, Sagittarius represents the centaur Chiron, who was accidentally shot with a poisoned arrow by Hercules. Despite being immortal, Chiron experienced unbearable pain and surrendered his immortality to end his suffering. Zeus honored him by placing him in the sky as the constellation Sagittarius.',
          traits: ['Optimistic', 'Freedom-loving', 'Philosophical', 'Direct', 'Adventurous'],
          strengths: ['Honesty', 'Optimism', 'Openness', 'Intelligence', 'Independence', 'Kindness', 'Adventurousness', 'Passion for Freedom'],
          weaknesses: ['Impatience', 'Carelessness', 'Tactlessness', 'Overpromising'],
          compatibility: 'Aries, Leo',
          namingTips: "Sagittarius individuals suit adventurous names related to freedom and wisdom. Characters with meanings related to 'freedom, adventure, wisdom, openness' are recommended.",
          suggestedCharacters: [
            { char: '豪', pinyin: 'Háo', meaning: 'Grand, Heroic' },
            { char: '逸', pinyin: 'Yì', meaning: 'Free, Unrestrained' },
            { char: '志', pinyin: 'Zhì', meaning: 'Aspiration, Ambition' },
            { char: '远', pinyin: 'Yuǎn', meaning: 'Far, Distant' }
          ],
          famousPersons: ['Brad Pitt', 'Taylor Swift', 'Miley Cyrus', 'Britney Spears', 'Samuel L. Jackson', 'Nicki Minaj', 'Jay-Z', 'DJ Khaled', 'Tina Turner', 'Jane Fonda']
        },
        capricorn: {
          sign: 'capricorn',
          element: 'earth',
          dateRange: 'December 22 - January 19',
          guardianStar: 'Saturn / Symbolizes discipline and responsibility',
          symbolMeaning: 'The Capricorn symbol represents ambition and structured energy',
          luckyColor: '#5D8AA8',
          luckyColorName: 'Dark Blue, Gray',
          luckyNumber: '4, 8',
          luckyStone: 'Onyx',
          luckyDay: 'Saturday',
          constellationFlower: 'Pansy, Ivy',
          flowerMeaning: 'Think of Me, Friendship, Fidelity',
          mythOrigin: "In Greek mythology, Capricorn is associated with the god Pan, who jumped into a river to escape the monster Typhon. The lower half of his body turned into a fish, while the upper half remained that of a goat. This transformation is reflected in the constellation's depiction as a goat with a fish tail.",
          traits: ['Pragmatic', 'Patient', 'Cautious', 'Ambitious', 'Disciplined'],
          strengths: ['Responsibility', 'Discipline', 'Self-control', 'Management Skills'],
          weaknesses: ['Stubbornness', 'Pessimism', 'Stinginess'],
          compatibility: 'Taurus, Virgo',
          namingTips: "Capricorn individuals suit steady names related to achievement. Characters with meanings related to 'virtue, achievement, stability, career' are recommended.",
          suggestedCharacters: [
            { char: '德', pinyin: 'Dé', meaning: 'Virtue, Morality' },
            { char: '成', pinyin: 'Chéng', meaning: 'Success, Achievement' },
            { char: '业', pinyin: 'Yè', meaning: 'Career, Achievement' },
            { char: '恒', pinyin: 'Héng', meaning: 'Constant, Persistent' }
          ],
          famousPersons: ['Jim Carrey', 'Muhammad Ali', 'Denzel Washington', 'Kate Middleton', 'Eddie Redmayne', 'Gayle King', 'Kevin Costner', 'Dolly Parton', 'Jude Law', 'LeBron James']
        },
        aquarius: {
          sign: 'aquarius',
          element: 'air',
          dateRange: 'January 20 - February 18',
          guardianStar: 'Uranus / Symbolizes innovation and technology',
          symbolMeaning: 'The Aquarius symbol represents progress and flowing energy',
          luckyColor: '#00FFFF',
          luckyColorName: 'Turquoise, Blue',
          luckyNumber: '4, 7',
          luckyStone: 'Amethyst',
          luckyDay: 'Wednesday',
          constellationFlower: 'Orchid, Bird of Paradise',
          flowerMeaning: 'Love, Beauty, Thoughtfulness',
          mythOrigin: "In Greek mythology, Aquarius is associated with Ganymede, a handsome young prince who was kidnapped by Zeus to serve as cupbearer to the gods. Zeus was so enchanted by Ganymede's beauty that he transformed into an eagle to bring him to Mount Olympus.",
          traits: ['Independent', 'Innovative', 'Humanitarian', 'Rational', 'Friendly'],
          strengths: ['Originality', 'Intelligence', 'Philanthropy', 'Loyalty'],
          weaknesses: ['Rebelliousness', 'Stubbornness', 'Emotional Detachment'],
          compatibility: 'Gemini, Libra',
          namingTips: "Aquarius individuals suit innovative names related to technology. Characters with meanings related to 'innovation, intelligence, thought, dimension' are recommended.",
          suggestedCharacters: [
            { char: '新', pinyin: 'Xīn', meaning: 'New, Innovative' },
            { char: '智', pinyin: 'Zhì', meaning: 'Wisdom, Intelligence' },
            { char: '思', pinyin: 'Sī', meaning: 'Thought, Thinking' },
            { char: '维', pinyin: 'Wéi', meaning: 'Dimension, Thinking' }
          ],
          famousPersons: ['Cristiano Ronaldo', 'Oprah Winfrey', 'Harry Styles', 'Jennifer Aniston', 'Ellen DeGeneres', 'Justin Timberlake', 'Shakira', 'Alicia Keys', 'John Travolta', 'Ed Sheeran']
        },
        pisces: {
          sign: 'pisces',
          element: 'water',
          dateRange: 'February 19 - March 20',
          guardianStar: 'Neptune / Symbolizes dreams and intuition',
          symbolMeaning: 'The Pisces symbol represents duality and flowing energy',
          luckyColor: '#008080',
          luckyColorName: 'Sea Green, Aquamarine',
          luckyNumber: '7, 12',
          luckyStone: 'Aquamarine, Moonstone',
          luckyDay: 'Thursday',
          constellationFlower: 'Water Lily, Violet',
          flowerMeaning: 'Purity of Heart, Modesty, Faithfulness',
          mythOrigin: "In Greek mythology, Pisces represents Aphrodite and her son Eros, who transformed themselves into fish to escape the monster Typhon. They tied themselves together with a cord so they wouldn't lose each other in the water, which is reflected in the constellation's two fish swimming in opposite directions.",
          traits: ['Compassionate', 'Intuitive', 'Artistic', 'Adaptable', 'Idealistic'],
          strengths: ['Creativity', 'Compassion', 'Gentleness', 'Wisdom'],
          weaknesses: ['Escapism', 'Over-emotionality', 'Self-sacrifice'],
          compatibility: 'Scorpio, Cancer',
          namingTips: "Pisces individuals suit gentle names related to art. Characters with meanings related to 'art, dream, fantasy, poetry' are recommended.",
          suggestedCharacters: [
            { char: '艺', pinyin: 'Yì', meaning: 'Art, Skill' },
            { char: '梦', pinyin: 'Mèng', meaning: 'Dream, Fantasy' },
            { char: '诗', pinyin: 'Shī', meaning: 'Poetry, Poetic' },
            { char: '灵', pinyin: 'Líng', meaning: 'Spirit, Soul' }
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