import axios from 'axios';

let initState = {
  currentCart: {},
}

//constants
const GET_CART_START = 'GET_CART_START';
const ADD_ITEM = 'ADD_ITEM';
const ADD_ITEM_FULL = 'ADD_ITEM_FULL';
const EDIT_ITEM = 'EDIT_ITEM';

//reducer
const cartReducer = (prevState = initState, action) => {
  const nextState = Object.assign({}, prevState);

  switch (action.type) {
    case GET_CART_START:
      nextState.currentCart = action.cart;
      break;

    case ADD_ITEM:
    	if (nextState.currentCart.hasOwnProperty(action.item)){
      		nextState.currentCart[action.item] += action.quantity;
    	} else {
    		nextState.currentCart[action.item] = action.quantity;
    	}
      break;

    case ADD_ITEM_FULL:
    	if (nextState.currentCart.hasOwnProperty(action.item[0])){
    		nextState.currentCart[action.item[0]] += +action.item[1];
    	} else {
      		nextState.currentCart[action.item[0]] = action.item[1];
      	}
      	break;

    case EDIT_ITEM:
      	nextState.currentCart[action.item[0]] += +action.item[1]; //list as positive or negative on + or - buttons
      	break;

    default:
    	return prevState;
    }

    return nextState;
 }


//action creators
export const getCartStart = (() => {
  return {
    type: GET_CART_START,
    cart: {}
  }

});

export const addItem = (item, quantity) => {
  return {
    type: ADD_ITEM,
    item,
    quantity
  }

};

export default cartReducer;
