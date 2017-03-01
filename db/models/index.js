'use strict';

// Require our models. Running each module registers the model into sequelize
// so any other part of the application could call sequelize.model('User')
// to get access to the User model.

//I'm commenting out, but including models from Alexia in order to set relationships...

const User = require('./user');
const OAuth = require('./oauth');
const Seller = require('./seller');
const Address = require('./address');

const Product = require('./product');
const Review = require('./review');

const Photo = require('./photo');
const BrewType = require('./brewType');
const Unit = require('./unit');

const Order = require('./order');
const Cart = require('./cart');

OAuth.belongsTo(User);
User.hasOne(OAuth);
Seller.belongsTo(User);
User.hasOne(Seller);

User.belongsTo(Address, {as: 'shipping'});
User.belongsTo(Address, {as: 'billing'});
Seller.belongsTo(Address, {as: 'contact'});

Product.belongsTo(Seller); //sellerID on product
Seller.hasMany(Product); //symmetrical
Seller.hasMany(Photo, {as: 'seller'}); //sellerID on photo

//symetrical associations?
Product.belongsTo(BrewType, {as: 'brew'}); //brewID on product
Product.belongsTo(Unit); //unitID on product
Product.hasMany(Photo, {as: 'product'}); //productID on photo
Photo.belongsTo(Product); //brewID on product


//shopping sessions - auto-save cart and deliberate purchases
Cart.belongsTo(User); //userID on cart... within cart.contents there are the productIDs (keys) and Quantities (values)
Review.belongsTo(Product); //productID on review
Product.hasMany(Review); //reviewID on product
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
