'use strict'

const db = require('APP/db')
const BrewType = db.model('brewTypes')
const {mustBeLoggedIn, forbidden,} = require('./auth.filters')

module.exports = require('express').Router()
// get all types
	.get('/', (req, res, next) =>
		BrewType.findAll({ where: req.query })
		.then(types => res.json(types))
		.catch(next))
// get a single brew type
	.get('/:brewTypeId', (req, res, next) =>
		BrewType.findById(req.params.brewTypeId)
		.then(type => res.json(type))
		.catch(next))
// add a new type of beer
	.post('/', (req, res, next) =>
		BrewType.create(req.body)
		.then(newType => res.status(201).json(newType))
		.catch(next))
// edit info for a type of beer
	.put('/:brewTypeId', (req, res, next) =>
		BrewType.findById(req.params.brewTypeId)
		.then(type => type.update(req.body))
		.then(updatedType => res.json(updatedType))
		.catch(next))
// delete a brew type
	.delete('/:brewTypeId', (req, res, next) =>
		BrewType.findById(req.params.brewTypeId)
		.then(type => type.destroy())
		.then(() => res.sendStatus(204))
		.catch(next))
