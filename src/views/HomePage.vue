<template>
  <div class="home-page">
    <!-- Hero Section -->
    <section class="hero">
      <div class="container">
        <div class="hero-content">
          <div class="hero-image">
            <img src="@/assets/images/name.png" alt="ChineseName Logo" />
          </div>
          <div class="hero-text">
            <h1>Free Chinese Name Generator & Translator: Convert English to Chinese</h1>
            <h2 class="hero-subtitle">Translate Your Name to Chinese | Find Your Perfect Chinese Name</h2>
            <h2 class="hero-subtitle">中文起名 | 英文名翻译</h2>
            <p class="subtitle">{{ $t('home.hero.subtitle') }}</p>
            <div class="hero-cta">
              <router-link to="/english-to-chinese-translator" class="hero-try-button">
                Get Your Chinese Name
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 个性化取名服务 -->
    <section class="features features-alt">
      <div class="container">
        <h2 class="section-title">Our Chinese Name Services</h2>
        <div class="feature-grid naming-services-grid">

          <!-- 1. 英转中翻译器 - GA4: 7,600+ 浏览量，核心功能 -->
          <router-link to="/english-to-chinese-translator" class="feature-card-link" title="Translate your English name to Chinese characters">
            <div class="feature-card">
              <div class="header-row">
              <div class="icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                </svg>
              </div>
              <h3>{{ $t('home.features.translateName.title') }}</h3>
              </div>
              <p>{{ $t('home.features.translateName.description') }}</p>
              <div class="feature-link">
                <img src="@/assets/images/ming.png" alt="ming" class="ming-icon" /> →
              </div>
            </div>
          </router-link>

          <!-- 2. 中转英翻译器 - GA4: 3,400+ 浏览量 -->
          <router-link to="/chinese-to-english-translator" class="feature-card-link" title="Convert Chinese names to English pronunciation">
            <div class="feature-card">
              <div class="header-row">
              <div class="icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                </svg>
              </div>
              <h3>Chinese to English Name</h3>
              </div>
              <p>Convert your Chinese name to English with accurate pronunciation and cultural meaning</p>
              <div class="feature-link">
                <img src="@/assets/images/ming.png" alt="ming" class="ming-icon" /> →
              </div>
            </div>
          </router-link>

          <!-- 3. 自定义中文名 - GA4: 1,960+ 浏览量，跳出率最低6% -->
          <router-link to="/custom-chinese-name-generator" class="feature-card-link" title="Create a personalized Chinese name based on your preferences">
            <div class="feature-card">
              <div class="header-row">
              <div class="icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                </svg>
              </div>
                <h3>{{ $t('home.features.namingService.custom.title') }}</h3>
              </div>
              <p>{{ $t('home.features.namingService.custom.description') }}</p>
              <div class="feature-link">
                <img src="@/assets/images/ming.png" alt="ming" class="ming-icon" /> →
              </div>
            </div>
          </router-link>
          
          <!-- 4. Fantasy Name Generator - GA4: 1,750 浏览量 -->
          <router-link to="/fantasy-chinese-name-generator" class="feature-card-link" title="Generate mystical Wuxia and fantasy Chinese names">
            <div class="feature-card">
              <div class="header-row">
              <div class="icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
                <h3>Fantasy Chinese Name Generator</h3>
              </div>
              <p>Create magical and mystical Chinese names for fantasy characters, stories, and creative projects with cultural authenticity</p>
              <div class="feature-link">
                <img src="@/assets/images/ming.png" alt="ming" class="ming-icon" /> →
              </div>
            </div>
          </router-link>

          <!-- 5. Chinese Girl Names - SEMrush: 6,600/月搜索量，高潜力 -->
          <router-link to="/chinese-girl-names" class="feature-card-link" title="Browse 350+ beautiful Chinese names for girls with meanings">
            <div class="feature-card">
              <div class="header-row">
                <div class="icon">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3>Chinese Names for Girls</h3>
              </div>
              <p>Browse 350+ beautiful Chinese girl names with meanings, pronunciations, and cultural significance</p>
              <div class="feature-link">
                <img src="@/assets/images/ming.png" alt="ming" class="ming-icon" /> →
              </div>
            </div>
          </router-link>

          <!-- 6. Chinese Boy Names - SEMrush: 5,400/月搜索量，高潜力 -->
          <router-link to="/chinese-boy-names" class="feature-card-link" title="Discover 350+ strong Chinese names for boys with meanings">
            <div class="feature-card">
              <div class="header-row">
                <div class="icon">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3>Chinese Names for Boys</h3>
              </div>
              <p>Discover 350+ strong Chinese boy names with meanings, pronunciations, and cultural significance</p>
              <div class="feature-link">
                <img src="@/assets/images/ming.png" alt="ming" class="ming-icon" /> →
              </div>
            </div>
          </router-link>
          
          <!-- 7. Chinese Dog Names - SEMrush: 140/月，跳出率15.8%极佳 -->
          <router-link to="/chinese-dog-names" class="feature-card-link" title="Find authentic Chinese names for your dog">
            <div class="feature-card">
              <div class="header-row">
                <div class="icon">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                  </svg>
                </div>
                <h3>Chinese Names for Dogs</h3>
              </div>
              <p>Explore 100+ authentic Chinese dog names with meanings, pronunciations, and cultural background for your pet</p>
              <div class="feature-link">
                <img src="@/assets/images/ming.png" alt="ming" class="ming-icon" /> →
              </div>
            </div>
          </router-link>
          
          <!-- 8. Zodiac Calculator - GA4: 162浏览量，跳出率14.5%极佳 -->
          <router-link to="/zodiac-calculator" class="feature-card-link" title="Calculate your Chinese zodiac sign and element">
            <div class="feature-card">
              <div class="header-row">
                <div class="icon">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                </div>
                <h3>Chinese Zodiac Calculator</h3>
              </div>
              <p>Discover your Chinese zodiac animal sign, element, and personality traits based on your birth year</p>
              <div class="feature-link">
                <img src="@/assets/images/ming.png" alt="ming" class="ming-icon" /> →
              </div>
            </div>
          </router-link>

          <router-link to="/blog/how-to-say-my-name-in-chinese" class="feature-card-link" title="Learn how to say your name in Chinese">
            <div class="feature-card">
              <div class="header-row">
                <div class="icon">
                  <!-- 使用喇叭图标 -->
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                  </svg>
                </div>
                <h3>How to Say My Name</h3>
              </div>
              <p>Learn the pronunciation and phrases to introduce yourself in Mandarin like a local</p>
              <div class="feature-link">
                <!-- 保持你原有的 ming-icon -->
                <img src="@/assets/images/ming.png" alt="ming" class="ming-icon" /> →
              </div>
            </div>
          </router-link>

          <router-link to="/blog/cute-chinese-nicknames-maomao" class="feature-card-link" title="Discover cute Chinese nicknames like Maomao">
            <div class="feature-card">
              <div class="header-row">
                <div class="icon">
                  <!-- 使用笑脸图标 -->
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3>Cute Chinese Nicknames</h3>
              </div>
              <p>Discover meanings of "Maomao", "Doudou" & find cute names for babies, friends, and pets</p>
              <div class="feature-link">
                <img src="@/assets/images/ming.png" alt="ming" class="ming-icon" /> →
              </div>
            </div>
          </router-link>

        </div>
      </div>
    </section>

    <!-- 新增SEO优化:文本内容丰富的部分 -->
    <section class="about-chinese-names">
      <div class="container">
        <h2 class="section-title">Understanding Chinese Names & Cultural Background</h2>
        <div class="introduction-text">
          <p>Chinese names carry profound cultural significance, combining phonetic beauty with deep symbolic meanings. Unlike Western naming traditions, Chinese names traditionally consist of a family surname followed by a given name that often reflects aspirations, virtues, or natural elements.</p>
        </div>
        
        <div class="two-column-content">
          <div class="column">
            <div class="collapsible-section">
              <h3 class="collapsible-title" @click="toggleSection('nameStructure')">
                <div class="title-with-icon">
                  <div class="section-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                    </svg>
                  </div>
                Understanding Chinese Name Structure
                </div>
                <span class="toggle-icon">{{ isExpanded.nameStructure ? '−' : '+' }}</span>
              </h3>
              <div class="collapsible-content" v-show="isExpanded.nameStructure">
                <p>Most Chinese names follow a structure of a single-character surname followed by a one or two-character given name. With over 100 common surnames like Li (李), Wang (王), Zhang (张), and Chen (陈), these family names are passed down through generations. The given name, carefully selected by parents or family elders, carries hopes and wishes for the child's future.</p>
              </div>
            </div>
            
            <div class="collapsible-section">
              <h3 class="collapsible-title" @click="toggleSection('characterMeaning')">
                <div class="title-with-icon">
                  <div class="section-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4 4 4 0 004-4V5z" />
                    </svg>
                  </div>
                The Significance of Chinese Characters in Names
                </div>
                <span class="toggle-icon">{{ isExpanded.characterMeaning ? '−' : '+' }}</span>
              </h3>
              <div class="collapsible-content" v-show="isExpanded.characterMeaning">
                <p>Each Chinese character used in names has its own meaning, pronunciation, and written form. Parents often consider factors such as:</p>
                <ul>
                  <li><strong>Character meaning</strong> - Characters representing virtues (wisdom, kindness), natural elements (mountain, water), or desirable qualities are popular choices.</li>
                  <li><strong>Five Elements (Wu Xing)</strong> - Traditional naming considers the balance of wood, fire, earth, metal, and water elements.</li>
                  <li><strong>Sound harmony</strong> - How the name sounds when pronounced in Chinese, including tonal aspects.</li>
                  <li><strong>Stroke count</strong> - The number of strokes in writing each character can have numerological significance.</li>
                  <li><strong>Visual balance</strong> - The aesthetic appearance of the written characters together.</li>
                </ul>
              </div>
            </div>
            
            <div class="collapsible-section">
              <h3 class="collapsible-title" @click="toggleSection('modernTrends')">
                <div class="title-with-icon">
                  <div class="section-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  Modern Chinese Naming Trends
                </div>
                <span class="toggle-icon">{{ isExpanded.modernTrends ? '−' : '+' }}</span>
              </h3>
              <div class="collapsible-content" v-show="isExpanded.modernTrends">
                <p>Contemporary Chinese naming has evolved while maintaining cultural roots:</p>
                <ul>
                  <li><strong>International Appeal</strong> - Names that work well in both Chinese and international contexts are increasingly popular.</li>
                  <li><strong>Unique Characters</strong> - Parents seek distinctive characters to help their children stand out.</li>
                  <li><strong>Gender-Neutral Options</strong> - Growing interest in names that work for any gender.</li>
                  <li><strong>Pop Culture Influence</strong> - Names inspired by literature, films, and historical figures gain popularity.</li>
                  <li><strong>Simplified Choices</strong> - Preference for names with fewer strokes for easier writing and recognition.</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div class="column">
            <div class="collapsible-section">
              <h3 class="collapsible-title" @click="toggleSection('nameTranslation')">
                <div class="title-with-icon">
                  <div class="section-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                    </svg>
                  </div>
                Translating English Names to Chinese
                </div>
                <span class="toggle-icon">{{ isExpanded.nameTranslation ? '−' : '+' }}</span>
              </h3>
              <div class="collapsible-content" v-show="isExpanded.nameTranslation">
                <p>When translating English or other Western names into Chinese, several approaches are used:</p>
                <ul>
                  <li><strong>Phonetic translation</strong> - Choosing Chinese characters that sound similar to the original name.</li>
                  <li><strong>Semantic translation</strong> - Selecting characters based on the meaning of the original name.</li>
                  <li><strong>Combined approach</strong> - Using characters that both sound similar and carry meaningful symbolism.</li>
                </ul>
              </div>
            </div>
            
            <div class="collapsible-section">
              <h3 class="collapsible-title" @click="toggleSection('traditionalElements')">
                <div class="title-with-icon">
                  <div class="section-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  Traditional Elements in Chinese Naming
                </div>
                <span class="toggle-icon">{{ isExpanded.traditionalElements ? '−' : '+' }}</span>
              </h3>
              <div class="collapsible-content" v-show="isExpanded.traditionalElements">
                <p>Chinese naming traditions incorporate several cultural and philosophical elements:</p>
                <ul>
                  <li><strong>Zodiac Animals (生肖)</strong> - Names may reflect characteristics of the birth year's zodiac animal.</li>
                  <li><strong>Birth Date & Time</strong> - The Eight Characters (Ba Zi) system considers exact birth timing for name compatibility.</li>
                  <li><strong>Generational Names</strong> - Many families use specific characters or patterns for each generation.</li>
                  <li><strong>Regional Traditions</strong> - Different regions of China have unique naming customs and preferences.</li>
                  <li><strong>Classical Literature</strong> - Names often reference poetry, historical figures, or philosophical concepts.</li>
                </ul>
              </div>
            </div>
            
            <div class="collapsible-section">
              <h3 class="collapsible-title" @click="toggleSection('namingService')">
                <div class="title-with-icon">
                  <div class="section-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                Our Chinese Name Translation Services
                </div>
                <span class="toggle-icon">{{ isExpanded.namingService ? '−' : '+' }}</span>
              </h3>
              <div class="collapsible-content" v-show="isExpanded.namingService">
                <p>Our Chinese name translation services provide personalized options that respect both linguistic and cultural traditions. Whether you're looking for a Chinese name for business, travel, or personal interest, our tools help you find a name that resonates with Chinese cultural sensibilities while connecting to your identity.</p>
                <p>Explore our comprehensive resources on Chinese naming traditions, surname meanings, character symbolism, and pronunciation guides to better understand the rich cultural heritage behind Chinese names.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div class="see-more-wrapper">
          <button class="see-more-btn" @click="toggleAllSections">
            {{ allSectionsExpanded ? 'Show Less' : 'Show More' }}
          </button>
        </div>
      </div>
    </section>

    <!-- 用户好评和体验 -->
    <section class="testimonials-section">
      <div class="container">
        <h2 class="section-title">What Our Users Say</h2>
        <p class="section-subtitle">Discover how our Chinese naming tools have helped people around the world find meaningful names</p>
        
        <div class="testimonials-carousel" @mouseenter="stopAutoSlide" @mouseleave="startAutoSlide">
          <div class="testimonials-track" :style="{ transform: `translateX(-${currentSlide * slideWidth}%)` }">
            <div v-for="(slide, slideIndex) in groupedTestimonials" :key="slideIndex" class="testimonial-slide">
              <div v-for="(testimonial, index) in slide" :key="index" class="testimonial-card">
                <div class="testimonial-header">
                  <div class="user-info">
                    <div class="user-avatar">
                      <span class="avatar-initial">{{ testimonial.name.charAt(0) }}</span>
                    </div>
                    <div class="user-details">
                      <h4 class="user-name">{{ testimonial.name }}</h4>
                      <p class="user-location">{{ testimonial.location }}</p>
                    </div>
                  </div>
                  <div class="stars">
                    <span v-for="n in 5" :key="n" class="star">★</span>
                  </div>
                </div>
                <blockquote class="testimonial-text">
                  "{{ testimonial.text }}"
                </blockquote>
                <div class="testimonial-footer">
                  <span class="service-tag">{{ testimonial.service }}</span>
                  <span class="user-context">{{ testimonial.context }}</span>
                </div>
              </div>
            </div>
          </div>
          
                    <!-- 轮播控制按钮 -->
          <button class="carousel-btn prev-btn" @click="prevSlide">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button class="carousel-btn next-btn" @click="nextSlide">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
              </div>
        
                <!-- 轮播指示器 -->
        <div class="carousel-indicators">
          <button 
            v-for="(slide, index) in groupedTestimonials" 
            :key="index"
            class="indicator"
            :class="{ active: currentSlide === index }"
            @click="goToSlide(index)"
          ></button>
        </div>
        
        <!-- 统计数据 -->
        <div class="stats-section">
                    <div class="stat-item">
            <div class="stat-number">75,000+</div>
            <div class="stat-label">Names Generated</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">4.9/5</div>
            <div class="stat-label">Average Rating</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">120+</div>
            <div class="stat-label">Countries Served</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">99%</div>
            <div class="stat-label">User Satisfaction</div>
          </div>
        </div>
      </div>
    </section>

    <!-- 新增SEO优化: FAQ部分 -->
    <section class="faq-section">
      <div class="container">
        <h2 class="section-title">FAQ</h2>
        
        <div class="faq-columns">
          <div class="faq-column">
            <div class="faq-item" :class="{'faq-expanded': isExpanded.faq1}" @click="toggleFaq('faq1')">
              <h3 class="faq-question">
                <span class="faq-q-marker">Q:</span> 
                How do I choose a Chinese name that sounds like my English name?
                <span class="faq-toggle">{{ isExpanded.faq1 ? '−' : '+' }}</span>
              </h3>
              <div class="faq-answer" v-show="isExpanded.faq1">
                <p><span class="faq-a-marker">A:</span> To choose a Chinese name that sounds similar to your English name, our translator considers Chinese characters with similar phonetics while ensuring the characters have positive meanings. For example, the name "Michael" might be translated as "麦克" (Mài Kè), which sounds similar while using characters with good connotations. Our translation tools analyze both sound and meaning to provide you with appropriate options.</p>
              </div>
            </div>
            
            <div class="faq-item" :class="{'faq-expanded': isExpanded.faq2}" @click="toggleFaq('faq2')">
              <h3 class="faq-question">
                <span class="faq-q-marker">Q:</span>
                What's the difference between a phonetic and meaningful Chinese name translation?
                <span class="faq-toggle">{{ isExpanded.faq2 ? '−' : '+' }}</span>
              </h3>
              <div class="faq-answer" v-show="isExpanded.faq2">
                <p><span class="faq-a-marker">A:</span> A phonetic translation focuses primarily on matching the sounds of your original name using Chinese characters, prioritizing pronunciation similarity. A meaningful translation, on the other hand, selects characters based on their symbolic significance and cultural relevance, sometimes at the expense of exact pronunciation. The best Chinese names often balance both approaches, finding characters that sound similar to your original name while also conveying positive meanings and cultural resonance.</p>
              </div>
            </div>
            
            <div class="faq-item" :class="{'faq-expanded': isExpanded.faq3}" @click="toggleFaq('faq3')">
              <h3 class="faq-question">
                <span class="faq-q-marker">Q:</span>
                Is it better to have a one-character or two-character given name in Chinese?
                <span class="faq-toggle">{{ isExpanded.faq3 ? '−' : '+' }}</span>
              </h3>
              <div class="faq-answer" v-show="isExpanded.faq3">
                <p><span class="faq-a-marker">A:</span> Both one-character and two-character given names are common in Chinese culture, with two-character names being more prevalent in modern times. Single-character names can be more distinctive and straightforward, while two-character names offer more flexibility for creating balance in meaning, sound, and five-element theory. Our name generator provides both options, allowing you to choose based on your preference and cultural considerations.</p>
              </div>
            </div>
          </div>
          
          <div class="faq-column">
            <div class="faq-item" :class="{'faq-expanded': isExpanded.faq4}" @click="toggleFaq('faq4')">
              <h3 class="faq-question">
                <span class="faq-q-marker">Q:</span>
                How important is the meaning of characters in a Chinese name?
                <span class="faq-toggle">{{ isExpanded.faq4 ? '−' : '+' }}</span>
              </h3>
              <div class="faq-answer" v-show="isExpanded.faq4">
                <p><span class="faq-a-marker">A:</span> The meaning of characters is extremely important in Chinese naming culture. Unlike in some Western cultures where names are chosen primarily for their sound or family heritage, Chinese names are selected with careful consideration of the characters' meanings, which often express parents' hopes and wishes for their child. Characters with positive connotations related to virtues, strength, beauty, intelligence, or success are commonly chosen. This is why our translation service emphasizes both phonetic similarity and meaningful character selection.</p>
              </div>
            </div>
            
            <div class="faq-item" :class="{'faq-expanded': isExpanded.faq5}" @click="toggleFaq('faq5')">
              <h3 class="faq-question">
                <span class="faq-q-marker">Q:</span>
                Can I use the same Chinese name for both personal and business purposes?
                <span class="faq-toggle">{{ isExpanded.faq5 ? '−' : '+' }}</span>
              </h3>
              <div class="faq-answer" v-show="isExpanded.faq5">
                <p><span class="faq-a-marker">A:</span> You can use the same Chinese name for both personal and business contexts, but it's worth considering whether different names might be advantageous. Business names in Chinese might prioritize professional qualities or industry relevance, while personal names might focus more on individual characteristics. Many foreigners doing business in China choose Chinese names that reflect professionalism while maintaining personal identity. Our service can help you generate appropriate options for both contexts.</p>
              </div>
            </div>
            
            <div class="faq-item" :class="{'faq-expanded': isExpanded.faq6}" @click="toggleFaq('faq6')">
              <h3 class="faq-question">
                <span class="faq-q-marker">Q:</span>
                What is the Five Elements (Wu Xing) theory and how does it affect Chinese naming?
                <span class="faq-toggle">{{ isExpanded.faq6 ? '−' : '+' }}</span>
              </h3>
              <div class="faq-answer" v-show="isExpanded.faq6">
                <p><span class="faq-a-marker">A:</span> The Five Elements (Wu Xing) theory is a fundamental concept in Chinese philosophy that categorizes all things into five elements: Wood (木), Fire (火), Earth (土), Metal (金), and Water (水). In Chinese naming, this theory is used to create balance and harmony. Each element has associated characteristics and can complement or conflict with others. Traditional Chinese naming considers a person's birth date to determine which elements are strong or weak in their destiny, then chooses name characters that help balance these elements for better fortune and harmony.</p>
              </div>
            </div>
          </div>
          
          <div class="faq-column">
            <div class="faq-item" :class="{'faq-expanded': isExpanded.faq7}" @click="toggleFaq('faq7')">
              <h3 class="faq-question">
                <span class="faq-q-marker">Q:</span>
                How do Chinese zodiac animals influence name selection?
                <span class="faq-toggle">{{ isExpanded.faq7 ? '−' : '+' }}</span>
              </h3>
              <div class="faq-answer" v-show="isExpanded.faq7">
                <p><span class="faq-a-marker">A:</span> Chinese zodiac animals play a significant role in traditional naming practices. Each of the 12 zodiac animals (Rat, Ox, Tiger, Rabbit, Dragon, Snake, Horse, Goat, Monkey, Rooster, Dog, Pig) has associated characteristics, preferences, and taboos. For example, people born in the Year of the Tiger might benefit from names with characters related to mountains or forests, while avoiding characters associated with small spaces. Our zodiac naming tools consider these traditional associations to suggest characters that harmonize with your birth year animal.</p>
              </div>
            </div>
            
            <div class="faq-item" :class="{'faq-expanded': isExpanded.faq8}" @click="toggleFaq('faq8')">
              <h3 class="faq-question">
                <span class="faq-q-marker">Q:</span>
                What's the difference between traditional and simplified Chinese characters in names?
                <span class="faq-toggle">{{ isExpanded.faq8 ? '−' : '+' }}</span>
              </h3>
              <div class="faq-answer" v-show="isExpanded.faq8">
                <p><span class="faq-a-marker">A:</span> Traditional Chinese characters are the original complex forms used for thousands of years, while simplified characters were introduced in mainland China in the 1950s to improve literacy. In naming, traditional characters are often preferred for their cultural depth and aesthetic appeal, especially in Taiwan, Hong Kong, and overseas Chinese communities. Simplified characters are standard in mainland China. The choice depends on your target audience and personal preference. Our tools provide both versions and explain the cultural context of each option.</p>
              </div>
            </div>
            
            <div class="faq-item" :class="{'faq-expanded': isExpanded.faq9}" @click="toggleFaq('faq9')">
              <h3 class="faq-question">
                <span class="faq-q-marker">Q:</span>
                Can I create fantasy Chinese names for creative projects like novels or games?
                <span class="faq-toggle">{{ isExpanded.faq9 ? '−' : '+' }}</span>
              </h3>
              <div class="faq-answer" v-show="isExpanded.faq9">
                <p><span class="faq-a-marker">A:</span> Absolutely! Our Fantasy Chinese Name Generator is specifically designed for creative projects. It creates mystical and enchanting names suitable for fantasy characters, novels, games, and role-playing scenarios. These names blend traditional Chinese cultural elements with fantastical themes like celestial powers, elemental magic, martial arts, and mythical creatures. Each generated name includes detailed explanations of its mystical meaning, cultural background, and associated supernatural abilities, perfect for world-building and character development.</p>
              </div>
            </div>
          </div>
          
          <div class="faq-column">
            <div class="faq-item" :class="{'faq-expanded': isExpanded.faq10}" @click="toggleFaq('faq10')">
              <h3 class="faq-question">
                <span class="faq-q-marker">Q:</span>
                How do I convert Chinese names to pinyin and why is it important?
                <span class="faq-toggle">{{ isExpanded.faq10 ? '−' : '+' }}</span>
              </h3>
              <div class="faq-answer" v-show="isExpanded.faq10">
                <p><span class="faq-a-marker">A:</span> Pinyin is the official romanization system for Chinese characters, essential for pronunciation guidance. Our Name to Pinyin tool converts Chinese names to accurate pinyin with tone marks, helping you learn correct pronunciation. This is crucial for international communication, language learning, and ensuring your Chinese name is pronounced correctly. Pinyin also helps in typing Chinese characters on computers and phones, making it an essential skill for anyone with a Chinese name.</p>
              </div>
            </div>
            
            <div class="faq-item" :class="{'faq-expanded': isExpanded.faq11}" @click="toggleFaq('faq11')">
              <h3 class="faq-question">
                <span class="faq-q-marker">Q:</span>
                What are Chinese character stroke orders and why should I learn them?
                <span class="faq-toggle">{{ isExpanded.faq11 ? '−' : '+' }}</span>
              </h3>
              <div class="faq-answer" v-show="isExpanded.faq11">
                <p><span class="faq-a-marker">A:</span> Chinese character stroke order refers to the specific sequence in which strokes should be written to form a character correctly. Learning proper stroke order is important for several reasons: it makes handwriting more legible and aesthetically pleasing, helps with character recognition and memorization, and is essential for using handwriting input methods on digital devices. Our Character Stroke Order tool shows you the correct sequence for writing any Chinese character, making it easier to learn and practice Chinese calligraphy.</p>
              </div>
            </div>
            
            <div class="faq-item" :class="{'faq-expanded': isExpanded.faq12}" @click="toggleFaq('faq12')">
              <h3 class="faq-question">
                <span class="faq-q-marker">Q:</span>
                Are there naming taboos or characters I should avoid in Chinese names?
                <span class="faq-toggle">{{ isExpanded.faq12 ? '−' : '+' }}</span>
              </h3>
              <div class="faq-answer" v-show="isExpanded.faq12">
                <p><span class="faq-a-marker">A:</span> Yes, Chinese naming has several traditional taboos to consider. These include avoiding characters with negative meanings, death-related connotations, or those that sound like unlucky words. It's also traditional to avoid using the same characters as living elders in the family, and some characters may be inappropriate due to historical or political associations. Additionally, certain character combinations might create unintended meanings or sound awkward when spoken. Our naming tools are designed to help you avoid these pitfalls while suggesting culturally appropriate alternatives.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div class="see-more-wrapper">
          <button class="see-more-btn" @click="toggleAllFaqs">
            {{ allFaqsExpanded ? 'Show Less FAQs' : 'Show All FAQs' }}
          </button>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-content">
          <h2 class="cta-title">Ready to Find Your Perfect Chinese Name?</h2>
          <p class="cta-subtitle">Start your journey to discover a meaningful Chinese name that reflects your identity and connects you to Chinese culture.</p>
          <div class="cta-buttons">
                          <router-link to="/custom-chinese-name-generator" class="cta-button primary">
              Create Your Custom Name
            </router-link>
            <router-link to="/english-to-chinese-translator" class="cta-button secondary">
              Translate Your Name
            </router-link>
        </div>
        </div>
        </div>
    </section>

  </div>
