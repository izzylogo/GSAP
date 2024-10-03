import React, { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Gradient from './components/Gradient'
import { FaChevronRight } from "react-icons/fa6";
// import './components/SplitText'


import {gsap} from 'gsap';
import { useGSAP } from '@gsap/react';
import Preloader from './components/Preloader';
import Hero from './components/Hero';

function App() {
  const [loading, setLoading] = useState(true);

  

  const leftTimeline = gsap.timeline({
    repeat: 0, repeatDelay: 0.2, delay: 4.2
  });

  const boxTimeline = gsap.timeline({
    repeat: 0, repeatDelay: 0.5, delay: 4.2
  })

  const boxTextTimeline = gsap.timeline({
    repeat: 0, repeatDelay: 0.7, delay: 4.2
  })

  const chooseTimeline = gsap.timeline({
    repeat: 0, repeatDelay: 0.1, delay: 4.2
  })

  const timeline = gsap.timeline({
    repeatDelay: 1, delay: 4.2
  });

  useGSAP(() => {
    leftTimeline.from('.hero-left-text h1', {
      y: 40,
      duration: 0.7,
      stagger: 0.4,
      opacity: 0,
      ease: "back.in",
    })

    leftTimeline.from('#desc p', {
      y: 40,
      duration: 0.8,
      stagger: 0.4,
      opacity: 0,
      ease: "sine.out",
    })

    leftTimeline.from('.swipe-cover', {
      x: -60,
      duration: 0.5,
      stagger: 0.4,
      opacity: 0,
      ease: "bounce.Out",
    })
  }, {})

  useGSAP(() => {
    boxTimeline.from('.boxes', {
      y: 40,
      duration: 0.9,
      stagger: 0.4,
      opacity: 0,
      ease: "back.in",
    })


    boxTextTimeline.from('.moveboxtext', {
      y: 40,
      duration: 0.9,
      stagger: 0.4,
      opacity: 0,
      ease: "back.in",
      delay: .3
    })

    boxTimeline.from('.box-button', {
      y: 40,
      duration: 0.9,
      stagger: 0.4,
      opacity: 0,
      ease: "back.in",
    })
  }, {})

  useGSAP(() => {
    chooseTimeline.fromTo('.choose', {
      y: 140,
      duration: 1.9,
      ease: "sine.in",
    }, {
      y: 0,
      duration: 1.9,
      ease: "sine.in",
    })

    chooseTimeline.from('.timeline-btn', {
      y: 80,
      duration: 1,
      ease: "back",
    })
  }, {})

  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000); // Adjust this delay as needed

    if(setLoading) {
      leftTimeline.pause
      boxTimeline.pause
      boxTextTimeline.pause
      chooseTimeline.pause
    } else{
      leftTimeline.play
      boxTimeline.play
      boxTextTimeline.play
      chooseTimeline.play
    }

    return () => clearTimeout(timer); // Clean up the timer on unmount
  }, []);


  // if (loading) {
  //   return <Preloader />;
  // }

  
  return (
    <>
      

      <div style={{opacity: loading ? 1 : 0}} className="preloading">
        <Preloader />
      </div>
      <div className='loadedSection'>
        <Navbar />
        <div className="hero-main">
          <div className="hero-bg">
            <div className="hero-content">
              <div className="hero-left">
                <div className="hero-left-text">
                  <h1>Revolutionize </h1><h1>Video Content </h1><h1>with AI</h1>
                  <div id='desc'><p>At AI Video Creations, we bring your ideas to life </p> <p> through the power of artificial intelligence.</p></div>
                </div>
                <div className="hero-left-swipe">
                  <button className="swipe-cover">
                    <div className="circle">
                      <FaChevronRight />
                    </div>
                    <p>Swipe to Get Started</p>
                  </button>
                </div>
              </div>
              <div className="hero-right">
                <div className="box1 boxes">
                  <div className="box-text">
                    <h4 className='moveboxtext'>Transform your content today</h4>
                    <p className='moveboxtext'>join the thousands of creators who are leveraging AI to produce captivating videos</p>
                  </div>
                  <div className="box-button">
                    <button>Join us</button>
                  </div>
                </div>
                <div className="box2 boxes">
                  <div className="box-text">
                    <h4 className='moveboxtext'>Contact Us</h4>
                    <p className='moveboxtext'>Have questions? Need assistance? our support team is here to help</p>
                  </div>
                  <div className="box-button">
                    <button>Support</button>
                  </div>
                </div>
              </div>
            </div>

    
            <div className="choose">
              <svg class="choose-one" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_310_2)">
                      <path d="M30 0H0V30C0 13.431 13.431 0 30 0Z" fill="#040404"></path>
                  </g><defs><clipPath id="clip0_310_2"><rect width="30" height="30" fill="white"></rect></clipPath></defs>
              </svg>
              <button className='timeline-btn'>choose your style</button>
                <svg class="choose-two" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_310_2)">
                        <path d="M30 0H0V30C0 13.431 13.431 0 30 0Z" fill="#040404"></path>
                    </g><defs><clipPath id="clip0_310_2"><rect width="30" height="30" fill="white"></rect></clipPath></defs>
                </svg>
            </div>
          </div>

        </div>
        
      </div>
    </>
  )
}

export default App
