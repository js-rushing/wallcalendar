"use strict";

function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

var express = require('express');

var _require = require('../controllers/users');

_objectDestructuringEmpty(_require);

var User = require('../models/User');

var router = express.Router();
router.route('/users');