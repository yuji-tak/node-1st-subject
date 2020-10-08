const app = require('express')
const router = new app.Router()

router.get('/login', (req, res) => {
  res.render('login', {
    title: 'login'
  })
})

module.exports = router