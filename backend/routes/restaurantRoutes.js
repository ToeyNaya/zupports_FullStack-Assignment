const express = require('express');
const router = express.Router();
const restaurantController = require('../controllers/restaurantController');

// Routes
router.get('/', restaurantController.getRestaurants);

module.exports = router;
