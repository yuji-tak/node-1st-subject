const path = require('path')
const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  var data = {
    title: 'signup'
  }

  res.render('signup.ejs', data)
})

app.get('/login', (req, res) => {
  var data = {
    title: 'login'
  }

  res.render('login.ejs', data)
})

app.listen(port, () => {
  console.log(`Server is up on port ${port}!`)
})
