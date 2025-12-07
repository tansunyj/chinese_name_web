<template>
  <div class="kofi-floating-widget">
    <!-- Ko-fi 浮动小部件会自动注入到这里 -->
    <!-- 备用链接，如果浮动小部件加载失败 -->
    <a 
      v-if="!loaded" 
      href="https://ko-fi.com/yangjerry666" 
      target="_blank"
      class="kofi-fallback-button"
      title="Support me on Ko-fi"
    >
      ☕ Support me
    </a>
  </div>
</template>

<script>
export default {
  name: 'KofiFloatingWidget',
  data() {
    return {
      loaded: false
    }
  },
  mounted() {
    // 设置超时，如果 5 秒内没有加载成功，显示备用按钮
    setTimeout(() => {
      if (!this.loaded) {
        console.warn('Ko-fi widget failed to load, showing fallback button')
      }
    }, 5000)
    
    // 检查是否已经加载过 Ko-fi overlay 脚本
    if (!document.getElementById('kofi-overlay-script')) {
      // 创建并加载 Ko-fi overlay 脚本
      const script = document.createElement('script')
      script.id = 'kofi-overlay-script'
      script.src = 'https://storage.ko-fi.com/cdn/scripts/overlay-widget.js'
      script.onload = () => {
        this.initKofiOverlay()
      }
      script.onerror = () => {
        console.error('Failed to load Ko-fi script')
        this.loaded = false
      }
      document.head.appendChild(script)
    } else if (window.kofiWidgetOverlay) {
      // 如果脚本已加载，直接初始化
      this.initKofiOverlay()
    }
  },
  beforeUnmount() {
    // 清理：移除 Ko-fi 浮动小部件（如果需要）
    // Ko-fi 小部件通常会自己管理 DOM，所以这里可能不需要特别处理
  },
  methods: {
    initKofiOverlay() {
      if (window.kofiWidgetOverlay) {
        try {
          window.kofiWidgetOverlay.draw('yangjerry666', {
            'type': 'floating-chat',
            'floating-chat.donateButton.text': 'Support me',
            'floating-chat.donateButton.background-color': '#e60012',
            'floating-chat.donateButton.text-color': '#fff'
          })
          this.loaded = true
          console.log('Ko-fi floating widget initialized successfully')
        } catch (error) {
          console.error('Ko-fi floating widget initialization error:', error)
          this.loaded = false
        }
      } else {
        this.loaded = false
      }
    }
  }
}
</script>

<style scoped>
.kofi-floating-widget {
  /* 这个组件本身不需要样式，Ko-fi 小部件会自己处理定位 */
  position: fixed;
  z-index: 9999;
  pointer-events: none;
}

/* 确保 Ko-fi 小部件可以点击 */
.kofi-floating-widget :deep(*) {
  pointer-events: auto;
}

/* 备用按钮样式 */
.kofi-fallback-button {
  position: fixed;
  bottom: 20px;
  left: 20px;
  padding: 12px 20px;
  background: linear-gradient(135deg, #e60012 0%, #ff4757 100%);
  color: white;
  text-decoration: none;
  border-radius: 25px;
  font-weight: 600;
  font-size: 14px;
  box-shadow: 0 4px 12px rgba(230, 0, 18, 0.3);
  transition: all 0.3s ease;
  z-index: 9999;
  pointer-events: auto;
}

.kofi-fallback-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(230, 0, 18, 0.4);
  background: linear-gradient(135deg, #ff4757 0%, #e60012 100%);
}
</style>
