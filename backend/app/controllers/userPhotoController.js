// userPhotoController.js
const { getUserPhotoById, updateUserPhotoById } = require('../models/userPhotoModel');

const getUserPhotoController = async (req, res) => {
  const userId = req.params.userId;

  try {
    const userPhoto = await getUserPhotoById(userId);
    res.status(200).json(userPhoto);
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
    res.status(200).json(updatedUser);
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while updating user photo.");
  }
};

module.exports = {
  getUserPhotoController,
  updateUserPhotoController,
};
