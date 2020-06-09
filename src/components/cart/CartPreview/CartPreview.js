import React, { Component } from "react";
import { removeItem, addQuantity, subtractQuantity } from '../../../actions/index';
import { connect } from 'react-redux';
import { 
  CartPreviewStyled, 
  CartPreviewList,
  CartPreviewItemStyled,
  CartPreviewItemContent,
  CartPreviewTitle,
  CartPreviewImgWrapper,
  CartPreviewImg
} from "./CartPreviewStyled";

const CartPreviewItem = ({ title, id, image, quantity, removeItem, addQuantity, subtractQuantity }) => {
  return (
    <CartPreviewItemStyled>
      <CartPreviewItemContent>
        <CartPreviewTitle>{title}</CartPreviewTitle>
        <button onClick={removeItem}>
          Удалить
        </button>
        <div>
          <button onClick={subtractQuantity}>-</button>
          {quantity}
          <button onClick={addQuantity}>+</button>
        </div>
      </CartPreviewItemContent>
      <CartPreviewImgWrapper>
        <CartPreviewImg src={image} />
      </CartPreviewImgWrapper>
    </CartPreviewItemStyled>
  );
}

class CartPreview extends Component {

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
    const { addedItems, total, clearStore } = this.props;
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
        <p>Nothing.</p>
      )

    return (
      <CartPreviewStyled>
        <div>{total}</div>
        <CartPreviewList>
          {CartPreviewItems}
        </CartPreviewList>
      </CartPreviewStyled>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    addedItems: state.cart.addedItems,
    total: state.cart.total
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