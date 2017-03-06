import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import { browserHistory, Link } from 'react-router';

import ProductPanel from './ProductSingle.js';
import ReviewPanel from './Review.js';

const ProductPage = (props=> {

	//product panel with inset cart submit panel
	//review panel with inset review submmit panel
	console.log(props);

	return (
	     	<div>
	      		<ProductPanel />
	      		<ReviewPanel />
          	</div>
	)
})


//--- connect methods to add/integrate------- what's needed from store/state for the above?


// const mapStateToProps = (state => {
// 	return {
//     currentProduct : state.products.currentProduct, //includes reviews, etc.
//   	currentCart : state.cart.currentCart,
//   	currentFavs : state.reviews.currentFavs,
//   }
// });

// const mapDispatchToProps = (dispatch => {
// 	return {
// 	    addItemFull(itemId, count){ // item to cart w/ specifications
// 	      dispatch(addItem(itemId, count));
// 	    },
// 	    addFavs(itemId){ // signal liking item
// 	    	dispatch(addFavs(itemId));
// 	    },
// 	    addReview(itemId){ // review form submission
// 	    	dispatch(addFavs(itemId));
// 	    },
// 	};
// });

// const ProductPan = connect(mapStateToProps, mapDispatchToProps)(ProductPage);

export default ProductPage;
