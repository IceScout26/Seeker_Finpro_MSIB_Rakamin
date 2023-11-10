const pool = require("../../config/config");

const registerUser = async (
  email,
  password,
  name,
  profile_picture,
  city
) => {
  try {
    // Tambahkan logika untuk mengeksekusi query ke database untuk mendaftarkan pengguna
    const result = await pool.query(
      'INSERT INTO "user" (email, password, name, profile_picture, city) VALUES ($1, $2, $3, $4, $5) RETURNING id',
      [email, password, name, profile_picture, city]
    );

    return result.rows[0].id;
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
