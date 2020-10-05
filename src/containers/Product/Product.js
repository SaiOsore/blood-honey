import React, { useState, useEffect, useCallback } from 'react';
import { addToCart, fetchProducts } from '../../actions/index';
import { connect, useDispatch } from 'react-redux';
import Content from '../../components/layouts/Content';
import ProductDetails from '../../components/products/ProductDetails/ProductDetails';

const fetchURL = "https://saiosore.github.io/portfolio/test/products.json";

const Product = ({ match, addToCart, addedItems, fetchProducts, loading, error }) => {

  const productId = Number(match);
  const [productDetails, setProductDetails] = useState(undefined);
  const [items, setItems] = useState([]);
  const dispatch = useDispatch();
  let template;

  const fetchItems = useCallback(() => (
    dispatch(fetchProducts(fetchURL))
  ), [dispatch]);

  useEffect(() => {
    fetchMyAPI();
  }, [fetchProducts]);

  const fetchMyAPI = useCallback(async () => {
    fetchItems();
    let response = await fetch(fetchURL);
    response = await response.json();
    setItems(response);
    for(let key in response) {
      setProductDetails(response[key].find(item => item.id === productId));
    };
  }, [items]);

  const handleAddToCart = (itemId) => {
    addToCart(itemId);
  }

  if(productDetails) {
    const { id, src, title, price } = productDetails;
    template =  <ProductDetails
                  id={id}
                  src={src}
                  title={title}
                  price={price}
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