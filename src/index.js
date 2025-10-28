require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const { default: helmet } = require('helmet');
const compression = require('compression');

const app = express();

// Middleware
app.use(morgan('dev'));
app.use(helmet());
app.use(compression());

// Sample route
app.use('/api/v1', require('./routes'));

// init db
require('./db/init.mongo');

module.exports = app;
