// 计算姓氏数据的统计信息
import { chineseLastNames } from './chineseLastNames';
import { chineseLastNames2 } from './chineseLastNames2';
import detailedLastNames from './chineseLastNamesDetailed';
import uniqueLastNames from './uniqueLastNames';

// 每个数据源的数量
console.log('detailedLastNames count:', detailedLastNames.length);
console.log('chineseLastNames count:', chineseLastNames.length);
console.log('chineseLastNames2 count:', chineseLastNames2.length);
console.log('Total combined (potentially with duplicates):', detailedLastNames.length + chineseLastNames.length + chineseLastNames2.length);

// 去重后的数量
console.log('uniqueLastNames count (after deduplication):', uniqueLastNames.length);

// 找出重复的姓氏
const allLastNames = [...detailedLastNames, ...chineseLastNames, ...chineseLastNames2];
const seen = new Set();
const duplicates = new Set();

allLastNames.forEach(surname => {
  if (seen.has(surname.chinese)) {
    duplicates.add(surname.chinese);
  } else {
    seen.add(surname.chinese);
  }
});

console.log('Total unique surnames:', seen.size);
console.log('Duplicates:', [...duplicates]);
console.log('Number of duplicates:', duplicates.size);

// 检查某些特定姓氏的重复情况
function checkDuplicates(chineseChar) {
  const foundInstances = allLastNames.filter(surname => surname.chinese === chineseChar);
  console.log(`Instances of ${chineseChar}:`, foundInstances.length);
  console.log(foundInstances);
}

// 检查一些常见姓氏
['王', '李', '张', '赵', '钱'].forEach(checkDuplicates);

export const stats = {
  detailedCount: detailedLastNames.length,
  lastNamesCount: chineseLastNames.length,
  lastNames2Count: chineseLastNames2.length,
  combinedCount: detailedLastNames.length + chineseLastNames.length + chineseLastNames2.length,
  uniqueCount: uniqueLastNames.length,
  duplicateCount: duplicates.size,
  duplicates: [...duplicates]
};
