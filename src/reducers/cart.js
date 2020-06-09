import {
  ADD_TO_CART,
  REMOVE_ITEM,
  ADD_QUANTITY,
  SUB_QUANTITY,
  ADD_SHIPPING,
  SUB_SHIPPING,
  DEFAULT_STATE
} from '../constants/ActionsTypes';
import { Products } from '../data/Products';

const initialState = {
  items: Products,
  addedItems: [],
  total: 0,
}

const defaultState = {
  items: [],
  addedItems: [],
  total: 0,
};

const cartReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_TO_CART :
      let addedItem = state.items.find(item => item.id === action.id);
      let existedItem = state.addedItems.find(item => action.id === item.id);
      if(existedItem) {
        addedItem.quantity += 1;
        return {
          ...state,
          total: state.total + addedItem.price 
        }
      } else {
        addedItem.quantity = 1;
        let newTotal = state.total + addedItem.price;
        
        return {
          ...state,
          addedItems: [...state.addedItems, addedItem],
          total: newTotal
        }
      }

    case REMOVE_ITEM :
      let itemToRemove= state.addedItems.find(item=> action.id === item.id);
      let newItems = state.addedItems.filter(item=> action.id !== item.id);
      let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity );
      return{
        ...state,
        addedItems: newItems,
        total: newTotal
      }

    case ADD_QUANTITY :
      let addedQuantityItem = state.items.find(item => item.id === action.id);
      addedQuantityItem.quantity += 1;
      let addedQuantityTotal = state.total + addedQuantityItem.price;
      return {
        ...state,
        total: addedQuantityTotal
      }

    case SUB_QUANTITY :
      let subQuantityItem = state.items.find(item=> item.id === action.id);
      let subQuantityTotal;
      if(subQuantityItem.quantity === 1) {
        let new_items = state.addedItems.filter(item => item.id !== action.id);
        subQuantityTotal = state.total - subQuantityItem.price;
        return {
          ...state,
          addedItems: new_items,
          total: subQuantityTotal
        }
      } else {
        subQuantityItem.quantity -= 1;
        subQuantityTotal = state.total - subQuantityItem.price;
        return{
          ...state,
          total: subQuantityTotal
        }
      }

    case DEFAULT_STATE :
      return defaultState;

    default :
      return state;
  }
}

export default cartReducer;