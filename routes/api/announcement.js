const express = require('express');
const router = express.Router();
const Announcement = require('../../data/models/announcement.js');
const handlers = require('./handlers');
const { requiresAuth } = require('express-openid-connect');


router.get('/', function(req, res)
{   
    handlers.handleGETPaginate(req, res, Announcement)
});

router.post('/', requiresAuth(), function(req, res)
{   
    handlers.handleCreate(req, res, Announcement);
});

router.post('/:id', requiresAuth(), function(req, res)
{   
    handlers.handleUpdate(req, res, Announcement);
});

router.delete('/:id', requiresAuth(), function(req, res)
{   
    handlers.handleDelete(req, res, Announcement);
});

module.exports = router;