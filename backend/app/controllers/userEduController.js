// userEduController.js
const { getAllUserEdu, createUserEdu, updateUserEduById, deleteUserEduById } = require('../models/userEduModel');

const getAllUserEduController = async (req, res) => {
  const accountId = req.accountId;

  try {
    const userEduList = await getAllUserEdu(accountId);
    res.status(200).json(userEduList);
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while fetching user education data.");
  }
};

const createUserEduController = async (req, res) => {
  const userId = req.accountId;
  const newEduData = req.body;

  try {
    const createdUserEdu = await createUserEdu(userId, newEduData);
    res.status(201).json(createdUserEdu);
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while creating user education data.");
  }
};

const updateUserEduByIdController = async (req, res) => {
  const userId = req.accountId;
  const eduId = req.params.eduId;
  const updatedEduData = req.body;

  try {
    const updatedUserEdu = await updateUserEduById(userId, eduId, updatedEduData);
    res.status(200).json(updatedUserEdu);
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while updating user education data.");
  }
};

const deleteUserEduByIdController = async (req, res) => {
  const eduId = req.params.eduId;

  try {
    await deleteUserEduById(eduId);
    res.status(204).json({ message: "User education data deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred while deleting user education data." });
  }
};

module.exports = {
  getAllUserEduController,
  createUserEduController,
  updateUserEduByIdController,
  deleteUserEduByIdController,
};
