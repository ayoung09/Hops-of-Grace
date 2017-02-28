'use strict';

const Sequelize = require('sequelize');
const db = require('APP/db');

const Seller = db.define('seller', {
  breweryName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isAlphaNumeric: true,
    },
  },
  description: Sequelize.TEXT,
  website: {
    type: Sequelize.STRING,
    validate: {
      isUrl: true,
    },
  }
});

module.exports = Seller;
