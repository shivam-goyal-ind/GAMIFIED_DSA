import React, { useEffect } from 'react';
import 'ldrs/grid';
import { gsap } from 'gsap';
import './Loader2.css'; // External CSS for styling

const Loader2 = () => {
  useEffect(() => {
    // Wait for the DOM to be fully ready
    const loaderElement = document.querySelector('.Loader2');
    const landingPageElement = document.querySelector('.LandingPage');

    if (loaderElement) {
      // Initialize GSAP animations
      const Loader2Animation = gsap.timeline();

      // Cardio element zoom-in effect
      Loader2Animation
        .fromTo(
          '.cardio-container', 
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
      Loader2Animation.to('.cardio-container', {
        scale: 0,
        delay: 3,
        duration: 1.5,
        ease: 'power3.inOut',
        onComplete: () => {
          document.querySelector('.Loader2').classList.add('hidden');
        },
      });
    }

    // Ensure landing page exists before animating it
    if (landingPageElement) {
      gsap.fromTo(
        '.LandingPage',
        { scale: 1.5, opacity: 0 },
        { scale: 1, opacity: 1, duration: 2, ease: 'power3.inOut', delay: 5 }
      );
    }
  }, []);

  return (
    <div className="Loader2">
      <div className="flex justify-center items-center h-screen cardio-container">
        <l-grid
          size="500"
          speed="2.5"
          color="white" 
        ></l-grid>
      </div>

      {/* Developer-themed loading message */}
      <div className="loading-message absolute top-[80%] text-center text-white text-2xl md:text-4xl font-bold tracking-wider">
        <p>Make It Work, Make It Right, Make It Fast</p>
        <p className="text-sm md:text-lg text-aqua">Gamified DSA</p>
      </div>
    </div>
  );
};

export default Loader2;
