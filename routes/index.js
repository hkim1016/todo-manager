const express = require('express');
const app = express();

const router = express.Router();

const User = require('../models/User');
const Task = require('../models/Task');

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
    // const user = new User({
    //     username: 'hankim',
    //     email: 'hankim1077@gmail.com',
    //     password: 'h'
    // });

    // user.save((err) => {
    //     console.log(err);
    // });

    // const task = new Task({
    //     taskName: 'asdfasdfasdf',
    //     taskSummary: 'asdfasdf',
    //     description: 'asdfasdf'
    // });

    // task.save((err) => console.error(err));

    res.render('../views/user/tasks');
});

module.exports = router;