</template>

<script>
import 'ant-design-vue/dist/antd.css';
import { onMounted, onUnmounted } from 'vue';
import { createWebsiteSchema, addStructuredDataToPage } from '@/utils/structuredData';

export default {
  name: 'HomePage',
  
  components: {
  },
  
  data() {
    return {
      isExpanded: {
        nameStructure: false,
        characterMeaning: false,
        modernTrends: false,
        nameTranslation: false,
        traditionalElements: false,
        namingService: false,
        faq1: false,
        faq2: false,
        faq3: false,
        faq4: false,
        faq5: false,
        faq6: false,
        faq7: false,
        faq8: false,
        faq9: false,
        faq10: false,
        faq11: false,
        faq12: false
      },
      currentSlide: 0,
      itemsPerSlide: 4, // 每页显示4个评价
      isMobile: false,
      testimonials: [
        {
          name: "Michael Chen",
          location: "San Francisco, USA",
          context: "Business Professional",
          service: "Name Translation",
          text: "I needed a Chinese name for my business dealings in China. The translation service provided me with '陈明轩' which not only sounds similar to my name but has beautiful meanings of brightness and elegance. My Chinese colleagues were impressed!"
        },
        {
          name: "Sarah Johnson",
          location: "London, UK",
          context: "Study Abroad Student",
          service: "Custom Name Generator",
          text: "Before studying in Beijing, I used the custom name generator to find '沈雅文' - a name that reflects my love for literature and arts. It's been perfect for making connections with local students and professors."
        },
        {
          name: "David Rodriguez",
          location: "Madrid, Spain",
          context: "Cultural Enthusiast",
          service: "Fantasy Name Generator",
          text: "As a fantasy writer, I was amazed by the fantasy Chinese name generator. It created '龙飞宇' for my novel's protagonist - meaning 'dragon soaring through the universe'. The cultural depth and mystical meaning are exactly what I needed!"
        },
        {
          name: "Emily Wang",
          location: "Toronto, Canada",
          context: "Heritage Explorer",
          service: "Zodiac Naming",
          text: "Born in the Year of the Tiger, I wanted a name that honored my zodiac. The service suggested '王虎威' which perfectly captures the tiger's strength and nobility. I feel more connected to my Chinese heritage now."
        },
        {
          name: "James Thompson",
          location: "Sydney, Australia",
          context: "Tech Entrepreneur",
          service: "Professional Consultation",
          text: "Starting a tech company in Shanghai required a professional Chinese name. The detailed analysis provided '汤明智' - combining innovation with wisdom. It's been instrumental in building trust with investors and partners."
        },
        {
          name: "Maria Gonzalez",
          location: "Barcelona, Spain",
          context: "Language Teacher",
          service: "Cultural Analysis",
          text: "Teaching Chinese culture to Spanish students, I needed authentic examples. The cultural analysis tool helped me understand the deeper meanings behind names like '高美云' - showing my students the poetry within Chinese naming."
        },
        {
          name: "Ryan O'Connor",
          location: "Dublin, Ireland",
          context: "Martial Arts Practitioner",
          service: "Traditional Naming",
          text: "Practicing Tai Chi for years, I wanted a name reflecting inner peace. '欧阳静' was suggested, meaning 'tranquil like still water'. Every time I introduce myself at the dojo, it reminds me of my martial arts philosophy."
        },
        {
          name: "Lisa Kim",
          location: "Seoul, South Korea",
          context: "International Relations",
          service: "Diplomatic Naming",
          text: "Working in China-Korea diplomatic affairs, having a proper Chinese name was essential. '金丽华' bridges my Korean heritage with Chinese elegance. It's opened doors in my diplomatic career that I never expected."
        },
        {
          name: "Alexandra Petrov",
          location: "Moscow, Russia",
          context: "Fashion Designer",
          service: "Creative Naming",
          text: "As a fashion designer expanding into Asian markets, I needed a name that reflects creativity. '佩美娜' combines my Russian roots with artistic elegance. Chinese clients love the sophisticated sound and meaning."
        },
        {
          name: "Carlos Martinez",
          location: "Mexico City, Mexico",
          context: "Chef & Restaurateur",
          service: "Business Naming",
          text: "Opening a fusion restaurant in Beijing required an authentic Chinese name. '马天厨' represents my culinary passion and sky-high ambitions. It's been perfect for building local customer trust."
        },
        {
          name: "Priya Sharma",
          location: "Mumbai, India",
          context: "Software Engineer",
          service: "Tech Professional",
          text: "Working for a Chinese tech company, I wanted a name that sounds natural. '夏美雅' reflects both my Indian heritage and professional elegance. Colleagues appreciate the thoughtful cultural bridge."
        },
        {
          name: "Jean-Pierre Dubois",
          location: "Paris, France",
          context: "Wine Merchant",
          service: "Luxury Business",
          text: "Importing French wines to China, my Chinese name '杜品酒' directly reflects my profession. The character for 'wine tasting' makes my expertise immediately clear to Chinese wine enthusiasts."
        },
        {
          name: "Hassan Al-Rahman",
          location: "Dubai, UAE",
          context: "Investment Banker",
          service: "Financial Sector",
          text: "In international finance, having a Chinese name builds trust. '拉曼富' combines my Arabic heritage with prosperity symbolism. It's essential for my work with Chinese investment partners."
        },
        {
          name: "Anna Kowalski",
          location: "Warsaw, Poland",
          context: "Medical Researcher",
          service: "Academic Naming",
          text: "Collaborating with Chinese medical institutions, '柯安娜' makes introductions smoother. The name suggests safety and femininity, perfect for building professional relationships in healthcare."
        },
        {
          name: "Benjamin Taylor",
          location: "Manchester, UK",
          context: "Football Coach",
          service: "Sports Industry",
          text: "Coaching in Chinese football academies, '泰勇' represents strength and courage. Young players connect with the name immediately, and it reflects the warrior spirit I bring to training."
        },
        {
          name: "Isabella Rossi",
          location: "Milan, Italy",
          context: "Luxury Brand Manager",
          service: "Fashion Industry",
          text: "Managing luxury brands in China, '罗美丽' captures Italian elegance with universal beauty. The name opens doors in high-end fashion circles and resonates with sophisticated Chinese consumers."
        },
        {
          name: "Ahmed Hassan",
          location: "Cairo, Egypt",
          context: "Archaeologist",
          service: "Cultural Exchange",
          text: "Leading archaeological expeditions between Egypt and China, '哈圣文' honors my cultural background while emphasizing scholarly wisdom. It's perfect for academic and cultural collaborations."
        },
        {
          name: "Svetlana Volkov",
          location: "St. Petersburg, Russia",
          context: "Classical Musician",
          service: "Arts & Culture",
          text: "Performing classical music in China, '沃美音' reflects my Russian heritage and musical talent. Concert audiences immediately understand my artistic identity through this beautiful name."
        },
        {
          name: "Roberto Silva",
          location: "São Paulo, Brazil",
          context: "Environmental Scientist",
          service: "Academic Research",
          text: "Researching sustainable development with Chinese universities, '席绿华' combines my Brazilian connection to nature with academic excellence. It perfectly represents my environmental mission."
        },
        {
          name: "Fatima Al-Zahra",
          location: "Casablanca, Morocco",
          context: "Textile Artist",
          service: "Creative Arts",
          text: "Showcasing Moroccan textiles in Chinese art galleries, '法美花' blends my cultural heritage with artistic beauty. The name creates instant connections with Chinese art collectors and enthusiasts."
        },
        {
          name: "Thomas Anderson",
          location: "Stockholm, Sweden",
          context: "Green Technology",
          service: "Innovation Sector",
          text: "Developing clean energy solutions for China, '安德森' maintains my Swedish identity while being pronounceable in Chinese. It's helped establish trust in the competitive renewable energy market."
        },
        {
          name: "Chiara Bianchi",
          location: "Rome, Italy",
          context: "Art Historian",
          service: "Cultural Studies",
          text: "Studying Chinese-Italian art exchange, '白佳雅' represents purity and scholarly elegance. The name facilitates academic discussions and cultural research collaborations with Chinese institutions."
        },
        {
          name: "Yuki Tanaka",
          location: "Tokyo, Japan",
          context: "Technology Translator",
          service: "Language Services",
          text: "Translating technical documents between Japanese and Chinese, '田雪智' honors my Japanese roots while emphasizing wisdom. It builds trust in complex technical translation projects."
        }
      ]
    };
  },
  
  computed: {
    allSectionsExpanded() {
      return ['nameStructure', 'characterMeaning', 'modernTrends', 'nameTranslation', 'traditionalElements', 'namingService']
        .every(section => this.isExpanded[section] === true);
    },
    
    allFaqsExpanded() {
      return ['faq1', 'faq2', 'faq3', 'faq4', 'faq5', 'faq6', 'faq7', 'faq8', 'faq9', 'faq10', 'faq11', 'faq12']
        .every(faq => this.isExpanded[faq] === true);
    },
    
    groupedTestimonials() {
      const items = this.isMobile ? 2 : this.itemsPerSlide; // 移动端每页显示2个
      const groups = [];
      for (let i = 0; i < this.testimonials.length; i += items) {
        groups.push(this.testimonials.slice(i, i + items));
      }
      return groups;
    },
    
    slidesCount() {
      return this.groupedTestimonials.length;
    },
    
    slideWidth() {
      return this.isMobile ? 8.333 : 16.666; // 移动端8.333%（12页），桌面端16.666%（6页）
    },
    
    maxSlides() {
      return this.slidesCount - 1;
    }
  },
  
  methods: {
    // 添加网站结构化数据
    addWebsiteStructuredData() {
      const websiteSchema = createWebsiteSchema({
        url: 'https://chinesename.us/',
        name: 'Chinese Name Generator & Translator | Free English to Chinese | ChineseName.us',
        description: 'Get your accurate Chinese name translation with our free generator. Personalized Chinese names with authentic pronunciation, cultural meanings and significance for English names.'
      });
      
      this.structuredDataScript = addStructuredDataToPage(websiteSchema, 'website-structured-data');
    },
    toggleSection(section) {
      this.isExpanded[section] = !this.isExpanded[section];
    },
    
    toggleAllSections() {
      const newValue = !this.allSectionsExpanded;
      ['nameStructure', 'characterMeaning', 'modernTrends', 'nameTranslation', 'traditionalElements', 'namingService']
        .forEach(key => {
          this.isExpanded[key] = newValue;
        });
    },
    
    toggleFaq(faq) {
      this.isExpanded[faq] = !this.isExpanded[faq];
    },
    
    toggleAllFaqs() {
      const newValue = !this.allFaqsExpanded;
      ['faq1', 'faq2', 'faq3', 'faq4', 'faq5', 'faq6', 'faq7', 'faq8', 'faq9', 'faq10', 'faq11', 'faq12']
        .forEach(key => {
          this.isExpanded[key] = newValue;
        });
    },
    
    // 轮播控制方法
    nextSlide() {
      if (this.currentSlide >= this.maxSlides) {
        this.currentSlide = 0; // 到达最后一页时回到第一页
      } else {
        this.currentSlide++;
      }
    },
    
    prevSlide() {
      if (this.currentSlide <= 0) {
        this.currentSlide = this.maxSlides; // 在第一页时回到最后一页
      } else {
        this.currentSlide--;
      }
    },
    
    goToSlide(index) {
      this.currentSlide = index;
    },
    
    startAutoSlide() {
      this.autoSlideTimer = setInterval(() => {
        this.nextSlide(); // 使用相同的循环逻辑
      }, 8000); // 每8秒自动切换，放慢速度
    },
    
    stopAutoSlide() {
      if (this.autoSlideTimer) {
        clearInterval(this.autoSlideTimer);
        this.autoSlideTimer = null;
      }
    },
    
    checkMobile() {
      this.isMobile = window.innerWidth <= 768;
    },
    
    handleResize() {
      this.checkMobile();
      // 重置轮播到第一页
      this.currentSlide = 0;
      // 重新启动自动轮播
      this.stopAutoSlide();
      this.$nextTick(() => {
        this.startAutoSlide();
      });
    },
    
    // 添加JSON-LD结构化数据
    addJsonLdScript() {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How do I choose a Chinese name that sounds like my English name?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "To choose a Chinese name that sounds similar to your English name, our translator considers Chinese characters with similar phonetics while ensuring the characters have positive meanings. For example, the name 'Michael' might be translated as '麦克' (Mài Kè), which sounds similar while using characters with good connotations. Our translation tools analyze both sound and meaning to provide you with appropriate options."
            }
          },
          {
            "@type": "Question",
            "name": "What's the difference between a phonetic and meaningful Chinese name translation?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A phonetic translation focuses primarily on matching the sounds of your original name using Chinese characters, prioritizing pronunciation similarity. A meaningful translation, on the other hand, selects characters based on their symbolic significance and cultural relevance, sometimes at the expense of exact pronunciation. The best Chinese names often balance both approaches, finding characters that sound similar to your original name while also conveying positive meanings and cultural resonance."
            }
          },
          {
            "@type": "Question",
            "name": "Is it better to have a one-character or two-character given name in Chinese?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Both one-character and two-character given names are common in Chinese culture, with two-character names being more prevalent in modern times. Single-character names can be more distinctive and straightforward, while two-character names offer more flexibility for creating balance in meaning, sound, and five-element theory. Our name generator provides both options, allowing you to choose based on your preference and cultural considerations."
            }
          },
          {
            "@type": "Question",
            "name": "How important is the meaning of characters in a Chinese name?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The meaning of characters is extremely important in Chinese naming culture. Unlike in some Western cultures where names are chosen primarily for their sound or family heritage, Chinese names are selected with careful consideration of the characters' meanings, which often express parents' hopes and wishes for their child. Characters with positive connotations related to virtues, strength, beauty, intelligence, or success are commonly chosen. This is why our translation service emphasizes both phonetic similarity and meaningful character selection."
            }
          },
          {
            "@type": "Question",
            "name": "Can I use the same Chinese name for both personal and business purposes?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You can use the same Chinese name for both personal and business contexts, but it's worth considering whether different names might be advantageous. Business names in Chinese might prioritize professional qualities or industry relevance, while personal names might focus more on individual characteristics. Many foreigners doing business in China choose Chinese names that reflect professionalism while maintaining personal identity. Our service can help you generate appropriate options for both contexts."
            }
          }
        ]
      });
      document.head.appendChild(script);
    }
  },
  
  // 添加FAQ结构化数据
  mounted() {
    this.addJsonLdScript();
    this.checkMobile();
    this.startAutoSlide();
    
    // 添加网站结构化数据
    this.addWebsiteStructuredData();
    window.addEventListener('resize', this.handleResize);
  },
  
  beforeUnmount() {
    this.stopAutoSlide();
    window.removeEventListener('resize', this.handleResize);
  }
}
</script>

