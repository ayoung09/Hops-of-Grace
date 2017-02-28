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
  mailed: { //track date updated for states...
    type: Sequelize.DATE,
  },
  status: { //track last edits and auto-save... finish added model structure
    type: Sequelize.ENUM('Created', 'Processing', 'Cancelled', 'Completed'),
    defaultValue: 'Created'
  },

}, {
  hooks: { //set to add date of shipping based on status update...
    beforeUpdate: (() => {
      let currentStatus = this.getDataValue('status');
      if (currentStatus === 'Processing') {
        this.setDataValue('mailed', Sequelize.NOW);
      };
    }),
  }//hooks done

})

module.exports = Order;
