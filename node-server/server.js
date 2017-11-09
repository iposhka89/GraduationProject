const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const fs = require('file-system');
const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(morgan('common'));

require('./routes/orders.js')(app, fs);

app.listen(9999, function () {
    console.log('Server has been started...');
});