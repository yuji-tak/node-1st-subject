module.exports = {
  validateLength: (res) => {
    res.render('signup', {
      title: 'signup',
      errorMessagePasswordLength: 'パスワードは7文字以上で入力',
      errorMessageConfirmedPassword: '',
      errorMessageRequired: ''
    })
  },
  validateConfirmedPassword: (res) => {
    res.render('signup', {
      title: 'signup',
      errorMessagePasswordLength: '',
      errorMessageConfirmedPassword: 'パスワードが確認用パスワードと一致しない',
      errorMessageRequired: ''
    })
  },
  validateAllRequired: (res) => {
    res.render('signup', {
      title: 'signup',
      errorMessagePasswordLength: '',
      errorMessageConfirmedPassword: '',
      errorMessageRequired: '未入力の項目がある'
    })
  }
}