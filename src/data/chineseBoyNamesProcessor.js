// 处理所有男孩名字数据，确保每个名字都有详细的英文解释
import { chineseBoyNames } from './chineseBoyNames';
import { chineseBoyNames2 } from './chineseBoyNames2';
import { chineseBoyNames3 } from './chineseBoyNames3';
import { optimizedBoyNames } from './chineseBoyNamesOptimized';
import extendedBoyNames from './chineseBoyNamesExtended';
import boyNamesFromMd from './chineseBoyNamesFromMd';
import boyNamesFromMd2 from './chineseBoyNamesFromMd2';
import extraBoyNames from './chineseBoyNamesExtra';
import { optimizedBoyNamesEn } from './chineseBoyNamesOptimizedEn';
import extendedBoyNamesEn from './chineseBoyNamesExtendedEn';
import boyNamesFromMdEn from './chineseBoyNamesFromMdEn';
import boyNamesFromMd2En from './chineseBoyNamesFromMd2En';
import extraBoyNamesEn from './chineseBoyNamesExtraEn';
import { enrichBoyNameMeaning } from './chineseBoyNamesEnricher';

// 处理每个名字，确保它有详细的英文解释
function processName(name) {
  // 如果已经有详细解释（长度大于70个字符），保持不变
  if (name.meaning && typeof name.meaning === 'string' && name.meaning.length > 70) {
    return name;
  }
  
  // 否则使用enricher函数添加详细解释
  return {
    ...name,
    meaning: enrichBoyNameMeaning(name.chinese, name.pinyin, name.meaning)
  };
}

// 处理名字数组
function processNames(names) {
  return names.map(name => processName(name));
}

// 处理已有的英文版本数据
const processedOptimizedEn = processNames(optimizedBoyNamesEn);
const processedExtendedEn = processNames(extendedBoyNamesEn);
const processedFromMdEn = processNames(boyNamesFromMdEn);
const processedFromMd2En = processNames(boyNamesFromMd2En);
const processedExtraEn = processNames(extraBoyNamesEn);

// 处理原始数据
const processedOriginal = processNames([...chineseBoyNames, ...chineseBoyNames2, ...chineseBoyNames3]);
const processedOptimized = processNames(optimizedBoyNames);
const processedExtended = processNames(extendedBoyNames);
const processedFromMd = processNames(boyNamesFromMd);
const processedFromMd2 = processNames(boyNamesFromMd2);
const processedExtra = processNames(extraBoyNames);

// 合并所有处理后的名字
// 注意：我们优先使用英文版本的数据，然后是处理后的原始数据
export const allProcessedBoyNames = [
  ...processedOptimizedEn,
  ...processedExtendedEn,
  ...processedFromMdEn,
  ...processedFromMd2En,
  ...processedExtraEn,
  ...processedOriginal,
  ...processedOptimized,
  ...processedExtended,
  ...processedFromMd,
  ...processedFromMd2,
  ...processedExtra
];

export default allProcessedBoyNames;
