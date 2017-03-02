'use strict';

const Sequelize = require('sequelize');
const db = require('APP/db');

const Inventory = db.define('inventories', {
  qtyAvailable: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  qtySold: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  lastPurchased: {
    type: Sequelize.DATE,
  },
});

module.exports = Inventory;
