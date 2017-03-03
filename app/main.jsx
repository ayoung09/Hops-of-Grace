'use strict'
import React from 'react'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'

//import * as bootstrap from 'react-bootstrap'; -- for nav and tabs, etc.

import store from './store'
import Jokes from './components/Jokes'
import Login from './components/Login'
import WhoAmI from './components/WhoAmI'

//import Frame from './components/Frame'
import Framefake from './components/Framefake'

const ExampleApp = connect(
  ({ auth }) => ({ user: auth })
) (
  ({ user, children }) =>
    <div>
      <nav>
        {user ? <WhoAmI/> : <Login/>}
      </nav>
      {children}
    </div>
)

const initialLoad = (nextRouterState) => {
  //to fill in the header we want...

  /* to fill in the navBar we need:


  */


};

render (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={ExampleApp}>
        <IndexRedirect to="/jokes" />
        <Route path="/jokes" component={Jokes} />
      </Route>
      <Route path="/framefake" component={Framefake} />
      {/*<Route path="/frame" component={Frame} onEnter={initialLoad}/>*/}
    </Router>
  </Provider>,
  document.getElementById('main')
)
