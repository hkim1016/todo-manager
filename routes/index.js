const express = require('express');
const app = express();

const router = express.Router();

router.get('/', function(req, res) {
    res.render('../views/index');
});

router.get('/about', function(req, res) {
    res.render('../views/about');
});

module.exports = router;