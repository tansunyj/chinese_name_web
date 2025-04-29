<template>
  <div class="character-strokes-page">
    <h1 class="page-title">汉字笔画书写顺序</h1>
    <p class="page-subtitle">查看汉字的笔画书写顺序与拼音读法，学习正确的汉字书写方法</p>

    <!-- 输入区域卡片 -->
    <div class="content-card input-card">
      <div class="form-group">
        <label class="input-label">输入汉字</label>
        <input 
          type="text" 
          v-model="searchCharacter" 
          maxlength="1"
          class="character-input"
          placeholder="输入一个汉字"
          @input="onCharacterInput"
        />
      </div>

      <button class="generate-btn" @click="searchStrokeOrder">
        生成笔画
      </button>
    </div>

    <!-- 结果展示区域卡片 -->
    <div v-if="hasSearched" class="content-card result-card">
      <div class="result-content">
        <!-- 左右布局容器 -->
        <div class="result-layout">
          <!-- 左侧汉字显示 -->
          <div class="character-display">
            <div class="character-container">
              <div ref="writerContainer"></div>
              <div class="pinyin-container" @click="playPronunciation">
                <span class="pinyin">{{ characterData.pinyin }}</span>
                <span class="tone">{{ characterData.tone }}</span>
                <i class="audio-icon">🔊</i>
              </div>
            </div>
          </div>

          <!-- 右侧信息网格 -->
          <div class="info-grid">
            <div class="info-item">
              <div class="info-label">笔画数</div>
              <div class="info-value">{{ characterData.strokeCount || 0 }}</div>
            </div>
            <div class="info-item">
              <div class="info-label">部首</div>
              <div class="info-value">{{ characterData.radical || '-' }}</div>
            </div>
            <div class="info-item">
              <div class="info-label">结构</div>
              <div class="info-value">{{ characterData.structure || '-' }}</div>
            </div>
            <div class="info-item">
              <div class="info-label">五行</div>
              <div class="info-value">{{ characterData.wuxing || '-' }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import pinyin from 'pinyin';
import HanziWriter from 'hanzi-writer';
import { message } from 'ant-design-vue';

// 添加汉字数据字典
const characterDatabase = {
  '顺': {
    pinyin: 'shùn',
    strokeCount: 9,
    radical: '页',
    structure: '左右结构',
    wuxing: '水',
    strokeSequence: ['竖', '横', '撇', '点', '横', '竖提', '横', '竖弯', '捺']
  },
  // ... 其他汉字数据
};

// 添加通用分析函数
const analyzeCharacter = (character) => {
  // 如果在数据库中存在，直接返回
  if (characterDatabase[character]) {
    return characterDatabase[character];
  }

  // 否则进行实时分析
  const analysis = {
    strokeCount: 0,
    radical: '',
    structure: '',
    wuxing: ''
  };

  // 分析部首
  const radicals = {
    '亻': ['付', '仁', '休', '你', '他'],
    '扌': ['打', '抱', '推', '拉'],
    '氵': ['河', '海', '湖', '流'],
    '木': ['树', '林', '森', '本'],
    // ... 更多部首映射
  };

  // 查找部首
  for (const [radical, chars] of Object.entries(radicals)) {
    if (chars.includes(character)) {
      analysis.radical = radical;
      break;
    }
  }

  // 分析结构
  const structures = {
    left_right: ['付', '树', '林', '湖'], // 左右结构
    top_bottom: ['字', '学', '宝', '安'], // 上下结构
    surroundLeft: ['区', '医', '匡', '匪'], // 包围结构
    surroundFull: ['国', '回', '围', '圆'], // 全包围结构
    // ... 更多结构映射
  };

  // 判断结构
  for (const [structure, chars] of Object.entries(structures)) {
    if (chars.includes(character)) {
      switch(structure) {
        case 'left_right':
          analysis.structure = '左右结构';
          break;
        case 'top_bottom':
          analysis.structure = '上下结构';
          break;
        case 'surroundLeft':
          analysis.structure = '半包围结构';
          break;
        case 'surroundFull':
          analysis.structure = '全包围结构';
          break;
      }
      break;
    }
  }

  // 分析五行
  const wuxing = {
    wood: ['木', '林', '森', '竹'],
    fire: ['火', '炎', '焱', '灯'],
    earth: ['土', '地', '坤', '垣'],
    metal: ['付', '金', '铁', '银'],
    water: ['水', '河', '湖', '海']
  };

  // 判断五行
  for (const [element, chars] of Object.entries(wuxing)) {
    if (chars.includes(character)) {
      switch(element) {
        case 'wood':
          analysis.wuxing = '木';
          break;
        case 'fire':
          analysis.wuxing = '火';
          break;
        case 'earth':
          analysis.wuxing = '土';
          break;
        case 'metal':
          analysis.wuxing = '金';
          break;
        case 'water':
          analysis.wuxing = '水';
          break;
      }
      break;
    }
  }

  return analysis;
};

export default {
  name: 'CharacterStrokes',
  data() {
    return {
      searchCharacter: '',
      currentCharacter: '',
      isLoading: false,
      hasError: false,
      errorMessage: '',
      currentStrokeIndex: 0,
      characterData: {
        pinyin: '',
        tone: '',
        strokeCount: 0,
        radical: '',
        structure: '',
        wuxing: ''
      },
      popularCharacters: ['爱', '福', '德', '智', '信', '义', '和', '美', '思', '诚'],
      hasSearched: false,
      writer: null,
      strokeTimer: null,
      hanziReady: true, // 直接设置为 true，因为不再依赖 hanzi 库
      audio: null
    }
  },
  methods: {
    onCharacterInput() {
      // 允许输入多个汉字，不做限制
    },
    selectCharacter(char) {
      this.searchCharacter = char;
      this.searchStrokeOrder();
    },
    async getCharacterInfo(character) {
      try {
        // 使用汉字魔法API获取汉字信息
        const response = await axios.get(`https://api.ctext.org/getcharacter?char=${encodeURIComponent(character)}&if=0`);
        
        if (response.data && response.data.success) {
          const data = response.data;
          return {
            strokeCount: data.totalStrokes,
            radical: data.radical,
            structure: this.getStructureFromComponents(data.components),
            wuxing: await this.getWuxingFromAPI(character)
          };
        }
        
        // 如果API调用失败，使用备用API
        const backupResponse = await axios.get(`https://zi.tools/api/zi/${encodeURIComponent(character)}`);
        return {
          strokeCount: backupResponse.data.strokeCount,
          radical: backupResponse.data.radical,
          structure: backupResponse.data.structure,
          wuxing: await this.getWuxingFromAPI(character)
        };
      } catch (error) {
        console.error('获取汉字信息失败:', error);
        throw error;
      }
    },

    // 从字形结构判断结构类型
    getStructureFromComponents(components) {
      if (!components) return '未知结构';
      
      if (components.length === 2) {
        if (components[0].position === 'left' && components[1].position === 'right') {
          return '左右结构';
        } else if (components[0].position === 'top' && components[1].position === 'bottom') {
          return '上下结构';
        }
      } else if (components.length === 3) {
        return '三部件结构';
      }
      
      return '独体结构';
    },

    // 获取五行属性
    async getWuxingFromAPI(character) {
      try {
        const response = await axios.get(`https://api.jisuapi.com/wuxing/query?appkey=YOUR_API_KEY&character=${encodeURIComponent(character)}`);
        if (response.data && response.data.result) {
          return response.data.result.wuxing;
        }
        return this.getDefaultWuxing(character);
      } catch (error) {
        return this.getDefaultWuxing(character);
      }
    },

    // 备用的五行判断方法
    getDefaultWuxing(character) {
      const wuxingPatterns = {
        '金': /[钅|金|铁|银|铜]/,
        '木': /[木|林|森|竹|花]/,
        '水': /[氵|水|河|湖|海]/,
        '火': /[火|炎|焱|灯|热]/,
        '土': /[土|地|城|垣|墙]/
      };

      for (const [element, pattern] of Object.entries(wuxingPatterns)) {
        if (pattern.test(character)) {
          return element;
        }
      }
      
      // 如果没有明显特征，根据笔画数判断
      const strokeCount = this.getStrokeCount(character);
      const remainder = strokeCount % 5;
      const wuxingMap = ['水', '木', '火', '土', '金'];
      return wuxingMap[remainder];
    },

    async searchStrokeOrder() {
      if (!this.searchCharacter) {
        message.error('请输入汉字');
        return;
      }

      const chineseCharRegex = /^[\u4e00-\u9fa5]{1}$/;
      if (!chineseCharRegex.test(this.searchCharacter)) {
        message.error('请输入单个有效的汉字');
        return;
      }

      try {
        this.isLoading = true;
        this.currentCharacter = this.searchCharacter;
        this.hasSearched = true;

        // 获取拼音和声调
        const pinyinResult = pinyin(this.currentCharacter, {
          style: pinyin.STYLE_TONE2,
          heteronym: false
        })[0][0];

        // 分离拼音和声调
        const tone = pinyinResult.match(/[1-4]$/)?.[0] || '5';
        const pinyinWithoutTone = pinyinResult.replace(/[1-4]$/, '');

        // 获取汉字详细信息
        const charInfo = await this.getCharacterInfo(this.currentCharacter);

        // 更新数据
        this.characterData = {
          pinyin: pinyinWithoutTone,
          tone: this.getToneSymbol(tone),
          ...charInfo
        };

        // 初始化书写动画
        await this.initWriter();
        
        this.isLoading = false;
      } catch (error) {
        console.error('查询汉字信息失败:', error);
        message.error('获取汉字信息失败，请重试');
        this.isLoading = false;
      }
    },

    async initWriter() {
      const container = this.$refs.writerContainer;
      if (!container) return;

      container.innerHTML = '';
      return new Promise((resolve) => {
        this.writer = HanziWriter.create(container, this.currentCharacter, {
          width: 200,
          height: 200,
          padding: 10,
          showOutline: true,
          showCharacter: true,
          strokeAnimationSpeed: 1,
          delayBetweenStrokes: 300,
          onLoadCharDataSuccess: resolve,
          onLoadCharDataError: (err) => {
            console.error('加载汉字数据失败:', err);
            resolve();
          }
        });
      });
    },

    getToneSymbol(tone) {
      const toneSymbols = ['', 'ˉ', 'ˊ', 'ˇ', 'ˋ', '˙'];
      return toneSymbols[parseInt(tone)] || '';
    },

    async playPronunciation() {
      try {
        if (this.audio) {
          this.audio.pause();
          this.audio = null;
        }

        // 使用在线文字转语音服务
        const audioUrl = `https://dict.youdao.com/dictvoice?audio=${encodeURIComponent(this.currentCharacter)}&type=1`;
        this.audio = new Audio(audioUrl);
        await this.audio.play();
      } catch (error) {
        console.error('播放发音失败:', error);
        message.error('播放发音失败，请重试');
      }
    },

    animateStrokeSteps() {
      if (!this.writer || !this.writer.character || !this.writer.character.strokes) {
        console.error('HanziWriter 未正确初始化');
        return;
      }

      const total = this.writer.character.strokes.length;
      
      // 清除之前的定时器
      if (this.strokeTimer) {
        clearInterval(this.strokeTimer);
      }

      // 重置所有笔画颜色
      for (let i = 0; i < total; i++) {
        this.writer.setStrokeColor(i, '#bbb');
      }

      this.currentStrokeIndex = 0;
      
      // 开始动画
      this.strokeTimer = setInterval(() => {
        // 设置已完成笔画的颜色
        for (let i = 0; i < this.currentStrokeIndex; i++) {
          this.writer.setStrokeColor(i, '#222');
        }
        
        // 设置当前笔画的颜色
        if (this.currentStrokeIndex < total) {
          this.writer.setStrokeColor(this.currentStrokeIndex, '#e60012');
          this.writer.animateStroke(this.currentStrokeIndex);
        }
        
        // 设置未完成笔画的颜色
        for (let i = this.currentStrokeIndex + 1; i < total; i++) {
          this.writer.setStrokeColor(i, '#bbb');
        }
        
        this.currentStrokeIndex++;
        
        // 动画结束
        if (this.currentStrokeIndex > total) {
          clearInterval(this.strokeTimer);
          // 显示完整汉字
          this.writer.showCharacter();
        }
      }, 800);
    },
    goToStroke(index) {
      this.currentStrokeIndex = index;
    },
    getMockCharacterData(character) {
      // 模拟数据 - 实际应用需要替换为真实API数据
      const mockData = {
        '爱': {
          pinyin: 'ài',
          strokeCount: 13,
          radical: '爪',
          meaning: '喜爱；爱护；爱情；热爱',
          structure: '上下',
          wuxing: '土',
          strokeSequence: ['横', '竖', '撇', '横折钩', '横', '竖', '横折', '横', '竖', '横', '撇', '点', '点']
        },
        '福': {
          pinyin: 'fú',
          strokeCount: 13,
          radical: '礻',
          meaning: '幸福；福气；福利；祝福',
          structure: '左右',
          wuxing: '水',
          strokeSequence: ['竖', '横折', '竖', '横', '横', '竖', '横', '横', '竖', '横折', '横', '横', '点']
        },
        '德': {
          pinyin: 'dé',
          strokeCount: 15,
          radical: '彳',
          meaning: '道德；品德；恩德；德行',
          structure: '左右',
          wuxing: '火',
          strokeSequence: ['竖提', '横折钩', '竖', '横折', '横', '竖', '横', '横', '竖', '横', '撇', '点', '横', '竖', '横折钩']
        },
        '你': {
          pinyin: 'nǐ',
          strokeCount: 7,
          radical: '亻',
          meaning: '第二人称代词，指所说话的对象',
          structure: '左右',
          wuxing: '土',
          strokeSequence: ['撇', '横', '竖', '横折', '横', '竖', '折']
        },
        '我': {
          pinyin: 'wǒ',
          strokeCount: 7,
          radical: '戈',
          meaning: '第一人称代词，指说话的人自己',
          structure: '左右',
          wuxing: '金',
          strokeSequence: ['竖提', '横', '竖', '撇', '捺', '横撇/横钩', '竖弯钩']
        },
        '他': {
          pinyin: 'tā',
          strokeCount: 5,
          radical: '亻',
          meaning: '第三人称代词，指代男性',
          structure: '左右',
          wuxing: '火',
          strokeSequence: ['撇', '横', '竖', '横折', '捺']
        },
        '智': {
          pinyin: 'zhì',
          strokeCount: 12,
          radical: '日',
          meaning: '聪明；智慧；智力；智能',
          structure: '上下',
          wuxing: '火',
          strokeSequence: ['横', '竖', '横', '竖', '横折', '竖', '横', '横', '点', '横折钩', '撇', '捺']
        },
        '思': {
          pinyin: 'sī',
          strokeCount: 9,
          radical: '心',
          meaning: '思考；思想；思念；思维',
          structure: '上下',
          wuxing: '金',
          strokeSequence: ['横', '竖', '横', '横', '撇', '点', '横', '竖', '横']
        },
        '汉': {
          pinyin: 'hàn',
          strokeCount: 5,
          radical: '氵',
          meaning: '中国的一个民族；中国的一个朝代；汉语',
          structure: '左右',
          wuxing: '水',
          strokeSequence: ['点', '点', '提', '横撇', '捺']
        },
        '字': {
          pinyin: 'zì',
          strokeCount: 6,
          radical: '子',
          meaning: '文字；汉字；字体；书写的符号',
          structure: '上下',
          wuxing: '木',
          strokeSequence: ['横', '竖', '撇', '捺', '折', '点']
        }
      };
      
      // 返回对应汉字的数据，如果没有则使用汉字查询API
      let data = mockData[character];
      
      if (!data) {
        // 对于不在预设数据中的汉字，尝试通过一些基本规则判断
        // 实际应用中应该调用专业的汉字数据API
        data = this.getBasicCharData(character);
      }
      
      return data;
    },
    
    getBasicCharData(character) {
      // 这是一个简单的备用方法，用于生成未预设汉字的基础数据
      // 实际应用中应通过专业的汉字数据API获取
      
      // 常见的部首列表（简化版）
      const commonRadicals = {
        '氵': ['汉', '江', '河', '湖', '海', '洋', '流', '沙'],
        '亻': ['你', '他', '们', '们', '住', '传', '位'],
        '木': ['林', '森', '树', '本', '末', '术'],
        '口': ['吃', '喝', '叫', '吧', '吗', '听'],
        '艹': ['草', '花', '苗', '芽', '菜', '药'],
        '女': ['妈', '姐', '妹', '她', '好', '姓'],
        '宀': ['家', '室', '宝', '宁', '宇', '守'],
        '心': ['思', '想', '念', '忆', '恋', '情'],
        '子': ['字', '学', '孩', '存', '孙']
      };
      
      // 查找汉字的部首（简化版判断）
      let radical = '一';
      for (const rad in commonRadicals) {
        if (commonRadicals[rad].includes(character)) {
          radical = rad;
          break;
        }
      }
      
      // 假设的笔画数范围（实际应查表确定）
      const strokeCount = Math.floor(Math.random() * 10) + 4;
      
      // 随机的结构和五行（实际应查表确定）
      const structures = ['左右', '上下', '左中右', '上中下', '独体', '半包围', '全包围'];
      const wuxings = ['金', '木', '水', '火', '土'];
      
      const structure = structures[Math.floor(Math.random() * structures.length)];
      const wuxing = wuxings[Math.floor(Math.random() * wuxings.length)];
      
      // 简单的笔画序列（实际应查表确定）
      const basicStrokes = ['横', '竖', '撇', '捺', '折', '点', '提', '横折', '横钩', '竖钩'];
      const strokeSequence = [];
      
      // 生成与笔画数对应的笔画序列
      for (let i = 0; i < strokeCount; i++) {
        const randomIndex = Math.floor(Math.random() * basicStrokes.length);
        strokeSequence.push(basicStrokes[randomIndex]);
      }
      
      return {
        pinyin: `${character} pinyin`,
        strokeCount: strokeCount,
        radical: radical,
        meaning: `${character}的含义`,
        structure: structure,
        wuxing: wuxing,
        strokeSequence: strokeSequence
      };
    },
    autoPlayStrokes() {
      let timer = setInterval(() => {
        if (this.currentStrokeIndex < this.strokes.length - 1) {
          this.currentStrokeIndex++;
        } else {
          clearInterval(timer);
        }
      }, 1000);
    }
  },
  beforeUnmount() {
    if (this.strokeTimer) {
      clearInterval(this.strokeTimer);
    }
  }
}
</script>

<style scoped>
.character-strokes-page {
  padding: 40px 20px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}

.page-title {
  font-size: 32px;
  color: #333;
  margin-bottom: 16px;
  text-align: center;
}

.page-subtitle {
  font-size: 16px;
  color: #666;
  margin-bottom: 40px;
  text-align: center;
}

.content-card {
  background: white;
  border-radius: 8px;
  padding: 30px;
  width: 100%;
  max-width: 800px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
}

.input-card {
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 20px;
}

.input-label {
  display: block;
  font-size: 16px;
  color: #333;
  margin-bottom: 8px;
}

.character-input {
  width: 100%;
  height: 44px;
  padding: 8px 12px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
  transition: border-color 0.3s;
}

.generate-btn {
  width: 100%;
  height: 44px;
  background-color: #e60012;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.result-card {
  margin-top: 20px;
}

.result-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.result-layout {
  display: flex;
  align-items: flex-start;
  gap: 30px;
  width: 100%;
}

.character-display {
  flex: 0 0 auto;
  width: 200px;
}

.writer-container {
  width: 200px;
  height: 200px;
  border: 1px solid #eee;
  border-radius: 4px;
  background: #fff;
}

.info-grid {
  flex: 1;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  padding: 20px;
  background: #f8f8f8;
  border-radius: 8px;
}

.info-item {
  background: white;
  padding: 15px;
  border-radius: 6px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.info-label {
  color: #666;
  font-size: 14px;
  margin-bottom: 8px;
}

.info-value {
  color: #333;
  font-size: 18px;
  font-weight: 500;
}

@media (max-width: 768px) {
  .result-layout {
    flex-direction: column;
  }

  .character-display {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .info-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .info-grid {
    grid-template-columns: 1fr;
  }
}

.pinyin-container {
  text-align: center;
  margin-top: 10px;
  cursor: pointer;
  user-select: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
}

.pinyin {
  font-size: 18px;
  color: #333;
}

.tone {
  font-size: 16px;
  color: #666;
}

.audio-icon {
  font-size: 16px;
  color: #1890ff;
  margin-left: 4px;
  cursor: pointer;
}

.audio-icon:hover {
  color: #40a9ff;
}
</style> 