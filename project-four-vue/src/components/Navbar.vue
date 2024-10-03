<template>
    <div class="nav">
        <div ref="logo" class="logo-cover">
            <img ref="logoImg" src="../assets/colgateLogo.png" alt="colgatelogo">
        </div>
        <div class="nav-contain">
            <div class="empty"></div>
            <div class="middle">
                <ul>
                    <li>
                        <Icon icon="ant-design:home-filled" width="21" height="21"  style="color: #f51923" />
                        <p>Home</p>
                    </li>
                    <li>Product</li>
                    <li>Oral Health</li>
                    <li>Mission</li>
                </ul>
            </div>
            <div class="left">
                <div class="left-contain">
                    <Icon icon="carbon:search" width="16" height="16"  style="color: black" />
                    <div class="face">
                        <Icon icon="iconoir:profile-circle" width="20" height="20"  style="color: black" />
                        <div class="face-text">
                            <p>Welcome</p>
                            <h6>Izzy</h6>
                        </div>
                        <Icon icon="solar:alt-arrow-down-linear" width="12" height="12"  style="color: black" />
                    </div>
                    <Icon icon="heroicons-outline:menu-alt-2" width="24" height="24"  style="color: black" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {gsap} from 'gsap';
    import { Icon } from '@iconify/vue';
    export default {
        name: 'NavbarComp',
        components: {Icon},
        mounted() {
            // GSAP animation to move the box when the component is mounted
            gsap.from(this.$refs.logo, { 
                
                top: -0,
                left: -40,
                delay: 1.5,
                duration: 2,
                height: '95vh',
                width: '105vw',
                
            });

            gsap.to(this.$refs.logoImg, {
                delay: 1.9,
                duration: 2,
                width: 50
            })
            gsap.from('.middle ul li', {
                y: 60,
                ease: 'back.inOut',
                stagger: 0.15,
                delay: 3.1,
                duration: 0.9,
                opacity: 0, 
            })
            gsap.from('.left-contain svg', {
                y: 60,
                ease: 'back.inOut',
                stagger: 0.15,
                delay: 3.1,
                duration: 0.9,
                opacity: 0, 
            })
            gsap.from('.left-contain face svg', {
                y: 60,
                ease: 'back.inOut',
                stagger: 0.15,
                delay: 3.1,
                duration: 0.9,
                opacity: 0, 
            })
            gsap.from('.face-text', {
                y: 60,
                ease: 'back.inOut',
                stagger: 0.15,
                delay: 3.1,
                duration: 0.9,
                opacity: 0, 
            })
        }

    }

</script>

<style lang="scss" scoped>
@import '../styles/Navbar.scss';
</style>