'use strict';

const db = require('APP/db');
const Review = db.model('reviews');
const Product = db.model('products');
const Photo = db.model('photos');
const { mustBeLoggedIn, forbidden, } = require('./auth.filters');

module.exports = require('express').Router()
// list all reviews
	.get('/', (req, res, next) =>
		Review.findAll({
			where: req.query,
			include: [ Product, Photo ] }) //photos not working, products fine.
		.then(reviews => res.json(reviews))
		.catch(next))
// add a new review
	.post('/', (req, res, next) =>
		Review.create(req.body)
		.then(newReview => res.json(newReview))
		.catch(next))
// edit a review
	.put('/:reviewId', (req, res, next) =>
		Review.findById(req.params.reviewId)
		.then(review => review.update(req.body))
		.then(updatedReview => res.json(updatedReview))
		.catch(next))
// delete a review
	.delete('/:reviewId', (req, res, next) =>
		Review.findOne()
		.then(review => review.destroy())
		.then(() => res.sendStatus(204))
		.catch(next))
// get a single review
	.get('/:reviewId', (req, res, next) =>
		Review.findById({
			where: {id: req.params.reviewId},
			include: [ Product ] //, Photo ]
		})
		.then(review => res.json(review))
		.catch(next))
