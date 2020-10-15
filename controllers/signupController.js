const signupSubController = require('./utils/signupSubController')

module.exports = {
  getSignup: (req, res) => {
    res.render('signup', {
      title: 'signup',
      errorMessagePasswordLength: '',
      errorMessageConfirmedPassword: '',
      errorMessageRequired: ''
    })
  },
  postSignup: ({ body }, res) => {
    // 入力情報の取得
    const user = {
      name: body.name,
      email: body.email,
      password: body.password,
      confirmedPassword: body.confirmpassword
    }
    
    // 入力情報の検証
    if (user.password.length <= 7) {
      signupSubController.validateLength(res)
    } else if (user.password !== user.confirmedPassword) {
      signupSubController.validateConfirmedPassword(res)
    } else if (Object.values(user).includes(undefined)) {
      signupSubController.validateAllRequired(res)
    } else {
      res.render('home', {
        title: 'home',
        name: user.name
      })
    }
  }
}
