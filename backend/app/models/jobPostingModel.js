// jobPostingModel.js
const pool = require("../../config/config");

class JobPostingModel {
  static async getAllJobs() {
    try {
      const result = await pool.query('SELECT * FROM job');
      return result.rows;
    } catch (error) {
      throw error;
    }
  }

  static async getCompanyJobs(companyId) {
    try {
      const result = await pool.query('SELECT * FROM job WHERE company_id = $1', [companyId]);
      return result.rows;
    } catch (error) {
      throw error;
    }
  }

  static async getSpecificJob(jobId) {
    try {
      const result = await pool.query('SELECT * FROM job WHERE id = $1', [jobId]);
      return result.rows[0];
    } catch (error) {
      throw error;
    }
  }

  static async getJobByName(name) {
    try {
      const result = await pool.query('SELECT * FROM "job" WHERE LOWER("title") LIKE $1', [`%${name.toLowerCase()}%`]);
      return result.rows[0];
    } catch (error) {
      throw error;
    }
  }

  static async postJob(companyId, jobData) {
    const { title, description, expertise, salary, due_date } = jobData;

    try {
      const result = await pool.query(
        'INSERT INTO job (company_id, title, description, expertise, salary, due_date, status) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
        [companyId, title, description, expertise, salary, due_date, 'Open']
      );

      return result.rows[0];
    } catch (error) {
      throw error;
    }
  }

  static async updateJobStatus(jobId, newStatus) {
    try {
      const result = await pool.query(
        'UPDATE "job" SET status = $1 WHERE id = $2 RETURNING *',
        [newStatus, jobId]
      );
      return result.rows[0];
    } catch (error) {
      throw error;
    }
  }

  static async deleteJob(jobId, companyId) {
    try {
      const result = await pool.query('DELETE FROM job WHERE id = $1 RETURNING *', [jobId]);
      return result.rows[0];
    } catch (error) {
      throw error;
    }
  }
}

module.exports = JobPostingModel;

