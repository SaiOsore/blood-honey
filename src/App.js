import React, { useEffect } from 'react';
import { useRoutes, usePath } from 'hookrouter';
import Routes from './router/router';

import { GlobalStyle } from './theme/global';
import Container from './components/layouts/Container';
import Wrapper from './components/layouts/Wrapper';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import CartPreview from './components/cart/CartPreview/CartPreview';
import { PathLabel } from './helpers/helpers';
import { connect, useDispatch } from 'react-redux';
import { fetchProducts } from './actions/index';
import { productsURL } from './data/API';

const App = ({ fetchProducts }) => {
  const routeResult = useRoutes(Routes);
  const dispatch = useDispatch();
  const path = usePath();
  
  let footerPath = true;
  if(path === '/') {
    footerPath = false;
  }

  useEffect(() => {
    dispatch(fetchProducts(productsURL))
  }, [dispatch, fetchProducts]);

  return (
    <Wrapper className="App">
      <Header className={PathLabel('/', 'home')} />
      <Container className={PathLabel('/', 'home')} >
        <GlobalStyle />
        <CartPreview />
        {routeResult}
      </Container>
      { footerPath && <Footer /> }
    </Wrapper>
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