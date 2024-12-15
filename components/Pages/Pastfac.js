import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Box, Typography } from '@mui/material';

export default function MuiCarousel() {
  // Example data array. Replace with your own images.
  const speakers = [
    {
      imgSrc: 'assets/img/tt.png',
      title: 'Crystal Berger',
      subtitle: 'Founder, EBO & Host of the Counter Culture Podcast',
    },
    {
      imgSrc: 'assets/img/no.png',
      title: 'Nneka Okekearu',
      subtitle: 'Director - Enterprise Development Centre, Pan-Atlantic University Lagos State, Nigeria ·',
    },
    {
      imgSrc: 'assets/img/df.png',
      title: 'Dr. FEB Idahosa',
      subtitle: 'President, Ben Idahosa University, Benin.',
    },
    {
      imgSrc: 'assets/img/GO.png',
      title: 'Dr. Gabriel Ogbechie',
      subtitle: 'MD/CEO of Rainoil ltd.',
    },
    {
      imgSrc: 'assets/img/SA.png',
      title: 'Hon. Seyi Adisa',
      subtitle: 'Governance, Leadership, Development Nation Builder ',
    },
    {
      imgSrc: 'assets/img/me.png',
      title: 'Mrs. Modupe Ehirim',
      subtitle: 'Founder/Lead Counsellor ',
    },
    // Add as many items as needed
  ];

  // Helper function to chunk the array into groups of 2
  const chunkArray = (arr, size) => {
    const results = [];
    for (let i = 0; i < arr.length; i += size) {
      results.push(arr.slice(i, i + size));
    }
    return results;
  };

  // Chunk the speakers into groups of 2
  const chunkedSpeakers = chunkArray(speakers, 2);

  return (
    <Box sx={{ maxWidth: 900, margin: '0 auto' }} style={{ marginTop: '50px', marginBottom: '50px' }}>
      <div className="section-header">
        <h3>Meet Our Past Faculty</h3>
        <p>
          Our past faculty laid the foundation for our transformative experiences. 
          These former leaders and experts brought a wealth of knowledge and passion, 
          leaving a legacy of growth and inspiration that continues to guide our summit future.
        </p>
      </div>
      <Carousel
        autoPlay={true}
        interval={3000}
        animation="slide"
        duration={500}
        indicators={true}
        navButtonsAlwaysVisible={true}
      >
        {chunkedSpeakers.map((group, groupIndex) => (
          // Each chunk is rendered as one "slide"
          <Box
            key={groupIndex}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              gap: 2, // spacing between cards
              p: 2,
            }}
          >
            {group.map((speaker, itemIndex) => (
              <Box
                key={itemIndex}
                sx={{
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  p: 2,
                  boxShadow: 1,
                  borderRadius: 2,
                  maxWidth: 300, // limit individual card width
                }}
              >
                <Box
                  component="img"
                  src={speaker.imgSrc}
                  alt={speaker.title || 'Carousel Image'}
                  sx={{
                    width: '100%',
                    height: 'auto',
                    objectFit: 'cover',
                    borderRadius: 1,
                    mb: 1,
                  }}
                />
                {speaker.title && (
                  <Typography variant="h6" sx={{ textAlign: 'center' }}>
                    {speaker.title}
                  </Typography>
                )}
                {speaker.subtitle && (
                  <Typography variant="body2" sx={{ textAlign: 'center', color: 'text.secondary' }}>
                    {speaker.subtitle}
                  </Typography>
                )}
              </Box>
            ))}
          </Box>
        ))}
      </Carousel>
    </Box>
  );
}
