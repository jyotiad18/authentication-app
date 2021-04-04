const User = require('../models/User');
const Profile = require('../models/Profile');
const { Response } = require("../utils/response");
const validateProfileInput = require('../validation/profile');

// @desc      Get user profile by user id
// @route     GET /api/:userid/profiles
// @access    Public
exports.getProfile = async (req, res, next) => {
	const errors = {};
	const profile = await Profile.findOne({ user: req.params.userid });
    
	if (!profile) {
		errors.profile = 'No profile created.'
		return next(Response(res, 400, null, errors));
	}
	return Response(res, 200, profile);
};

// @desc      Post user profile by user id
// @route     POST /api/:userid/profiles
// @access    Public
exports.updateProfile = async (req, res, next) => {
	const profile = req.body;
	const id = req.params.id;
	const { errors, isValid } = validateProfileInput(profile);	
	if (!isValid) {
		return next(Response(res, 422, null, errors));
	}		

	const resp = await Profile.findByIdAndUpdate(
		{ _id: id },
		{ $set: profile },
		{ new: true}
	)
	if (resp) {	
		const user = await User.findOne({ _id: profile.user });
		if (user.image !== profile.imageUrl)
		{
			user.image = profile.imageUrl;
			await User.findByIdAndUpdate(
				{ _id: profile.user },
				{ $set: user },
				{ new: true }
			)
		}
		return Response(res, 200, resp);	
	}		
	return Response(res, 200, null, RTCIceTransport);
};

// @desc      Post user Image
// @route     POST /api/profiles/uploadimage
// @access    Public
exports.upload  = (req, res, next) => {	
	const errors = {};
	if (!req.files) {
		errors.msg = 'Please upload a image';
		return next(Response(res, 422, null, errors));
	}
	const file = req.files.file;
	if (!file.mimetype.startsWith('image')) {
		errors.msg = 'Please upload a valid image';
		return next(Response(res, 422, null, errors));
	}
	file.mv(`${process.env.FILE_UPLOAD_PATH}/${file.name}`, (err) => {
		console.error(err);
		if (err) {    
			errors.msg = 'Problem with file upload';
			return next(Response(res, 500, null, errors));			
		}
		return Response(res, 200, {
			imageUrl:`${req.protocol}://${req.get('host')}/${process.env.FILE_UPLOAD_PATH}/${file.name}`,
			fileName: file.name
		});				
    });  
}