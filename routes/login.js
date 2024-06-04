var express = require("express");
var router = express.Router();
//const bcrypt = require("bcrypt");
const UserModel = require("../models/userModel");

/* GET Login page. */
router.get("/", function (req, res, next) {
  res.send("Login Page!");
});

/* use bcrypt library to increase security!!! */

/* user login validation */
router.post("/", async (req, res) => {
  try {
    //check if user exists
    const existingUser = await UserModel.findOne({ name: req.body.name });
    if (!existingUser) {
      return res.status(400).json({ message: "No account? Sign up NOW!" });
    }
    //validate password
    const isPasswordValid = req.body.password === existingUser.password;

    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid password!" });
    }

    //successful login
    res.status(200).json({ message: "Login successfully!" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
