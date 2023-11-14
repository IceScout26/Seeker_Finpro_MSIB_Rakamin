const bcrypt = require("bcrypt");
const { signToken } = require('../middleware/jwtMiddleware');
const { registerCompany, findCompanyByEmail } = require("../models/authCompanyModel");

const register = async (req, res) => {
  const { email, password, name, profile_picture, city } = req.body;

  try {
    const existingCompany = await findCompanyByEmail(email);
    if (existingCompany) {
      return res.status(400).json({ message: 'Email is already registered' });
    }
    
    const hashedPassword = await bcrypt.hash(password, 10);

    const company = await registerCompany(
      email,
      hashedPassword,
      name,
      profile_picture,
      city
    );
    
    res.status(201).json({ message: `Company ${company.email} has been successfully registered, welcome ${company.name}!` });
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while registering the company.");
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const company = await findCompanyByEmail(email);

    if (!company) {
      return res.status(401).json({ message: "Authentication failed" });
    }

    const isPasswordValid = await bcrypt.compare(password, company.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Authentication failed" });
    }

    const token = signToken({ accountId: company.id, role: 'company' });

    res.header('Authorization', `Bearer ${token}`).status(200).json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while logging in.");
  }
};

module.exports = {
  register,
  login,
};
