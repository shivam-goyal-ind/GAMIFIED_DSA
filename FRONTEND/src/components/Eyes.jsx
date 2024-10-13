import React, { useEffect, useRef, useState } from 'react'
import GameSelection from './GameSelection'; 

function Eyes() {
  const [rotate, setRotate] = useState(0);
  const [showGame, setShowGame] = useState(false); 

  useEffect(()=>{
    window.addEventListener("mousemove", (e)=>{
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth/2;
      let deltaY = mouseY - window.innerHeight/2;

      var angle = Math.atan2(deltaY, deltaX)*(180/Math.PI);
      setRotate(angle-180);
    })
  })
  const handlePlayClick = () => {
    setShowGame(true); // Set showGame to true when the "PLAY" button is clicked
  };

  if (showGame) {
    // If showGame is true, render the GameSelection component
    return <GameSelection />;
  }


  return (
    <div className='eyes w-full h-screen overflow-hidden'>
        <div data-scroll data-scroll-section data-scroll-speed="-.7" className='relative w-3/4 h-3/4 m-auto mt-20 bg-cover bg-center bg-[url("https://cdn.dribbble.com/users/101844/screenshots/3846171/bowler.gif")]'>
          <div className='absolute flex gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
            <div className='flex items-center justify-center w-[15vw] h-[15vw] bg-zinc-100 rounded-full'>
              <div className='relative w-2/3 h-2/3 bg-black rounded-full flex justify-center items-center text-[2vw]' onClick={handlePlayClick}>PLAY
                <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10'>
                  <div className='w-10 h-10 rounded-full bg-zinc-100'>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex items-center justify-center w-[15vw] h-[15vw] bg-zinc-100 rounded-full'>
            <div className='relative w-2/3 h-2/3 bg-black rounded-full flex justify-center items-center text-[2vw]' onClick={handlePlayClick}>PLAY
                <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10'>
                  <div className='w-10 h-10 rounded-full bg-zinc-100'>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Eyes