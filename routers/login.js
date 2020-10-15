const express = require('express')
const router = new express.Router()
const loginController = require('../controllers/loginController')

router.get('/login', loginController.getLogin)

module.exports = router
