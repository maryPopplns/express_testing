var express = require('express');
var path = require('path');
var http = require('http');

var app = express();

app.set('views', path.resolve(__dirname, 'template'));
app.set('view engine', 'ejs');

app.get('/', function (request, response) {
  response.render('index', {
    message: 'yo this is my template',
  });
});

app.get('/about', function (request, response) {
  response.render('one', {
    message: 'numba one',
  });
});

http.createServer(app).listen(3000);
