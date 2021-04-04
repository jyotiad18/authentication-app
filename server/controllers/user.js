const User = require('../models/User');
const Profile = require('../models/Profile');
const { Response } = require("../utils/Response");
const validateUserInput = require('../validation/user');

// @desc      Register user
// @route     POST /api/users/
// @access    Public
exports.register = async (req, res, next) => {  
   const requestUser = req.body;   
  const { errors, isValid } = validateUserInput(requestUser);
  if (!isValid) {
     return next(Response(res, 422, null, errors));
  }
  
  //check is user already exists
  const user = await User.findOne({ email: require.email });
  if (user) {
      errors.email = 'Email already exists';
      return next(Response(res, 422, null, errors));
  }

   const newUser = new User({
      displayName: requestUser.displayName,
      email: requestUser.email,
      password: requestUser.password
   });
  
   const responseUser = await User.create(newUser);

   const profileData = {
			user: responseUser._id,
			name: requestUser.displayName,
         email: requestUser.email
   }
   await Profile.create(profileData);   
   
   return Response(res, 200, responseUser);     
};
