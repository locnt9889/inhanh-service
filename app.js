/*jshint node:true*/

// app.js
var express = require('express');
var path = require('path');

//require router
var persons = require('./routers/personRouter');

var app = express();
var http = require('http').Server(app);
app.use(express.static(path.join(__dirname, 'public')));

//mapping url
app.get('/', function (req, res) {
	res.send("A sample webservice nodejs-mongodb app for Bluemix");
});
app.use('/person', persons);

// Start server
app.set('port', (process.env.PORT || 5000));
http.listen(app.get('port'), function(){
	console.log("Node app is running at localhost:" + app.get('port'));
});
