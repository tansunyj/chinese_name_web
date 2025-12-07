<template>
  <a 
    href="https://ko-fi.com/J3J21AQ9FJ" 
    target="_blank" 
    rel="noopener noreferrer"
    class="kofi-button"
    title="Support us on Ko-fi"
  >
    <svg 
      viewBox="0 0 24 24" 
      xmlns="http://www.w3.org/2000/svg"
      class="kofi-icon"
    >
      <path d="M23.881 8.948c-.773-4.085-4.859-4.593-4.859-4.593H.723c-.604 0-.679.798-.679.798s-.082 7.324-.022 11.822c.164 2.424 2.586 2.672 2.586 2.672s8.267-.023 11.966-.049c2.438-.426 2.683-2.566 2.658-3.734 4.352.24 7.422-2.831 6.649-6.916zm-11.062 3.511c-1.246 1.453-4.011 3.976-4.011 3.976s-.121.119-.31.023c-.076-.057-.108-.09-.108-.09-.443-.441-3.368-3.049-4.034-3.954-.709-.965-1.041-2.7-.091-3.71.951-1.01 3.005-1.086 4.363.407 0 0 1.565-1.782 3.468-.963 1.904.82 1.832 3.011.723 4.311zm6.173.478c-.928.116-1.682.028-1.682.028V7.284h1.77s1.971.551 1.971 2.638c0 1.913-.985 2.667-2.059 3.015z"/>
    </svg>
    <span class="kofi-text">Buy me a Coffee</span>
  </a>
</template>

<script>
export default {
  name: 'KofiButton'
}
</script>

<style scoped>
.kofi-button {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  background: linear-gradient(135deg, #e60012 0%, #ff4757 100%);
  color: white;
  border-radius: 6px;
  text-decoration: none;
  font-size: 13px;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 2px 6px rgba(230, 0, 18, 0.3);
  white-space: nowrap;
}

.kofi-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(230, 0, 18, 0.4);
  color: white;
}

.kofi-icon {
  width: 18px;
  height: 18px;
  fill: white;
}

.kofi-text {
  line-height: 1;
}

/* 响应式 - 小屏幕时隐藏文字 */
@media (max-width: 640px) {
  .kofi-text {
    display: none;
  }
  
  .kofi-button {
    padding: 8px;
  }
  
  .kofi-icon {
    width: 20px;
    height: 20px;
  }
}
</style>
