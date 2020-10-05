import React from 'react';
import ProductsPreview from '../../components/products/ProductsPreview/ProductsPreview';
import ShopNav from '../../components/nav/ShopNav/ShopNav';
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
    const { items, error, loading } = this.props;

    if(error) {
      return <div>Error! {error.message}</div>;
    }

    if(loading) {
      return <div>Loading...</div>;
    }

    return (
      <>
        <ShopStyled>
          <ShopAside>
            <ShopNav />
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
    loading: state.cart.loading,
    error: state.cart.error
  };
};

export default connect(mapStateToProps)(Shop);