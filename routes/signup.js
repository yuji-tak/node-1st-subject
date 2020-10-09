const app = require('express')
const router = new app.Router()

router.get('/', (req, res) => {
  res.render('signup', {
    title: 'signup'
  })
})

module.exports = router