const express = require('express');
const app = express();

const router = express.Router();

const User = require('../models/User');
const Task = require('../models/Task');
 
/*
 TODO
 - get: get all tasks
 - post: create new task
 - put: update selected task
 - delete: delete selected task
*/

// Getting all tasks for the user
router.get('/', (req, res) => {

});

// Creating a new task
router.post('/', (req, res) => {
    const task = new Task({
        taskName: req.body.taskName,
        taskSummary: req.body.taskSummary,
        date: req.body.date,
        description: req.body.description
    });

    task.save((err) => {
        if(err) console.error(err);

        res.redirect('/tasks');
    });
});

// Updating a specific task
router.put('/:id', (req, res) => {

});

// Deleting a specific task
router.delete('/:id', (req, res) => {

});

module.exports = router;