'use strict';

const Sequelize = require('sequelize');
const db = require('APP/db');

const Cart = db.define('carts', {
  session: { //from cookies when logged-in
    type: Sequelize.INTEGER,
    //allowNull: false, //comment back in later
  },
  lastEdited: { //track last edits and auto-save
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW
  },
  status: {
    type: Sequelize.ENUM('Active', 'Purchased'),
    defaultValue: 'Active',
  },
  // I'm assuming that the following will be added thru associations (see index)
  // UserID... one seller per product
});

module.exports = Cart;
