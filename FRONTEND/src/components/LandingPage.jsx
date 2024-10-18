import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Marquee from './Marquee';
import About from './About';
import Eyes from './Eyes';
import Featured from './Featured';
import Footer from './Footer';
import React, { useState } from 'react';
import { TbCricket } from 'react-icons/tb';
import Loader2 from './Loader2';
import GameSelection from './GameSelection';

function LandingPage() {
  const [showLoader2, setShowLoader2] = useState(false);
  const [showGameSelection, setShowGameSelection] = useState(false);

  const handlePlayClick = () => {
    setShowLoader2(true);
    console.log('Loader2 shown');
    setTimeout(() => {
      setShowLoader2(false);
      setShowGameSelection(true);
      console.log('GameSelection shown');
    }, 3000);
  };

  // Function to handle smooth scrolling to sections
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // If the Loader2 is active, display it
  if (showLoader2) {
    return <Loader type="grid"/>;
  }

  // If the GameSelection is active, display it
  if (showGameSelection) {
    return <GameSelection />;
  }

  return (
    <div id="top-section"> {/* Add ID for top of the page */}
      {/* Navbar with scrollToSection passed as prop */}
      <Navbar scrollToSection={scrollToSection} />

      {/* Main section with animated text */}
      <div data-scroll data-scroll-section data-scroll-speed="-.3" className="w-full h-screen bg-zinc-900 pt-2">
        <div className="textstructure mt-40 px-20">
          {['we create', 'future', 'developers'].map((item, index) => {
            return (
              <div className="masker" key={index}>
                <div className="w-fit flex items-center">
                  <div>
                    {index === 1 && (
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: '8vw' }}
                        transition={{ ease: [0.68, -0.6, 0.32, 1.6], duration: 1 }}
                        className="mr-5 w-[8vw] rounded-md h-[5.7vw] relative bg-blue-500"
                      />
                    )}
                  </div>
                  <h1 className="uppercase text-[8vw] leading-none font-['mono'] tracking-tighter font-semibold">
                    {item}
                  </h1>
                </div>
              </div>
            );
          })}
        </div>

        {/* Play button and icon */}
        <div className="border-t-2 border-zinc-600 mt-12 flex justify-between items-center py-5 px-20">
          {['For The DEVELOPERS', 'From The DEVELOPERS'].map((item, index) => (
            <p className="text-[2vw] font-light tracking-tight leading-none" key={index}>
              {item}
            </p>
          ))}

          <div className="start flex items-center gap-5">
            {/* Play button */}
            <div
              onClick={handlePlayClick} // Trigger Loader2 animation and GameSelection
              className="px-5 py-2 border-[2px] cursor-pointer rounded-full font-light border-zinc-500 text-[2vw]"
            >
              PLAY
            </div>

            {/* Cricket icon */}
            <div className="w-10 h-10 flex items-center justify-center rounded-full border-[2px] border-zinc-400 text-[2vw]">
              <TbCricket />
            </div>
          </div>
        </div>
      </div>

      {/* Marquee, About, Eyes, Featured, and Footer sections with IDs for scrolling */}
      <div id="marquee-section">
        <Marquee />
      </div>
      <div id="about-section">
        <About />
      </div>
      <div id="eyes-section">
        <Eyes />
      </div>
      <div id="featured-section">
        <Featured />
      </div>
      <div id="footer-section">
        <Footer />
      </div>
    </div>
  );
}

export default LandingPage;
