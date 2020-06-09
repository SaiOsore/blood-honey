import React from 'react';
import Lang from '../lang/Lang';
import Socials from '../socials/Socials';
import Content from '../../components/layouts/Content';
import Logo from '../../components/logo/Logo';
import { PathLabel } from '../../helpers/helpers';
import { 
  HeaderStyled, 
  HeaderContainer, 
  HeaderBlock, 
  HeaderList, 
  HeaderItem, 
  HeaderLink 
} from './HeaderStyled';

const links = [
  {
    path: "/",
    name: "Home"
  },
  {
    path: "/shop",
    name: "Shop"
  },
  {
    path: "/collection",
    name: "Collection"
  },
  {
    path: "/about",
    name: "About"
  },
  {
    path: "/contacts",
    name: "Contacts"
  },
]

const Header = ({className}) => {

  const HeaderLinks = links.map((link, index) => (
    <HeaderItem key={index}>
      <HeaderLink className={PathLabel(link.path)} href={link.path}>
        {link.name}
      </HeaderLink>
    </HeaderItem>
  ));


  return (
    <HeaderStyled className={className}>
      <Content>
        <HeaderContainer>
          <HeaderBlock>
            <Logo />
          </HeaderBlock>
          <HeaderBlock>
            <Lang />
          </HeaderBlock>
          <HeaderBlock>
            <HeaderList>
              { HeaderLinks }
            </HeaderList>
          </HeaderBlock>
          <HeaderBlock>
            <Socials />
          </HeaderBlock>
        </HeaderContainer>
      </Content>
    </HeaderStyled>
  );
}

export default Header;