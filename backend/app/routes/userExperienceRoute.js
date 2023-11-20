// userExperienceRoute.js
const express = require('express');
const router = express.Router();
const { verifyToken } = require('../middleware/jwtMiddleware');
const {
  getExperienceByIdController,
  createExperienceController,
  updateExperienceByIdController,
  deleteExperienceByIdController,
} = require('../controllers/userExperienceController');

router.use(verifyToken('user'));

router.get('/users/:experienceId', getExperienceByIdController);
router.post('/users', createExperienceController);
router.put('/users/:experienceId', updateExperienceByIdController);
router.delete('/users/:experienceId', deleteExperienceByIdController);

module.exports = router;
