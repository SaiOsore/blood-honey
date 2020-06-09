import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../../actions/index';
import ProductPreview from '../ProductPreview/ProductPreview';
import { ProductsPreviewStyled } from './ProductsPreviewStyled';

const ProductsPreview = ({products, addToCart}) => {

  const handleAddToCart = (id)=>{
    addToCart(id);
  }

  const mapProducts = products.map((product, index) => (
    <ProductPreview 
      key={index}
      id={product.id}
      src={product.src}
      title={product.title}
      price={product.price}
      sizes={product.sizes}
      colors={product.colors}
      onClick={() => {
        handleAddToCart(product.id);
      }}
    />
  ));

  return (
    <ProductsPreviewStyled>
      {mapProducts}
    </ProductsPreviewStyled>
  );
}

const mapStateToProps = (state) => {
  return {
    addedItems: state.cart.addedItems,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsPreview);