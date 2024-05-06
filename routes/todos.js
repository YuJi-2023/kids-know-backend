var express = require("express");
var router = express.Router();
const TodoModel = require("../models/todoModel");

/* create new todo */

router.post("/", async (req, res) => {
  try {
    const todo = await TodoModel.create(req.body);
    res.status(200).json(todo);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
