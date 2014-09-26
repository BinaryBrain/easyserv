// EDIT ME PLEASE
// --------------
var site = "C:/Users/sacha_000/Projets/Web/bsfwire/www/"
var port = 8567
// --------------

var express = require('express')
var app = express()

var http = require('http')
var server = http.createServer(app)

var util = require('util')

console.log("Starting Node Server on port "+port)

server.listen(port)

app.get('/*', function (req, res) {
  res.sendfile(site+req.path)
})
