<script setup>
import { ref, onMounted } from 'vue';
import Preloader from './components/Preloader.vue';
import HeroSection from './components/HeroSection.vue';
import HelloWorld from './components/HelloWorld.vue'

const isLoading = ref(true);

onMounted(() => {
  // Simulate a loading delay for assets and animations
  setTimeout(() => {
    isLoading.value = false;
  }, 3000); // Set to 3 seconds as requested
});
</script>

<template>
  <transition name="fade">
    <Preloader v-if="isLoading" />
  </transition>
  <div v-show="!isLoading">
    <HeroSection :is-loading="isLoading" />
  </div>
</template>

<style>
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-leave-to {
  opacity: 0;
}
</style>
