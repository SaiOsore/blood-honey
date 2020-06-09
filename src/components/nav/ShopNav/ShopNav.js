import React from 'react';
import { 
  ShopNavStyled, 
  ShopNavList, 
  ShopNavItem, 
  ShopNavLink 
} from './ShopNavStyled';

const ShopNav = () => {

  return (
    <ShopNavStyled>
      <ShopNavList>
        <ShopNavItem>
          <ShopNavLink href="#">
            Shirts
          </ShopNavLink>
        </ShopNavItem>
        <ShopNavItem>
          <ShopNavLink href="#">
            Coats
          </ShopNavLink>
        </ShopNavItem>
      </ShopNavList>
    </ShopNavStyled>
  );
}

export default ShopNav;