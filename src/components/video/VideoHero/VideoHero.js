import React from 'react';
import { VideoHeroContainer, VideoHeroStyled } from './VideoHeroStyled';

const VideoHero = ({ src }) => {
  return (
    <VideoHeroContainer>
      <VideoHeroStyled 
        loop 
        autoPlay="autoplay"
        playsInline 
        muted="muted"
        src={src}
      />
    </VideoHeroContainer>
  );
}

export default VideoHero;