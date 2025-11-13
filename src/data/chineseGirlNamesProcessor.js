// 处理所有女孩名字数据，确保每个名字都有详细的英文解释
import { chineseGirlNames } from './chineseGirlNames';
import { chineseGirlNames2 } from './chineseGirlNames2';
import { chineseGirlNames3 } from './chineseGirlNames3';
import { optimizedGirlNames } from './chineseGirlNamesOptimized';
import girlNamesFromMd from './chineseGirlNamesFromMd';
import extraGirlNames from './chineseGirlNamesExtra';
import enhancedGirlNames from './chineseGirlNamesEnhanced';
import completeGirlNames from './chineseGirlNamesComplete';
import { enrichMeaning } from './chineseGirlNamesEnricher';

// 处理每个名字，确保它有详细的英文解释
function processName(name) {
  // 如果已经有详细解释（长度大于50个字符），保持不变
  if (name.meaning && typeof name.meaning === 'string' && name.meaning.length > 50) {
    return name;
  }
  
  // 否则使用enricher函数添加详细解释
  return {
    ...name,
    meaning: enrichMeaning(name.chinese, name.pinyin, name.meaning)
  };
}

// 处理名字数组
function processNames(names) {
  return names.map(name => processName(name));
}

// 处理所有数据源
const processedOriginalNames = processNames([...chineseGirlNames, ...chineseGirlNames2, ...chineseGirlNames3]);
const processedOptimizedNames = processNames(optimizedGirlNames);
const processedFromMdNames = processNames(girlNamesFromMd);
const processedExtraNames = processNames(extraGirlNames);

// 合并所有处理后的名字
// 注意：已经有详细解释的名字保持原样
export const allProcessedGirlNames = [
  ...completeGirlNames,  // 已经有详细解释
  ...enhancedGirlNames,  // 已经有详细解释
  ...processedOriginalNames,
  ...processedOptimizedNames,
  ...processedFromMdNames,
  ...processedExtraNames
];

export default allProcessedGirlNames;
