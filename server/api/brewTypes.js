'use strict'

const db = require('APP/db')
const BrewType = db.model('brews')
const {mustBeLoggedIn, forbidden,} = require('./auth.filters') //Don't import things we aren't using
//This doesn't look finished. Missing responses too
module.exports = require('express').Router()
// get all types
	.get('/', (req, res, next) =>
		BrewType.findAll()
		.then()
		.catch())//catch your errors! call next!!!!!
// add a new type of beer
	.post('/', (req, res, next) =>
		BrewType.create() //req.body needed
		.then()
		.catch())//catch your errors! call next!!!!!
// edit info for a type of beer
	.put('/:brewTypeId', (req, res, next) =>
		BrewType.update() //need req.body. What are we updating? Also need where clause with id
		.then()
		.catch())//catch your errors! call next!!!!!
// delete a brew type
	.delete('/', (req, res, next) => //Need id to destroy
		BrewType.destroy() //destroy all brew types??? need where clause
		.then()
		.catch())//catch your errors! call next!!!!!
// get a single brew type
	.get('/:brewTypeId', (req, res, next) =>
		BrewType.findById() //missing id
		.then()
		.catch()) //catch your errors! call next!!!!!
