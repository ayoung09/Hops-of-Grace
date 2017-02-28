'use strict'

const db = require('APP/db')
const User = db.model('user')

const {mustBeLoggedIn, forbidden,} = require('./auth.filters')

module.exports = require('express').Router()
// get all users with query string
	.get('/', (req, res, next) =>
		User.findAll({ where: req.query })
		.then(users => res.json(users))
		.catch(next))
// create a new user
	.post('/', (req, res, next) =>
		User.create(req.body)
		.then(newUser => res.json(newUser))
		.catch(next))
// update a user
	.put('/:userId', (req, res, next) =>
		User.findById(req.params.userId)
		.then(user => user.update(req.body))
		.then(user => res.json(user))
		.catch(next))
// delete a user (admin or user itself)
	.delete('/:userId', (req, res, next) =>
		User.findById(req.params.userId)
		.then(user => user.destroy())
		.then(() => res.sendStatus(204))
		.catch(next))
// get an individual user
	.get('/:userId', (req, res, next) =>
		User.findById(req.params.userId)
		.then(user => res.json(user))
		.catch(next))
