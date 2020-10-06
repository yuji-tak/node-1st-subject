const path = require('path')
const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs')
app.get('/', (req, res) => {
  var data = {
    title: 'test'
  }

  res.render('./index.ejs', data)
})

app.listen(port, () => {
  console.log(`Server is up on port ${port}!`)
})
