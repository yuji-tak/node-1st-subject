const express = require('express')
const app = express()
const port = 3000
const signupRouter = require('./routers/signup')
const loginRouter = require('./routers/login')
const homeRouter = require('./routers/home')

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }))
app.use(signupRouter)
app.use(loginRouter)
app.use(homeRouter)

app.listen(port, () => {
  console.log(`Server is up on port ${port}!`)
})
