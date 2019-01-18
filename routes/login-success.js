const express = require('express')
const router = express.Router()

// get /login-success
router.get('/', function(req, res) {
  res.render('login-success')
})

module.exports = router