'use strict'

const db = require('APP/db')
const User = db.model('user')

const {mustBeLoggedIn, forbidden,} = require('./auth.filters')

module.exports = require('express').Router()
// get all users (shoppers and sellers)
	.get('/', (req, res, next) =>
		User.findAll()
		.then()
		.catch())
// create a new user
	.post('/', (req, res, next) =>
		User.create()
		.then()
		.catch())
// update a user (user info?)
	.put('/:userId', (req, res, next) =>
		User.update()
		.then()
		.catch())
// delete a user (admin or user itself)
	.delete('/', (req, res, next) =>
		User.destroy()
		.then()
		.catch())
// get an individual user
	.get('/:userId', (req, res, next) =>
		User.findById()
		.then()
		.catch())
