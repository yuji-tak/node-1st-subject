const signupSubController = require('./utils/signupSubController')

module.exports = {
  doGetSignup: (req, res) => {
    res.render('signup', {
      title: 'signup',
      errorMessagePasswordLength: '',
      errorMessageConfirmedPassword: '',
      errorMessageRequired: ''
    })
  },
  doPostSignup: ({ body }, res) => {
    // 入力情報の取得
    const user = {
      name: body.name,
      email: body.email,
      password: body.password,
      confirmedPassword: body.confirmpassword
    }

    // 未入力の項目があるか検証
    const validateAllRequired = () => {
      Object.values(user).includes('')
    }

    // 入力情報の検証
    if (user.password.length <= 7) {
      signupSubController.doValidateLength(res)
    } else if (user.password !== user.confirmedPassword) {
      signupSubController.doValidateConfirmedPassword(res)
    } else if (validateAllRequired) {
      signupSubController.doValidateAllRequired(res)
    } else {
      res.render('home', {
        title: 'home',
        name: user.name
      })
    }
  }
}
