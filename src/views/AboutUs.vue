<template>
  <div class="about-page">
    <div class="container">
      <h1 class="page-title">{{ $t('home.about.title') }} | English to Chinese Name Translation Service</h1>
      
      <div class="about-content">
        <div class="about-description">
          <p class="seo-introduction">We are experts in Chinese name translation and creation. Our professional services include translating English names to Chinese, converting Chinese names to English, and providing personalized Chinese name recommendations with our Chinese name generator. Learn how to say your name in Chinese characters with cultural meaning and proper pronunciation. Nous sommes spécialistes de la traduction et création de noms chinois. Wir übersetzen Namen ins Chinesische. Мы переводим имена на китайский язык. 私たちは中国語の名前の翻訳と作成の専門家です。</p>
          <p>{{ $t('home.about.description') }}</p>
          
          <div class="about-services">
            <h2>Our Chinese Name Translation Services</h2>
            <ul class="services-list">
              <li>
                <h3>English to Chinese Name Translation</h3>
                <p>We provide accurate and culturally appropriate translations of English names to Chinese characters. Our professional translators consider pronunciation, meaning, and cultural context to create authentic Chinese names that preserve the essence of your original name.</p>
              </li>
              <li>
                <h3>Chinese to English Name Translation</h3>
                <p>Our Chinese to English name translation service helps you convert your Chinese name into an English equivalent that maintains its cultural significance while being easy to pronounce for English speakers.</p>
              </li>
              <li>
                <h3>Chinese Name Generator with Meaning</h3>
                <p>Using our advanced Chinese name generator with meaning, you can create a personalized Chinese name based on your preferences, personality traits, and birth information. Each name comes with detailed explanations of character meanings and cultural significance.</p>
              </li>
              <li>
                <h3>Mandarin Name Translator</h3>
                <p>Our professional Mandarin name translator service ensures accurate phonetic representation of your name in Chinese characters, with special attention to proper tones and pronunciation in standard Mandarin Chinese.</p>
              </li>
            </ul>
          </div>
        </div>
        
        <div class="about-features">
          <div class="feature">
            <div class="icon">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h3>{{ $t('about.expertise.title') }}</h3>
            <p>Our team includes experts in Chinese linguistics, cultural traditions, and name translation. We understand the nuances of translating names between English and Chinese, ensuring that your Chinese name is not only phonetically accurate but also culturally appropriate and meaningful.</p>
          </div>
          
          <div class="feature">
            <div class="icon">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3>{{ $t('about.quality.title') }}</h3>
            <p>We take pride in delivering high-quality Chinese name translations that respect both linguistic accuracy and cultural sensitivity. Whether you need to translate your name to Chinese or convert a Chinese name to English, our service ensures meaningful and appropriate results.</p>
          </div>
          
          <div class="feature">
            <div class="icon">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3>{{ $t('about.global.title') }}</h3>
            <p>Our Chinese name translation services are available to clients worldwide. We understand the importance of names across different cultures and provide solutions that bridge linguistic and cultural gaps, helping you communicate effectively in both Chinese and English contexts.</p>
          </div>
        </div>
        
        <div class="why-choose-us">
          <h2>Why Choose Our Chinese Name Translation Service</h2>
          <div class="reasons-grid">
            <div class="reason">
              <h3>Cultural Authenticity</h3>
              <p>We ensure your translated name respects Chinese naming traditions and cultural sensitivities, avoiding inappropriate characters or meanings.</p>
            </div>
            <div class="reason">
              <h3>Linguistic Precision</h3>
              <p>Our Chinese name translator tools consider proper pronunciation, tonal patterns, and character selection to create names that sound natural to native speakers.</p>
            </div>
            <div class="reason">
              <h3>Personalized Approach</h3>
              <p>Each name translation or generation is customized to reflect your identity, preferences, and personal significance, not just a generic conversion.</p>
            </div>
            <div class="reason">
              <h3>Comprehensive Service</h3>
              <p>From English to Chinese name translation to Chinese to English name conversion, we offer a complete range of naming services to meet your needs.</p>
            </div>
          </div>
        </div>
        
        <div class="team-section">
          <h2>{{ $t('about.team.title') }}</h2>
          <p>Our team combines expertise in Chinese linguistics, cultural studies, and translation to provide the most accurate and culturally appropriate Chinese name translations. We are passionate about helping people bridge cultural gaps through meaningful name translations.</p>
        </div>
        
        <div class="contact-section">
          <h2>{{ $t('about.contact.title') }}</h2>
          <p>Have questions about our Chinese name translation services? Need help translating your English name to Chinese or converting a Chinese name to English? Contact our team for personalized assistance with your Chinese name translation needs.</p>
          <a href="mailto:591124281yj@gmail.com" class="contact-button">{{ $t('about.contact.button') }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutUs'
}
</script>

