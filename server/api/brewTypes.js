'use strict'

const db = require('APP/db')
const BrewType = db.model('brews')
const {mustBeLoggedIn, forbidden,} = require('./auth.filters')

module.exports = require('express').Router()
// get all types
	.get('/', (req, res, next) =>
		BrewType.findAll()
		.then()
		.catch())
// add a new type of beer
	.post('/', (req, res, next) =>
		BrewType.create()
		.then()
		.catch())
// edit info for a type of beer
	.put('/:brewTypeId', (req, res, next) =>
		BrewType.update()
		.then()
		.catch())
// delete a brew type
	.delete('/', (req, res, next) =>
		BrewType.destroy()
		.then()
		.catch())
// get a single brew type
	.get('/:brewTypeId', (req, res, next) =>
		BrewType.findById()
		.then()
		.catch())
