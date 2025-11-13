// 计数器脚本
// 导入原始数据源
import { allProcessedBoyNames } from './chineseBoyNamesProcessor.js';

// 辅助函数：计算唯一名字
function countUniqueNames(names) {
  const uniqueMap = new Map();
  
  names.forEach(name => {
    if (name && name.chinese) {
      uniqueMap.set(name.chinese, true);
    }
  });
  
  return uniqueMap.size;
}

// 获取原始和唯一的男孩名字数量
const originalCount = allProcessedBoyNames.length;
const uniqueCount = countUniqueNames(allProcessedBoyNames);

console.log(`原始男孩名字数量: ${originalCount}`);
console.log(`唯一男孩名字数量: ${uniqueCount}`);
console.log(`重复数量: ${originalCount - uniqueCount}`);
