import React, { Component } from "react";
import { removeItem, addQuantity, subtractQuantity, showCart } from '../../../actions/index';
import { connect } from 'react-redux';
import { 
  CartPreviewStyled,
  CartPreviewContainer,
  CartPreviewList,
  CartPreviewItemStyled,
  CartPreviewItemContainer,
  CartPreviewItemContent,
  CartPreviewTitle,
  CartPreviewImgWrapper,
  CartPreviewImg,
  CartPreviewButton,
  CartPreviewLink,
  CartPreviewButtonQuantity,
  CartPreviewTotal,
  CartPreviewClose,
} from "./CartPreviewStyled";

const CartPreviewItem = ({ title, id, image, quantity, removeItem, addQuantity, subtractQuantity }) => {
  return (
    <CartPreviewItemStyled>
      <CartPreviewItemContainer>
        <CartPreviewImgWrapper>
          <CartPreviewImg src={image} alt={title} />
        </CartPreviewImgWrapper>
        <CartPreviewItemContent>
          <CartPreviewTitle>{title}</CartPreviewTitle>
          <div>
            <CartPreviewButtonQuantity onClick={subtractQuantity}>-</CartPreviewButtonQuantity>
            {quantity}
            <CartPreviewButtonQuantity onClick={addQuantity}>+</CartPreviewButtonQuantity>
          </div>
        </CartPreviewItemContent>
      </CartPreviewItemContainer>
      <CartPreviewButton onClick={removeItem}>
        Remove from Cart
      </CartPreviewButton>
    </CartPreviewItemStyled>
  );
}

class CartPreview extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  handleRemove = (id) => {
    this.props.removeItem(id);
  }

  handleAddQuantity = (id) => {
    this.props.addQuantity(id);
  }

  handleSubtractQuantity = (id) => {
    this.props.subtractQuantity(id);
  }

  render() {
    const { addedItems, total, showCart, toggleCart } = this.props;

    let CartPreviewItems = addedItems.length ?
      (
        addedItems.map((product) => (
          <CartPreviewItem 
            key={product.id}
            image={product.images[0]}
            title={product.title}
            quantity={product.quantity}
            removeItem={()=>{this.handleRemove(product.id)}}
            addQuantity={()=>{this.handleAddQuantity(product.id)}}
            subtractQuantity={()=>{this.handleSubtractQuantity(product.id)}}
          />
        ))
      ) :
      (
        <p>Nothing in your Cart.</p>
      )

    let CartPreviewVar = showCart ?
      (
        <CartPreviewStyled>
          <CartPreviewClose
            onClick={toggleCart}
          >
            &times;
          </CartPreviewClose>
          <CartPreviewContainer>
            <CartPreviewTotal>
              Total: ${total}
            </CartPreviewTotal>
            <CartPreviewList>
              { CartPreviewItems }
            </CartPreviewList>
            { addedItems.length &&
              <CartPreviewLink href='#'>
                Checkout
              </CartPreviewLink>
            }
          </CartPreviewContainer>
        </CartPreviewStyled>
      ) :
      (
        <>
        </>
      )

    return (
      <>
        { CartPreviewVar }
      </>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    showCart: state.cart.showCart,
    addedItems: state.cart.addedItems,
    total: state.cart.total,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    toggleCart: ()=>{dispatch(showCart())},
    removeItem: (id)=>{dispatch(removeItem(id))},
    addQuantity: (id)=>{dispatch(addQuantity(id))},
    subtractQuantity: (id)=>{dispatch(subtractQuantity(id))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartPreview);