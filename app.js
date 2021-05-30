const express = require('express');
const logger = require('morgan');
const { error } = require('./services/messages/error');
const app = express();

app.use(express.json());
app.use(
    express.urlencoded({
        extended: false,
    })
);
app.use(logger('dev'));

app.use((req, res) => {
    error(res, 'Bad request');
});

module.exports = app;
