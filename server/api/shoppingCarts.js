'use strict'

const db = require('APP/db')
const Cart = db.model('cart')

module.exports = require('express').Router()
// list all carts
	.get('/', (req, res, next) =>
		Cart.findAll()
		.then()
		.catch())
// make a new cart
	.post('/', (req, res, next) =>
		Cart.create()
		.then()
		.catch())
// update a cart
	.put('/:cartId', (req, res, next) =>
		Cart.update()
		.then()
		.catch())
// delete a cart
	.delete('/', (req, res, next) =>
		Cart.destroy()
		.then()
		.catch())
// get a single cart
	.get('/:cartId', (req, res, next) =>
		Cart.findById()
		.then()
		.catch())
