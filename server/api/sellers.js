'use strict'

const db = require('APP/db')
const Seller = db.model('sellers')
const Address = db.model('addresses')
const Product = db.model('products')
const User = db.model('users')
const {mustBeLoggedIn, forbidden,} = require('./auth.filters')

module.exports = require('express').Router()
// list all breweries
	.get('/', (req, res, next) =>
		Seller.findAll({
			where: req.query,
			include: [{
				model: Address,
				as: 'contact'
			}, {
				model: Product
			}, {
				model: User
			}]
		 })
		.then(seller => res.json(seller))
		.catch(next))
// sign up new brewery
	.post('/', (req, res, next) =>
		Seller.create(req.body)
		.then(seller => res.json(seller))
		.catch())
// edit brewery info
	.put('/:sellerId', (req, res, next) =>
		Seller.findById(req.params.sellerId)
		.then(seller => seller.update(req.body))
		.then(seller => res.json(seller))
		.catch(next))
// delete a brewery
	.delete('/:sellerId', (req, res, next) =>
		Seller.findById(req.params.sellerId)
		.then(seller => seller.destroy())
		.then(() => res.sendStatus(204))
		.catch(next))
// get info for one brewery
	.get('/:sellerId', (req, res, next) =>
		Seller.findOne({
			where: {
        id: req.params.sellerId,
			},
			include: [{
				model: Address,
				as: 'contact'
			}, {
				model: Product
			}, {
				model: User
			}]
		})
		.then(seller => res.json(seller))
		.catch(next))
