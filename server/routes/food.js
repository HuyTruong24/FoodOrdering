const express = require('express')
const router = express.Router()

const {getFood, getFoodInfo} = require('../controllers/food.js')
router.get('/',getFood)
router.get('/:foodID',getFoodInfo)
module.exports = router