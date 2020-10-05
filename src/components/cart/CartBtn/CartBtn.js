import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { showCart } from '../../../actions/index';
import Button from '../../buttons/Button';

const CartBtn = ({ color, textTransform, display }) => {

  const dispatch = useDispatch();

  const showCartHandler = useCallback(() => {
    dispatch(showCart());
  }, [dispatch]);

  return (
    <Button 
      display={display}
      color={color}
      onClick={showCartHandler}
      textTransform={textTransform}
     >
      Cart
    </Button>
  );
}

export default CartBtn;