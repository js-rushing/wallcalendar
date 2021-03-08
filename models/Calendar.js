const mongoose = require('mongoose')

const CalendarSchema = new mongoose.Schema({
  month: {
    type: String,
    required: true,
    enum: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
  },
  year: {
    type: Number,
    required: true,
  },
  days: {
    type: [Number],
    required: true,
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true,
  },
})

module.exports = mongoose.model('Calendar', CalendarSchema)
