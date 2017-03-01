'use strict';

const Sequelize = require('sequelize');
const db = require('APP/db');

const Cart = db.define('carts', {
  contents: { // productId:quantity pairs as a JSONB
    type: Sequelize.ARRAY(Sequelize.JSONB), //ewwwwwwwwwww but good job picking jsonb over json
    allowNull: false,
  },
  session: { //from cookies when logged-in
    type: Sequelize.INTEGER,  //Probably a string, not in integer
    //allowNull: false, //comment back in later
  },
  date: { //track last edits and auto-save //maybe call it lastEdited instead of date
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW
  }
  // I'm assuming that the following will be added thru associations (see index)
  // UserID... one seller per product
})

module.exports = Cart;
