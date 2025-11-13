// 用于检测并删除重复姓氏的工具文件
import { chineseLastNames } from './chineseLastNames';
import { chineseLastNames2 } from './chineseLastNames2';
import detailedLastNames from './chineseLastNamesDetailed';
import fs from 'fs';
import path from 'path';

// 检测重复姓氏
function findDuplicates() {
  // 创建一个集合来跟踪已经看过的姓氏
  const seenSurnames = new Set();
  const duplicates = [];

  // 检查所有数据源中的姓氏
  const allSurnames = [...detailedLastNames, ...chineseLastNames, ...chineseLastNames2];
  
  console.log(`Total surnames before de-duplication: ${allSurnames.length}`);
  
  // 查找重复项
  allSurnames.forEach(surname => {
    if (seenSurnames.has(surname.chinese)) {
      duplicates.push(surname.chinese);
    } else {
      seenSurnames.add(surname.chinese);
    }
  });
  
  console.log(`Found ${duplicates.length} duplicates: ${duplicates.join(', ')}`);
  
  return { duplicates, uniqueCount: seenSurnames.size };
}

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

// 检查重复
const duplicateInfo = findDuplicates();

// 创建不重复的数据集
const uniqueLastNames = createUniqueLastNames();

console.log(`Total unique surnames: ${uniqueLastNames.length}`);

// 导出用于替换原始数据的数组
export const deduplicatedLastNames = uniqueLastNames;

// 导出检测到的重复姓氏信息
export const duplicateReport = duplicateInfo;

// 这是Node.js环境下可以运行的代码，在浏览器环境中不会执行
if (typeof process !== 'undefined') {
  console.log('This script can be run directly with Node.js to generate a report.');
}

export default deduplicatedLastNames;
