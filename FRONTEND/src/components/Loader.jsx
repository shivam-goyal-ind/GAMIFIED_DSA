import React, { useEffect } from 'react';
import 'ldrs/cardio';
import { gsap } from 'gsap';
import './Loader.css'; // External CSS for styling

const Loader = () => {
  useEffect(() => {
    const cardioContainer = document.querySelector('.cardio-container');
    const loaderElement = document.querySelector('.loader');
  
    if (cardioContainer && loaderElement) {
      // Initialize GSAP animations only if elements exist
      const loaderAnimation = gsap.timeline();
      
      // Cardio element zoom-in effect
      loaderAnimation
        .fromTo(
          cardioContainer, 
          { scale: 0 }, 
          { scale: 1, duration: 2, ease: 'power2.inOut' }
        )
        .fromTo(
          '.loading-message',
          { opacity: 0 },
          { opacity: 1, duration: 1.5, ease: 'power2.inOut' },
          '-=1'
        );
  
      // Zoom-out effect when transitioning to the landing page
      loaderAnimation.to(cardioContainer, {
        scale: 0,
        delay: 3,
        duration: 1.5,
        ease: 'power3.inOut',
        onComplete: () => {
          loaderElement.classList.add('hidden');
        },
      });
  
      // Transition to landing page
      // gsap.fromTo(
      //   '.LandingPage',
      //   { scale: 1.5, opacity: 0 },
      //   { scale: 1, opacity: 1, duration: 2, ease: 'power3.inOut', delay: 5 }
      // );
    }
  
  }, []);
  

  return (
    <div className="loader">
      <div className="flex justify-center items-center h-screen cardio-container">
        <l-cardio
          size="500"
          stroke="3"
          speed="1"
          color="white"
        ></l-cardio>
      </div>

      {/* Developer-themed loading message */}
      <div className="loading-message absolute top-[85%] text-center text-white text-2xl md:text-4xl font-bold tracking-wider">
        <p>Make It Work, Make It Right, Make It Fast</p>
        <p className="text-sm md:text-lg text-aqua">Gamified DSA</p>
      </div>
    </div>
  );
};

export default Loader;