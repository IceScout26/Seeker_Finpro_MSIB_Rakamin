const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { registerUser, findUserByEmail } = require("../models/authUserModel");

const register = async (req, res) => {
  const { email, password, name, profile_picture, city_id } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const userId = await registerUser(
      email,
      hashedPassword,
      name,
      profile_picture,
      city_id
    );

    const token = jwt.sign({ userId, email }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.status(201).json({ token });
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
      return res.status(401).json({ message: "Authentication failed" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Authentication failed" });
    }

    const token = jwt.sign({ userId: user.id, email }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.status(200).json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while logging in.");
  }
};

module.exports = {
  register,
  login,
};
