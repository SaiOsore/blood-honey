import React from 'react';
import { addToCart } from '../../actions/index';
import { connect, useSelector } from 'react-redux';
import CartPreview from '../../components/cart/CartPreview/CartPreview';
import CartBtn from '../../components/cart/CartBtn/CartBtn';
import {
  ProductStyled,
  ProductContainer,
  ProducBlock,
  ImgWrapper,
  Img,
  Title
} from './ProductStyled';

const Product = ({ match, addToCart, addedItems } ) => {
  const productId = Number(match);
  const ProductDetails = useSelector(state => state.cart.items.find(item => item.id === productId));
  const { id, src, title, price, sizes, colors } = ProductDetails;

  const handleAddToCart = (itemId) => {
    addToCart(itemId);
  }

  let SizesItems = (typeof sizes === 'object') ?
    (
      sizes.map((size, index) => (
        <span key={index}>
          <label htmlFor={size + id}>{size}</label>
          <input type='radio' id={size + id} name="sizes"/>
        </span>
      ))
    ) :
    (
      <>
        <label htmlFor={sizes + id}>{sizes}</label>
        <input type='checkbox' id={sizes + id}/>
      </>
    )

  let ColorsItems = (typeof colors === 'object') ?
    (
      colors.map((color, index) => (
        <span key={index}>
          <label htmlFor={color + id}>{color}</label>
          <input type='radio' id={color + id} name="sizes"/>
        </span>
      ))
    ) :
    (
      <>
        <label htmlFor={colors + id}>{colors}</label>
        <input type='checkbox' id={colors + id}/>
      </>
    )

  return (
    <ProductStyled id={id}>
      <CartPreview products={addedItems} />
      <ProductContainer>
        <ProducBlock>
          <ImgWrapper>
            <Img src={src} alt={title} />
          </ImgWrapper>
        </ProducBlock>
        <ProducBlock>
          <Title>{title}</Title>
          <form>
            <div>${price}</div>
            <div>{SizesItems}</div>
            <div>{ColorsItems}</div>
            <button 
              onClick={() => {
                handleAddToCart(id);
              }}
            />
          </form>
        </ProducBlock>
      </ProductContainer>
    </ProductStyled>
  );
}

const mapStateToProps = (state) => {
  return {
    addedItems: state.cart.addedItems
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);