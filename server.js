// basics
var express = require ('express');
var db = require('./db.js')
var app = express();

// extras
var http = require('http');
var path = require('path');
var fs = require('fs');
var favicon = require('serve-favicon');

var config = require('./config')();

// route require list
var routes = require('./routes')();

// registering routes to express list
app.use('/', routes);


// middleware
app.use(favicon(__dirname + '/public/favicon.ico'));




// Start database, then start server

db.connect(config.connstr, function (err){
  if(err){
    console.error(err);
  } else {

    app.listen(config.port, function() {
      console.log('Listening on port ' + config.port + '...');
    });

  }
});
var config = require('./config')();
