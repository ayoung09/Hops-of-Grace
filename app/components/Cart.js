import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { setItemQty, removeItem, clearCart } from '../reducers/cart.jsx';

const mapStateToProps = (state => {
  return {
    currentCart: state.cart.currentCart,
    products: state.products.allProducts,
  };
})

//import actions from reducers
const mapDispatchToProps = (dispatch => {
  return {

  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(class extends Component {
    constructor(props){
      super(props);
    }

    render() {
      const cart = this.props.currentCart;
      const allProducts = this.props.products;

      return (
        <div>
          <table>
            <thead>
              <tr>
                <th>Photo</th>
                <th>Qty</th>
                <th>Product</th>
                <th>Line Total</th>
                <th>&nbsp;</th>
              </tr>
            </thead>
            <tbody>
              {
                Object.keys(cart).map(productId => {
                  const beer = allProducts.filter(product => {
                    return product.id === productId;
                  })[0];

                  return (
                    <tr key={productId}>
                      <td><img src={beer.photo} /></td>
                      <td>{cart[productId]}</td>
                      <td>{beer.name}</td>
                      <td>{beer.price}</td>
                      <td><button type="button" className="btn btn-danger"></button>Remove From Cart</td>
                  </tr>
                  )
                })
              }
              <tr>
                <td>Shipping & Tax</td>
                <td colspan="2"></td>
                <td>An amount of Money!</td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td>Total:</td>
                <td colspan="2">&nbsp;</td>
                <td colspan="2">$225.45</td>
              </tr>
              <tr>
                <td colspan="5"><button>Checkout Now!</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      )
    }
})

//<h4 className="Choplin-Medium bclose thumbT" value={entry.id} >{entry.name}</h4>
//<p className="Choplin-Light sm thumbT" value={entry.id} >{entry.brew.name}</p>
