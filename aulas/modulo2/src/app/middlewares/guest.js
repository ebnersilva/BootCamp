module.exports = (req, res, next) => {
  if (req.session && !req.session.user) {
    return next()
  }

  if (req.session.user.provider === false) {
    return res.redirect('/app/dashboard')
  } else {
    return res.redirect('/app/appointments/dashboard')
  }
}
