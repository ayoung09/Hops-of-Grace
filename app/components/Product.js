import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import { browserHistory, Link } from 'react-router';
import store from '../store'

import ProductPanel from './ProductSingle.js';
import ReviewPanel from './Review.js';

import {getInventory} from '../reducers/products.jsx';

class ProductPage extends React.Component {
	constructor(props) {
    super(props);
    this.getInv=this.getInv.bind(this);
	}

	//product panel with inset cart submit panel
	//review panel with inset review submmit panel

	getInv = (event => {
		event.preventDefault();
		let prodId = 0;
		if (this.props.params.productId){
			prodId= this.props.params.productId;
		};
		console.log(this.props.getInventory(prodId));
	})


	render(){

		console.log(this.props.params.productId);

		return (
		     	<div>
		      		<ProductPanel onEnter={this.getInv} />
		      		<ReviewPanel />
	          	</div>
		)
	}
}


//--- connect methods to add/integrate------- what's needed from store/state for the above?


// const mapStateToProps = (state => {
// 	return {
//     currentProduct : state.products.currentProduct, //includes reviews, etc.
//   	currentCart : state.cart.currentCart,
//   	currentFavs : state.reviews.currentFavs,
//   }
// });

const mapDispatchToProps = (dispatch => {
	return {
	    getInventory(itemId){ // signal liking item
	    	dispatch(getInventory(itemId));
	    },
	};
});

const ProductPan = connect(null, mapDispatchToProps)(ProductPage);

export default ProductPan;
