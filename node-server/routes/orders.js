const express = require('express');
const router = express.Router();
const fs = require('file-system');

router.get('/api/orders', (req, res) => {
    res.status(200).send(fs.readFileSync('data.json', 'utf8'));
});

router.post('/api/orders', (req, res) => {
    const data = JSON.parse(fs.readFileSync('data.json', 'utf8')).orders;
    const order = req.body.order;

    order.id = data.length + 1;
    order.dateAndTime = new Date().getTime();
    order.deliveryState = 'Ожидает доставки';

    data.push(order);
    fs.writeFileSync('data.json', JSON.stringify({orders : data}));
    res.status(200).send({"order" : order});
});

module.exports = router;