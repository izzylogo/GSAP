<template>
  <section class="hero">
    <header class="hero-header">
      <div class="logo">Videate</div>
      <nav class="nav-links">
        <a href="#">Brands</a>
        <a href="#">Creators</a>
        <a href="#">Pricing</a>
        <a href="#">Use Cases</a>
        <a href="#">Contact</a>
      </nav>
      <div class="auth-buttons">
        <button class="login">Log in</button>
        <button class="signup">Sign up</button>
      </div>
    </header>
    <div class="hero-content">
      <div class="cta-bar">Join over 50,000+ happy creators</div>
      <h1 class="hero-title">
        Engage Audiences<br />with Stunning Videos
        <div class="two-line"><img src="../assets/two-line.png" alt="two"></div>
        <div class="elevate-text"><img src="../assets/Elevate your brand.png" alt=""></div>
        <div class="hand-down-arrow"><img src="../assets/Hand-drawn-arrow.png" alt=""></div>
      </h1>
      
      <div class="hero-desc">Boost Your Brand with High-Impact Short Videos from our expert content creators. Our team is ready to propel your business forward</div>
            <div class="carousel-container">
        <div class="carousel-track" ref="carouselTrack">
          <!-- Original Slides -->
          <div v-for="(img, index) in images" :key="`original-${index}`" class="carousel-slide">
            <img :src="img.src" :alt="img.alt" class="carousel-image" />
          </div>
          <!-- Duplicated Slides for seamless loop -->
          <div v-for="(img, index) in images" :key="`duplicate-${index}`" class="carousel-slide">
            <img :src="img.src" :alt="img.alt" class="carousel-image" />
          </div>
        </div>
      </div>
      <div class="get-started-cover">
        <button class="get-started">Get Started</button>
      </div>
    </div>
  </section>
  
</template>

<script setup>
// Using placeholder images from Unsplash

import { ref, onMounted, onUnmounted, watch } from 'vue';
import { gsap } from 'gsap';
import { ScrambleTextPlugin } from 'gsap/ScrambleTextPlugin';

gsap.registerPlugin(ScrambleTextPlugin);


import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import img4 from '../assets/img4.jpg';
import img5 from '../assets/img5.jpg';
import img6 from '../assets/img6.jpg';
import img7 from '../assets/img7.jpg';

const images = [
  { src: img1, alt: 'Custom Image 1' },
  { src: img2, alt: 'Custom Image 2' },
  { src: img3, alt: 'Custom Image 3' },
  { src: img4, alt: 'Custom Image 4' },
  { src: img5, alt: 'Custom Image 5' },
  { src: img6, alt: 'Custom Image 6' },
  { src: img7, alt: 'Custom Image 7' },
];

const props = defineProps({
  isLoading: Boolean,
});

const carouselTrack = ref(null);
let animation;

const initAnimations = () => {
  // 1. Logo Pulse Animation (retained)
  gsap.fromTo('.logo', 
    { scale: 1 }, 
    { scale: 1.05, repeat: 4, yoyo: true, duration: 0.3, ease: 'power1.inOut' }
  );

  // 2. Staggered animation timeline (no scrambleText)
  const tl = gsap.timeline({ defaults: { duration: 0.5, ease: 'power3.out' } });

  tl.from(".nav-links a, .auth-buttons", {
      y: -30,
      opacity: 0,
      stagger: 0.2,
      delay: 0.1
    })
    .from(".cta-bar", {
      scale: 0.8,
      opacity: 0,
      duration: 0.4,
      ease: 'back.out(1.7)'
    }, "+=0.1")
    .from(".hero-title", {
      y: 40,
      opacity: 0,
      duration: 0.6
    }, "+=0.1")
    .from(".hero-desc", {
      y: 30,
      opacity: 0,
      duration: 0.7
    }, "+=0.1")
    .from(".hero-arrows", {
      scale: 0.5,
      opacity: 0,
      stagger: 0.2,
      ease: 'back.out(1.7)'
    }, "-=1.2");
};

const initCarousel = () => {
  if (!carouselTrack.value) return;
  const track = carouselTrack.value;
  const slides = gsap.utils.toArray('.carousel-slide');
  const singleSetWidth = track.scrollWidth / 2;

  if (animation) animation.kill();

  animation = gsap.to(track, {
    x: `-=${singleSetWidth}`,
    duration: 40,
    ease: 'none',
    repeat: -1,
    modifiers: {
      x: (x) => `${gsap.utils.wrap(-singleSetWidth, 0, parseFloat(x))}px`,
    },
    onUpdate: () => {
      const viewportCenter = window.innerWidth / 2;
      const maxRotation = 15; // Max rotation in degrees
      const influenceWidth = window.innerWidth / 2.5; // How far from the edge the effect starts

      slides.forEach(slide => {
        const slideCenter = slide.getBoundingClientRect().left + slide.offsetWidth / 2;
        const distanceFromCenter = slideCenter - viewportCenter;
        
        let rotation = 0;
        if (Math.abs(distanceFromCenter) < influenceWidth) {
          rotation = 0; // No rotation in the center zone
        } else {
          const distancePastInfluence = Math.abs(distanceFromCenter) - influenceWidth;
          const rotationFactor = Math.min(distancePastInfluence / (viewportCenter - influenceWidth), 1);
          rotation = (distanceFromCenter > 0 ? -maxRotation : maxRotation) * rotationFactor;
        }

        gsap.set(slide, {
          rotationY: rotation,
          transformOrigin: 'center center',
        });
      });
    },
  });

  const container = document.querySelector('.carousel-container');
  container.addEventListener('mouseenter', () => animation.pause());
  container.addEventListener('mouseleave', () => animation.play());
};

