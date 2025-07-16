<template>
  <div class="preloader-overlay">
    <h1 class="preloader-logo">Videate</h1>
  </div>
</template>

<style scoped>
.preloader-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #f9f9f9;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.preloader-logo {
  font-size: 3rem;
  font-weight: bold;
  color: #6bdf6c; /* Match the main logo color */
  animation: pulse 1s infinite ease-in-out;
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.8;
  }
}
</style>
