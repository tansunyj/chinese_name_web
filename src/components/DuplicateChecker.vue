<template>
  <div class="duplicate-checker">
    <h2>姓氏重复检查结果</h2>
    
    <div class="stats">
      <p><strong>detailedLastNames 数量:</strong> {{ detailedCount }}</p>
      <p><strong>chineseLastNames 数量:</strong> {{ lastNamesCount }}</p>
      <p><strong>chineseLastNames2 数量:</strong> {{ lastNames2Count }}</p>
      <p><strong>组合总数 (可能有重复):</strong> {{ totalCount }}</p>
      <p><strong>去重后数量:</strong> {{ uniqueCount }}</p>
      <p><strong>重复项数量:</strong> {{ duplicateCount }}</p>
    </div>
    
    <div class="duplicates" v-if="duplicateCount > 0">
      <h3>重复的姓氏:</h3>
      <ul>
        <li v-for="(duplicate, index) in duplicates" :key="index">
          {{ duplicate.chinese }} ({{ duplicate.pinyin }}) - 出现 {{ duplicate.count }} 次
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { chineseLastNames } from '../data/chineseLastNames';
import { chineseLastNames2 } from '../data/chineseLastNames2';
import detailedLastNames from '../data/chineseLastNamesDetailed';
import uniqueLastNames from '../data/uniqueLastNames';

export default {
  name: 'DuplicateChecker',
  data() {
    return {
      detailedCount: detailedLastNames.length,
      lastNamesCount: chineseLastNames.length,
      lastNames2Count: chineseLastNames2.length,
      totalCount: detailedLastNames.length + chineseLastNames.length + chineseLastNames2.length,
      uniqueCount: uniqueLastNames.length,
      duplicates: []
    };
  },
  computed: {
    duplicateCount() {
      return this.duplicates.length;
    }
  },
  mounted() {
    this.checkDuplicates();
  },
  methods: {
    checkDuplicates() {
      // 合并所有姓氏
      const allSurnames = [...detailedLastNames, ...chineseLastNames, ...chineseLastNames2];
      
      // 使用Map来计数
      const surnameCount = new Map();
      
      // 统计每个姓氏出现的次数
      allSurnames.forEach(surname => {
        const chinese = surname.chinese;
        if (surnameCount.has(chinese)) {
          surnameCount.set(chinese, surnameCount.get(chinese) + 1);
        } else {
          surnameCount.set(chinese, 1);
        }
      });
      
      // 提取重复项
      this.duplicates = Array.from(surnameCount.entries())
        .filter(([_, count]) => count > 1)
        .map(([chinese, count]) => {
          const surname = allSurnames.find(s => s.chinese === chinese);
          return {
            chinese,
            pinyin: surname.pinyin,
            count
          };
        });
      
      console.log('重复项:', this.duplicates);
    }
  }
}
</script>

<style scoped>
.duplicate-checker {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
}

.stats {
  margin: 20px 0;
  padding: 15px;
  background-color: #fff;
  border-radius: 6px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
}

.duplicates {
  margin-top: 20px;
  padding: 15px;
  background-color: #fff;
  border-radius: 6px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
}

h2 {
  color: #333;
  border-bottom: 2px solid #e60012;
  padding-bottom: 10px;
  margin-bottom: 20px;
}

h3 {
  color: #555;
  margin-bottom: 15px;
}

ul {
  padding-left: 20px;
}

li {
  margin-bottom: 8px;
}

p {
  margin: 8px 0;
}

strong {
  color: #333;
}
</style>
