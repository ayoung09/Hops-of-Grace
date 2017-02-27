'use strict';

const Sequelize = require('sequelize');
const db = require('APP/db');

const Address = db.define('address', {
  streetAddress: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  city: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  state: {
    type: Sequelize.STRING, //to do: validate for actual state
    allowNull: false,
  },
  zipCode: {
    type: Sequelize.STRING, //to do: validate for accuracy
    allowNull: false,
    validate: {
      isNumeric: true,
      len: [5],
    },
  },
  phoneNumber: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isNumeric: true,
      len: [10],
    },
  },
}, {
  getterMethods: {
    fullAddress: function() {
      return this.streetAddress + '\n' + this.city + ', ' + this.state + ' ' + this.zipCode;
    },
    cityState: function() {
      return this.city + ', ' + this.address;
    },
  },
});

module.exports = Address;
