'use strict'

const db = require('APP/db')
const Seller = db.model('sellers')

module.exports = require('express').Router()
// list all breweries?
	.get('/', (req, res, next) =>
		Seller.findAll()
		.then()
		.catch())
// sign up new brewery
	.post('/', (req, res, next) =>
		Seller.create()
		.then()
		.catch())
// edit brewery info
	.put('/:sellerId', (req, res, next) =>
		Seller.update()
		.then()
		.catch())
// delete a brewery (seller or admin only)
	.delete('/', (req, res, next) =>
		Seller.destroy()
		.then()
		.catch())
// get info for one brewery
	.get('/:sellerId', (req, res, next) =>
		Seller.findById()
		.then()
		.catch())
