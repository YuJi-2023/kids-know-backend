var express = require("express");
var router = express.Router();

/* GET Login page. */
router.get("/", function (req, res, next) {
  res.send("Login Page!");
});

module.exports = router;
