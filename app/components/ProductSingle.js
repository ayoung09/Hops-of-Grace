import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import { browserHistory, Link } from 'react-router';

//import {actions} from
import {addItem, subtractItem} from '../reducers/cart';
import {addFavs, addReview } from '../reducers/reviews';

import SubmitToCart from './SubmitToCart.js';


//COMBINED COMPONENT AND CONTAINER FILE!

class ProductSingle extends React.Component { // (props => {
	constructor(props) {
    super(props); // for cart, session, user info and so on
    this.state = { // for local interactions and display options... show cart - add to cart button
    	existingCartCount: this.props.currentCart[+this.props.currentProduct.id], // to re-color cart icons
    	localCartColor: Object.keys(this.props.currentCart).map(each=> +each),
    	localHeartColor: Object.keys(this.props.currentFavs).map(each=> +each),
    	addCartCount: +this.props.currentProduct.id,
    	localInventory: this.props.allInventory.filter(items=>{ //this is a work around... clean-up later
    		return items.product_id === this.props.currentProduct.id
    	})[0],
    };

    //actual interactions bound
    this.addToCart= this.addToCart.bind(this);
    this.subtractFromCart= this.subtractFromCart.bind(this);
    this.addToFavs = this.addToFavs.bind(this);

	}

	addToCart= (event => {
		let prodId = event.target.attributes.value.value;
		this.props.addItem(prodId);

		let cart = this.state.localCartColor;
		if (cart.indexOf(+prodId)){cart = cart.concat(+prodId)};
		let adds;
		if (this.state.existingCartCount===undefined){ adds = 1 } else { adds = 1 + this.state.existingCartCount};
		this.setState({localCartColor:cart, existingCartCount:adds});
	});

	subtractFromCart= (event => {
		let prodId = event.target.attributes.value.value;
		this.props.subtractItem(prodId);

		let cart = this.state.localCartColor; //.concat(+prodId);
		console.log(cart);
		let subtract;
		if (this.state.existingCartCount===undefined || this.state.existingCartCount<=0){ subtract = 0 } else { subtract = -1 + this.state.existingCartCount};
		this.setState({localCartColor:cart, existingCartCount:subtract});
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

		let interact={
			addToCart: this.addToCart,
			subtractFromCart : this.subtractFromCart,
		}

		return (

		        <div className="row product pad20 ">
		        	<div className="col-xs-12 col-sm-12 col-lg-4 text-right">
		        		<img src={product.photo.source} className="singleBimg bshadow" value="" />
		        	</div>
		        	<div className="col-xs-12 col-sm-12 col-lg-4">
		        			<h3 className="bclose tclose CoreMagic brown">{product.name}</h3>
			        		<h4 className="Choplin-Medium gold">Brewed by : {product.seller.breweryName}</h4>
			        		<h5 className="Choplin-Medium gold"> ${product.price}</h5>
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
		        	<SubmitToCart product={product} cart={this.state.existingCartCount} interact={interact}/>

	            </div>
            )
	}
};


//--- connect methods to add/integrate------- what's needed from store/state for the above?


const mapStateToProps = (state => {
	return {
	allproducts : state.products.allproducts,
	allInventory : state.products.allInventory,
    currentProduct : state.products.currentProduct, //includes reviews, etc.
    //currentInventory : state.products.currentInventory, //not working -
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
	    subtractItem(itemId){ // item to cart simple
	      dispatch(subtractItem(itemId));
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
