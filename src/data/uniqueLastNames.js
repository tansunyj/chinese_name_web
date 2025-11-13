// 不包含重复项的中文姓氏数据
import { chineseLastNames } from './chineseLastNames';
import { chineseLastNames2 } from './chineseLastNames2';
import detailedLastNames from './chineseLastNamesDetailed';

// 创建不包含重复项的姓氏数据
function createUniqueLastNames() {
  // 创建一个用于跟踪唯一姓氏的Map
  const uniqueSurnames = new Map();
  
  // 优先使用detailedLastNames中的数据
  detailedLastNames.forEach(surname => {
    uniqueSurnames.set(surname.chinese, surname);
  });
  
  // 然后添加chineseLastNames中不重复的数据
  chineseLastNames.forEach(surname => {
    if (!uniqueSurnames.has(surname.chinese)) {
      uniqueSurnames.set(surname.chinese, surname);
    }
  });
  
  // 最后添加chineseLastNames2中不重复的数据
  chineseLastNames2.forEach(surname => {
    if (!uniqueSurnames.has(surname.chinese)) {
      uniqueSurnames.set(surname.chinese, surname);
    }
  });
  
  // 将Map转换回数组
  return Array.from(uniqueSurnames.values());
}

// 创建不重复的数据集
export const uniqueLastNames = createUniqueLastNames();

export default uniqueLastNames;
