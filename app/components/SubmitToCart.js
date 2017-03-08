import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import { browserHistory, Link } from 'react-router';

//import {actions} from
import {selectProduct} from '../reducers/products';
import { addItem, setItemQty, removeItem } from '../reducers/cart';
import {addFavs, addReview } from '../reducers/reviews';


//DUMB COMPONENT FILE with destructed props

const SubmitToCart = ((props) => {
	//we need price * current Quantity
	//quanity as updated
	//add to cart (submit button)
	//got to cart (navigation button)

	let totals = props.cart;
	if (totals===undefined){ totals = 0 };

	let price = (props.product.price * totals).toFixed(2);
	let id = props.product.id;

	console.log(props);

	return (
	        <div className="col-xs-12 col-sm-12 col-lg-4 pad20">
	        	<div className="col-xs-9 col-sm-9 col-lg-9 col-lg-offset-3 col-sm-offset-3 purchaseMe bshadow text-center pad20">
	        	<h4 className="Choplin-Medium brown">Buy {props.product.name}</h4>
	        	<p className="sm Choplin-Light brown bclose">cart & price totals</p>
	        	<form className="text-center">
	        	<span className="glyphicon glyphicon-triangle-top brown cartB" onClick={props.interact.addToCart} value={id}></span>
	        		<div className="pbox">
	        			<p className="bclose Choplin-Light">{totals}</p>
	        		</div>
	        	<span className="glyphicon glyphicon-triangle-bottom brown cartB" onClick={props.interact.subtractFromCart} value={id}></span><br/>
	        	<p className="Choplin-Medium brown">total = ${price}</p>
	        	 <button className="btn btn-default Choplin-Light" onClick={e=>{e.preventDefault()}}><Link to="/cart">go to cart</Link></button>
	        	</form>

	        	</div>

            </div>
    );
});


//inherit all the things and interaction

// <button className="btn btn-default Choplin-Light" onClick={e=>{e.preventDefault()}}>save to cart</button>


export default SubmitToCart;
