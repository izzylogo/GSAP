<template>
  <div class="hero">
    <div ref="hero" class="hero-cover">
      <div class="hero-contain">
        <div class="left">
          <div class="left-top">
            <h1 ref="herotext" class="herotext"  ><span>your </span>smile <span></span> is </h1>
            <div ref="herotext" class="left-top-middle herotext">
              <h1>your</h1><div class="bar-image"></div>
            </div>
            <h1 ref="herotext" class="herotext">superpower</h1>
          </div>
        </div>
        <div class="right">
          <div class="right-top">
            <p>experience</p>
            <p>science</p>
          </div>
          <div class="right-middle">
            <p>All of our sciences, expertise, knowledge of oral health, and our partnership with the dental profession and organisations is in service to helping everyone to do the best for their smile and the best for the planet too.</p>
          </div>
          <div class="right-bottom">
            <div class="right-bottom-left">
              <button>shop now</button>
              <div class="icon-cover">
                <Icon icon="ph:arrow-up-light" width="14" height="14"  style="color: white" />
              </div>
            </div>
            <div class="right-bottom-right">   
              <p>Learn More</p>
            </div>
          </div>
        </div>
      </div>
      <div class="hero-bottom">
        <div class="first">
          <div class="first-detail-card">
            <svg class="card-top" width="20" height="20" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_310_2)">
                <path d="M30 0H0V30C0 13.431 13.431 0 30 0Z" fill="#edeef2"></path>
              </g><defs><clipPath id="clip0_310_2"><rect width="30" height="30" fill="white"></rect></clipPath></defs>
            </svg>
            <div class="coverage">
              <h5>What's behind <br> your smile?</h5>
              <div class="icon-cover">
                <Icon icon="ph:arrow-up-light" width="24" height="24"  style="color: white" />
              </div>
            </div>
            <svg class="card-right" width="20" height="20" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_310_2)">
                <path d="M30 0H0V30C0 13.431 13.431 0 30 0Z" fill="#edeef2"></path>
              </g><defs><clipPath id="clip0_310_2"><rect width="30" height="30" fill="white"></rect></clipPath></defs>
            </svg>
          </div>
        </div>
        <div class="second">
          <div class="second-top">
            <h3>get a deeper clean with 360</h3>
            <div class="icon-cover">
                <Icon icon="ph:arrow-up-light" width="15" height="15"  style="color: white" />
              </div>
          </div>
        </div>
        <div class="third">
          <div class="third-top">
            <h3>how can we help you today</h3>
            <p>What are your needs</p>
            <button>Choose One</button>
            <p>What are your needs</p>
            <button>Choose One</button>
          </div>
          <button id="lastbtn">get started</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { Icon } from '@iconify/vue';
  import {gsap} from 'gsap';
  export default {
    components: {Icon},
    mounted() {
      gsap.from(this.$refs.hero, {
        // display: 'none',
        // top: 250,
        // left: 340,
        // delay: 2.9,
        // duration: 1,
        // height: '93vh',
        // width: '105vw',
        // position: 'absolute'
      })

      gsap.from('.herotext', {
        y: 160,
        opacity: 0.2,
        ease: 'back.inOut',
        stagger: 0.15,
        delay: 2.9,
        duration: 1.1,
        opacity: 0, 
        // display: 'none'
      })
      gsap.from('.right-top p', {
        y: 160,
        opacity: 0.2,
        ease: 'back.inOut',
        stagger: 0.15,
        delay: 2.95,
        duration: 1.2,
        opacity: 0, 
        // display: 'none'
      })
      gsap.from('.right-middle p', {
        y: 160,
        opacity: 0.2,
        ease: 'back.inOut',
        stagger: 0.15,
        delay: 3.15,
        duration: 1.3,
        opacity: 0, 
        // display: 'none'
      })
      gsap.from('.right-bottom p', {
        y: 160,
        opacity: 0.2,
        ease: 'back.inOut',
        stagger: 0.15,
        delay: 3.25,
        duration: 1.3,
        opacity: 0, 
        // display: 'none'
      })
      gsap.from('.right-bottom-left', {
        y: 160,
        opacity: 0.2,
        ease: 'back.inOut',
        stagger: 0.15,
        delay: 3.35,
        duration: 1.36,
        opacity: 0, 
        // display: 'none'
      })
      gsap.from('.hero-bottom .first', {
        y: 160,
        opacity: 0.2,
        ease: 'back.inOut',
        stagger: 0.15,
        delay: 3.4,
        duration: 1.37,
        opacity: 0, 
        // display: 'none'
      })
      gsap.from('.hero-bottom .first-detail-card', {
        x: -160,
        stagger: 0.15,
        delay: 3.6,
        duration: 1.5,
      })
      gsap.from('.hero-bottom .second', {
        y: 160,
        ease: 'back.inOut',
        stagger: 0.15,
        delay: 3.5,
        duration: 1.5,
        opacity: 0, 
      })
      gsap.from('.hero-bottom .second-top', {
        y: 60,
        ease: 'back.inOut',
        stagger: 0.15,
        delay: 3.5,
        duration: 1.1,
        opacity: 0, 
      })
      gsap.from('.hero-bottom .third', {
        y: 60,
        ease: 'back.inOut',
        stagger: 0.15,
        delay: 3.6,
        duration: 1.1,
        opacity: 0, 
      })
      gsap.from('.hero-bottom .third-top h3', {
        y: 60,
        ease: 'back.inOut',
        stagger: 0.15,
        delay: 3.4,
        duration: 1.1,
        opacity: 0, 
      })
      gsap.from('.hero-bottom .third-top p', {
        y: 60,
        ease: 'back.inOut',
        stagger: 0.15,
        delay: 3.6,
        duration: 1.1,
        opacity: 0, 
      })
      gsap.from('.hero-bottom .third-top button', {
        y: 60,
        ease: 'back.inOut',
        stagger: 0.15,
        delay: 3.6,
        duration: 1.1,
        opacity: 0, 
      })
      
    }
  }
</script>

<style lang="scss" scoped>
@import '../styles/Hero.scss';
</style>