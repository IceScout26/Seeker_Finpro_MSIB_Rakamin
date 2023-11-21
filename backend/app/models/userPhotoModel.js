// userPhotoModel.js
const pool = require("../../config/config");

const getUserPhotoById = async (userId) => {
  try {
    const result = await pool.query('SELECT id, profile_picture FROM "user" WHERE id = $1', [userId]);
    return result.rows[0];
  } catch (error) {
    throw error;
  }
};

const updateUserPhotoById = async (userId, newProfilePicture) => {
  try {
    const result = await pool.query(
      'UPDATE "user" SET profile_picture = $1 WHERE id = $2 RETURNING *',
      [newProfilePicture, userId]
    );

    return result.rows[0];
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getUserPhotoById,
  updateUserPhotoById,
};
