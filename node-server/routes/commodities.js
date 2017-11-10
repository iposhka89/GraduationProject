const express = require('express'),
      router = express.Router(),
      fs = require('file-system');

router.get('/api/commodities', (req, res) => {
    res.status(200).send(fs.readFileSync('./data/commodities.json', 'utf8'));
});

module.exports = router;