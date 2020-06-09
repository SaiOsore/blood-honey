import React from 'react';
import { SocialsStyled, SocialsLink } from './SocialsStyled';


const Socials = () => {
  return (
    <SocialsStyled>
      <SocialsLink href="#">
        instagram
      </SocialsLink>
      <SocialsLink href="#">
        facebook
      </SocialsLink>
    </SocialsStyled>
  );
}

export default Socials;