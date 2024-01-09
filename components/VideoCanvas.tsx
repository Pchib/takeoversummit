"use client";
import React, { useEffect } from 'react';
import Testvideo from './Testvideo';

export default function VideoCanvas() {

  const containerStyle = {
    marginTop: '70px',
  };
  return (
    
    <div style={containerStyle}>
    
        <Testvideo />
        
      </div>
  );
}
