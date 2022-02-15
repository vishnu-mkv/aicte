const express = require('express');
const router = express.Router();
const News = require('../../data/models/news');


router.get('/', function(req, res)
{
    let pageNumber = 1;
    if(req.query.page) pageNumber = req.query.page;
	News.paginate({}, {page: pageNumber, limit: 10, sort:'-date'})
    .then(data => res.json(data))
    .catch(err => console.log(err));
});

module.exports = router;
