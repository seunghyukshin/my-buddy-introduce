import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  author: String,
});

export default mongoose.model("User", userSchema);