<style scoped>
.home-page {
  padding-top: 0;
  font-family: 'Noto Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
}

.hero {
  background-color: #FAF9F8;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 0;
  min-height: 280px;
  margin: 20px 0;
  position: relative;
  overflow: hidden;
  border: 1px solid #E0E0E0;
  border-radius: 12px;
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 30%;
  background: linear-gradient(135deg, rgba(255,240,240,0.6) 0%, rgba(255,255,255,0) 100%);
  z-index: 0;
}

.hero .container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 60px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
}

.hero-content {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 5%;
  width: 100%;
}

.hero-image {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.hero-image::after {
  content: '';
  position: absolute;
  width: 240px;
  height: 240px;
  background: rgba(200, 50, 50, 0.07);
  border-radius: 50%;
  z-index: -1;
}

.hero-image img {
  display: block;
  width: 300px;
  height: auto;
  filter: drop-shadow(0 8px 16px rgba(0,0,0,0.12));
}

.hero-text {
  flex: 1 1 auto;
  max-width: 900px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.hero h1 {
  font-size: 2.5rem;
  color: #222;
  margin-top: 0;
  margin-bottom: 15px;
  line-height: 1.3;
  font-weight: 700;
}

.hero .subtitle {
  font-size: 1.3rem;
  color: #555;
  margin-top: 0;
  margin-bottom: 0;
  line-height: 1.5;
}

.hero-cta {
  margin-top: 30px;
  display: flex;
  justify-content: flex-start;
}

.hero-try-button {
  display: inline-block;
  padding: 16px 40px;
  background: linear-gradient(135deg, #e60012 0%, #ff0900 100%);
  color: white;
  font-size: 1.2rem;
  font-weight: 600;
  text-decoration: none;
  border-radius: 50px;
  box-shadow: 0 4px 15px rgba(230, 0, 18, 0.3);
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.hero-try-button:hover {
  transform: translateY(-4px) scale(1.02);
  box-shadow: 0 8px 30px rgba(230, 0, 18, 0.5);
  background: linear-gradient(135deg, #ff0900 0%, #e60012 100%);
}

.hero-try-button:active {
  transform: translateY(-1px) scale(1);
  box-shadow: 0 4px 15px rgba(230, 0, 18, 0.4);
}

.features {
  padding: 70px 0;
  background-color: #fff;
  position: relative;
  border: 1px solid #E0E0E0;
  margin: 20px 0;
  border-radius: 12px;
}

/* 用户评价轮播样式 - 竖向卡片布局 */
.testimonials-section {
  padding: 60px 0; /* 减少高度 */
  background-color: #F5F5F5;
  position: relative;
  overflow: hidden;
  border: 1px solid #E0E0E0;
  margin: 20px 0;
  border-radius: 12px;
}

.testimonials-section::before {
  content: '';
  position: absolute;
  top: -50%;
  right: -30%;
  width: 60%;
  height: 200%;
  background: radial-gradient(circle, rgba(209,10,17,0.04) 0%, rgba(209,10,17,0) 70%);
  transform: rotate(15deg);
}

.section-subtitle {
  text-align: center;
  color: #666;
  font-size: 1.1rem;
  margin-bottom: 40px; /* 减少间距 */
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.testimonials-carousel {
  position: relative;
  overflow: hidden;
  margin-bottom: 30px; /* 减少间距 */
}

.testimonials-track {
  display: flex;
  transition: transform 1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  width: 600%; /* 6 slides * 100% */
}

.testimonial-slide {
  width: 16.666%; /* 6 slides, each takes 16.666% (100%/6) */
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 桌面端4列 */
  gap: 20px;
  padding: 0 15px;
  box-sizing: border-box;
  flex-shrink: 0;
}

.testimonial-card {
  background: white;
  border-radius: 16px;
  padding: 20px; /* 减少padding */
  box-shadow: 0 8px 25px rgba(0,0,0,0.08);
  border: 1px solid rgba(0,0,0,0.06);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  min-height: 280px; /* 设置最小高度保持一致 */
}

.testimonial-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: linear-gradient(135deg, #d10a11, #f05252);
}

.testimonial-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 35px rgba(0,0,0,0.12);
}

.testimonial-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 15px;
}

.user-info {
  display: flex;
  align-items: center;
  gap: 12px;
  flex: 1;
}

.user-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: linear-gradient(135deg, #d10a11, #f05252);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.avatar-initial {
  color: white;
  font-weight: 600;
  font-size: 1rem;
}

.user-details h4 {
  margin: 0 0 2px 0;
  color: #333;
  font-size: 0.95rem;
  font-weight: 600;
  line-height: 1.2;
}

.user-location {
  margin: 0;
  color: #666;
  font-size: 0.8rem;
  line-height: 1.2;
}

.stars {
  display: flex;
  gap: 1px;
  flex-shrink: 0;
}

.star {
  color: #ffc107;
  font-size: 0.9rem;
}

.testimonial-text {
  font-size: 0.9rem;
  line-height: 1.5;
  color: #444;
  margin: 0 0 15px 0;
  font-style: italic;
  flex: 1;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 4; /* 限制显示4行 */
  line-clamp: 4; /* 标准属性 */
  -webkit-box-orient: vertical;
}

.testimonial-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  margin-top: auto;
}

.service-tag {
  background: rgba(209,10,17,0.1);
  color: #d10a11;
  padding: 3px 8px;
  border-radius: 12px;
  font-size: 0.7rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.3px;
  flex-shrink: 0;
}

.user-context {
  color: #888;
  font-size: 0.75rem;
  font-style: italic;
  text-align: right;
}

.carousel-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: white;
  border: 2px solid #e0e0e0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  z-index: 10;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.carousel-btn:hover {
  border-color: #d10a11;
  background: #d10a11;
  color: white;
  transform: translateY(-50%) scale(1.1);
}

.carousel-btn:active {
  transform: translateY(-50%) scale(0.95);
}

.carousel-btn svg {
  width: 20px;
  height: 20px;
}

.prev-btn {
  left: -25px;
}

.next-btn {
  right: -25px;
}

.carousel-indicators {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 30px; /* 减少间距 */
}

.indicator {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: none;
  background: #ddd;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
}

.indicator:hover {
  background: #bbb;
  transform: scale(1.1);
}

.indicator.active {
  background: #d10a11;
  transform: scale(1.3);
  box-shadow: 0 0 10px rgba(209,10,17,0.3);
}

.stats-section {
  display: flex;
  justify-content: center;
  gap: 60px;
  flex-wrap: wrap;
  margin-top: 30px; /* 减少间距 */
}

.stat-item {
  text-align: center;
  min-width: 120px;
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 700;
  color: #d10a11;
  margin-bottom: 8px;
  line-height: 1;
}

.stat-label {
  color: #666;
  font-size: 1rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}



.features-alt {
  background-color: #F5F5F5;
  position: relative;
  padding: 80px 0;
  margin: 20px 0;
  border: 1px solid #E0E0E0;
  border-radius: 12px;
}

.features::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,0.09), rgba(0,0,0,0));
}

