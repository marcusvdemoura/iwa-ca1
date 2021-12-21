const express = require('express');

const router = express.Router();

const BikesLocService = require('../services/BikesLocService');

const bks = new BikesLocService('./data/dublin-bikes.json');

module.exports = () => {
  // const { bikeLocService } = params;

  router.get('/', async (request, response) => {
    const locs = await bks.getList();

    return response.json(locs);
  });
  return router;
};
