import React from 'react';
import ProductsPreview from '../../components/products/ProductsPreview/ProductsPreview';
import ShopNav from '../../components/shop/ShopNav/ShopNav';
import Footer from '../../components/footer/Footer';
import { sortByPrice, sortByAlphabet, filter } from '../../actions/index';
import { connect } from 'react-redux';
import { ShopStyled, ShopAside, ShopProductsContainer } from './ShopStyled';

const arr = [
  {
    title: 'Categories',
    type: 'category',
    list: [
      {
        title: 'Coats',
      },
      {
        title: 'Hats',
      },
    ],
  },
  {
    title: 'Collections',
    type: 'collection',
    list: [
      {
        title: 'Fire',
      },
      {
        title: 'Cold',
      },
    ],
  },
];

class Shop extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      direction: 'asc',
      filterValue: '',
    };
  }

  render() {
    const {
      items, 
      error, 
      loading, 
      sortByPrice, 
      sortByAlphabet, 
      filter, 
      filteredItems, 
    } = this.props;

    const { 
      direction, 
      filterValue, 
    } = this.state;

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

    const filterHandler = (value, type) => {
      this.setState((state) => {
        return { 
          filterValue: value
        };
      });
      filter({value, type});
    }

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
            <ShopNav
              blocks={arr}
              sortByPrice={sortByPriceHandler}
              sortByAlphabet={sortByAlphabetHandler}
              filterBy={(name, type) => {
                filterHandler(name, type);
              }}
              filter={(e) => {
                let value = e.target.value;
                filterHandler(value, 'title || price');
              }}
            />
          </ShopAside>
          <ShopProductsContainer>
            {
              filterValue.length ? 
              <ProductsPreview products={filteredItems} /> :
              <ProductsPreview products={items} />
            }
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
    error: state.cart.error,
    filteredItems: state.cart.filteredItems
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    sortByPrice: (direction) => dispatch(sortByPrice(direction)),
    sortByAlphabet: (direction) => dispatch(sortByAlphabet(direction)),
    filter: (payload) => dispatch(filter(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Shop);