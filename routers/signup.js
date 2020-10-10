const express = require('express')
const router = new express.Router()

router.get('/', (req, res) => {
  res.render('signup', {
    title: 'signup'
  })
})

router.post('/', (req, res) => {
  console.log('post from /')
  res.render('signup', {
    title: 'signup'
  })
})

module.exports = router
