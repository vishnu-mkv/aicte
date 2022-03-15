const router = require('express').Router();
const ContactUs = require('../../data/models/contact-us');
const handlers = require('./handlers');
const { requiresAuth } = require('express-openid-connect');


router.get('/', requiresAuth(), function(req, res)
{   
    handlers.handleGETPaginate(req, res, ContactUs);
});

router.post('/', requiresAuth(), function(req, res)
{   
    handlers.handleCreate(req, res, ContactUs);
});

router.post('/:id', requiresAuth(), function(req, res)
{   
    handlers.handleUpdate(req, res, ContactUs);
});

router.delete('/:id', requiresAuth(), function(req, res)
{   
    handlers.handleDelete(req, res, ContactUs);
});


module.exports = router;