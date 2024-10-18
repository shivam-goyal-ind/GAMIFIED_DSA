import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { signUp, signIn } from '../api';
import Loader4 from './Loader4';  // Reusing the loader animation
import PlayerStats from './PlayerStats'; // Import the new PlayerStats component

function ProfileCreation() {
  const [formData, setFormData] = useState({
    username: '',
    jerseyName: '',
    jerseyNumber: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [showLoader4, setShowLoader4] = useState(false);
  const [showPlayerStats, setShowPlayerStats] = useState(false);
  const [isSignUp, setIsSignUp] = useState(true);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const getUserProfile = async (token) => {
    try {
      const response = await fetch('https://gamified-dsa-backend.vercel.app/api/profile', { // Use your deployed backend URL here
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`, // Send the token for authorization
        },
      });
      const data = await response.json();
      
      return data; // { username, jerseyName, jerseyNumber }
    } catch (error) {
      console.error('Error fetching profile:', error);
      return { username: '', jerseyName: '', jerseyNumber: '' };
    }
  };
  
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setShowLoader4(true);
  
    try {
      let response;
      if (isSignUp) {
        response = await signUp(formData); // Assuming signUp handles signup
      } else {
        response = await signIn(formData); // Assuming signIn handles signin
      }
  
      if (response.error) {
        console.error(response.error);
        alert(response.error); // Display error
      } else {
        localStorage.setItem('token', response.token); // Store the JWT token
        
        // If sign-in, fetch the user data from the backend or localStorage
        if (!isSignUp) {
          // Assuming `getUserProfile` fetches the user profile from the server or local storage
          const profileData = await getUserProfile(response.token); // Use response token to get user profile
          
          setFormData({
            ...formData,
            username: profileData.username,
            jerseyNumber: profileData.jerseyNumber,
          });
        }
  
        setShowLoader4(false);
        setShowPlayerStats(true); // Show PlayerStats after login/signup
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred');
      setShowLoader4(false);
    }
  };
  

  if (showLoader4) {
    return <Loader4 />;
  }

  if (showPlayerStats) {
    return <PlayerStats formData={formData} />; // Pass formData to PlayerStats
  }

  return (
    <div className="h-screen bg-zinc-900 flex justify-center items-center">
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 0.8, ease: 'easeInOut' }}
        className="bg-zinc-800 p-10 rounded-lg shadow-lg max-w-lg w-full"
      >
        <div className="flex justify-center mb-6">
          <button 
            className={`p-3 mx-2 ${isSignUp ? 'bg-blue-600' : 'bg-zinc-700'} text-white rounded-lg`}
            onClick={() => setIsSignUp(true)}
          >
            Sign Up
          </button>
          <button 
            className={`p-3 mx-2 ${!isSignUp ? 'bg-blue-600' : 'bg-zinc-700'} text-white rounded-lg`}
            onClick={() => setIsSignUp(false)}
          >
            Sign In
          </button>
        </div>
        <h2 className="text-white text-4xl font-semibold mb-6 text-center">
          {isSignUp ? 'Create Your Profile' : 'Sign In'}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {isSignUp ? (
            <>
            {['username', 'jerseyName', 'jerseyNumber', 'email', 'password', 'confirmPassword'].map((field, idx) => (
                <input
                  key={idx}
                  type={field.includes('password') ? 'password' : field === 'email' ? 'email' : 'text'}
                  name={field}
                  placeholder={field.charAt(0).toUpperCase() + field.slice(1).replace(/([A-Z])/g, ' $1')}
                  value={formData[field]}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg bg-zinc-700 text-white"
                />
              ))}
            </>
          ) : (
            <>
              {['email', 'password'].map((field, idx) => (
                <input
                  key={idx}
                  type={field === 'password' ? 'password' : 'email'}
                  name={field}
                  placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                  value={formData[field]}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg bg-zinc-700 text-white"
                />
              ))}
            </>
          )}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg transition duration-300 ease-in-out"
          >
            {isSignUp ? 'Submit and Start the Game' : 'Sign In'}
          </button>
        </form>
      </motion.div>
    </div>
  );
}

export default ProfileCreation;
