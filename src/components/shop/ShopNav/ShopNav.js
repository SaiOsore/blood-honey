import React, { useState, useEffect } from 'react';
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

const ShopNav = ({ sortByPrice, sortByAlphabet, filterBy, filter, blocks }) => {

  return (
    <ShopNavStyled>
      {
        blocks.map((block, index) => (
          <ShopNavBlock key={index}>
            <ShopNavTitle>
              {block.title}
            </ShopNavTitle>
            <ShopNavList>
              {
                block.list.map((item, index) => (
                  <ShopNavItem key={index}>
                    <ShopNavBtn onClick={() => {
                      filterBy(item.title, block.type);
                    }}>
                      {item.title}
                    </ShopNavBtn>
                  </ShopNavItem>
                ))
              }
            </ShopNavList>
          </ShopNavBlock>
        ))
      }
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
        </ShopNavList>
      </ShopNavBlock>
      <ShopNavBlock>
        <ShopNavInput placeholder="type price or name" onChange={filter} />
      </ShopNavBlock>
    </ShopNavStyled>
  );
}

export default ShopNav;