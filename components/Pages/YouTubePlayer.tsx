"use client"
import React, { useEffect, useState } from 'react';
import YouTube from 'react-youtube';

// const YouTubePlayer = () => {
//   const opts = {
//     height: '480',
//     width: '100%',
//     playerVars: {
//       // Include any additional parameters here
//       autoplay: 1,
//       controls: 0,
//       modestbranding: 1,
//       showinfo: 0,
//       mute: 0,  // Mute the video to play only audio
//     },
//   };

//   return (
//     <div>
//       <YouTube videoId="VWfa3mWYKkA" opts={opts} />
//     </div>
//   );
// };


interface YouTubeAudioPlayerProps {
  videoId: string;
}

const YouTubeAudioPlayer: React.FC<YouTubeAudioPlayerProps> = ({ videoId }) => {
  useEffect(() => {
    const loadYouTubeIframeAPI = () => {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';

      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

      tag.onload = initializePlayer;
    };

    const initializePlayer = () => {
      const player = new (window as any).YT.Player('audioPlayer', {
        height: '0',
        width: '0',
        videoId: videoId,
        playerVars: {
          controls: 0,
          modestbranding: 1,
          showinfo: 0,
          autoplay: 1,
          mute: 1,
        },
        events: {
          onReady: (event: any) => {
            event.target.playVideo();
          },
        },
      });
    };

    if ((window as any).YT && (window as any).YT.Player) {
      initializePlayer();
    } else {
      (window as any).onYouTubeIframeAPIReady = loadYouTubeIframeAPI;
    }

    return () => {
      delete (window as any).onYouTubeIframeAPIReady;
    };
  }, [videoId]);

  return <div id="audioPlayer">nnnn</div>;
};

const YouTubePlayer: React.FC = () => {
  // Replace 'YOUR_VIDEO_ID' with the actual YouTube video ID
  const videoId = 'VWfa3mWYKkA';

  return (
    <div>
      <h1>Your React App</h1>
      <YouTubeAudioPlayer videoId={videoId} />
    </div>
  );
};


export default YouTubePlayer;
