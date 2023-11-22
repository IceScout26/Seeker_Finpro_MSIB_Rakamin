// userExperienceModel.js
const pool = require("../../config/config");

const getExperienceById = async (experienceId) => {
  try {
    const result = await pool.query(
      'SELECT * FROM "experience" WHERE id = $1',
      [experienceId]
    );
    return result.rows[0];
  } catch (error) {
    throw error;
  }
};

const createExperience = async (newExperience) => {
  const { company_name, start, end, position } = newExperience;
  console.log(newExperience)
  try {
    const result = await pool.query(
      'INSERT INTO "experience" (company_name, start, "end", position) VALUES ($1, $2, $3, $4) RETURNING *',
      [company_name, start, end, position]
    );

    return result.rows[0];
  } catch (error) {
    throw error;
  }
};

const updateExperienceById = async (experienceId, updatedExperience) => {
  const { company_name, start, end, position } = updatedExperience;

  try {
    const result = await pool.query(
      'UPDATE "experience" SET company_name = $1, start = $2, "end" = $3, position = $4 WHERE id = $5 RETURNING *',
      [company_name, start, end, position, experienceId]
    );

    return result.rows[0];
  } catch (error) {
    throw error;
  }
};

const deleteExperienceById = async (experienceId) => {
  try {
    const result = await pool.query(
      'DELETE FROM "experience" WHERE id = $1 RETURNING *',
      [experienceId]
    );
    return result.rows[0];
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getExperienceById,
  createExperience,
  updateExperienceById,
  deleteExperienceById,
};
