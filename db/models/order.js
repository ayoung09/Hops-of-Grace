'use strict';

const Sequelize = require('sequelize');
const db = require('APP/db');

const Order = db.define('orders', {
  contents: { // productId:quantity pairs as a JSONB
    type: Sequelize.JSONB,
    allowNull: false,
  },
  date: { //track date submitted
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW
  },
  posted: { //track date updated for states...
    type: Sequelize.DATE
  },
  status: { //track last edits and auto-save... finish added model structure
    type: Sequelize.ENUM()
    defaultValue: Sequelize.NOW
  },

  // I'm assuming that the following will be added thru associations (see index)
  // UserID... where it goes... enables link to delivery & billing associations, the email for updates
  // BuyerID... where it comes from...
  // other? review reminders?... via user.
})

module.exports = Order;
