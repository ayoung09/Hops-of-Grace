import React, { Component } from 'react';
import { connect } from 'react-redux';
import CartItem from './CartItem';
import { setItemQty, removeItem } from '../reducers/cart.jsx';

const mapStateToProps = (state => {
  return {
    cart: state.cart,
    products: state.products.allProducts,
  };
})

const mapDispatchToProps = (dispatch => {
  return {
    removeItem(itemId){
      dispatch(removeItem(itemId));
    },
    setItemQty(itemId, quantity){
      dispatch(setItemQty(itemId, quantity));
    }
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(class extends Component {
    constructor(props){
      super(props);

      this.setNewQty = this.setNewQty.bind(this);
      this.removeFromCart = this.removeFromCart.bind(this);
      this.calculateTotal = this.calculateTotal.bind(this);
      this.calculateTaxes = this.calculateTaxes.bind(this);
    }

    setNewQty(e){
      const item = e.target.name;
      const qty = e.target.value;
      this.props.setItemQty(item, qty);
    }

    removeFromCart(e){
      e.preventDefault();
      const item = Number(e.target.name);
      this.props.removeItem(item);
    }

    calculateTotal(){

    }

    calculateTaxes(){

    }

    render() {
      const cart = this.props.cart.currentCart;
      const allProducts = this.props.products;

      return (
        <div className="checkout text-center row table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th></th>
                <th className="Choplin-Light">Quantity</th>
                <th className="Choplin-Light">Product</th>
                <th className="Choplin-Light">Price</th>
                <th>&nbsp;</th>
              </tr>
            </thead>
            <tbody>
              {
                  Object.keys(cart).map(Number).map(productId => {
                  const beer = allProducts.filter(product => {
                    return product.id === productId;
                  })[0]

                  return (
                    <CartItem beer={beer} cart={cart} setNewQty={this.setNewQty} removeFromCart={this.removeFromCart} />
                  )

                })
              }
              <tr>
                <td className="Choplin-Medium">Shipping & Tax</td>
                <td colSpan="2"></td>
                <td className="Choplin-Medium">{this.calculateTaxes()}</td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td className="Choplin-Medium">Total:</td>
                <td colSpan="2">&nbsp;</td>
                <td colSpan="2" className="Choplin-Medium">{this.calculateTotal()}</td>
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
