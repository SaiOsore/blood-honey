import React from 'react';
import { useSelector } from 'react-redux';
import { ProductStyled } from './ProductStyled';

const Product = ({ match }) => {
  const productId = Number(match);
  const ProductDetails = useSelector(state => state.cart.items.find(item => item.id === productId));
  const { id, src, title, price, sizes, colors } = ProductDetails;

  return (
    <ProductStyled id={id}>
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