module.exports = {
  doValidateLength: (res) => {
    res.render('signup', {
      title: 'signup',
      errorMessagePasswordLength: 'パスワードは7文字以上で入力',
      errorMessageConfirmedPassword: '',
      errorMessageRequired: ''
    })
  },
  doValidateConfirmedPassword: (res) => {
    res.render('signup', {
      title: 'signup',
      errorMessagePasswordLength: '',
      errorMessageConfirmedPassword: 'パスワードが確認用パスワードと一致しない',
      errorMessageRequired: ''
    })
  },
  doValidateAllRequired: (res) => {
    res.render('signup', {
      title: 'signup',
      errorMessagePasswordLength: '',
      errorMessageConfirmedPassword: '',
      errorMessageRequired: '未入力の項目がある'
    })
  }
}