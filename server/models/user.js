import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  email: String,
  profileImage: String,
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

userSchema.statics.create = function (
  name,
  email,
  profileImage,
  social,
  friends
) {
  const user = new this({
    name,
    email,
    profileImage,
    social,
    friends,
  });

  return user.save();
};

userSchema.statics.updateToken = function (user, social) {
  return user
    .updateOne({
      "social.kakao.accessToken": social.kakao.accessToken,
    })
    .exec();
};

userSchema.statics.updateAnotherSocial = function (user, social) {
  return user
    .updateOne({
      "social.kakao": social.kakao,
    })
    .exec();
};

userSchema.statics.findOneByUserEmail = function (email) {
  return this.findOne({
    email,
  }).exec();
};

userSchema.statics.findOneBySocialId = function (social) {
  return this.findOne({
    "social.kakao.id": social.kakao.id,
  }).exec();
};

export default mongoose.model("User", userSchema);
