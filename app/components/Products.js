import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import { browserHistory, Link } from 'react-router';

//import {actions} from '../reducers/products';

//COMBINED COMPONENT AND CONTAINER FILE!

class Products extends React.Component { // (props => {
	constructor(props) {
    super(props); // for cart, session, user info and so on
    this.state = { // for local interactions and display options... show cart - add to cart button
    	current: '',
    	etc : 'other things?'
    };

    this.selectItem = this.selectItem.bind(this);
    this.selectToCart = this.selectToCart.bind(this);
    this.priorOrders = this.priorOrders.bind(this);
	}

	selectItem = (event => { // click photo to dispatch as current item (add data ?) and head to that item's page.

	}) // this might be fine as a <Link to="...whatever"> </Link>

	selectToCart = (event => { // click on icon to add to cart w/o going to order page

	})

	priorOrders = (event => { // set icon color/css to differ if they've purchased before

	})


	render(){
		return (
	            <div className="row opening pad20">
	                <div className="col-sm-12 col-lg-3 block-center ">
	                  <div className="thumbB pad20 bshadow text-center">
	                    <img src="img/s04.jpg" className="thumbBimg" />
	                    <h4 className="Choplin-Medium bclose">Product Name</h4>
	                    <p className="Choplin-Light sm">brew type from brewery</p>
	                  </div>
	                </div>

	                <div className="col-sm-12 col-lg-3 block-center ">
	                  <div className="thumbB pad20 bshadow text-center">
	                    <img src="img/s06.jpg" className="thumbBimg" />
	                    <h4 className="Choplin-Medium bclose">Product Name</h4>
	                    <p className="Choplin-Light sm">brew type from brewery</p>
	                  </div>
	                </div>

	                <div className="col-sm-12 col-lg-3 block-center ">
	                  <div className="thumbB pad20 bshadow text-center">
	                    <img src="img/s01.jpg" className="thumbBimg" />
	                    <h4 className="Choplin-Medium bclose">Product Name</h4>
	                    <p className="Choplin-Light sm">brew type from brewery</p>
	                  </div>
	                </div>

	                <div className="col-sm-12 col-lg-3 block-center ">
	                  <div className="thumbB pad20 bshadow text-center">
	                    <img src="img/s05.jpg" className="thumbBimg" />
	                    <h4 className="Choplin-Medium bclose">Product Name</h4>
	                    <p className="Choplin-Light sm">brew type from brewery</p>
	                  </div>
	                </div>

	                <div className="col-sm-12 col-lg-3 block-center ">
	                  <div className="thumbB pad20 bshadow text-center">
	                    <img src="img/s00.jpg" className="thumbBimg" />
	                    <h4 className="Choplin-Medium bclose">Product Name</h4>
	                    <p className="Choplin-Light sm">brew type from brewery</p>
	                  </div>
	                </div>

	              {/*
	              </div>


	              <div className="col-sm-1 col-lg-1 arrows">
	                <h1 className="EvelethShapes lrg white tshadowl">o</h1>
	              </div> */}

	            </div>
            )
	}
};

//--- connect methods to add/integrate------- what's needed from store/state for the above?

/*
const mapStateToProps = (state => {

});

const mapDispatchToProps = (dispatch => {

});

const ProductsContainer = connect(mapStateToProps, mapDispatchToProps)(Products);
export default ProductsContainer;
*/

export default Products;
