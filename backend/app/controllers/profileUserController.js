// profileUserController.js
const { getAllUsers, getUserById, updateUserProfileById } = require('../models/profileUserModel');

const getAllUserProfilesController = async (req, res) => {
  try {
    const userProfiles = await getAllUsers();
    res.status(200).json(userProfiles);
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while fetching user profiles.");
  }
};

const getUserProfileController = async (req, res) => {
  const userId = req.params.userId;

  try {
    const userProfile = await getUserById(userId);
    res.status(200).json(userProfile);
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while fetching user profile.");
  }
};

const updateUserProfileController = async (req, res) => {
  const userId = req.accountId; // pakai accountId dari JWT token
  const newData = req.body;

  try {
    // update dengan accountId dari JWT token
    const updatedProfile = await updateUserProfileById(userId, newData);
    res.status(200).json(updatedProfile);
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while updating user profile.");
  }
};

module.exports = {
  getAllUserProfilesController,
  getUserProfileController,
  updateUserProfileController,
};
