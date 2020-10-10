const express = require('express')
const router = new express.Router()

router.get('/', (req, res) => {
  res.render('signup', {
    title: 'signup'
  })
})

router.post('/', ({ body }, res) => {
  // 入力情報の取得
  const user = {
    name: body.name,
    email: body.email,
    password: body.password,
    confirmedPassword: body.confirmpassword
  }
  console.log(user)

  // 入力情報の検証
  if (user.password.length <= 7) {
    throw new Error('7文字以下')
  }

  if (user.password !== user.confirmedPassword) {
    throw new Error('パスワードが確認用パスワードと一致しない')
  }

  if (!user.hasOwnProperty('name', 'email', 'password', 'confirmedPassword')) {
    throw new Error('未入力の項目がある')
  }

  res.render('signup', {
    title: 'signup'
  })
})

module.exports = router
