module.exports = {
  isInitial: {
    title: 'signup',
    errorMessagePasswordLength: '',
    errorMessageConfirmedPassword: '',
    errorMessageRequired: ''
  },
  isLength: {
    title: 'signup',
    errorMessagePasswordLength: 'パスワードは7文字以上で入力',
    errorMessageConfirmedPassword: '',
    errorMessageRequired: ''
  },
  isConfirmedPassword: {
    title: 'signup',
    errorMessagePasswordLength: '',
    errorMessageConfirmedPassword: 'パスワードが確認用パスワードと一致しない',
    errorMessageRequired: ''
  },
  isAllRequired: {
    title: 'signup',
    errorMessagePasswordLength: '',
    errorMessageConfirmedPassword: '',
    errorMessageRequired: '未入力の項目がある'
  }
}
