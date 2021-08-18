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
// router.get('/', async (req, res) => {
//     await Task.find({}, (err, tasks) => {
//         if(err) console.error(err);

//         // res.render('../views/user/tasks', {tasks: tasks});
//         res.redirect('/tasks');
//         // renderTaskPage(res);
//     })
// });

// Creating a new task
router.post('/', async (req, res) => {
    const task = new Task({
        taskName: req.body.taskName,
        taskSummary: req.body.taskSummary,
        date: req.body.date,
        description: req.body.description
    });

    await task.save((err) => {
        if(err) console.error(err);
    });

    res.redirect('/tasks');
});

// Updating a specific task
router.put('/', async (req, res) => {
    await Task.findByIdAndUpdate(req.body.taskID, {finished: true}, (err, docs) => {
        if(err) console.error(err);

        console.log('Update: ' + docs)
    });

    res.redirect('/tasks');
});

// Renders the task page with the finished tasks
router.delete('/', async (req, res) => {
    await Task.findByIdAndDelete(req.body.taskID, (err, docs) => {
        if(err) console.error(err);

        console.log('Deleted: ' + docs);
    });
    
    res.redirect('/tasks');
});

// async function renderTaskPage(res) {
//     const tasks = await Task.find({});
//     res.render('../views/user/tasks', {tasks: tasks});
// }

module.exports = router;