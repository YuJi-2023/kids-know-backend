const mongoose = require("mongoose");

const todoSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "please enter a todo name"],
  },
  image: {
    type: String,
  },
  description: {
    type: String,
  },
  category: {
    trpe: String,
  },
});

const TodoModel = mongoose.model("Todo", todoSchema);
module.exports = TodoModel;
