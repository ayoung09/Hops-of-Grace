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

const Order = require('./order');
const Cart = require('./cart');

OAuth.belongsTo(User);
User.hasOne(OAuth);

Product.belongsTo(Seller, {as: 'seller'}); //sellerID on product
Seller.hasMany(Product, {as: 'product'}); //symmetrical

Seller.hasMany(Photo, {as: 'seller'}); //sellerID on photo

//symetrical associations?
Product.belongsTo(BrewType, {as: 'brew'}); //brewID on product
Product.belongsTo(Unit, {as: 'unit'}); //unitID on product

Product.hasMany(Photo, {as: 'product'}); //productID on photo

//reviews - created from/after product by logged-in user
Review.belongsTo(Product, {as: 'product'}); //productID on review
Review.belongsTo(User, {as: 'user'}); //userID on review

//shopping sessions - auto-save cart and deliberate purchases
Cart.belongsTo(User, {as: 'user'}); //userID on cart... within cart.contents there are the productIDs (keys) and Quantities (values)


//need to add order status




module.exports = {
	User,
	Product,
	Photo,
	Seller,
	BrewType,
	Unit,
	Review
};
