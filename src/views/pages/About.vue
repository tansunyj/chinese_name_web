<template>
  <div class="about-page">
    <div class="container">
      <h1 class="page-title">About Us</h1>
      
      <section class="about-section">
        <h2>Welcome to ChineseName.us</h2>
        <div class="about-content">
          <div class="about-image">
            <img src="https://placehold.co/600x400/e60012/ffffff?text=Chinese+Name" alt="Chinese Name" />
          </div>
          <div class="about-text">
            <p>
              ChineseName.us was founded with a passion for bridging cultural gaps through the art of naming. 
              We believe that names are not just identifiers; they carry cultural heritage, personal identity, 
              and meaningful connections across languages and traditions.
            </p>
            <p>
              Our platform specializes in creating meaningful Chinese names that honor traditional naming principles 
              while connecting with international sensibilities. We combine deep linguistic expertise with modern 
              technology to offer personalized naming services that resonate across cultures.
            </p>
          </div>
        </div>
      </section>
      
      <section class="mission-section">
        <h2>Our Mission</h2>
        <div class="mission-content">
          <div class="mission-item">
            <div class="icon">
              <i class="fas fa-bridge"></i>
            </div>
            <h3>Cultural Bridge</h3>
            <p>
              To create a bridge between Eastern and Western naming traditions, 
              helping people connect across cultural boundaries through meaningful names.
            </p>
          </div>
          
          <div class="mission-item">
            <div class="icon">
              <i class="fas fa-lightbulb"></i>
            </div>
            <h3>Educational Resource</h3>
            <p>
              To educate about the rich traditions and cultural significance of Chinese naming practices, 
              making this knowledge accessible to a global audience.
            </p>
          </div>
          
          <div class="mission-item">
            <div class="icon">
              <i class="fas fa-hands-helping"></i>
            </div>
            <h3>Personalized Service</h3>
            <p>
              To provide thoughtful, culturally sensitive name translation and creation services 
              that honor both traditional principles and individual preferences.
            </p>
          </div>
        </div>
      </section>
      
      <section class="founder-section">
        <h2>About the Founder</h2>
        <div class="founder-content">
          <div class="founder-image">
            <img src="https://placehold.co/400x500/e60012/ffffff?text=Founder" alt="Founder" />
          </div>
          <div class="founder-bio">
            <p>
              As the creator of ChineseName.us, I've dedicated myself to building a platform that combines 
              my passion for Chinese language and culture with modern technology. With a background in 
              linguistics and software development, I've created this service to help people discover 
              meaningful Chinese names that resonate with their identity.
            </p>
            <p>
              My journey began when friends from different cultural backgrounds asked me to help them 
              choose Chinese names. I realized there was a need for a service that could bridge this 
              cultural gap while respecting the depth and nuance of Chinese naming traditions.
            </p>
            <p>
              ChineseName.us is the result of years of research into naming practices, character meanings, 
              and the artistic principles that guide traditional Chinese name selection. I'm proud to share 
              this knowledge and offer this service to people around the world.
            </p>
          </div>
        </div>
      </section>
      
      <section class="values-section">
        <h2>Our Core Values</h2>
        <div class="values-grid">
          <div class="value-card">
            <h3>Cultural Respect</h3>
            <p>We approach naming with deep respect for Chinese language and culture, ensuring authenticity in all we do.</p>
          </div>
          
          <div class="value-card">
            <h3>Personalization</h3>
            <p>Every name we create or translate is tailored to the individual's identity, preferences, and cultural context.</p>
          </div>
          
          <div class="value-card">
            <h3>Educational Approach</h3>
            <p>We believe in sharing knowledge about the meaning and cultural context behind each name we create.</p>
          </div>
          
          <div class="value-card">
            <h3>Accessibility</h3>
            <p>We strive to make Chinese naming traditions accessible to everyone, regardless of their cultural background.</p>
          </div>
        </div>
      </section>
      
      <section class="contact-section">
        <h2>Connect With Us</h2>
        <p class="contact-text">
          We're always happy to hear from users and answer questions about our services or Chinese naming traditions.
          Feel free to reach out to us at <a href="mailto:591124281yj@gmail.com">591124281yj@gmail.com</a>.
        </p>
        <div class="social-links">
          <a href="https://x.com/yangjerry2025" target="_blank" class="social-link">Twitter</a>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutPage',
  mounted() {
    window.scrollTo(0, 0);
  }
}
</script>

<style scoped>
.about-page {
  padding: 80px 0 60px;
  background-color: #f8f9fa;
}

.container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 20px;
}

.page-title {
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 40px;
  color: #333;
  position: relative;
}

.page-title:after {
  content: '';
  position: absolute;
  bottom: -15px;
  left: 50%;
  width: 80px;
  height: 3px;
  background-color: #e60012;
  transform: translateX(-50%);
}

section {
  margin-bottom: 60px;
  background-color: white;
  border-radius: 8px;
  padding: 40px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

section h2 {
  font-size: 1.8rem;
  color: #333;
  margin-bottom: 30px;
  position: relative;
  padding-bottom: 15px;
}

section h2:after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 60px;
  height: 3px;
  background-color: #e60012;
}

.about-content, .founder-content {
  display: flex;
  gap: 40px;
  align-items: center;
}

.about-image, .founder-image {
  flex: 0 0 350px;
}

.about-image img, .founder-image img {
  width: 100%;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.about-text, .founder-bio {
  flex: 1;
}

.about-text p, .founder-bio p {
  margin-bottom: 20px;
  line-height: 1.8;
  font-size: 1.05rem;
  color: #555;
}

.mission-content {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
}

.mission-item {
  text-align: center;
  padding: 25px 15px;
  border-radius: 8px;
  background-color: #f9f9f9;
  transition: transform 0.3s, box-shadow 0.3s;
}

.mission-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
}

.icon {
  width: 70px;
  height: 70px;
  line-height: 70px;
  border-radius: 50%;
  background-color: #e6001215;
  color: #e60012;
  font-size: 26px;
  margin: 0 auto 20px;
}

.mission-item h3 {
  margin-bottom: 15px;
  color: #333;
}

.mission-item p {
  color: #666;
  line-height: 1.6;
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 25px;
}

.value-card {
  padding: 25px;
  background-color: #f9f9f9;
  border-radius: 8px;
  border-left: 3px solid #e60012;
  transition: transform 0.3s;
}

.value-card:hover {
  transform: translateY(-5px);
}

.value-card h3 {
  margin-bottom: 15px;
  color: #333;
}

.value-card p {
  color: #666;
  line-height: 1.6;
}

.contact-section {
  text-align: center;
}

.contact-text {
  max-width: 700px;
  margin: 0 auto 30px;
  font-size: 1.1rem;
  line-height: 1.8;
  color: #555;
}

.contact-text a {
  color: #e60012;
  text-decoration: none;
  font-weight: 600;
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.social-link {
  display: inline-block;
  padding: 10px 20px;
  background-color: #f1f1f1;
  color: #333;
  border-radius: 4px;
  text-decoration: none;
  transition: all 0.3s;
}

.social-link:hover {
  background-color: #e60012;
  color: white;
}

@media (max-width: 768px) {
  .about-content, .founder-content {
    flex-direction: column;
  }
  
  .about-image, .founder-image {
    flex: 0 0 100%;
    margin-bottom: 30px;
  }
  
  .mission-content {
    grid-template-columns: 1fr;
  }
  
  .values-grid {
    grid-template-columns: 1fr;
  }
  
  section {
    padding: 30px 20px;
  }
}
</style> 