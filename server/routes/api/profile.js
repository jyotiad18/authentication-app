const express = require('express');
const { protect } = require('../../middleware/authorized');
const {
	getProfile,
	upload,
	updateProfile
} = require('../../controllers/profile');
const router = express.Router({ mergeParams: true });

router.use(protect)	
router.route('/:userid').get(getProfile);
router.route('/upload').post(upload);
router.route('/:id').put(updateProfile);

module.exports = router;