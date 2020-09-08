import React from 'react';
import ProductsPreview from '../../components/products/ProductsPreview/ProductsPreview';
import ShopNav from '../../components/nav/ShopNav/ShopNav';
import CartPreview from '../../components/cart/CartPreview/CartPreview';
import CartBtn from '../../components/cart/CartBtn/CartBtn';
import { connect } from 'react-redux';
import { ShopStyled, ShopAside, ShopProductsContainer } from './ShopStyled';

class Shop extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const { items, addedItems } = this.props;

    return (
      <>
        <ShopStyled>
          <ShopAside>
            <CartBtn />
            <ShopNav />
            <CartPreview products={addedItems} />
          </ShopAside>
          <ShopProductsContainer>
            <ProductsPreview products={items} />
          </ShopProductsContainer>
        </ShopStyled>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.cart.items,
    addedItems: state.cart.addedItems
  };
};

export default connect(mapStateToProps)(Shop);