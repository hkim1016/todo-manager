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