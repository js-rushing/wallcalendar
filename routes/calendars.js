const express = require('express')
const {
  getCalendars,
  createCalendar,
  getSingleCalendar,
} = require('../controllers/calendars')

const Calendar = require('../models/Calendar')

const router = express.Router()

router.route('/').get(getCalendars).post(createCalendar)

router.route('/:user/:month/:year').get(getSingleCalendar)

module.exports = router
