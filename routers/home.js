const express = require('express')
const router = new express.Router()

router.post('/home', (req, res) => {
  res.render('home', {
    title: 'home'
  })
})

module.exports = router
