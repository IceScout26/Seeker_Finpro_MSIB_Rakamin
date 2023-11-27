const express = require('express');
const router = express.Router();
const { verifyToken } = require('../middleware/jwtMiddleware');
const multer = require('multer');
const { getCompanyPhotoController, updateCompanyPhotoController } = require('../controllers/companyPhotoController');

// Konfigurasi Multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/upload/photos');
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, 'profile_picture-' + uniqueSuffix + file.originalname.slice(-4));
  },
});

const upload = multer({ storage: storage });

router.use(verifyToken('company'));

router.get('/company/:companyId', getCompanyPhotoController);
router.put('/company', upload.single('profile_picture'), updateCompanyPhotoController);

module.exports = router;
