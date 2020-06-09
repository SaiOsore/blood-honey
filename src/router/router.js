import React from 'react';
import Home from "../containers/Home/Home";
import Shop from "../containers/Shop/Shop";
import Product from "../containers/Product/Product";

const Routes = {
  "/": () => <Home />,
  "/shop": () => <Shop />,
  "/product": () => <Product />
};

export default Routes;