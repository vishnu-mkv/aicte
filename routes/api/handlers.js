const handlers = {

    handleGETPaginate : (req, res, Model) => {
        let pageNumber = 1;
        if(req.query.page) pageNumber = req.query.page;
        
        Model.paginate({}, {page: pageNumber, limit: 10, sort:'-date'})
        .then(data => res.json(data))
        .catch(err => console.log(err));
    },

    handleCreate : (req, res, Model) => {

        let data = req.body;

        if(!checkFields(data, res)) return;
        
        Model.create(data, function(err, instance) {
            if(err) {
                res.status(400);
                res.json({"success": false, "error": err});
            }
            else res.json({"success": true, instance});
        });
    },

    handleUpdate : (req, res, Model) => {

        let id = req.params.id;
        let data = req.body;

        if(!checkFields(data, res)) return;

        Model.findOneAndUpdate({'_id': id}, data, {'new': true}, function(err, instance) {
            if (err) return res.json(400, {"success": false, "error": err});
            return res.json({"success": true, instance});
        });
    },

    handleDelete : (req, res, Model) => {

        let id = req.params.id;

        Model.find({'_id': id}).remove( function(err, instance) {
            if (err) return res.json(400, {"success": false, "error": err});
            return res.json({"success": true});
        });

    }
}

function checkFields(data, res) {

    for (var key in data) {
        if (data[key] === null || data[key] === "" || data[key] === []){
            res.status(400);
            res.json({"success": false, "error": "Missing fields"});
            return false;
        }
    }

    return true;
}

module.exports = handlers;