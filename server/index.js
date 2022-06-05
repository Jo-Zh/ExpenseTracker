const express = require("express");
// importing express library
const app = express();
// represent all express staff
// from lib, e.g. middleware, telling server start...
const mongoose = require("mongoose");
//import from lib

//below is import the model we setup in models
const ItemsModel = require("./models/Items");

//import cors from cors' lib
//allow us connect the below API to front react
const cors = require("cors");
app.use(cors());
//parse req.body json to object, need to do this
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/ExpenseTracker");
//connect to mongonDB if from Atlas
//(put the connectStr in parenthese, replace ... with the dataDB name)
//or local DB address, which here I am use

//below is ALl API requests or endpoints connecting frontend to database,
//API requests,
//.get() always with req&res. for send info to front upon request
//req: get from frontend, res:send DB info from back to front
app.get("/getItems", (req, res) => {
  //below is a DB query, no data in req, so don't need to use it
  ItemsModel.find({}, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

app.post("/createItems", async (req, res) => {
  //here will need req to store the user input data writing in to DB
  const item = req.body;
  const newItem = new ItemsModel(item);
  await newItem.save(); //newUser.insertOne() or newUser.insertMany()

  res.json(item);
});

app.listen(3001, () => {
  console.log("SERVER Runs!");
}); // tell server start
