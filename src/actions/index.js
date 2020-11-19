import { 
  ADD_TO_CART,
  REMOVE_ITEM,
  GET_ITEM,
  SHOW_CART,
  SUB_QUANTITY,
  ADD_QUANTITY,
  INCREMENT,
  DECREMENT,
  SIGN_IN,
  SIGN_OUT,
  FETCH_PRODUCTS_BEGIN,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  DEFAULT_STATE,
  SORT_BY_ALPHABET,
  SORT_BY_PRICE,
  FILTER,
  LOAD_NEW_PAGE,
  LOAD_EXACT_PAGE,
} from '../constants/ActionsTypes';

export const showCart = () => {
  return {
    type: SHOW_CART
  }
}

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

export const getItem = (id) => {
  return {
    type: GET_ITEM,
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

export const fetchProductsBegin = () => ({
  type: FETCH_PRODUCTS_BEGIN
});

export const fetchProductsSuccess = (products) => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: { products }
});

export const fetchProductsFailure = (error) => ({
  type: FETCH_PRODUCTS_FAILURE,
  payload: { error }
});

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

export function fetchProducts(url) {
  return dispatch => {
    dispatch(fetchProductsBegin());
    return fetch(url)
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        console.log('fetched success');
        dispatch(fetchProductsSuccess(json.Products));
        return json.Products;
      })
      .catch(error => dispatch(fetchProductsFailure(error)));
  };
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

export const sortByPrice = (payload) => ({
  type: SORT_BY_PRICE,
  payload
});

export const filter = (payload) => ({
  type: FILTER,
  payload
});

export const sortByAlphabet = (payload) => ({
  type: SORT_BY_ALPHABET,
  payload
});

export const loadNewPage = (payload) => ({
  type: LOAD_NEW_PAGE,
  payload
});

export const loadExactPage = (payload) => ({
  type: LOAD_EXACT_PAGE,
  payload
});