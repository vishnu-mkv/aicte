const express = require('express');
const router = express.Router();
const ImageGallery = require('../../data/models/image-gallery.js');

router.get('/', function(req, res)
{
    let pageNumber = 1;
    if(req.query.page) pageNumber = req.query.page;
    ImageGallery.paginate({}, {page: pageNumber, limit: 10, sort: '-updatedAt'})
    .then(data => res.json(data))
    .catch(err => console.log(err));
});

module.exports = router;