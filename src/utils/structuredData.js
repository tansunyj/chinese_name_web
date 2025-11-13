/**
 * 结构化数据工具类
 * 用于创建各种类型的结构化数据JSON-LD
 */

/**
 * 创建网站结构化数据
 * @param {Object} options - 网站选项
 * @returns {Object} 网站结构化数据
 */
export function createWebsiteSchema(options = {}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": options.url || "https://chinesename.us/",
    "name": options.name || "Chinese Name Generator & Translator | Free English to Chinese | ChineseName.us",
    "description": options.description || "Get your accurate Chinese name translation with our free generator. Personalized Chinese names with authentic pronunciation, cultural meanings and significance for English names.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://chinesename.us/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };
}

/**
 * 创建Web应用结构化数据
 * @param {Object} options - 应用选项
 * @returns {Object} Web应用结构化数据
 */
export function createWebApplicationSchema(options = {}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": options.name || "Chinese Name Generator",
    "url": options.url || "https://chinesename.us/",
    "applicationCategory": options.category || "UtilityApplication",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": options.description || "Generate authentic Chinese names with meanings and proper pronunciation."
  };
}

/**
 * 创建HowTo结构化数据
 * @param {Object} options - HowTo选项
 * @param {Array} steps - 步骤数组
 * @returns {Object} HowTo结构化数据
 */
export function createHowToSchema(options = {}, steps = []) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": options.name || "How to Generate a Chinese Name",
    "description": options.description || "Learn how to create an authentic Chinese name with proper pronunciation and meaning.",
    "step": steps.map((step, index) => ({
      "@type": "HowToStep",
      "position": index + 1,
      "name": step.name,
      "text": step.text,
      "url": step.url || undefined
    }))
  };
}

/**
 * 创建列表页结构化数据
 * @param {Object} options - 列表页选项
 * @param {Array} items - 列表项数组
 * @returns {Object} 列表页结构化数据
 */
export function createItemListSchema(options = {}, items = []) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": item.type || "Thing",
        "name": item.name,
        "url": item.url,
        "description": item.description || undefined,
        "image": item.image || undefined
      }
    }))
  };
}

/**
 * 创建FAQ结构化数据
 * @param {Object} options - FAQ选项
 * @param {Array} questions - 问题数组
 * @returns {Object} FAQ结构化数据
 */
export function createFAQSchema(options = {}, questions = []) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": questions.map(q => ({
      "@type": "Question",
      "name": q.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": q.answer
      }
    }))
  };
}

/**
 * 创建文章结构化数据
 * @param {Object} options - 文章选项
 * @returns {Object} 文章结构化数据
 */
export function createArticleSchema(options = {}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": options.headline,
    "description": options.description,
    "image": options.image || undefined,
    "datePublished": options.datePublished || new Date().toISOString(),
    "dateModified": options.dateModified || new Date().toISOString(),
    "author": {
      "@type": "Person",
      "name": options.authorName || "ChineseName.us Team"
    },
    "publisher": {
      "@type": "Organization",
      "name": "ChineseName.us",
      "logo": {
        "@type": "ImageObject",
        "url": "https://chinesename.us/images/logo.png",
        "width": "600",
        "height": "60"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": options.url || "https://chinesename.us/"
    }
  };
}

/**
 * 创建面包屑结构化数据
 * @param {Array} items - 面包屑项数组
 * @returns {Object} 面包屑结构化数据
 */
export function createBreadcrumbSchema(items = []) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
}

/**
 * 将结构化数据添加到页面
 * @param {Object} schema - 结构化数据对象
 * @param {String} id - script元素ID
 * @returns {HTMLElement} 创建的script元素
 */
export function addStructuredDataToPage(schema, id = 'structured-data-script') {
  // 移除已有的同ID结构化数据脚本
  const existingScript = document.getElementById(id);
  if (existingScript && existingScript.parentNode) {
    existingScript.parentNode.removeChild(existingScript);
  }

  // 创建新的script元素
  const script = document.createElement('script');
  script.id = id;
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(schema);
  
  // 添加到head
  document.head.appendChild(script);
  
  return script;
}
