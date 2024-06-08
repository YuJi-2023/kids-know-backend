const mongoose = require("mongoose");

const expenseSchema = mongoose.Schema({
  category: {
    type: String,
  },
  amount: {
    type: String,
  },
  date: {
    trpe: String,
  },
  description: {
    type: String,
  },
});

const ExpenseModel = mongoose.model("Expenses", expenseSchema);
module.exports = ExpenseModel;
