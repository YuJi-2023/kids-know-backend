var express = require("express");
var router = express.Router();

/* Creat new user */
router.get("/", function (req, res, next) {
  res.send("Hi, New user!");
});

module.exports = router;
