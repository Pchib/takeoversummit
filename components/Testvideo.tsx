

"use client";
import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

export default function TestGifLoop() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Set the initial value based on the window width
    setIsMobile(window.innerWidth < 768);

    // Function to update the state based on screen width
    const updateIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Add a resize event listener to update the state when the window is resized
    window.addEventListener('resize', updateIsMobile);

    // Clear the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', updateIsMobile);
    };
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // This is where you can perform any logic if needed
      // For example, you can update state or perform other actions
    }, 5000); // Change this interval (in milliseconds) to control the GIF loop time

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);
  
  // Use the correct gif based on isMobile value
  // const gif = isMobile ? 'takegif2.gif' : 'takegif1.gif';
  const gif = isMobile ? '/ghsp.png' : '/ghshomepage3.jpg';

  return (
    <div>
      <img
        src={`${gif}`}
        alt="GIF"
        style={{ width: '100%', objectFit: 'cover' }}
      />
    </div>
  );
}
