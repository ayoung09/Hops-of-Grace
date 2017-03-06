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
    	localHeartColor: Object.keys(this.props.currentFavs).map(each=> +each),
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
		if (this.props.currentProduct===[]){
			let product = this.props.allproducts[0];
		}

		let cartColor='white';
		let heartColor='white';

		if (this.props.currentProduct){ //once load, compare values
			if (this.state.localCartColor.indexOf(+product.id)!== -1){
				cartColor = 'gold';
			};

			if (this.state.localHeartColor.indexOf(+product.id)!== -1){
				heartColor = 'gold';
			};
		}

		return (

		        <div className="row product pad20 ">
		        	<div className="col-xs-12 col-sm-12 col-lg-4 text-right">
		        		<img src={product.photo.source} className="singleBimg bshadow" value="" />
		        	</div>
		        	<div className="col-xs-12 col-sm-12 col-lg-4">
		        			<h3 className="bclose tclose CoreMagic brown">{product.name}</h3>
			        		<h4 className="Choplin-Medium gold">{product.seller.breweryName}, {product.unit.name}(s) avail.</h4>
		        			<div>
			        			<span className={`glyphicon glyphicon-shopping-cart tshadowl CLP ${cartColor}`} onClick={this.addToCart} value={product.id}>
			        			</span>
				                <span className={`glyphicon glyphicon-heart  tshadowl CRP ${heartColor}`} onClick={this.addToFavs} value={product.id}>
				                </span>
			        			<br/>
			        			<br/>
				        		<p className="Choplin-Light brown">{product.description.split(' ').slice(0,30).join(' ')+`...`}</p>
			        		</div>
		        	</div>
		        	<SubmitToCart />

	            </div>
            )
	}
};


//--- connect methods to add/integrate------- what's needed from store/state for the above?


const mapStateToProps = (state => {
	return {
	allproducts : state.products.allproducts,
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
