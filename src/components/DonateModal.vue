<template>
  <div v-if="show" class="modal-overlay" @click="closeModal">
    <div class="modal-content" @click.stop>
      <button class="close-button" @click="closeModal">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
      
      <h2>☕ Support My Work</h2>
      <p class="subtitle">If you find this tool helpful, please consider supporting me on Ko-fi</p>
      
      <div class="qr-container">
        <div class="qr-section">
          <img 
            src="@/assets/images/qrcode.webp" 
            alt="Ko-fi QR Code" 
            class="qr-image"
          />
          <p class="qr-instruction">Scan the QR code to support on Ko-fi</p>
          <a 
            href="https://ko-fi.com/yangjerry666" 
            target="_blank"
            class="kofi-link"
          >
            Or visit Ko-fi page →
          </a>
        </div>
      </div>
      
      <div class="thank-you">
        Thank you for your support! ❤️
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DonateModal',
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    closeModal() {
      this.$emit('close')
    }
  },
  watch: {
    show(newVal) {
      if (newVal) {
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = ''
      }
    }
  },
  beforeUnmount() {
    document.body.style.overflow = ''
  }
}
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
  padding: 20px;
  backdrop-filter: blur(4px);
}

.modal-content {
  background: white;
  border-radius: 16px;
  padding: 40px 30px;
  max-width: 500px;
  width: 100%;
  position: relative;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  animation: slideUp 0.3s ease-out;
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.close-button {
  position: absolute;
  top: 15px;
  right: 15px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: background 0.2s;
}

.close-button:hover {
  background: #f0f0f0;
}

.close-button svg {
  stroke: #666;
}

h2 {
  text-align: center;
  color: #333;
  margin-bottom: 10px;
  font-size: 1.8rem;
}

.subtitle {
  text-align: center;
  color: #666;
  margin-bottom: 30px;
  font-size: 0.95rem;
}

.qr-container {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
}

.qr-section {
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.qr-image {
  max-width: 280px;
  width: 100%;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border: 3px solid #f0f0f0;
}

.qr-instruction {
  margin: 0;
  color: #666;
  font-size: 15px;
  font-weight: 500;
}

.kofi-link {
  display: inline-block;
  padding: 12px 30px;
  background: linear-gradient(135deg, #e60012 0%, #ff4757 100%);
  color: white;
  text-decoration: none;
  border-radius: 25px;
  font-weight: 600;
  transition: all 0.3s;
  box-shadow: 0 4px 12px rgba(230, 0, 18, 0.3);
  font-size: 14px;
}

.kofi-link:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(230, 0, 18, 0.4);
  color: white;
}

.thank-you {
  text-align: center;
  margin-top: 30px;
  padding-top: 20px;
  border-top: 1px solid #eee;
  color: #666;
  font-size: 15px;
}

@media (max-width: 640px) {
  .modal-content {
    padding: 30px 20px;
  }
  
  h2 {
    font-size: 1.5rem;
  }
  
  .qr-image {
    max-width: 240px;
  }
}
</style>
