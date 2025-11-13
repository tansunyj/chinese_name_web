// 查找和显示重复的女孩名字
import { allProcessedGirlNames } from './chineseGirlNamesProcessor.js';

function findDuplicateNames(names) {
  const nameMap = new Map();
  const duplicates = [];

  names.forEach(name => {
    if (!name || !name.chinese) return;
    
    const key = name.chinese;
    
    if (nameMap.has(key)) {
      // 找到重复
      duplicates.push({
        duplicate: name,
        original: nameMap.get(key)
      });
    } else {
      // 添加到映射
      nameMap.set(key, name);
    }
  });
  
  return duplicates;
}

// 找出重复的女孩名字
const duplicates = findDuplicateNames(allProcessedGirlNames);

console.log(`总共找到 ${duplicates.length} 个重复的女孩名字:`);
duplicates.forEach(item => {
  console.log(`重复名字: ${item.duplicate.chinese} (${item.duplicate.pinyin}) [ID: ${item.duplicate.id}]`);
  console.log(`原始名字: ${item.original.chinese} (${item.original.pinyin}) [ID: ${item.original.id}]`);
  console.log('-------------------------------------------------');
});

// 生成无重复名字列表
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

const uniqueNames = getUniqueNames(allProcessedGirlNames);
console.log(`原始名字数量: ${allProcessedGirlNames.length}`);
console.log(`无重复名字数量: ${uniqueNames.length}`);
console.log(`已删除 ${allProcessedGirlNames.length - uniqueNames.length} 个重复名字`);

export { findDuplicateNames, getUniqueNames, duplicates, uniqueNames };
