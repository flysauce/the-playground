const express = require('express')
const router = express.Router()
const parser = require('body-parser')
const sqlite3 = require("sqlite3").verbose()

router.use(parser())

// get /baby-name-suggestor
router.get('/', function (req, res) {
  res.render('baby-name-suggestor')
})

// post /baby-name-suggestor
router.post('/', function (req, res) {
  const db = new sqlite3.Database("./data/baby-name-suggestor.db", (err) => {
    if (err) {
      console.error(err.message)
    }
    // console.log('connected to baby-name-suggestor database')
  })
  // console.log(JSON.stringify(req.body))
  db.run("INSERT INTO baby_names(first_name, middle_name, last_name) VALUES(?,?,?)", [req.body.first_name, req.body.middle_name, req.body.last_name], function (err) {
    if (err) {
      return console.error(err.message)
    }
    // console.log("entry added to database")
  })
  db.close()
  res.render('baby-name-suggestor')
})

// get /baby-name-suggestor/get-names
router.get('/get-names', function (req, res) {
  const db = new sqlite3.Database("./data/baby-name-suggestor.db", (err) => {
    if (err) {
      console.error(err.message)
    }
    // console.log('connected to baby-name-suggestor database')
  })
  db.all("SELECT first_name, middle_name, last_name FROM baby_names", [], (err, rows) => {
    if (err) {
      return console.log(err.message)
    }
    // console.log(rows)
    res.render('baby-name-suggestor', { names: rows })
  })
  db.close()
})

module.exports = router