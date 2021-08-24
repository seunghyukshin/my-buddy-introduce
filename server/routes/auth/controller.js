/*
    POST /api/auth/login
    {
        username,
        email,
        social,
        friends,
        contents
    }
*/
import User from "../../models/user.js";

const login = (req, res) => {
  const { name, email, social, friends } = req.body;
  let newUser = null;

  const checkId = (user) => {
    if (user) {
      console.log("a");
      return User.updateToken(user, social);
    } else {
      console.log("b");
      return findByEmail(user);
    }
  };
  const findByEmail = (user) => {
    if (!email) {
      console.log("클라이언트로부터 받아온 이메일이 존재하지 않습니다.");
      // throw Error("클라이언트로부터 받아온 이메일이 존재하지 않습니다.")
      // go create
      return create();
    } else {
      console.log("c");
      return User.findOneByUserEmail(email).then(checkEmail);
    }
  };

  const checkEmail = (user) => {
    if (user) {
      console.log("d");
      return User.updateAnotherSocial(user, social);
    } else {
      // go create
      console.log("e");
      return create();
    }
  };

  const create = () => {
    console.log("f");
    return User.create(name, email, social, friends);
  };

  const respond = (count) => {
    console.log("login success");
    res.json({
      msg: "login success",
    });
  };

  const onError = (error) => {
    res.status(409).json({
      message: error.message,
    });
  };

  User.findOneBySocialId(social).then(checkId).then(respond).catch(onError);
};

export { login };
