'use strict'

const db = require('APP/db')
const api = module.exports = require('express').Router()

api
  .get('/heartbeat', (req, res) => res.send({ok: true,}))
  .use('/auth', require('./auth'))
  .use('/users', require('./users'))
  .use('/sellers', require('./sellers'))
  .use('/products', require('./products'))
  .use('/shoppingCarts', require('./shoppingCart'))
  .use('/reviews', require('./reviews'))
  .use('/orders', require('./orders'))

// No routes matched? 404.
api.use((req, res) => res.status(404).end())
