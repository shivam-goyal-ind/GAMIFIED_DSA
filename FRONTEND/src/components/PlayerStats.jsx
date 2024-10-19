import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Loader5 from './Loader5';
import CodeEditor from './CodeEditor';

function PlayerStats({ formData }) {
  // Set default values if any field is missing
  const { username = '', jerseyNumber = '' } = formData;

  const [showLoader5, setShowLoader5] = useState(false);
  const [showCodingPlatform, setShowCodingPlatform] = useState(false);

  const onProceed = () => {
    setShowLoader5(true); // Trigger the Loader5 animation
    setTimeout(() => {
      setShowLoader5(false);
      setShowCodingPlatform(true); // Show coding platform after Loader5 animation
    }, 2000);
  };

  // If loader is showing, return the Loader5 component
  if (showLoader5) {
    return <Loader5 />;
  }

  // If the coding platform is to be shown, return the CodeEditor component
  if (showCodingPlatform) {
    return <CodeEditor />;
  }

  // Main player stats UI
  return (
    <div className="h-screen bg-zinc-900 flex justify-center items-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
        className="bg-zinc-800 p-8 rounded-lg shadow-lg max-w-6xl w-full"
      >
        <div className="flex justify-between">
          <div className="w-1/2">
            <div className="flex items-center mb-6">
              <img
                src="https://via.placeholder.com/150"  // Placeholder for profile picture
                alt="Player Profile"
                className="rounded-full w-40 h-40 border-4 border-blue-600"
              />
              <div className="text-white text-center ml-6">
                <h1 className="text-4xl font-bold">{username}</h1>
                <p className="text-xl">{jerseyNumber}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 text-white">
              {[
                { label: 'Matches Played', value: '50' },
                { label: 'Runs Scored', value: '1200' },
                { label: 'Average', value: '45.6' },
                { label: 'Strike Rate', value: '130.5' },
                { label: 'Best Score', value: '150*' },
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-zinc-700 p-3 rounded-lg shadow-md text-center"
                >
                  <h2 className="text-2xl font-semibold">{stat.label}</h2>
                  <p className="text-4xl mt-1">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="w-1/2 bg-zinc-700 p-6 rounded-lg shadow-md text-white ml-8">
            <h2 className="text-4xl font-semibold mb-4 text-center underline">Game Rules</h2>
            <ol className="list-decimal ml-6 space-y-2 text-[3vh]">
              <li>For solving each EASY question correctly, 10 runs will be added to your score.</li>
              <li>For solving each MEDIUM question correctly, 25 runs will be added to your score.</li>
              <li>For solving each HARD question correctly, 50 runs will be added to your score.</li>
              <li>If you fail to solve an EASY question correctly, you will be given OUT.</li>
              <li>If you fail to solve a MEDIUM or HARD question, you will not be OUT, but 5 runs will be deducted from your score.</li>
            </ol>
            <button
              className="w-full bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg mt-6 transition duration-300 ease-in-out"
              onClick={onProceed}
            >
              Proceed to Start
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default PlayerStats;
