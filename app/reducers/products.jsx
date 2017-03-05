import axios from 'axios';

//-------------------- product related actions ----------------------------
/*  load all products . . . to show on front page for non-authenticated, non-session new users
    many-filter products . . . based on the nav bar categories passed in, filter all products through 1 or more matches
    one-filter products . . . typed in search from home screen - exact or partial match - no preset categories
    get user-products-cart . . . if logged-in, from cookie-cart session
    get user-products-history . . . if logged-in, from purchasing history
    select product . . . focused product from click interaction - single page product display
    create product . . . brewer creates/adds product
      get related products - maybe not necessary - just run through the many-filter to get like brew & flavor...the 'you might also like' feature in amazon

    other?

*/
let initState={
  allproducts : [],
}

const productsReducer = (prevState = initState, action) => {
  let nextState = Object.assign({}, prevState);

  switch(action.type) {
    case LOAD_ALL_PRODUCTS:
      nextState.allproducts = action.products;
      break;

    default:
      return prevState;
  }
  return nextState;
}

const LOAD_ALL_PRODUCTS='LOAD_ALL_PRODUCTS';

export const loadAllProducts = (products => {
  return {
    type: LOAD_ALL_PRODUCTS,
    products
  }

});


export default productsReducer;
