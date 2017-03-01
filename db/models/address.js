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
    allowNull: false, // Do we just want a length of 2 validation?
  },
  zipCode: {
    type: Sequelize.STRING, //to do: validate for accuracy
    allowNull: false,
    validate: {
      len: [5], // what about 9 digit codes?
    },
  },
  // Does it make sense to separate area code?
  phoneNumber: {
    type: Sequelize.STRING,
    allowNull: false,  // They need a phoneNumber?
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
      return this.city + ', ' + this.address;  //what is this.address? does this work?
    },
  },
});

module.exports = Address;
