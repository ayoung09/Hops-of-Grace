'use strict';

// Require our models. Running each module registers the model into sequelize
// so any other part of the application could call sequelize.model('User')
// to get access to the User model.

//I'm commenting out, but including models from Alexia in order to set relationships...


const User = require('./user');
const OAuth = require('./oauth');

const Product = require('./product');
const Seller = require('./seller');
const Review = require('./review');

const Photo = require('./photo');
const BrewType = require('./brewType');
const Unit = require('./unit');

OAuth.belongsTo(User);
User.hasOne(OAuth);

Product.belongsTo(Seller); //sellerID on product
Seller.hasMany(Product); //symmetrical

Seller.hasMany(Photo, {as: 'seller'}); //sellerID on photo

//symetrical associations?
Product.belongsTo(BrewType, {as: 'brew'}); //brewID on product
Product.belongsTo(Unit); //unitID on product

Product.hasMany(Photo, {as: 'product'}); //productID on photo

//reviews - created from/after product by logged-in user
Review.belongsTo(Product); //productID on review
Review.belongsTo(User); //userID on review
Review.hasMany(Photo, {as: 'review'});

module.exports = {
	User,
	Product,
	Photo,
	Seller,
	BrewType,
	Unit,
	Review
};
