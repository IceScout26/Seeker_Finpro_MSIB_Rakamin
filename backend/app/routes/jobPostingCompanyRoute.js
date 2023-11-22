// jobPostingCompanyRoute.js
const express = require('express');
const router = express.Router();
const { verifyToken } = require('../middleware/jwtMiddleware.js');
const { companyJobsController, specificJobController, companyPostJobController, companyDeleteJobController, updateJobStatusController } = require('../controllers/jobPostingController.js');

router.use(verifyToken('company'));

router.get('/company', companyJobsController);
router.get('/company/:jobId', specificJobController);
router.post('/company', companyPostJobController);
router.put('/company/:jobId/', updateJobStatusController);
router.delete('/company/:jobId', companyDeleteJobController);

module.exports = router;