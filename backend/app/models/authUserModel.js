const pool = require("../../config/config");

const registerUser = async (
  email,
  password,
  name,
  profile_picture,
  city
) => {
  try {
    const result = await pool.query(
      'INSERT INTO "user" (email, password, name, profile_picture, birthday, description, cv, city) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *',
      [
        email,
        password,
        name,
        profile_picture || 'default_profile_picture.jpg',
        '2000-01-01', 
        'No description available.', 
        'default_cv.pdf',
        city || 'Unknown City'
      ]
    );

    return result.rows[0];
  } catch (error) {
    throw error;
  }
};

const findUserByEmail = async (email) => {
  try {
    // Tambahkan logika untuk mencari pengguna berdasarkan email
    const result = await pool.query('SELECT * FROM "user" WHERE email = $1', [
      email,
    ]);

    return result.rows[0];
  } catch (error) {
    throw error;
  }
};

module.exports = {
  registerUser,
  findUserByEmail,
};
