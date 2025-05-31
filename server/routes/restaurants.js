const express = require('express')
const router = express.Router()
const {authenticateToken} = require('../middleware/middleware.js')

const {getRestaurants,getRestaurantDetail} = require('../controllers/restaurants')
router.get('/',authenticateToken, getRestaurants)
router.get('/:restaurantID', getRestaurantDetail)
module.exports = router