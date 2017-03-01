'use strict';

const Sequelize = require('sequelize');
const db = require('APP/db');

const BrewType = db.define('brews', {  // table name different from model name?
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  flavor: {
    type: Sequelize.ARRAY(Sequelize.TEXT), // Why use an array vs. an ENUM or foreign key to another table?
  },
  description: {
    type: Sequelize.TEXT
  },
  // I'm assuming that the following will be added thru associations (see index).
  // BrewID...
  // SellerID... one to one
  // Photos... multiple to one product entry
}, {
	indexes: [{fields: ['name'], unique: true,}], //why index on name instead of flavor?
})

module.exports = BrewType;
