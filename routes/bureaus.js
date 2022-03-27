const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('./bureaus/bureaus-overview');
});

module.exports = router;