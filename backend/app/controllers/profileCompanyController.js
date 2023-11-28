const { getAllCompanies, getCompanyById, updateCompany } = require('../models/profileCompanyModel');

const getAllCompaniesController = async (req, res) => {
  try {
    const companies = await getAllCompanies();
    res.status(200).json(companies);
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while fetching companies data.");
  }
};

const getCompanyByIdController = async (req, res) => {
  const companyId = req.params.companyId;

  try {
    const company = await getCompanyById(companyId);

    if (!company) {
      return res.status(404).json({ message: 'Company not found' });
    }

    res.status(200).json(company);
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while fetching company data.");
  }
};

const updateCompanyController = async (req, res) => {
  const newData = req.body;
  const companyId = req.accountId;

  try {
    const updatedCompany = await updateCompany(companyId, newData);
    res.status(200).json({ message: 'Company successfully updated', company: updatedCompany });
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while updating the company.");
  }
};

module.exports = {
  getAllCompaniesController,
  getCompanyByIdController,
  updateCompanyController,
};
