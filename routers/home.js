const express = require('express')
const router = new express.Router()

router.post('/home', (req, res) => {
  console.log(req.body.name)

  res.render('home', {
    title: 'home'
  })
})

module.exports = router
