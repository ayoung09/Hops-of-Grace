import axios from 'axios';

//Maybe document up here the structure of your state?
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
    //This logic is stinky and confusing
    //Helper function? Maybe itemInCart?
    	if (nextState.currentCart.hasOwnProperty(action.item)){
      		nextState.currentCart[action.item] += 1;
    	} else {
    		nextState.currentCart[action.item] = 1;
    	}
      break;
      // for click cart button, edit later

    case ADD_ITEM_FULL:
    //DRY
    	if (nextState.currentCart.hasOwnProperty(action.item[0])){
    		nextState.currentCart[action.item[0]] += +action.item[1];
    	} else {
      		nextState.currentCart[action.item[0]] = action.item[1];
      	}
      	break;
      // for full product page entry

    case EDIT_ITEM:
    //Why are the type coercion? Why is the action the wrong type?
      	nextState.currentCart[action.item[0]] += +action.item[1]; //list as positive or negative on + or - buttons
      	break;

    default:
    	return prevState;
    }

    return nextState;
 }


const GET_CART_START='GET_CART_START';
const ADD_ITEM='ADD_ITEM';
const ADD_ITEM_FULL='ADD_ITEM_FULL';
const EDIT_ITEM ='EDIT_ITEM';

//Where are the other action creators?
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

export default cartReducer;
