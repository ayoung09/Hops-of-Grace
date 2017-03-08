import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { setItemQty, removeItem, clearCart, incrementItem } from '../reducers/cart.jsx';

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
        <div className="checkout text-center row table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th></th>
                <th className="Choplin-Light">Quantity</th>
                <th className="Choplin-Light">Product</th>
                <th className="Choplin-Light">Line Total</th>
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
                      <td><input type="text" value={cart[productId]} /></td>
                      <td>{beer.name}</td>
                      <td>{beer.price}</td>
                      <td><button type="button" className="btn btn-danger"></button>Remove From Cart</td>
                  </tr>
                  )
                })
              }
              <tr>
                <td className="Choplin-Medium">Shipping & Tax</td>
                <td colSpan="2"></td>
                <td className="Choplin-Medium">An amount of Money!</td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td className="Choplin-Medium">Total:</td>
                <td colSpan="2">&nbsp;</td>
                <td colSpan="2" className="Choplin-Medium">$225.45</td>
              </tr>
              <tr>
                <td colSpan="5"><button type="button" className="btn btn-primary Choplin-Light">Checkout Now!</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      )
    }
})

//<h4 className="Choplin-Medium bclose thumbT" value={entry.id} >{entry.name}</h4>
//<p className="Choplin-Light" sm thumbT" value={entry.id} >{entry.brew.name}</p>
