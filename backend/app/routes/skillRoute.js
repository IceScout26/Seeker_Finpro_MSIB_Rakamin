const express = require('express');
const router = express.Router();
const { verifyToken } = require('../middleware/jwtMiddleware');
const { getAllSkillsController } = require('../controllers/skillController');

router.use(verifyToken('user'));

router.get('/skills', getAllSkillsController);

module.exports = router;
