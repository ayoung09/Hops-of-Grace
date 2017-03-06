import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import { browserHistory, Link } from 'react-router';

import ProductsPanel from './Products.js';
import SearchPanel from './Search.js';

const ProductPage = (props=> {
	//search and products both have local, form actions...
	//react-redux connection to store for state stuff instead of passing down
	console.log(props);

	return (
	     	<div>
	      		<ProductsPanel size="productsHalf" />
          	</div>
	)
})


//--- connect methods to add/integrate------- what's needed from store/state for the above?


const mapStateToProps = (state => {
	return {
    selectproduct : state.products.selectproduct, //includes reviews, etc.
  	currentCart : state.cart.currentCart,
  	currentFavs : state.reviews.currentFavs,
  }
});

const mapDispatchToProps = (dispatch => {
	return {
	    addItemFull(itemId, count){
	      dispatch(addItem(itemId, count));
	    },
	    addFavs(itemId){
	    	dispatch(addFavs(itemId));
	    },
	    addReview(itemId){
	    	dispatch(addFavs(itemId));
	    },
	};
});

const ProductPan = connect(mapStateToProps, mapDispatchToProps)(ProductPage);

export default ProductPan;
