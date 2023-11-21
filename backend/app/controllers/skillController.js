const { getAllSkills, getSkillsByName } = require('../models/skillModel');

const getAllSkillsController = async (req, res) => {
  try {
    const skills = await getAllSkills();
    res.status(200).json(skills);
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while fetching skills.");
  }
};

const getSkillsByNameController = async (req, res) => {
  const name = req.params.name;

  try {
    const skills = await getSkillsByName(name);
    res.status(200).json(skills);
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while fetching skills by name.");
  }
};

module.exports = {
  getAllSkillsController,
  getSkillsByNameController,
};
