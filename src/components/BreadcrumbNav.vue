<template>
  <nav class="breadcrumb-nav" aria-label="Breadcrumb">
    <ol class="breadcrumb-list">
      <li v-for="(item, index) in breadcrumbItems" :key="index" class="breadcrumb-item" :class="{ 'active': index === breadcrumbItems.length - 1 }">
        <span v-if="index === breadcrumbItems.length - 1">{{ item.name }}</span>
        <router-link v-else :to="item.url">{{ item.name }}</router-link>
        <span v-if="index < breadcrumbItems.length - 1" class="separator">/</span>
      </li>
    </ol>
  </nav>
</template>

<script>
import { ref, onMounted, onUnmounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import { createBreadcrumbSchema, addStructuredDataToPage } from '../utils/structuredData';

export default {
  name: 'BreadcrumbNav',
  props: {
    // 用户可以传入自定义的面包屑项目
    customItems: {
      type: Array,
      default: () => []
    },
    // 是否自动根据路由生成面包屑
    autoGenerate: {
      type: Boolean,
      default: true
    }
  },
  setup(props) {
    const route = useRoute();
    const breadcrumbItems = ref([]);
    let structuredDataScript = null;
    
    // 根据路径生成面包屑数组
    const generateBreadcrumbs = () => {
      if (props.customItems && props.customItems.length > 0) {
        breadcrumbItems.value = props.customItems;
      } else if (props.autoGenerate) {
        // 始终添加首页
        const crumbs = [
          { name: 'Home', url: '/' }
        ];
        
        // 如果当前不是首页，根据当前路径生成面包屑
        if (route.path !== '/') {
          // 获取路由元数据中的标题
          let currentName = route.meta.title || '';
          
          // 从标题中提取简短名称
          if (currentName) {
            // 移除任何品牌名称和后缀
            currentName = currentName.split('|')[0].trim();
            // 如果标题太长，进一步截断
            if (currentName.length > 50) {
              currentName = currentName.substring(0, 47) + '...';
            }
          } else {
            // 如果没有标题，使用路径的最后一段作为名称
            const pathSegments = route.path.split('/').filter(Boolean);
            currentName = pathSegments.length > 0 
              ? pathSegments[pathSegments.length - 1].split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' ')
              : 'Current Page';
          }
          
          // 检查是否有中间路径(例如博客文章页面等)
          const pathSegments = route.path.split('/').filter(Boolean);
          if (pathSegments.length > 1) {
            // 中间路径的处理
            if (pathSegments[0] === 'blog') {
              crumbs.push({ name: 'Blog', url: '/blog' });
            } else if (pathSegments[0].includes('chinese') && pathSegments[0].includes('names')) {
              crumbs.push({ name: 'Chinese Names', url: '/chinese-names' });
            }
          }
          
          // 添加当前页面
          crumbs.push({ name: currentName, url: route.path });
        }
        
        breadcrumbItems.value = crumbs;
      }
      
      // 添加结构化数据
      addBreadcrumbStructuredData();
    };
    
    // 添加面包屑结构化数据
    const addBreadcrumbStructuredData = () => {
      if (typeof document !== 'undefined') { // 确保只在客户端执行
        const schema = createBreadcrumbSchema(
          breadcrumbItems.value.map(item => ({
            name: item.name,
            url: `https://chinesename.us${item.url}`
          }))
        );
        
        structuredDataScript = addStructuredDataToPage(schema, 'breadcrumb-structured-data');
      }
    };
    
    // 监听路由变化
    watch(() => route.path, generateBreadcrumbs);
    
    // 在组件挂载时生成面包屑
    onMounted(() => {
      generateBreadcrumbs();
    });
    
    // 组件卸载时移除结构化数据
    onUnmounted(() => {
      if (structuredDataScript && structuredDataScript.parentNode && typeof document !== 'undefined') {
        structuredDataScript.parentNode.removeChild(structuredDataScript);
      }
    });
    
    return {
      breadcrumbItems
    };
  }
};
</script>

<style scoped>
.breadcrumb-nav {
  margin: 10px 0 20px;
  padding: 5px 0;
  border-bottom: 1px solid #eee;
  /* 确保与容器内容对齐 */
  width: 100%;
  max-width: 100%;
  position: relative;
  left: 0;
}

.breadcrumb-list {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 0.9rem;
}

.breadcrumb-item {
  display: inline-flex;
  align-items: center;
}

.breadcrumb-item a {
  color: #e60012;
  text-decoration: none;
}

.breadcrumb-item a:hover {
  text-decoration: underline;
}

.breadcrumb-item.active {
  color: #333;
}

.separator {
  margin: 0 8px;
  color: #999;
}

@media (max-width: 576px) {
  .breadcrumb-nav {
    margin: 5px 0 15px;
    font-size: 0.8rem;
  }
  
  .separator {
    margin: 0 5px;
  }
}
</style>
