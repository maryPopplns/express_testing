var express = require('express');
var path = require('path');
var http = require('http');
var app = express();

const ROUTE = path.resolve(__dirname, 'route');
app.use(express.static(ROUTE));

app.get('/', function (request, response) {
  response.writeHead(200, { 'Content-Type': 'text/plain' });
  response.end("Looks like you didn't find a static file.");
});

app.get('/about', function (request, response) {
  response.redirect('./route.html');
});

http.createServer(app).listen(3000);
