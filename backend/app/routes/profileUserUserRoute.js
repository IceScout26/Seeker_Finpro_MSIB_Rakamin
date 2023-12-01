// profileUserRoute.js
const express = require('express');
const router = express.Router();
const { verifyToken } = require('../middleware/jwtMiddleware');
const { getAllUserProfilesController, getUserProfileController, updateUserProfileController } = require('../controllers/profileUserController');

router.use(verifyToken('user'));

router.get('/user', getAllUserProfilesController);
router.get('/user/:userId', getUserProfileController);
router.put('/user' ,updateUserProfileController);

module.exports = router;
