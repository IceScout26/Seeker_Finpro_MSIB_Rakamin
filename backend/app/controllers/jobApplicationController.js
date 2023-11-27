//jobApplicationController.js
const ApplicationModel = require("../models/jobApplicationModel");
const JobPostingModel = require("../models/jobPostingModel");

const applyForJobController = async (req, res) => {
  const userId = req.accountId;
  const jobId = req.params.jobId;

  try {
    const application = await ApplicationModel.createApplication(userId, jobId);
    res.status(201).json(application);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

const getApplicationsByUserController = async (req, res) => {
  const userId = req.accountId;

  try {
    const applications = await ApplicationModel.getApplicationsByUser(userId);
    res.status(200).json(applications);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

const getApplicationsByJobController = async (req, res) => {
  const jobId = req.params.jobId;
  const companyId = req.accountId;

  try {
    const job = await JobPostingModel.getSpecificJob(jobId);

    if (!job || job.company_id !== companyId) {
      return res
      .status(403)
      .json({ 
        message: 
        'Forbidden: You do not have permission to access applications for this job.' 
      });
    }

    const applications = await ApplicationModel.getApplicationsByJob(jobId);

    res.status(200).json(applications);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

const updateApplicationStatusController = async (req, res) => {
  const applicationId = req.params.applicationId;
  const newStatus = req.body.status;

  try {
    const updatedApplication = await ApplicationModel.updateApplicationStatus(
      applicationId,
      newStatus
    );
    res.status(200).json(updatedApplication);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

const userDeleteApplicationController = async (req, res) => {
  const applicationId = req.params.applicationId;
  const userId = req.accountId;

  try {
    const application = await ApplicationModel.getApplicationDetails(
      applicationId
    );

    if (!application) {
      return res.status(404).json({ message: "Application not found" });
    }

    if (userId !== application.user_id) {
      return res
        .status(403)
        .json({
          message:
            "Forbidden: You do not have permission to delete this application.",
        });
    }

    const deletedApplication = await ApplicationModel.deleteApplication(
      applicationId
    );

    if (!deletedApplication) {
      return res.status(404).json({ message: "Application not found" });
    }

    res.status(200).json(deletedApplication);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

const companyDeleteApplicationController = async (req, res) => {
  const applicationId = req.params.applicationId;
  const companyId = req.accountId;

  try {
    const application = await ApplicationModel.getApplicationDetails(
      applicationId
    );

    if (!application) {
      return res.status(404).json({ message: "Application not found" });
    }

    const job = await JobPostingModel.getSpecificJob(application.job_id);

    if (!job || job.company_id !== companyId) {
      return res
        .status(403)
        .json({
          message:
            "Forbidden: You do not have permission to delete this application.",
        });
    }

    const deletedApplication = await ApplicationModel.deleteApplication(
      applicationId
    );

    if (!deletedApplication) {
      return res.status(404).json({ message: "Application not found" });
    }

    res.status(200).json(deletedApplication);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = {
  applyForJobController,
  getApplicationsByUserController,
  getApplicationsByJobController,
  updateApplicationStatusController,
  userDeleteApplicationController,
  companyDeleteApplicationController,
};
