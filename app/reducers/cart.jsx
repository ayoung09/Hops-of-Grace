import axios from 'axios';

let initState = {
  currentCart: {},
}

//constants
const SET_ITEM_QTY = 'SET_ITEM_QTY';
const REMOVE_ITEM = 'REMOVE_ITEM';
const CLEAR_CART = 'CLEAR_CART';

//reducer
const cartReducer = (prevState = initState, action) => {
  const nextState = Object.assign({}, prevState);

  switch (action.type) {

    case SET_ITEM_QTY:
    	nextState.currentCart[action.itemId] = action.quantity;
      break;

    case REMOVE_ITEM:
      delete nextState.currentCart[action.itemId];
      break;

    case CLEAR_CART:
      nextState.currentCart = {};
      break;

    default:
    	return prevState;
    }

    return nextState;
 }

//action creators
export const setItemQty = (itemId, quantity) => {
  return {
    type: SET_ITEM_QTY,
    itemId,
    quantity
  }
};

export const removeItem = (itemId) => {
  return {
    type: REMOVE_ITEM,
    itemId
  }
};

export const clearCart = () => {
  return {
    type: CLEAR_CART
  }
}

export default cartReducer;
