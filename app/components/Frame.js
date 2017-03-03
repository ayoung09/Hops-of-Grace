import React, { Component } from 'react';
import ReactDOM from 'react-dom';

//import dumb components later
//import any use of link, hashhistory, etc....

class Frame extends React.Component {

// add props/super/local state as necessary later

// the dumb HTML/JSV
  render() {

    return (
          <div className="container-fluid no-overflow">

          {/* header for log-in */}
            <div className="row logoHeader pad20 bshadow">

              <div className="col-xs-10 col-sm-9 col-lg-8 logo">
                <h1 className="hidden-xs offwhite CoreMagic tshadowl"><span className="EvelethShapes">r</span> Hops of Grace <span className="EvelethShapes">s</span></h1>
                <h4 className="hidden-sm hidden-md hidden-lg white CoreMagic"><span className="EvelethShapes">r</span> Hops of Grace <span className="EvelethShapes">s</span></h4>
              </div>

              {/* nav bar core functions - full screen */}
              <div className="hidden-xs hidden-sm hidden-md col-lg-4 navL block-center">
                <div className="col-lg-4 navL">
                  <button className="btn btn-default btxt" type="">barter?</button>
                </div>

                <div className="col-lg-4 navL block-center">
                  <button className="btn btn-default btxt" type="">login/logout</button>
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

          {/* navigation bar with mini search box, 6 spaces ?...iterate through later */}
            <div className="row pad10 nav">
              {/* <form> how do we want to have these work options or something else*/}
                <div className="col-sm-12 col-lg-2">
                  <select className="form-control brown btxt">
                    <option>Brew Type</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>
                <div className="col-sm-12 col-lg-2">
                  <select className="form-control brown btxt">
                    <option>Flavors</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
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

          {/* splash image with main search */}
            {/* on products - likely main photo/info .... break down this into smaller sections*/}
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
                    <button type="submit" className="btn btn-default of20">Search</button>
                  </form>

                </div>
                <div className="col-sm-12 col-lg-8 text-center">
                  <h1 className="white CoreMagic tshadow">brew & barter</h1>
                  <h2 className="white EvelethShapes tshadow">" " " " " " " "</h2>
                  <h3 className="white ThirstyRoughReg tshadow"><span className="white EvelethShapes">u </span> discover great small batch beer <span className="white EvelethShapes"> v</span> </h3>
                </div>

            </div>

          {/* array of random products */}
            {/* on products - secondary info or related tags, etc. ...break down this into smaller sections */}
            <div className="row opening pad20">

            {/*
              <div className="col-sm-1 col-lg-1 arrows">
                <h1 className="EvelethShapes lrg white tshadowl">p</h1>
              </div>


              <div className="col-sm-10 col-lg-10"> */}

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

          {/* footer */}
            <div className="row footer pad20">
              {/* iterate if possible */}
              <div className="col-sm-6 col-lg-4 text-center">
                <h5 className="Choplin-Light">must be 21 etc</h5>
              </div>
              <div className="col-sm-6 col-lg-4 text-center">
                <h5 className="Choplin-Light">dev team credits</h5>
              </div>
              <div className="col-sm-6 col-lg-4 text-center">
                <h5 className="Choplin-Light">not a real site</h5>
              </div>
            </div>

          </div>






    )
  }
}

export default Frame;
