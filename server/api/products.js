'use strict'

const db = require('APP/db')
const Product = db.model('product')

module.exports = require('express').Router()
// list all beers
	.get('/', (req, res, next) =>
		Product.findAll()
		.then()
		.catch())
// add a new beer (seller only)
	.post('/', (req, res, next) =>
		Product.create()
		.then()
		.catch())
// edit a beer's info (seller only)
	.put('/:productId', (req, res, next) =>
		Product.update()
		.then()
		.catch())
// delete a beer (seller only)
	.delete('/', (req, res, next) =>
		Product.destroy()
		.then()
		.catch())
// get info for an individual beer
	.get('/:productId', (req, res, next) =>
		Product.findById()
		.then()
		.catch())
