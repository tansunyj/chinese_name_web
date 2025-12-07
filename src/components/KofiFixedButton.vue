<template>
  <div>
    <button
      class="kofi-fixed-button"
      @click="showModal = true"
      title="Support me"
    >
      <svg 
        viewBox="0 0 24 24" 
        xmlns="http://www.w3.org/2000/svg"
        class="kofi-icon"
      >
        <path d="M23.881 8.948c-.773-4.085-4.859-4.593-4.859-4.593H.723c-.604 0-.679.798-.679.798s-.082 7.324-.022 11.822c.164 2.424 2.586 2.672 2.586 2.672s8.267-.023 11.966-.049c2.438-.426 2.683-2.566 2.658-3.734 4.352.24 7.422-2.831 6.649-6.916zm-11.062 3.511c-1.246 1.453-4.011 3.976-4.011 3.976s-.121.119-.31.023c-.076-.057-.108-.09-.108-.09-.443-.441-3.368-3.049-4.034-3.954-.709-.965-1.041-2.7-.091-3.71.951-1.01 3.005-1.086 4.363.407 0 0 1.565-1.782 3.468-.963 1.904.82 1.832 3.011.723 4.311zm6.173.478c-.928.116-1.682.028-1.682.028V7.284h1.77s1.971.551 1.971 2.638c0 1.913-.985 2.667-2.059 3.015z"/>
      </svg>
      <span class="button-text">Support me</span>
    </button>
    
    <DonateModal :show="showModal" @close="showModal = false" />
  </div>
</template>

<script>
import DonateModal from './DonateModal.vue'

export default {
  name: 'KofiFixedButton',
  components: {
    DonateModal
  },
  data() {
    return {
      showModal: false
    }
  }
}
</script>

<style scoped>
.kofi-fixed-button {
  position: fixed;
  bottom: 20px;
  left: 20px;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 20px;
  background: linear-gradient(135deg, #e60012 0%, #ff4757 100%);
  color: white;
  border: none;
  border-radius: 25px;
  font-weight: 600;
  font-size: 14px;
  box-shadow: 0 4px 12px rgba(230, 0, 18, 0.3);
  transition: all 0.3s ease;
  z-index: 9999;
  cursor: pointer;
  font-family: inherit;
}

.kofi-fixed-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 16px rgba(230, 0, 18, 0.45);
  background: linear-gradient(135deg, #ff4757 0%, #ff6b7a 100%);
}

.kofi-icon {
  width: 20px;
  height: 20px;
  fill: white;
  flex-shrink: 0;
}

.button-text {
  line-height: 1;
  white-space: nowrap;
}

/* 响应式：小屏幕时只显示图标 */
@media (max-width: 640px) {
  .button-text {
    display: none;
  }
  
  .kofi-fixed-button {
    padding: 12px;
    border-radius: 50%;
    width: 48px;
    height: 48px;
    justify-content: center;
  }
  
  .kofi-icon {
    width: 24px;
    height: 24px;
  }
}

/* 打印时隐藏 */
@media print {
  .kofi-fixed-button {
    display: none;
  }
}
</style>
