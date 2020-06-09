import React from 'react';
import VideoHero from '../../components/video/VideoHero/VideoHero';
import { 
  HomeStyled, 
  HomeWrapper 
} from './HomeStyled';

const Home = () => {

  return (
    <HomeStyled>
      <HomeWrapper />
      <VideoHero src="/img/home/home-video.mp4" />
    </HomeStyled>
  );
}

export default Home;