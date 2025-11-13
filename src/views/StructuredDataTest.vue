<template>
  <div class="structured-data-test-page">
    <div class="container">
      <h1 class="page-title">结构化数据测试页面</h1>

      <!-- 面包屑导航 -->
      <BreadcrumbNav />
      
      <div class="content">
        <section class="test-section">
          <h2>当前页面结构化数据</h2>
          <p>本页面包含多种类型的结构化数据，用于验证其正确实现和效果。</p>
          
          <h3>已添加的结构化数据类型:</h3>
          <ul class="structured-data-list">
            <li v-for="(schema, index) in structuredDataList" :key="index" class="schema-item">
              <div class="schema-type">{{ schema.type }}</div>
              <div class="schema-description">{{ schema.description }}</div>
              <button @click="viewStructuredData(schema.id)" class="view-button">查看JSON</button>
            </li>
          </ul>
          
          <div v-if="selectedSchema" class="schema-preview">
            <h4>{{ selectedSchema.type }} JSON-LD:</h4>
            <pre class="json-preview">{{ selectedSchemaJson }}</pre>
          </div>
        </section>
        
        <section class="test-section">
          <h2>验证结果</h2>
          <p>使用Google结构化数据测试工具验证:</p>
          <a href="https://search.google.com/test/rich-results" target="_blank" class="external-link">
            打开Google结构化数据测试工具
          </a>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import BreadcrumbNav from '@/components/BreadcrumbNav.vue';
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { 
  createWebsiteSchema, 
  createWebApplicationSchema, 
  createHowToSchema, 
  createItemListSchema,
  createFAQSchema,
  createArticleSchema,
  createBreadcrumbSchema,
  addStructuredDataToPage 
} from '@/utils/structuredData';

export default {
  name: 'StructuredDataTest',
  components: {
    BreadcrumbNav
  },
  setup() {
    const structuredDataList = ref([]);
    const selectedSchema = ref(null);
    const selectedSchemaJson = ref('');
    
    // 结构化数据脚本引用数组
    const structuredDataScripts = [];
    
    onMounted(() => {
      // 添加各种结构化数据
      addAllStructuredData();
    });
    
    onBeforeUnmount(() => {
      // 移除所有结构化数据脚本
      structuredDataScripts.forEach(script => {
        if (script && script.parentNode) {
          script.parentNode.removeChild(script);
        }
      });
    });
    
    // 添加所有类型的结构化数据
    const addAllStructuredData = () => {
      // WebSite
      addWebsiteSchema();
      
      // WebApplication
      addWebAppSchema();
      
      // HowTo
      addHowToSchema();
      
      // ItemList
      addItemListSchema();
      
      // FAQ
      addFAQSchema();
      
      // Article
      addArticleSchema();
      
      // BreadcrumbList
      addBreadcrumbSchema();
    };
    
    // 添加WebSite结构化数据
    const addWebsiteSchema = () => {
      const schema = createWebsiteSchema({
        url: 'https://chinesename.us/',
        name: 'ChineseName.us | Chinese Name Generator & Translator',
        description: 'Generate authentic Chinese names with meanings and proper pronunciation.'
      });
      
      const script = addStructuredDataToPage(schema, 'website-structured-data');
      structuredDataScripts.push(script);
      
      structuredDataList.value.push({
        id: 'website-structured-data',
        type: 'WebSite',
        description: '网站结构化数据，包含网站名称、URL和描述'
      });
    };
    
    // 添加WebApplication结构化数据
    const addWebAppSchema = () => {
      const schema = createWebApplicationSchema({
        name: 'Chinese Name Generator',
        url: 'https://chinesename.us/name-generator',
        category: 'UtilityApplication',
        description: 'Generate authentic Chinese names with meanings and proper pronunciation.'
      });
      
      const script = addStructuredDataToPage(schema, 'webapp-structured-data');
      structuredDataScripts.push(script);
      
      structuredDataList.value.push({
        id: 'webapp-structured-data',
        type: 'WebApplication',
        description: '应用结构化数据，包含应用名称、类别和功能说明'
      });
    };
    
    // 添加HowTo结构化数据
    const addHowToSchema = () => {
      const schema = createHowToSchema(
        {
          name: 'How to Generate a Chinese Name',
          description: 'Learn how to create an authentic Chinese name with proper pronunciation and meaning.'
        },
        [
          {
            name: 'Choose name type',
            text: 'Select whether you want a traditional or modern Chinese name'
          },
          {
            name: 'Enter preferences',
            text: 'Specify your gender, meaning preferences, and other options'
          },
          {
            name: 'Generate names',
            text: 'Click the generate button to see your personalized Chinese name options'
          }
        ]
      );
      
      const script = addStructuredDataToPage(schema, 'howto-structured-data');
      structuredDataScripts.push(script);
      
      structuredDataList.value.push({
        id: 'howto-structured-data',
        type: 'HowTo',
        description: '操作指南结构化数据，包含步骤说明'
      });
    };
    
    // 添加ItemList结构化数据
    const addItemListSchema = () => {
      const items = [
        {
          name: '李明 (Lǐ Míng)',
          description: '明亮的光芒',
          url: 'https://chinesename.us/chinese-names-examples/li-ming',
          type: 'Thing'
        },
        {
          name: '王芳 (Wáng Fāng)',
          description: '芬芳的花朵',
          url: 'https://chinesename.us/chinese-names-examples/wang-fang',
          type: 'Thing'
        },
        {
          name: '张伟 (Zhāng Wěi)',
          description: '伟大的成就',
          url: 'https://chinesename.us/chinese-names-examples/zhang-wei',
          type: 'Thing'
        }
      ];
      
      const schema = createItemListSchema({ name: 'Popular Chinese Names' }, items);
      
      const script = addStructuredDataToPage(schema, 'itemlist-structured-data');
      structuredDataScripts.push(script);
      
      structuredDataList.value.push({
        id: 'itemlist-structured-data',
        type: 'ItemList',
        description: '列表结构化数据，包含中文名字列表'
      });
    };
    
    // 添加FAQ结构化数据
    const addFAQSchema = () => {
      const questions = [
        {
          question: 'How do Chinese names work?',
          answer: 'Chinese names typically consist of a family name followed by a given name. Family names are passed down paternally, while given names are chosen based on various factors including meaning, sound, and sometimes numerology.'
        },
        {
          question: 'Can I have a Chinese name if I\'m not Chinese?',
          answer: 'Yes, many people adopt Chinese names for business, cultural appreciation, or when learning the language. It\'s respectful to choose a name with positive meaning and proper pronunciation.'
        },
        {
          question: 'How do I pronounce my Chinese name correctly?',
          answer: 'Chinese is a tonal language, so pronunciation includes both the sounds and the tones. Each character has a specific tone that changes its meaning. Learning pinyin (the romanization system) with tone marks will help you pronounce your name correctly.'
        }
      ];
      
      const schema = createFAQSchema({}, questions);
      
      const script = addStructuredDataToPage(schema, 'faq-structured-data');
      structuredDataScripts.push(script);
      
      structuredDataList.value.push({
        id: 'faq-structured-data',
        type: 'FAQPage',
        description: '常见问题结构化数据，包含问答列表'
      });
    };
    
    // 添加Article结构化数据
    const addArticleSchema = () => {
      const schema = createArticleSchema({
        headline: 'Understanding Chinese Naming Traditions',
        description: 'Learn about the rich cultural traditions behind Chinese names and how they reflect family values, aspirations, and cultural heritage.',
        image: 'https://chinesename.us/images/chinese-naming-traditions.jpg',
        datePublished: '2025-07-15T14:30:00Z',
        dateModified: '2025-11-12T09:45:00Z',
        authorName: 'ChineseName.us Team',
        url: 'https://chinesename.us/blog/chinese-naming-traditions'
      });
      
      const script = addStructuredDataToPage(schema, 'article-structured-data');
      structuredDataScripts.push(script);
      
      structuredDataList.value.push({
        id: 'article-structured-data',
        type: 'Article',
        description: '文章结构化数据，包含标题、作者、发布日期等信息'
      });
    };
    
    // 添加BreadcrumbList结构化数据
    const addBreadcrumbSchema = () => {
      const items = [
        { name: 'Home', url: 'https://chinesename.us/' },
        { name: 'Tools', url: 'https://chinesename.us/tools/' },
        { name: 'Structured Data Test', url: 'https://chinesename.us/tools/structured-data-test' }
      ];
      
      const schema = createBreadcrumbSchema(items);
      
      const script = addStructuredDataToPage(schema, 'breadcrumb-structured-data');
      structuredDataScripts.push(script);
      
      structuredDataList.value.push({
        id: 'breadcrumb-structured-data',
        type: 'BreadcrumbList',
        description: '面包屑导航结构化数据，包含层级页面路径'
      });
    };
    
    // 查看结构化数据JSON
    const viewStructuredData = (id) => {
      const script = document.getElementById(id);
      if (script) {
        try {
          const data = JSON.parse(script.textContent);
          selectedSchema.value = structuredDataList.value.find(s => s.id === id);
          selectedSchemaJson.value = JSON.stringify(data, null, 2);
        } catch (error) {
          console.error('Error parsing structured data:', error);
          selectedSchemaJson.value = '解析错误: ' + error.message;
        }
      }
    };
    
    return {
      structuredDataList,
      selectedSchema,
      selectedSchemaJson,
      viewStructuredData
    };
  }
};
</script>

