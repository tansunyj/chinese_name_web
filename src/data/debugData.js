// 姓氏数据调试文件
import uniqueLastNames from './uniqueLastNames';
import { chineseLastNames } from './chineseLastNames';
import { chineseLastNames2 } from './chineseLastNames2';
import detailedLastNames from './chineseLastNamesDetailed';

// 检查所有数据源
console.log('Debug: uniqueLastNames exists:', !!uniqueLastNames);
console.log('Debug: uniqueLastNames is array:', Array.isArray(uniqueLastNames));
console.log('Debug: uniqueLastNames length:', uniqueLastNames?.length || 0);
console.log('Debug: First uniqueLastName sample:', uniqueLastNames?.[0] ? JSON.stringify(uniqueLastNames[0]) : 'No data');

console.log('Debug: chineseLastNames exists:', !!chineseLastNames);
console.log('Debug: chineseLastNames is array:', Array.isArray(chineseLastNames));
console.log('Debug: chineseLastNames length:', chineseLastNames?.length || 0);
console.log('Debug: First chineseLastName sample:', chineseLastNames?.[0] ? JSON.stringify(chineseLastNames[0]) : 'No data');

console.log('Debug: chineseLastNames2 exists:', !!chineseLastNames2);
console.log('Debug: chineseLastNames2 is array:', Array.isArray(chineseLastNames2));
console.log('Debug: chineseLastNames2 length:', chineseLastNames2?.length || 0);
console.log('Debug: First chineseLastName2 sample:', chineseLastNames2?.[0] ? JSON.stringify(chineseLastNames2[0]) : 'No data');

console.log('Debug: detailedLastNames exists:', !!detailedLastNames);
console.log('Debug: detailedLastNames is array:', Array.isArray(detailedLastNames));
console.log('Debug: detailedLastNames length:', detailedLastNames?.length || 0);
console.log('Debug: First detailedLastName sample:', detailedLastNames?.[0] ? JSON.stringify(detailedLastNames[0]) : 'No data');

// 确认导出值是否正确
export default {
  uniqueLastNamesStatus: {
    exists: !!uniqueLastNames,
    isArray: Array.isArray(uniqueLastNames),
    length: uniqueLastNames?.length || 0,
    sample: uniqueLastNames?.[0] || null
  },
  chineseLastNamesStatus: {
    exists: !!chineseLastNames,
    isArray: Array.isArray(chineseLastNames),
    length: chineseLastNames?.length || 0,
    sample: chineseLastNames?.[0] || null
  },
  chineseLastNames2Status: {
    exists: !!chineseLastNames2,
    isArray: Array.isArray(chineseLastNames2),
    length: chineseLastNames2?.length || 0,
    sample: chineseLastNames2?.[0] || null
  },
  detailedLastNamesStatus: {
    exists: !!detailedLastNames,
    isArray: Array.isArray(detailedLastNames),
    length: detailedLastNames?.length || 0,
    sample: detailedLastNames?.[0] || null
  }
};
