import React from 'react';
import { useRoutes } from 'hookrouter';
import Routes from './router/router';

import { GlobalStyle } from './theme/global';
import Container from './components/layouts/Container';
import Header from './components/header/Header';
import CartPreview from './components/cart/CartPreview/CartPreview';
import { PathLabel } from './helpers/helpers';

const App = () => {
  const routeResult = useRoutes(Routes)
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

export default App;