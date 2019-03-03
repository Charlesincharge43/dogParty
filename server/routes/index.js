'use strict';

const api = module.exports = require('express').Router();

api
  .get('/healthcheck', (req, res) => res.send({ok: true}))
  .use('/parties', require('./parties'));

// No routes matched? 404
api.use((req, res) => res.status(404).end());
