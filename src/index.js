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
app.get('/api', (req, res) => {
  res.send('Hello, World');
});

module.exports = app;
