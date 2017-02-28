'use strict'

const db = require('APP/db')
const Product = db.model('products')

const {mustBeLoggedIn, forbidden,} = require('./auth.filters')

module.exports = require('express').Router()
// list all beers or all beers by tag or beers by brewType -- add eager loading here too
	.get('/', (req, res, next) =>
		Product.findAll({ where: req.query },{ include: [ seller_id, brew_id, unit_id, photos, reviews ] }) //what are the aliases? rework
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
		Product.findById(req.params.productId)
		.then(product => product.update(req.body))
		.then(productUpdated => res.send(productUpdated))
		.catch(next))
// delete a beer (seller only)
	.delete('/:productId', (req, res, next) =>
		Product.findById(req.params.productId)
		.then(product => product.destroy())
		.then(() => res.sendStatus(204))
		.catch())
// get info for an individual beer
	.get('/:productId', (req, res, next) =>
		Product.findOne({ where: req.params.productId },{ include: [ seller_id, brew_id, unit_id, photos, reviews ] }) //again structure
		.then(product => { // EAGER ME!
			res.send(product);
		})
		.catch(next))

	//eager loading of sellerId, brewTypes, photos, review (userName, photos)
	//{ include: [ User ] }
