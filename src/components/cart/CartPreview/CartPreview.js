import React, { Component } from "react";
import { removeItem, addQuantity, subtractQuantity } from '../../../actions/index';
import { connect } from 'react-redux';
import { 
  CartPreviewStyled, 
  CartPreviewList,
  CartPreviewItemStyled,
  CartPreviewItemContainer,
  CartPreviewItemContent,
  CartPreviewTitle,
  CartPreviewImgWrapper,
  CartPreviewImg,
  CartPreviewButton,
  CartPreviewButtonQuantity,
  CartPreviewTotal
} from "./CartPreviewStyled";

const CartPreviewItem = ({ title, id, image, quantity, removeItem, addQuantity, subtractQuantity }) => {
  return (
    <CartPreviewItemStyled>
      <CartPreviewItemContainer>
        <CartPreviewImgWrapper>
          <CartPreviewImg src={image} />
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
    const { addedItems, total, showCart, clearStore } = this.props;

    let CartPreviewItems = addedItems.length ?
      (
        addedItems.map((product) => (
          <CartPreviewItem 
            key={product.id}
            image={product.src}
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
          <CartPreviewTotal>
            Total: ${total}
          </CartPreviewTotal>
          <CartPreviewList>
            {CartPreviewItems}
          </CartPreviewList>
        </CartPreviewStyled>
      ) :
      (
        <CartPreviewStyled>
        </CartPreviewStyled>
      )

    return (
      <>
        {CartPreviewVar}
      </>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    addedItems: state.cart.addedItems,
    total: state.cart.total,
    showCart: state.cart.showCart
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    removeItem: (id)=>{dispatch(removeItem(id))},
    addQuantity: (id)=>{dispatch(addQuantity(id))},
    subtractQuantity: (id)=>{dispatch(subtractQuantity(id))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartPreview);