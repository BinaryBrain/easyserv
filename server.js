// EDIT ME PLEASE
// --------------
var site = "/home/user/web/"
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
