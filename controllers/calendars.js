const path = require('path')
const Calendar = require('../models/Calendar')

// @desc    Get all calendars
// @route   GET /api/v1/calendars
// @access  Public
exports.getCalendars = async (req, res, next) => {
  const calendars = await Calendar.find()

  res.status(200).json({
    success: true,
    data: calendars,
  })
}

// @desc    Get single calendar by month and year
// @route   GET /api/v1/calendars/:user/:month/:year
// @access  Private
exports.getSingleCalendar = async (req, res, next) => {
  const calendar = await Calendar.findOne({
    user: req.params.user,
    month: req.params.month,
    year: req.params.year,
  })
  console.log(req.params)

  res.status(200).json({
    success: true,
    data: calendar,
  })
}

// @desc    Create calendar
// @route   POST /api/v1/calendars
// @access  Public
exports.createCalendar = async (req, res, next) => {
  const calendar = await Calendar.create(req.body)
  console.log(req.body)

  res.status(201).json({
    success: true,
    data: calendar,
  })
}
