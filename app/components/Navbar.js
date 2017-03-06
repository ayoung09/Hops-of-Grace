import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    //unused state? Why is this component stateful?
    this.state = {
      filterType: '',
      filterId: '',
    };
  }

//create setState functions to correspond with selected filter option

  render () {

    return (
      <div className="row pad10 nav">
        {/* <form> how do we want to have these work options or something else*/}
          <div className="col-sm-12 col-lg-2">
            <select className="form-control brown btxt">
              <option>Brew Type</option>
              {this.props.brews.map(brew => (
                <option key={brew.id}>{brew.name}</option>))
              }
            </select>
          </div>
          <div className="col-sm-12 col-lg-2">
            <select className="form-control brown btxt">
            <option>Flavors</option>
              {this.props.flavors.map(flavor => (
                <option key={flavor.id}>{flavor.name}</option>))
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
}

export default Navbar;
