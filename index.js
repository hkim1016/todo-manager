const chalk = require('chalk')
const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.static(process.cwd() + '/public'));
app.set('view engine', 'ejs'); 

app.use('/', require('./routes'));
app.use('/user', require('./routes/user'));
app.use('/task', require('./routes/task'));

app.listen(PORT, function() {
    console.log(chalk.blue(`Server running at http://localhost:${PORT}/`));
});