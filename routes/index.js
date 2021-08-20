const session = require('express-session');
const flash = require('connect-flash');
const moment = require('moment');

const express = require('express');
const router = express.Router();

const User = require('../models/User');
const Task = require('../models/Task');

// renders the homepage (not logged in)
router.get('/', (req, res) => {
    res.locals.user = null;

    console.log(req.session);

    if(req.session) {
        req.session.destroy();
    }

    console.log(req.session);

    res.render('../views/index');
});

// renders the about page
router.get('/about', (req, res) => {
    res.render('../views/about');
});

// renders the contact page
router.get('/contact', (req, res) => {
    res.render('../views/contact');
});

// renders the main page (logged in)
router.get('/tasks', async (req, res) => {
    const tasks = await Task.find({user: req.session.user._id});

    res.render('../views/user/tasks', {tasks: tasks, moment: moment});
});

module.exports = router;