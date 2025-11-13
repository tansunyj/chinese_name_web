// 整合的非重复中文女孩名字数据
import { allProcessedGirlNames } from './chineseGirlNamesProcessor';

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

const uniqueGirlNames = getUniqueNames(allProcessedGirlNames);

// 导出唯一的女孩名字数据
export { uniqueGirlNames };
export default uniqueGirlNames;
