module.exports = {
  doGetLogin: (req, res) => {
    res.render('login', {
      title: 'login'
    })
  }
}