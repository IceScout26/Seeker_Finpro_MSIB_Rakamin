const {
  getExperienceById,
  createExperience,
  updateExperienceById,
  deleteExperienceById,
} = require("../models/userExperienceModel");

const getExperienceByIdController = async (req, res) => {
  const experienceId = req.params.experienceId;

  try {
    const experience = await getExperienceById(experienceId);
    res.status(200).json({ success: true, data: experience, message: "Experience fetched successfully." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "An error occurred while fetching experience." });
  }
};

const createExperienceController = async (req, res) => {
  const newExperience = req.body;
  console.log(req.body)
  try {
    const createdExperience = await createExperience(newExperience);
    res.status(201).json({ success: true, data: createdExperience, message: "Experience created successfully." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "An error occurred while creating experience." });
  }
};

const updateExperienceByIdController = async (req, res) => {
  const experienceId = req.params.experienceId;
  const updatedExperience = req.body;

  try {
    const experience = await updateExperienceById(experienceId, updatedExperience);
    res.status(200).json({ success: true, data: experience, message: "Experience updated successfully." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "An error occurred while updating experience." });
  }
};

const deleteExperienceByIdController = async (req, res) => {
  const experienceId = req.params.experienceId;

  try {
    const deletedExperience = await deleteExperienceById(experienceId);
    res.status(200).json({ success: true, data: deletedExperience, message: "Experience deleted successfully." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "An error occurred while deleting experience." });
  }
};

module.exports = {
  getExperienceByIdController,
  createExperienceController,
  updateExperienceByIdController,
  deleteExperienceByIdController,
};
