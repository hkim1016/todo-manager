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

// Getting all tasks
router.get('/json', (req, res) => {
    Task.find({}, (err, tasks) => {
        if(err) console.error(err);

        res.json(tasks);
    })
});

// Renders the task page with the tasks
router.get('/', (req, res) => {
    Task.find({}, (err, tasks) => {
        if(err) console.error(err);

        res.render('../views/user/tasks', {tasks: tasks});
    })
})

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

// Renders the task page with the finished tasks
router.delete('/', (req, res) => {

});

module.exports = router;