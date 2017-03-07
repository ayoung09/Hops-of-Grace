import axios from 'axios';

let initState={
  currentCart : {}, //load all and update
}

const cartReducer = (prevState = initState, action) => {
  let nextState = Object.assign({}, prevState);

  switch(action.type) {
    case GET_CART_START:
      nextState.currentCart = action.cart;
      break;

    case ADD_ITEM:
    	if (nextState.currentCart.hasOwnProperty(action.item)){
      		nextState.currentCart[action.item] += 1;
    	} else {
    		nextState.currentCart[action.item] = 1;
    	}
      break;
      // for click cart button, edit later

    case SUBTRACT_ITEM:
      if (nextState.currentCart.hasOwnProperty(action.item)){
          nextState.currentCart[action.item] -= 1;
      } else {
        nextState.currentCart[action.item] = 0;
      }
      break;
      // for click cart button, edit later


    case EDIT_ITEM:
      	nextState.currentCart[action.item[0]] += +action.item[1]; //list as positive or negative on + or - buttons
      	break;

    default:
    	return prevState;
    }

    return nextState;
 }


const GET_CART_START='GET_CART_START';
const ADD_ITEM='ADD_ITEM';
const SUBTRACT_ITEM='SUBTRACT_ITEM';
const EDIT_ITEM ='EDIT_ITEM';


export const getCartStart = (() => {
  return {
    type: GET_CART_START,
    cart: {}
  }

});

export const addItem = (item => {
  return {
    type: ADD_ITEM,
    item
  }

});

export const subtractItem = (item => {
  return {
    type: SUBTRACT_ITEM,
    item
  }

});

export default cartReducer;
