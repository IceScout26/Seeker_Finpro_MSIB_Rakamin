// jobPostingCompanyRoute.js
const express = require('express');
const router = express.Router();
const { verifyToken } = require('../middleware/jwtMiddleware.js');
const { companyJobsController, specificJobController, companyPostJobController, companyDeleteJobController } = require('../controllers/jobPostingController.js');

router.use(verifyToken('company'));

router.get('/', companyJobsController); 
router.get('/:jobId', specificJobController); 
router.post('/', companyPostJobController);
router.delete('/:jobId', companyDeleteJobController); 

module.exports = router;