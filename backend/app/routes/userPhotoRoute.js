const express = require('express');
const router = express.Router();
const { verifyToken } = require('../middleware/jwtMiddleware');
const multer = require('multer');
const { getUserPhotoController, updateUserPhotoController } = require('../controllers/userPhotoController');

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

router.use(verifyToken('user'));

router.get('/user/:userId', getUserPhotoController);
router.put('/user', upload.single('profile_picture'), updateUserPhotoController);

module.exports = router;
