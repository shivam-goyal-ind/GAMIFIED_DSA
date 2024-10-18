import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './Loader.css'; // Shared external CSS for styling

const Loader = ({ type = 'cardio' }) => {
  const loaderRef = useRef(null);
  const landingPageRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const loaderElement = loaderRef.current;
    const landingPageElement = landingPageRef.current;
    const container = containerRef.current;

    if (container && loaderElement) {
      const loaderAnimation = gsap.timeline();

      loaderAnimation
        .fromTo(container, { scale: 0 }, { scale: 1, duration: 2, ease: 'power2.inOut' })
        .fromTo('.loading-message', { opacity: 0 }, { opacity: 1, duration: 1.5, ease: 'power2.inOut' }, '-=1')
        .to(container, {
          scale: 0,
          delay: 3,
          duration: 1.5,
          ease: 'power3.inOut',
          onComplete: () => {
            loaderElement.classList.add('hidden');
            if (landingPageElement) {
              gsap.fromTo(landingPageElement, { scale: 1.5, opacity: 0 }, { scale: 1, opacity: 1, duration: 2, ease: 'power3.inOut' });
            }
          },
        });
    }
  }, []);

  return (
    <div ref={loaderRef} className="loader">
      <div ref={containerRef} className="flex justify-center items-center h-screen container">
        {type === 'cardio' ? (
          <l-cardio size="500" stroke="3" speed="1" color="white"></l-cardio>
        ) : (
          <l-grid size="500" speed="2.5" color="white"></l-grid>
        )}
      </div>

      <div className="loading-message absolute top-[80%] text-center text-white text-2xl md:text-4xl font-bold tracking-wider">
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
