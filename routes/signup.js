var express = require("express");
var router = express.Router();
const UserModel = require("../models/userModel");

/* greating new user */
router.get("/", function (req, res, next) {
  res.send("Hi, New user!");
});

/* create new user */
router.post("/", async (req, res) => {
  try {
    //check if user already exists
    const existingUsers = await UserModel.findOne({ name: req.body.name });
    if (existingUsers) {
      return res.status(400).json({ message: "Username already exists!" });
    }
    //otherwise, create new user
    const newuser = await UserModel.create(req.body);
    res.status(200).json(newuser);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
