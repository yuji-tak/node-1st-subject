const express = require('express')
const router = new express.Router()

router.post('/home', (req, res) => {
  const user = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    confirmedPassword: req.body.confirmpassword
  }
  console.log(user)

  res.render('home', {
    title: 'home'
  })
})

module.exports = router
