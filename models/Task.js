const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    taskName: {
        type: String,
        required: true
    },
    taskSummary: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        // required: true
    },
    description: {
        type: String,
        required: true
    }
}, {collection: 'tasks'});

module.exports = mongoose.model('Task', taskSchema);