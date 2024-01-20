"use client"
import { useState,useEffect, useRef } from 'react';

const Liveaudio = () => {
  const socket = useRef(null);
  const mediaRecorder = useRef(null);
  const [isRecording, setIsRecording] = useState(false);

  useEffect(() => {
    // Initialize WebSocket connection
    socket.current = new WebSocket('ws://localhost:3001');

    socket.current.onopen = () => {
      console.log('WebSocket connection opened');
    };

    socket.current.onclose = (event) => {
      console.log('WebSocket connection closed:', event);
    };

    socket.current.onerror = (error) => {
      console.error('WebSocket error:', error);
    };

    // Initialize MediaRecorder
    navigator.mediaDevices.getUserMedia({ audio: true })
      .then((stream) => {
        mediaRecorder.current = new MediaRecorder(stream);

        mediaRecorder.current.ondataavailable = (event) => {
          if (event.data.size > 0 && socket.current.readyState === WebSocket.OPEN) {
            socket.current.send(event.data);
          }
        };

        mediaRecorder.current.onstop = () => {
          // Handle recording stop if needed
          console.log('Recording stopped');
        };
      });

    return () => {
      // Cleanup resources if component unmounts
      mediaRecorder.current?.stop();
      if (socket.current && socket.current.readyState === WebSocket.OPEN) {
        socket.current.close();
      }
    };
  }, []);

  const startRecording = () => {
    if (mediaRecorder.current && mediaRecorder.current.state === 'inactive') {
      mediaRecorder.current.start();
      setIsRecording(true);
    }
  };

  const stopRecording = () => {
    if (mediaRecorder.current && mediaRecorder.current.state === 'recording') {
      mediaRecorder.current.stop();
      setIsRecording(false);
    }
  };

  return (
    <div>
      <button onClick={startRecording} disabled={isRecording}>Start Recording</button>
      <button onClick={stopRecording} disabled={!isRecording}>Stop Recording</button>
    </div>
  );
};

export default Liveaudio;
//  "use client"
// import { useState, useEffect, useRef } from 'react';
// import io from 'socket.io-client';

// const Liveaudio = () => {
//   const socket = useRef(null);
//   const mediaRecorder = useRef(null);
//   const [isRecording, setIsRecording] = useState(false);

//   useEffect(() => {
//     // Initialize Socket.IO connection
//     socket.current = io('http://localhost:3001');

//     socket.current.on('connect', () => {
//       console.log('Socket.IO connection opened');
//     });

//     socket.current.on('disconnect', () => {
//       console.log('Socket.IO connection closed');
//     });

//     // Initialize MediaRecorder
//     navigator.mediaDevices.getUserMedia({ audio: true })
//       .then((stream) => {
//         mediaRecorder.current = new MediaRecorder(stream);

//         mediaRecorder.current.ondataavailable = (event) => {
//           if (event.data.size > 0) {
//             socket.current.emit('audioData', event.data);
//           }
//         };

//         mediaRecorder.current.onstop = () => {
//           console.log('Recording stopped');
//         };
//       });

//     return () => {
//       mediaRecorder.current?.stop();
//       socket.current.disconnect();
//     };
//   }, []);

//   const startRecording = () => {
//     if (mediaRecorder.current && mediaRecorder.current.state === 'inactive') {
//       console.log('Recording started');
//       mediaRecorder.current.start();
//       setIsRecording(true);
//     }
//   };

//   const stopRecording = () => {
//     if (mediaRecorder.current && mediaRecorder.current.state === 'recording') {
//       console.log('Recording stopped');
//       mediaRecorder.current.stop();
//       setIsRecording(false);
//     }
//   };

//   return (
//     <div>
//       <button onClick={startRecording} disabled={isRecording}>
//         Start Recording
//       </button>
//       <button onClick={stopRecording} disabled={!isRecording}>
//         Stop Recording
//       </button>
//     </div>
//   );
// };

// export default Liveaudio;
