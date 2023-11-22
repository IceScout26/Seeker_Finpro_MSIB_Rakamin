// userEduModel.js
const pool = require("../../config/config");

const getAllUserEdu = async (userId) => {
  try {
    const result = await pool.query('SELECT * FROM "education" WHERE id = $1', [userId]);
    return result.rows;
  } catch (error) {
    throw error;
  }
};

const createUserEdu = async (userId, eduData) => {
  const { name, gpa, major, start, end } = eduData;

  try {
    const result = await pool.query(
      'INSERT INTO "education" (name, gpa, major, start, "end") VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [name, gpa, major, start, end]
    );

    return result.rows[0];
  } catch (error) {
    throw error;
  }
};

const updateUserEduById = async (userId, eduId, eduData) => {
  const { name, gpa, major, start, end } = eduData;

  try {
    const result = await pool.query(
      'UPDATE "education" SET name = $1, gpa = $2, major = $3, start = $4, "end" = $5 WHERE id = $6 RETURNING *',
      [name, gpa, major, start, end, eduId]
    );

    return result.rows[0];
  } catch (error) {
    throw error;
  }
};

const deleteUserEduById = async (userId, eduId) => {
  try {
    const result = await pool.query('DELETE FROM "education" WHERE id = $1 RETURNING *', [eduId]);
    return result.rows[0];
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllUserEdu,
  createUserEdu,
  updateUserEduById,
  deleteUserEduById,
};

