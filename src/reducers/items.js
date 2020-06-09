import {
  DEFAULT_STATE,
} from '../constants/ActionsTypes';
import { Products } from '../data/Products';

const initialState = Products;

const defaultState = [];

const itemsReducer = (state = Products, action) => {
  switch(action.type) {
    case DEFAULT_STATE :
      return defaultState;
    default :
      return state;
  }
}

export default itemsReducer;