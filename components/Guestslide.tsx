"use client";
// import React from 'react';

// export default function Testvideo() {
//   return (
//     <div>
//       <video width="100%" height="300" autoPlay loop muted playsInline style={{  top: '0', left: '0', opacity: '1' }} >
//         <source src="https://www.healthylivingshows.com/wp-content/uploads/2024/01/01013.mp4" type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>
//     </div>
//   );
// }
import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

export default function TestGifLoop() {
  const [isLaptop, setIsLaptop] = useState(false);

  useEffect(() => {
    // Set the initial value based on the window width
    setIsLaptop(window.innerWidth >= 768);

    // Function to update the state based on screen width
    const updateIsLaptop = () => {
      setIsLaptop(window.innerWidth >= 768);
    };

    // Add a resize event listener to update the state when the window is resized
    window.addEventListener('resize', updateIsLaptop);

    // Clear the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', updateIsLaptop);
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

  const gif = isLaptop ? 'guestslide.gif' : 'guestslide.gif';

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
