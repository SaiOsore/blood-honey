import React from 'react';
import { 
  MiniLogoStyled, 
  MiniLogoWrapper, 
  MiniLogoImg
} from './MiniLogoStyled';

const MiniLogo = () => {

  return (
    <MiniLogoStyled>
      <MiniLogoWrapper>
        <MiniLogoImg src="/img/logo/BH.png" alt='BH logo' />
      </MiniLogoWrapper>
    </MiniLogoStyled>
  );
}

export default MiniLogo;