'use strict';

const db = require('APP/db');
const Order = db.model('orders');
const User = db.model('users');
const Product = db.model('products');
const Cart = db.model('carts');
const CartProductQty = db.model('cartProductQtys');

const { mustBeLoggedIn, forbidden } = require('./auth.filters');

//eager loading to be considered after general discussion...

module.exports = require('express').Router()
// get all orders
	.get('/', (req, res, next) =>
		Order.findAll({
			where: req.query,
		})
		.then(orders => res.json(orders))
		.catch(next))
// get info for order by ID
	.get('/:orderId', (req, res, next) =>
		Order.findOne({
			where: {id: req.params.orderId},
			include: [ {
				model: Cart,
				include: [ {
					model: User}, {
					model: CartProductQty,
					include: [ Product ]}
				]
			}]
		})
		.then(order => res.json(order))
		.catch(next))
// add a new order
	.post('/', (req, res, next) =>
		Order.create(req.body)
		.then(newOrder => res.status(201).json(newOrder))
		.catch(next))
// edit an order info (maybe not necessary?)
	.put('/:orderId', (req, res, next) =>
		Order.findById(req.params.orderId)
		.then(order => order.update(req.body))
		.then(updatedOrder => res.json(updatedOrder))
		.catch(next))
// delete an order (hopefully won't ever want to use this)
	.delete('/:orderId', (req, res, next) =>
		Order.findById(req.params.orderId)
		.then(order => order.destroy())
		.then(() => res.sendStatus(204))
		.catch(next))

