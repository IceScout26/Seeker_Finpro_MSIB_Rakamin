const bcrypt = require("bcrypt");
const { signToken } = require('../middleware/jwtMiddleware');
const { registerUser, findUserByEmail } = require("../models/authUserModel");

const register = async (req, res) => {
  const { email, password, name, profile_picture, city } = req.body;

  try {
    const existingUser = await findUserByEmail(email);
    if (existingUser) {
      return res.status(400).json({ message: 'Email is already registered' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await registerUser(
      email,
      hashedPassword,
      name,
      profile_picture,
      city
    );
    
    res.status(201).json({ message: `User ${user.email} has been successfully registered, welcome ${user.name}!` });
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while registering the user.");
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await findUserByEmail(email);

    if (!user) {
      return res.status(401).json({ message: "Authentication failed, email doesn't exist." });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Authentication failed, password is not correct." });
    }

    const token = signToken({ accountId: user.id, role: 'user' });

    res.header('Authorization', `Bearer ${token}`).status(200).json({ message: `Welcome back, ${user.name}!`, token });
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while logging in.");
  }
};

module.exports = {
  register,
  login,
};
