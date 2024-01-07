"use client";
import React, { useEffect, useState } from 'react';

export default function Testvideo() {
  // State to track window width
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    // Function to handle resize
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Initial window width
    setWindowWidth(window.innerWidth);

    // Event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array ensures the effect runs only once during mount

  return (
    <div id='setheader'>
      {/* Conditional rendering based on screen size */}
      {windowWidth <= 768 ? (
        <video width="100%" height="300" autoPlay loop muted playsInline style={{ top: '0', left: '0', opacity: '1' }}>
          {/* Mobile video source */}
          <source src="https://www.healthylivingshows.com/wp-content/uploads/2024/01/01013.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <video width="100%" height="300" autoPlay loop muted playsInline style={{ top: '0', left: '0', opacity: '1' }}>
          {/* Desktop video source */}
          <source src="https://www.healthylivingshows.com/wp-content/uploads/2024/01/01012.compressed.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
}
