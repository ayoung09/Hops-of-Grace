'use strict';

const Sequelize = require('sequelize');
const db = require('APP/db');

const Photo = db.define('photos', {
  source: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  caption: {
    type: Sequelize.TEXT,
  }
});

module.exports = Photo;
