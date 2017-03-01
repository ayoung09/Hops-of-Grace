'use strict';

const Sequelize = require('sequelize');
const db = require('APP/db');

const Product = db.define('products', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.TEXT
  },
  price: {
    type: Sequelize.DECIMAL,
    allowNull: false,
  }
  // Removed 'Quantity'...inventory to be implemented elsewhere
})

module.exports = Product;
