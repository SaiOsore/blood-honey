import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { showCart } from '../../../actions/index';
import Button from '../../buttons/Button';

const CartBtn = ({ onClick }) => {

  const dispatch = useDispatch();

  const showCartHandler = useCallback(() => {
    dispatch(showCart());
  }, [dispatch]);

  return (
    <Button color={'black'} onClick={showCartHandler}>
      Cart
    </Button>
  );
}

export default CartBtn;