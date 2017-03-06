import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

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

const CartItem = () => {

  return (
    <tr>
      <td><img src="" /></td>
      <td><input /></td>
      <td></td>
      <td></td>
      <td><span class="remove"><img src={/* trash can picture */} alt="X" /></span></td>
  </tr>
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(class extends Component {
    constructor(props){
      super(props);
    }

    render() {
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
                props.currentCart.map
              }
            </tbody>
          </table>
        </div>
      )
    }
})

//<h4 className="Choplin-Medium bclose thumbT" value={entry.id} >{entry.name}</h4>
//<p className="Choplin-Light sm thumbT" value={entry.id} >{entry.brew.name}</p>
