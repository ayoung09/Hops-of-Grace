'use strict';

const Sequelize = require('sequelize');
const db = require('APP/db');

const CartProductQty = db.define('cartProductQtys', {
  quantity: {
    type: Sequelize.INTEGER,
    defaultValue: 1,
  },
});

module.exports = CartProductQty;
