import React, { useEffect } from 'react';
import 'ldrs/cardio';
import './Loader.css'; // External CSS for styling

const Loader = () => {
  useEffect(() => {
    const loaderElement = document.querySelector('.loader');

    // Hide the loader after animation completes (total 4.5s)
    setTimeout(() => {
      if (loaderElement) {
        loaderElement.classList.add('hidden');
      }
    }, 4500);
  }, []);

  return (
    <div className="loader">
      <div className="flex justify-center items-center h-screen cardio-container">
        <l-cardio size="500" stroke="3" speed="1" color="white"></l-cardio>
      </div>

      {/* Developer-themed loading message */}
      <div className="loading-message absolute top-[50%] text-center text-black text-2xl md:text-4xl font-bold tracking-wider">
        <p>Make It Work, Make It Right, Make It Fast</p>
        <p className="text-sm md:text-lg text-aqua">Gamified DSA</p>
      </div>
    </div>
  );
};

export default Loader;
