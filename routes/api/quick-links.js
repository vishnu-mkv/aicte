const express = require('express');
const router = express.Router();
const QuickLinks = require('../../data/models/quick-links.js');

router.get('/', function(req, res)
{   
    QuickLinks.find()
    .then(data => res.json(data))
    .catch(err => console.log(err));
});

module.exports = router;