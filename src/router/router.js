import React from 'react';
import Home from "../containers/Home/Home";
import Shop from "../containers/Shop/Shop";
import Product from "../containers/Product/Product";
import About from "../containers/About/About";
import Contact from "../containers/Contact/Contact";
import Collections from "../containers/Collections/Collections";

const Routes = {
  "/": () => <Home />,
  "/shop": () => <Shop />,
  "/product/:id": ({id}) => <Product match={id} />,
  "/about": () => <About />,
  "/contact": () => <Contact />,
  "/collections": () => <Collections />,
};

export default Routes;