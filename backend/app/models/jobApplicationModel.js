//jobApplicationModel.js
const pool = require("../../config/config");

class ApplicationModel {
    static async getApplicationDetails(applicationId) {
        try {
          const result = await pool.query('SELECT * FROM "application" WHERE id = $1', [applicationId]);
        
          return result.rows[0];
        } catch (error) {
          throw error;
        }
      }

    static async createApplication(userId, jobId) {
        try {
            const result = await pool.query(
                'INSERT INTO "application" (user_id, job_id, status) VALUES ($1, $2, $3) RETURNING *',
                [userId, jobId, 'Pending']
            );
            return result.rows[0];
        } catch (error) {
            throw error;
        }
    }

    static async getApplicationsByUser(userId) {
        try {
            const result = await pool.query(
                'SELECT * FROM "application" WHERE user_id = $1',
                [userId]
            );
            return result.rows;
        } catch (error) {
            throw error;
        }
    }

    static async getApplicationsByJob(jobId) {
        try {
            const result = await pool.query(
                'SELECT * FROM "application" WHERE job_id = $1',
                [jobId]
            );
            return result.rows;
        } catch (error) {
            throw error;
        }
    }

    static async updateApplicationStatus(applicationId, newStatus) {
        try {
            const result = await pool.query(
                'UPDATE "application" SET status = $1 WHERE id = $2 RETURNING *',
                [newStatus, applicationId]
            );
            return result.rows[0];
        } catch (error) {
            throw error;
        }
    }

    static async deleteApplication(applicationId) {
        try {
            const result = await pool.query('DELETE FROM application WHERE id = $1 RETURNING *', [applicationId]);
            return result.rows[0];
        } catch (error) {
            throw error;
        }
    }
}

module.exports = ApplicationModel;





