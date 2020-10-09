const express = require('express')
const router = new express.Router()

router.post('/', (req, res) => {
  res.render('signup', {
    title: 'signup'
  })
})

module.exports = router
