import { 
  ADD_TO_CART,
  REMOVE_ITEM,
  SUB_QUANTITY,
  ADD_QUANTITY,
  INCREMENT,
  DECREMENT,
  SIGN_IN,
  SIGN_OUT,
  DEFAULT_STATE
} from '../constants/ActionsTypes'

export const addToCart = (id) => {
  return {
    type: ADD_TO_CART,
    id
  }
}

export const removeItem = (id) => {
  return {
    type: REMOVE_ITEM,
    id
  }
}

export const subtractQuantity = (id) => {
  return {
    type: SUB_QUANTITY,
    id
  }
}

export const addQuantity = (id) => {
  return {
    type: ADD_QUANTITY,
    id
  }
}

export const increment = (num) => {
  return {
    type: INCREMENT,
    payload: num
  }
}

export const decrement = (num) => {
  return {
    type: DECREMENT,
    payload: num
  }
}


export const login = () => {
  return {
    type: SIGN_IN,
  }
}

export const logout = () => {
  return {
    type: SIGN_OUT,
  }
}

export const clearStore = () => {
  return {
    type: DEFAULT_STATE,
  }
}