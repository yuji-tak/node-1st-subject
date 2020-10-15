const express = require('express')
const router = new express.Router()
const signupController = require('../controllers/signupController')

router.get('/', signupController.getSignup)

router.post('/', signupController.postSignup)

module.exports = router
