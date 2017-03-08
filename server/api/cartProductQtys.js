'use strict';

const db = require('APP/db');
const CartProductQty = db.model('cartProductQtys');
const Product = db.model('products');

const { mustBeLoggedIn, forbidden } = require('./auth.filters');

// changes to structure and required eager loading after the card/order discussion

module.exports = require('express').Router()
// list all  products and qtys given a cartId
  .get('/:cartId', (req, res, next) =>
    CartProductQty.findAll({
      attributes: ['product_id', 'quantity'],
      where: {
        cart_id: req.params.cartId,
      },
    })
    .then(cartProductQtys => {
      res.json(cartProductQtys)
      })
    .catch(next))
// omitting a second get request for now

// add a product and qty to cart
  .post('/', (req, res, next) =>
    CartProductQty.create(req.body)
    .then(newCart => res.status(201).json(newCart))
    .catch(next))
// update a cart's product's qty
  .put('/:cartId/:productId', (req, res, next) =>
    CartProductQty.findOne({where: {
      cart_id: req.params.cartId,
      product_id: req.params.productId,
      }
    })
    .then(cartPQ => cartPQ.update(req.body))
    .then(updatedCartPQ => res.json(updatedCartPQ))
    .catch(next))
// delete a product and qty from cart
  .delete('/:cartId/:productId', (req, res, next) =>
    CartProductQty.findOne({where: {
      cart_id: req.params.cartId,
      product_id: req.params.productId,
      }
    })
    .then(cart => cart.destroy())
    .then(() => res.sendStatus(204))
    .catch(next))
