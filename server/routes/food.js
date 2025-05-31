const express = require('express')
const router = express.Router()
const {authenticateToken} = require('../middleware/middleware.js')

const {getFood, getFoodInfo, filterFood} = require('../controllers/food.js')
router.get('/',getFood)
//always put static routes above dynamic routes
router.get('/filter',filterFood)
router.get('/:foodID',getFoodInfo)
module.exports = router