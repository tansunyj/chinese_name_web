<template>
  <div class="popular-names-page">
    <div class="container">
      <h1 class="page-title">150 Popular Chinese Names for Boys and Girls</h1>
      <p class="seo-description">Discover the most popular Chinese names for boys and girls with their meanings and pronunciations. Find the perfect Chinese name for your child or yourself. Chinese name for boys, Chinese name for girls, Chinese names for male, Chinese names for female. 中文男孩名字, 中文女孩名字.</p>
      
      <div class="intro-section">
        <div class="intro-text">
          <h2>The Beauty of Chinese Names</h2>
          <p>Chinese names are rich in cultural significance, combining beautiful sounds with meaningful characters. Unlike Western names, Chinese given names are chosen for their positive connotations and the aspirations parents have for their children.</p>
          <p>Each Chinese character has its own meaning, pronunciation, and written form, allowing for names that are both phonetically pleasing and symbolically significant. The following collections showcase some of the most popular and beautiful Chinese names for both boys and girls.</p>
        </div>
        <div class="intro-image">
          <img src="@/assets/images/all_name.png" alt="Chinese Names" />
        </div>
      </div>

      <div class="names-section">
        <div class="section-tabs">
          <button 
            class="tab-button" 
            :class="{ active: activeTab === 'boys' }" 
            @click="activeTab = 'boys'"
          >
            Boys Names
          </button>
          <button 
            class="tab-button" 
            :class="{ active: activeTab === 'girls' }" 
            @click="activeTab = 'girls'"
          >
            Girls Names
          </button>
        </div>

        <div v-if="activeTab === 'boys'" class="names-grid">
          <h2>75 Popular Chinese Names for Boys</h2>
          <p class="section-intro">These names for boys combine strength, wisdom, and virtue - qualities traditionally valued for male children in Chinese culture. Each name is presented with its Chinese characters, pinyin pronunciation, and meaning.</p>
          
          <div class="names-list">
            <div v-for="(name, index) in boysNames" :key="index" class="name-card">
              <div class="chinese-characters">{{ name.characters }}</div>
              <div class="name-details">
                <h3>{{ name.pinyin }}</h3>
                <p class="name-meaning">{{ name.meaning }}</p>
              </div>
            </div>
          </div>
        </div>

        <div v-if="activeTab === 'girls'" class="names-grid">
          <h2>75 Popular Chinese Names for Girls</h2>
          <p class="section-intro">These names for girls embody beauty, grace, and intelligence - qualities traditionally valued for female children in Chinese culture. Each name is presented with its Chinese characters, pinyin pronunciation, and meaning.</p>
          
          <div class="names-list">
            <div v-for="(name, index) in girlsNames" :key="index" class="name-card">
              <div class="chinese-characters">{{ name.characters }}</div>
              <div class="name-details">
                <h3>{{ name.pinyin }}</h3>
                <p class="name-meaning">{{ name.meaning }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="naming-tips">
        <h2>Tips for Choosing a Chinese Name</h2>
        <div class="tips-grid">
          <div class="tip-card">
            <div class="tip-icon">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3>Consider the Meaning</h3>
            <p>Chinese names are chosen primarily for their meaning. Consider what qualities or aspirations you want the name to represent.</p>
          </div>
          
          <div class="tip-card">
            <div class="tip-icon">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
              </svg>
            </div>
            <h3>Sound and Tone</h3>
            <p>The sound and tone of a name are important in Chinese. A name should be pleasant to the ear and easy to pronounce.</p>
          </div>
          
          <div class="tip-card">
            <div class="tip-icon">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3>Character Aesthetics</h3>
            <p>The written form of the characters should be aesthetically pleasing and balanced.</p>
          </div>
          
          <div class="tip-card">
            <div class="tip-icon">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3>Cultural Context</h3>
            <p>Be aware of the cultural context and any historical or literary associations with the name.</p>
          </div>
        </div>
      </div>

      <div class="naming-resources">
        <h2>Further Resources</h2>
        <p>Explore our other sections to learn more about Chinese naming traditions, surname origins, and cultural practices:</p>
        
        <div class="resources-links">
          <router-link to="/naming-traditions" class="resource-link">Chinese Naming Traditions</router-link>
          <router-link to="/chinese-surnames" class="resource-link">Chinese Surnames</router-link>
          <router-link to="/wuxing-bazi" class="resource-link">Five Elements Theory</router-link>
          <router-link to="/sound-harmony" class="resource-link">Sound Harmony in Names</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PopularChineseNames',
  data() {
    return {
      activeTab: 'boys',
      boysNames: [
        { characters: '李明', pinyin: 'Lǐ Míng', meaning: 'Bright, clear, and enlightened' },
        { characters: '王伟', pinyin: 'Wáng Wěi', meaning: 'Great, mighty, and impressive' },
        { characters: '张浩', pinyin: 'Zhāng Hào', meaning: 'Vast, grand, and heroic' },
        { characters: '刘强', pinyin: 'Liú Qiáng', meaning: 'Strong, powerful, and robust' },
        { characters: '陈勇', pinyin: 'Chén Yǒng', meaning: 'Brave, courageous, and valiant' },
        { characters: '杨光', pinyin: 'Yáng Guāng', meaning: 'Sunlight, brightness, and radiance' },
        { characters: '赵鹏', pinyin: 'Zhào Péng', meaning: 'Roc (mythical bird), soaring high' },
        { characters: '周杰', pinyin: 'Zhōu Jié', meaning: 'Outstanding, excellent, and distinguished' },
        { characters: '吴超', pinyin: 'Wú Chāo', meaning: 'Surpassing, exceeding, and transcending' },
        { characters: '郑宇', pinyin: 'Zhèng Yǔ', meaning: 'Universe, cosmos, and boundless space' },
        { characters: '孙志', pinyin: 'Sūn Zhì', meaning: 'Ambition, aspiration, and determination' },
        { characters: '马飞', pinyin: 'Mǎ Fēi', meaning: 'Flying, soaring, and ascending' },
        { characters: '胡军', pinyin: 'Hú Jūn', meaning: 'Army, military, and discipline' },
        { characters: '郭靖', pinyin: 'Guō Jìng', meaning: 'Quiet, still, and peaceful' },
        { characters: '林峰', pinyin: 'Lín Fēng', meaning: 'Peak, summit, and pinnacle' },
        { characters: '黄磊', pinyin: 'Huáng Lěi', meaning: 'Pile of stones, solid and dependable' },
        { characters: '朱建', pinyin: 'Zhū Jiàn', meaning: 'Building, constructing, and establishing' },
        { characters: '徐涛', pinyin: 'Xú Tāo', meaning: 'Great waves, powerful and dynamic' },
        { characters: '何平', pinyin: 'Hé Píng', meaning: 'Peace, balance, and harmony' },
        { characters: '高远', pinyin: 'Gāo Yuǎn', meaning: 'High, distant, and far-reaching' },
        { characters: '文轩', pinyin: 'Wén Xuān', meaning: 'Literary elegance and scholarly distinction' },
        { characters: '天宇', pinyin: 'Tiān Yǔ', meaning: 'Sky and universe, vast and boundless' },
        { characters: '博文', pinyin: 'Bó Wén', meaning: 'Extensive knowledge and culture' },
        { characters: '志强', pinyin: 'Zhì Qiáng', meaning: 'Strong will and determination' },
        { characters: '嘉懿', pinyin: 'Jiā Yì', meaning: 'Excellent and elegant' },
        { characters: '煜祺', pinyin: 'Yù Qí', meaning: 'Bright and auspicious' },
        { characters: '鸿涛', pinyin: 'Hóng Tāo', meaning: 'Great waves, magnificent and powerful' },
        { characters: '鑫磊', pinyin: 'Xīn Lěi', meaning: 'Prosperity and strength' },
        { characters: '致远', pinyin: 'Zhì Yuǎn', meaning: 'Aspiring to reach far' },
        { characters: '俊驰', pinyin: 'Jùn Chí', meaning: 'Handsome and fast' },
        { characters: '雨泽', pinyin: 'Yǔ Zé', meaning: 'Rain and moisture, nurturing and beneficial' },
        { characters: '烨磊', pinyin: 'Yè Lěi', meaning: 'Bright and strong' },
        { characters: '晟睿', pinyin: 'Shèng Ruì', meaning: 'Flourishing and wise' },
        { characters: '天佑', pinyin: 'Tiān Yòu', meaning: "Heaven's blessing and protection" },
        { characters: '文昊', pinyin: 'Wén Hào', meaning: 'Literary and vast like the sky' },
        { characters: '修洁', pinyin: 'Xiū Jié', meaning: 'Cultivated and clean' },
        { characters: '黎昕', pinyin: 'Lí Xīn', meaning: 'Dawn and new beginning' },
        { characters: '远航', pinyin: 'Yuǎn Háng', meaning: 'Sailing far, ambitious journey' },
        { characters: '旭尧', pinyin: 'Xù Yáo', meaning: 'Rising sun and legendary sage emperor' },
        { characters: '鸿煊', pinyin: 'Hóng Xuān', meaning: 'Grand and brilliant' },
        { characters: '伟祺', pinyin: 'Wěi Qí', meaning: 'Great and auspicious' },
        { characters: '荣轩', pinyin: 'Róng Xuān', meaning: 'Glorious and distinguished' },
        { characters: '越泽', pinyin: 'Yuè Zé', meaning: 'Surpassing and nurturing' },
        { characters: '浩宇', pinyin: 'Hào Yǔ', meaning: 'Vast universe' },
        { characters: '瑾瑜', pinyin: 'Jǐn Yú', meaning: 'Beautiful jade, precious and flawless' },
        { characters: '皓轩', pinyin: 'Hào Xuān', meaning: 'Bright and distinguished' },
        { characters: '擎苍', pinyin: 'Qíng Cāng', meaning: 'Supporting the sky, great responsibility' },
        { characters: '擎宇', pinyin: 'Qíng Yǔ', meaning: 'Supporting the universe' },
        { characters: '志泽', pinyin: 'Zhì Zé', meaning: 'Ambitious and nurturing' },
        { characters: '子轩', pinyin: 'Zǐ Xuān', meaning: 'Distinguished son' },
        { characters: '睿渊', pinyin: 'Ruì Yuān', meaning: 'Wise and deep' },
        { characters: '弘文', pinyin: 'Hóng Wén', meaning: 'Great literary talent' },
        { characters: '哲瀚', pinyin: 'Zhé Hàn', meaning: 'Wise and vast like the ocean' },
        { characters: '雨泽', pinyin: 'Yǔ Zé', meaning: 'Rain and moisture, nurturing' },
        { characters: '楷瑞', pinyin: 'Kǎi Ruì', meaning: 'Model and auspicious' },
        { characters: '建辉', pinyin: 'Jiàn Huī', meaning: 'Establishing brilliance' },
        { characters: '晋鹏', pinyin: 'Jìn Péng', meaning: 'Advancing and soaring high' },
        { characters: '天磊', pinyin: 'Tiān Lěi', meaning: 'Heaven and strength' },
        { characters: '绍辉', pinyin: 'Shào Huī', meaning: 'Continuing brilliance' },
        { characters: '泽洋', pinyin: 'Zé Yáng', meaning: 'Nurturing and vast like the ocean' },
        { characters: '鑫鹏', pinyin: 'Xīn Péng', meaning: 'Prosperity and soaring high' },
        { characters: '昊强', pinyin: 'Hào Qiáng', meaning: 'Vast and strong' },
        { characters: '伟宸', pinyin: 'Wěi Chén', meaning: 'Great and extraordinary' },
        { characters: '博超', pinyin: 'Bó Chāo', meaning: 'Extensive and surpassing' },
        { characters: '君浩', pinyin: 'Jūn Hào', meaning: 'Gentleman and vast' },
        { characters: '子骞', pinyin: 'Zǐ Qiān', meaning: 'Son and soaring high' },
        { characters: '鹏涛', pinyin: 'Péng Tāo', meaning: 'Roc and great waves' },
        { characters: '炎彬', pinyin: 'Yán Bīn', meaning: 'Flame and refined' },
        { characters: '鹤轩', pinyin: 'Hè Xuān', meaning: 'Crane and distinguished' },
        { characters: '越彬', pinyin: 'Yuè Bīn', meaning: 'Surpassing and refined' },
        { characters: '风华', pinyin: 'Fēng Huá', meaning: 'Elegant demeanor' },
        { characters: '靖琪', pinyin: 'Jìng Qí', meaning: 'Peaceful and extraordinary' },
        { characters: '明辉', pinyin: 'Míng Huī', meaning: 'Bright and brilliant' },
        { characters: '伟诚', pinyin: 'Wěi Chéng', meaning: 'Great and sincere' },
        { characters: '明轩', pinyin: 'Míng Xuān', meaning: 'Bright and distinguished' },
        { characters: '健柏', pinyin: 'Jiàn Bǎi', meaning: 'Healthy and strong like cypress' }
      ],
      girlsNames: [
        { characters: '王芳', pinyin: 'Wáng Fāng', meaning: 'Fragrant and beautiful like flowers' },
        { characters: '李娜', pinyin: 'Lǐ Nà', meaning: 'Elegant, graceful, and refined' },
        { characters: '张丽', pinyin: 'Zhāng Lì', meaning: 'Beautiful, pretty, and attractive' },
        { characters: '刘洁', pinyin: 'Liú Jié', meaning: 'Pure, clean, and unsullied' },
        { characters: '陈静', pinyin: 'Chén Jìng', meaning: 'Quiet, calm, and peaceful' },
        { characters: '杨雪', pinyin: 'Yáng Xuě', meaning: 'Snow, pure and pristine' },
        { characters: '赵琳', pinyin: 'Zhào Lín', meaning: 'Jade, precious and beautiful' },
        { characters: '周颖', pinyin: 'Zhōu Yǐng', meaning: 'Clever, intelligent, and quick-witted' },
        { characters: '吴婷', pinyin: 'Wú Tíng', meaning: 'Graceful, elegant, and slender' },
        { characters: '郑悦', pinyin: 'Zhèng Yuè', meaning: 'Joyful, happy, and delighted' },
        { characters: '孙玲', pinyin: 'Sūn Líng', meaning: 'Tinkling jade, delicate and beautiful' },
        { characters: '马丽', pinyin: 'Mǎ Lì', meaning: 'Beautiful, pretty, and attractive' },
        { characters: '胡婷', pinyin: 'Hú Tíng', meaning: 'Graceful, elegant, and slender' },
        { characters: '郭静', pinyin: 'Guō Jìng', meaning: 'Quiet, calm, and peaceful' },
        { characters: '林萍', pinyin: 'Lín Píng', meaning: 'Duckweed, gentle and floating' },
        { characters: '黄莉', pinyin: 'Huáng Lì', meaning: 'Beautiful jasmine, fragrant and elegant' },
        { characters: '朱琳', pinyin: 'Zhū Lín', meaning: 'Jade, precious and beautiful' },
        { characters: '徐婷', pinyin: 'Xú Tíng', meaning: 'Graceful, elegant, and slender' },
        { characters: '何洁', pinyin: 'Hé Jié', meaning: 'Pure, clean, and unsullied' },
        { characters: '高燕', pinyin: 'Gāo Yàn', meaning: 'Swallow, graceful and free' },
        { characters: '梦洁', pinyin: 'Mèng Jié', meaning: 'Dream and purity' },
        { characters: '雪怡', pinyin: 'Xuě Yí', meaning: 'Snow and happiness' },
        { characters: '欣妍', pinyin: 'Xīn Yán', meaning: 'Joyful and beautiful' },
        { characters: '优璇', pinyin: 'Yōu Xuán', meaning: 'Excellent and jade-like' },
        { characters: '美琳', pinyin: 'Měi Lín', meaning: 'Beautiful jade' },
        { characters: '雅静', pinyin: 'Yǎ Jìng', meaning: 'Elegant and quiet' },
        { characters: '梦璐', pinyin: 'Mèng Lù', meaning: 'Dream and jade' },
        { characters: '紫涵', pinyin: 'Zǐ Hán', meaning: 'Purple and containing' },
        { characters: '雨嘉', pinyin: 'Yǔ Jiā', meaning: 'Rain and excellence' },
        { characters: '思颖', pinyin: 'Sī Yǐng', meaning: 'Thoughtful and clever' },
        { characters: '语嫣', pinyin: 'Yǔ Yān', meaning: 'Speech and beautiful' },
        { characters: '佳琪', pinyin: 'Jiā Qí', meaning: 'Good and extraordinary' },
        { characters: '涵菲', pinyin: 'Hán Fēi', meaning: 'Containing and fragrant' },
        { characters: '夏青', pinyin: 'Xià Qīng', meaning: 'Summer and green' },
        { characters: '曼婷', pinyin: 'Màn Tíng', meaning: 'Graceful and elegant' },
        { characters: '若云', pinyin: 'Ruò Yún', meaning: 'Like clouds' },
        { characters: '梦琪', pinyin: 'Mèng Qí', meaning: 'Dream and extraordinary' },
        { characters: '静琪', pinyin: 'Jìng Qí', meaning: 'Quiet and extraordinary' },
        { characters: '秀娟', pinyin: 'Xiù Juān', meaning: 'Beautiful and graceful' },
        { characters: '欣怡', pinyin: 'Xīn Yí', meaning: 'Joyful and happy' },
        { characters: '佳颖', pinyin: 'Jiā Yǐng', meaning: 'Good and clever' },
        { characters: '芷若', pinyin: 'Zhǐ Ruò', meaning: 'Angelica and like' },
        { characters: '雅芙', pinyin: 'Yǎ Fú', meaning: 'Elegant and lotus' },
        { characters: '雨婷', pinyin: 'Yǔ Tíng', meaning: 'Rain and elegant' },
        { characters: '语嫣', pinyin: 'Yǔ Yān', meaning: 'Speech and beautiful' },
        { characters: '清雅', pinyin: 'Qīng Yǎ', meaning: 'Clear and elegant' },
        { characters: '婉婷', pinyin: 'Wǎn Tíng', meaning: 'Graceful and elegant' },
        { characters: '舒怡', pinyin: 'Shū Yí', meaning: 'Comfortable and happy' },
        { characters: '雅琳', pinyin: 'Yǎ Lín', meaning: 'Elegant and jade' },
        { characters: '雪丽', pinyin: 'Xuě Lì', meaning: 'Snow and beautiful' },
        { characters: '思颖', pinyin: 'Sī Yǐng', meaning: 'Thoughtful and clever' },
        { characters: '梦璇', pinyin: 'Mèng Xuán', meaning: 'Dream and jade pendant' },
        { characters: '嘉怡', pinyin: 'Jiā Yí', meaning: 'Excellent and happy' },
        { characters: '佳琦', pinyin: 'Jiā Qí', meaning: 'Good and extraordinary' },
        { characters: '雨婷', pinyin: 'Yǔ Tíng', meaning: 'Rain and elegant' },
        { characters: '美琪', pinyin: 'Měi Qí', meaning: 'Beautiful and extraordinary' },
        { characters: '欣怡', pinyin: 'Xīn Yí', meaning: 'Joyful and happy' },
        { characters: '雅文', pinyin: 'Yǎ Wén', meaning: 'Elegant and cultured' },
        { characters: '雨萌', pinyin: 'Yǔ Méng', meaning: 'Rain and cute' },
        { characters: '诗涵', pinyin: 'Shī Hán', meaning: 'Poetry and containing' },
        { characters: '梦琳', pinyin: 'Mèng Lín', meaning: 'Dream and jade' },
        { characters: '佳琳', pinyin: 'Jiā Lín', meaning: 'Good and jade' },
        { characters: '雨婷', pinyin: 'Yǔ Tíng', meaning: 'Rain and elegant' },
        { characters: '美琳', pinyin: 'Měi Lín', meaning: 'Beautiful jade' },
        { characters: '欣妍', pinyin: 'Xīn Yán', meaning: 'Joyful and beautiful' },
        { characters: '雅芙', pinyin: 'Yǎ Fú', meaning: 'Elegant and lotus' },
        { characters: '雨嘉', pinyin: 'Yǔ Jiā', meaning: 'Rain and excellence' },
        { characters: '思颖', pinyin: 'Sī Yǐng', meaning: 'Thoughtful and clever' },
        { characters: '语嫣', pinyin: 'Yǔ Yān', meaning: 'Speech and beautiful' },
        { characters: '佳琪', pinyin: 'Jiā Qí', meaning: 'Good and extraordinary' },
        { characters: '涵菲', pinyin: 'Hán Fēi', meaning: 'Containing and fragrant' },
        { characters: '夏青', pinyin: 'Xià Qīng', meaning: 'Summer and green' },
        { characters: '曼婷', pinyin: 'Màn Tíng', meaning: 'Graceful and elegant' },
        { characters: '若云', pinyin: 'Ruò Yún', meaning: 'Like clouds' },
        { characters: '梦瑶', pinyin: 'Mèng Yáo', meaning: 'Dream and jade' },
        { characters: '静璇', pinyin: 'Jìng Xuán', meaning: 'Quiet and jade pendant' },
        { characters: '秀颖', pinyin: 'Xiù Yǐng', meaning: 'Beautiful and clever' },
        { characters: '欣然', pinyin: 'Xīn Rán', meaning: 'Joyful and natural' },
        { characters: '佳琦', pinyin: 'Jiā Qí', meaning: 'Good and extraordinary' }
      ]
    };
  }
};
</script>

