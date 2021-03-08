const User = require('../models/User')

// @desc    Get all users
// @route   GET /api/v1/users
// @access  Public
exports.getUsers = async (req, res, next) => {
  const user = await User.find()

  res.status(200).json({
    success: true,
    data: user,
  })
}

// @desc    Create user
// @route   POST /api/v1/users
// @access  Public
exports.createUser = async (req, res, next) => {
  const user = await User.create(req.body)
  console.log(req.body)

  res.status(201).json({
    success: true,
    data: user,
  })
}
