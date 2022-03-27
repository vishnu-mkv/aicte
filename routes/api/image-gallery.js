const express = require('express');
const router = express.Router();
const ImageGallery = require('../../data/models/image-gallery.js');
const handlers = require('./handlers');
const { requiresAuth } = require('express-openid-connect');

router.use(function (req, res, next) {

    if(req['body'] === undefined) {
        next();
        return;
    }

    let data = req.body;

    if(data && data['images[]']) {
        data['images'] = data['images[]'];
        delete data['images[]'];
        req.body = data;
    }

    next();
});

router.get('/', function(req, res)
{   
    handlers.handleGETPaginate(req, res, ImageGallery);
});

router.post('/:id', requiresAuth(), function(req, res)
{   
    handlers.handleUpdate(req, res, ImageGallery);
});

router.delete('/:id', requiresAuth(), function(req, res)
{   
    handlers.handleDelete(req, res, ImageGallery);
});

router.post('/', requiresAuth(), function(req, res)
{   
    handlers.handleCreate(req, res, ImageGallery);
});

module.exports = router;