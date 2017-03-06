import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import { browserHistory, Link } from 'react-router';

//import {actions} from
import {selectProduct} from '../reducers/products';
import {addItem, addItemFull } from '../reducers/cart';
import {addFavs, addReview } from '../reducers/reviews';


//DUMB COMPONENT FILE with destructed props

const SubmitToCart = ((props) => {
	//we need price * current Quantity
	//quanity as updated
	//add to cart (submit button)
	//got to cart (navigation button)

	return (
	        <div className="col-xs-12 col-sm-12 col-lg-4 pad20">
	        	<div className="col-xs-9 col-sm-9 col-lg-9 col-lg-offset-3 col-sm-offset-3 purchaseMe bshadow">
	        	</div>

            </div>
    );
});


//inherit all the things and interactions.


export default SubmitToCart;
