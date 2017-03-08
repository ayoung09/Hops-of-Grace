import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import { browserHistory, Link } from 'react-router';

import fakePhotos from './utilities';

//import {actions} from
import {selectProduct, getInventory} from '../reducers/products';
import { addItem, incrementItem } from '../reducers/cart';
import {addFavs, getReviews} from '../reducers/reviews';


//COMBINED COMPONENT AND CONTAINER FILE!

class Products extends React.Component { // (props => {
	constructor(props) {
    super(props); // for cart, session, user info and so on
    this.state = { // for local interactions and display options... show cart - add to cart button
    	localCartColor: Object.keys(this.props.currentCart).map(each=> +each), // to re-color cart icons
    	localHeartColor: Object.keys(this.props.currentFavs).map(each=> +each),
    	currentId : 0,
    };

    //actual interactions
    this.addToCart = this.addToCart.bind(this);
    this.addToFavs = this.addToFavs.bind(this);
    this.setProduct = this.setProduct.bind(this);
    this.setId = this.setId.bind(this);
    this.priorOrders = this.priorOrders.bind(this);

    //only during seeding stage
    this.productsEnlarged = this.productsEnlarged.bind(this);
    //this.productsPhotos = this.productsPhotos.bind(this);
	}

	setId= (event => {
		this.setState({currentId:event.target.attributes.value.value});
	});


	addToCart= (event => {
		let prodId = event.target.attributes.value.value;
		if(this.props.currentCart[prodId]){
			this.props.incrementItem(prodId);
		} else {
			this.props.addItem(prodId);
		}
		let cart = this.state.localCartColor;
		if (!cart.indexOf(+prodId)){cart = cart.concat(+prodId)};
		this.setState({localCartColor:cart});
	});

	addToFavs= (event => {
		let prodId = event.target.attributes.value.value;
		this.props.addFavs(prodId);

		let cart = this.state.localHeartColor.concat(+prodId);
		this.setState({localHeartColor:cart});
	});

	setProduct= (event => {
		let id = this.state.currentId;
		this.props.selectProduct(this.props.allProducts, id);
		//this.props.getInventory(id);
		//console.log(this.props.currentProduct);
		browserHistory.push('/product/'+id);
	});


	priorOrders = (event => { // set icon color/css to differ if they've purchased before... once we've got user history in the mix...

	})


	// to assist with extra seeding and appearance of full database...
	productsEnlarged = (()=>{ //creating fake-larger product list.
		var productsE =[];
		if (this.props.filteredProducts){

		if (this.props.filteredProducts.length<10){
			productsE = this.props.allProducts;

			let multipage=Math.floor(Math.random()*25) + 10; // up to 18 entries
			for (let i=this.props.filteredProducts.length; i<multipage; i++){
				let originalRandom = Math.floor(Math.random()*i); // copy from existing
				productsE.push(productsE[originalRandom]);
			}; //padded # of products
		} else if (this.props.filteredProducts.length>=6){
			productsE = this.props.filteredProducts;
		};
	} else if (this.props.allProducts){

			if (this.props.filteredProducts.length<10){
			productsE = this.props.allProducts;

			let multipage=Math.floor(Math.random()*25) + 10; // up to 18 entries
			for (let i=this.props.allProducts.length; i<multipage; i++){
				let originalRandom = Math.floor(Math.random()*i); // copy from existing
				productsE.push(productsE[originalRandom]);
			}; //padded # of products
		} else if (this.props.allProducts && this.props.allProducts.length>=6){
			productsE = this.props.allProducts;
		};

	}

		return productsE;
	})

	// to assist with extra seeding and appearance of full database...
	// productsPhotos = ((pEArr)=>{ //photos list, pre-photo seeding
	// 	let photos = fakePhotos();

	// 	if (pEArr[0]!== undefined){

	// 		pEArr.forEach((prod)=> {
	// 			prod.photo = photos[prod.id].source;
	// 			prod.photo_id = prod.id;
	// 		})
	// 		return pEArr;
	// 	};

	// 	return pEArr;

	// })



