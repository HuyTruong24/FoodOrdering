const express = require('express')
const router = express.Router()

const {getRestaurants,getRestaurantDetail} = require('../controllers/restaurants')
router.get('/',getRestaurants)
router.get('/:restaurantID',getRestaurantDetail)
module.exports = router