import React from 'react';
import Content from '../../components/layouts/Content';
import InnerContainer from '../../components/layouts/InnerContainer';
import Socials from '../../components/socials/Socials';
import {
  ContactStyled,
  ContactTitle,
  ContactBlock,
  ContactLink,
  ContactSubTitle,
} from './ContactStyled';


const Contact = () => {

  return (
    <InnerContainer>
      <Content>
        <ContactStyled>
          <ContactTitle> Contact </ContactTitle>
            <ContactBlock>
              <ContactSubTitle>email:</ContactSubTitle>
              <ContactLink href="mailto:sai.osore@gmail.com">sai.osore@gmail.com</ContactLink>
            </ContactBlock>
            <ContactBlock>
              <ContactSubTitle>telephone:</ContactSubTitle>
              <ContactLink href="tel:+38000000000">+380999888999</ContactLink>
            </ContactBlock>
            <ContactBlock>
              <ContactSubTitle>socials:</ContactSubTitle>
              <Socials />
            </ContactBlock>
        </ContactStyled>
      </Content>
    </InnerContainer>
  );
}

export default Contact;