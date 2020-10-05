import React from 'react';
import Content from '../../components/layouts/Content';
import InnerContainer from '../../components/layouts/InnerContainer';
import {
  AboutStyled,
  AboutTitle,
  AboutText,
  AboutDescr,
} from './AboutStyled';


const About = () => {


  return (
    <InnerContainer>
      <Content>
        <AboutStyled>
          <AboutTitle>THE SHOP IS AN ANSWER TO THE RHETORICAL QUESTION IN OUR WORLD "HOW CAN YOU LIVE HERE?"</AboutTitle>
          <AboutText>
            <AboutDescr>
              At the heart of the brand policy is democratic prices and the creation of things that belong to the buyer, and do not enslave him.
            </AboutDescr>
            <AboutDescr>
              The main sources of inspiration for the brand are the arts, cultural and social sciences. Each collection carries a number of ideas united by a common concept - thus the SHOP team broadcasts its own vision of what is happening around.
            </AboutDescr>
            <AboutDescr>
              The main sources of inspiration for the brand are the arts, cultural and social sciences. Each collection carries a number of ideas united by a common concept - thus the SHOP team broadcasts its own vision of what is happening around.
            </AboutDescr>
            <AboutDescr>
              The main sources of inspiration for the brand are the arts, cultural and social sciences. Each collection carries a number of ideas united by a common concept - thus the SHOP team broadcasts its own vision of what is happening around.
            </AboutDescr>
          </AboutText>
        </AboutStyled>
      </Content>
    </InnerContainer>
  );
}

export default About;