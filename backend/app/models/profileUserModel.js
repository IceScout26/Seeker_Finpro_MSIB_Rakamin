// profileUserModel.js
const pool = require("../../config/config");

const getAllUsers = async () => {
  try {
    const result = await pool.query(`
      SELECT 
        u.id, 
        u.email, 
        u.name, 
        u.profile_picture, 
        u.birthday, 
        u.description, 
        u.cv, 
        u.city, 
        e.name as education_name,
        ex.company_name as experience_company,
        l.level as level_name,
        s.skill as skill_name
      FROM "user" u
      LEFT JOIN "education" e ON u.education_id = e.id
      LEFT JOIN "experience" ex ON u.experience_id = ex.id
      LEFT JOIN "level" l ON u.level_id = l.id
      LEFT JOIN "skill" s ON u.skill_id = s.id
    `);

    return result.rows;
  } catch (error) {
    throw error;
  }
};

const getUserById = async (userId) => {
  try {
    const result = await pool.query(`
      SELECT 
        u.id, 
        u.email, 
        u.name, 
        u.profile_picture, 
        u.birthday, 
        u.description, 
        u.cv, 
        u.city, 
        e.name as education_name,
        ex.company_name as experience_company,
        l.level as level_name,
        s.skill as skill_name
      FROM "user" u
      LEFT JOIN "education" e ON u.education_id = e.id
      LEFT JOIN "experience" ex ON u.experience_id = ex.id
      LEFT JOIN "level" l ON u.level_id = l.id
      LEFT JOIN "skill" s ON u.skill_id = s.id
      WHERE u.id = $1
    `, [userId]);

    return result.rows[0];
  } catch (error) {
    throw error;
  }
};

const updateUserProfileById = async (userId, newData) => {
  const {
    name,
    profile_picture,
    birthday,
    description,
    cv,
    city,
    education_id,
    experience_id,
    skill_id,
    level_id,
  } = newData;

  try {
    const result = await pool.query(
      'UPDATE "user" SET name = $1, profile_picture = $2, birthday = $3, description = $4, cv = $5, city = $6, education_id = $7, experience_id = $8, skill_id = $9, level_id = $10 WHERE id = $11 RETURNING *',
      [
        name,
        profile_picture,
        birthday,
        description,
        cv,
        city,
        education_id,
        experience_id,
        skill_id,
        level_id,
        userId,
      ]
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
