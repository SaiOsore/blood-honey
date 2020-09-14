import React from 'react';
import VideoHero from '../../components/video/VideoHero/VideoHero';
import MiniLogo from '../../components/logo/MiniLogo';
import { 
  HomeStyled, 
  HomeWrapper 
} from './HomeStyled';

const Home = () => {

  return (
    <HomeStyled>
      <HomeWrapper />
      <MiniLogo />
      <VideoHero src="/img/home/video.mp4" />
    </HomeStyled>
  );
}

export default Home;