const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const fs = require('file-system');
const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(morgan('common'));

app.get('/api/orders', (req, res) => {
   res.status(200).send(fs.readFileSync('data.json', 'utf8'));
});

app.listen(9999, function () {
    console.log('Server has been started...');
});