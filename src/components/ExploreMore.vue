<template>
  <div class="explore-more">
    <div class="explore-header">
      <h3 class="explore-title">Explore More</h3>
      <p class="explore-subtitle">Discover other powerful Chinese name tools</p>
    </div>
    
    <div class="explore-grid">
      <router-link 
        v-for="tool in tools" 
        :key="tool.id" 
        :to="tool.path" 
        class="explore-card"
      >
        <div class="card-icon">
          <component :is="tool.icon" v-if="tool.icon" />
          <span v-else class="icon-emoji">{{ tool.emoji }}</span>
        </div>
        <div class="card-content">
          <h4 class="card-title">{{ tool.title }}</h4>
          <p class="card-description">{{ tool.description }}</p>
        </div>
        <div class="card-arrow">→</div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ExploreMore',
  props: {
    currentPath: {
      type: String,
      default: ''
    }
  },
  computed: {
    tools() {
      // 所有工具列表
      const allTools = [
        {
          id: 'translate',
          title: 'Name Translator',
          description: 'Translate English names to Chinese',
          path: '/english-to-chinese-translator',
          emoji: '🌍'
        },
        {
          id: 'chinese-to-english',
          title: 'Chinese to English',
          description: 'Convert Chinese names to English',
          path: '/chinese-to-english-translator',
          emoji: '🔄'
        },
        {
          id: 'girl-names',
          title: 'Chinese Girl Names',
          description: 'Browse beautiful female Chinese names',
          path: '/chinese-girl-names',
          emoji: '👧'
        },
        {
          id: 'boy-names',
          title: 'Chinese Boy Names',
          description: 'Discover meaningful male Chinese names',
          path: '/chinese-boy-names',
          emoji: '👦'
        },
        {
          id: 'write-my-name',
          title: 'Write My Name in Chinese',
          description: 'Learn how to write your name in Chinese',
          path: '/write-my-name-in-chinese',
          emoji: '✍️'
        },
        {
          id: 'custom',
          title: 'Custom Generator',
          description: 'Create personalized Chinese names',
          path: '/custom-chinese-name-generator',
          emoji: '🎨'
        },
        {
          id: 'fantasy',
          title: 'Fantasy Names',
          description: 'Generate mystical character names',
          path: '/fantasy-chinese-name-generator',
          emoji: '✨'
        },
        {
          id: 'pinyin',
          title: 'Name to Pinyin',
          description: 'Convert Chinese names to pinyin',
          path: '/name-to-pinyin',
          emoji: '🄤'
        },
        {
          id: 'last-names',
          title: 'Chinese Last Names',
          description: 'Explore common Chinese surnames',
          path: '/chinese-last-names',
          emoji: '👨‍👩‍👧‍👦'
        },        
        {
          id: 'zodiac',
          title: 'Zodiac Calculator',
          description: 'Find your Chinese zodiac sign',
          path: '/zodiac-calculator',
          emoji: '🐉'
        },
        {
          id: 'constellation',
          title: 'Constellation Analysis',
          description: 'Analyze your star sign for naming',
          path: '/constellation-analysis',
          emoji: '⭐'
        }
      ];
      
      // 过滤掉当前页面，只显示其他6个功能
      return allTools.filter(tool => tool.path !== this.currentPath).slice(0, 6);
    }
  }
}
</script>

<style scoped>
.explore-more {
  background-color: #ffffff;
  border-radius: 8px;
  padding: 20px 25px;
  margin: 30px 0;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
  width: 100%;
}

.explore-header {
  text-align: center;
  margin-bottom: 20px;
}

.explore-title {
  font-size: 1.3rem;
  color: #333;
  margin: 0 0 8px 0;
  font-weight: 600;
}

.explore-subtitle {
  color: #666;
  font-size: 0.9rem;
  margin: 0;
}

.explore-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 12px;
}

.explore-card {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 15px;
  background: white;
  border-radius: 8px;
  text-decoration: none;
  color: inherit;
  border: 1px solid rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.explore-card::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 3px;
  height: 100%;
  background: linear-gradient(to bottom, #d10a11, #f05252);
  transform: scaleY(0);
  transition: transform 0.3s ease;
}

.explore-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
  border-color: rgba(209, 10, 17, 0.1);
}

.explore-card:hover::before {
  transform: scaleY(1);
}

.card-icon {
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background: rgba(209, 10, 17, 0.08);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: all 0.3s ease;
}

.explore-card:hover .card-icon {
  background: rgba(209, 10, 17, 0.12);
  transform: scale(1.05);
}

.icon-emoji {
  font-size: 1.2rem;
  line-height: 1;
}

.card-content {
  flex: 1;
  min-width: 0;
}

.card-title {
  font-size: 0.95rem;
  color: #333;
  margin: 0 0 4px 0;
  font-weight: 600;
  line-height: 1.2;
}

.card-description {
  color: #666;
  font-size: 0.8rem;
  margin: 0;
  line-height: 1.3;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.card-arrow {
  color: #d10a11;
  font-size: 1rem;
  font-weight: bold;
  opacity: 0.6;
  transition: all 0.3s ease;
  flex-shrink: 0;
}

.explore-card:hover .card-arrow {
  opacity: 1;
  transform: translateX(3px);
}

/* 响应式设计 */
@media (max-width: 768px) {
  .explore-more {
    padding: 20px 15px;
    margin: 20px 0;
  }
  
  .explore-title {
    font-size: 1.2rem;
  }
  
  .explore-subtitle {
    font-size: 0.85rem;
  }
  
  .explore-grid {
    grid-template-columns: 1fr;
    gap: 10px;
  }
  
  .explore-card {
    padding: 10px 12px;
  }
  
  .card-icon {
    width: 35px;
    height: 35px;
  }
  
  .icon-emoji {
    font-size: 1.1rem;
  }
  
  .card-title {
    font-size: 0.9rem;
  }
  
  .card-description {
    font-size: 0.75rem;
  }
}

@media (max-width: 480px) {
  .explore-more {
    padding: 15px 12px;
  }
  
  .explore-title {
    font-size: 1.1rem;
  }
  
  .card-icon {
    width: 32px;
    height: 32px;
  }
  
  .icon-emoji {
    font-size: 1rem;
  }
}
</style> 