import React from 'react';
import ProductsPreview from '../../components/products/ProductsPreview/ProductsPreview';
import ShopNav from '../../components/nav/ShopNav/ShopNav';
import CartPreview from '../../components/cart/CartPreview/CartPreview';
import { connect } from 'react-redux';
import { increment, decrement } from '../../actions/index';
import { ShopStyled, ShopAside, ShopProductsContainer } from './ShopStyled';

class Shop extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const {counter, increment, decrement, items, addedItems} = this.props;

    return (
      <>
        <div>
          <button onClick={increment}>
            Increment
          </button>
          <button onClick={decrement}>
            Decrement
          </button>
          <h2>{counter}</h2>
        </div>
        <ShopStyled>
          <ShopAside>
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
    counter: state.counter,
    items: state.cart.items,
    addedItems: state.cart.addedItems
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch(increment(10)),
    decrement: () => dispatch(decrement(5)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Shop);