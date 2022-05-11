const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
});

const UserModel = mongoose.model("users", UserSchema);
//UserModel refer to the DB, will automaticly created in your DB in case you don't have this collection
module.exports = UserModel;
