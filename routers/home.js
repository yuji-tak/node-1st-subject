const express = require('express')
const router = new express.Router()

router.get('/home', (req, res) => {
  res.render('home', {
    title: 'home',
    name: user.name
  })
})

module.exports = router
