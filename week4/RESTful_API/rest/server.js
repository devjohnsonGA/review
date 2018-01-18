// Dependencies
var express = require('express')
var mongoose = require('mongoose')
var bodyParser = require('body-parser')
var exphandlebars = require('express-handlebars')
var path = require('path')
var ejs = require('ejs')

// MongoDB
mongoose.connect('mongodb://localhost/rest_test')

// Express
var app = express()
app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())
// Handlebars or ejs
app.set('views', path.join(__dirname, 'views'))
 app.engine('html', require('ejs').renderFile) //exphandlebars({defaultLayout: 'main'})
app.set('view engine', 'html')
// Routes
// app.use('/api', require('./routes/api'))
app.get('/', function(req, res) {
    res.render('index.html')
})


// Start Server
app.listen(3000)
console.log('API initialized on port 3000')
