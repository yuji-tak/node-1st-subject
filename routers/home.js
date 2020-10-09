const app = require('express')
const router = new app.Router()

router.get('/home', (req, res) => {
  res.render('home', {
    title: 'home'
  })
})

module.exports = router
