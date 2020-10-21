import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { showCart } from '../../../actions/index';
import { 
  Quantity,
  CartButton
} from './CartBtnStyled';

const CartBtn = ({ color, textTransform, display }) => {

  const dispatch = useDispatch();

  const showCartHandler = useCallback(() => {
    dispatch(showCart());
  }, [dispatch]);

  return (
    <CartButton 
      display={display}
      color={color}
      onClick={showCartHandler}
      textTransform={textTransform}
     >
      Cart
      <Quantity>0</Quantity>
    </CartButton>
  );
}

export default CartBtn;

