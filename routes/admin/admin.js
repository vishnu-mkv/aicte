var router = require('express').Router();
const { models } = require("./model-registry");


router.use((req, res, next) => {

    if(!req.oidc.user) {

        // render the error page
        res.status(403);
        res.render('403');
    }else {
        res.locals.user = req.oidc.user;
        next();
    }

});

const modelData = [
    {
        groupName: "Newsroom",
        models: [
            'News',
            'Press Release',
            'Image Gallery',
            'Video Gallery'
        ]
    },
    {
        groupName: "Homepage",
        models: [
            'Banners',
            'Quick Links',
            'Announcements'
        ]
    },
    {
        groupName: "Contacts",
        models: [
            'Contact Us',
            'Subscriptions'
        ]
    }
]

function humanize(str) {
    var i, frags = str.split('-');
    for (i=0; i<frags.length; i++) {
      frags[i] = frags[i].charAt(0).toUpperCase() + frags[i].slice(1);
    }
    return frags.join(' ');
}

function getModel(req) {
    const modelId = req.params.modelId;
    let model = models[modelId];
    return {model, modelId}; 
}

function getInstance(req) {

    return new Promise(function(resolve, reject) {
        const {model, modelId} = getModel(req);
        let id = req.params.recordId;

        model.model.findById(id)
        .then(instance => {
            resolve({instance, id, model, modelId});
        })
        .catch(err => reject(err));
    })
}

router.get('/', (req, res) => {
    res.render('admin/index', {modelData});
});

router.get('/:modelId', (req, res) => {
    const {model, modelId} = getModel(req);

    res.render('admin/data-list', {name: humanize(modelId), 
        API: model.api, modelId, 
        'headline': model.headline, 
        'date': model.date}
        );
});


router.get('/:modelId/new', (req, res) => {
    const {model, modelId} = getModel(req);

    res.render('admin/form', {
        name: humanize(modelId), 
        API: model.api, 
        model,
        modelId
    });
});

router.get('/:modelId/:recordId', (req, res) => {

    getInstance(req)
    .then(({instance, id, model, modelId}) => {
        res.render('admin/view', {
            instance,
            name: humanize(modelId),
            model,
            modelId,
            API: model.api
        });
    })
    .catch(err => {
        res.status(404);
        res.render('404', {err});
    })
});

router.get('/:modelId/:recordId/edit', (req, res) => {

    getInstance(req)
    .then(({instance, id, model, modelId}) => {
        res.render('admin/form', {
            instance,
            name: humanize(modelId),
            API: model.api+'/'+id,
            model,
            modelId,
            edit: true
        });
    })
    .catch(err => {
        res.status(404);
        res.render('404', {err});
    })
});

module.exports = router;