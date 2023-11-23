//jobApplicationController.js
const ApplicationModel = require('../models/jobApplicationModel');

const applyForJobController = async (req, res) => {
    const userId = req.accountId;
    const jobId = req.body.jobId; //body atau params?

    try {
        const application = await ApplicationModel.createApplication(userId, jobId);
        res.status(201).json(application);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}

const getApplicationsByUserController = async (req, res) => {
    const userId = req.accountId;

    try {
        const applications = await ApplicationModel.getApplicationsByUser(userId);
        res.status(200).json(applications);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}

const getApplicationsByJobController = async (req, res) => {
    const jobId = req.params.jobId;

    try {
        const applications = await ApplicationModel.getApplicationsByJob(jobId);
        res.status(200).json(applications);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}

const updateApplicationStatusController = async (req, res) => {
    const applicationId = req.params.applicationId;
    const newStatus = req.body.status;

    try {
        const updatedApplication = await ApplicationModel.updateApplicationStatus(applicationId, newStatus);
        res.status(200).json(updatedApplication);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}

const userDeleteApplicationController = async (req, res) => {
    const applicationId = req.params.applicationId;
    const userId = req.accountId;
    try {
        const deletedApplication = await JobApplicationModel.deleteApplication(applicationId);

        if (!deletedApplication) {
            return res.status(404).json({ message: 'Application not found' });
        }

        res.status(200).json(deletedApplication);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}

const companyDeleteApplicationController = async (req, res) => {
    const applicationId = req.params.applicationId;
    const companyId = req.accountId;
    try {
        const deletedApplication = await JobApplicationModel.deleteApplication(applicationId);

        if (!deletedApplication) {
            return res.status(404).json({ message: 'Application not found' });
        }

        res.status(200).json(deletedApplication);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}

module.exports = {
    applyForJobController,
    getApplicationsByUserController,
    getApplicationsByJobController,
    updateApplicationStatusController,
    userDeleteApplicationController,
    companyDeleteApplicationController,
};
