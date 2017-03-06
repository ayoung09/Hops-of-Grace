import React, { Component } from 'react';
import ReactDOM from 'react-dom';

//I would desttucture props in params. Self-documenting
//wait... we never use props
const Footer = (props => {

	let fakeArr=['must be 21 etc', 'dev team credits', 'not a real site'];
	//
	return (
	        <div className="row footer pad20">
	        	{fakeArr.map((data, index) =>{
	        		return (
				        <div key={index} className="col-sm-6 col-lg-4 text-center">
			              <h5 className="Choplin-Light">{data}</h5>
			            </div>
	        		)
	        	})}
            </div>
     );
});

export default Footer;
