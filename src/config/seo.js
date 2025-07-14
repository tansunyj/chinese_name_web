/**
 * seo.js
 * 管理网站的SEO设置
 */

// 网站的主域名
export const BASE_URL = 'https://www.chinesename.us';

// 网站的默认标题
export const DEFAULT_TITLE = 'Free Chinese Name Generator | Chinese Name Translation';

// 网站的默认描述
export const DEFAULT_DESCRIPTION = 'Transform your name into Chinese with our free name generator. Get personalized Chinese names with meanings and learn how to translate Chinese names into English.';

// 网站的默认关键词
export const DEFAULT_KEYWORDS = 'chinese name translator, english to chinese name, chinese name generator, name translation chinese, mandarin chinese names, chinese name meaning';

// 规范链接配置
export const canonicalConfig = {
  // 是否在URL中保留尾部斜杠
  trailingSlash: false,
  
  // 是否强制使用HTTPS
  forceHttps: true,
  
  // 是否在URL中保留www
  includeWww: true
};

/**
 * 生成规范链接
 * @param {string} path - 页面路径
 * @returns {string} 完整的规范URL
 */
export function generateCanonicalUrl(path) {
  // 移除查询参数
  const cleanPath = path.split('?')[0];
  
  // 确保路径以斜杠开头
  const normalizedPath = cleanPath.startsWith('/') ? cleanPath : `/${cleanPath}`;
  
  // 处理尾部斜杠
  let finalPath = normalizedPath;
  if (normalizedPath !== '/' && normalizedPath.endsWith('/')) {
    // 如果配置不保留尾部斜杠，则移除
    if (!canonicalConfig.trailingSlash) {
      finalPath = normalizedPath.slice(0, -1);
    }
  } else if (normalizedPath !== '/' && !normalizedPath.endsWith('/')) {
    // 如果配置保留尾部斜杠，则添加
    if (canonicalConfig.trailingSlash) {
      finalPath = `${normalizedPath}/`;
    }
  }
  
  // 构建完整URL
  return `${BASE_URL}${finalPath}`;
}

/**
 * 检查URL是否是规范URL
 * @param {string} url - 要检查的URL
 * @returns {boolean} 如果URL是规范URL则返回true
 */
export function isCanonicalUrl(url) {
  if (!url) return false;
  
  try {
    const urlObj = new URL(url);
    
    // 检查协议
    if (canonicalConfig.forceHttps && urlObj.protocol !== 'https:') {
      return false;
    }
    
    // 检查www
    const host = urlObj.hostname;
    if (canonicalConfig.includeWww && !host.startsWith('www.')) {
      return false;
    } else if (!canonicalConfig.includeWww && host.startsWith('www.')) {
      return false;
    }
    
    // 检查尾部斜杠
    const path = urlObj.pathname;
    if (path !== '/' && path.endsWith('/') && !canonicalConfig.trailingSlash) {
      return false;
    } else if (path !== '/' && !path.endsWith('/') && canonicalConfig.trailingSlash) {
      return false;
    }
    
    return true;
  } catch (e) {
    return false;
  }
}

// 导出默认配置
export default {
  BASE_URL,
  DEFAULT_TITLE,
  DEFAULT_DESCRIPTION,
  DEFAULT_KEYWORDS,
  canonicalConfig,
  generateCanonicalUrl,
  isCanonicalUrl
}; 