const express = require('express')
const app = express()
const port = 3000
const signupRouter = require('./routes/signup')
const loginRouter = require('./routes/login')

app.set('view engine', 'ejs')
app.use(signupRouter)
app.use(loginRouter)

app.listen(port, () => {
  console.log(`Server is up on port ${port}!`)
})
