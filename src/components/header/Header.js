import React, { useState } from 'react';
import Socials from '../socials/Socials';
import Content from '../layouts/Content';
import Logo from '../logo/Logo';
import Menu from '../menu/Menu';
import { PathLabel } from '../../helpers/helpers';
import CartPreview from '../../components/cart/CartPreview/CartPreview';
import CartBtn from '../../components/cart/CartBtn/CartBtn';
import { 
  HeaderStyled, 
  HeaderContainer, 
  HeaderBlock, 
  HeaderList, 
  HeaderItem, 
  HeaderLink, 
  HeaderMenuBtn, 
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
    path: "/about",
    name: "About"
  },
  {
    path: "/contact",
    name: "Contact"
  },
]

const Header = ({ className }) => {

  const [menuOpen, setMenuOpen] = useState(false);

  const HeaderLinks = links.map((link, index) => (
    <HeaderItem key={index}>
      <HeaderLink border="true" className={PathLabel(link.path)} href={link.path}>
        {link.name}
      </HeaderLink>
    </HeaderItem>
  ));

  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  }

  return (
    <>
      <HeaderStyled className={className}>
        <Content>
          <HeaderContainer>
            <HeaderBlock>
              <Logo />
            </HeaderBlock>
            <HeaderBlock hideForMobiles>
              <HeaderList>
                { HeaderLinks }
              </HeaderList>
            </HeaderBlock>
            <HeaderBlock hideForMobiles>
              <Socials />
            </HeaderBlock>
            <HeaderBlock>
              {
                <CartBtn
                  display={PathLabel('/', 'none')}
                  color={'white'}
                  textTransform={'uppercase'}
                />
              }
              <HeaderMenuBtn
                onClick={handleMenu}
              >
                Menu
              </HeaderMenuBtn>
            </HeaderBlock>
          </HeaderContainer>
        </Content>
      </HeaderStyled>
      { menuOpen && 
        <Menu 
          links={links}
          onClose={handleMenu}
        />
      }
    </>
  );
}

export default Header;