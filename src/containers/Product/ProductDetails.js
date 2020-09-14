import React from 'react';
import { addToCart } from '../../actions/index';
import { connect } from 'react-redux';
import {
  ProductStyled,
  ProductContainer,
  ProducBlock,
  ImgWrapper,
  Img,
  Title
} from './ProductStyled';

const ProductsDetails = ({products, addToCart}) => {

  console.log(products);

  const handleAddToCart = (id) => {
    addToCart(id);
  }

  const mapProducts = products.map((product, index) => (
    <ProductContainer key={index+product.id}>
      <ProducBlock>
        <ImgWrapper>
          <Img src={product.src} alt={product.title} />
        </ImgWrapper>
      </ProducBlock>
      <ProducBlock>
        <Title>{product.title}</Title>
        <form>
          <div>${product.price}</div>
          <div>{product.sizes}</div>
          <div>{product.colors}</div>
          <button 
            onClick={() => {
              handleAddToCart(product.id);
            }}
          />
        </form>
      </ProducBlock>
    </ProductContainer>
  ));

  return (
    <>
      { mapProducts }
    </>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
  };
};

export default connect(null, mapDispatchToProps)(ProductsDetails);