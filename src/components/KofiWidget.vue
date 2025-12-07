<template>
  <a 
    href="https://ko-fi.com/J3J21AQ9FJ" 
    target="_blank" 
    rel="noopener noreferrer"
    class="kofi-inline-button"
    title="Support me on Ko-fi"
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
  name: 'KofiWidget'
}
</script>

<style scoped>
.kofi-inline-button {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 10px;
  margin-left: 10px;
  background: linear-gradient(135deg, #e60012 0%, #ff4757 100%);
  color: #fff;
  border-radius: 999px;
  text-decoration: none;
  font-size: 12px;
  font-weight: 600;
  box-shadow: 0 2px 6px rgba(230, 0, 18, 0.3);
  transition: all 0.2s ease;
}

.kofi-inline-button:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 10px rgba(230, 0, 18, 0.45);
  color: #fff;
}

.kofi-icon {
  width: 16px;
  height: 16px;
  fill: currentColor;
}

.kofi-text {
  white-space: nowrap;
}

@media (max-width: 768px) {
  .kofi-inline-button {
    padding: 4px 8px;
    font-size: 11px;
  }
}
</style>
