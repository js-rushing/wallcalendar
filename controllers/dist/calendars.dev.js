"use strict";

var path = require('path');

var Calendar = require('../models/Calendar'); // @desc    Get all calendars
// @route   GET /api/v1/calendars
// @access  Public


exports.getCalendars = function _callee(req, res, next) {
  var calendars;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(Calendar.find());

        case 2:
          calendars = _context.sent;
          res.status(200).json({
            success: true,
            data: calendars
          });

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
}; // @desc    Get single calendar by month and year
// @route   GET /api/v1/calendars/:user/:month/:year
// @access  Private


exports.getSingleCalendar = function _callee2(req, res, next) {
  var calendar;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(Calendar.findOne({
            user: req.params.user,
            month: req.params.month,
            year: req.params.year
          }));

        case 2:
          calendar = _context2.sent;
          console.log(req.params);
          res.status(200).json({
            success: true,
            data: calendar
          });

        case 5:
        case "end":
          return _context2.stop();
      }
    }
  });
}; // @desc    Create calendar
// @route   POST /api/v1/calendars
// @access  Public


exports.createCalendar = function _callee3(req, res, next) {
  var calendar;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return regeneratorRuntime.awrap(Calendar.create(req.body));

        case 2:
          calendar = _context3.sent;
          console.log(req.body);
          res.status(201).json({
            success: true,
            data: calendar
          });

        case 5:
        case "end":
          return _context3.stop();
      }
    }
  });
};