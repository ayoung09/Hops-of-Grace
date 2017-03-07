import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import { browserHistory, Link } from 'react-router';


//import {actions} from
import {addFavs, addReview } from '../reducers/reviews';


//DUMB COMPONENT FILE with destructed props

const SubmitReview = ((props) => {

	//set brown to yellow for star selection, glyphicon-star-empty
	let empty='glyphicon glyphicon-star-empty brown';
	let full = 'glyphicon glyphicon-star gold';
	let starArr = [0,0,0,0,0];

	return (
	        <div className="col-xs-12 col-sm-12 col-lg-4 pad20">
	        	<div className="col-xs-9 col-sm-9 col-lg-9 col-lg-offset-3 col-sm-offset-3 purchaseMe bshadow text-center pad20">
	        	<h4 className="Choplin-Medium brown">Add Your Impressions</h4>
	        	{starArr.map((star,i) => {
	        		if (i+1<=props.stars){
	        			return  <span className={full} onClick={props.interact.addStars} ></span>;
	        		} else {
	        			return  <span className={empty} onClick={props.interact.addStars} ></span>;
	        		}
	        	})}
	        	<p className="Choplin-Light sm brown">add stars</p>
	        	<form className="text-center" onSubmit={props.interact.addUserReview}>
	        			<input className="form-control bclose Choplin-Light text-center" type="text" onChange={props.interact.addComment} value={props.comment} />
	        			<p className="Choplin-Light sm brown">comments</p>
	        			<input className="form-control bclose Choplin-Light text-center" onChange="" value="upload file"/>
	        			<p className="Choplin-Light sm brown">photos (not enabled)</p>
	        			<button className="btn btn-default Choplin-Medium" type="submit" >submit review</button>
	        	</form>

	        	</div>

            </div>
    );
});


//inherit all the things and interactions.


export default SubmitReview;
