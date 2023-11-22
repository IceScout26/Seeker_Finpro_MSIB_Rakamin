// jobPostingUserRoute.js
const express = require('express');
const router = express.Router();
const { verifyToken } = require('../middleware/jwtMiddleware.js');
const { allJobsController, specificJobController } = require('../controllers/jobPostingController.js');

router.use(verifyToken('user'));

router.get('/user', allJobsController); 
router.get('/user/:jobId', specificJobController); 
router.get('/user/:name', getJobByNameController); 

module.exports = router;