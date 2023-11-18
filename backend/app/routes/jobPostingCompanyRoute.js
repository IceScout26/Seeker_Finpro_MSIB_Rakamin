// jobPostingCompanyRoute.js
const express = require('express');
const router = express.Router();
const { verifyToken } = require('../middleware/jwtMiddleware.js');
const {allCompanyJobsController, companyJobController, postJobController, updateJobController} = require('../controllers/jobPostingController.js');

router.use(verifyToken('company'));

router.get('/', allCompanyJobsController);
router.get('/:jobId', companyJobController);
router.post('/', postJobController);
router.put('/:jobId', updateJobController);

module.exports = router;