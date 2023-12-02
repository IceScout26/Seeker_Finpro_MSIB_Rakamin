// jobPostingController.js
const JobPostingModel = require("../models/jobPostingModel");

const allJobsController = async (req, res) => {
  try {
    const allJobs = await JobPostingModel.getAllJobs();
    res.status(200).json(allJobs);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

const companyJobsController = async (req, res) => {
  const companyId = req.accountId;

  try {
    const companyJobs = await JobPostingModel.getCompanyJobs(companyId);
    res.status(200).json(companyJobs);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

const specificJobController = async (req, res) => {
  const jobId = req.params.jobId;

  try {
    const job = await JobPostingModel.getSpecificJob(jobId);

    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }

    res.status(200).json(job);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

const companyPostJobController = async (req, res) => {
  const companyId = req.accountId;
  const jobData = req.body;

  try {
    const newJob = await JobPostingModel.postJob(companyId, jobData);
    res.status(201).json({
      message: 'Job successfully posted',
      job: newJob
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

const updateJobStatusController = async (req, res) => {
  const jobId = req.params.jobId;
  const newStatus = req.body.status;
  const companyId = req.accountId;

  try {
    const job = await JobPostingModel.getSpecificJob(jobId);

    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }

    if (job.company_id !== companyId) {
      return res.status(403).json({ message: "Forbidden: You do not have permission to update the status of this job." });
    }
    
    const updatedJob = await JobPostingModel.updateJobStatus(jobId, newStatus);
    res.status(200).json(updatedJob);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

const companyDeleteJobController = async (req, res) => {
  const jobId = req.params.jobId;
  const companyId = req.accountId;

  try {
    const job = await JobPostingModel.getSpecificJob(jobId);

    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }

    if (job.company_id !== companyId) {
      return res.status(403).json({ message: "Forbidden: You do not have permission to delete this job." });
    }
    const deletedJob = await JobPostingModel.deleteJob(jobId);

    if (!deletedJob) {
      return res.status(404).json({ message: "Job not found" });
    }

    res.status(200).json(deletedJob);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

const getJobByNameController = async (req, res) => {
  const name = req.params.name;

  try {
    const job = await JobPostingModel.getJobByName(name);

    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }

    res.status(200).json(job);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = {
  allJobsController,
  companyJobsController,
  specificJobController,
  companyPostJobController,
  updateJobStatusController,
  companyDeleteJobController,
  getJobByNameController,
};
