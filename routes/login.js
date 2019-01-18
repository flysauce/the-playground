const express = require('express')
const router = express.Router()
const parser = require('body-parser')
const sqlite3 = require('sqlite3').verbose()

router.use(parser())

// get /login
router.get('/', function (req, res) {
  res.render('login')
})

/**
 * post /login
 * takes username and password from req obj and checks them against the login.db in data and checks them against the login table
 * if finds match return true
 * else return false
 */
router.post('/', function (req, res) {
  // console.log("req: ")
  // console.log(req.body)
  let username = req.body.username
  let password = req.body.password
  // console.log("username: " + username + " password: " + password)
  let result = false
  const db = new sqlite3.Database('./data/login.db', (err) => {
    if (err) {
      console.error(err.message)
    }
    // console.log('connected to login database')
  })
  db.all('SELECT username, password FROM login', [], function (err, rows) {
    if (err) {
      return console.error(err.message)
    }
    // console.log("db: ")
    // console.log(rows)
    // console.log(rows[0].username)
    // console.log(rows[0].password)
    for(let i = 0; i < rows.length; i++) {
      if (username === rows[i].username && password === rows[i].password) {
        result = true
        // console.log("match found")
        break
      }
    }
    // console.log(result)
    // send back whether of not result is true or false
    // send back response object with result: true or false
    res.send(result)
  })
  db.close()
  // send result as response
})

module.exports = router