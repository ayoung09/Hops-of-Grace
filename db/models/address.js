'use strict';

const Sequelize = require('sequelize');
const db = require('APP/db');

const Address = db.define('addresses', {
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
    validate: {
      len: [2],
    }
  },
  zipCode: {
    type: Sequelize.STRING, //to do: validate for accuracy
    allowNull: false,
    validate: {
      len: [5, 10],
    },
  },
  phoneNumber: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      len: [10],
    },
  },
}, {
  getterMethods: {
    fullAddress: function() {
      return this.streetAddress + '\n' + this.city + ', ' + this.state + ' ' + this.zipCode;
    },
    cityState: function() {
      return this.city + ', ' + this.state;
    },
  },
});

module.exports = Address;
