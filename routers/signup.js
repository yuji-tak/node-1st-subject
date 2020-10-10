const express = require('express')
const router = new express.Router()

router.get('/', (req, res) => {
  res.render('signup', {
    title: 'signup',
    errorMessagePasswordLength: '',
    errorMessageConfirmedPassword: '',
    errorMessageRequired: ''
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
    res.render('signup', {
      title: 'signup',
      errorMessagePasswordLength: 'パスワードは7文字以上で入力',
      errorMessageConfirmedPassword: '',
      errorMessageRequired: ''
    })
  } else if (user.password !== user.confirmedPassword) {
    res.render('signup', {
      title: 'signup',
      errorMessagePasswordLength: '',
      errorMessageConfirmedPassword: 'パスワードが確認用パスワードと一致しない',
      errorMessageRequired: ''
    })
  } else if (!user.hasOwnProperty('name', 'email', 'password', 'confirmedPassword')) {
    res.render('signup', {
      title: 'signup',
      errorMessagePasswordLength: '',
      errorMessageConfirmedPassword: '',
      errorMessageRequired: '未入力の項目がある'
    })
  } else {
    res.redirect('/home')
  }
})

module.exports = router
