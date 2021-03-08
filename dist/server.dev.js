"use strict";

var path = require('path');

var express = require('express');

var dotenv = require('dotenv');

var colors = require('colors');

var connectDB = require('./config/db'); // Load env vars


dotenv.config({
  path: './config/config.env'
}); // Connect to database

connectDB(); // Route files

var users = require('./routes/users');

var calendars = require('./routes/calendars');

var app = express();
app.use(express.json());
app.use('/api/v1/users', users);
app.use('/api/v1/calendars', calendars);
var PORT = process.env.PORT || 5000;
var server = app.listen(PORT, function () {
  return console.log("Server started on port ".concat(PORT).green.bold);
}); // Handle unhandled promise rejections

process.on('unhandledRejection', function (err, promise) {
  console.log("Error: ".concat(err.message).red); // Close server & exit process with failure

  server.close(function () {
    return process.exit(1);
  });
});