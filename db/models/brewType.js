'use strict';

const Sequelize = require('sequelize');
const db = require('APP/db');

const BrewType = db.define('brews', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {

    }
  },
  flavor: {
    type: Sequelize.ARRAY(Sequelize.TEXT),
  },
  description: {
    type: Sequelize.TEXT
  },
  // I'm assuming that the following will be added thru associations (see index).
  // BrewID...
  // SellerID... one to one
  // Photos... multiple to one product entry
}, {
	indexes: [{fields: ['name'], unique: true,}],
})

module.exports = BrewType;
