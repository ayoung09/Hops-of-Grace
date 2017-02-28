'use strict'

const db = require('APP/db')
const Review = db.model('review')
const {mustBeLoggedIn, forbidden,} = require('./auth.filters')

module.exports = require('express').Router()
// list all reviews
	.get('/', (req, res, next) =>
		Review.findAll()
		.then()
		.catch())
// add a new review
	.post('/', (req, res, next) =>
		Review.create()
		.then()
		.catch())
// edit a review
	.put('/:reviewId', (req, res, next) =>
		Review.update()
		.then()
		.catch())
// delete a review
	.delete('/', (req, res, next) =>
		Review.destroy()
		.then()
		.catch())
// get a single review
	.get('/:reviewId', (req, res, next) =>
		Review.findById()
		.then()
		.catch())
