const express = require('express');
const router = express.Router();
const { verifyToken } = require('../middleware/jwtMiddleware');
const { getAllUserEduController, createUserEduController, updateUserEduByIdController, deleteUserEduByIdController } = require('../controllers/userEduController');

router.use(verifyToken('user'));

router.get('/ud', getAllUserEduController);
router.post('/ud', createUserEduController);
router.put('/ud/:eduId', updateUserEduByIdController);
router.delete('/ud/:eduId', deleteUserEduByIdController);

module.exports = router;
