/**
 * 这是一个批量修复脚本，用于添加面包屑导航到所有缺少它的页面
 * 使用方法：在终端中运行 node fix-breadcrumb.js
 */
const fs = require('fs');
const path = require('path');

// 视图目录
const viewsDir = path.join(__dirname, 'src', 'views');

// 导入和组件声明模板
const breadcrumbImport = "import BreadcrumbNav from '@/components/BreadcrumbNav.vue';";
const breadcrumbComponent = "BreadcrumbNav,";
const breadcrumbTemplate = '  <!-- 面包屑导航 -->\n      <BreadcrumbNav />';

// 处理单个文件
function processFile(filePath) {
  // 读取文件
  let content = fs.readFileSync(filePath, 'utf8');
  const fileName = path.basename(filePath);
  
  // 如果是首页或者文件名不是.vue，跳过
  if (fileName === 'HomePage.vue' || !fileName.endsWith('.vue')) {
    console.log(`Skipping ${fileName}`);
    return;
  }
  
  console.log(`Processing ${fileName}`);
  
  let modified = false;
  
  // 检查是否已经有面包屑
  if (!content.includes('<BreadcrumbNav />') && !content.includes('<BreadcrumbNav/>')) {
    // 添加面包屑到模板
    const containerPattern = /<div class="container">([\s\S]*?)(<h1|<div)/i;
    const match = content.match(containerPattern);
    
    if (match) {
      const replacement = `<div class="container">\n${breadcrumbTemplate}\n      $2`;
      content = content.replace(containerPattern, replacement);
      modified = true;
      console.log(`Added breadcrumb template to ${fileName}`);
    }
    
    // 添加导入
    if (!content.includes("import BreadcrumbNav")) {
      const scriptPattern = /<script>([\s\S]*?)import/i;
      const scriptMatch = content.match(scriptPattern);
      
      if (scriptMatch) {
        content = content.replace(scriptPattern, `<script>\n${breadcrumbImport}\nimport`);
        modified = true;
        console.log(`Added breadcrumb import to ${fileName}`);
      }
      
      // 添加组件声明
      const componentsPattern = /components:\s*{([\s\S]*?)},/i;
      const componentsMatch = content.match(componentsPattern);
      
      if (componentsMatch) {
        content = content.replace(componentsPattern, `components: {\n    ${breadcrumbComponent}$1},`);
        modified = true;
        console.log(`Added breadcrumb component to ${fileName}`);
      } else {
        // 可能没有组件声明，添加一个
        const exportDefaultPattern = /export default\s*{([\s\S]*?)data\(\)/i;
        const exportMatch = content.match(exportDefaultPattern);
        
        if (exportMatch) {
          content = content.replace(exportDefaultPattern, `export default {\n  components: {\n    BreadcrumbNav\n  },\n$1data()`);
          modified = true;
          console.log(`Added new components section to ${fileName}`);
        }
      }
    }
  }
  
  // 保存修改后的文件
  if (modified) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${fileName}`);
  } else {
    console.log(`No changes needed for ${fileName}`);
  }
}

// 处理目录中的所有文件
function processDirectory(dirPath) {
  const files = fs.readdirSync(dirPath);
  
  files.forEach(file => {
    const filePath = path.join(dirPath, file);
    const stats = fs.statSync(filePath);
    
    if (stats.isDirectory()) {
      // 递归处理子目录
      processDirectory(filePath);
    } else if (file.endsWith('.vue')) {
      // 处理Vue文件
      processFile(filePath);
    }
  });
}

// 开始处理
console.log('Starting breadcrumb navigation fix...');
processDirectory(viewsDir);
console.log('Breadcrumb navigation fix completed.');

// 输出使用说明
console.log('\nTo run this script, use:');
console.log('node fix-breadcrumb.js');
