const express = require('express');
const app = express();

const router = express.Router();

// renders the homepage (not logged in)
router.get('/', function(req, res) {
    res.render('../views/index');
});

// renders the about page
router.get('/about', function(req, res) {
    res.render('../views/about');
});

// renders the contact page
router.get('/contact', function(req, res) {
    res.render('../views/contact');
});

// renders the main page (logged in)
router.get('/tasks', function(req, res) {
    res.render('../views/user/tasks');
});

module.exports = router;