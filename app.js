const express = require('express')
const app = express()
const port = 3000
const router = require('./router')

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  var data = {
    title: 'signup'
  }

  res.render('signup.ejs', data)
})

app.use(router)

app.listen(port, () => {
  console.log(`Server is up on port ${port}!`)
})
