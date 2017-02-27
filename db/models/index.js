'use strict';

// Require our models. Running each module registers the model into sequelize
// so any other part of the application could call sequelize.model('User')
// to get access to the User model.

const User = require('./user');
const OAuth = require('./oauth');
const Seller = require('./seller');
const Address = require('./Address');

OAuth.belongsTo(User);
User.hasOne(OAuth);
Seller.belongsTo(User);
User.hasOne(Seller);

User.belongsTo(Address, {as: 'shipping_address'});
User.belongsTo(Address, {as: 'billing_address'});
Seller.belongsTo(Address);
module.exports = {User};
