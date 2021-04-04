const express = require('express');
const passport = require('passport');

const { login,
		sociallogin,
		logout,
		getMe	 
	} = require('../../controllers/auth');
const router = express.Router({ mergeParams: true });

router.route('/login').post(login);
router.route('/sociallogin/:socialID').get(sociallogin);
router.route('/logout').post(logout);
router.route('/me/:id').get(getMe);

module.exports = router;