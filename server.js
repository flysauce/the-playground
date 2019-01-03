// modules
const express = require('express')
const http = require('http')
const https = require('https')
const fs = require('fs')
const log = require('morgan')
const hbs = require('express-handlebars')
const path = require('path')

// routes
const index = require('./routes/index.js')
const baby_name_suggestor = require('./routes/baby-name-suggestor.js')

// express setup
const app = express()
const port = 3000

// https settings
const httpsOptions = {
  cert: fs.readFileSync(path.join(__dirname, 'ssl', 'server.crt')),
  key: fs.readFileSync(path.join(__dirname, 'ssl', 'server.key'))
}

// logging
app.use(log('dev'))

// setting up handlebars template rendering
app.engine('hbs', hbs({ defaultLayout: 'main', extname: 'hbs' }))
app.set('view engine', 'hbs')

// server static files
app.use(express.static(path.join(__dirname, 'public')))

// mounting routes
app.use('/', index)
app.use('/baby-name-suggestor', baby_name_suggestor)

// start server
// app.listen(port, function() {
//   console.log(`server live @ localhost:${port}`)
//   console.log(`ctrl-c to stop server`)
//   console.log(`when prompted type y <enter>`)
// })

// http start server
// http.createServer(app)
//   .listen(port, function () {
//     console.log(`server live @ http://localhost:${port}`)
//     console.log(`ctrl-c to stop server`)
//     console.log(`when prompted type y <enter>`)
//   })

// https start server
https.createServer(httpsOptions, app)
  .listen(port, function () {
    console.log(`server live @ https://localhost:${port}`)
    console.log(`ctrl-c to stop server`)
    console.log(`when prompted type y <enter>`)
  })