.features .container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 60px;
}

.section-title {
  font-size: 2.4rem;
  color: #222;
  margin-bottom: 60px;
  text-align: center;
  position: relative;
  font-weight: 700;
}

.section-title::after {
  content: '';
  display: block;
  width: 60px;
  height: 3px;
  background-color: #d10a11;
  margin: 20px auto 0;
  border-radius: 2px;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 35px;
  margin-bottom: 40px;
}

.feature-card-link {
  display: block;
  text-decoration: none;
  color: inherit;
  transition: transform 0.3s;
}

.feature-card-link:hover {
  transform: translateY(-7px);
}

.feature-card {
  background-color: white;
  border-radius: 16px;
  padding: 40px;
  transition: all 0.3s ease;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  height: auto;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(0,0,0,0.06);
  position: relative;
  z-index: 1;
  overflow: hidden;
}

.features-alt .feature-card {
  background-color: white;
  border: 1px solid rgba(0,0,0,0.06);
}

.feature-card:hover {
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
  border-color: rgba(0,0,0,0.08);
}

.feature-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 5px;
  height: 100%;
  background: linear-gradient(to bottom, #d10a11, #f05252);
  z-index: 2;
  border-top-left-radius: 16px;
  border-bottom-left-radius: 16px;
}

.feature-card .icon {
  width: 65px;
  height: 65px;
  background-color: rgba(209, 10, 17, 0.08);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 25px;
  transition: all 0.3s ease;
}

