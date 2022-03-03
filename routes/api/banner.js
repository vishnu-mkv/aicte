const express = require('express');
const router = express.Router();
const Banner = require('../../data/models/banner.js');

router.get('/', function(req, res)
{   
    Banner.find()
    .then(data => res.json(data))
    .catch(err => console.log(err));
});

module.exports = router;