import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';

const Header = () => {
  return (
    <div className="row logoHeader pad20 bshadow">

      <div className="col-xs-10 col-sm-9 col-lg-8 logo">
        <Link to="/welcome"><h1 className="hidden-xs offwhite CoreMagic tshadowl"><span className="EvelethShapes">r</span> Hops of Grace <span className="EvelethShapes">s</span></h1></Link>
        <h4 className="hidden-sm hidden-md hidden-lg white CoreMagic"><span className="EvelethShapes">r</span> Hops of Grace <span className="EvelethShapes">s</span></h4>
      </div>

      {/* nav bar core functions - full screen */}
      <div className="hidden-xs hidden-sm hidden-md col-lg-4 navL block-center">
        <div className="col-lg-4 navL">
          <button className="btn btn-default btxt" type="">barter?</button>
        </div>

        <div className="col-lg-4 navL block-center">
          <Link to="/login"><button className="btn btn-default btxt" type="">login</button></Link>
        </div>

        <div className="col-lg-4 navL block-center">
          <button className="btn btn-default btxt" type="">cart</button>
        </div>
      </div>

      {/* nav bar core functions - mobile screen */}
      <div className="col-xs-2 col-sm-3 hidden-lg navsm">
        <p>collapse menu</p>
      </div>

    </div>
  )
}

export default Header;
