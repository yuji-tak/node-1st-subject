module.exports = {
  doGetSignup: (req, res) => {
    res.render('signup', {
      title: 'signup',
      errorMessagePasswordLength: '',
      errorMessageConfirmedPassword: '',
      errorMessageRequired: ''
    })
  }
}
