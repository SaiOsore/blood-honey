/*import React, { useEffect } from 'react';
import { addToCart, fetchProducts } from '../../actions/index';
import { connect, useSelector } from 'react-redux';
import CartPreview from '../../components/cart/CartPreview/CartPreview';
import CartBtn from '../../components/cart/CartBtn/CartBtn';
import {
  ProductStyled,
  ProductContainer,
  ProducBlock,
  ImgWrapper,
  Img,
  Title
} from './ProductStyled';

const Product = ({ match, addToCart, addedItems }) => {

  useEffect(() => {
    fetchProducts("https://saiosore.github.io/portfolio/test/products.json");
  });


  const productId = Number(match);
  const ProductDetails = useSelector(state => state.cart.items.find(item => item.id === productId));
  const { id, src, title, price, sizes, colors } = ProductDetails;

  const handleAddToCart = (itemId) => {
    addToCart(itemId);
  }

  let SizesItems = (typeof sizes === 'object') ?
    (
      sizes.map((size, index) => (
        <span key={index}>
          <label htmlFor={size + id}>{size}</label>
          <input type='radio' id={size + id} name="sizes"/>
        </span>
      ))
    ) :
    (
      <>
        <label htmlFor={sizes + id}>{sizes}</label>
        <input type='checkbox' id={sizes + id}/>
      </>
    )

  let ColorsItems = (typeof colors === 'object') ?
    (
      colors.map((color, index) => (
        <span key={index}>
          <label htmlFor={color + id}>{color}</label>
          <input type='radio' id={color + id} name="sizes"/>
        </span>
      ))
    ) :
    (
      <>
        <label htmlFor={colors + id}>{colors}</label>
        <input type='checkbox' id={colors + id}/>
      </>
    )

  return (
    <ProductStyled id={id}>
      <CartPreview products={addedItems} />
      <ProductContainer>
        <ProducBlock>
          <ImgWrapper>
            <Img src={src} alt={title} />
          </ImgWrapper>
        </ProducBlock>
        <ProducBlock>
          <Title>{title}</Title>
          <div>
            <div>${price}</div>
            <div>{SizesItems}</div>
            <div>{ColorsItems}</div>
            <button 
              onClick={() => {
                handleAddToCart(id);
              }}
            />
          </div>
        </ProducBlock>
      </ProductContainer>
    </ProductStyled>
  );
}

const mapStateToProps = (state) => {
  return {
    addedItems: state.cart.addedItems
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);*/

import React, { useEffect } from 'react';
import { addToCart, fetchProducts } from '../../actions/index';
import { connect, useSelector } from 'react-redux';
import CartPreview from '../../components/cart/CartPreview/CartPreview';
import CartBtn from '../../components/cart/CartBtn/CartBtn';
import {
  ProductStyled,
  ProductContainer,
  ProducBlock,
  ImgWrapper,
  Img,
  Title
} from './ProductStyled';

class Product extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount() {
    this.props.fetchProducts();
  }

  handleAddToCart = (itemId) => {
    addToCart(itemId);
  }

  render() {
    const { items, match, error, loading, addedItems } = this.props;
    const productId = Number(match);
    console.log(items);

    const ProductDetails = items.find(item => item.id === productId);
    const { id, src, title, price, sizes, colors } = ProductDetails;

    console.log(id);

    if (error) {
      return <div>Error! {error.message}</div>;
    }

    if (loading) {
      return <div>Loading...</div>;
    }

    return (
      <ProductStyled id={id}>
        <CartPreview products={addedItems} />
        <ProductContainer>
          <ProducBlock>
            <ImgWrapper>
              <Img src={src} alt={title} />
            </ImgWrapper>
          </ProducBlock>
          <ProducBlock>
            <Title>{title}</Title>
            <div>
              <div>${price}</div>
              <div>{}</div>
              <div>{}</div>
              <button 
                onClick={() => {
                  this.handleAddToCart(id);
                }}
              />
            </div>
          </ProducBlock>
        </ProductContainer>
      </ProductStyled>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.cart.items,
    addedItems: state.cart.addedItems
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProducts: (id) => dispatch(fetchProducts("https://saiosore.github.io/portfolio/test/products.json")),
    addToCart: (id) => dispatch(addToCart(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);