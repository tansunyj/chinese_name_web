// 中文名字数据整合文件
import { chineseGirlNames } from './chineseGirlNames';
import { chineseGirlNames2 } from './chineseGirlNames2';
import { chineseGirlNames3 } from './chineseGirlNames3';
import { optimizedGirlNames } from './chineseGirlNamesOptimized';
import girlNamesFromMd from './chineseGirlNamesFromMd';
import extraGirlNames from './chineseGirlNamesExtra';
import enhancedGirlNames from './chineseGirlNamesEnhanced';
import completeGirlNames from './chineseGirlNamesComplete';
import allProcessedGirlNames from './chineseGirlNamesProcessor';
import { chineseBoyNames } from './chineseBoyNames';
import { chineseBoyNames2 } from './chineseBoyNames2';
import { chineseBoyNames3 } from './chineseBoyNames3';
import { optimizedBoyNames } from './chineseBoyNamesOptimized';
import extendedBoyNames from './chineseBoyNamesExtended';
import boyNamesFromMd from './chineseBoyNamesFromMd';
import boyNamesFromMd2 from './chineseBoyNamesFromMd2';
import extraBoyNames from './chineseBoyNamesExtra';
// 英文版本男孩名字数据
import { optimizedBoyNamesEn } from './chineseBoyNamesOptimizedEn';
import extendedBoyNamesEn from './chineseBoyNamesExtendedEn';
import boyNamesFromMdEn from './chineseBoyNamesFromMdEn';
import boyNamesFromMd2En from './chineseBoyNamesFromMd2En';
import extraBoyNamesEn from './chineseBoyNamesExtraEn';
import allProcessedBoyNames from './chineseBoyNamesProcessor';
// 导入唯一的姓氏数据，无重复项
import uniqueLastNames from './uniqueLastNames';
// 导入新增的特殊名字数据
import funnyChineseNames from './funnyChineseNames';
import chineseDogNames from './chineseDogNames';
import chineseCatNames from './chineseCatNames';

// 合并所有女孩名字数据
// 包括原始数据和从 girl.md 文件中提取的精选名字，总计约400个精选好名字
// 使用完整处理过的女孩名字数据，所有名字都有详细的英文解释
export const allGirlNames = allProcessedGirlNames;

// 使用uniqueGirlNames时需直接䳎 './uniqueChineseGirlNames' 导入

// 合并所有男孩名字数据
// 使用优化后的名字数据，如需使用原数据可以取消注释下面一行
// export const allBoyNames = [...chineseBoyNames, ...chineseBoyNames2, ...chineseBoyNames3];

// 合并所有优化的名字数据，包括从 boy.md 文件提取的名字，总计约400个精选好名字
// 使用处理后的男孩名字数据，所有名字都有详细的英文解释
export const allBoyNames = allProcessedBoyNames;

// 如需要更多名字，可以添加更多数据文件

// 使用去重后的姓氏数据
export const allLastNames = uniqueLastNames;

// 获取详细的姓氏信息
export const getDetailedLastName = (chinese) => {
  // 使用全部姓氏数据中查找对应的姓氏详细信息
  return uniqueLastNames.find(name => name.chinese === chinese) || null;
};

// 帮助函数 - 随机获取n个名字
export const getRandomNames = (names, count = 10) => {
  const shuffled = [...names].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

// 导出有趣中文名字数据
export const allFunnyNames = funnyChineseNames;

// 导出中文狗名数据
export const allDogNames = chineseDogNames;

// 导出中文猫名数据
export const allCatNames = chineseCatNames;

// 导出名字过滤功能
export const filterNames = (names, filters) => {
  // 如果没有提供名字数据或非数组
  if (!names || !Array.isArray(names)) {
    console.error('Invalid names data:', names);
    return [];
  }
  
  // 如果没有过滤条件或过滤条件为空
  if (!filters) return names;
  
  // 如果是字符串查询
  if (typeof filters === 'string') {
    const query = filters.trim();
    if (query === '') return names;
    
    return names.filter(name => {
      // 确保name对象有所需属性
      const chinese = name.chinese || '';
      const pinyin = name.pinyin || '';
      const meaning = name.meaning || '';
      
      return (
        chinese.includes(query) ||
        pinyin.toLowerCase().includes(query.toLowerCase()) ||
        meaning.toLowerCase().includes(query.toLowerCase())
      );
    });
  }
  
  // 如果是对象查询
  if (filters && typeof filters === 'object') {
    const query = filters.query ? filters.query.trim() : '';
    if (query === '') return names;
    
    return names.filter(name => {
      // 确保name对象有所需属性
      const chinese = name.chinese || '';
      const pinyin = name.pinyin || '';
      const meaning = name.meaning || '';
      
      return (
        chinese.includes(query) ||
        pinyin.toLowerCase().includes(query.toLowerCase()) ||
        meaning.toLowerCase().includes(query.toLowerCase())
      );
    });
  }
  
  return names;
};

// 导出名字分页功能
export const paginateNames = (names, page, pageSize) => {
  // 如果没有提供名字数据或非数组
  if (!names || !Array.isArray(names)) {
    console.error('Invalid names data for pagination:', names);
    return [];
  }
  
  // 默认值处理
  const currentPage = (!page || isNaN(page) || page < 1) ? 1 : Number(page);
  const itemsPerPage = (!pageSize || isNaN(pageSize) || pageSize < 1) ? 20 : Number(pageSize);
  
  // 计算起始索引
  const startIndex = (currentPage - 1) * itemsPerPage;
  
  // 防止越界
  if (startIndex >= names.length) {
    console.warn('Pagination: start index exceeds array length');
    return [];
  }
  
  // 返回分页结果
  return names.slice(startIndex, startIndex + itemsPerPage);
};
