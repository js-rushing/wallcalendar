"use strict";

var fs = require('fs');

var mongoose = require('mongoose');

var colors = require('colors');

var dotenv = require('dotenv'); // Load env vars


dotenv.config({
  path: './config/config.env'
}); // Load models

var Calendar = require('./models/Calendar');

var User = require('./models/User'); // Connect to database


mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true
}); // Read JSON files

var calendars = JSON.parse(fs.readFileSync("".concat(__dirname, "/_data/calendars.json"), 'utf-8'));
var users = JSON.parse(fs.readFileSync("".concat(__dirname, "/_data/users.json"), 'utf-8')); // Import into DB

var importData = function importData() {
  return regeneratorRuntime.async(function importData$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(Calendar.create(calendars));

        case 3:
          // await User.create(users)
          console.log('Data Imported...'.green.inverse);
          process.exit();
          _context.next = 10;
          break;

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          console.error(_context.t0);

        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 7]]);
}; // Delete data


var deleteData = function deleteData() {
  return regeneratorRuntime.async(function deleteData$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(Calendar.deleteMany());

        case 3:
          _context2.next = 5;
          return regeneratorRuntime.awrap(User.deleteMany());

        case 5:
          console.log('Data Destroyed...'.red.inverse);
          process.exit();
          _context2.next = 12;
          break;

        case 9:
          _context2.prev = 9;
          _context2.t0 = _context2["catch"](0);
          console.error(_context2.t0);

        case 12:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 9]]);
};

if (process.argv[2] === '-i') {
  importData();
} else if (process.argv[2] === '-d') {
  deleteData();
}