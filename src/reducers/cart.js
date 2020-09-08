/*
  All the logic for the cart reducer is stored in this file. 
  Main tasks: Deleting a product, 
              Adding a product, 
              Calculating the cost of all products, 
              Calculating the number of identical products.
*/

import {
  ADD_TO_CART,
  REMOVE_ITEM,
  ADD_QUANTITY,
  SUB_QUANTITY,
  ADD_SHIPPING,
  SUB_SHIPPING,
  SHOW_CART,
  DEFAULT_STATE
} from '../constants/ActionsTypes';
import { Products } from '../data/Products';

const initialState = {
  items: Products,
  addedItems: [],
  total: 0,
  showCart: false,
}

const defaultState = {
  items: [],
  addedItems: [],
  total: 0,
  showCart: false,
};

const cartReducer = (state = initialState, action) => {
  switch(action.type) {
    case SHOW_CART :
      return {
        ...state,
        showCart: !state.showCart
      };

    case ADD_TO_CART :
      let addedItem = state.items.find(item => item.id === action.id);
      let existedItem = state.addedItems.find(item => action.id === item.id);

      if(existedItem) {
        /*If item exists - сreate a new array with the changed object value: quantity + 1*/
        const newAddedItems = state.addedItems.map(item => {
          if(item.id === addedItem.id) {
            addedItem.quantity += 1;
            return addedItem;
          }
          return item;
        });
        /*Calculate new total*/
        let newTotal = state.total + addedItem.price;
        return {
          ...state,
          addedItems: newAddedItems,
          total: newTotal,
        }
      } else {
        /*If item is new - just added it to our array*/
        addedItem.quantity = 1;
        /*Calculate new total*/
        let newTotal = state.total + addedItem.price;
        return {
          ...state,
          addedItems: [...state.addedItems, addedItem],
          total: newTotal
        }
      }

    case REMOVE_ITEM :
      let itemToRemove = state.addedItems.find(item => action.id === item.id);
      let newItems = state.addedItems.filter(item => action.id !== item.id);
      /*Calculate new total*/
      let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity);
      return{
        ...state,
        addedItems: newItems,
        total: newTotal
      }

    case ADD_QUANTITY :
      /*Find the item*/
      let addedQuantityItem = state.items.find(item => item.id === action.id);
      /*If item exists - сreate a new array with the changed object value: quantity*/
      const newAddedItems = state.addedItems.map(item => {
        if(item.id === addedQuantityItem.id) {
          addedQuantityItem.quantity += 1;
          return addedQuantityItem;
        }
        return item;
      });
      /*Calculate new total*/
      let addedQuantityTotal = state.total + addedQuantityItem.price;
      return {
        ...state,
        addedItems: newAddedItems,
        total: addedQuantityTotal
      }

    case SUB_QUANTITY :
      /*Find the item*/
      let subQuantityItem = state.items.find(item=> item.id === action.id);
      let subQuantityTotal;
      /*If item quantity === 1, delete this item from array*/
      if(subQuantityItem.quantity === 1) {
        let newItems = state.addedItems.filter(item => item.id !== action.id);
        subQuantityTotal = state.total - subQuantityItem.price;
        return {
          ...state,
          addedItems: newItems,
          total: subQuantityTotal
        }
      } else {
        /*If item exists - сreate a new array with the changed object value: quantity - 1*/
        const newSubQuantityItems = state.addedItems.map(item => {
          if(item.id === subQuantityItem.id) {
            subQuantityItem.quantity -= 1;
            return subQuantityItem;
          }
          return item;
        });
        /*Calculate new total*/
        subQuantityTotal = state.total - subQuantityItem.price;
        return{
          ...state,
          addedItems: newSubQuantityItems,
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