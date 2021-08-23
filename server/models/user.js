import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  email: String,
  social: {
    kakao: {
      id: Number,
      accessToken: String,
    },
    facebook: {
      id: Number,
      accessToken: String,
    },
  },
  friends: [],
  contents: {},
});

userSchema.statics.create = function (name, email, social, friends) {
  const user = new this({
    name,
    email,
    social,
    friends,
  });

  // promise
  return user.save();
};

userSchema.statics.findOneByUsername = function (userName) {
  return this.findOne({
    userName,
  }).exec();
};

userSchema.methods.verify = function (password) {
  return this.password === password;
};

userSchema.methods.assignAdmin = function () {
  this.admin = true;
  return this.save();
};

export default mongoose.model("User", userSchema);
