var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var routes = require('./routes/main');

var PORT = process.env.PORT || 3000;

// configure the app to use bodyParser()
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());

// Used for production build
app.use(express.static(path.join(__dirname, 'public')));

routes(app); // assigning all routes defined in ./routes/main.js

app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.use(function(req, res, next) {
	res.status(404).sendFile(path.join(__dirname, '../public/404.html'));
});

app.use(function(err, req, res, next) {
	console.error(err.stack);
	res.status(500).send('Something broke!');
})

app.listen(PORT, function() {
	console.log('Server running on ' + PORT);
});