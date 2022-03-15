const express = require('express');
const router = express.Router();
const Banner = require('../../data/models/banner.js');
const handlers = require('./handlers');
const { requiresAuth } = require('express-openid-connect');


router.get('/', function(req, res)
{   
    handlers.handleGETPaginate(req, res, Banner);
});

router.post('/', requiresAuth(), function(req, res)
{   
    handlers.handleCreate(req, res, Banner);
});

router.post('/:id', requiresAuth(), function(req, res)
{   
    handlers.handleUpdate(req, res, Banner);
});

router.delete('/:id', requiresAuth(), function(req, res)
{   
    handlers.handleDelete(req, res, Banner);
});

module.exports = router;