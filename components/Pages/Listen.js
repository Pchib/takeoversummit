"use client";

import React, { useEffect, useRef } from 'react';

const AudioListener = () => {
  const socket = useRef(null);
  const audioRef = useRef(new Audio());

  useEffect(() => {
    // Initialize WebSocket connection
    socket.current = new WebSocket('ws://localhost:3001');

    socket.current.onopen = () => {
      console.log('WebSocket connection opened');
    };

    socket.current.onmessage = (event) => {
      // Handle incoming audio data
      const audioBlob = new Blob([event.data], { type: 'audio/wav' });
      const audioUrl = URL.createObjectURL(audioBlob);
      
      // Play the audio
      audioRef.current.src = audioUrl;
      audioRef.current.play();
    };

    socket.current.onclose = (event) => {
      console.log('WebSocket connection closed:', event);
    };

    socket.current.onerror = (error) => {
      console.error('WebSocket error:', error);
    };

    return () => {
      // Cleanup resources if component unmounts
      if (socket.current && socket.current.readyState === WebSocket.OPEN) {
        socket.current.close();
      }
    };
  }, []);

  return (
    <div>
      <h2>Listening to Audio</h2>
      <audio ref={audioRef} controls />
    </div>
  );
};

export default AudioListener;
//  "use client"
// import React, { useEffect, useRef } from 'react';
// import io from 'socket.io-client';

// const AudioListener = () => {
//   const socket = useRef(null);
//   const audioRef = useRef(new Audio());

//   useEffect(() => {
//     // Initialize Socket.IO connection
//     socket.current = io('https://localhost:3001');

//     socket.current.on('connect', () => {
//       console.log('Socket.IO connection opened');
//     });

//     socket.current.on('audioData', (data) => {
//       const audioBlob = new Blob([data], { type: 'audio/wav' });
//       const audioUrl = URL.createObjectURL(audioBlob);

//       // Play the audio
//       audioRef.current.src = audioUrl;
//       audioRef.current.play();
//     });

//     socket.current.on('disconnect', () => {
//       console.log('Socket.IO connection closed');
//     });

//     return () => {
//       socket.current.disconnect();
//     };
//   }, []);

//   return (
//     <div>
//       <h2>Listening to Real-Time Audio</h2>
//       <audio ref={audioRef} controls />
//     </div>
//   );
// };

// export default AudioListener;
