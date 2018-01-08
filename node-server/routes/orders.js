const express = require('express'),
      router = express.Router(),
      fs = require('file-system'),
	  shortId = require('shortid');

router.get('/api/orders', (req, res) => {
    res.status(200).send(fs.readFileSync('./data/orders.json', 'utf8'));
});

router.post('/api/orders', (req, res) => {
    const data = JSON.parse(fs.readFileSync('./data/orders.json', 'utf8')).orders,
          order = req.body.order;

    order.id = shortId.generate();
    order.dateAndTime = new Date().getTime();
    order.deliveryState = 'Ожидает доставки';

    data.push(order);
    fs.writeFileSync('./data/orders.json', JSON.stringify({orders : data}));
    res.status(200).send({'order' : order});
});

router.delete('/api/orders/:id', (req, res) => {
	const data = JSON.parse(fs.readFileSync('./data/orders.json', 'utf8')).orders,
	 	id = req.params.id;

	const updatedData = data.filter((order) => {
		return order.id !== id;
	});

	fs.writeFileSync('./data/orders.json', JSON.stringify({orders : updatedData}));
	res.sendStatus(204);
});

module.exports = router;