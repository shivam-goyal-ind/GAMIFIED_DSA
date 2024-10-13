import { motion } from 'framer-motion';
import React, { useState } from 'react';
import Loader3 from './Loader3';
import ProfileCreation from './ProfileCreation';

function GameSelection() {
  const cardVariants = {
    hover: {
      scale: 1.1,
      boxShadow: '0px 0px 15px rgba(255, 255, 255, 0.4)',
    },
  };
  const [showLoader3, setShowLoader3] = useState(false);
  const [showProfileCreation, setshowProfileCreation] = useState(false);

  const handleGameSelection = () => {
    setShowLoader3(true); // Trigger the Loader3 animation
    setTimeout(() => {
      setShowLoader3(false);
      setshowProfileCreation(true); // Show game selection after Loader3 animation
    }, 2000); // Timing based on the length of your Loader3 animation
  };

  if (showLoader3) {
    return <Loader3 />; // Display the Loader3 while it's active
  }

  if (showProfileCreation) {
    return <ProfileCreation />; // Display the game selection screen after Loader3
  }

  return (
    <div className="flex justify-center items-center h-screen bg-zinc-600">
      <div onClick={handleGameSelection}
      className="grid grid-cols-2 gap-10">
        <motion.div
          variants={cardVariants}
          whileHover="hover"
          className="w-80 h-96 bg-white rounded-lg shadow-xl p-6 cursor-pointer"
        >
          <img 
            src="https://t4.ftcdn.net/jpg/04/99/62/59/360_F_499625904_jhho0Ev0pAOuFntvY9HXGNQpFQqhBqyo.jpg" // Replace with the cricket image path
            alt="Cricket"
            className="w-full h-64 object-cover rounded-lg"
          />
          <h2 className="text-center text-2xl mt-4 font-semibold text-black">CRICKET</h2>
        </motion.div>

        <motion.div
          variants={cardVariants}
          whileHover="hover"
          className="w-80 h-96 bg-white rounded-lg shadow-xl p-6 cursor-pointer"
        >
          <img
            src="https://png.pngtree.com/template/20190928/ourmid/pngtree-silhouette-football-kick-shoot-design-image_312704.jpg" // Replace with the football image path
            alt="Football"
            className="w-full h-64 object-cover rounded-lg"
          />
          <h2 className="text-center text-2xl mt-4 font-semibold text-black">FOOTBALL</h2>
        </motion.div>
      </div>
    </div>
  );
}

export default GameSelection;
