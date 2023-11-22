//jobApplicationCompanyRoute.js
const express = require('express');
const router = express.Router();
const { verifyToken } = require('../middleware/jwtMiddleware.js');
const { getApplicationsByJobController, updateApplicationStatusController, updateJobStatusController, companyDeleteApplicationController } = require('../controllers/jobApplicationController.js');

router.use(verifyToken('company'));

router.get('/company/applications/:jobId', getApplicationsByJobController);
router.put('/company/applications/:applicationId', updateApplicationStatusController);
router.put('/company/jobs/:jobId/', updateJobStatusController);
//router.delete('/company/applications/:applicationId', companyDeleteApplicationController);

module.exports = router;