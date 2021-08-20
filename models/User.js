const mongoose = require('mongoose');
require('mongoose-type-email');
const validator = require('validator');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        require: true,
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: [validator.isEmail, 'Email is invalid'],
    },
    password: {
        type: String,
        required: true
    }
}, {collection: 'users'});

module.exports = mongoose.model('User', userSchema);