import {
  SIGN_IN,
  SIGN_OUT
} from '../constants/ActionsTypes';

const InitialState = {
  isLogged: false
}

const isLoggedReducer = (state = InitialState, action) => {
  switch(action.type) {
    case SIGN_IN :
      return true;
    case SIGN_OUT :
      return false;
    default :
      return false;
  }
}

export default isLoggedReducer;