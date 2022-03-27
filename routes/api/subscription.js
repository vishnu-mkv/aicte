const router = require('express').Router();
const Subscription = require('../../data/models/subscriptions');
const handlers = require('./handlers');
const { requiresAuth } = require('express-openid-connect');



router.get('/', requiresAuth(), function(req, res)
{   
    handlers.handleGETPaginate(req, res, Subscription);
});

router.post('/', requiresAuth(), function(req, res)
{   
    handlers.handleCreate(req, res, Subscription);
});

router.post('/:id', requiresAuth(), function(req, res)
{   
    handlers.handleUpdate(req, res, Subscription);
});

router.delete('/:id', requiresAuth(), function(req, res)
{   
    handlers.handleDelete(req, res, Subscription);
});

module.exports = router;