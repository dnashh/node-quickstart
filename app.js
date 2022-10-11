const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const path = require('path');
const morgan = require('morgan');
const router = require('./src/routes/index');
const errorHandler = require('./src/utils/errorHandler');

const app = express();

app.use(cors({
    origin: '*',
    credentials: true,
}));
app.set('views', `${__dirname}/src/views`);
app.set('view engine', 'ejs');

app.use(express.static('src/static'));
app.set('views', path.join(__dirname, 'src/views'));
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(morgan('tiny'));

app.use(router);

app.use(errorHandler)

module.exports = app;