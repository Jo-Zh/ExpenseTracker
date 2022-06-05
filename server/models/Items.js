const mongoose = require("mongoose");

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

const ItemsModel = mongoose.model("items", ItemsSchema);

module.exports = ItemsModel;