// Initialize on mount
watch(() => props.isLoading, (newValue, oldValue) => {
  // When loading is finished (goes from true to false)
  if (!newValue && oldValue) {
    // Wait for the next tick to ensure the DOM is ready for animations
    setTimeout(() => {
      initCarousel();
      initAnimations();
    }, 100);
  }
});

onMounted(() => {
  // Re-initialize the carousel on window resize for responsiveness
  window.addEventListener('resize', initCarousel);
});

// Clean up on unmount
onUnmounted(() => {
  if (animation) animation.kill();
  window.removeEventListener('resize', initCarousel);
});
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Zilla+Slab:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap');

:root {
  --primary-color: #6bdf6c;
  --text-color: #222;
  --bg-color: rgba(241, 248, 240, 1);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
  overflow-x: hidden;
}

/* Shake 1: Rotate Wiggle */
@keyframes shake-rotate {
  0% { transform: rotate(0deg); }
  25% { transform: rotate(2deg); }
  50% { transform: rotate(-2deg); }
  75% { transform: rotate(2deg); }
  100% { transform: rotate(0deg); }
}

/* Shake 2: Horizontal Shake */
@keyframes shake-horizontal {
  0% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  50% { transform: translateX(5px); }
  75% { transform: translateX(-5px); }
  100% { transform: translateX(0); }
}

/* Shake 3: Bounce Up and Down */
@keyframes shake-vertical {
  0% { transform: translateY(0); }
  20% { transform: translateY(-4px); }
  40% { transform: translateY(4px); }
  60% { transform: translateY(-4px); }
  80% { transform: translateY(4px); }
  100% { transform: translateY(0); }
}

/* Apply the animations */
.two-line img {
  animation: shake-rotate 1s infinite;
}

.elevate-text img {
  animation: shake-horizontal 1.2s infinite;
}

.hand-down-arrow img {
  animation: shake-vertical 1.5s infinite;
}

.hero {
  background: var(--bg-color);
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  padding: 1rem 0rem;
  position: relative;
  overflow: hidden;
}

.container {
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
  flex: 1;
  display: flex;
  flex-direction: column;
}
.hero-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
}
.logo {
  color: #6bdf6c;
  font-weight: bold;
  font-size: 1.2rem;
}
.nav-links {
  display: flex;
  gap: 32px;
}
.nav-links a {
  color: #222;
  text-decoration: none;
  font-weight: 500;
}
.auth-buttons {
  display: flex;
  gap: 12px;
}
.auth-buttons buttons{
  font-size: 20px;
  font-weight: 700;
}
.login {
  background: #fff;
  border: none;
  border-radius: 16px;
  padding: 8px 20px;
  font-weight: 500;
  color: black;
  cursor: pointer;
}
.signup {
  background: #222;
  color: #fff;
  border: none;
  border-radius: 16px;
  padding: 8px 20px;
  font-weight: 500;
  cursor: pointer;
}
.hero-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 24px;
  position: relative;
}
.cta-bar {
  background: #6bdf6c;
  color: #fff;
  padding: 10px 32px;
  border-radius: 24px;
  font-weight: 600;
  margin-bottom: 20px;
}
.hero-title {
  font-size: 5rem;
  text-align: center;
  font-weight: 700;
  margin: 1rem 0 1.5rem 0;
  font-family: 'Zilla Slab', serif;
  line-height: 1.1;
  color: var(--text-color);
  position: relative;
}

.get-started-cover{
  border: 1px dashed #6bdf6c;
  padding: 5px;
  border-radius: 35px;
  margin-top: 40px;
}

.two-line {
  position: absolute;
  top: 140px;
  left: -80px;
}

.elevate-text {
  position: absolute;
  top: 30px;
  right: -160px;
}

.hand-down-arrow {
  position: absolute;
    top: 40px;
    right: -80px
}

.hero-desc {
  color: #333;
  text-align: center;
  max-width: 550px;
  margin-bottom: 14px;
  font-size: 20px;
  font-weight: 600;
  font-family: Lato, 'san-serif';
}
.hero-arrows {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 24px;
  color: #222;
  font-size: 1rem;
  font-style: italic;
}
.carousel-container {
  position: relative;
  width: 100%;
  margin: 0.2rem 0;
  padding: 2rem 0;
  overflow: hidden;
  perspective: 1500px; /* Add perspective for 3D rotation */
}

