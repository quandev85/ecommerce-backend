'use strict';

const express = require('express');
const { userController } = require('../../controllers');
const router = express.Router();

router.get('/', userController.signUp);

module.exports = router;
