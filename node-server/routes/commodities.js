const express = require('express'),
      router = express.Router(),
      fs = require('file-system'),
      config = require('config');

router.get('/api/commodities', (req, res) => {
    res.send({'commodities' : JSON.parse(fs.readFileSync(config.get('jsonCommodities'), 'utf8'))});
});

module.exports = router;