<style scoped>
.popular-names-page {
  padding: 40px 0;
  background-color: #f9f9f9;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.page-title {
  font-size: 2.5rem;
  color: #333;
  text-align: center;
  margin-bottom: 10px;
}

.seo-description {
  text-align: center;
  color: #666;
  margin-bottom: 40px;
  font-size: 1rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.intro-section {
  display: flex;
  align-items: center;
  margin-bottom: 50px;
  background-color: #fff;
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.intro-text {
  flex: 2;
  padding-right: 30px;
}

.intro-image {
  flex: 1;
  text-align: center;
}

.intro-image img {
  max-width: 100%;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.names-section {
  background-color: #fff;
  border-radius: 10px;
  padding: 30px;
  margin-bottom: 50px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.section-tabs {
  display: flex;
  margin-bottom: 30px;
  border-bottom: 2px solid #eee;
}

.tab-button {
  padding: 12px 24px;
  background: none;
  border: none;
  font-size: 1.1rem;
  font-weight: 600;
  color: #666;
  cursor: pointer;
  position: relative;
  transition: all 0.3s ease;
}

.tab-button.active {
  color: #e53e3e;
}

.tab-button.active::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #e53e3e;
}

.names-grid h2 {
  font-size: 1.8rem;
  color: #333;
  margin-bottom: 15px;
}

.section-intro {
  color: #666;
  margin-bottom: 30px;
  font-size: 1.1rem;
  line-height: 1.6;
}

.names-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
}

.name-card {
  display: flex;
  align-items: center;
  padding: 15px;
  background-color: #f9f9f9;
  border-radius: 8px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.name-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
}

.chinese-characters {
  font-size: 2rem;
  font-weight: bold;
  color: #e53e3e;
  margin-right: 15px;
  min-width: 60px;
  text-align: center;
}

.name-details h3 {
  font-size: 1.2rem;
  color: #333;
  margin: 0 0 5px 0;
}

.name-meaning {
  color: #666;
  font-size: 0.9rem;
  margin: 0;
}

.naming-tips {
  background-color: #fff;
  border-radius: 10px;
  padding: 30px;
  margin-bottom: 50px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.naming-tips h2 {
  font-size: 1.8rem;
  color: #333;
  margin-bottom: 30px;
  text-align: center;
}

.tips-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 25px;
}

.tip-card {
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  transition: transform 0.3s ease;
}

.tip-card:hover {
  transform: translateY(-5px);
}

.tip-icon {
  width: 40px;
  height: 40px;
  margin-bottom: 15px;
  color: #e53e3e;
}

.tip-card h3 {
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 10px;
}

.tip-card p {
  color: #666;
  font-size: 0.95rem;
  line-height: 1.5;
}

.naming-resources {
  background-color: #fff;
  border-radius: 10px;
  padding: 30px;
  margin-bottom: 30px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.naming-resources h2 {
  font-size: 1.8rem;
  color: #333;
  margin-bottom: 15px;
}

.naming-resources p {
  color: #666;
  margin-bottom: 25px;
  font-size: 1.1rem;
}

.resources-links {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
}

.resource-link {
  display: inline-block;
  padding: 10px 20px;
  background-color: #f5f5f5;
  color: #e53e3e;
  text-decoration: none;
  border-radius: 30px;
  font-weight: 500;
  transition: all 0.3s ease;
}

.resource-link:hover {
  background-color: #e53e3e;
  color: white;
}

@media (max-width: 768px) {
  .intro-section {
    flex-direction: column;
  }
  
  .intro-text {
    padding-right: 0;
    margin-bottom: 20px;
  }
  
  .names-list {
    grid-template-columns: 1fr;
  }
  
  .tips-grid {
    grid-template-columns: 1fr;
  }
}
</style>