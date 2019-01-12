const express = require('express')
const router = express.Router()

// get  /number-grid-scrambler
router.get('/', function(req, res) {
  res.render('number-grid-scrambler')
})

module.exports = router