import React from 'react';

const CartItem = ({ beer, cart, setNewQty, removeFromCart }) => {
  return (
    <tr key={beer.id}>
      <td><img className="singleBimg bshadow" src={beer.photo.source} /></td>
      <td>
        <select
        className="form-control"
        name={beer.id}
        value={cart[beer.id]}
        onChange={setNewQty}
        >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        </select>
      </td>
      <td className="Choplin-Light">{beer.name}</td>
      <td className="Choplin-Light">{beer.price}</td>
      <td><button
        type="button"
        name={beer.id}
        className="btn btn-danger Choplin-Light"
        onClick={removeFromCart}
        >Remove From Cart</button></td>
  </tr>
  )
}

export default CartItem;
