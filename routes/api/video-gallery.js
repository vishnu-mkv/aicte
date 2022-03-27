const express = require('express');
const router = express.Router();
const VideoGallery = require('../../data/models/video-gallery.js');
const handlers = require('./handlers');
const { requiresAuth } = require('express-openid-connect');      

router.get('/', function(req, res)
{   
    handlers.handleGETPaginate(req, res, VideoGallery);
});

router.post('/', requiresAuth(), function(req, res)
{   
    handlers.handleCreate(req, res, VideoGallery);
});

router.post('/:id', requiresAuth(), function(req, res)
{   
    handlers.handleUpdate(req, res, VideoGallery);
});

router.delete('/:id', requiresAuth(), function(req, res)
{   
    handlers.handleDelete(req, res, VideoGallery);
});

module.exports = router;
