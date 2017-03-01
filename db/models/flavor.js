'use strict';

const Sequelize = require('sequelize');
const db = require('APP/db');

const Flavor = db.define('flavors', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  }
})

module.exports = Flavor;
