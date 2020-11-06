import React from 'react';
import ProductsPreview from '../../components/products/ProductsPreview/ProductsPreview';
import ShopNav from '../../components/nav/ShopNav/ShopNav';
import { sortByPrice, sortByAlphabet } from '../../actions/index';
import { connect } from 'react-redux';
import { ShopStyled, ShopAside, ShopProductsContainer } from './ShopStyled';

class Shop extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      direction: 'asc',
    };
  }

  render() {
    const { items, error, loading, sortByPrice, sortByAlphabet } = this.props;
    let { direction } = this.state;

    if(error) {
      return <div>Error! {error.message}</div>;
    }

    if(loading) {
      return <div>Loading...</div>;
    }

    const updateDirection = (direction) => {
      let newDirection = direction === 'asc' ? 'desc' : 'asc';
      this.setState((state) => {
        return { 
          direction: newDirection
        };
      });
    }

    const sortByPriceHandler = () => {
      sortByPrice(direction);
      updateDirection(direction);
    }

    const sortByAlphabetHandler = () => {
      sortByAlphabet(direction);
      updateDirection(direction)
    }

    return (
      <>
        <ShopStyled>
          <ShopAside>
            <ShopNav 
              sortByPrice={sortByPriceHandler}
              sortByAlphabet={sortByAlphabetHandler}
            />
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

const mapDispatchToProps = (dispatch) => {
  return {
    sortByPrice: (direction) => dispatch(sortByPrice(direction)),
    sortByAlphabet: (direction) => dispatch(sortByAlphabet(direction)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Shop);