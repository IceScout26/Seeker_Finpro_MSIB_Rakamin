const express = require('express');
const router = express.Router();
const { verifyToken } = require('../middleware/jwtMiddleware');
const { getAllSkillsController, getSkillsByNameController } = require('../controllers/skillController');

router.use(verifyToken('user'));

router.get('/skills', getAllSkillsController);
router.get('/skills/:name', getSkillsByNameController);

module.exports = router;
