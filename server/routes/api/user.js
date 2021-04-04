const express = require('express');
const { register } = require('../../controllers/user');
const router = express.Router({ mergeParams: true });

router.route('/').post(register);	

module.exports = router;