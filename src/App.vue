<script>
import MainLayout from '@/layouts/MainLayout.vue'
import { useI18n } from 'vue-i18n'

export default {
  name: 'App',
  components: {
    MainLayout
  },
  setup() {
    const { locale } = useI18n();
    // 确保应用始终使用英文
    locale.value = 'en';
    localStorage.setItem('userLanguage', 'en');
    return {};
  }
}
</script>

<template>
  <MainLayout>
    <router-view />
  </MainLayout>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Arial', sans-serif;
  line-height: 1.6;
  color: #333;
  background-color: #f8f8f8;
}

a {
  text-decoration: none;
  color: inherit;
}

ul {
  list-style: none;
}

img {
  max-width: 100%;
}

.container {
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 20px;
}
</style>
