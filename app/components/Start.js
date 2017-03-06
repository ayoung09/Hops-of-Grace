import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import { browserHistory, Link } from 'react-router';

import ProductsPanel from './Products.js';
import SearchPanel from './Search.js';

const StartPage= (props=>{
	//search and products both have local, form actions...
	//react-redux connection to store for state stuff instead of passing down
	console.log(props);

	return (
	     	<div>
	      		<SearchPanel />
          		<ProductsPanel size="productsHalf" />
          	</div>
	)
})

export default StartPage;
