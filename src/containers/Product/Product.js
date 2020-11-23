import React, { useState, useEffect, useCallback } from 'react';
import { addToCart, fetchProducts } from '../../actions/index';
import { connect } from 'react-redux';
import Content from '../../components/layouts/Content';
import { productsURL } from '../../data/API';
import ProductDetails from '../../components/products/ProductDetails/ProductDetails';

const Product = ({ match, addToCart, addedItems, fetchProducts, loading, error, items }) => {

  const productId = Number(match);
  const [productDetails, setProductDetails] = useState(undefined);
  let template;

  /*do second fetch because we need to find item.id after page refresh*/
  const fetchMyAPI = useCallback(async () => {
    let response = await fetch(productsURL);
    response = await response.json();
    for(let key in response) {
      setProductDetails(response[key].find(item => item.id === productId));
    };
  }, []);

  useEffect(() => {
    fetchMyAPI();
  }, []);

  const handleAddToCart = (itemId) => {
    addToCart(itemId);
  }

  if(productDetails) {
    const { 
      id, 
      src, 
      title, 
      price, 
      material, 
      sizeTable, 
    } = productDetails;
    template =  <ProductDetails
                  id={id}
                  src={src}
                  title={title}
                  price={price}
                  material={material}
                  sizeTable={sizeTable}
                  onClick={() => {
                    handleAddToCart(id);
                  }}
                />
  } else {
    template = <p>Can't find this product</p>
  }

  return (
    <Content>
      { template }
    </Content>
  );
}

const mapStateToProps = (state) => {
  return {
    items: state.cart.items,
    addedItems: state.cart.addedItems,
    loading: state.cart.loading,
    error: state.cart.error
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
    fetchProducts: (url) => fetchProducts(url)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);