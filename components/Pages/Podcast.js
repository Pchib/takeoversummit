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
        <div className="blob-container" stlye={{opacity:"40%"}}>
    <div className="blob"></div>
    <div className="blob one"></div>
    <div className="blob two"></div>
    <div className="blob three"></div>
    <div className="blob four"></div>
    <div className="blob five"></div>
    <div className="blob six"></div>
    
  </div>

  <section id='podcast' style={{position: 'relative'}}className='row'> 

<div className='container'>
<div className="section-header mt-5">
                    <h3>Podcast</h3>
            <p>
            Welcome to our exclusive video showcase, a treasure trove of memories from past Take Over Summit events. In this collection, weve curated the best moments, powerful talks, and transformative experiences that have defined the essence of Take Over Summit. 
            </p>
          </div>    

          <Container>
          <VideoPlayerContainer>
        <video
          src={currentVideo ? currentVideo.src : ""}
          style={{ width: "100%" }}
          controls={true}
          autoPlay={true}
          controlsList="nodownload"
        ></video>
        <div className="panel-body">
          <h4 className="video-title text-red">{currentVideo ? currentVideo.title : ""}</h4>
          <p className="video-lead">{currentVideo ? currentVideo.lead : ""}</p>
        </div>
      </VideoPlayerContainer>
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

    </Container>

</div>

                
    </section>
    </div>

  );
};

export default VideoComponent;
