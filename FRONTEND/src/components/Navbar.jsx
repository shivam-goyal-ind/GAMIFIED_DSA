import React, { useEffect, useState } from 'react';

function Navbar({ scrollToSection }) {
  const [showNavbar, setShowNavbar] = useState(true); // To control navbar visibility
  const [lastScrollY, setLastScrollY] = useState(0); // Track last scroll position

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Check if the user is scrolling down or up
      if (currentScrollY > lastScrollY) {
        // User is scrolling down, hide navbar
        setShowNavbar(false);
      } else {
        // User is scrolling up, show navbar
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY); // Update last scroll position
    };

    window.addEventListener('scroll', handleScroll); // Add scroll event listener

    return () => {
      window.removeEventListener('scroll', handleScroll); // Clean up the event listener on unmount
    };
  }, [lastScrollY]); // Dependency array includes lastScrollY to track changes

  return (
    <div
      className={`fixed z-[999] w-full px-20 py-8 font-['Matemasie'] flex justify-between items-center transition-transform duration-300 ease-in-out ${
        showNavbar ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="logo" onClick={() => scrollToSection('top-section')}>
        <img
          src="https://cdn-icons-png.flaticon.com/128/16342/16342652.png"
          loading="lazy"
          alt="logo"
          title="Shivam's Project"
          width="64"
          height="64"
        />
      </div>
      <div className="links flex gap-10">
        {['SERVICES', 'INSIGHTS', 'ABOUT US', 'PLAY'].map((item, index) => {
          let sectionId = '';
          switch (item) {
            case 'SERVICES':
              sectionId = 'about-section';
              break;
            case 'INSIGHTS':
              sectionId = 'featured-section';
              break;
            case 'ABOUT US':
              sectionId = 'footer-section';
              break;
            case 'PLAY':
              sectionId = 'eyes-section';
              break;
            default:
              break;
          }

          return (
            <a
              key={index}
              className="text-[2vw] cursor-pointer"
              onClick={() => scrollToSection(sectionId)}
            >
              {item}
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default Navbar;
