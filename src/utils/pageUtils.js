/**
 * 页面工具函数
 * 用于统一页面结构和导航组件
 */

// 添加面包屑到页面
export function addBreadcrumbToPage(page, BreadcrumbNav) {
  if (!page.components) {
    page.components = {};
  }
  
  // 添加面包屑组件
  page.components.BreadcrumbNav = BreadcrumbNav;
  
  return page;
}

// 标准页面容器样式
export const pageContainerStyle = {
  maxWidth: '1600px',
  width: '100%',
  margin: '0 auto',
  padding: '0 30px',
};

// 标准面包屑位置样式
export const breadcrumbStyle = {
  margin: '10px 0 20px',
  padding: '5px 0',
  borderBottom: '1px solid #eee',
  width: '100%',
  maxWidth: '100%',
};
