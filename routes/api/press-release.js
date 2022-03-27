const express = require("express");
const router = express.Router();
const PressRelease = require('../../data/models/press-release');
const handlers = require('./handlers');
const { requiresAuth } = require('express-openid-connect');


router.get('/', function(req, res)
{   
    handlers.handleGETPaginate(req, res, PressRelease);
});

router.post('/', requiresAuth(), function(req, res)
{   
    handlers.handleCreate(req, res, PressRelease);
});

router.post('/:id', requiresAuth(), function(req, res)
{   
    handlers.handleUpdate(req, res, PressRelease);
});

router.delete('/:id', requiresAuth(), function(req, res)
{   
    handlers.handleDelete(req, res, PressRelease);
});

module.exports = router;