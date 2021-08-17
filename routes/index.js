const session = require('express-session');
const express = require('express');
const app = express();

const router = express.Router();

const User = require('../models/User');
const Task = require('../models/Task');

// renders the homepage (not logged in)
router.get('/', (req, res) => {
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
    const tasks = await Task.find({});
    res.render('../views/user/tasks', {tasks: tasks});
    // res.render('../views/contact');
});

module.exports = router;