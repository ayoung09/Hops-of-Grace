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
    	starCount: 0,
    	localHeartColor: Object.keys(this.props.currentFavs).map(each=> +each),
    	comment: '',
    };

    //actual interactions bound
    this.addToFavs= this.addToFavs.bind(this);
    this.addStars= this.addStars.bind(this);
    this.addComment= this.addComment.bind(this);
    this.addUserReview=this.addUserReview.bind(this);
	}


	addToFavs= (event => {
		let prodId = event.target.attributes.value.value;
		this.props.addFavs(prodId);

		let cart = this.state.localHeartColor.concat(+prodId);
		this.setState({localHeartColor:cart});
	});

	addStars= (event => {
		let stars = this.state.starCount + 1;
		this.setState({starCount:stars});
	});

	addComment= (event => {
		event.preventDefault();
		let input= event.target.value;
		this.setState({comment:input});
	});

	addUserReview= (event => {
		event.preventDefault();
		let review = {
			writeUp : this.state.comment,
			stars : this.state.starCount,
			product_id : this.props.currentProduct.id,
			user_id : 2, //activate from cookies later
			photo_id : this.props.currentProduct.id,//active upload later
		};
		console.log('got to review add', review);
		this.props.addReview(review);
	});





	render(){

		console.log('reviews: ', this.props);

		return (
		        <div className="row  reviews">
			    	<div className=" row col-xs-12 col-sm-12 col-lg-8 pad20">
			    	<h4 className="CoreMagic brown text-center">Reviews</h4>
		    {this.props.currentProduct &&
		    	this.props.currentProduct.reviews.map(review => {
		    		let stars=[];
		    		for (let i=0; i<review.stars;i++){
		    			stars.push('s');
		    		};

		    		return (
		    		    <div className=" row col-xs-12 col-sm-12 col-lg-12 pad20">
				        	<div className="col-xs-12 col-sm-12 col-lg-6 text-right">
				        		<img src={this.props.currentProduct.photo.source} className="singleRimg bshadow" value="" />
				        	</div>
				        	<div className="col-xs-12 col-sm-12 col-lg-6">
				        			<h4 className="bclose tclose CoreMagic brown">{review.writeUp.split(' ').slice(0,3).join(' ')}</h4>
				        			{stars.map(star=>{
					        			return <span className={`glyphicon glyphicon-star gold CLP`} ></span>
					        			})
					        		}
					        		<p className="Choplin-Medium brown">{review.writeUp}</p>
				        	</div>
			        	</div>
			        )
		    	})
			}
			        </div>
		        		<SubmitReview texts="" interact={{addStars: this.addStars, addComment:this.addComment, addUserReview: this.addUserReview }} stars={this.state.starCount} comment={this.state.comment}/>
	            </div>
            )
	}
};


//--- connect methods to add/integrate------- what's needed from store/state for the above?


const mapStateToProps = (state => {
	return {
	currentProduct : state.products.currentProduct, // in case we want other info? other products needed.
  	currentFavs : state.reviews.currentFavs,
  }
});

const mapDispatchToProps = (dispatch => {
	return {
	    addFavs(itemId){ // signal liking item
	    	dispatch(addFavs(itemId));
	    },
	    addReview(itemObj){ // review form submission
	    	dispatch(addReview(itemObj));
	    },
	    getAllReviews(){ // review update?
	    	dispatch(addFavs(itemId));
	    },
	};
});

const ReviewPanel = connect(mapStateToProps, mapDispatchToProps)(ProductReviews);

export default ReviewPanel;
