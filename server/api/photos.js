'use strict'

const db = require('APP/db')
const Photo = db.model('photos')
const {mustBeLoggedIn, forbidden,} = require('./auth.filters')

module.exports = require('express').Router()
// get all pictures
	.get('/', (req, res, next) =>
		Photo.findAll({ where: req.query })
		.then(photos => res.json(photos))
		.catch(next))
// get a single picture
	.get('/:photoId', (req, res, next) =>
		Photo.findById(req.params.photoId)
		.then(photo => res.json(photo))
		.catch(next))
// add a new picture
	.post('/', (req, res, next) =>
		Photo.create(req.body)
		.then(newPhoto => res.status(201).json(newPhoto))
		.catch(next))
// change a picture (necessary?)
	.put('/:photoId', (req, res, next) =>
		Photo.findById(req.params.photoId)
		.then(photo => photo.update(req.body))
		.then(updatedPhoto => res.json(updatedPhoto))
		.catch(next))
// delete a picture
	.delete('/:photoId', (req, res, next) =>
		Photo.findById(req.params.photoId)
		.then(photo => photo.destroy())
		.then(() => res.sendStatus(204))
		.catch(next))
