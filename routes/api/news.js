const express = require('express');
const router = express.Router();
const News = require('../../data/models/news');
const handlers = require('./handlers');
const { requiresAuth } = require('express-openid-connect');


router.get('/', function(req, res)
{   
    handlers.handleGETPaginate(req, res, News);
});

router.post('/', requiresAuth(), function(req, res)
{   
    handlers.handleCreate(req, res, News);
});

router.post('/:id', requiresAuth(), function(req, res)
{   
    handlers.handleUpdate(req, res, News);
});

router.delete('/:id', requiresAuth(), function(req, res)
{   
    handlers.handleDelete(req, res, News);
});

module.exports = router;
