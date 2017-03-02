'use strict'

const db = require('APP/db')
const Product = db.model('products')
const Inventory =db.model('inventories')

const {mustBeLoggedIn, forbidden,} = require('./auth.filters')

module.exports = require('express').Router()

	.get('/', (req, res, next) =>
		Inventory.findAll({
			where: req.query,
			include: [ Product ] //for orientation? ease of reading
		})
		.then(products => res.send(products))
		// .then(products => res.send('hit route'))
		.catch(next))
// get inventory info for an individual beer... does it make sense to search by beer
	.get('/:productId', (req, res, next) =>
		Inventory.findOne({
			where: {
				product_id : req.params.productId
			},
		})
		.then(inventory => {
			res.send(inventory);
		})
		.catch(next))
// add a inventory beer (seller only) -- always in tandem w/ beer creation!
	.post('/', (req, res, next) =>
		Inventory.create(req.body)
		.then(newInventory => res.status(201).json(newInventory))
		.catch(next))
// edit a beer's inventory info (seller only)
	.put('/:productId', (req, res, next) =>
		Inventory.findOne({
			where: {
				product_id : req.params.productId
			},
		})
		.then(inventory => inventory.update(req.body))
		.then(inventoryUpdated => res.send(inventoryUpdated))
		.catch(next))
// delete a beer's inventory (seller only)
	.delete('/:productId', (req, res, next) =>
		Inventory.findOne({
			where: {
				product_id : req.params.productId
			},
		})
		.then(inventory => inventory.destroy())
		.then(() => res.sendStatus(204))
		.catch())
