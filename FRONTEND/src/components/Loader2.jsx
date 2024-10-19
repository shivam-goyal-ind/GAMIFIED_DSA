import React, { useEffect } from 'react';
import 'ldrs/grid';
import { gsap } from 'gsap';
import './Loader2.css'; // External CSS for styling
import './LandingPage.jsx';

const Loader2 = () => {
  useEffect(() => {
    const loaderElement = document.querySelector('.Loader2');
    const landingPageElement = document.querySelector('.LandingPage');
    const cardioContainer = document.querySelector('.cardio-container');

    // Set initial visibility of elements to prevent the "GSAP target not found" issue
    gsap.set(
      [".cardio-container", ".loading-message", ".LandingPage"],
      { visibility: "visible" }
    );

    if (loaderElement && cardioContainer) {
      const Loader2Animation = gsap.timeline();

      Loader2Animation
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
        )
        .to(cardioContainer, {
          scale: 0,
          delay: 3,
          duration: 1.5,
          ease: 'power3.inOut',
          onComplete: () => {
            if (loaderElement) {
              loaderElement.classList.add('hidden');
            }
          },
        });
    }

    if (landingPageElement) {
      gsap.fromTo(
        landingPageElement,
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
