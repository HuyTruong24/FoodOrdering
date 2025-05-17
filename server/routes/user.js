const express = require('express')
const router = express.Router()

const {createUser, verifyUser} = require('../controllers/user.js')
router.post('/signup',createUser)
router.post('/login', verifyUser)
module.exports = router