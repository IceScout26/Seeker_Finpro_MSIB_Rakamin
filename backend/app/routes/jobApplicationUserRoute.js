//jobApplicationUserRoute.js
const express = require('express');
const router = express.Router();
const { verifyToken } = require('../middleware/jwtMiddleware.js');
const { applyForJobController, getApplicationsByUserController, userDeleteApplicationController } = require('../controllers/jobApplicationController.js');

router.use(verifyToken('user'));

router.post('/user/apply/:jobId', applyForJobController);
router.get('/user/applications', getApplicationsByUserController);
router.delete('/user/applications/:applicationId', userDeleteApplicationController);

module.exports = router;