'use strict'

const db = require('APP/db')
const User = db.model('users')
const Cart = db.model('carts')
const Address = db.model('addresses')
const Seller = db.model('sellers')

const {mustBeLoggedIn, forbidden,} = require('./auth.filters')

module.exports = require('express').Router()
// get all users with query string
	.get('/', (req, res, next) =>
		User.findAll({
			where: req.query,
			include: [{
				model: Address,
				as: 'shipping'
			}, {
				model: Address,
				as: 'billing'
			}]
		 })
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
// eager loading does not currently include Seller and Cart, will be approached later
	.get('/:userId', (req, res, next) =>
		User.findOne({
			where: {
				id: req.params.userId
			},
			include: [{
				model: Address,
				as: 'shipping'
			}, {
				model: Address,
				as: 'billing'
			}]
		})
		.then(user => res.json(user))
		.catch(next))

		// include: [ Cart ]
