const pool = require("../../config/config");

const getAllSkills = async () => {
  try {
    const result = await pool.query('SELECT * FROM "skill"');
    return result.rows;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllSkills,
};
