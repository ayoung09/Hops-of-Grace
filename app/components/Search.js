import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import { browserHistory, Link } from 'react-router';

//import {actions} from '../reducers/products';

//COMBINED COMPONENT AND CONTAINER FILE!

class SearchPanel extends React.Component { // (props => {
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
            <div className="row pad20 backgroundBeer search">

                <div className="col-sm-12 col-lg-4">
                  <form className="form-inline">
                    <div className="form-group white">
                      <label className="sr-only">Search your Favorite Brew</label>
                      <div className="input-group">
                        <div className="input-group-addon"><span className="EvelethShapes">J</span></div>
                        <input type="text" className="form-control" id="exampleInputAmount" placeholder="find microbrews"></input>
                        <div className="input-group-addon"><span className="EvelethShapes">K</span></div>
                      </div>
                    </div>
                    <button type="submit" className="btn btn-default of20 Choplin-Medium">Search</button>
                  </form>

                </div>
                <div className="col-sm-12 col-lg-8 text-center">
                  <h1 className="white CoreMagic tshadow">brew & barter</h1>
                  <h2 className="white EvelethShapes tshadow">" " " " " " " "</h2>
                  <h3 className="white ThirstyRoughReg tshadow"><span className="white EvelethShapes">u </span> discover great small batch beer <span className="white EvelethShapes"> v</span> </h3>
                </div>

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

export default SearchPanel;
