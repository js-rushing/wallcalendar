"use strict";

var express = require('express');

var _require = require('../controllers/calendars'),
    getCalendars = _require.getCalendars,
    createCalendar = _require.createCalendar,
    getSingleCalendar = _require.getSingleCalendar;

var Calendar = require('../models/Calendar');

var router = express.Router();
router.route('/').get(getCalendars).post(createCalendar);
router.route('/:user/:month/:year').get(getSingleCalendar);
module.exports = router;