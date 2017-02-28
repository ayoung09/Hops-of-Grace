'use strict'

const db = require('APP/db')
const api = module.exports = require('express').Router()

api
  .get('/heartbeat', (req, res) => res.send({ok: true,}))
  .use('/auth', require('./auth'))
  .use('/users', require('./users'))
  .use('/sellers', require('./sellers'))
  .use('/products', require('./products'))
  .use('/carts', require('./carts'))
  .use('/reviews', require('./reviews'))
  .use('/orders', require('./orders'))
  .use('/addresses', require('./addresses'))
  .use('/photos', require('./photos'))
  .use('/brewTypes', require('./brewTypes'))

// No routes matched? 404.
api.use((req, res) => res.status(404).end())
