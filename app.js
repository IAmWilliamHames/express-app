const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const errorHandler = require('./middleware/error.js');

const bootcampsRouter = require('./bootcamps/routes.js');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api/v1/bootcamps', bootcampsRouter);

app.use(errorHandler);

module.exports = app;
