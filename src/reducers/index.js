import counterReducer from './counter';
import isLoggedReducer from './isLogged';
import cartReducer from './cart';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
  counter: counterReducer,
  logged: isLoggedReducer,
  cart: cartReducer,
})

export default allReducers;