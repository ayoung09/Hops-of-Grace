import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import { browserHistory, Link } from 'react-router';
//import any use of link, hashhistory, etc....

//import dumb components later
import Header from './Header.js';
import Footer from './Footer.js';
import Navbar from './Navbar.js';
//import

//import needed actions for dispatch and bubbling changes up...

class FrameBase extends React.Component {
  constructor(props) {
    super(props);
  }

// add props/super/local state as necessary later

// the dumb HTML/JSV
  render() {

    return (
          <div className="container-fluid no-overflow">
            <Header />

            <Navbar
              brews={this.props.brews}
              flavors={this.props.flavors}/>

          { this.props &&
              this.props.children && React.cloneElement(this.props.children, Object.assign({}, this.props))
              //this goes to all nested pages... i.e. all pages
          }

          <Footer />
          </div>
    )
  }
}

const mapStateToProps = (state => {

  //should we clean/shorten the initial state structures?

  return {
      allProducts : state.products.allProducts,
      allsellers : state.sellers.allsellers,
      brews : state.brews.brews,
      flavors : state.flavors.flavors,
      //states : state.sellers.states,
      //currentCart : {},
      //currentUser : {},
  }

});

const mapDispatchToProps = (dispatch => {
  return {};
});

const Frame = connect(mapStateToProps, mapDispatchToProps)(FrameBase);

export default Frame;
