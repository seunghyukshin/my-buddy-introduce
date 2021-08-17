const express = require("express");
const app = express();

/* connect db */
const mongoose = require("mongoose");
const db = mongoose.connection;
db.on("error", console.error);
db.once("open", function () {
  // CONNECTED TO MONGODB SERVER
  console.log("Connected to mongod server");
});

mongoose.connect("mongodb://localhost:27017/my-buddy-introuce");

/* router */
const api = require("./routes/index");
app.use("/api", api);

const port = 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));
