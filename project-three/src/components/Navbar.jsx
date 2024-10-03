import React from 'react'
import './Navbar.css'

import {gsap} from 'gsap';
import { useGSAP } from '@gsap/react';


const Navbar = () => {

    const timeline = gsap.timeline({
        repeat: 0, repeatDelay: 0.5, delay: 4.2
    });

    useGSAP(() => {
        gsap.from('.left', {
            x: -200,
            // opacity: 0.01,
            delay: 4.1,
            ease: 'sine.inOut',
            duration: 1.4
        })
        gsap.from('.right', {
            x: 200,
            // opacity: 0.01,
            delay: 4.1,
            ease: 'sine.inOut',
            duration: 1.4
        })
        timeline.from('.left h2', {
            x: -150,
            opacity: 0.01,
            delay: 1,
            ease: 'sine.inOut',
            duration: 1
        })
        gsap.from('.right .login-cover', {
            x: 150,
            opacity: 0.01,
            delay: 4.5,
            ease: 'sine.inOut',
            duration: 1
        })
        timeline.from('.left .theme', {
            x: -150,
            opacity: 0.01,
            // delay: 0.5,
            ease: 'sine.inOut',
            duration: 1
        })
    }, {})



  return (
    <div className='navbar'>
        <div className="navbar-contain">
            <div className="left">
                <h2>AIVISION <br /> STUDIO</h2>
                <div className="theme">
                    <p>Dark</p> 
                </div>
                <svg class="navbar-svg-one" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_310_2)">
                        <path d="M30 0H0V30C0 13.431 13.431 0 30 0Z" fill="#040404"></path>
                    </g><defs><clipPath id="clip0_310_2"><rect width="30" height="30" fill="white"></rect></clipPath></defs>
                </svg>
                <svg class="navbar-svg-two" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_310_2)">
                        <path d="M30 0H0V30C0 13.431 13.431 0 30 0Z" fill="#040404"></path>
                    </g><defs><clipPath id="clip0_310_2"><rect width="30" height="30" fill="white"></rect></clipPath></defs>
                </svg>
            </div>
            <div className="right">
                <div className="login-cover">
                    <p className='loginText'>Log In</p>
                    <p className='loginText'>Sign Up</p>
                </div>
                <svg class="navbar-svg-three" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_310_2)">
                        <path d="M30 0H0V30C0 13.431 13.431 0 30 0Z" fill="#040404"></path>
                    </g><defs><clipPath id="clip0_310_2"><rect width="30" height="30" fill="white"></rect></clipPath></defs>
                </svg>
                <svg class="navbar-svg-four" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_310_2)">
                        <path d="M30 0H0V30C0 13.431 13.431 0 30 0Z" fill="#040404"></path>
                    </g><defs><clipPath id="clip0_310_2"><rect width="30" height="30" fill="white"></rect></clipPath></defs>
                </svg>
            </div>
        </div>
    </div>
  )
}

export default Navbar