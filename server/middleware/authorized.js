const jwt = require('jsonwebtoken');
const { Response } = require("../utils/Response");

// Protect routes
exports.protect = async (req, res, next) => {	
	let token = null;
	const authorization = req.headers.authorization.toString();
	if (authorization !== "") {				
		token = authorization.split(" ")[1];		
		token = token.substring(0, token.length - 1);
		// Make sure token exists
		if (token === null) {
			return next(Response(res, 401, null, 'Not authorized to access this route'));	
		}
		try {			
			await jwt.verify(token, process.env.JWT_SECRET);			
			next();
		} catch (err) {			
			return next(Response(res, 401, null, 'Not authorized to access this route'));		
		}
	} else {	
		return next(Response(res, 401, null, 'Not authorized to access this route'));
	}	
};
