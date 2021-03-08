"use strict";

var express = require('express');

var _require = require('../controllers/users'),
    getUsers = _require.getUsers,
    createUser = _require.createUser;

var User = require('../models/User');

var router = express.Router();
router.route('/').get(getUsers).post(createUser);
module.exports = router;