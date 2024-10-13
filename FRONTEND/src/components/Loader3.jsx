import React, { useEffect } from 'react';
import 'ldrs/hatch'
import { gsap } from 'gsap';
import './Loader3.css'; // External CSS for styling

const Loader3 = () => {
  useEffect(() => {
    // Initialize GSAP animations
    const Loader3Animation = gsap.timeline();

    // Cardio element zoom-in effect
    Loader3Animation
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
    Loader3Animation.to('.cardio-container', {
      scale: 0,
      delay: 3,
      duration: 1.5,
      ease: 'power3.inOut',
      onComplete: () => {
        document.querySelector('.Loader3').classList.add('hidden');
      },
    });

    // Transition to landing page
    gsap.fromTo(
      '.landing-page',
      { scale: 1.5, opacity: 0 },
      { scale: 1, opacity: 1, duration: 2, ease: 'power3.inOut', delay: 5 }
    );
  }, []);

  return (
    <div className="Loader3">
      <div className="flex justify-center items-center h-screen cardio-container">

        <l-hatch
        size="200"
        stroke="4"
        speed="3.5"
        color="white" 
        ></l-hatch>
      </div>

      {/* Developer-themed loading message */}
      <div className="loading-message absolute top-[80%] text-center text-white text-2xl md:text-4xl font-bold tracking-wider">
        <p>Make It Work, Make It Right, Make It Fast</p>
        <p className="text-sm md:text-lg text-aqua">Gamified DSA</p>
      </div>
    </div>
  );
};

export default Loader3;
