import React from 'react';
import { ProductStyled } from './ProductStyled';

const Product = ({src, title, price, sizes, colors}) => {

  return (
    <ProductStyled>
      <div>
        <div>
          <img src={src} alt={title}/>
        </div>
        <div>
          <h4>{title}</h4>
          <p>{price}</p>
        </div>
        <div>
          <div>{sizes}</div>
          <div>{colors}</div>
        </div>
      </div>
    </ProductStyled>
  );
}

export default Product;