.carousel-track {
  display: flex;
  gap: 1.5rem;
  width: max-content;
  position: relative;
  /* GSAP will animate the 'x' property */
}

.carousel-slide {
  flex: 0 0 auto;
  width: 280px;
  height: 380px;
  transition: transform 0.3s ease;
  transform-style: preserve-3d; /* Enable 3D transforms */
}

/* --- Responsive Design --- */

/* Large Tablet */
@media (max-width: 1200px) {
  .container {
    max-width: 98vw;
    padding: 0 1.5rem;
  }
  .carousel-slide {
    width: 220px;
    height: 300px;
  }
  .hero-title {
    font-size: 2.5rem;
  }
}

/* Tablet */
@media (max-width: 1024px) {
  .hero-section {
    padding: 0.5rem 0.5rem;
  }
  .container {
    padding: 0 1rem;
  }
  .hero-header {
    flex-direction: column;
    gap: 1rem;
    padding: 1rem 0.5rem;
    align-items: flex-start;
  }
  .hero-title {
    font-size: 2.1rem;
  }
  .hero-desc {
    font-size: 1rem;
  }
  .carousel-slide {
    width: 160px;
    height: 210px;
  }
  .carousel-container {
    padding: 2rem 0;
  }
}

/* Mobile */
@media (max-width: 768px) {
  .hero-section {
    padding: 0.2rem 0.2rem;
  }
  .container {
    padding: 0 0.3rem;
  }
  .nav-links {
    display: none; /* Hide nav links on mobile, consider a hamburger menu for a full app */
  }
  .hero-header {
    flex-direction: column;
    gap: 0.5rem;
    padding: 0.5rem 0.1rem;
    align-items: center;
  }
  .logo {
    font-size: 1.1rem;
  }
  .auth-buttons {
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 0.5rem;
  }
  .hero-title {
    font-size: 1.4rem;
    text-align: center;
    line-height: 1.18;
  }
  .cta-bar {
    font-size: 0.95rem;
    padding: 0.5rem 0.2rem;
    margin-bottom: 0.6rem;
  }
  .hero-desc {
    font-size: 0.95rem;
    margin-bottom: 14px;
  }
  .hero-arrows {
    display: none; /* Hide arrows on small screens to reduce clutter */
  }
  .carousel-container {
    margin: 1rem 0;
    padding: 1rem 0;
  }
  .carousel-slide {
    width: 120px;
    height: 160px;
    min-width: 100px;
    min-height: 120px;
  }
  .carousel-track {
    gap: 0.6rem;
  }
  .get-started {
    padding: 0.7rem 1.1rem;
    font-size: 0.85rem;
    margin-bottom: 0.5rem;
  }
}

/* Small Mobile */
@media (max-width: 480px) {
  .hero-section {
    padding: 0.1rem 0.1rem;
  }
  .container {
    padding: 0 0.1rem;
  }
  .hero-title {
    font-size: 1.05rem;
    line-height: 1.14;
  }
  .cta-bar {
    font-size: 0.8rem;
    padding: 0.3rem 0.1rem;
    margin-bottom: 0.4rem;
  }
  .hero-desc {
    font-size: 0.8rem;
    max-width: 98vw;
    margin-bottom: 8px;
  }
  .carousel-slide {
    width: 70px;
    height: 85px;
    min-width: 60px;
    min-height: 70px;
  }
  .get-started {
    padding: 0.6rem 0.7rem;
    font-size: 0.7rem;
  }
}


.carousel-slide:hover {
  transform: skewY(5deg) scale(1);
}

.carousel-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 25px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.carousel-slide:hover .carousel-image {
  transform: translateY(-10px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
}

@keyframes fadeIn {
  to {
    opacity: 1;
  }
}

.loading-message {
  text-align: center;
  padding: 2rem;
  color: #666;
  font-style: italic;
}

/* Reset button styles */
button {
  border: none;
  background: none;
  cursor: pointer;
  padding: 0;
  margin: 0;
}

.get-started {
  background: var(--primary-color);
  color: #fff;
  border: none;
  border-radius: 30px;
  padding: 1rem 3rem;
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 4px 20px rgba(107, 223, 108, 0.3);
  transition: all 0.3s ease;
  z-index: 10;
  position: relative;
  overflow: hidden;
}

.get-started:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 25px rgba(107, 223, 108, 0.4);
}

.get-started:active {
  transform: translateY(0);
}

/* Responsive adjustments */
@media (max-width: 1024px) {
  .hero {
    padding: 1.5rem 2rem;
  }
  
  .hero-title {
    font-size: 3.5rem;
  }
  
  .hero-img {
    width: 240px;
    height: 300px;
  }
}

@media (max-width: 768px) {
  .hero-header {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
  
  .nav-links {
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
  }
  
  .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-img {
    width: 200px;
    height: 250px;
  }
}
</style>
