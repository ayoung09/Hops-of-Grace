'use strict'

const db = require('APP/db')
const Address = db.model('addresses')

const {mustBeLoggedIn, forbidden,} = require('./auth.filters')


module.exports = require('express').Router()
// get all addresses
	.get('/', (req, res, next) =>
		Address.findAll({ where: req.query })
		.then(addresses => res.json(addresses))
		.catch(next))
// make a new address
	.post('/', (req, res, next) =>
		Address.create(req.body)
		.then(newAddress => res.json(newAddress))
		.catch(next))
// change an address
	.put('/:addressId', (req, res, next) =>
		Address.findById(req.params.addressId)
		.then(address => {
			return address.update(req.body)
		})
		.then(address => res.json(address))
		.catch(next))
// delete an address
	.delete('/:addressId', (req, res, next) =>
		Address.findById(req.params.addressId)
		.then(address => {
			return address.destroy()
		})
		.then(() => {
			res.sendStatus(204)
		})
		.catch(next))
// get an address by id
	.get('/:addressId', (req, res, next) =>
		Address.findById(req.params.addressId)
		.then(address => res.json(address))
		.catch(next))
