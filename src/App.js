import React, { useEffect } from 'react';
import { useRoutes } from 'hookrouter';
import Routes from './router/router';

import { GlobalStyle } from './theme/global';
import Container from './components/layouts/Container';
import Header from './components/header/Header';
import CartPreview from './components/cart/CartPreview/CartPreview';
import { PathLabel } from './helpers/helpers';
import { connect, useDispatch } from 'react-redux';
import { fetchProducts } from './actions/index';
import { productsURL } from './data/API';

const App = ({ fetchProducts }) => {
  const routeResult = useRoutes(Routes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts(productsURL))
  }, [dispatch, fetchProducts]);


  return (
    <div className="App">
      <Header className={PathLabel('/', 'home')} />
      <Container className={PathLabel('/', 'home')} >
        <GlobalStyle />
        <CartPreview />
        {routeResult}
      </Container>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    items: state.cart.items,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProducts: (url) => fetchProducts(url)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);