const pool = require("../../config/config");

const getAllCompanies = async () => {
  try {
    const result = await pool.query('SELECT id, email, name, profile_picture, description, city FROM "company"');
    return result.rows;
  } catch (error) {
    throw error;
  }
};

const getCompanyById = async (companyId) => {
  try {
    const result = await pool.query('SELECT id, email, name, profile_picture, description, city FROM "company" WHERE id = $1', [companyId]);
    return result.rows[0];
  } catch (error) {
    throw error;
  }
};

const updateCompany = async (newData) => {
  const { id, name, profile_picture, description, city } = newData;

  try {
    const result = await pool.query(
      'UPDATE "company" SET name = $1, profile_picture = $2, description = $3, city = $4 WHERE id = $5 RETURNING *',
      [name, profile_picture, description, city, id]
    );

    return result.rows[0];
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllCompanies,
  getCompanyById,
  updateCompany,
};
