'use strict'

const db = require('APP/db')
const Address = db.model('addresses')

module.exports = require('express').Router()
// get all addresses
	.get('/', (req, res, next) =>
		Address.findAll()
		.then()
		.catch())
// make a new address
	.post('/', (req, res, next) =>
		Address.create()
		.then()
		.catch())
// change an address
	.put('/:addressId', (req, res, next) =>
		Address.update()
		.then()
		.catch())
// delete an address
	.delete('/', (req, res, next) =>
		Address.destroy()
		.then()
		.catch())
// get an address by id
	.get('/:addressId', (req, res, next) =>
		Address.findById()
		.then()
		.catch())
