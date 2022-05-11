const express = require("express");
const app = express();
const mongoose = require("mongoose");
const UserModel = require("./models/Users");

const cors = require("cors");

app.use(express.json()); //convert body object to json
app.use(cors());

mongoose.connect("mongodb://localhost:27017/myApp");
//ALl API bridge connect frontend to database, API requests
app.get("/getUsers", (req, res) => {
  UserModel.find({}, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

app.post("/createUser", async (req, res) => {
  const user = req.body;
  const newUser = new UserModel(user);
  await newUser.save(); //newUser.insertOne() or newUser.insertMany()

  res.json(user);
});

app.listen(3001, () => {
  console.log("SERVER Runs!");
});
