const express = require('express');
const router = express.Router();
const { verifyToken } = require('../middleware/jwtMiddleware');
const {
  getAllCompaniesController,
  getCompanyByIdController,
  updateCompanyController,
} = require('../controllers/profileCompanyController');


router.get('/companies', getAllCompaniesController);
router.get('/companies/:companyId', getCompanyByIdController);
router.put('/companies',verifyToken('company') ,updateCompanyController);

module.exports = router;
