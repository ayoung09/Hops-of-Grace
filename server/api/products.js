'use strict'

const db = require('APP/db')
const Product = db.model('products')

const {mustBeLoggedIn, forbidden,} = require('./auth.filters')

module.exports = require('express').Router()
// list all beers or all beers by tag or beers by brewType
	.get('/', (req, res, next) =>
		Product.findAll({ where: req.query })
		.then(products => res.send(products))
		// .then(products => res.send('hit route'))
		.catch(next))
// add a new beer (seller only)
	.post('/', (req, res, next) =>
		Product.create(req.body)
		.then(newProduct => res.json(newProduct))
		.catch(next))
// edit a beer's info (seller only)
	.put('/:productId', (req, res, next) =>
		Product.update({
			where: { id: req.params.productId }
		})
		.then(productUpdated => res.send(productUpdated))
		.catch(next))
// delete a beer (seller only)
	.delete('/:productId', (req, res, next) =>
		Product.destroy({
			where: { id: req.params.productId }
		})
		.then(done =>{
			res.send('product destroyed!')
		})
		.catch())
// get info for an individual beer - eager-loading gallore!
	.get('/:productId', (req, res, next) =>
		Product.findById(req.params.productId)
		.then(product => { // EAGER ME!
			res.send(product);
		})
		.catch(next))

	//eager loading of sellerId, brewTypes, photos, review (userName, photos)
