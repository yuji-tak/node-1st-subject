const express = require('express')
const router = new express.Router()

router.get('/login', (req, res) => {
  res.render('login', {
    title: 'login'
  })
})

module.exports = router
