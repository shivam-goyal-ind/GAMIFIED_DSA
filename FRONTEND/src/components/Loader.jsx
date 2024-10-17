import React, { useEffect } from 'react';
import 'ldrs/cardio';
import { gsap } from 'gsap';
import './Loader.css'; // External CSS for styling

const Loader = () => { 
  useEffect(() => {
    const cardioContainer = document.querySelector('.cardio-container');
    const loaderElement = document.querySelector('.loader');
    const landingPageElement = document.querySelector('.LandingPage');

    if (cardioContainer && loaderElement) {
      const loaderAnimation = gsap.timeline();

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
  
        loaderAnimation.to(cardioContainer, {
          scale: 0,
          delay: 3,
          duration: 1.5,
          ease: 'power3.inOut',
          onComplete: () => {
            loaderElement.classList.add('hidden');
            // Ensure the LandingPage is present before animating
            if (landingPageElement) {
              gsap.fromTo(
                '.LandingPage',
                { scale: 1.5, opacity: 0 },
                { scale: 1, opacity: 1, duration: 2, ease: 'power3.inOut'}
              );
            }
          },
        });
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