<style scoped>
.structured-data-test-page {
  padding: 20px 0 60px;
}

.page-title {
  font-size: 2rem;
  margin-bottom: 20px;
  color: #333;
}

.test-section {
  background: white;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 30px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.test-section h2 {
  font-size: 1.5rem;
  margin-bottom: 15px;
  color: #333;
}

.test-section h3 {
  font-size: 1.2rem;
  margin: 20px 0 10px;
  color: #444;
}

.structured-data-list {
  list-style: none;
  padding: 0;
}

.schema-item {
  background: #f8f8f8;
  border-radius: 6px;
  padding: 15px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}

.schema-type {
  font-weight: bold;
  color: #e60012;
  min-width: 120px;
}

.schema-description {
  flex: 1;
  margin: 0 15px;
}

.view-button {
  background: #e60012;
  color: white;
  border: none;
  padding: 5px 12px;
  border-radius: 4px;
  cursor: pointer;
}

.view-button:hover {
  background: #cc0010;
}

.schema-preview {
  background: #f5f5f5;
  border-radius: 6px;
  padding: 15px;
  margin-top: 20px;
}

.json-preview {
  background: #333;
  color: #f8f8f8;
  padding: 15px;
  border-radius: 4px;
  overflow: auto;
  max-height: 300px;
  font-family: monospace;
  white-space: pre-wrap;
}

.external-link {
  display: inline-block;
  background: #4285f4;
  color: white;
  padding: 8px 16px;
  text-decoration: none;
  border-radius: 4px;
  margin-top: 10px;
}

.external-link:hover {
  background: #3367d6;
}

@media (max-width: 768px) {
  .schema-item {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .schema-type,
  .schema-description {
    margin-bottom: 10px;
  }
}
</style>