	render(){

	//set below to props.allProducts or props.filteredproducts once seeding is done
	let entries = this.productsEnlarged() ;

	//className for css half page = productsHalf, for full page = productsFull
	let sizeClass = this.props.size;
		if (!this.props.size){
			sizeClass = "productsFull";
		}

	let shrink=-(entries.length%5); //grids of 5 (not actually all entries)
	(sizeClass!=="productsFull") ? entries = entries.slice(0,5) : entries = entries.slice(0,shrink) ; //half vs. continuous thumbnails


		return (
		        <div>
	            	{sizeClass==="productsFull" && this.props.filters &&// on full page only - filtering/search categories:
	            		<div className="row CoreMagic filter text-center">
	            			<h3 className="white tshadowL">filtering: {this.props.params.filter}</h3>
	            		</div>
	            	}
	            	{sizeClass==="productsFull" &&  // on first page only
		            		<div className="row CoreMagic moreTop text-center">
		            			<Link to="/welcome"><h5 className="white tshadowL moreT bclose">clear filter : search again</h5></Link>
		            		</div>
		            }
		            <div className={`row ${sizeClass} pad20`}>
		            	{entries[0]!==undefined && entries.map((entry, i) => {
		            		let cartColor='white';
		            		if (this.state.localCartColor.indexOf(+entry.id)!== -1){
		            			cartColor = 'gold';
		            		};
		            		let heartColor = 'white';
		            		if (this.state.localHeartColor.indexOf(+entry.id)!== -1){
		            			heartColor = 'gold';
		            		};

		            		return (
				                  <div className="thumbB pad20 marg20 bshadow text-center" key={entry.name+i} >

				                  	<span className={`glyphicon glyphicon-shopping-cart CL ${cartColor}`} onClick={this.addToCart} value={entry.id}></span>
				                  	<span className={`glyphicon glyphicon-heart CR ${heartColor}`} onClick={this.addToFavs} value={entry.id}></span>
				                  	<div onClick={this.setProduct} onMouseOver={this.setId} value={entry.id} >
					                    <img src={entry.photo.source} className="thumbBimg" value={entry.id} />
					                    <h4 className="Choplin-Medium bclose thumbT" value={entry.id} >{entry.name}</h4>
					                    <p className="Choplin-Light sm thumbT" value={entry.id} >{entry.brew.name}</p>
				                    </div>
				                  </div>
			            		)
			            	})
			            }
		            </div>
		            {sizeClass!=="productsFull" &&  // on first page only
		            		<div className="row CoreMagic more text-center">
		            			<Link to="/products/show-all"><h5 className="white tshadowL moreT bclose" >explore more</h5></Link>
		            		</div>
		            }
		            {sizeClass==="productsFull" &&  // on first page only
		            		<div className="row CoreMagic more text-center">
		            			<Link to="/welcome"><h5 className="white tshadowL moreT bclose" >clear filter : search again</h5></Link>
		            		</div>
		            }
		            <div className="pad20">
		            </div>
	            </div>
            )
	}
};


//--- connect methods to add/integrate------- what's needed from store/state for the above?


const mapStateToProps = (state => {
	return {
    allProducts : state.products.allProducts,
		filteredProducts : state.products.filteredProducts,
  	userproducts : state.products.userproducts,
  	filters : state.products.filters,
  	currentCart : state.cart.currentCart,
  	currentFavs : state.reviews.currentFavs,
  	currentProduct : state.products.currentProduct,
  }
});

const mapDispatchToProps = (dispatch => {
	return {
	    addItem(itemId){
	      dispatch(addItem(itemId));
	    },
			incrementItem(itemId){
				dispatch(incrementItem(itemId));
			},
	    selectProduct(products, itemId){
	      dispatch(selectProduct(products, itemId));
	    },
	    // getInventory(itemId){
	    //   dispatch(getInventory(itemId));
	    // },
	    addFavs(itemId){
	    	dispatch(addFavs(itemId));
	    },
	};
});

const ProductsPanel = connect(mapStateToProps, mapDispatchToProps)(Products);

export default ProductsPanel;


//export default Products;
