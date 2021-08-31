import dotenv from "dotenv";
dotenv.config();

import express from "express";
import bodyParser from "body-parser";
const app = express();
app.use(express.json());

const { PORT, MONGO_URI } = process.env;
/* connect db */
import mongoose from "mongoose";
const db = mongoose.connection;
db.on("error", console.error);
db.once("open", function () {
  // CONNECTED TO MONGODB SERVER
  console.log("Connected to mongod server");
});

mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Successfully connected to mongodb"))
  .catch((e) => console.error(e));

/* router */
import api from "./routes/index.js";
app.use("/api", api);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
