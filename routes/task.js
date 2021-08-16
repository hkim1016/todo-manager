const express = require('express');
const app = express();

const router = express.Router();

const User = require('../models/User');
const Task = require('../models/Task');
 
/*
 TODO
 - post: create new task
 - put: update selected task
 - delete: delete selected task
*/