import axios from 'axios';

let initState={
  currentFavs : [], //load all and update - anything w/ heart...make up 5-star conversion;
  userReviews : [],

}

const reviewReducer = (prevState = initState, action) => {
  let nextState = Object.assign({}, prevState);

  switch(action.type) {
    case GET_FAVS:
      nextState.currentFavs = action.favs;
      break;

    case ADD_FAVS:
      //same pattern as before?
    	if (nextState.currentFavs.hasOwnProperty(action.item)){
      		nextState.currentFavs[action.item] += 1;
    	} else {
    		nextState.currentFavs[action.item] = 1;
    	}
      break;

    case GET_REVIEWS:
        break;

    case ADD_REVIEW:
      	break;

    case EDIT_REVIEW:
      	nextState.currentCart[action.item[0]] += +action.item[1]; //list as positive or negative on + or - buttons
      	break;

    default:
    	return prevState;
    }

    return nextState;
 }


const GET_FAVS='GET_FAVS';
const ADD_FAVS='ADD_FAVS';
const GET_REVIEWS='GET_REVIEWS';
const ADD_REVIEW='ADD_ITEM_FULL';
const EDIT_REVIEW='EDIT_ITEM';


export const getFavs = (() => {
  return {
    type: GET_FAVS,
    favs: [],
  }

});

export const addFavs = (item => {
  return {
    type: ADD_FAVS,
    item
  }

});

export default reviewReducer;
