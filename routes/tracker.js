var express = require("express");
var router = express.Router();
const ExpenseModel = require("../models/expenseModel");

/* create new expense */
router.post("/", async (req, res) => {
  try {
    const newexpense = await ExpenseModel.create(req.body);
    res.status(200).json(newexpense);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
