'use strict'

const db = require('APP/db');
const Cart = db.model('carts');
const Product = db.model('products');
const CartProductQty = db.model('cartProductQtys');

const { mustBeLoggedIn, forbidden } = require('./auth.filters');

// changes to structure and required eager loading after the card/order discussion

module.exports = require('express').Router()
// list all carts
	.get('/', (req, res, next) =>
		Cart.findOrCreate({
				where: {
			session: req.session.userId,
			}
	 	})
		.spread((cart, found) => {
			res.json(cart)
		})
		.catch(next))
// get a single cart
	.get('/:cartId', (req, res, next) =>
		Cart.findOrCreate({
			where: {user_id: req.params.cartId},
		})
		.spread((cart, found) => {
			res.json(cart)
		})
		.catch(next))
// make a new cart
	.post('/', (req, res, next) =>
		Cart.create(req.body)
		.then(newCart => res.status(201).json(newCart))
		.catch(next))
// update a cart
	.put('/:cartId', (req, res, next) =>
		Cart.findById(req.params.cartId)
		.then(cart => cart.update(req.body))
		.then(updatedCart => res.json(updatedCart))
		.catch(next))
// delete a cart
	.delete('/:cartId', (req, res, next) =>
		Cart.findById(req.params.cartId)
		.then(cart => cart.destroy())
		.then(() => res.sendStatus(204))
		.catch(next))
