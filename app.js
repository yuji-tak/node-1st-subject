const express = require('express')
const app = express()
const port = 3000
const signupRouter = require('./routes/signup')
const loginRouter = require('./routes/login')
const homeRouter = require('./routes/home')

app.set('view engine', 'ejs')
app.use(signupRouter)
app.use(loginRouter)
app.use(homeRouter)

app.listen(port, () => {
  console.log(`Server is up on port ${port}!`)
})
