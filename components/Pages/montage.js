// pages/index.js
"use client"
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  justify-content: space-between;
  margin: 20px;
`;

const VideoListContainer = styled.div`
  width: 100%;
`;

const VideoPlayerContainer = styled.div`
  width: 100%;
  margin-bottom: 50px;
`;

const VideoThumbnail = styled.div`
  margin-bottom: 10px;
  cursor: pointer;
  box-shadow: 0 10px 29px 0 rgba(68, 88, 144, 0.556);
  border-radius: 30px;
  text-align: center;
  background-color: #ffff;
  padding: 10px;
  border: 1px solid #ddd;
  &:hover {
    background-color: #eee;
  }
`;

const VideoComponent = () => {
  const [videos, setVideos] = useState([]);
  const [currentVideo, setCurrentVideo] = useState(null);



  useEffect(() => {
    // Your video fetching logic here...

    // Example videos
    const exampleVideos = [
      {
        src: "https://dev.gharvestisland.org/wp-content/uploads/2024/02/WhatsApp-Video-2024-02-11-at-22.30.34_485fad40.mp4",
        title: "Crystal Berger ~ Take Over 3.0",
        lead: "How to own your space",
      }, {
        src: "https://dev.gharvestisland.org/wp-content/uploads/2024/02/aliababa.mp4",
        title: "Alibaba Akpobome (Ali Baba) ~ Take Over 3.0",
        lead: "Until you make any talent you have a service, nobody will pay for it",
      }, {
        src: "https://dev.gharvestisland.org/wp-content/uploads/2024/02/WhatsApp-Video-2024-02-11-at-22.35.40_04471d2c.mp4",
        title: "Bishop Feb Idahosa ~ Take Over 3.0",
        lead: "The power of think time",
      },
    {
        src: "https://dev.gharvestisland.org/wp-content/uploads/2024/02/WhatsApp-Video-2024-02-11-at-22.16.15_d72bb47b.mp4",
        title: "Mrs. Modupe Ehirim ~ Take Over 3.0",
        lead: "5 Ways of passing values through generation",
      },
      // ... Add more videos
    ];

    setVideos(exampleVideos);
    setCurrentVideo(exampleVideos[0]);
  }, []);

  const handleVideoClick = (video) => {
    setCurrentVideo(video);
  };

  return (
    <div>
        <div className="blob-container" stlye={{opacity:"40%"}}>
    {/* <div className="blob"></div>
    <div className="blob one"></div>
    <div className="blob two"></div>
    <div className="blob three"></div>
    <div className="blob four"></div>
    <div className="blob five"></div>
    <div className="blob six"></div> */}
    
  </div>

  <section id='podcast' style={{position: 'relative'}}className='row'> 

<div className='container'>
<div className="section-header mt-5">
                    {/* <h3>Podcast</h3> */}
            {/* <p>
            Welcome to our exclusive video showcase, a treasure trove of memories from past TakeOver at the Summit events. In this collection, we have curated the best moments, powerful talks, and transformative experiences that have defined the essence of TakeOver at the Summit. 
            </p> */}
          </div>    
          <Container>
          <VideoPlayerContainer>
          <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
      <iframe
src="https://www.youtube.com/embed/kwGg7RDNxs0?si=MucnQHFJtNJD71Bp"        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
        title="TOATS 2024"
      ></iframe>
      {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/kwGg7RDNxs0?si=MucnQHFJtNJD71Bp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
    </div>
        {/* <video
          src='https://dev.gharvestisland.org/wp-content/uploads/2024/02/WhatsApp-Video-2024-02-11-at-22.30.34_485fad40.mp4'
          style={{ width: "100%" }}
          controls={true}
          autoPlay={true}
          controlsList="nodownload"
        ></video> */}
        
      </VideoPlayerContainer>
                

    </Container>

</div>

                
    </section>
    </div>

  );
};

export default VideoComponent;
