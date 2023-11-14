const { getAllSkills } = require('../models/skillModel');

const getAllSkillsController = async (req, res) => {
  try {
    const skills = await getAllSkills();
    res.status(200).json(skills);
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while fetching skills.");
  }
};

module.exports = {
  getAllSkillsController,
};
