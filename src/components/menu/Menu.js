import React from 'react';
import Socials from '../socials/Socials';
import Logo from '../logo/Logo';
import { PathLabel } from '../../helpers/helpers';
import { 
  MenuStyled, 
  MenuNav, 
  MenuList, 
  MenuItem, 
  MenuLink, 
  MenuClose, 
} from './MenuStyled';

const Menu = ({ onClose, links }) => {

  const MenuLinks = links.map((link, index) => (
    <MenuItem key={index}>
      <MenuLink 
        onClick={onClose} 
        border="true" 
        className={PathLabel(link.path)} 
        href={link.path}
      >
        {link.name}
      </MenuLink>
    </MenuItem>
  ));

  return (
    <MenuStyled>
      <MenuNav>
        <Logo />
        <MenuList>
          { MenuLinks }
        </MenuList>
        <Socials />
      </MenuNav>
      <MenuClose onClick={onClose}>CLOSE</MenuClose>
    </MenuStyled>
  );
}

export default Menu;