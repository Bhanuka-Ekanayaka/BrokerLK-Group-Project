// userController.js
const express = require("express");
const router = express.Router();
const {
  createUser,
  getUserByEmail,
  updateLoginTime, // Import the updateLoginTime function
} = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const SECRET_KEY = "micset993150"; // Replace with a strong, random key

const registerUser = async (req, res) => {
  const { email, password, role } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const result = await createUser(email, hashedPassword, role);

    if (result.affectedRows > 0) {
      res.status(201).json({ success: true });
    } else {
      res.status(404).json({ message: "failed" });
    }
  } catch (error) {
    console.error(error.stack);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await getUserByEmail(email);

    if (!user || user.length === 0) {
      res.status(401).json({ success: false, error: "Invalid Username" });
      return;
    } else {
      bcrypt.compare(password, user[0].password, (error, result) => {
        if (error) {
          return res
            .status(402)
            .json({ success: false, error: "Invalid Password" });
        }

        if (result) {
          const token = jwt.sign({ email: user[0].email }, SECRET_KEY);
          // Correctly call the updateLoginTime function with the email
          updateLoginTime(email);
          res.status(201).json({ success: true, token });
        }
      });
    }
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
};

module.exports = { registerUser, loginUser, updateLoginTime };
