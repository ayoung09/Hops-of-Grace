'use strict'

const db = require('APP/db')
const Cart = db.model('carts')
const {mustBeLoggedIn, forbidden,} = require('./auth.filters')

// changes to structure and required eager loading after the card/order discussion

module.exports = require('express').Router()
// list all carts
	.get('/', (req, res, next) =>
		Cart.findAll({ where: req.query })
		.then(carts => res.json(carts))
		.catch(next))
// get a single cart
	.get('/:cartId', (req, res, next) =>
		Cart.findById(req.params.cartId)
		.then(cart => res.json(cart))
		.catch(next))
// make a new cart
	.post('/', (req, res, next) =>
		Cart.create(req.body)
		.then(newCart => res.status(201).json(newCart))
		.catch(next))
// update a cart
	.put('/:cartId', (req, res, next) =>
		Cart.findById(req.params.cartId)
		.then(cart => cart.uodate(req.body))
		.then(updatedCart => res.json(updatedCart))
		.catch(next))
// delete a cart
	.delete('/:cartId', (req, res, next) =>
		Cart.findById(req.params.cartId)
		.then(cart => cart.destroy())
		.then(() => res.sendStatus(204))
		.catch(next))
