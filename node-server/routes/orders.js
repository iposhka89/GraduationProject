const express = require('express'),
      router = express.Router(),
      fs = require('file-system'),
	  shortId = require('shortid'),
	  config = require('config');

router.get('/api/orders', (req, res) => {
    res.send({'orders' : JSON.parse(fs.readFileSync(config.get('jsonOrders'), 'utf8'))});
});

router.post('/api/orders', (req, res) => {
    const data = JSON.parse(fs.readFileSync(config.get('jsonOrders'), 'utf8')),
          order = req.body.order;

    order.id = shortId.generate();
    order.dateAndTime = new Date().getTime();
    order.isDelivered = false;

    data.push(order);
    fs.writeFileSync(config.get('jsonOrders'), JSON.stringify(data));
    res.send({'order' : order});
});

router.delete('/api/orders/:id', (req, res) => {
	const data = JSON.parse(fs.readFileSync(config.get('jsonOrders'), 'utf8')),
	 	id = req.params.id;

	const updatedData = data.filter((order) => {
		return order.id !== id;
	});

	fs.writeFileSync(config.get('jsonOrders'), JSON.stringify(updatedData));
	res.sendStatus(204);
});

router.get('/api/orders/:id', (req, res) => {
	const data = JSON.parse(fs.readFileSync(config.get('jsonOrders'), 'utf8')),
		id = req.params.id;

	const requestedOrder = data.filter((order) => {
		return order.id === id;
	});

	res.send({'order' : requestedOrder});
});

router.put('/api/orders/:id', (req, res) => {
	const data = JSON.parse(fs.readFileSync(config.get('jsonOrders'), 'utf8')),
		id = req.params.id,
		order = req.body.order;

	const updatedData = data.filter((order) => {
		return order.id !== id;
	});

	order.id = id;

	updatedData.push(order);
	fs.writeFileSync(config.get('jsonOrders'), JSON.stringify(updatedData));
	res.sendStatus(204);
});

module.exports = router;