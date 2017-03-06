import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import { browserHistory, Link } from 'react-router';

//import {actions} from
import {addItem, addItemFull} from '../reducers/cart';
import {addFavs, addReview } from '../reducers/reviews';

import SubmitToCart from './SubmitToCart.js';


//COMBINED COMPONENT AND CONTAINER FILE!

class ProductSingle extends React.Component { // (props => {
	constructor(props) {
    super(props); // for cart, session, user info and so on
    this.state = { // for local interactions and display options... show cart - add to cart button
    	existingCartCount: this.props.currentCart[this.props.currentProduct.id], // to re-color cart icons
    	localCartColor: Object.keys(this.props.currentCart).map(each=> +each),
    	addCartCount: 0,
    };

    //actual interactions bound
    this.addToCart= this.addToCart.bind(this);
    this.addToFavs = this.addToFavs.bind(this);

	}

	addToCart= (event => {
		let prodId = event.target.attributes.value.value;
		this.props.addItem(prodId);

		let cart = this.state.localCartColor.concat(+prodId);
		this.setState({localCartColor:cart});
	});

	addToFavs= (event => {
		let prodId = event.target.attributes.value.value;
		this.props.addFavs(prodId);

		let cart = this.state.localHeartColor.concat(+prodId);
		this.setState({localHeartColor:cart});
	});

	render(){

		console.log(this.props);
		let product = this.props.currentProduct;

		return (

		        <div className="row product pad20 ">
		        	<div className="col-xs-6 col-sm-6 col-lg-4 text-center">
		        		<img src="" className="singleBimg" value="" />
		        		<img src="" className="singleBimg" value="" />
		        	</div>
		        	<div className="col-xs-6 col-sm-6 col-lg-4">
		        			set up the info as variables
		        			<h1>product.name</h1>
		        			<h4>product.seller.breweryName</h4>
		        			<h5>inventory? available</h5>
		        			<br/>
		        			<h5>product.description</h5>
		        			flavors list
		        			category
		        			<br/>
		        			<br/>
		        			mini-cart button
		        			mini-like button

		        	</div>

		        	<SubmitToCart />

	            </div>
            )
	}
};


//--- connect methods to add/integrate------- what's needed from store/state for the above?


const mapStateToProps = (state => {
	return {
    currentProduct : state.products.currentProduct, //includes reviews, etc.
    currentInventory : state.products.currentInventory,
  	currentCart : state.cart.currentCart,
  	currentFavs : state.reviews.currentFavs,
  }
});

const mapDispatchToProps = (dispatch => {
	return {
	    addItemFull(itemId, count){ // item to cart w/ specifications
	      dispatch(addItem(itemId, count));
	    },
	    addItem(itemId){ // item to cart simple
	      dispatch(addItem(itemId));
	    },
	    getInventory(itemId){
	    	dispatch(getInventory(itemId));
	    },
	    addFavs(itemId){ // signal liking item
	    	dispatch(addFavs(itemId));
	    },
	};
});

const ProductPanel = connect(mapStateToProps, mapDispatchToProps)(ProductSingle);

export default ProductPanel;
