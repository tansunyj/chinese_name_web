<template>
  <div class="main-layout">
    <AppHeader />
    <main class="main-content">
      <slot></slot>
    </main>
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'

export default {
  name: 'MainLayout',
  components: {
    AppHeader,
    AppFooter
  }
}
</script>

<style scoped>
.main-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  overflow-x: hidden;
}

.main-content {
  flex: 1;
  padding-top: 70px; /* 为固定头部导航留出空间 */
  width: 100%;
}

@media (max-width: 980px) {
  .main-content {
    padding-top: 120px; /* 在移动设备上为扩展的导航栏留出更多空间 */
  }
}
</style> 