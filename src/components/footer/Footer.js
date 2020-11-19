import React from 'react';
import Content from '../layouts/Content';
import Socials from '../socials/Socials';
import { 
  FooterStyled, 
  FooterContainer, 
  FooterCopyright, 
  FooterNav, 
  FooterList, 
  FooterItem, 
  FooterLink, 
} from './FooterStyled';

const links = [
  {
    path: "/",
    name: "Home"
  },
  {
    path: "/about",
    name: "About"
  },
  {
    path: "/contact",
    name: "Contact"
  },
]

const Footer = () => {

  const date = new Date();
  const currentYear = date.getFullYear();

  const FooterLinks = links.map((link, index) => (
    <FooterItem key={index}>
      <FooterLink border="true" href={link.path}>
        {link.name}
      </FooterLink>
    </FooterItem>
  ));

  return (
    <FooterStyled>
      <Content>
        <FooterContainer>
          <FooterCopyright>
            <div>
              © { currentYear } Blood&Honey
            </div>
            <a href='#' title='privacy'>
              About privacy
            </a>
          </FooterCopyright>
          <FooterNav>
            <FooterList>
              { FooterLinks }
            </FooterList>
          </FooterNav>
          <Socials />
        </FooterContainer>
      </Content>
    </FooterStyled>
  );
}

export default Footer;