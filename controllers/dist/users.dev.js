"use strict";

var User = require('../models/User'); // @desc    Get all users
// @route   GET /api/v1/users
// @access  Public


exports.getUsers = function _callee(req, res, next) {
  var user;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(User.find());

        case 2:
          user = _context.sent;
          res.status(200).json({
            success: true,
            data: user
          });

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
}; // @desc    Create user
// @route   POST /api/v1/users
// @access  Public


exports.createUser = function _callee2(req, res, next) {
  var user;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(User.create(req.body));

        case 2:
          user = _context2.sent;
          console.log(req.body);
          res.status(201).json({
            success: true,
            data: user
          });

        case 5:
        case "end":
          return _context2.stop();
      }
    }
  });
};