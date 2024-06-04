const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "please enter an user name"],
  },
  password: {
    type: String,
    required: [true, "please enter a password"],
  }
});
const UserModel = mongoose.model("Users", userSchema);
module.exports = UserModel;