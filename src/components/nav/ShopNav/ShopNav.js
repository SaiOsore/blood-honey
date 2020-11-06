import React from 'react';
import { 
  ShopNavStyled, 
  ShopNavBlock, 
  ShopNavTitle, 
  ShopNavList, 
  ShopNavItem, 
  ShopNavLink 
} from './ShopNavStyled';

const ShopNav = ({ sortByPrice, sortByAlphabet }) => {

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
      <ShopNavBlock>
        <ShopNavTitle>
          Filters
        </ShopNavTitle>
        <ShopNavList>
          <ShopNavItem>
            <ShopNavLink as="button" onClick={sortByPrice}>
              sortByPrice
            </ShopNavLink>
          </ShopNavItem>
          <ShopNavItem>
            <ShopNavLink as="button" onClick={sortByAlphabet}>
              sortByAlphabet
            </ShopNavLink>
          </ShopNavItem>
        </ShopNavList>
      </ShopNavBlock>
    </ShopNavStyled>
  );
}

export default ShopNav;