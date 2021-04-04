const User = require('../models/User');
const { Response } = require("../utils/Response");
const validateLoginInput = require('../validation/auth');

// @desc      Login user
// @route     POST /api/auth/login
// @access    Public
exports.login = async (req, res, next) => {
	const { errors, isValid } = validateLoginInput(req.body);	
	if (!isValid) {
		return next(Response(res, 400, null, errors));
	}
	
	// Check for user
	const user = await User.findOne({ email: req.body.email });
	if (!user) {
		errors.email = "User not found.";
		return next(Response(res, 400, null, { }));
	}
	// Check if password matches
	const isMatch = await user.matchPassword(req.body.password);
	if (!isMatch) {		
		return next(Response(res, 400, null, "Invalid password."));
	}
	sendTokenResponse(user, 200, res);
};

// @desc      Sociallogin user
// @route     POST /api/auth/sociallogin
// @access    Public
exports.sociallogin = async (req, res, next) => {		
	const socialID = req.params.socialID;
	const user = await User.findOne({ socialID: socialID });	
	sendTokenResponse(user, 200, res);	
};

// @desc      Log user out / clear cookie
// @route     GET /api/auth/logout
// @access    Public
exports.logout = async (req, res, next) => {
	res.cookie('token', 'none', {
		expires: new Date(Date.now() + 10 * 1000),
		httpOnly: true
	});

	return Response(res, 200)
};

// @desc      Get current logged in user
// @route     POST /api/auth/me
// @access    Private
exports.getMe = async (req, res, next) => {
	const user = await User.findById(req.params.id);
	return Response(res, 200, { user }); 	
};


// Get token from model, create cookie and send response
const sendTokenResponse = (user, statusCode, res) => {
	// Create token
	const token = user.getSignedJwtToken();

	const options = {
		expires: new Date(
			Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000
		),
		httpOnly: true
	};

	if (process.env.NODE_ENV === 'production') {
		options.secure = true;
	};
	res.cookie('token', token, options);
	delete user['password'];
	Response(res, statusCode, {
		'user': user,
		'token': token
	});	
};