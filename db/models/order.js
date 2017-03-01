'use strict';

const Sequelize = require('sequelize');
const db = require('APP/db');

const Order = db.define('orders', {
  contents: { // productId:quantity pairs as a JSONB
    type: Sequelize.ARRAY(Sequelize.JSONB),  //We should change this. It should be a mapping to specific products
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
    type: Sequelize.ENUM('Created', 'Processing', 'Cancelled', 'Completed'),  //good enum usage
    defaultValue: 'Created'
  },

}, {
  hooks: { //set to add date of shipping based on status update...
    beforeUpdate: (() => { //Whenever I do a model update, if the status is ever processing, set the mailed value? The mailed value should only be set once
      let currentStatus = this.getDataValue('status');
      if (currentStatus === 'Processing') {
        this.setDataValue('mailed', Sequelize.NOW);
      };
    }),
  }//hooks done

})

module.exports = Order;
