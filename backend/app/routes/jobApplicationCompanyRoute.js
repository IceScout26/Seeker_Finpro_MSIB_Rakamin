//jobApplicationCompanyRoute.js
const express = require('express');
const router = express.Router();
const { verifyToken } = require('../middleware/jwtMiddleware.js');
const { getApplicationsByJobController, updateApplicationStatusController, companyDeleteApplicationController, getApplicationsByCompanyController } = require('../controllers/jobApplicationController.js');

router.use(verifyToken('company'));

router.get('/company/applications/:jobId', getApplicationsByJobController);
router.get('/company/applications', getApplicationsByCompanyController);
router.put('/company/applications/:applicationId', updateApplicationStatusController);
router.delete('/company/applications/:applicationId', companyDeleteApplicationController);

module.exports = router;