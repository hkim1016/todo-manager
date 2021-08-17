require('dotenv').config()

const chalk = require('chalk');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;
const MONGO_DB = process.env.MONGO_DB || 'mongodb+srv://hkim1016:Han135Kim1077@todolist.nbirn.mongodb.net/todolistDB';

app.use(express.static(process.cwd() + '/public'));
app.set('view engine', 'ejs'); 

app.use(methodOverride('_method'));

mongoose.connect(MONGO_DB, {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Database'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', require('./routes'));
app.use('/user', require('./routes/user'));
app.use('/task', require('./routes/task'));

app.listen(PORT, function() {
    console.log(chalk.blue(`Server running at http://localhost:${PORT}/`));
});