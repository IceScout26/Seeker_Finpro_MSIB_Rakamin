// jobPostingDefaultRoute.js
const express = require('express');
const router = express.Router();
const { allJobsController, specificJobController, getJobByNameController } = require('../controllers/jobPostingController.js');

router.get('/', allJobsController); 
router.get('/:jobId', specificJobController); 
router.get('/:name', getJobByNameController); 

module.exports = router;