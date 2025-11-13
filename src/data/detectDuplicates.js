// 用于检测和删除重复的女孩名字数据
import { allProcessedGirlNames } from './chineseGirlNamesProcessor';

// 只检测汉字名字重复的情况
function detectDuplicates() {
  // 创建映射表用于查找重复项
  const nameMap = new Map();
  const duplicates = [];
  
  allProcessedGirlNames.forEach(name => {
    // 使用中文名称作为唯一标识符
    const key = name.chinese;
    
    if (nameMap.has(key)) {
      // 找到重复项
      const existingName = nameMap.get(key);
      duplicates.push({
        duplicate: name,
        original: existingName,
        property: 'chinese'
      });
    } else {
      // 添加到映射表
      nameMap.set(key, name);
    }
  });
  
  return duplicates;
}

// 删除重复项并返回唯一的数组
function removeDuplicates(names) {
  const uniqueNameMap = new Map();
  const uniqueNames = [];
  
  names.forEach(name => {
    const key = name.chinese;
    if (!uniqueNameMap.has(key)) {
      uniqueNameMap.set(key, true);
      uniqueNames.push(name);
    }
  });
  
  return uniqueNames;
}

// 运行检测并打印结果
const duplicates = detectDuplicates();
console.log('检测到的重复名字:');
duplicates.forEach(item => {
  console.log(`重复: ${item.duplicate.chinese} (${item.duplicate.pinyin}) [ID: ${item.duplicate.id}]`);
  console.log(`原始: ${item.original.chinese} (${item.original.pinyin}) [ID: ${item.original.id}]`);
  console.log('-------------------');
});

// 生成无重复的名字数组
const uniqueGirlNames = removeDuplicates(allProcessedGirlNames);
console.log(`原始数组长度: ${allProcessedGirlNames.length}`);
console.log(`去重后数组长度: ${uniqueGirlNames.length}`);
console.log(`删除了 ${allProcessedGirlNames.length - uniqueGirlNames.length} 个重复项`);

export { detectDuplicates, removeDuplicates, uniqueGirlNames };
