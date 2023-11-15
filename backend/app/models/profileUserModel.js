// profileUserModel.js
const pool = require("../../config/config");

const getAllUsers = async () => {
  try {
    const result = await pool.query('SELECT id, email, name, profile_picture, birthday, description, cv, city, education_id, experience_id, skill_id, level_id FROM "user"');
    return result.rows;
  } catch (error) {
    throw error;
  }
};

const getUserById = async (userId) => {
  try {
    const result = await pool.query('SELECT id, email, name, profile_picture, birthday, description, cv, city, education_id, experience_id, skill_id, level_id FROM "user" WHERE id = $1', [userId]);
    return result.rows[0];
  } catch (error) {
    throw error;
  }
};

const updateUserProfileById = async (userId, newData) => {
  const { name, profile_picture, birthday, description, cv, city, education_id, experience_id, skill_id, level_id } = newData;

  try {
    const result = await pool.query(
      'UPDATE "user" SET name = $1, profile_picture = $2, birthday = $3, description = $4, cv = $5, city = $6, education_id = $7, experience_id = $8, skill_id = $9, level_id = $10 WHERE id = $11 RETURNING *',
      [name, profile_picture, birthday, description, cv, city, education_id, experience_id, skill_id, level_id, userId]
    );

    return result.rows[0];
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  updateUserProfileById,
};
