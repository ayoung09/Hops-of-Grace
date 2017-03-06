import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { logout } from 'APP/app/reducers/auth';

const Header = ({ user, logout }) => {

  return (
    <div className="row logoHeader pad20 bshadow">

      <div className="col-xs-10 col-sm-9 col-lg-8 logo">
        <Link to="/welcome"><h1 className="hidden-xs offwhite CoreMagic tshadowl"><span className="EvelethShapes">r</span> Hops of Grace <span className="EvelethShapes">s</span></h1></Link>
        <h4 className="hidden-sm hidden-md hidden-lg white CoreMagic"><span className="EvelethShapes">r</span> Hops of Grace <span className="EvelethShapes">s</span></h4>
      </div>


      <div className="whoami">
        <span>{user && `Hello, ${user.name}!`}</span>
      </div>


      {/* nav bar core functions - full screen */}
      {!user &&
        <div className="hidden-xs hidden-sm hidden-md col-lg-4 navL block-center">
          <div className="col-lg-4 navL">
            <button className="btn btn-default btxt" type="">barter?</button>
          </div>

          <div className="col-lg-4 navL block-center">
            <Link to="/login"><button className="btn btn-default btxt" type="">login</button></Link>
          </div>
        </div>
      }

      {user &&
        <div className="col-lg-4 navL block-center">
          <button onClick={logout} className="btn btn-default btxt" type="">logout</button>
        </div>
      }

        <div className="col-lg-4 navL block-center">
          <button className="btn btn-default btxt" type="">cart</button>
        </div>

      {/* nav bar core functions - mobile screen */}
      <div className="col-xs-2 col-sm-3 hidden-lg navsm">
        <p>collapse menu</p>
      </div>

    </div>
  )
}


export default connect(
  ({ auth }) => ({ user: auth }),
  { logout }
) (Header);
