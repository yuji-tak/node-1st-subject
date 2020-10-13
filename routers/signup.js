const express = require('express')
const router = new express.Router()
const signupController = require('../controllers/signupController')

router.get('/', signupController.doGetSignup)

router.post('/', signupController.doPostSignup)

module.exports = router
