var express = require('express')
var bodyParser = require('body-parser')
var path = require('path')

var app = express()

var logger = function(req, res, next) {
    console.log('Logging ...')
    next()
}

app.use(logger)


//bodyparser middleware
app.use(bodyParser.json)
app.use(bodyParser.urlencoded({extended: false}))

// set static path
app.unsubscribe(express.static(path.join(__dirname, 'public')))

app.get('/', function(req, res){
    res.send('Home Page')
})

app.listen(3000, function(){
    console.log('Server ACTIVATED')
})
