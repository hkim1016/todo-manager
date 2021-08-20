// const { body, validationResult } = require('express-validator');

const express = require('express');
const app = express();

const router = express.Router();

const User = require('../models/User');
const Task = require('../models/Task');
 
/*
 TODO
 - post: create new user
 - put: update selected user
 - delete: delete selected user
*/

router.get('/',  async (req, res) => {
    // console.log('METHOD: ' + req.method);
    // console.log(req.query);

    const user = await User.findOne({email: req.query.email}, (err) => {
        if(err) console.log(err);
    });

    req.session.user = user;
    res.locals.loggedIn = user;
    // console.log(res.locals.user);
    // console.log(req.session);

    // res.redirect('/');
    res.redirect('/tasks');
});

router.post('/', async (req, res) => {
    const user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    });

    await user.save((err) => {
        if(err) {
            console.log(err);
        }
    })

    res.redirect('/');
});

module.exports = router;