'use strict';

const Sequelize = require('sequelize');
const db = require('APP/db');

const Order = db.define('orders', {
  date: { //track date submitted
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW
  },
  mailedOn: { //track date updated for states...
    type: Sequelize.DATE,
  },
  status: { //track last edits and auto-save... finish added model structure
    type: Sequelize.ENUM('Created', 'Processing', 'Mailed', 'Cancelled', 'Completed'),
    defaultValue: 'Created'
  },
  //Order will have cart_id associated; use cart_id to access products and quantities for the order

}, {
  instanceMethods: { //set to add date of shipping
    setMailed: function() {
        this.setDataValue('status', 'Mailed');
        this.setDataValue('mailedOn', Sequelize.NOW);
    },
  }
});

module.exports = Order;
