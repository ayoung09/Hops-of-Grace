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

	return (
	        <div>

            </div>
    );
});


//inherit all the things and interactions.


export default SubmitToCart;
