import React, { useRef, useEffect } from 'react';
import YouTube from 'react-youtube';


const ContinuousVideo = () => {
    const videoId = 'OxUSDSYPans';

    useEffect(() => {
      // Get the iframe element
      const iframe = document.getElementById('youtube-iframe');
  
      // Set 'autoplay' attribute to '1' (true) for automatic playback
      iframe.setAttribute('autoplay', '1');
    }, []);
  
    return (
      <YouTube
        videoId={videoId}
        containerClassName="youtube-container" // Optional: Add your custom CSS class for styling the container
        id="youtube-iframe" // Set an ID for the iframe element
      />
    );
  };
export default ContinuousVideo;
