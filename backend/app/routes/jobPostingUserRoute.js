// jobPostingUserRoute.js
const express = require('express');
const router = express.Router();
const { verifyToken } = require('../middleware/jwtMiddleware.js');
const {allJobsController, jobController, } = require('../controllers/jobPostingController.js');

router.use(verifyToken('user'));

router.get('/', allJobsController);
router.get('/:jobId', jobController);

module.exports = router;