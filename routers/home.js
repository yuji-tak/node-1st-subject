const express = require('express')
const router = new express.Router()

router.post('/home', ({ body }, res) => {
  // 入力情報の取得
  const user = {
    name: body.name,
    email: body.email,
    password: body.password,
    confirmedPassword: body.confirmpassword
  }
  console.log('入力情報の取得', user)

  // 入力情報の検証
  if (user.password.length <= 7) {
    console.log('7文字以下')
  }

  if (user.password !== user.confirmedPassword) {
    console.log('値が確認用パスワードと一致しない')
  }

  if (!user.hasOwnProperty('name', 'email', 'password', 'confirmedPassword')) {
    console.log('入力していない項目がある')
  }

  res.render('home', {
    title: 'home'
  })
})

module.exports = router
