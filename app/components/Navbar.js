import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

const Navbar = ({ brews, flavors }) => {
  console.log('These are brews on Navbar: ', brews);

  return (
    <div className="row pad10 nav">
      {/* <form> how do we want to have these work options or something else*/}
        <div className="col-sm-12 col-lg-2">
          <select className="form-control brown btxt">
            <option>Brew Type</option>
            {brews.map(brew => (
              <option>{brew.name}</option>))
            }
          </select>
        </div>
        <div className="col-sm-12 col-lg-2">
          <select className="form-control brown btxt">
          <option>Flavors</option>
            {flavors.map(flavor => (
              <option>{flavor.name}</option>))
            }
          </select>
        </div>
        <div className="col-sm-12 col-lg-2">
          <select className="form-control brown btxt">
            <option>Origins</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
        <div className="col-sm-12 col-lg-2">
          <select className="form-control brown btxt">
            <option>Brewery</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
        <div className="col-sm-12 col-lg-2">
          <span className="glyphicon glyphicon-search brown" aria-hidden="true"></span>
        </div>

        <div className="col-sm-12 col-lg-2">
        </div>
      {/*</form>*/}
    </div>
  )
}

export default Navbar;
