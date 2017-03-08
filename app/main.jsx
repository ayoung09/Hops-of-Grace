'use strict'
import React from 'react'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'
import axios from 'axios'

import store from './store'

//actions
import { loadCart } from './reducers/cart';
import {loadAllProducts, allInventories} from './reducers/products'
import {loadAllSellers, loadAllStates} from './reducers/sellers'
import {loadAllBrews} from './reducers/brews'
import {loadAllFlavors} from './reducers/flavors'
import {getFavs} from './reducers/reviews'

//jokes to be combined
import Jokes from './components/Jokes'
import WhoAmI from './components/WhoAmI'

//old formatting
import Framefake from './components/Framefake'

//new pieces
import Frame from './components/Frame'
import StartPage from './components/Start'
import Login from './components/Login'
import ProductsPage from './components/Products'
import ProductPage from './components/Product'
import Cart from './components/Cart'


const onEnter = (nextRouterState) => {

      const cartId = nextRouterState.auth ? nextRouterState.auth.id : "";
      const cart = axios.get(`/api/carts/${cartId}`)
        .then(cartFound => cartFound.data)
        .then(cartData => axios.get(`/api/cartProductQtys/${cartData.id}`));

      const productsA = axios.get('/api/products');
      const sellersA = axios.get('/api/sellers');
      const brewsA = axios.get('/api/brewTypes');
      const flavorsA = axios.get('/api/flavors');
      const inventoryA = axios.get('/api/inventories');


      return Promise
      .all([productsA, sellersA, brewsA, flavorsA, inventoryA, cart])
      .then(responses => responses.map(r => r.data))
      .then(([products, sellers, brews, flavors, inventory, userCart]) => {
        const cartToDispatch = {};
        userCart.map(item => {
          cartToDispatch[item.product_id] = item.quantity;
        });

        store.dispatch(loadCart(cartToDispatch));
        store.dispatch(loadAllProducts(products));
        store.dispatch(loadAllSellers(sellers));
        store.dispatch(loadAllBrews(brews));
        store.dispatch(loadAllFlavors(flavors));
        store.dispatch(loadAllStates(sellers));
        store.dispatch(allInventories(inventory));
        store.dispatch(getFavs());

      }).catch(err=>{
        console.log(err);
      });

};

render (
  <Provider store={store}>
    <Router history={browserHistory}>
      {/*<Route path="/" component={ExampleApp}>
        <IndexRedirect to="/jokes" />
        <Route path="/jokes" component={Jokes} />
      </Route>
      <Route path="/framefake" component={Framefake} />*/}

    {/* general structure below comment on and off to work with additions */}

      <Route path="/" component={Frame} onEnter={onEnter} >
        <IndexRedirect to="/welcome" />
        <Route path="/welcome" component={StartPage} />
        <Route path="/login" component={Login} />

        <Route path="/products" component={ProductsPage} />
        <Route path="/product/:productId" component={ProductPage} />
        <Route path="/cart" component={Cart} />

        {/*<Route path="/signIn" component={SignIn} />

        <Route path="/signUp" component={SignUp} />
        <Route path="/signUpSeller" component={SignUpSeller} />


        <Route path="/user/:userId" component={UserPage} />
        <Route path="/user/:userId/cart" component={UserCart} />
        <Route path="/user/:userId/cart" component={UserCheckout} />

        <Route path="/brewery/:userId" component={BreweryPage} />
        <Route path="/brewery/:userId/newProduct" component={CreateProduct} />
        <Route path="/brewery/:userId/mgmtProduct" component={MgmtProduct} />*/}

      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
)
