// userPhotoController.js
const { getUserPhotoById, updateUserPhotoById } = require('../models/userPhotoModel');

const getUserPhotoController = async (req, res) => {
  const userId = req.params.userId;

  try {
    const userPhoto = await getUserPhotoById(userId);

    if (!userPhoto) {
      return res.status(404).json({ message: 'User photo not found' });
    }

    // Mendapatkan URL lengkap ke gambar dari folder 'public/upload/photos'
    const imageUrl = `${req.protocol}://${req.get('host')}/upload/photos/${userPhoto.profile_picture}`;

    // Menambahkan URL ke respons JSON
    const response = { ...userPhoto, imageUrl };

    res.status(200).json(response);
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while fetching user photo.");
  }
};

const updateUserPhotoController = async (req, res) => {
  const userId = req.accountId; // pakai accountId dari JWT token
  const newProfilePicture = req.file.filename;

  try {
    const updatedUser = await updateUserPhotoById(userId, newProfilePicture);

    // Menggunakan URL lengkap untuk gambar yang baru diunggah
    const imageUrl = `${req.protocol}://${req.get('host')}/upload/photos/${newProfilePicture}`;

    // Menambahkan URL ke respons JSON
    const response = { ...updatedUser, imageUrl };

    res.status(200).json(response);
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while updating user photo.");
  }
};

module.exports = {
  getUserPhotoController,
  updateUserPhotoController,
};
