/* eslint-disable import/newline-after-import */
const express = require('express');
const app = express();
const musicRouter = require('./routes/musicRoutes');

app.use(express.static('public'));

app.use(
  express.json({
    limit: '10kb',
  })
);
app.use(express.urlencoded({ extended: true, limit: '10kb' }));

app.use('/api/v1/library/music', musicRouter);

module.exports = app;
