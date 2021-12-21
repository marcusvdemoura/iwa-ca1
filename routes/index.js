const express = require('express');

const mapsRoute = require('./maps');

const router = express.Router();

module.exports = () => {
  router.get('/', (request, response) => {
    response.render('pages/index', { pageTitle: 'Welcome' });
  });

  router.use('/maps', mapsRoute());

  return router;
};
