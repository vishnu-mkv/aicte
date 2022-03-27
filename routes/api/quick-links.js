const express = require('express');
const router = express.Router();
const QuickLinks = require('../../data/models/quick-links.js');
const handlers = require('./handlers');
const { requiresAuth } = require('express-openid-connect');


router.get('/', function(req, res)
{   
    handlers.handleGETPaginate(req, res, QuickLinks);
});

router.post('/', requiresAuth(), function(req, res)
{   
    handlers.handleCreate(req, res, QuickLinks);
});

router.post('/:id', requiresAuth(), function(req, res)
{   
    handlers.handleUpdate(req, res, QuickLinks);
});

router.delete('/:id', requiresAuth(), function(req, res)
{   
    handlers.handleDelete(req, res, QuickLinks);
});

module.exports = router;