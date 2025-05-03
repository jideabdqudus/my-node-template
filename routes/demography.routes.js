const express = require('express');

const {
  getNumberOfHouseHolds,
} = require('../controllers/demography.controllers');

const router = express.Router();

router.route('/number-of-households').get(getNumberOfHouseHolds);

module.exports = router;
