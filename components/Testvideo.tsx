"use client";
import React from 'react';

export default function Testvideo() {
  return (
    <div>
      <video width="100%" height="300" autoPlay loop muted playsInline style={{  top: '0', left: '0', opacity: '1' }} >
        <source src="https://www.healthylivingshows.com/wp-content/uploads/2024/01/01013.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