.feature-card:hover .icon {
  background-color: rgba(209, 10, 17, 0.12);
  transform: scale(1.05);
}

.feature-card .icon svg {
  width: 32px;
  height: 32px;
  color: #d10a11;
}

.feature-card h3 {
  font-size: 1.5rem;
  margin-bottom: 16px;
  color: #222;
  font-weight: 600;
}

.feature-card p {
  color: #555;
  margin-bottom: 25px;
  line-height: 1.7;
  flex-grow: 1;
  font-size: 1.05rem;
}

.feature-link {
  color: #d10a11;
  text-decoration: none;
  font-weight: 600;
  display: inline-block;
  margin-top: auto;
  display: flex;
  align-items: center;
  font-size: 1.05rem;
  transition: all 0.2s ease;
}

.feature-card:hover .feature-link {
  color: #b80000;
}

.ming-icon {
  width: 26px;
  height: 26px;
  margin-right: 8px;
  transition: transform 0.3s ease;
}

.feature-link:hover .ming-icon {
  transform: translateX(5px);
}

.naming-services-grid {
  grid-template-columns: repeat(2, 1fr);
  max-width: 1400px;
  margin: 0 auto;
  gap: 40px;
}

.naming-services-grid .feature-card {
  min-height: 190px;
  padding: 24px;
}

