
exports.Response = (res, statusCode, data = null, errors = null) => {
	return res.status(statusCode)
		.json({
			status: errors ? "error" :  "success",
			data: data,
			errors: errors
		});
}