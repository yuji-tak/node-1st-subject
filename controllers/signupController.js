const helper = require('./utils/helper')

module.exports = {
  getSignup: (req, res) => {
    res.render('signup', helper.isInitial)
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
      res.render('signup', helper.isLength)
    } else if (user.password !== user.confirmedPassword) {
      res.render('signup', helper.isConfirmedPassword)
    } else if (Object.values(user).includes(undefined)) {
      res.render('signup', helper.isAllRequired)
    } else {
      res.render('home', {
        title: 'home',
        name: user.name
      })
    }
  }
}
