var path = process.argv[2] || process.cwd()
var port = process.argv[3] || 3000

var express = require('express')
var app = express()

var http = require('http')
var server = http.createServer(app)

console.log("Starting Node Server at '"+path+"' on port "+port)

server.listen(port)

app.get('/*', function (req, res) {
  res.sendfile(path+req.path)
})
