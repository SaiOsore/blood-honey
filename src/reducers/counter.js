import {
  INCREMENT,
  DECREMENT
} from '../constants/ActionsTypes';

const InitialState = 0;

const counterReducer = (state = InitialState, action) => {
  switch(action.type) {
    case INCREMENT :
      if(action.payload) return state + action.payload
      return state + 1
    case DECREMENT :
      if(action.payload) return state - action.payload
      return state - 1
    default :
      return state;
  }
}

export default counterReducer;