.naming-services-grid .feature-card .icon {
  margin-bottom: 0;
  margin-right: 15px;
  flex-shrink: 0;
}

.naming-services-grid .feature-card h3 {
  margin-bottom: 12px;
  margin-top: 0;
  flex: 1;
  display: flex;
  align-items: center;
}

.naming-services-grid .feature-card .header-row {
  display: flex;
  align-items: flex-start;
  margin-bottom: 10px;
}

.naming-services-grid .feature-card p {
  margin-bottom: 12px;
}

.naming-services-grid .feature-card p {
  min-height: 50px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3; /* 标准属性 */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.5;
  position: relative;
  transition: all 0.3s ease;
}

.naming-services-grid .feature-card:hover p {
  -webkit-line-clamp: unset;
  line-clamp: unset; /* 标准属性 */
  overflow: visible;
  background-color: transparent;
  box-shadow: none;
  border-radius: 0;
  padding: 0;
  margin: 0;
  z-index: 10;
  position: relative;
  border: none;
}

.naming-services-grid .feature-card-link:hover {
  z-index: 20;
  position: relative;
}

.naming-services-grid .feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
}

/* 文本内容丰富部分样式 */
.about-chinese-names {
  padding: 100px 0;
  background-color: #FFFFFF;
  position: relative;
  overflow: hidden;
  border: 1px solid #E0E0E0;
  margin: 20px 0;
  border-radius: 12px;
}

