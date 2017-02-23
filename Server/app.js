var express = require('express');
var path = require('path');
var app = express();
var mongoose = require('mongoose');
var Save = require('./Routes/Save');
var login = require('./Routes/Extract.js');
var bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost/test');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function callback () {
  console.log("connection established");
});
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/register', Save);
app.use('/login', login);
app.use(express.static(path.join(__dirname, '../Client')));

app.listen(2020);
