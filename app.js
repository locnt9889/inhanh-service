/*jshint node:true*/

// app.js
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

//require router
var persons = require('./routers/personRouter');
var homes = require('./routers/homeRouter');
var citys = require('./routers/cityRouter');
var orders = require('./routers/orderDetailRouter');
var shippings = require('./routers/shippingRouter');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname, 'public')));

//mapping url
app.get('/', function (req, res) {
	res.send("A sample webservice nodejs-mongodb app for Bluemix");
});
app.use('/person', persons);
app.use('/home', homes);
app.use('/city', citys);
app.use('/order', orders);
app.use('/shipping', shippings);

// Start server
app.set('port', (process.env.PORT || 5000));
app.listen(app.get('port'), function(){
	console.log("Node app is running at localhost:" + app.get('port'));
});
