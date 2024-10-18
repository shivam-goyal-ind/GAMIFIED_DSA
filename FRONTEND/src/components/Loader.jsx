import React, { useEffect, useRef } from 'react';
import 'ldrs/cardio';
import { gsap } from 'gsap';
import './Loader.css'; // External CSS for styling

const Loader = () => { 
  const loaderRef = useRef(null);
  const landingPageRef = useRef(null);
  const cardioContainerRef = useRef(null);

  useEffect(() => {
    const loaderElement = loaderRef.current;
    const landingPageElement = landingPageRef.current;
    const cardioContainer = cardioContainerRef.current;

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

            // Check if the landing page element exists before animating
            if (landingPageElement) {
              gsap.fromTo(
                landingPageElement,
                { scale: 1.5, opacity: 0 },
                { scale: 1, opacity: 1, duration: 2, ease: 'power3.inOut' }
              );
            }
          },
        });
    }
  }, []);

  return (
    <div ref={loaderRef} className="loader">
      <div ref={cardioContainerRef} className="flex justify-center items-center h-screen cardio-container">
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

      {/* Landing Page */}
      <div ref={landingPageRef} className="LandingPage">
        {/* Your landing page content */}
      </div>
    </div>
  );
};

export default Loader;
