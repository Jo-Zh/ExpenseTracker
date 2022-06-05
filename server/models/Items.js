//define collection structures
const mongoose = require("mongoose");

//structures of collection
const ItemsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    required: true,
    min: "2000-01-01",
    max: "3000-01-01",
  },
});

//UserModel refer to the DB, will automaticly created in your DB
// in case you don't have this collection
const ItemsModel = mongoose.model("items", ItemsSchema);
module.exports = ItemsModel;
