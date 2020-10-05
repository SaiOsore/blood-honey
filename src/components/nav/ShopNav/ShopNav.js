import React from 'react';
import { 
  ShopNavStyled, 
  ShopNavBlock, 
  ShopNavTitle, 
  ShopNavList, 
  ShopNavItem, 
  ShopNavLink 
} from './ShopNavStyled';

const ShopNav = () => {

  return (
    <ShopNavStyled>
      <ShopNavBlock>
        <ShopNavTitle>
          Categories
        </ShopNavTitle>
        <ShopNavList>
          <ShopNavItem>
            <ShopNavLink href="/shirts">
              Shirts
            </ShopNavLink>
          </ShopNavItem>
          <ShopNavItem>
            <ShopNavLink href="/coats">
              Coats
            </ShopNavLink>
          </ShopNavItem>
        </ShopNavList>
      </ShopNavBlock>
      <ShopNavBlock>
        <ShopNavTitle>
          Collections
        </ShopNavTitle>
        <ShopNavList>
          <ShopNavItem>
            <ShopNavLink href="/fire">
              Fire
            </ShopNavLink>
          </ShopNavItem>
          <ShopNavItem>
            <ShopNavLink href="/cold">
              Cold
            </ShopNavLink>
          </ShopNavItem>
        </ShopNavList>
      </ShopNavBlock>
    </ShopNavStyled>
  );
}

export default ShopNav;