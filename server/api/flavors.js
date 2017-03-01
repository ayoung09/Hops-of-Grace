'use strict';

const db = require('APP/db');
const Flavors = db.model('flavors');

const { mustBeLoggedIn, forbidden } = require('./auth.filters');

//eager loading to be considered after general discussion...

module.exports = require('express').Router()
// get all flavors
	.get('/', (req, res, next) =>
		Flavors.findAll({
			where: req.query//,
			//include: [ Products ]
		})
		.then(flavors => res.json(flavors))
		.catch(next))
// get info for order by ID
	.get('/:flavorId', (req, res, next) =>
		Flavors.findOne({
			where: {id: req.params.flavorId},
			include: [ Products ]
		})
		.then(flavor => res.json(flavor))
		.catch(next))
// add a new flavor
	.post('/', (req, res, next) =>
		Flavors.create(req.body)
		.then(newFlavor => res.status(201).json(newFlavor))
		.catch(next))
// edit an flavor info (maybe not necessary?)
	.put('/:flavorId', (req, res, next) =>
		Flavors.findById(req.params.flavorId)
		.then(flavor => flavor.update(req.body))
		.then(updatedFlavor => res.json(updatedFlavor))
		.catch(next))
// delete an order (hopefully won't ever want to use this)
	.delete('/:flavorId', (req, res, next) =>
		Flavors.findById(req.params.flavorId)
		.then(flavor => flavor.destroy())
		.then(() => res.sendStatus(204))
		.catch(next))
