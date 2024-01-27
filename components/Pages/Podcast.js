// pages/index.js
"use client"
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px;
`;

const VideoListContainer = styled.div`
  width: 35%;
`;

const VideoPlayerContainer = styled.div`
  width: 60%;
`;

const VideoThumbnail = styled.div`
  margin-bottom: 10px;
  cursor: pointer;
  backgroundColor: #ffff;
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
        src: "http://dev.gharvestisland.org/wp-content/uploads/2024/01/TakeOver-at-the-Summit-2022-1.mp4",
        title: "Take Over 1.0",
        lead: "Inaugural Empowerment Extravaganza",
      },
      {
        src: "http://dev.gharvestisland.org/wp-content/uploads/2024/01/Takeover-At-The-Summit-2023.mp4",
        title: "Take Over 2.0",
        lead: "Elevated Impact Experience",
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
        <div className="blob-container">
    <div className="blob"></div>
    <div className="blob one"></div>
    <div className="blob two"></div>
    <div className="blob three"></div>
    <div className="blob four"></div>
    <div className="blob five"></div>
    <div className="blob six"></div>
    <div className="blob seven"></div>
    <div className="blob eight"></div>
    <div className="blob nine"></div>
    <div className="blob ten"></div>
  </div>

  <section id='podcast' style={{position: 'relative'}}className='row'> 

<div className='container'>
<div className="section-header mt-5">
                    <h3>Podcast</h3>
            <p>
            Welcome to our exclusive video showcase, a treasure trove of memories from past Take Over Summit events. In this collection, we've curated the best moments, powerful talks, and transformative experiences that have defined the essence of Take Over Summit. 
            </p>
          </div>    

          <Container>
                  <VideoListContainer>
        {videos.map((video, index) => (
          <VideoThumbnail key={index} onClick={() => handleVideoClick(video)}>
          <div stlye={{  bacgroundColor: 'white'
}}>           <h6>{video.title}</h6>
<p>{video.lead}</p>


          </div>
          </VideoThumbnail>
        ))}
      </VideoListContainer>
      <VideoPlayerContainer>
        <video
          src={currentVideo ? currentVideo.src : ""}
          style={{ width: "100%" }}
          controls={true}
          autoPlay={true}
          controlsList="nodownload"
        ></video>
        <div className="panel-body">
          <h4 className="video-title text-primary">{currentVideo ? currentVideo.title : ""}</h4>
          <p className="video-lead">{currentVideo ? currentVideo.lead : ""}</p>
        </div>
      </VideoPlayerContainer>
    </Container>

</div>

                
    </section>
    </div>

  );
};

export default VideoComponent;
