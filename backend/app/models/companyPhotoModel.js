const pool = require("../../config/config");

const getCompanyPhotoById = async (companyId) => {
  try {
    const result = await pool.query('SELECT id, profile_picture FROM "company" WHERE id = $1', [companyId]);
    return result.rows[0];
  } catch (error) {
    throw error;
  }
};

const updateCompanyPhotoById = async (companyId, newProfilePicture) => {
  try {
    const result = await pool.query(
      'UPDATE "company" SET profile_picture = $1 WHERE id = $2 RETURNING *',
      [newProfilePicture, companyId]
    );

    return result.rows[0];
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getCompanyPhotoById,
  updateCompanyPhotoById,
};
