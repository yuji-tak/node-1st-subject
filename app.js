const express = require('express')
const app = express()
const port = 3000
const signupRouter = require('./routers/signup')
const loginRouter = require('./routers/login')

app.set('view engine', 'ejs')
// フォームリクエストのボディを受け取り可能にするミドルウェア
app.use(express.urlencoded({ extended: true }))
app.use(signupRouter)
app.use(loginRouter)

app.listen(port, () => {
  console.log(`Server is up on port ${port}!`)
})
