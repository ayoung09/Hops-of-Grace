'use strict'

const db = require('APP/db')
const Order = db.model('orders')

module.exports = require('express').Router()
// get all orders
	.get('/', (req, res, next) =>
		Orders.findAll()
		.then()
		.catch())
// add a new order
	.post('/', (req, res, next) =>
		Orders.create()
		.then()
		.catch())
// edit an order info (maybe not necessary?)
	.put('/:ordersId', (req, res, next) =>
		Orders.update()
		.then()
		.catch())
// delete an order (hopefully won't ever want to use this)
	.delete('/', (req, res, next) =>
		Orders.destroy()
		.then()
		.catch())
// get info for order by ID
	.get('/:ordersId', (req, res, next) =>
		Orders.findById()
		.then()
		.catch())
