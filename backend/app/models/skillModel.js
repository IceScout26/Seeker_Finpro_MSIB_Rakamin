const pool = require("../../config/config");

const getAllSkills = async () => {
  try {
    const result = await pool.query('SELECT * FROM "skill"');
    return result.rows;
  } catch (error) {
    throw error;
  }
};

const getSkillsByName = async (name) => {
  try {
    const result = await pool.query('SELECT * FROM "skill" WHERE LOWER("skill") LIKE $1', [`%${name.toLowerCase()}%`]);
    return result.rows;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllSkills,
  getSkillsByName,
};
