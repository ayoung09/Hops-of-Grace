'use strict'

const db = require('APP/db')
const Photo = db.model('photos')
const {mustBeLoggedIn, forbidden,} = require('./auth.filters')

module.exports = require('express').Router()
// get all pictures
	.get('/', (req, res, next) =>
		Photo.findAll()
		.then()
		.catch())
// add a new picture
	.post('/', (req, res, next) =>
		Photo.create()
		.then()
		.catch())
// change a picture (necessary?)
	.put('/:photoId', (req, res, next) =>
		Photo.update()
		.then()
		.catch())
// delete a picture
	.delete('/', (req, res, next) =>
		Photo.destroy()
		.then()
		.catch())
// get a single picture
	.get('/:photoId', (req, res, next) =>
		Photo.findById()
		.then()
		.catch())
