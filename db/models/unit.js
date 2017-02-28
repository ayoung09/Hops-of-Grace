'use strict';

const Sequelize = require('sequelize');
const db = require('APP/db');

const Unit = db.define('units', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  // I'm assuming that the following will be added thru associations (see index)
  // UnitID... set types of sale for each product
}, {
	indexes: [{fields: ['name'], unique: true,}],
})

module.exports = Unit;
