import axios from 'axios';

let initState={

  currentFavs : [], //load all and update - anything w/ heart...make up 5-star conversion;
  userReviews : [],
  currentReviews : [],
  allReviews : [],

}

const reviewReducer = (prevState = initState, action) => {
  let nextState = Object.assign({}, prevState);

  switch(action.type) {
    case GET_FAVS:
      nextState.currentFavs = action.favs;
      break;

    case ADD_FAVS:
    	if (nextState.currentFavs.hasOwnProperty(action.item)){
      		nextState.currentFavs[action.item] += 1;
    	} else {
    		nextState.currentFavs[action.item] = 1;
    	}
      break;

    case GET_ALL_REVIEWS:
      nextState.allReviews=action.reviews;
        break;

    case GET_REVIEWS:
      nextState.currentReviews=action.reviews;
        break;

    case ADD_REVIEW:
      nextState.currentReviews=nextState.currentReviews.concat(action.newReview);
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
const GET_ALL_REVIEWS='GET_ALL_REVIEWS';
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

export const getReviews = (itemId => {

    axios.get('/api/reviews/'+itemId)
    .then(product=> product.data)
    .then(selected=>{
      console.log(selected)
      return {
            type: GET_REVIEWS,
            reviews: selected,
          };
    })
    .catch(err=>{console.log(err)});

});

export const getAllReviews = (() => {

    axios.get('/api/reviews/')
    .then(product=> product.data)
    .then(allReviews=>{
      console.log(allReviews)

      return {
            type: GET_ALL_REVIEWS,
            reviews: allReviews,
          };
    })
    .catch(err=>{console.log(err)});

});

export const addReview = (itemObj => {

    //to preformat in review form or in here...

    axios.post('/api/reviews/', itemObj)
    .then(product=> product.data)
    .then(selected=>{ // so in data base
      console.log(selected) // merely add to currentReviews
      return {
            type: ADD_REVIEW,
            newReview: selected,
          };
    })
    .catch(err=>{console.log(err)});

});

export default reviewReducer;
