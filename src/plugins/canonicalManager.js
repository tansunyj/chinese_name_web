/**
 * canonicalManager.js
 * 用于管理网站的规范链接(canonical URL)，解决重复内容问题
 */

import { BASE_URL, generateCanonicalUrl, canonicalConfig } from '../config/seo';

/**
 * 设置页面的canonical链接
 * @param {string} path - 当前页面路径
 * @param {Object} routeMeta - 路由元数据，包含canonicalPath
 */
export function setCanonicalLink(path, routeMeta = null) {
  // 移除任何现有的canonical标签
  const existingCanonical = document.querySelector('link[rel="canonical"]');
  if (existingCanonical) {
    existingCanonical.remove();
  }

  // 创建新的canonical标签
  const canonicalLink = document.createElement('link');
  canonicalLink.rel = 'canonical';
  
  // 优先使用路由元数据中的canonicalPath，如果有的话
  let canonicalPath = path;
  if (routeMeta && routeMeta.canonicalPath) {
    canonicalPath = routeMeta.canonicalPath;
  } else {
    // 如果没有指定canonicalPath，则使用当前路径，但去除查询参数
    canonicalPath = path.split('?')[0];
  }
  
  // 构建完整的URL
  canonicalLink.href = generateCanonicalUrl(canonicalPath);
  
  // 将标签添加到文档头部
  document.head.appendChild(canonicalLink);
  
  // 添加额外的元标签，帮助搜索引擎理解页面内容
  addSEOMetaTags(routeMeta);
  
  // 添加替代语言链接（如果有）
  addAlternateLanguageLinks(canonicalPath);
}

/**
 * 添加额外的SEO相关元标签
 * @param {Object} routeMeta - 路由元数据
 */
function addSEOMetaTags(routeMeta) {
  if (!routeMeta) return;
  
  // 更新页面标题
  if (routeMeta.title) {
    document.title = routeMeta.title;
  }
  
  // 添加或更新description元标签
  if (routeMeta.description) {
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = routeMeta.description;
  }
  
  // 添加或更新keywords元标签
  if (routeMeta.keywords) {
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.name = 'keywords';
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.content = routeMeta.keywords;
  }
  
  // 添加Open Graph标签（如果提供）
  if (routeMeta.ogTitle) {
    updateMetaTag('property', 'og:title', routeMeta.ogTitle);
  }
  
  if (routeMeta.ogDescription) {
    updateMetaTag('property', 'og:description', routeMeta.ogDescription);
  }
  
  if (routeMeta.ogImage) {
    updateMetaTag('property', 'og:image', routeMeta.ogImage);
  }
  
  if (routeMeta.ogUrl) {
    updateMetaTag('property', 'og:url', routeMeta.ogUrl);
  }
  
  // 添加Twitter Card标签（如果提供）
  if (routeMeta.twitterCard) {
    updateMetaTag('name', 'twitter:card', routeMeta.twitterCard);
  }
  
  if (routeMeta.twitterTitle) {
    updateMetaTag('name', 'twitter:title', routeMeta.twitterTitle);
  }
  
  if (routeMeta.twitterDescription) {
    updateMetaTag('name', 'twitter:description', routeMeta.twitterDescription);
  }
  
  if (routeMeta.twitterImage) {
    updateMetaTag('name', 'twitter:image', routeMeta.twitterImage);
  }
  
  // 添加移动设备视口元标签（如果不存在）
  if (!document.querySelector('meta[name="viewport"]')) {
    const viewport = document.createElement('meta');
    viewport.name = 'viewport';
    viewport.content = 'width=device-width, initial-scale=1.0';
    document.head.appendChild(viewport);
  }
}

/**
 * 更新或创建meta标签的辅助函数
 * @param {string} attribute - 属性名称 ('name' 或 'property')
 * @param {string} value - 属性值
 * @param {string} content - 内容
 */
function updateMetaTag(attribute, value, content) {
  let metaTag = document.querySelector(`meta[${attribute}="${value}"]`);
  if (!metaTag) {
    metaTag = document.createElement('meta');
    metaTag.setAttribute(attribute, value);
    document.head.appendChild(metaTag);
  }
  metaTag.content = content;
}

/**
 * 添加替代语言链接
 * @param {string} path - 当前页面路径
 */
function addAlternateLanguageLinks(path) {
  // 移除任何现有的替代语言链接
  document.querySelectorAll('link[rel="alternate"]').forEach(link => {
    if (link.getAttribute('hreflang')) {
      link.remove();
    }
  });
  
  // 目前网站只有英文版本，所以只添加英文的替代语言链接
  const alternateLink = document.createElement('link');
  alternateLink.rel = 'alternate';
  alternateLink.hreflang = 'en';
  alternateLink.href = generateCanonicalUrl(path);
  document.head.appendChild(alternateLink);
  
  // 添加x-default链接（搜索引擎默认版本）
  const xDefaultLink = document.createElement('link');
  xDefaultLink.rel = 'alternate';
  xDefaultLink.hreflang = 'x-default';
  xDefaultLink.href = generateCanonicalUrl(path);
  document.head.appendChild(xDefaultLink);
}

/**
 * Vue插件：自动管理canonical链接
 */
export const CanonicalPlugin = {
  install(app, options) {
    // 获取router实例
    const router = options?.router;
    
    if (router) {
      // 在路由变化后更新canonical链接
      router.afterEach((to) => {
        setCanonicalLink(to.path, to.meta);
      });
    } else {
      console.warn('CanonicalPlugin: router not provided, canonical links will not be automatically updated');
    }
  }
};

export default CanonicalPlugin; 