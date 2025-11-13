// 整合的非重复中文男孩名字数据
import { allProcessedBoyNames } from './chineseBoyNamesProcessor';

// 去除重复项
function getUniqueNames(names) {
  const uniqueMap = new Map();
  const uniqueNames = [];
  
  names.forEach(name => {
    if (!name || !name.chinese) return;
    
    const key = name.chinese;
    if (!uniqueMap.has(key)) {
      uniqueMap.set(key, true);
      uniqueNames.push(name);
    }
  });
  
  return uniqueNames;
}

// 执行去重
const uniqueBoyNames = getUniqueNames(allProcessedBoyNames);

// 打印去重信息
console.log(`原始男孩名字数量: ${allProcessedBoyNames.length}`);
console.log(`去重后男孩名字数量: ${uniqueBoyNames.length}`);
console.log(`删除了 ${allProcessedBoyNames.length - uniqueBoyNames.length} 个重复的男孩名字`);

// 导出唯一的男孩名字数据
export { uniqueBoyNames };
export default uniqueBoyNames;
