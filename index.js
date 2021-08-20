require('dotenv').config()

const chalk = require('chalk');
const mongoose = require('mongoose');
const flash = require('connect-flash');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const passport = require('passport');
const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;
const MONGO_DB = process.env.MONGODB_UR || 'mongodb+srv://hkim1016:Han135Kim1077@todolist.nbirn.mongodb.net/todolistDB';

app.use(express.static(process.cwd() + '/public'));
app.set('view engine', 'ejs'); 

app.use((req, res, next) => {
    console.log(req.method + " " + req.path + " - " + req.ip);
    next();
});

app.use(methodOverride('_method'));

mongoose.connect(MONGO_DB, {
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useFindAndModify: false,
    useCreateIndex: true
});
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Database'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(session({ 
    secret: "00c683c952b404964b3e4f759ef205feaa52ec097755cabbe4068f96939e7394",
    saveUninitialized: false,
    cookie: { maxAge: 1000 * 60 * 60 * 24 },
    resave: false
}));

// app.use(cookieParser());

app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
    res.locals.user = req.session.user;
    next();
})

app.use('/', require('./routes'));
app.use('/user', require('./routes/user'));
app.use('/task', require('./routes/task'));

app.listen(PORT, function() {
    console.log(chalk.blue(`Server running at http://localhost:${PORT}/`));
});