import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import { browserHistory, Link } from 'react-router';

//import {actions} from
import {addItem, addItemFull } from '../reducers/cart';
import {addFavs, addReview, getAllReviews } from '../reducers/reviews';


//import Dumb Component
import SubmitReview from './SubmitReview.js';


//COMBINED COMPONENT AND CONTAINER FILE!

class ProductReviews extends React.Component { // (props => {
	constructor(props) {
    super(props); // for cart, session, user info and so on
    this.state = { // for local interactions and display options... show cart - add to cart button
    	addStarCount: 0,
    	localHeartColor: Object.keys(this.props.currentFavs).map(each=> +each),
    	other: '',
    };

    //actual interactions bound

	}


	addToFavs= (event => {
		let prodId = event.target.attributes.value.value;
		this.props.addFavs(prodId);

		let cart = this.state.localHeartColor.concat(+prodId);
		this.setState({localHeartColor:cart});
	});





	render(){


		return (
		        <div>
		        	<div>
		        		reviews go here
		        	</div>

		        	<SubmitReview />
	            </div>
            )
	}
};


//--- connect methods to add/integrate------- what's needed from store/state for the above?


const mapStateToProps = (state => {
	return {
	currentProduct : state.products.currentProduct, // in case we want other info? other products needed.
  	currentFavs : state.reviews.currentFavs,
  	currentReviews : state.reviews.currentReviews,
  }
});

const mapDispatchToProps = (dispatch => {
	return {
	    addFavs(itemId){ // signal liking item
	    	dispatch(addFavs(itemId));
	    },
	    addReview(itemId){ // review form submission
	    	dispatch(addFavs(itemId));
	    },
	    getAllReviews(){ // review update?
	    	dispatch(addFavs(itemId));
	    },
	};
});

const ReviewPanel = connect(mapStateToProps, mapDispatchToProps)(ProductReviews);

export default ReviewPanel;
