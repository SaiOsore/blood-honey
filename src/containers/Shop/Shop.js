import React from 'react';
import ProductsPreview from '../../components/products/ProductsPreview/ProductsPreview';
import ShopNav from '../../components/nav/ShopNav/ShopNav';
import CartPreview from '../../components/cart/CartPreview/CartPreview';
import CartBtn from '../../components/cart/CartBtn/CartBtn';
import { connect } from 'react-redux';
import { fetchProducts } from '../../actions/index';
import { ShopStyled, ShopAside, ShopProductsContainer } from './ShopStyled';

class Shop extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount() {
    this.props.dispatch(fetchProducts("https://saiosore.github.io/portfolio/test/products.json"));
  }

  render() {
    const { items, addedItems, error, loading } = this.props;

    if (error) {
      return <div>Error! {error.message}</div>;
    }

    if (loading) {
      return <div>Loading...</div>;
    }

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
    addedItems: state.cart.addedItems,
    loading: state.cart.loading,
    error: state.cart.error
  };
};

export default connect(mapStateToProps)(Shop);