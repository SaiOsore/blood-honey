/*
  All the logic for the cart reducer is stored in this file. 
  Main tasks:
    Deleting a product,
    Adding a product,
    Calculating the cost of all products,
    Calculating the number of identical products.
*/

import {
  ADD_TO_CART,
  REMOVE_ITEM,
  ADD_QUANTITY,
  SUB_QUANTITY,
  SHOW_CART,
  FETCH_PRODUCTS_BEGIN,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  DEFAULT_STATE,
} from '../constants/ActionsTypes';

const initialState = {
  items: [],
  addedItems: [],
  total: 0,
  productsTotal: 0,
  showCart: false,
  loading: false,
  error: null,
}

const defaultState = {
  items: [],
  addedItems: [],
  total: 0,
  productsTotal: 0,
  showCart: false,
  loading: false,
  error: null,
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
        let newProductsTotal = state.productsTotal + 1;
        return {
          ...state,
          addedItems: newAddedItems,
          total: newTotal,
          productsTotal: newProductsTotal
        }
      } else {
        /*If item is new - just added it to our array*/
        addedItem.quantity = 1;
        /*Calculate new total*/
        let newTotal = state.total + addedItem.price;
        let newProductsTotal = state.productsTotal + 1;
        return {
          ...state,
          addedItems: [...state.addedItems, addedItem],
          total: newTotal,
          productsTotal: newProductsTotal
        }
      }

    case REMOVE_ITEM :
      let itemToRemove = state.addedItems.find(item => action.id === item.id);
      let newItems = state.addedItems.filter(item => action.id !== item.id);
      /*Calculate new total*/
      let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity);
      let newProductsTotal = state.productsTotal - itemToRemove.quantity;
      return{
        ...state,
        addedItems: newItems,
        total: newTotal,
        productsTotal: newProductsTotal
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
      let newAddedQuantityProductsTotal = state.productsTotal + 1;
      return {
        ...state,
        addedItems: newAddedItems,
        total: addedQuantityTotal,
        productsTotal: newAddedQuantityProductsTotal
      }

    case SUB_QUANTITY :
      /*Find the item*/
      let subQuantityItem = state.items.find(item=> item.id === action.id);
      let subQuantityTotal;
      let newSubQuantityProductsTotal;
      /*If item quantity === 1, delete this item from array*/
      if(subQuantityItem.quantity === 1) {
        let newItems = state.addedItems.filter(item => item.id !== action.id);
        subQuantityTotal = state.total - subQuantityItem.price;
        newSubQuantityProductsTotal = state.productsTotal - 1;
        return {
          ...state,
          addedItems: newItems,
          total: subQuantityTotal,
          productsTotal: newSubQuantityProductsTotal
        }
      } else {
        /*If item exists - сreate a new array with the changed object value: quantity - 1*/
        const newSubQuantityItems = state.addedItems.map(item => {
          if(item.id === subQuantityItem.id) {
            subQuantityItem.quantity = subQuantityItem.quantity - 1;
            return subQuantityItem;
          }
          return item;
        });
        /*Calculate new total*/
        subQuantityTotal = state.total - subQuantityItem.price;
        newSubQuantityProductsTotal = state.productsTotal - 1;
        return{
          ...state,
          addedItems: newSubQuantityItems,
          total: subQuantityTotal,
          productsTotal: newSubQuantityProductsTotal
        }
      }

    case FETCH_PRODUCTS_BEGIN :
      /*Mark the state as "loading" so we can show a spinner or something
      Reset any errors. We're starting fresh.*/
      return {
        ...state,
        loading: true,
        error: null
      };

    case FETCH_PRODUCTS_SUCCESS :
      /*All done: set loading "false".
      Also, replace the items with the ones from the server*/
      return {
        ...state,
        loading: false,
        items: action.payload.products
      };

    case FETCH_PRODUCTS_FAILURE :
      // The request failed. It's done. So set loading to "false".
      // Save the error, so we can display it somewhere.
      // Since it failed, we don't have items to display anymore, so set `items` empty.
      //
      // This is all up to you and your app though:
      // maybe you want to keep the items around!
      // Do whatever seems right for your use case.
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        items: []
      };

    case DEFAULT_STATE :
      return defaultState;

    default :
      return state;
  }
}


export default cartReducer;