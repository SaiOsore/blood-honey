import React from 'react';
import { 
  MiniLogoStyled,
  MiniLogoImg
} from './MiniLogoStyled';

const MiniLogo = () => {

  return (
    <MiniLogoStyled>
      <MiniLogoImg src="/img/logo/BH.png" alt='BH logo' />
    </MiniLogoStyled>
  );
}

export default MiniLogo;