const pool = require("../../config/config");

const registerCompany = async (
  email,
  password,
  name,
  profile_picture,
  city
) => {
  try {
    // Tambahkan logika untuk mengeksekusi query ke database untuk mendaftarkan perusahaan
    const result = await pool.query(
      'INSERT INTO "company" (email, password, name, profile_picture, description, city) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
      [
        email,
        password,
        name,
        profile_picture || 'default_profile_picture.jpg',
        'No description available.',
        city || 'Unknown City'
      ]
    );

    return result.rows[0];
  } catch (error) {
    throw error;
  }
};

const findCompanyByEmail = async (email) => {
  try {
    // Tambahkan logika untuk mencari perusahaan berdasarkan email
    const result = await pool.query('SELECT * FROM "company" WHERE email = $1', [
      email,
    ]);

    return result.rows[0];
  } catch (error) {
    throw error;
  }
};

module.exports = {
  registerCompany,
  findCompanyByEmail,
};
