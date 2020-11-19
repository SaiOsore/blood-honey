import React from 'react';
import { 
  ShopNavStyled, 
  ShopNavBlock, 
  ShopNavTitle, 
  ShopNavList, 
  ShopNavItem, 
  ShopNavLink, 
  ShopNavBtn, 
  ShopNavInput, 
} from './ShopNavStyled';

const ShopNav = ({ sortByPrice, sortByAlphabet, filter }) => {

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
            <ShopNavBtn onClick={sortByPrice}>
              sort by price
            </ShopNavBtn>
          </ShopNavItem>
          <ShopNavItem>
            <ShopNavBtn onClick={sortByAlphabet}>
              sort by alphabet
            </ShopNavBtn>
          </ShopNavItem>
          <ShopNavItem>
            <ShopNavInput placeholder="type price or name" onChange={filter} />
          </ShopNavItem>
        </ShopNavList>
      </ShopNavBlock>
    </ShopNavStyled>
  );
}

export default ShopNav;