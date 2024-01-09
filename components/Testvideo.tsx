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
import React, { useEffect } from 'react';

export default function TestGifLoop() {
  const gif = 'your-gif.gif'; // Replace with the actual file name of your GIF

  useEffect(() => {
    const intervalId = setInterval(() => {
      // This is where you can perform any logic if needed
      // For example, you can update state or perform other actions
    }, 5000); // Change this interval (in milliseconds) to control the GIF loop time

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <img
        src="your-gif.gif"
        alt="GIF"
        style={{ width: '100%', objectFit: 'cover' }}
      />
    </div>
  );
}

