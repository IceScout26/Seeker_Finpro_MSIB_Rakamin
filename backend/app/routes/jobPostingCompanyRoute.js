// jobPostingCompanyRoute.js
const express = require('express');
const router = express.Router();
const { verifyToken } = require('../middleware/jwtMiddleware.js');
const { companyJobsController, specificJobController, companyPostJobController, companyDeleteJobController } = require('../controllers/jobPostingController.js');

router.use(verifyToken('company'));

router.get('/company', companyJobsController); 
router.get('/company/:jobId', specificJobController); 
router.post('/company', companyPostJobController);
router.delete('/company/:jobId', companyDeleteJobController); 

module.exports = router;