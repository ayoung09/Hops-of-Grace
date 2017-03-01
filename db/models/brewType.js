'use strict';

const Sequelize = require('sequelize');
const db = require('APP/db');

const BrewType = db.define('brewTypes', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.TEXT
  },
})

module.exports = BrewType;