.about-chinese-names::before {
  content: '';
  position: absolute;
  width: 400px;
  height: 400px;
  right: -200px;
  top: -200px;
  background: radial-gradient(circle, rgba(209,10,17,0.03) 0%, rgba(209,10,17,0) 70%);
  border-radius: 50%;
}

.about-chinese-names::after {
  content: '';
  position: absolute;
  width: 300px;
  height: 300px;
  left: -150px;
  bottom: -150px;
  background: radial-gradient(circle, rgba(209,10,17,0.03) 0%, rgba(209,10,17,0) 70%);
  border-radius: 50%;
}

.introduction-text {
  font-size: 1.05rem;
  line-height: 1.7;
  color: #333;
  max-width: 900px;
  margin: 0 auto 40px;
  text-align: center;
}

.two-column-content {
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto;
}

.column {
  flex: 1 1 calc(50% - 20px);
  min-width: 300px;
}

.collapsible-section {
  margin-bottom: 25px;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  overflow: hidden;
  transition: all 0.3s ease;
}

.collapsible-title {
  font-size: 1.3rem;
  color: #d10a11;
  margin: 0;
  padding: 18px 20px;
  cursor: pointer;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 600;
}

.title-with-icon {
  display: flex;
  align-items: center;
  gap: 12px;
  flex: 1;
}

.section-icon {
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(209, 10, 17, 0.1);
  border-radius: 6px;
  padding: 4px;
  flex-shrink: 0;
}

.section-icon svg {
  width: 16px;
  height: 16px;
  color: #d10a11;
}

.toggle-icon {
  font-size: 1.4rem;
  color: #d10a11;
  font-weight: bold;
}

.collapsible-content {
  padding: 0 20px 20px;
  line-height: 1.7;
  color: #444;
}

.collapsible-content p {
  margin-top: 0;
  margin-bottom: 15px;
}

.collapsible-content ul {
  padding-left: 20px;
  margin-bottom: 15px;
}

.collapsible-content li {
  margin-bottom: 8px;
}

.see-more-wrapper {
  text-align: center;
  margin-top: 30px;
}

.see-more-btn {
  background-color: transparent;
  border: 2px solid #d10a11;
  color: #d10a11;
  padding: 10px 25px;
  border-radius: 30px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1rem;
}

.see-more-btn:hover {
  background-color: #d10a11;
  color: white;
}

/* FAQ 部分样式 */
.faq-section {
  padding: 100px 0;
  background-color: #FFFFFF;
  position: relative;
  border: 1px solid #E0E0E0;
  margin: 20px 0;
  border-radius: 12px;
}

.faq-columns {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  width: 100%;
  margin: 0 auto 30px;
}

.faq-column {
  flex: 1 1 calc(50% - 15px);
  min-width: 300px;
}

.faq-container {
  max-width: 900px;
  margin: 0 auto;
}

.faq-item {
  background-color: #fff;
  border-radius: 16px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.04);
  margin-bottom: 20px;
  transition: all 0.3s ease;
  border: 1px solid rgba(0,0,0,0.05);
  cursor: pointer;
  overflow: hidden;
  position: relative;
}

.faq-item::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 4px;
  height: 100%;
  background: linear-gradient(to bottom, #d10a11, #f05252);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.faq-item:hover {
  box-shadow: 0 12px 25px rgba(0,0,0,0.08);
  transform: translateY(-3px);
}

.faq-item:hover::before,
.faq-expanded::before {
  opacity: 1;
}

.faq-expanded {
  box-shadow: 0 15px 30px rgba(0,0,0,0.1);
  border-color: rgba(209, 10, 17, 0.1);
}

.faq-question {
  font-size: 1.15rem;
  color: #333;
  margin: 0;
  padding: 20px;
  font-weight: 600;
  position: relative;
  display: flex;
  align-items: flex-start;
}

.faq-q-marker, .faq-a-marker {
  color: #d10a11;
  font-weight: 700;
  margin-right: 8px;
  flex-shrink: 0;
}

.faq-toggle {
  margin-left: auto;
  color: #d10a11;
  font-size: 1.3rem;
  font-weight: bold;
  padding-left: 10px;
  flex-shrink: 0;
}

.faq-answer {
  padding: 0 20px 20px 20px;
  color: #444;
  line-height: 1.7;
}

.faq-answer p {
  margin: 0;
  display: flex;
  align-items: flex-start;
}


/* CTA Section */
.cta-section {
  padding: 80px 0;
  background-color: #f8f9fa;
  position: relative;
  overflow: hidden;
}

.cta-section::before {
  content: '';
  position: absolute;
  top: -50%;
  right: -50%;
  width: 100%;
  height: 200%;
  background: radial-gradient(circle, rgba(209,10,17,0.05) 0%, rgba(209,10,17,0) 70%);
  transform: rotate(45deg);
}

.cta-section::after {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 100%;
  height: 200%;
  background: radial-gradient(circle, rgba(209,10,17,0.03) 0%, rgba(209,10,17,0) 70%);
  transform: rotate(-45deg);
}

.cta-content {
  text-align: center;
  position: relative;
  z-index: 2;
  max-width: 800px;
  margin: 0 auto;
}

.cta-title {
  font-size: 2.5rem;
  color: #222;
  margin-bottom: 20px;
  font-weight: 700;
  text-shadow: none;
}

.cta-subtitle {
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 40px;
  line-height: 1.6;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.cta-buttons {
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
}

.cta-button {
  display: inline-block;
  padding: 16px 32px;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1.1rem;
  text-decoration: none;
  transition: all 0.3s ease;
  min-width: 200px;
  text-align: center;
}

.cta-button.primary {
  background-color: #d10a11;
  color: white;
  box-shadow: 0 8px 20px rgba(209,10,17,0.3);
}

.cta-button.primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 30px rgba(209,10,17,0.4);
  background-color: #b80000;
}

.cta-button.secondary {
  background-color: transparent;
  color: #d10a11;
  border: 2px solid #d10a11;
}

.cta-button.secondary:hover {
  background-color: #d10a11;
  color: white;
  transform: translateY(-3px);
}

@media (max-width: 1200px) {
  .hero-content {
    gap: 4%;
  }
  
  .hero-image img {
    width: 200px;
  }
  
  .hero h1 {
    font-size: 2.2rem;
  }
}



