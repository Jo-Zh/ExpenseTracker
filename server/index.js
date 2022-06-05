const express = require("express");
const app = express();
const mongoose = require("mongoose");

const ItemsModel = require("./models/Items");

const cors = require("cors");
app.use(cors());

app.use(express.json());

mongoose.connect("mongodb://localhost:27017/ExpenseTracker");

app.get("/getItems", (req, res) => {
  ItemsModel.find({}, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

app.post("/createItems", async (req, res) => {
  const item = req.body;
  const newItem = new ItemsModel(item);
  await newItem.save();
  res.json(item);
});

app.put("/update", async (req, res) => {
  const newTitle = req.body.title;
  const newAmount = req.body.amount;
  const _id = req.body._id;

  try {
    await ItemsModel.findById(_id, (err, itemtoUpdate) => {
      itemtoUpdate.title = newTitle;
      itemtoUpdate.amount = Number(newAmount);
      itemtoUpdate.save();
    });
  } catch (err) {
    console.log(err);
  }
  res.send("updated");
});

app.delete("/deleteItems/:id", async (req, res) => {
  ItemsModel.findByIdAndDelete(req.params.id, (err, docs) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Deleted: ", docs);
    }
  });
});

app.listen(3001, () => {
  console.log("SERVER Runs!");
});
