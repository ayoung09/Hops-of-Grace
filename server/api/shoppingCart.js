'use strict'

const db = require('APP/db')
const ShoppingCart = db.model('shoppingCarts')

module.exports = require('express').Router()
// list all carts
	.get('/', (req, res, next) =>
		ShoppingCart.findAll()
		.then()
		.catch())
// make a new cart
	.post('/', (req, res, next) =>
		ShoppingCart.create()
		.then()
		.catch())
// update a cart
	.put('/:shoppingCartId', (req, res, next) =>
		ShoppingCart.update()
		.then()
		.catch())
// delete a cart
	.delete('/', (req, res, next) =>
		ShoppingCart.destroy()
		.then()
		.catch())
// get a single cart
	.get('/:shoppingCartId', (req, res, next) =>
		ShoppingCart.findById()
		.then()
		.catch())
