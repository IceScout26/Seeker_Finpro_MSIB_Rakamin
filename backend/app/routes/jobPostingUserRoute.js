// jobPostingUserRoute.js
const express = require('express');
const router = express.Router();
const { verifyToken } = require('../middleware/jwtMiddleware.js');
const { allJobsController, specificJobController } = require('../controllers/jobPostingController.js');

router.use(verifyToken('user'));

router.get('/', allJobsController); //model getalljobs
router.get('/:jobId', specificJobController); //model getspecificjob

module.exports = router;