const pool = require("../../config/config");

const getUserLevelById = async (levelId) => {
  try {
    const result = await pool.query('SELECT * FROM "level" WHERE id = $1', [
      levelId,
    ]);
    return result.rows[0];
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getUserLevelById,
};
