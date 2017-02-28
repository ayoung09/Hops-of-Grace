'use strict';

const Sequelize = require('sequelize');
const db = require('APP/db');

const Review = db.define('reviews', {
  writeUp: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  stars: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
    validate: {
      max: 5,
    }
  },
  // I'm assuming that the following will be added thru associations (see index)
  // ProductID... unique brew types... each product can have one
  // UserID... one seller per product
})

module.exports = Review;