<style scoped>
.about-page {
  padding: 20px 0 100px;
  min-height: 100vh;
  background-color: #f8f9fa;
}

.container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 20px;
}

.page-title {
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 40px;
  margin-top: 70px;
  text-align: center;
  position: relative;
}

.page-title::after {
  content: '';
  display: block;
  width: 60px;
  height: 3px;
  background-color: #e60012;
  margin: 15px auto 0;
}

.about-content {
  display: flex;
  flex-direction: column;
  gap: 60px;
}

.about-description {
  font-size: 1.2rem;
  line-height: 1.8;
  color: #555;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
}

.about-services {
  margin-top: 40px;
  text-align: left;
}

.about-services h2 {
  font-size: 1.8rem;
  color: #333;
  margin-bottom: 20px;
  text-align: center;
}

.services-list {
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.services-list li {
  background-color: white;
  border-radius: 10px;
  padding: 25px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
}

.services-list h3 {
  font-size: 1.3rem;
  color: #e60012;
  margin-bottom: 15px;
}

.services-list p {
  font-size: 1rem;
  line-height: 1.6;
  color: #555;
}

.about-features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
}

.feature {
  background-color: white;
  border-radius: 12px;
  padding: 30px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s;
}

.feature:hover {
  transform: translateY(-5px);
}

.feature .icon {
  width: 60px;
  height: 60px;
  background-color: rgba(230, 0, 18, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}

.feature .icon svg {
  width: 30px;
  height: 30px;
  color: #e60012;
}

.feature h3 {
  font-size: 1.5rem;
  margin-bottom: 15px;
  color: #333;
}

.feature p {
  color: #666;
  line-height: 1.6;
}

.why-choose-us {
  background-color: white;
  border-radius: 12px;
  padding: 40px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
}

.why-choose-us h2 {
  font-size: 1.8rem;
  color: #333;
  margin-bottom: 30px;
  text-align: center;
}

.reasons-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 25px;
}

.reason h3 {
  font-size: 1.3rem;
  color: #e60012;
  margin-bottom: 15px;
}

.reason p {
  font-size: 1rem;
  line-height: 1.6;
  color: #555;
}

.team-section, .contact-section {
  background-color: white;
  border-radius: 12px;
  padding: 40px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
}

.team-section h2, .contact-section h2 {
  font-size: 1.8rem;
  color: #333;
  margin-bottom: 20px;
}

.team-section p, .contact-section p {
  font-size: 1.1rem;
  line-height: 1.7;
  color: #555;
  margin-bottom: 20px;
}

.contact-button {
  display: inline-block;
  background-color: #e60012;
  color: white;
  font-weight: 600;
  padding: 12px 25px;
  border-radius: 6px;
  text-decoration: none;
  transition: background-color 0.3s;
}

.contact-button:hover {
  background-color: #d00010;
}

@media (max-width: 768px) {
  .about-page {
    padding: 70px 0;
  }
  
  .page-title {
    font-size: 2rem;
  }
  
  .services-list, .reasons-grid {
    grid-template-columns: 1fr;
  }
}
</style>