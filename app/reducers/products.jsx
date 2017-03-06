import axios from 'axios';

//-------------------- product related actions ----------------------------
/*  remaining actions
    get user-products-cart . . . if logged-in, from cookie-cart session
    get user-products-history . . . if logged-in, from purchasing history

      get related products - maybe not necessary - just run through the many-filter to get like brew & flavor...the 'you might also like' feature in amazon

    other?

*/
let initState={
  allproducts : [], //load all and update on create
  filteredproducts : [], //MULTI OR ONE CATEGORY SEARCH,
  selectproduct : {}, //single page focus - from link or typed search
  userproducts : [], //stored cart or history
  filters : [], //searched by
}

const productsReducer = (prevState = initState, action) => {
  let nextState = Object.assign({}, prevState);

  switch(action.type) {
    case LOAD_ALL_PRODUCTS:
      nextState.allproducts = action.products;
      break;

    case CREATE_PRODUCT:
      nextState.allproducts.push(action.products);
      break;

    case FILTER_PRODUCTS:
      nextState.filteredproducts = action.products;
      break;

    case FILTERONE_PRODUCTS:
      nextState.filteredproducts = action.filtered;
      break;

    case SELECT_PRODUCT:
      nextState.selectproduct = action.selected;
      break;

    case SET_FILTERS:
      nextState.filters = action.filter;
      break;

    default:
      return prevState;
  }
  return nextState;
}

const LOAD_ALL_PRODUCTS='LOAD_ALL_PRODUCTS';
const FILTER_PRODUCTS='FILTER_PRODUCTS';
const FILTERONE_PRODUCTS='FILTERONE_PRODUCTS';
const SELECT_PRODUCT ='SELECT_PRODUCT';
const CREATE_PRODUCT = 'CREATE_PRODUCT';
const SET_FILTERS = 'SET_FILTERS';


export const loadAllProducts = (products => {
  return {
    type: LOAD_ALL_PRODUCTS,
    products
  }

});

export const filterProducts = ((products, ...filters) => {
  //given products as all products, check the filters received, the .filter().filter() etc. by those.

  /* in each product:
  brew
  brew_id
  description
  id
  photo
  photo_id
  price
  reviews
  seller ... likely match , also grab state on seller contact_id for axios match... super gnaly.
  unit

  //establish what to match...
  filters.forEach(filter=>{

  })
  */

  //UPDATE LATER WITH ALEXIA'S COMPONENT

  return {
    type: FILTER_PRODUCTS,
    products
  }

});

export const oneFilterProducts = ((products, filter) => {
  //filter = {category:value};

  let cat = Object.keys(filter)[0];
  let val = filter[cat];

  let filtered = products.filter(product => {
    return product[cat] === val;
  })

  return {
    type: FILTERONE_PRODUCTS,
    filtered,
  }

});

export const selectProduct = (product => {
  //presuming link or form action does the work of sorting

  return {
    type: SELECT_PRODUCT,
    product,
  }

});

export const createProduct = (product => {
  //presuming form action/axios does the work of making the product
  // add to products list and set as selectProduct... i.e. go to page on submission.

  dispatch(selectProduct(product));

  return {
    type: CREATE_PRODUCT,
    product,
  }

});


export default productsReducer;
