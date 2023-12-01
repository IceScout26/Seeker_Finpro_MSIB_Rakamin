// profileUserRoute.js
const express = require('express');
const router = express.Router();
const { verifyToken } = require('../middleware/jwtMiddleware');
const { getAllUserProfilesController, getUserProfileController } = require('../controllers/profileUserController');

router.use(verifyToken('company'));

router.get('/user', getAllUserProfilesController);
router.get('/user/:userId', getUserProfileController);

module.exports = router;
