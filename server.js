var express = require ('express');
var http = require('http');
var path = require('path');
var fs = require('fs');
var favicon = require('serve-favicon');
var app = express();

var config = require('./config')();

// route require list
var routes = require('./routes')();

// registering routes to express list
app.use('/', routes);


// middleware
app.use(favicon(__dirname + '/public/favicon.ico'));





// once the system is loaded...
// Start database, if successful start app server

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
