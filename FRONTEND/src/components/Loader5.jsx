import React, { useEffect } from 'react';
import 'ldrs/hatch'
import { gsap } from 'gsap';
import './Loader5.css'; // External CSS for styling
import 'ldrs/infinity';

const Loader5 = () => {
  useEffect(() => {
    // Initialize GSAP animations
    const Loader5Animation = gsap.timeline();

    // Cardio element zoom-in effect
    Loader5Animation
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
    Loader5Animation.to('.cardio-container', {
      scale: 0,
      delay: 3,
      duration: 1.5,
      ease: 'power3.inOut',
      onComplete: () => {
        document.querySelector('.Loader5').classList.add('hidden');
      },
    });

    // Transition to landing page
    gsap.fromTo(
      '.LandingPage',
      { scale: 1.5, opacity: 0 },
      { scale: 1, opacity: 1, duration: 2, ease: 'power3.inOut', delay: 5 }
    );
  }, []);

  return (
    <div className="Loader5">
      <div className="flex justify-center items-center h-screen cardio-container">

        <l-infinity
        size="400"
        stroke="4"
        stroke-length="0.15"
        bg-opacity="0.1"
        speed="1.3"
        color="white" 
        ></l-infinity>
      </div>

      {/* Developer-themed loading message */}
      <div className="loading-message absolute top-[50%] text-center text-white text-2xl md:text-4xl font-bold tracking-wider">
        <p>Make It Work, Make It Right, Make It Fast</p>
        <p className="text-sm md:text-lg text-aqua">Gamified DSA</p>
      </div>
    </div>
  );
};

export default Loader5;
