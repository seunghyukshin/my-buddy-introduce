import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  email: String,
  social: {
    kakao: {
      id: Number,
    },
    facebook: {
      id: Number,
    },
  },
  friends: [],
  contents: {},
});

export default mongoose.model("User", userSchema);