@media (max-width: 992px) {
  .hero {
    padding: 40px 0;
    min-height: auto;
    margin-top: 15px;
  }
  
  .hero-content {
    flex-direction: column;
    gap: 30px;
    text-align: center;
  }
  
  .hero-text {
    align-items: center;
    max-width: 100%;
  }
  
  .hero h1 {
    font-size: 2rem;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .naming-services-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .rich-text-content {
    padding: 0 20px;
  }
}

@media (max-width: 768px) {
  .hero {
    padding: 30px 0;
    margin-top: 10px;
  }
  
  .hero-content {
    gap: 30px;
  }
  
  .hero-image {
    display: none; /* 移动端隐藏大图片 */
  }
  
  .hero-image img {
    width: 160px;
  }
  
  .hero h1 {
    font-size: 1.9rem;
  }
  
  .hero .subtitle {
    font-size: 1.1rem;
  }
  
  .hero-cta {
    justify-content: center;
    margin-top: 25px;
  }
  
  .hero-try-button {
    padding: 14px 30px;
    font-size: 0.95rem;
    letter-spacing: 0.5px;
  }
  
  .features, .features-alt, .about-chinese-names, .faq-section, .cta-section {
    padding: 70px 0;
  }
  
  .testimonials-section {
    padding: 50px 0; /* 用户评价区域更紧凑 */
  }
  
  /* 用户评价轮播移动端样式 */
  .testimonials-track {
    width: 1200%; /* 12 slides for mobile */
  }
  
  .testimonial-slide {
    width: 8.333%; /* 12 slides, each takes 8.333% (100%/12) */
    grid-template-columns: 1fr; /* 移动端1列 */
    padding: 0 10px;
    gap: 15px;
  }
  
  .testimonial-card {
    padding: 15px;
    min-height: 240px;
  }
  
  .testimonial-text {
    font-size: 0.85rem;
    -webkit-line-clamp: 3; /* 移动端限制3行 */
    line-clamp: 3; /* 标准属性 */
  }
  
  .user-avatar {
    width: 35px;
    height: 35px;
  }
  
  .avatar-initial {
    font-size: 0.9rem;
  }
  
  .user-details h4 {
    font-size: 0.9rem;
  }
  
  .user-location {
    font-size: 0.75rem;
  }
  
  .stars {
    gap: 0;
  }
  
  .star {
    font-size: 0.8rem;
  }
  
  .service-tag {
    font-size: 0.65rem;
    padding: 2px 6px;
  }
  
  .user-context {
    font-size: 0.7rem;
  }
  
  .carousel-btn {
    width: 45px;
    height: 45px;
  }
  
  .prev-btn {
    left: -22px;
  }
  
  .next-btn {
    right: -22px;
  }
  
  .stats-section {
    gap: 30px;
  }
  
  .stat-number {
    font-size: 2rem;
  }
  
  .cta-title {
    font-size: 2rem;
  }
  
  .cta-subtitle {
    font-size: 1.1rem;
  }
  
  .cta-buttons {
    flex-direction: column;
    align-items: center;
  }
  
  .section-title {
    font-size: 1.8rem;
    margin-bottom: 40px;
  }
  
  .feature-card {
    padding: 25px;
  }
  
  .faq-item {
    padding: 25px;
  }
  
  .faq-question, .faq-answer {
    padding-left: 25px;
  }
  
  .faq-question {
    font-size: 1.2rem;
  }
  
  .naming-services-grid {
    grid-template-columns: 1fr;
  }
  
  .naming-services-grid .feature-card {
    min-height: 160px;
    padding: 18px;
  }
  
  .naming-services-grid .feature-card .header-row {
    margin-bottom: 8px;
  }
  
  .naming-services-grid .feature-card .icon {
    margin-right: 12px;
  }
  
  .naming-services-grid .feature-card h3 {
    margin-bottom: 0;
    font-size: 1.3rem;
  }
  
  .naming-services-grid .feature-card p {
    min-height: 40px;
    -webkit-line-clamp: 3;
    line-clamp: 3; /* 标准属性 */
    line-height: 1.4;
    margin-bottom: 10px;
  }
  
  .empty-card-placeholder {
    display: none;
  }
  
  .two-column-content {
    flex-direction: column;
    gap: 20px;
  }
  
  .column {
    flex: 1 1 100%;
  }
  
  .collapsible-title {
    font-size: 1.2rem;
    padding: 15px;
  }
  
  .collapsible-content {
    padding: 0 15px 15px;
  }


}

@media (max-width: 480px) {
  .hero {
    padding: 30px 0;
  }
  
  .hero .container, .features .container {
    padding: 0 30px;
  }
  
  .hero-image img {
    width: 130px;
  }
  
  .hero h1 {
    font-size: 1.6rem;
  }
  
  .hero .subtitle {
    font-size: 1rem;
  }
  
  .hero-try-button {
    padding: 12px 25px;
    font-size: 0.85rem;
    letter-spacing: 0.3px;
  }
  
  .cta-title {
    font-size: 1.8rem;
  }
  
  .cta-subtitle {
    font-size: 1rem;
    margin-bottom: 30px;
  }
  
  .cta-button {
    min-width: 280px;
    padding: 14px 28px;
  }
  
  .feature-grid {
    grid-template-columns: 1fr;
  }
  
  .section-title {
    font-size: 1.6rem;
  }
  
  .feature-card .icon {
    width: 55px;
    height: 55px;
  }
  
  .feature-card h3 {
    font-size: 1.3rem;
  }
  
}
@media (max-width: 430px) {
  /* 手机端（≤430px）将 Our Chinese Name Services 的网格改为两列，并缩小卡片尺寸 */
  .features .container {
    padding: 0 16px !important; /* 减小左右内边距，避免两列被挤出屏幕 */
    box-sizing: border-box;
  }

  .naming-services-grid {
    grid-template-columns: 1fr !important; /* 移动端1列 */
    gap: 12px;
    width: 100%;
    margin-left: 0;
    margin-right: 0;
    box-sizing: border-box;
  }

  .naming-services-grid .feature-card {
    min-height: 150px;
    padding: 12px;
    width: 100%;
    box-sizing: border-box;
  }

  .naming-services-grid .feature-card .header-row {
    margin-bottom: 6px;
  }

  .naming-services-grid .feature-card .icon {
    width: 48px;
    height: 48px;
    margin-bottom: 10px;
  }

  .naming-services-grid .feature-card h3 {
    font-size: 1.05rem;
    margin-bottom: 6px;
    line-height: 1.3;
    min-height: 2.6em; /* 保证两行高度，2 * 1.3em */
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2; /* 强制两行截断 */
    line-clamp: 2; /* 标准属性 */
    overflow: hidden;
  }

  .naming-services-grid .feature-card p {
    font-size: 0.9rem;
    line-height: 1.45;
    min-height: 36px;
    -webkit-line-clamp: 3;
    line-clamp: 3;
  }

  .feature-link {
    font-size: 0.95rem;
  }

  /* 保证网格子项与链接也不制造溢出 */
  .feature-card-link {
    display: block;
    width: 100%;
    max-width: 100%;
    box-sizing: border-box;
  }

  .feature-grid,
  .naming-services-grid {
    overflow-x: hidden;
  }

  /* Understanding Chinese Names & Cultural Background 区域，两列展示 */
  .about-chinese-names .container {
    padding: 0 16px;
    box-sizing: border-box;
  }

  .about-chinese-names .two-column-content {
    display: grid !important;
    grid-template-columns: 1fr;
    gap: 12px;
    width: 100%;
    box-sizing: border-box;
  }

  /* 让列容器不参与尺寸，子级卡片成为网格项 */
  .about-chinese-names .two-column-content > .column {
    display: contents;
    min-width: 0 !important;
  }

  .about-chinese-names .column {
    flex: 0 0 auto;
    width: 100%;
    min-width: 0 !important; /* 覆盖全局的 min-width:300px，防止溢出 */
  }

  .about-chinese-names .collapsible-section {
    border: 1px solid #E6E6E6;
    border-radius: 10px;
    padding: 12px;
    background: #fff;
    margin: 0; /* 使用grid gap，所以外边距设为0避免重叠/溢出 */
    box-sizing: border-box;
  }

  .about-chinese-names .collapsible-title {
    font-size: 1rem;
    padding: 10px 12px;
  }

  .about-chinese-names .collapsible-content {
    padding: 0 10px 10px;
  }

  /* What Our Users Say 区块 - 统计数字在手机端纵向排列（一列） */
  .stats-section {
    display: grid !important;
    grid-template-columns: 1fr;
    gap: 16px;
    align-items: stretch;
    justify-items: center;
  }

  .stat-item {
    min-width: 0; /* 防止min-width撑破布局 */
  }

  .stat-number {
    font-size: 1.6rem; /* 更适合手机 */
  }

  /* FAQ 区块：两列网格 + 紧凑样式 */
  .faq-section .container {
    padding: 0 16px;
    box-sizing: border-box;
  }

  .faq-columns {
    display: grid !important;
    grid-template-columns: 1fr;
    gap: 12px;
    margin: 0 auto 16px;
  }

  .faq-column {
    flex: 0 0 auto;
    min-width: 0 !important; /* 覆盖300px最小宽度，防止挤出一列 */
  }

  .faq-item {
    margin: 0; /* 使用grid gap控制间距 */
    padding: 12px !important; /* 覆盖768px下的25px，卡片更紧凑 */
    box-sizing: border-box;
  }

  .faq-question, .faq-answer {
    padding: 12px !important;
  }

  .faq-question {
    font-size: 1rem !important;
  }

  /* CTA 双按钮：手机端横向并列 */
  .cta-buttons {
    flex-direction: row !important;
    justify-content: center;
    align-items: stretch;
    gap: 10px;
  }

  .cta-button {
    min-width: 0 !important; /* 覆盖在 <=480px 下的 280px 限制 */
    flex: 1 1 0%;
    padding: 12px 14px; /* 稍微收紧内边距以适配两列 */
  }
}
 
@media (hover: none) {
  .feature-card-link:hover {
    transform: none;
  }

  .feature-card:hover {
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
    border-color: rgba(0,0,0,0.06);
  }

  .feature-card:hover .icon {
    background-color: rgba(209, 10, 17, 0.08);
    transform: none;
  }

  .feature-card:hover .feature-link {
    color: #d10a11;
  }

  .naming-services-grid .feature-card:hover p {
    -webkit-line-clamp: 3;
    line-clamp: 3; /* 标准属性 */
    overflow: hidden;
    background-color: transparent;
    box-shadow: none;
    border-radius: 0;
    padding: 0;
    margin: 0;
    z-index: auto;
    position: static;
    border: none;
  }

  .naming-services-grid .feature-card-link:hover {
    z-index: auto;
    position: static;
  }

  .naming-services-grid .feature-card:hover {
    transform: none;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  }
}
@media (min-width: 981px) {
  /* 桌面端：让FAQ边界与主题容器对齐（将边框应用在container上） */
  .faq-section {
    border: none; /* 移除section层级边框，避免与页面容器错位 */
    padding: 100px 0; /* 保持原有上下间距 */
  }

  .faq-section > .container {
    max-width: 1600px !important;
    margin: 0 auto;
    padding: 0 30px !important;
    box-sizing: border-box;
    position: relative;            /* 供伪元素定位 */
    border: none;                  /* 由伪元素绘制边框，避免缩进 */
    overflow: visible;
  }

  /* 用伪元素把边框扩展到容器padding之外，确保与页面主体对齐 */
  .faq-section > .container::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: -30px;
    right: -30px;
    border: 1px solid #E0E0E0;
    border-radius: 12px;
    pointer-events: none;
  }
}
</style>