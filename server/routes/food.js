const express = require('express')
const router = express.Router()
const {authenticateToken} = require('../middleware/middleware.js')

const {getFood, getFoodInfo} = require('../controllers/food.js')
router.get('/',authenticateToken,getFood)
router.get('/:foodID',authenticateToken,getFoodInfo)
module.exports = router