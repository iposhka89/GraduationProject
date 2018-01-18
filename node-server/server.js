const express = require('express'),
      bodyParser = require('body-parser'),
      morgan = require('morgan'),
      app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(morgan('common'));
app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	next();
});

app.use(
    require('./routes/orders.js'),
    require('./routes/commodities.js')
);

app.listen(9999, function () {
    console.log('Server has been started...');
});