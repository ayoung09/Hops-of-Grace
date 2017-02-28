'use strict';

const Sequelize = require('sequelize');
const db = require('APP/db');

const Cart = db.define('carts', {
  contents: { // productId:quantity pairs as a JSONB
    type: Sequelize.JSONB,
    allowNull: false,
  },
  session: { //from cookies when logged-in
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  date: { //track last edits and auto-save
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW
  }
  // I'm assuming that the following will be added thru associations (see index)
  // UserID... one seller per product
})

module.exports = Cart;
