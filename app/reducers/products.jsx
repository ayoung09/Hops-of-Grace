import axios from 'axios';

//-------------------- product related actions ----------------------------
/*  remaining actions
    get user-products-cart . . . if logged-in, from cookie-cart session
    get user-products-history . . . if logged-in, from purchasing history

      get related products - maybe not necessary - just run through the many-filter to get like brew & flavor...the 'you might also like' feature in amazon

    other?

*/
let initState={
  allProducts : [], //load all and update on create
  filteredProducts : [], //MULTI OR ONE CATEGORY SEARCH,
  currentProduct : {}, //single page focus - from link or typed search
  currentInventory : {}, //what's available
  userProducts : [], //stored cart or history
  filterName: '',
}

const productsReducer = (prevState = initState, action) => {
  let nextState = Object.assign({}, prevState);

  switch(action.type) {
    case LOAD_ALL_PRODUCTS:
      nextState.allProducts = action.products;
      break;

    case CREATE_PRODUCT:
      nextState.allProducts.push(action.products);
      break;

    case FILTER_BY_BREW:
      nextState.filterName = action.filterName;
      nextState.filteredProducts = action.filteredProducts;
      break;

    case FILTERONE_PRODUCTS:
      nextState.filteredProducts = action.filtered;
      break;

    case SELECT_PRODUCT:
      nextState.currentProduct = action.selected;
      break;

    case GET_INVENTORY:
      nextState.currentInventory = action.inventory;
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
const FILTER_BY_BREW='FILTER_BY_BREW';
const FILTERONE_PRODUCTS='FILTERONE_PRODUCTS';
const SELECT_PRODUCT ='SELECT_PRODUCT';
const GET_INVENTORY ='GET_INVENTORY';
const CREATE_PRODUCT = 'CREATE_PRODUCT';
const SET_FILTERS = 'SET_FILTERS';


export const loadAllProducts = (products => {
  return {
    type: LOAD_ALL_PRODUCTS,
    products
  }

});

export const filterByBrew = ((products, filterName) => {

  let filteredProducts = products.filter(product => (product.brew.name === filterName));

  return {
    type: FILTER_BY_BREW,
    filterName,
    filteredProducts,
  }
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
  */
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

// export const selectProduct = (productId => {

//   axios.get('/api/products/'+ productId)
//     .then(product=> product.data)
//     .then(selected=>{
//       return {
//         type: SELECT_PRODUCT,
//         selected,
//       };
//     })
//     .catch(err=>{console.log(err)});

// }); CHECK ROUTE... GETTING SEQUELIZE ERROR ON GET/:PRODUCTID... RAW QUERY SOMETHING...

export const selectProduct = ((products, productId) => {

  let select = products.filter(product=>{
    return product.id === +productId;
  })

  return {
        type: SELECT_PRODUCT,
        selected : select[0],
      };
});

export const getInventory = (productId => {

  axios.get('/api/inventories/'+productId)
    .then(product=> product.data)
    .then(selected=>{
      console.log('get inventory: ', selected);
      return {
            type: GET_INVENTORY,
            inventory : selected,
          };
    })
    .catch(err=>{console.log('dispatch?: ', err)});

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
