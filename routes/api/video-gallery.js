const express = require('express');
const router = express.Router();
const VideoGallery = require('../../data/models/video-gallery.js');

router.get('/', function(req, res)
{
    let pageNumber = 1;
    if(req.query.page) pageNumber = req.query.page;
    VideoGallery.paginate({}, {page: pageNumber, limit: 10, sort: '-updatedAt'})
    .then(data => res.json(data))
    .catch(err => console.log(err));
});

module.exports = router;
