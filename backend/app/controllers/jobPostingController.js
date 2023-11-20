// jobPostingController.js
const JobPostingModel = require('../models/jobPostingModel');

const allJobsController = async (req, res) => {
    try {
      const allJobs = await JobPostingModel.getAllJobs();
      res.status(200).json(allJobs);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  };

const companyJobsController = async (req, res) => {
  const companyId = req.accountId;

  try {
    const companyJobs = await JobPostingModel.getCompanyJobs(companyId);
    res.status(200).json(companyJobs);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

const specificJobController = async (req, res) => {
  const jobId = req.params.jobId;

  try {
    const job = await JobPostingModel.getSpecificJob(jobId);
    
    if (!job) {
      return res.status(404).json({ message: 'Job not found' });
    }

    res.status(200).json(job);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

const companyPostJobController = async (req, res) => {
  const jobData = req.body;
  jobData.company_id = req.accountId;

  try {
    const newJob = await JobPostingModel.postJob(jobData);
    res.status(201).json(newJob);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

const companyDeleteJobController = async (req, res) => {
  const jobId = req.params.jobId;

  try {
    const deletedJob = await JobPostingModel.deleteJob(jobId);
    
    if (!deletedJob) {
      return res.status(404).json({ message: 'Job not found' });
    }

    res.status(200).json(deletedJob);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

module.exports = {
  allJobsController,
  companyJobsController,
  specificJobController,
  companyPostJobController,
  companyDeleteJobController,
};
