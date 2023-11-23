const { getUserLevelById } = require("../models/userLevelModel");

const getUserLevelByIdController = async (req, res) => {
  const levelId = req.params.levelId;

  try {
    const userLevel = await getUserLevelById(levelId);
    if (userLevel) {
      res.status(200).json(userLevel);
    } else {
      res.status(404).json({ message: "User level not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while fetching user level.");
  }
};

module.exports = {
  getUserLevelByIdController,
};
