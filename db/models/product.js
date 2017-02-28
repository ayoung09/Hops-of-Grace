'use strict';

const Sequelize = require('sequelize');
const db = require('APP/db');

const Product = db.define('products', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  flavor: {
    type: Sequelize.ARRAY(Sequelize.TEXT),
  },
  description: {
    type: Sequelize.TEXT
  },
  price: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  quantity: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
    validate: {
      isInt: true,
    }
  },
  // I'm assuming that the following will be added thru associations (see index)
  // BrewID... unique brew types... each product can have one
  // SellerID... one seller per product
  // Photos... multiple to one product entry
  // UnitID... set types of sale
}, {
	indexes: [{fields: ['name'], unique: true,}],
  // hooks: {
  //   beforeValidate: //set a method of setting baseline price
  // },
})

module.exports = Product;
